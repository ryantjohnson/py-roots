// fade in content of page

$(function() {

    $('#guts').hide();

    $('#guts').fadeIn(1000);

    $('a.link').click(function(event) {
        event.preventDefault();
        newLocation = this.href;
        $('#guts').fadeOut(1000, newpage);
    });

    function newpage() {
        window.location = newLocation;
    };
});