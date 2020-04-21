$(document).ready(function() {

    // hide all but the first of our paragraphs
    $('.some-container p:not(:first)').hide();

    $('.pagination').jqPagination({
        max_page    : $('.some-container p').length,
        paged        : function(page) {

            // a new 'page' has been requested

            // hide all paragraphs
            $('.some-container p').hide();

            // but show the one we want
            $($('.some-container p')[page - 1]).show();

        }
    });

});​