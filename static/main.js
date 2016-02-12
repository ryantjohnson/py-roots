// fade in content of page

$(function() {

    $('#guts').hide();

    $('#guts').fadeIn(700);

    $('a.link').click(function(event) {
        event.preventDefault();
        newLocation = this.href;
        $('#guts').fadeOut(700, newpage);
    });

    function newpage() {
        window.location = newLocation;
    };
});