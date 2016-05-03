function random (seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function randomInt (seed, max, min) {
    if (!min) min = 0;
    return min + Math.floor(random(seed) * (max - min + 1));
}

function seedChoice (seed, choices) {
    return choices[Math.floor(random(seed) * choices.length)];
}

function someChoices(seed, choices, n) {
    var newChoices = choices.slice();
    var results = [];
    while (n > 0) {
        var index = Math.floor(random(seed * n + n) * newChoices.length);
        results.push(newChoices[index]);
        newChoices.splice(index, 1);
        n--;
    }
    return results;
}

function verb (seed) {
    return seedChoice(seed, verbs);
}

function noun (seed) {
    return seedChoice(seed, nouns);
}

function commonWord (seed) {
    if (random(seed) > 0.5) {
        return verb(seed);
    } else {
        return noun(seed);
    }
}

function seedChance (seed, chance) {
    return random(seed) < chance;
}

function capitalizeFirst (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function getBackground (seed) {
	return bgRoot + seedChoice(seed, backgrounds);
}

function getFont (seed) {
    var f = someChoices(seed, fonts, 5);
    var res = f[0];
    for (var i = 1; i < f.length; i++) {
        res = res + ", " + f[i];
    }
    return res;
}

function getLogoFont (seed, cursive) {
    var data = fonts.concat(logoFonts);
    if (cursive) {
        data = data.concat(cursiveFonts);
    }
    var f = someChoices(seed, data, 5);
    var res = f[0];
    for (var i = 1; i < f.length; i++) {
        res = res + ", " + f[i];
    }
    return res;
}

function getAlpha (seed, min, max) {
  if (!min) min = 0;
  if (!max) max = 1;
  var ans = (min + (random(seed) * (max - min)));
  return Math.floor(ans * 100) / 100;
}

function hslToRgb(h, s, l){
    var r, g, b;
    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, l];
}

function getColor (seed) {
    var h = random(seed * 43 + 32);
    var s = Math.min(Math.max(random(seed * 12 + 44), 0.5), .8);
    var l = Math.min(Math.max(random(seed * 65 + 21), 0.3), 0.5);
    return hslToRgb(h, s, l);
}

function getLogo (seed) {
    var logo; 
    if (random(seed) < 0.5) {
        // Use Font Awesome
        logo = seedChoice(seed, fontAwesome);
        logo = '<i class="fa ' + logo + '"></i>';
    } else {
        // Use Glyphicons
        logo = seedChoice(seed, glyphicons);
        logo = '<span class="glyphicon ' + logo + '"></span>';
    }
    return logo;
}

/**
 * Returns an array of team member's photos and stuff. 
 */
function getTeam (seed) {
    var ratio = Math.min(random(seed), random(seed * 2));
    var size = randomInt(seed * 4, 2, 8); 
    var girlCount = Math.floor(size * ratio);
    var guyCount = size - girlCount;
    var girls = someChoices(seed, females, girlCount);
    var guys = someChoices(seed, males, guyCount);
    var jobs = someChoices(seed + 1, titles, girlCount + guyCount);
    var mult = 3;
    var results = [];
    var m = 0;
    var f = 0;
    while (m < guyCount || f < girlCount) {   
        if (random(seed * mult + 1) > 0.5 && f < girlCount) {
            // Add the next girl
            var name = femaleName(seed * mult) + " " + lastName(seed * mult + 2);
            var photo = femaleRoot + girls[f];
            var job = jobs[m + f];
            results.push({'name': name, 'photo': photo, 'job': job});
            f++;
        } else if (m < guyCount) {
            // Add the next guy
            var name = maleName(seed * mult) + " " + lastName(seed * mult + 2);
            var photo = maleRoot + guys[m];
            var job = jobs[m + f];
            results.push({'name': name, 'photo': photo, 'job': job});
            m++;
        }
        mult *= 3;
    }
    return results;
}

function getPeople (seed, n) {
    var results = [];
    var i = n;
    while (i > 0) {
        results.push(femaleName(seed * i + 1) + " " + lastName(seed * i + 2));
        results.push(femaleName(seed * i + 3) + " " + lastName(seed * i + 4));
        i--;
    }
    return someChoices(seed + 5, results, n);
}

function removeLastVowel (seed) {
    var word = commonWord(seed);
    if (word.length <= 4) {
        return word;
    }
    var lastVowel = -1;
    for (var i = 0; i < word.length; i++) {
        if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u') {
            lastVowel = i;
        }
    }
    if (lastVowel > -1) {
        return word.slice(0, lastVowel) + word.slice(lastVowel + 1);
    } else {
        return word;
    }
}

