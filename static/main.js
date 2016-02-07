$(function() {

    var newHash      = "",
        $mainContent = $("#main-content"),
        $pageWrap    = $("#page-wrap"),
        baseHeight   = 0,
        $el;
        
    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();
    
    $(window).bind('hashchange', function(){
    
        newHash = window.location.hash.substring(1);
        
        if (newHash) {
            $mainContent
                .find("#guts")
                .fadeOut(400, function() {
                    $mainContent.hide().load(newHash + " #guts", function() {
                        $mainContent.fadeIn(400, function() {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                        $("nav a").removeClass("current");
                        $("nav a[href='"+newHash+"']").addClass("current");
                    });
                });
        };
        
    });
    
    $(window).trigger('hashchange');

});