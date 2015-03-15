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
        var index = Math.floor(random(seed + n) * newChoices.length);
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

function getColor (seed) {
    return seedChoice(mainColors, seed);
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
    var mult = 3;
    var results = [];
    var m = 0;
    var f = 0;
    while (m < guyCount || f < girlCount) {   
        if (random(seed * mult + 1) > 0.5 && f < girlCount) {
            // Add the next girl
            var name = femaleName(seed * mult) + " " + lastName(seed * mult + 2);
            var photo = femaleRoot + girls[f];
            results.push({'name': name, 'photo': photo});
            f++;
        } else if (m < guyCount) {
            // Add the next guy
            var name = maleName(seed * mult) + " " + lastName(seed * mult + 2);
            var photo = maleRoot + guys[m];
            results.push({'name': name, 'photo': photo});
            m++;
        }
        mult *= 3;
    }
    return results;
}

function removeLastVowel (seed) {
    var word = commonWord(seed);
    if (word.length <= 4) {
        return word;
    }
    var lastVowel = -1;
    for (var i = 0; i < word.length; i++) {
        if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u' || word[i] == 'y') {
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
    results.push(commonWord(seed) + "ly");
    results.push(commonWord(seed) + "ify");
    results.push(commonWord(seed) + "hub");
    results.push(commonWord(seed) + "y");
    results.push(commonWord(seed));
    results.push(commonWord(seed) + "me");
    results.push("you" + commonWord(seed));
    results.push(commonWord(seed) + "rific");
    results.push(commonWord(seed) + "n");
    results.push(commonWord(seed) + "str");
    results.push(removeLastVowel(seed));
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


//do you verb?
//verb noun. verb noun. site verb site noun.

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

