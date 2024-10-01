/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
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
counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
//val-mask
$(document).ready(function () {
  const phoneInputField = document.querySelector("#phone");
  const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "ru",
    // Начальная страна
    preferredCountries: ["ru"],
    // Предпочтительные страны
    separateDialCode: true
  });
  $('input[name=phone]').mask(" (999) 999-99-99");
  $('input[name=phone]').on('input', function () {
    const numDigits = $(this).val().replace(/\D/g, '').length;
    if (numDigits < 10) {
      this.setCustomValidity('Минимальное количество цифр: 10');
    } else {
      this.setCustomValidity('');
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const sidepanel = document.getElementById('sidepanel');
  const promo = document.getElementById('promo');

  // Функция обратного вызова для Intersection Observer
  const observerCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sidepanel.classList.remove('sidepanel--hidden');
      } else {
        sidepanel.classList.add('sidepanel--hidden');
      }
    });
  };

  // Создание Intersection Observer
  const observer = new IntersectionObserver(observerCallback, {
    root: null,
    // Использовать область просмотра как корень
    threshold: 0 // Триггер, как только один пиксель будет виден
  });

  // Наблюдение за секцией promo
  observer.observe(promo);
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 1600) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});
$("a[href=#up]").click(function () {
  const _href = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(_href).offset().top
  });
  return false;
});
new WOW().init();
/******/ })()
;
//# sourceMappingURL=script.js.map