# startup

A random startup website generator, by Mike Bradley and Tiff Zhang.
Live at **<https://tiffzhang.com/startup/>**.

Every page load invents a company — a name, a logo, a colour scheme, a slogan,
a founding team, three testimonials — and renders a plausible landing page for
it.

---

## Run it locally

There is no build step. It is static HTML, CSS and JavaScript, and it runs from
any file server:

```sh
python3 -m http.server 8000
# then open http://localhost:8000/
```

Opening `index.html` directly with `file://` mostly works but is not worth the
trouble — the CDN scripts and relative image paths behave better over HTTP.

There is nothing to install: jQuery and Bootstrap 3 come from CDNs, everything
else is in this repo.

## The one idea: everything is seeded

This is the thing to understand before changing anything.

The generator is **deterministic**. A seed goes in, the same startup comes out,
every time. `js/generators.js` has a seeded PRNG (`random(seed)`) and every
choice in the app derives from it — `randomInt`, `seedChoice`, `someChoices`,
`seedChance` all take a seed and return the same answer for the same number.

The seed lives in the URL as `?s=`. `js/main.js` reads it on load and, **if it
is missing, redirects to the same page with a freshly generated one**:

```js
var gotSeed = getSeedFromURL();
if (gotSeed == "") {
  location.href = currentSite + "?s=" + seed;
}
```

Two things follow, and both matter:

- **A startup has a permanent address.** `?s=424242` is always the same
  company. That is what makes a generated page shareable.
- **Different parts of one page use _offset_ seeds** — `seed + 1` for the
  background, `seed * 4` for the accent colour, `seed * 7` for the logo font.
  Changing an offset changes every existing URL's output. Adding a new element?
  Use an offset nothing else uses.

**When you change a word list, every existing link changes too.** `seedChoice`
indexes into the array, so inserting an item at the front reshuffles everything
after it. Appending is the gentler edit.

## Layout

```
index.html          The page. One document; sections are shown or restyled by JS.
css/default.css     Bootstrap-ish base
css/custom.css      This site's own styling
js/generators.js    Seeded PRNG + every "pick me a random X" helper (~660 lines)
js/data.js          The word lists, colour palettes, font lists, image indexes
js/data/*.js        First and last name lists, split out for size
js/startup.js       The `Startup` object: name, accent colour, complement, logo
js/main.js          Wires a `Startup` into the DOM on ready
js/style.js         Scroll behaviour for the sticky nav
img/bg/             Hero backgrounds, numbered `1.jpg`..
img/team/f, m/      Team member photos, by apparent gender, with `big/` variants
```

`js/data.js` is where most content edits belong. `js/generators.js` is where
the logic lives. `js/main.js` is the only file that touches the DOM for
content.

## Removal requests

**Two denylists exist, and honouring them is part of maintaining this.** People
and companies do occasionally write in, and the generator can produce a real
company's name by coincidence:

```js
// js/data.js
var realStartupsThatAskedToBeRemoved = ["tameify", "trustify"];       // lowercase
var realPeopleThatAskedToBeRemoved   = ["danielle dentz", ...];       // lowercase
```

Add the name **in lowercase** and it is skipped. `js/startup.js` and
`js/main.js` both walk the seed forward until the generated name is not on the
list, so a blocked name quietly becomes the next one instead of erroring.

Note this shifts that seed's output — an old shared link to a removed name now
resolves to a different company. That is the intended trade.

## Deploying

**GitHub Pages serves the `gh-pages` branch, not `main`.**

```
build type : legacy (branch-based, not Actions)
source     : gh-pages, path /
serves     : https://tiffzhang.com/startup/
```

So a change merged to `main` **does not go live**. It has to reach `gh-pages`
as well, and the two branches are kept in sync by hand.

This is a trap worth removing. GitHub Pages can serve the default branch
directly: **Settings → Pages → Build and deployment → Branch: `main`**. After
that, `gh-pages` can be deleted and merging is the whole deploy. Until someone
does that, remember the second step.

## Analytics

The page sends to Google Analytics 4, measurement ID `G-25C3B5B84M` — the
`tiffzhang.com` data stream.

It previously used Universal Analytics (`UA-53388207-2`), which **silently
stopped working**. Google decommissioned UA collection and
`www.google-analytics.com/analytics.js` now returns an empty file, so
`ga('send', 'pageview')` pushed into a queue that nothing ever drained. The tag
was still there in the page source, looking fine, recording nothing. If you
ever wonder whether a tag works, watch the network for a `/g/collect` request
rather than reading the HTML.

One configuration detail is specific to this app. Because every visit has a
unique `?s=` seed, GA4 would otherwise record a separate page path per visitor
and no page would ever show more than one view. So `page_location` is pinned to
the bare path and the seed is sent as its own parameter:

```js
gtag('config', 'G-25C3B5B84M', {
  page_location: window.location.origin + window.location.pathname,
  startup_seed: new URLSearchParams(window.location.search).get('s') || 'none'
});
```

To see `startup_seed` in reports it has to be registered once in GA4:
**Admin → Custom definitions → Create custom dimension**, scope Event,
parameter `startup_seed`.

## Making a change

1. Run it locally and reload a few times — the output is random, so one look
   proves very little.
2. Pin a seed (`?s=1`, `?s=424242`) when you want to compare before and after.
3. Check a few seeds, not one. A generator bug is usually "one branch in
   twenty looks wrong", which a single reload will not show you.
4. Remember `main` is not what is deployed (above).
