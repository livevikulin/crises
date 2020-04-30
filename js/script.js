$( document ).ready(function() {
    $('body').on('click', '.more__toggle', function(){
        $(this).parents('.more').find('.more__content').slideToggle();
        $(this).parents('.more').toggleClass('open');
        if($(this).parents('.more').hasClass('open')){
            $(this).text('Скрыть список');
        } else {
            $(this).text('Раскрыть список');
        }
    })

    $(document).one('mouseleave', function(e){
        if (e.clientY < 0) {
            $('.modal').addClass('open');
        }     
    });

    $('body').on('click', '[data-modal]', function(){
        let modalName = $(this).data('modal');
        $('.modal#' + modalName + '').addClass('open');
        $('html').addClass('fixedBody');
    })

    function closeModal(){
        $('.modal__close').parents('.modal').removeClass('open');
        $('html').removeClass('fixedBody');
    }

    $('body').on('click', '.modal__close', function(){
        closeModal();
    })

    jQuery(function($){
        $(document).mouseup(function (e){
            var div = $(".modal__wrap");
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                closeModal();
            }
        });
    });

    var $page = $('html, body');
    $('a.anchor-link[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
    
    if (document.body.clientWidth > 1024) {
	
		function parallax (event) {
			
			this.querySelectorAll('.parallax').forEach(planet => {
			
				let speed = planet.getAttribute('data-speed'),
					mouseMove = `translate(${event.clientX * speed / 750}px, ${event.clientY * speed / 750}px)`;
				
				planet.style.transform = mouseMove;
				
			});
		}
		
		document.addEventListener('mousemove', parallax);

    };
    
    new WOW().init();
    

});