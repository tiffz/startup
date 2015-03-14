function random (seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

var seed = Math.floor(Math.random() * 10000000000);

$(document).ready(function(){ 
	var bg = getBackground(seed);
	var name = startupify(seed + 1);
    var slogan = threeVerbs(seed + 2);
	$("#home").css("background-image", "url('" + bg + "')");
	$("#logo").html(name);
    $("#cover-heading").html(slogan);
});