(function(win, doc, $) {
    'use strict';

    // find all targets and wrap appropriately
    function highlight(targets) {
        var $targets = $(targets);
        $targets.each(function() {
            $(this).addClass('highlight-spanned').wrapInner('<span class="highlight-span"></span>');
        });
    }

    // call on aritcle body with h3 and h4 as targets
    var $articleSubHeads = $('#wikiArticle h3, #wikiArticle h4');
    highlight($articleSubHeads);

})(window, document, jQuery);
