$('.interface').on('click', function(){
    // console.log('es');
    // console.log(this);
    // console.log($(this));
    // console.log($(this).attr('class'));
    if($(this).hasClass('orange')){
        // $('body').toggleClass('orange');
        // $('body').css('background-color', "orange");
        // $('body').css({
        //     'background-color': "orange",
        // });
        $('body').attr('class', 'orange');
    }

    if($(this).hasClass('green')){
        $('body').attr('class', 'green');
    }

    if($(this).hasClass('increase')){
        $('.text').animate({
            "font-size": "+=2"
        }, 500);
    }

    if($(this).hasClass('move')){
        $('.text').animate({
            "left": "+=5px",
            'letter-spacing':  "+=2px"
        });
    }

})