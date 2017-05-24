$(document).ready(function() {

    /* DatePicker */
    $('.dateFilter').datepicker();

    /* Select2*/
    $(".chosen").select2({
        minimumResultsForSearch: Infinity
    });

    /* hide-left-panel */
    $('.hide-left-panel').on( "click", function() {
      $('.graph-chart-builder').toggleClass('sidebar-hidden');
    });

});
