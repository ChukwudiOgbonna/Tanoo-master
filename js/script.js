$(document).ready(function() {
    $('#cart').click(function() {
        
    });
    $('#searche').click(function(){
        $(this).hide();
        $('#search-container').slideDown('fast');
    });

    $('#search_close').click(function(){
        
        $('#search-container').slideUp('fast', function(){
            $('#searche').show();
        });
    });
})