function startupify (seed) {
    var results = [];
    results.push(commonWord(seed) + "r");
    results.push(commonWord(seed) + "it");
    results.push(commonWord(seed) + ".io");
    results.push(commonWord(seed) + "ly");
    results.push(commonWord(seed) + "ify");
    results.push(commonWord(seed) + "hub");
    results.push(commonWord(seed) + "y");
    results.push(commonWord(seed));
    results.push(commonWord(seed) + "me");
    results.push("you" + commonWord(seed));
    results.push(commonWord(seed) + "n");
    results.push(commonWord(seed) + "str");
    results.push(removeLastVowel(seed));
    results.push(commonWord(seed) + "Now");
    results.push(commonWord(seed) + "Link");
    results.push(commonWord(seed) + "in");
    results.push(commonWord(seed) + "able");
    results.push("Smart" + commonWord(seed));
    results.push(commonWord(seed) + capitalizeFirst(commonWord(seed + 1)));
    return capitalizeFirst(seedChoice(seed + 1, results));
}

//Here are functions to make slogans
function threeVerbs (seed) {
    var resultList = someChoices(seed, inspVerbs, 3);
    return (capitalizeFirst(resultList[0]) + ". " + capitalizeFirst(resultList[1]) + ". " + capitalizeFirst(resultList[2]) + ".");
}

function threeAdjs (seed) {
    var resultList = someChoices(seed, bizAdjs, 3);
    return (capitalizeFirst(resultList[0]) + ". " + capitalizeFirst(resultList[1]) + ". " + capitalizeFirst(resultList[2]) + ".");
}

function adjNoun (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "Your " + seedChoice(seed + 1, bizAdjs) + " " + seedChoice(seed, nouns) + ".";
    } else {
        return "Dare to " + commonWord(seed) + ".";
    }
}

function neverBefore (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "Like no other " + noun(seed) + ".";
    } else {
        return capitalizeFirst(commonWord(seed)) + " like never before.";
    }
}

function worldsMost (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "World's most " + seedChoice(seed + 1, bizAdjs) + " " + noun(seed) + ".";
    } else {
        return "The " + seedChoice(seed + 1, bizAdjs) + " way to " + verb(seed) + ".";
    }
}

function doSomethingGreat (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "The " + seedChoice(seed + 1, bizAdjs) + " " + noun(seed) + ".";
    } else {
        return capitalizeFirst(verb(seed)) + " something " + seedChoice(seed + 1, bizAdjs) + ".";
    }
}

function aShift (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "Your " + seedChoice(seed + 1, bizAdjs) + " new " + noun(seed) + ".";
    } else {
        return "We " + verb(seed) + ".";
    }
}

function madeEasy (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "The evolution of the " + noun(seed) + ".";
    } else {
        return "For those who " + verb(seed) + ".";
    }
}

function doYou (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "Your " + noun(seed) + ". " + capitalizeFirst(seedChoice(seed + 1, bizAdjs)) + ".";
    } else {
        return "Do you " + verb(seed) + "?";
    }
}

function youllNever (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "The " + noun(seed) + " you've been waiting for.";
    } else {
        var resultList = someChoices(seed, inspVerbs, 2);
        return  capitalizeFirst(resultList[0]) + ". " + capitalizeFirst(resultList[1]) + ". " + capitalizeFirst(verb(seed)) + ".";
    }
}

function doMore (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return capitalizeFirst(seedChoice(seed + 1, inspVerbs)) + " your " + noun(seed) + ".";
    } else {
        return "Start " + seedChoice(seed, gerunds) + ".";
    }
}

function ally (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return capitalizeFirst(seedChoice(seed + 1, inspGerunds)) + " your " + seedChoice(seed, nouns) + ".";
    } else {
        return capitalizeFirst(seedChoice(seed + 1, bizAdvbs)) + " " + seedChoice(seed, gerunds) + ".";
    }
}



function makeSlogan (seed) {
    var results = [];
    results.push(threeVerbs(seed));
    results.push(threeAdjs(seed));
    results.push(adjNoun(seed));
    results.push(neverBefore(seed));
    results.push(worldsMost(seed));
    results.push("We Are " + startupify(seed) + ".");
    results.push(doSomethingGreat(seed));
    results.push(aShift(seed));
    results.push(madeEasy(seed));
    results.push("Meet " + startupify(seed) + ".");
    results.push(doYou(seed));
    results.push(youllNever(seed));
    results.push(doMore(seed));
    results.push(ally(seed));
    return seedChoice(seed + 1000, results);
}

