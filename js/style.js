$(document).ready(function(){       
   var scrollStart = 0;
   var startChange = $('#cover-heading');
   var offset = startChange.offset();
    if (startChange.length) {
	   $(document).scroll(function() { 
	      scrollStart = $(this).scrollTop();
	      if(scrollStart > offset.top) {
            $("#navigation").removeClass("top");
	          $("#navigation").addClass("scrolled");
            $("#navigation").css("background-color", changeAlpha(
              $("#navigation").css("background-color"), 1));
	       } else {
	          $("#navigation").removeClass("scrolled");
            $("#navigation").addClass("top");
            $("#navigation").css("background-color", changeAlpha(
              $("#navigation").css("background-color"), 0));
	       }
	   });
    }
});

function changeAlpha(color, alpha) {
  return 'rgba(' + parseInt(color.slice(-6,-4),16) + ',' 
          + parseInt(color.slice(-4,-2),16) + ',' 
          + parseInt(color.slice(-2),16) + ', ' 
          + alpha + ')';
}
