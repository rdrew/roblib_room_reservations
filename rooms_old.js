(function ($) { 

	$("#room-lower-level").attr("aria-hidden", "false");
	$(".tabs-title:nth-of-type(1)").addClass("is-active");
	$("#room-lower-level").addClass("is-active");
    Drupal.behaviors.addTimeColumn = {
        attach: function (context, settings) {

		//get the time slot column
            html = $('.panelContainer #room-lower-level .hours-column:first-child').html();
		console.log(html);
		// wrap that column in an insertable div
            insertColumn = '<div class="grid-column xhours-column insert">' + html + '</div>'; 
		console.log(insertColumn);

		// list the columns to have the time list inserted before
            targetColumns = [ '.hours-column:nth-of-type(10)', 
                              '.hours-column:nth-of-type(20)',
                              '.hours-column:nth-of-type(21)',
                              '#lower-computers .hours-column:nth-of-type(28)',
                              '#lower-computers .hours-column:nth-of-type(35)',
                              '#lower-computers .hours-column:nth-of-type(42)',
                              '#upper-tables .hours-column:nth-of-type(28)',
                              '#upper-tables .hours-column:nth-of-type(35)',
                              '#upper-carrels .hours-column:nth-of-type(28)',
                              '#upper-carrels .hours-column:nth-of-type(35)',
                              '#upper-carrels .hours-column:nth-of-type(42)',
                              '#upper-carrels .hours-column:nth-of-type(49)',
                              '#upper-carrels .hours-column:nth-of-type(56)' ];

          //  $.each(targetColumns, function (index, value) {
          //      $(value).after(insertColumn);
           // });
            $('.hours-column:nth-of-type(10)').after(html);
            //$('.hours-column:nth-of-type(14)').after(insertColumn);
            //$('.hours-column:nth-of-type(21)').after(insertColumn);
            //$('#upper-carrels .hours-column:nth-of-type(28)').after(insertColumn);
            //$('#upper-carrels .hours-column:nth-of-type(35)').after(insertColumn);
            //$('#upper-carrels .hours-column:nth-of-type(42)').after(insertColumn);
            //$('#upper-carrels .hours-column:nth-of-type(49)').after(insertColumn);
            //$('#upper-carrels .hours-column:nth-of-type(56)').after(insertColumn);
            //$('#upper-tables .hours-column:nth-of-type(28)').after(insertColumn);
            //$('#upper-tables .hours-column:nth-of-type(35)').after(insertColumn);
            $('.room-info.room-info-heading').remove();
        }
    };

})(jQuery);

