var seed = Math.floor(Math.random() * 10000000000);

var accent;

$(document).ready(function() { 
	var name = startupify(seed);
  var bg = getBackground(seed + 1);
  
  var shadowAlpha = getAlpha(seed + 3, 0.3, 0.8);
  var shadowSize = randomInt(seed + 4, 300, 50);
  var slogan = makeSlogan(seed);
  var openerText = makeOpener(seed);
  var logo = getLogo(seed * 2);
  accent = getColor(seed * 4);

  if (seedChance(seed * 243 * 9, 0.3)) {
  	// Generate a flat color
  	$("#home-content").css("background", accent);
  } else {
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
});