function random (seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function seedChoice (seed, choices) {
    return choices[Math.floor(random(seed) * choices.length)];
}

function someChoices(seed, choices, n) {
    var newChoices = choices.slice();
    var results = [];
    while (n > 0) {
        var index = Math.floor(random(seed + n) * newChoices.length);
        results.push(newChoices[index]);
        newChoices.splice(index, 1);
        n--;
    }
    return results;
}

var bgRoot = "img/bg/";

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

function capitalizeFirst (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function getBackground (seed) {
	return bgRoot + seedChoice(seed, backgrounds);
}

function getAlpha (seed, min, max) {
  if (!min) min = 0;
  if (!max) max = 1;
  var ans = (min + (random(seed) * (max - min)));
  return Math.floor(ans * 100) / 100;
}

function startupify (seed) {
    var results = [];
    results.push(commonWord(seed) + "r");
    results.push(commonWord(seed) + "it");
    results.push(commonWord(seed) + "ly");
    results.push(commonWord(seed) + "ify");
    results.push(commonWord(seed) + "hub");
    results.push(commonWord(seed) + "y");
    results.push(commonWord(seed));
    results.push(commonWord(seed) + "me");
    results.push("you" + commonWord(seed));
    results.push(commonWord(seed) + "erific");
    results.push(commonWord(seed) + "rific");
    results.push(commonWord(seed) + "n");
    return capitalizeFirst(seedChoice(seed + 1, results));
}

function threeVerbs (seed) {
    var resultList = someChoices(seed, inspVerbs, 3);
    return (capitalizeFirst(resultList[0]) + ". " + capitalizeFirst(resultList[1]) + ". " + capitalizeFirst(resultList[2]) + ".");
}

function threeAdjs (seed) {
    var resultList = someChoices(seed, bizAdjs, 3);
    return (capitalizeFirst(resultList[0]) + ". " + capitalizeFirst(resultList[1]) + ". " + capitalizeFirst(resultList[2]) + ".");
}

function makeSlogan (seed) {
    var results = [];
    results.push(threeVerbs(seed));
    results.push(threeAdjs(seed));
    results.push("We Are " + startupify(seed));
    return seedChoice(seed, results);
}