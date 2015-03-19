var seed = Math.floor(Math.random() * 10000000000);

var accent;
var navTop;
var topColor = "#fff";

$(document).ready(function() { 
	var name = startupify(seed);
  var bg = getBackground(seed + 1);
  
  var shadowAlpha = getAlpha(seed + 3, 0.3, 0.8);
  var shadowSize = randomInt(seed + 4, 300, 50);
  var slogan = makeSlogan(seed);
  var subHeadings = someChoices(seed, bizAdjs, 3);
  var subHeadingAdvbs = someChoices(seed, bizAdvbs, 3);
  var openerText = makeOpener(seed);
  var logo = getLogo(seed * 2);
  var navColoredAtTop = seedChance(seed * 243 * 243, 0.3);
  accent = getColor(seed * 4);
  navTop = setAlpha(accent, 0);
  var headerSize = Math.max(randomInt(seed * 3 + 1, 10, 4), 
  	randomInt(seed * 3 + 2, 9, 4));
  var headerWeight = Math.max(randomInt(seed * 5 + 1, 11, 1), 
  	randomInt(seed * 5 + 2, 11, 1));
  var headerSpacing = randomInt(seed * 5 + 2, 40, -40) / 10;
  var headerFont = getFont(seed * 7);
  var font = getFont(seed * 11);

  document.title = name ;

  $("body").css("font-family", font);

  $("#cover-heading").css("font-family", headerFont);
  $("#cover-heading").css("font-size", headerSize + "rem");
  $("#cover-heading").css("font-weight", headerWeight * 100);
  $("#cover-heading").css("letter-spacing", headerSpacing);

  if (seedChance(seed * 3 + 17, 0.5)) {
  	$("#opener").css("font-weight", "bold");
	}

	if (seedChance(seed * 5 + 17, 0.1)) {
		$("#cover-heading").css("font-style",  "italic");
	}

	if (seedChance(seed * 5 + 18, 0.1)) {
		$("#cover-heading").css("text-transform",  "lowercase");
	} else if (seedChance(seed * 5 + 18, 0.2)) {
		$("#cover-heading").css("text-transform",  "capitalize");
	} else if (seedChance(seed * 5 + 18, 0.25)) {
		$("#cover-heading").css("text-transform",  "capitalize");
		$("#cover-heading").css("font-variant",  "small-caps");
	}


  $(".btn-default").css("background-color", accent);

  if (navColoredAtTop) {
  	var navAlpha = getAlpha(seed * 243 * 243 * 9, 0.8, 1);
  	if (seedChance(seed * 243 * 243 * 3, 0.3)) {
  		navTop = setAlpha(accent, navAlpha);
  		topColor = "#ffffff";
  	} else {
  		navTop = setAlpha("#ffffff", navAlpha);
  		topColor = darkenColor(accent, randomInt(seed * 243 * 243 * 27, 80), navAlpha);
  	}
  	$("#home-text-wrapper").css("margin-top", "30px")
  } else if (seedChance(seed * 243 * 9, 0.6)) {
  	var stripAlpha = getAlpha(seed * 243 * 243 * 3, 0, 0.3);
  	$("#home-text-wrapper").css("background-color", setAlpha("#ffffff", stripAlpha));
  	$("#home-text-wrapper").css("padding", "15px 0");
  }

  if (seedChance(seed * 243 * 9, 0.4)) {
  	// Generate a flat color
  	$("#home-content").css("background", accent);
  	if (seedChance(seed * 243 * 81, 0.6)) {
  		var bgAlpha = getAlpha(seed * 243 * 27, 0.4, 1);
  		// Overlay a subtle background on top
  		$("#home .before").css("background-image", "url('" + bg + "')");
  		$("#home-content").css("background", setAlpha(accent, bgAlpha));
  	}

  	$("#home .btn-default").css("background-color", darkenColor(accent, 40));
  } else {
  	// Generate an image
	  var bgAlpha = getAlpha(seed * 243 * 27, 0.2, 0.6);
	  var bgOverlay = "rgba(0, 0, 0, " + bgAlpha + ")";
	  if (seedChance(seed * 3, 0.1)) {
	    bgOverlay = "url('img/misc/diag/" + seedChoice(seed * 9, diagonals) + "')";
	  }

	  if (seedChance(seed * 81, 0.3)) {
	  	var grayAlpha = getAlpha(seed * 27, 0, 1);
	  	$("#home .before").css("filter", "grayscale(" + grayAlpha + ")");
	  	$("#home .before").css("-webkit-filter", "grayscale(" + grayAlpha + ")");

	  }

	  if (seedChance(seed * 243, 0.1)) {
	  	var blur = randomInt(seed * 243 * 3, 0, 8);
	  	$("#home .before").css("filter", 
	  		$("#home .before").css("filter") + " blur(" + blur + "px)");
	  	$("#home .before").css("-webkit-filter", 
	  		$("#home .before").css("-webkit-filter") +  " blur(" + blur + "px)");
	  }

	  $("#home .before").css("background-image", "url('" + bg + "')");
	  $("#home").css("box-shadow", "inset 0 0 " + shadowSize + "px rgba(0,0,0, " + shadowAlpha + ")");
	  $("#home-content").css("background", bgOverlay);

	  if (!navColoredAtTop && seedChance(seed * 243 * 243 * 81, 0.3)) {
	  	var stripAlpha = getAlpha(seed * 243 * 243 * 3, 0.2, 0.7);
	  	$("#home-text-wrapper").css("background-color", setAlpha("#000000", stripAlpha));
	  	$("#home-text-wrapper").css("padding", "15px 0");
	  }

	}


  var team = getTeam(seed * 8);
  var i = 0;
  $("#team .team").each(function () {
    if (i < team.length) {
      var member = team[i];
      $(this).find("img").attr("src", member.photo);
      $(this).find("h2").html(member.name);
      $(this).find("p").html(member.job);
      i++;
    } else {
      $(this).hide();
    }
  });

  $("#navigation").css("background", accent);
	$("#logo").html(logo + " " + name);
  $("#cover-heading").html(slogan);
  $("#opener").html(openerText);
  $("#subHeading1").html(capitalizeFirst(subHeadings[0]));
  $("#subHeading2").html(capitalizeFirst(subHeadings[1]));
  $("#subHeading3").html(capitalizeFirst(subHeadings[2]));
});