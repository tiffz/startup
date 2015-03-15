var seed = Math.floor(Math.random() * 10000000000);



$(document).ready(function() { 
	var name = startupify(seed);
  var bg = getBackground(seed + 1);
  var bgAlpha = getAlpha(seed + 2, 0.2, 0.6);
  var shadowAlpha = getAlpha(seed + 3, 0.3, 0.8);
  var shadowSize = randomInt(seed + 4, 300, 50);
  var slogan = makeSlogan(seed);
  var logo = getLogo(seed * 2);
  var accent = getColor(seed * 4);

  var team = getTeam(seed * 8);
  var i = 0;
  $("#team .team").each(function () {
    if (i < team.length) {
      var member = team[i];
      $(this).find("img").attr("src", member.photo);
      $(this).find("h2").html(member.name);
      $(this).find("p").html(member.name);
      i++;
    } else {
      $(this).hide();
    }
  });

	$("#home").css("background-image", "url('" + bg + "')");
  $("#home").css("box-shadow", "inset 0 0 " + shadowSize + "px rgba(0,0,0, " + shadowAlpha + ")");
  $("#home-content").css("background", "rgba(0, 0, 0, " + bgAlpha + ")");
	$("#logo").html(logo + " " + name);
    $("#cover-heading").html(slogan);
});