function maleName (seed) {
    var total = random(seed) * maleNameTotal;
    var i = 0;
    while (total > 0) {
        total -= maleWeights[i];
        i++
    }
    return maleNames[i];
}

function femaleName (seed) {
    var total = random(seed) * femaleNameTotal;
    var i = 0;
    while (total > 0) {
        total -= femaleWeights[i];
        i++
    }
    return femaleNames[i];
}

function lastName (seed) {
    var total = random(seed) * lastNameTotal;
    var i = 0;
    while (total > 0) {
        total -= lastWeights[i];
        i++
    }
    return lastNames[i];
}

function makeTown (seed) {
    var total = random(seed) * populationTotal;
    var i = 0;
    while (total > 0) {
        total -= populations[i];
        i++
    }
    return towns[i];
}

//Here are functions to make openers
function isRevo (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return startupify(seed) + " is revolutionizing the way people think about " + seedChoice(seed, plurals) + ".";
    } else {
        return startupify(seed) + " is why you'll never " + seedChoice(seed, verbs) + " the same way again.";
    }
}

function isLocal (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return startupify(seed) + " was created to help you find " + seedChoice(seed, plurals) + " in your area. From local " + seedChoice(seed, plurals) + " to national brands, no one knows " + seedChoice(seed, plurals) + " like " + startupify(seed) + ". No one.";
    } else {
        return startupify(seed) + " is a place for people who enjoy " + seedChoice(seed, gerunds) + " to connect. Find local " + seedChoice(seed, gerunds) + " events or just share your favorite tips and stories with others who love to " + seedChoice(seed, verbs) + ".";
    }
}

function shareAnd (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "Share your favorite " + seedChoice(seed, plurals) + " and discover new ones. With " + startupify(seed) + " you never know what you might find!";
    } else {
        return startupify(seed) + " was founded by people who love " + seedChoice(seed, gerunds) + " just like you! Enter your favorite ways to " + seedChoice(seed, verbs) + " and we'll help you fit it all in. Since we're using " + seedChoice(seed, bizAdjs) + " technologies, you can count on us next time you " + seedChoice(seed, verbs) + ".";
    }
}

function theMax (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return startupify(seed) + " is the last word in " + seedChoice(seed + 1, bizAdjs) + " " + seedChoice(seed, plurals) + ". We know you never settle for less than the best and neither do we. " + capitalizeFirst(seedChoice(seed, inspVerbs)) + " with professional grade tools and " + seedChoice(seed + 1, inspVerbs) + " your future.";
    } else {
        return capitalizeFirst(seedChoice(seed, gerunds)) + ". Everyone talks about it but only the truly " + seedChoice(seed, bizAdjs) + " are able to " + seedChoice(seed, verbs) + " day in and day out. Here at " + startupify(seed) + " we understand your commitment and want to give you what you need to take your " + seedChoice(seed, gerunds) + " to the next level.";
    }
}

function anApp (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return startupify(seed) + " is a different kind of " + seedChoice(seed, nouns) + " app.";
    } else {
        return startupify(seed) + " is a different kind of " + seedChoice(seed, gerunds) + " app.";
    }
}

function anApp (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return startupify(seed) + " is a different kind of " + seedChoice(seed, nouns) + " app.";
    } else {
        return startupify(seed) + " is a different kind of " + seedChoice(seed, gerunds) + " app.";
    }
}

function builtBy (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return capitalizeFirst(seedChoice(seed + 3, inspVerbs)) + " your niche in the " + seedChoice(seed, nouns) + " ecosystem with online branding that’s built by " + seedChoice(seed + 1, bizAdjs) + " people for " + seedChoice(seed + 2, bizAdjs) + " consumers.";
    } else {
        return capitalizeFirst(seedChoice(seed + 3, inspVerbs)) + " your niche in the " + seedChoice(seed, gerunds) + " ecosystem with online branding that’s built by " + seedChoice(seed + 1, bizAdjs) + " people for " + seedChoice(seed + 2, bizAdjs) + " consumers.";
    }
}

