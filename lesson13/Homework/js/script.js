$( document ).ready( function() {
    $('a[href="#sheldure"]').on('click', function() {
        console.log(this);
        showModal();
    });
    
    $('a[href="#tour"]').on('click', function() {
        console.log(this);
        showModal();
    });

    $('.contact').on('click', function() {
        console.log(this);
        showModal();
    });

    $('.close').on('click', function () {
        $('.overlay').fadeOut(500);
        $('.modal').slideUp( "slow");
    })

    function showModal() {
        $('.overlay').fadeIn(500);
        $('.modal').slideDown( "slow");
    };
});