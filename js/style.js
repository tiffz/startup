$(document).ready(function(){       
   var scrollStart = 0;
   var startChange = $('#about');
   var offset = startChange.offset();
    if (startChange.length) {
	   $(document).scroll(function() { 
	      scrollStart = $(this).scrollTop();
	      if(scrollStart > offset.top) {
	          $("#navigation").addClass("scrolled");
	       } else {
	          $('#navigation').removeClass("scrolled");
	       }
	   });
    }
});