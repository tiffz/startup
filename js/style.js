$(document).ready(function(){       
   var scrollStart = 0;
   var startChange = $('#cover-heading');
   var offset = startChange.offset();

   function checkScroll() { 
    scrollStart = $(this).scrollTop();
    if(scrollStart > offset.top) {
        $("#navigation").removeClass("top");
        $("#navigation").addClass("scrolled");
        $("#navigation").css("background-color", accent.setAlpha(1).rgba());
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
  $("#body").css("display", "block");
});