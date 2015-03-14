var seed = Math.floor(Math.random() * 10000000000);

$(document).ready(function() { 
	var name = startupify(seed);
  var bg = getBackground(seed + 1);
  var alpha = getAlpha(seed + 2, 0.2, 0.6);
  var slogan = threeVerbs(seed + 3);
	$("#home").css("background-image", "url('" + bg + "')");
  $("#home-content").css("background", "rgba(0, 0, 0, " + alpha + ")");
	$("#logo").html(name);
    $("#cover-heading").html(slogan);
});