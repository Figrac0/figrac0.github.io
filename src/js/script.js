const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
});

const counters = document.querySelectorAll(".skills__ratings-counter"),
    lines = document.querySelectorAll(".skills__ratings-line span");

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function () {
    function updateTextColorAndDivider() {
        var windowHeight = $(window).height();
        var promoOffsetTop = $(".promo").offset().top;
        var promoHeight = $(".promo").outerHeight();
        var promoOffsetBottom = promoOffsetTop + promoHeight;
        var scrollTop = $(window).scrollTop();
        var sidepanelTextOffsetTop = $(".sidepanel__text").offset().top;
        var sidepanelTextHeight = $(".sidepanel__text").outerHeight();
        var sidepanelTextOffsetBottom =
            sidepanelTextOffsetTop + sidepanelTextHeight;
        var sidepanelDividerOffsetTop = $(".sidepanel__divider").offset().top;
        var sidepanelDividerHeight = $(".sidepanel__divider").outerHeight();
        var sidepanelDividerOffsetBottom =
            sidepanelDividerOffsetTop + sidepanelDividerHeight;

        var spanMiddle = sidepanelTextOffsetTop + sidepanelTextHeight / 2;

        if (spanMiddle >= promoOffsetTop && spanMiddle <= promoOffsetBottom) {
            $(".sidepanel__text span").css("color", "#FFA501");
        } else {
            $(".sidepanel__text span").css("color", "black");
        }

        if (
            sidepanelDividerOffsetBottom >= promoOffsetTop &&
            sidepanelDividerOffsetBottom <= promoOffsetBottom
        ) {
            $(".sidepanel__divider").css("background-color", "#FFA501");
        } else {
            $(".sidepanel__divider").css("background-color", "#000");
        }

        var svgIcons = $(".sidepanel__link svg");

        svgIcons.each(function () {
            var iconOffsetTop = $(this).offset().top;
            var iconOffsetBottom = iconOffsetTop + $(this).outerHeight();

            if (
                iconOffsetBottom >= promoOffsetTop &&
                iconOffsetTop <= promoOffsetBottom
            ) {
                $(this).find("path").css("stroke", "rgba(255, 165, 1, 0.6)");
            } else {
                $(this).find("path").css("stroke", "none");
            }
        });
    }

    $(window).on("load scroll", function () {
        updateTextColorAndDivider();
    });
});

// menu
// hamburger
// scroll
// другие обработчики

(function () {
    const gallerySelector = '[data-lightbox="achievements"]';
    const items = Array.from(document.querySelectorAll(gallerySelector));

    if (!items.length) return;

    const root = document.getElementById("achievementsLightbox");
    if (!root) return;

    const imgEl = root.querySelector(".achievements-lightbox__img");
    const captionEl = root.querySelector(".achievements-lightbox__caption");

    let activeIndex = 0;

    function openAt(index) {
        activeIndex = (index + items.length) % items.length;

        const btn = items[activeIndex];
        const src = btn.getAttribute("data-src");
        const title = btn.getAttribute("data-title") || "";

        imgEl.setAttribute("src", src);
        imgEl.setAttribute("alt", title);
        captionEl.textContent = title;

        root.classList.add("active");
        root.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function close() {
        root.classList.remove("active");
        root.setAttribute("aria-hidden", "true");
        imgEl.removeAttribute("src");
        imgEl.setAttribute("alt", "");
        captionEl.textContent = "";
        document.body.style.overflow = "";
    }

    function next() {
        openAt(activeIndex + 1);
    }

    function prev() {
        openAt(activeIndex - 1);
    }

    items.forEach((btn, idx) => {
        btn.addEventListener("click", () => openAt(idx));
    });

    root.addEventListener("click", (e) => {
        const t = e.target;

        if (t && t.matches("[data-close='1']")) close();
        if (t && t.matches("[data-next='1']")) next();
        if (t && t.matches("[data-prev='1']")) prev();
    });

    document.addEventListener("keydown", (e) => {
        if (!root.classList.contains("active")) return;

        if (e.key === "Escape") close();
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
    });
})();
