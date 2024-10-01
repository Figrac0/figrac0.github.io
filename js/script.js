    const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    const counters = document.querySelectorAll('.skills__ratings-counter'),
        lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });


    $(document).ready(function() {
        // Функция для обновления цвета текста и разделителя
        function updateTextColorAndDivider() {
            var windowHeight = $(window).height();
            var promoOffsetTop = $('.promo').offset().top;
            var promoHeight = $('.promo').outerHeight();
            var promoOffsetBottom = promoOffsetTop + promoHeight;
            var scrollTop = $(window).scrollTop();
            var sidepanelTextOffsetTop = $('.sidepanel__text').offset().top;
            var sidepanelTextHeight = $('.sidepanel__text').outerHeight();
            var sidepanelTextOffsetBottom = sidepanelTextOffsetTop + sidepanelTextHeight;
            var sidepanelDividerOffsetTop = $('.sidepanel__divider').offset().top;
            var sidepanelDividerHeight = $('.sidepanel__divider').outerHeight();
            var sidepanelDividerOffsetBottom = sidepanelDividerOffsetTop + sidepanelDividerHeight;
    
            // Вычисляем середину span'a
            var spanMiddle = sidepanelTextOffsetTop + sidepanelTextHeight / 2;
    
            // Проверяем, если середина span'a находится в пределах секции promo
            if (spanMiddle >= promoOffsetTop && spanMiddle <= promoOffsetBottom) {
                $('.sidepanel__text span').css('color', '#FFA501');
            } else {
                $('.sidepanel__text span').css('color', 'black');
            }
    
            // Проверяем, если верхняя граница разделителя достигает нижней границы секции promo
            if (sidepanelDividerOffsetBottom >= promoOffsetTop && sidepanelDividerOffsetBottom <= promoOffsetBottom) {
                $('.sidepanel__divider').css('background-color', '#FFA501');
            } else {
                $('.sidepanel__divider').css('background-color', '#000');
            }
    
            // Проверяем, если SVG-иконки находятся в пределах секции promo
            var svgIcons = $('.sidepanel__link svg');
    
            svgIcons.each(function() {
                var iconOffsetTop = $(this).offset().top;
                var iconOffsetBottom = iconOffsetTop + $(this).outerHeight();
    
                if (iconOffsetBottom >= promoOffsetTop && iconOffsetTop <= promoOffsetBottom) {
                    $(this).find('path').css('stroke', 'rgba(255, 165, 1, 0.6)'); // менее насыщенный оранжевый цвет
                } else {
                    $(this).find('path').css('stroke', 'none');
                }
            });
        }
        
        // Вызываем функцию при загрузке страницы и при скролле
        $(window).on('load scroll', function() {
            updateTextColorAndDivider(); 
        });
    });
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    