function intoCash (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return startupify(seed) + " is a " + seedChoice(seed + 7, bizAdjs) + " " + seedChoice(seed, nouns) + " service that makes it easy to turn your " + seedChoice(seed, plurals) + " into cash.";
    } else {
        return capitalizeFirst(seedChoice(seed + 7, inspVerbs)) + " & " + capitalizeFirst(seedChoice(seed, verbs)) + " together with your team.";
    }
}

function weUse (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "We use " + seedChoice(seed, plurals) + " to " + seedChoice(seed + 43, inspVerbs) + " things that matter.";
    } else {
        return "We're " + seedChoice(seed, gerunds) + " to " + seedChoice(seed + 43, inspVerbs) + " things that matter.";
    }
}

function gotBetter (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "Buying " + seedChoice(seed, plurals) + " just got a whole lot better…";
    } else {
        return capitalizeFirst(seedChoice(seed, gerunds)) + " just got a whole lot better…";
    }
}

function manageYour (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "Manage your organisation's " + seedChoice(seed, plurals) + " online, with our cloud software.";
    } else {
        return "Manage your organisation's " + seedChoice(seed, gerunds) + " online, with our cloud software."
    }
}

function worldsFirst (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "Introducing the world’s first " + seedChoice(seed + 6543, bizAdjs) + " " + seedChoice(seed, nouns) + ".";
    } else {
        return "You like to " + seedChoice(seed, verbs) + ". " + startupify(seed) + " does too.";
    }
}

function makeOpener (seed) {
    var results = [];
    results.push(isRevo(seed));
    results.push(isLocal(seed));
    results.push(shareAnd(seed));
    results.push(theMax(seed));
    results.push(anApp(seed));
    results.push(builtBy(seed));
    results.push(intoCash(seed));
    results.push(weUse(seed));
    results.push(gotBetter(seed));
    results.push(manageYour(seed));
    results.push(worldsFirst(seed));
    return seedChoice(seed + 999, results);
}

function makeSubDescs (seed) {
    var results = [];
    results.push("What makes " + startupify(seed) + " *? Our commitment to + pursuing excellence at every turn.");
    results.push("You know what you want, something * that doesn't hold you back. With the latest * technologies, " + startupify(seed) + " has your back.");
    results.push("Unlike our competitors, we'll always be + looking for new ways to move forward.");
    results.push(startupify(seed) + " is * from the ground up. We have * products, * prices, and most of all * service.");
    results.push(startupify(seed) + " is a different kind of startup. We know what it means to be * and will never compromise when it comes to + delivering what you need.");
    results.push("Includes everything you need, find and buy in a truly * manner.");
    results.push("Our completely * calculator ensures you'll never overpay.");
    results.push("Fits you and your * lifestyle.");
    results.push("Get a complete picture of the * landscape in as little as 60 seconds.");
    results.push("Optimize your changes for a truly * impact.");
    results.push("Be the first to see * news in your area.");
    results.push(startupify(seed) + " is inherently * and community centric. It's time for the * community to have a voice.");
    results.push("In this market, only the * survive." );
    results.push("Worried about what happens next? We've got you covered.");
    results.push("Find out what people are saying using our * tools.");
    results.push("Say goodbye to spreadsheets forever.");
    results.push("Share and collaborate with others inside and outside your organization.");
    results.push("Turn Research into a Team Sport.");
    results.push("Welcome to the next generation of * insight and engagement.");
    results.push("Build * relationships with your customers.");
    results.push("Cut through the clutter and get * results in a fresh & exciting way.");
    results.push(startupify(seed) + " is easy to use, no matter who you are.");
    results.push(startupify(seed) + " customers love the product and the company. We love them too!");
    results.push("We provide 24x7x365 support with knowledgeable " + startupify(seed) + " staff answering your requests.");
    results.push("Our * information gathering system completes the view of the customer.");
    results.push("Found in * communities throughout the world.");
    results.push("Discover 100% more * content.");
    results.push("Your * workspace evolves your ideas into finished products.");
    results.push("Simply * results for teams of all sizes.");
    results.push("Our state-of-the-art technology keeps things *.");
    results.push("Engage your customers with a * campaign.");
    results.push(startupify(seed) + " is a simple and powerful tool that automatically organizes for * results.");
    results.push("Finding a * fit just got a whole lot easier.");
    return someChoices(seed + 11, results, 3);
}

//Generators for testimonials
function thanksTo (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "Thanks to " + startupify(seed) + " we now have beautiful, " + seedChoice(seed + 4, bizAdjs) + " " + seedChoice(seed, plurals) + " every day. Our customers are happy and engagement has drastically increased. Highly recommend!";
    } else {
        return "I've been " + seedChoice(seed, gerunds) + " for 15 years and I've never seen anything like " + startupify(seed) + ". They're really something else.";
    }
}

