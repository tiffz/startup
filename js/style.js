$(document).ready(function(){       
   var scrollStart = 0;
   var startChange = $('#cover-heading');
   var offset = startChange.offset();

   function checkScroll() { 
    scrollStart = $(this).scrollTop();
    if(scrollStart > offset.top) {
        $("#navigation").removeClass("top");
        $("#navigation").addClass("scrolled");
        $("#navigation").css("background-color", setAlpha(accent, 1));
        $("#navigation a").css("color", "#fff");
     } else {
        $("#navigation").removeClass("scrolled");
        $("#navigation").addClass("top");
        $("#navigation").css("background-color", navTop);
        $("#navigation a").css("color", topColor);
     }
   }

   checkScroll();

   if (startChange.length) {
	   $(document).scroll(checkScroll);
   }
});

function setAlpha(color, alpha) {
  return 'rgba(' + parseInt(color.slice(-6,-4),16) + ',' 
          + parseInt(color.slice(-4,-2),16) + ',' 
          + parseInt(color.slice(-2),16) + ', ' 
          + alpha + ')';
}

function darkenColor(color, amount, alpha) {
  if (!alpha) alpha = 1;
  return 'rgba(' + zeroFloor(parseInt(color.slice(-6,-4),16) - amount) + ',' 
          + zeroFloor(parseInt(color.slice(-4,-2),16) - amount) + ',' 
          + zeroFloor(parseInt(color.slice(-2),16) - amount) + ', ' + alpha + ')';
}

function zeroFloor(num) {
  return Math.max(num, 0);
}
