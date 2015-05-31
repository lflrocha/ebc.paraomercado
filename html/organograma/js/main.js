


$(document).ready(function() {
	

    $('.mosaic-block').live({
        mouseenter:
        function(){
            $(this).children('.mosaic-overlayblue').animate({bottom:'0px'}, 300);
	
        },
        mouseleave:        
        function(){
            $(this).children('.mosaic-overlayblue').animate({bottom:'-150px'}, 300);
        }
		
    });
	
	$('.mosaic-block').live({
        mouseenter:
        function(){
            $(this).children('.mosaic-overlayred').animate({bottom:'0px'}, 300);
	
        },
        mouseleave:        
        function(){
            $(this).children('.mosaic-overlayred').animate({bottom:'-150px'}, 300);
        }
		
    });

	$('.mosaic-block').live({
        mouseenter:
        function(){
            $(this).children('.mosaic-overlaygreen').animate({bottom:'0px'}, 300);
	
        },
        mouseleave:        
        function(){
            $(this).children('.mosaic-overlaygreen').animate({bottom:'-150px'}, 300);
        }
		
    });

	$('.mosaic-block').live({
        mouseenter:
        function(){
            $(this).children('.mosaic-overlayyellow').animate({bottom:'0px'}, 300);
	
        },
        mouseleave:        
        function(){
            $(this).children('.mosaic-overlayyellow').animate({bottom:'-150px'}, 300);
        }
		
    });

	

	$(".fancy").fancybox({
		maxWidth	: 520,
		maxHeight	: 400,
		width		: '100%',
		height		: '100%',
		autoSize	: false,
		closeClick	: true,
		openEffect	: 'fade',
		closeEffect	: 'fade',		
	});

  // get the action filter option item on page load
  var $filterType = $('#filter li.active a').attr('class');
	
  // get and assign the ourHolder element to the
	// $holder varible for use later
  var $holder = $('ul.image-grid');

  // clone all items within the pre-assigned $holder element
  var $data = $holder.clone();

  // attempt to call Quicksand when a filter option
	// item is clicked
	$('#filter li a').click(function(e) {
		// reset the active class on all the buttons
		$('#filter li').removeClass('active');
		
		// assign the class of the clicked filter option
		// element to our $filterType variable
		var $filterType = $(this).attr('class');
		$(this).parent().addClass('active');
		
		if ($filterType == 'all') {
			// assign all li items to the $filteredData var when
			// the 'All' filter option is clicked
			var $filteredData = $data.find('li');
            var $sortedData = $filteredData;
		} 
		else {
			// find all li elements that have our required $filterType
			// values for the data-type element
			var $filteredData = $data.find('li[data-type=' + $filterType + ']');
            var $sortedData = $filteredData.sorted({
              by: function(v) {
                return parseFloat($(v).find('span').text());
              }
            });

			
		}
		
		// call quicksand and assign transition parameters
		$holder.quicksand($sortedData, {
			duration: 600,
			easing: 'easeInOutCubic',
			adjustHeight: 'false'
		});
		return false;
	});
});


(function($) {
  $.fn.sorted = function(customOptions) {
    var options = {
      reversed: false,
      by: function(a) { return a.text(); }
    };
    $.extend(options, customOptions);
    $data = $(this);
    arr = $data.get();
    arr.sort(function(a, b) {
      var valA = options.by($(a));
      var valB = options.by($(b));
      if (options.reversed) {
        return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;				
      } else {		
        return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;	
      }
    });
    return $(arr);
  };
})(jQuery);