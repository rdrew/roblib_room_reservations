(function ($) { 

	//$("#lower-level").attr("aria-hidden", "false");
	//$(".tabs-title:nth-of-type(1)").addClass("is-active");
	//$("#lower-level").addClass("is-active");
        //    var html = $('.panelContainer #lower-level .hours-column:first-child').html();
	let $tab_class = '#lower-level';
        $current_path = drupalSettings.path.currentPath;
        if($current_path.includes('online')) {
            $tab_class = '#online-room'
        }
	$($tab_class).attr("aria-hidden", "false");
	$(".tabs-title:nth-of-type(1)").addClass("is-active");
	$($tab_class).addClass("is-active");
            var html = $('.panelContainer ' + $tab_class + ' .hours-column:first-child').html();
            var insertColumn = '<div class="grid-column hours-column insert">' + html + '</div>'; 
		console.log(html);
		console.log(insertColumn);
	 targetColumns = [ '.hours-column:nth-of-type(10)', 
                              '.hours-column:nth-of-type(20)' ];
                            //  '.hours-column:nth-of-type(21)', 
                            //'#lower-computers .hours-column:nth-of-type(28)',
                            //'#lower-computers .hours-column:nth-of-type(35)',
                            //'#lower-computers .hours-column:nth-of-type(42)',
                            //'#upper-tables .hours-column:nth-of-type(28)',
                            //'#upper-tables .hours-column:nth-of-type(35)',
                            //'#upper-carrels .hours-column:nth-of-type(28)',
                            //'#upper-carrels .hours-column:nth-of-type(35)',
                            //'#upper-carrels .hours-column:nth-of-type(42)',
                            //'#upper-carrels .hours-column:nth-of-type(49)',
                            //'#upper-carrels .hours-column:nth-of-type(56)' ];
	  $.each(targetColumns, function (index, value) {
                $(value).after(insertColumn);
            });
})(jQuery);