function allMy (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "When my friends need new " + seedChoice(seed, plurals) + " there's only one word I tell them, " + startupify(seed) + ".";
    } else {
        return "As a professional in the " + seedChoice(seed, gerunds) + " industry, I tell all my new clients to start out with an account on " + startupify(seed) + ". It puts them miles ahead of the competition and makes my job that much easier!";
    }
}

function forMe (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "We’ve tried every " + seedChoice(seed, nouns) + " program available. " + startupify(seed) + " was the easiest to setup & the most effective.";
    } else {
        return capitalizeFirst(seedChoice(seed, gerunds)) + " apps are not for me. Being recommended by a friend on " + startupify(seed) + " is exactly what I need.";
    }
}

function toLearn (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "When I needed a new " + seedChoice(seed, nouns) + " my best friend told me about " + startupify(seed) + ". I gave it a try and was completely thrilled!";
    } else {
        return startupify(seed) + " is a great idea, I started " + seedChoice(seed, gerunds) + " to learn this skill set! ";
    }
}

function tinderFor (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return startupify(seed) + " is like Tinder... but for " + seedChoice(seed, plurals) + "!";
    } else {
        return startupify(seed) + " is like Tinder... but for " + seedChoice(seed, gerunds) + "!";
    }
}

function facebookFor (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return startupify(seed) + " is the Facebook of " + seedChoice(seed, plurals) + ".";
    } else {
        return startupify(seed) + " is the Facebook of " + seedChoice(seed, gerunds) + ".";
    }
}

function makeTest (seed, n) {
    var results = [];
    results.push(startupify(seed) + " was " + seedChoice(seed + 4, bizAdjs) + ", " + seedChoice(seed + 5, bizAdjs) + ", and " + seedChoice(seed + 6, bizAdjs) + ". Ten out of ten!");
    results.push("I was skeptical at first but " + startupify(seed) + " really came through. They answered all my questions and made the whole experience a plesant one.");
    results.push(thanksTo(seed));
    results.push(allMy(seed));
    results.push("One of the biggest challenges we faced after we hit our early goals was how do we stay top-of-mind and keep our users engaged? Enter " + startupify(seed) + ". Problem solved.");
    results.push(forMe(seed));
    results.push(toLearn(seed));
    results.push(startupify(seed) + " is the real deal. No doubt about it.");
    results.push("Pure and simple. You guys have nailed it.");
    results.push("I have to say this is probably the best platform I have seen of its kind.");
    results.push("Definitely recommended.  Great experience, which gave us a better perspective and helped to solve several business problems.");
    results.push(startupify(seed) + " was very useful not only in case of our project but just good basis for every business we would start in the future.");
    results.push("You shouldn’t think about whether to apply - just do it! It’s an unique opportunity to meet awesome people and change the world!");
    results.push("Once again, " + startupify(seed) + " came through. And even before estimated delivery date! Just impressive! Thank you! You’re awesome!");
    results.push(startupify(seed) + " was excellent - especially relative to other services I tried - and certainly 1000x better than the experiences I had with other providers.");
    results.push(tinderFor(seed));
    results.push(facebookFor(seed));
    results.push("I have to say I love this idea, it solved a big problem.");
    results.push("It feels good to be part of the " + startupify(seed) + " family.");
    results.push("We searched through a lot of providers and plans to find a good fit for our business. " + startupify(seed) + " made it easy to find the right fit for my business and my budget.");
    return someChoices(seed + 12, results, n);
}

function getSeedFromURL() {
    url = window.location.href;
    var n = url.lastIndexOf('?s=');
    if (n == -1 || isNaN(parseInt(url.substring(n + 3)))) {
        return "";
    }
    return url.substring(n + 3);
}

function ourSponsors(seed) {
    var results = [];
    results.push("Our Sponsors");
    results.push("Our Clients");
    results.push("Proudly Partenering With");
    results.push("As Seen On");
    results.push("Current Clients");
    return seedChoice(seed + 13, results);
}

function beTheFirst(seed) {
    var results = [];
    results.push("Be the first to try out ");
    results.push("Find out what's next at ");
    results.push("Keep up with what's happening at ");
    results.push("Learn more about ");
    results.push("Sign up for ");
    return seedChoice(seed + 14, results) + startupify(seed);
}









