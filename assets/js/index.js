$(() => {
    // Sliders

    let roomsSlider = new Swiper(".rooms__slider", {
        direction: "horizontal",
        slidesPerView: 1.2,

        navigation: {
            nextEl: '.rooms__slider-btn_next',
            prevEl: '.rooms__slider-btn_prev',
        },

        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
            },
            1100: {
                slidesPerView: 4,
            },
        },
    });

    let hallsSlider = new Swiper(".halls__mobile-slider", {
        direction: "horizontal",
        slidesPerView: 1.2,

        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
            },
            1100: {
                slidesPerView: 4,
            },
        },
    });

    let eventSlider = new Swiper(".events__slider", {
        direction: "horizontal",
        slidesPerView: 1,

        navigation: {
            nextEl: '.events__slider-btn_next',
            prevEl: '.events__slider-btn_prev',
        },
    });

    let infoSlider = new Swiper(".info-slider__slider", {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 20,

        navigation: {
            nextEl: '.info-slider__btn_next',
            prevEl: '.info-slider__btn_prev',
        },
    });

    let journalSlider = new Swiper(".journal__slider", {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 32,

        navigation: {
            nextEl: '.journal__slider-btn_next',
            prevEl: '.journal__slider-btn_prev',
        },

        breakpoints: {
            991: {
                slidesPerView: 2,
            },
        },
    });

    let feedbackSlider = new Swiper(".feedbacks__slider", {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 32,

        navigation: {
            nextEl: '.feedbacks__slider-btn_next',
            prevEl: '.feedbacks__slider-btn_prev',
        },
    });

    let roomSlider = new Swiper(".service-slider__slider", {
        direction: "horizontal",
        slidesPerView: 1,

        navigation: {
            nextEl: '.service-slider__slider-btn_next',
            prevEl: '.service-slider__slider-btn_prev',
        },

        pagination: {
            el: ".service-slider__pagination",
        },
    });

    let roomSliderMobile = new Swiper(".service-slider__slider_mobile", {
        direction: "horizontal",
        slidesPerView: 1,

        navigation: {
            nextEl: '.service-slider__slider-btn_next',
            prevEl: '.service-slider__slider-btn_prev',
        },

        pagination: {
            el: ".service-slider__pagination_mobile",
        },
    });

    let recommendedSlider = new Swiper(".recommended__slider", {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 32,

        navigation: {
            nextEl: '.recommended__slider-btn_next',
            prevEl: '.recommended__slider-btn_prev',
        },
    });

    // Animations

    $(".header__language-btn").click(event => {
        let current = $(event.currentTarget);
        current.next().slideToggle(300);
        current.toggleClass("header__language-btn_active");
    });

    $(".header__language-btn + .drop-down .drop-down__btn").click(event => {
        let text = $(event.currentTarget).text();
        $(".header__language-btn").text(text);
    });

    $(".drop-down-btn").click(event => {
        let current = $(event.currentTarget);

        if (current.next().hasClass("drop-down")) {
            current.next().slideToggle(300);
        }   else {
            current.find(".drop-down").slideToggle(300);
        }

        current.toggleClass("drop-down-btn_active");
    });

    $(".input-group_drop-down .input-group__btn").click(event => {
        let current = $(event.currentTarget);
        let dropDown = current.parent().find(".drop-down");
        
        current.parent().toggleClass("input-group_active");
        dropDown.slideToggle(300);

        return false;
    });

    $(".drop-down__btn").click(event => {
        let group = $(event.currentTarget).parent().parent().parent();
        let text = $(event.currentTarget).text();
        group.find(".input-group__btn").text(text);

        return false;
    });

    $(".mobile-menu").hide();

    $(".header__mobile-btn").click(event => {
        let current = $(event.currentTarget);

        $(".mobile-menu").slideToggle(500);
        $("body").toggleClass("hidden");
        current.toggleClass("header__mobile-btn_active");

        if (current.hasClass("header__mobile-btn_active")) {
            current.html(`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.5999 32.9668L19.9999 22.3501L9.39987 32.9668L7.0332 30.6001L17.6499 20.0001L7.0332 9.40011L9.39987 7.03345L19.9999 17.6501L30.5999 7.05011L32.9499 9.40011L22.3499 20.0001L32.9499 30.6001L30.5999 32.9668Z" fill="#50535C" />
                <path d="M33.3327 33.3334L6.66602 6.66675M33.3327 6.66675L6.66602 33.3334" stroke="#50535C" stroke-width="2" stroke-linecap="round" />
            </svg>`);
        }   else {
            current.html(`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 28.3334H35M5 20.0001H35M5 11.6667H35" stroke="#50535C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`);
        }
    });

    $(".mobile-menu__list-item_drop-down").click(event => {
        let current = $(event.currentTarget);
        let dropDown = current.find(".mobile-menu__list");
        current.toggleClass("mobile-menu__list-item_active");
        dropDown.slideToggle(300);
    });

    $(".rent-form__btn").click(event => {
        $(".rent-form").animate({
            "height": ["toggle", "swing"],
        });
        return false;
    });

    if ($(".main").hasClass("main_margin-top")) {
        let height = $('.header').height();
        $(".main").css("padding-top", `${height}px`);
    }

    $(".service-chars__mobile-tab-open").click((event) => {
        let hidden = $(event.target).next();
        let tab = $(event.target).parent();
        let tabs = tab.parent();

        tab.toggleClass("service-chars__mobile-tab_active");
        hidden.slideToggle(300);

        console.log(tab, tabs);

        tabs.find(".service-chars__mobile-tab").not(tab).removeClass("service-chars__mobile-tab_active");
        tabs.find(".service-chars__mobile-tab-hidden").not(hidden).slideUp(300);
    });

    $(".service-chars__tab-btn").click((event) => {
        let tabs = $(event.target).closest("header").next().find(".service-chars__tab");
        let buttons = $(event.target).closest(".service-chars__tab-buttons").find(".service-chars__tab-btn");
        let data = $(event.target).attr("data-tab");

        tabs.each((tab) => {
            let current = tabs.eq(tab);
            if (current.attr("data-tab") === data) {
                tabs.not(current).slideUp(300);
                current.slideDown(300);
            }
        });

        buttons.each((btn) => {
            let current = buttons.eq(btn);
            if (current.attr("data-tab") === $(event.target).attr("data-tab")) {
                buttons.not(buttons.eq(btn)).removeClass("service-chars__tab-btn_active");
                buttons.eq(btn).addClass("service-chars__tab-btn_active");
            }
        });
    });

    $(".service-description__add-open-btn").click((event) => {
        $(event.target).next().slideToggle(300);
        $(event.target).toggleClass("service-description__add-open-btn_active");
    });
});