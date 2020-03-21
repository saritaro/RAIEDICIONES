$(document).ready(function(){
    var imgItems = $('.slider li').length; // numero de slides
    var imgPos = 1;

    //agregamos la paginación
    for(i = 1; i<= imgItems; i++){
        $('.paginas').append('<li><span class="far fa-circle"></span></li>');
    }

    // menu desplegable
    $('.menu li:has(ul)').click(function(e){
        e.preventDefault();

        if($(this).hasClass('activado')){
            $(this).removeClass('activado');
            $(this).children('ul').slideUp();

        }else{
            $('.menu li ul').slideUp();
            $('.menu li').removeClass('activado');
            $(this).addClass('activado');
            $(this).children('ul').slideDown();
        }

    })

    $('.slider li').hide(); // ocultamos las img
    $('.slider li:first').show(); //mostramos la primera
    $('.paginas li:first').css({'color':'#037c8a'}); // damos colores a la primera img

    //funciones
    $('.paginas li').click(pagination);
    $('.right span').click(nextSlider); // delante
    $('.left span').click(prevSlider); //detrás

    setInterval(function(){
        nextSlider() }, 4000);


    function pagination(){
        var paginationPos = $(this).index()+1; //posición de la pag seleccionada
        $('.slider li').hide();
        $('.slider li:nth-child('+paginationPos+')').fadeIn(); //mostramos la img seleccionada

        // le damos estilos
        $('.paginas li').css({'color':'#fff'});
        $(this).css({'color':'#037c8a'});

        imgPos = paginationPos;
    }

    function nextSlider(){
        if(imgPos >= imgItems){
            imgPos=1
        }else{
            imgPos++;
        }
        // le damos estilos
        $('.paginas li').css({'color':'#fff'});
        $('.paginas li:nth-child('+imgPos+')').css({'color':'#037c8a'});

        $('.slider li').hide();
        $('.slider li:nth-child('+imgPos+')').fadeIn(); //mostramos la img seleccionada
    }

    function prevSlider(){
        if(imgPos <= 1){
            imgPos= imgItems;
        }else{
            imgPos--;
        }
        // le damos estilos
        $('.paginas li').css({'color':'#fff'});
        $('.paginas li:nth-child('+imgPos+')').css({'color':'#037c8a'});

        $('.slider li').hide();
        $('.slider li:nth-child('+imgPos+')').fadeIn(); //mostramos la img seleccionada
    }

});
