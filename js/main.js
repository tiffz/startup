var seed = Math.floor(Math.random() * 10000000000);



$(document).ready(function() { 
	var name = startupify(seed);
  var bg = getBackground(seed + 1);
  var alpha = getAlpha(seed + 2, 0.2, 0.6);
  var slogan = makeSlogan(seed);
  var logo = getLogo(seed);

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
  $("#home-content").css("background", "rgba(0, 0, 0, " + alpha + ")");
	$("#logo").html(logo + " " + name);
    $("#cover-heading").html(slogan);
});