var seed = Math.floor(Math.random() * 10000000000);

<<<<<<< HEAD
$(document).ready(function(){ 
	var bg = getBackground(seed);
	var name = startupify(seed);
    var slogan = makeSlogan(seed);
=======
$(document).ready(function() { 
	var name = startupify(seed);
  var bg = getBackground(seed + 1);
  var alpha = getAlpha(seed + 2, 0.2, 0.6);
  var slogan = threeVerbs(seed + 3);
>>>>>>> ea6c29b0a427dd7f240140c05cc60dc8b01aeddd
	$("#home").css("background-image", "url('" + bg + "')");
  $("#home-content").css("background", "rgba(0, 0, 0, " + alpha + ")");
	$("#logo").html(name);
    $("#cover-heading").html(slogan);
});