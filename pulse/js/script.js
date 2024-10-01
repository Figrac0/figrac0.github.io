//SLIK_SLIDER
$(document).ready(function(){  
    $('.carousel__inner').slick({
        infinite: true,
         //чтобы двигалась беск
        //slidesToShow: 3,
         //сколько слайдов на экране 
        //slidesToScroll: 3
         //сколько слайдов пролистываем
        //dots: true,
          //кружочки(навигация)
        speed: 1200,
          //скорость переключения слайдов 
        adaptiveHeight: true,
         //картинки разной высоты( автоматически подстраивается )
        autoplay: true,
         //автопереключение
        autoplaySpeed: 2000,
         //автопереключение(скорость)
        //fade: true,
         //проявление следующей картинки
        //cssEase: 'linear',
         //характер поведения анимации(linear-равномерно)
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]

      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab__active)', function() {
        $(this)
          .addClass('catalog__tab__active').siblings().removeClass('catalog__tab__active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      }); 

      // $('.catalog-item__link').each(function(i) {
      //   $(this).on('click', function(e){
      //     e.preventDefault();
      //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      //   })
      // })

      // $('.catalog-item__back').each(function(i) {
      //   $(this).on('click', function(e){
      //     e.preventDefault();
      //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      //   })
      // })

      function toggleSlide(item){
        $(item).each(function(i) {
          $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
        })
      };

      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');

      //modals
      $('[data-modals=consultation]').on('click', function(){
        $('.overlay,#consultation').fadeIn('slow');
      });
      $('.modals__close').on('click',function(){
        $('.overlay,#consultation,#thanks,#order').fadeOut('slow');
      });

      $('.button_mini').each(function(i){
        $(this).on('click', function(){
          $('#order .modals__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay,#order').fadeIn('slow');

        })
      });

      function validateForms (form){
        $(form).validate({
          rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите своё имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
              },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введён адрес почты"
            }
        }
        });
      };

      validateForms('#consultation-form');
      validateForms('#consultation form');
      validateForms('#order form');

      //mask
      $('input[name=phone]').mask("+7 (999) 999-99-99");

      //если форма будет пустой, то не будет отправляться 
      // if (!$(this).valid()){
      //   return;
      //   }

        
      $('form').submit(function(e) {
        e.preventDefault();
        if (!$(this).valid()){
        return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    // Smooth scroll and pageup

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
          $('.pageup').fadeIn();
      } else {
          $('.pageup').fadeOut();
      }
  });

  $("a[href=#up]").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top});
      return false;
  });

  new WOW().init();
  });

  


//TINY-SLIDER
// const slider = tns({
//   container: '.carousel__inner',
//   //  запускаем слайдер на нужном сайте 
//   items: 1,
//   slideBy: 'page',
//   autoplay: true,
//   controls: false,
//   nav: false,
//   autoplayButtonOutput: false,
//   responsive: {
//     // media
//     900: {
//       items: 1
//     }
//   }
// });
// document.querySelector('.prev').addEventListener( 'click', function () {
//   slider.goTo('prev');
// });

// document.querySelector('.next').addEventListener( 'click', function () {
//   slider.goTo('next');
// });