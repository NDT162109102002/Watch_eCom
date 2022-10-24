function owlslide(e, t, o, a, i, s, l, n, r, d, c, u) {
    return {
        items: e,
        autoplay: o,
        autoplayTimeout: 2500,
        smartSpeed: 1e3,
        loop: e > 1,
        nav: e > d && i,
        dots: e > d && a,
        autoplayHoverPause: !0,
        margin: t,
        lazyLoad: !0,
        navText: [""],
        animateIn: c,
        animateOut: u,
        responsive: {
            0: {
                items: s,
                margin: t,
                autoplay: e > s && o,
                nav: e > s && i,
                dots: e > s && a
            },
            479: {
                items: l,
                margin: t,
                autoplay: e > l && o,
                nav: e > l && i,
                dots: e > l && a
            },
            767: {
                items: n,
                margin: t,
                autoplay: e > n && o,
                nav: e > n && i,
                dots: e > n && a
            },
            991: {
                items: r,
                margin: t,
                autoplay: e > r && o,
                nav: e > r && i,
                dots: e > r && a
            },
            1199: {
                items: d,
                margin: t,
                autoplay: e > d && o,
                nav: e > d && i,
                dots: e > d && a
            }
        }
    }
}

function validateEmail(e) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.toLowerCase())
}
$(window).load((function() {
    $((function() {
        $("img.lazy").lazyload({
            effect: "fadeIn"
        })
    })), $(".owl-carousel").on("changed.owl.carousel", (function(e) {
        $(this).find("img.lazy").lazyload({
            effect: "fadeIn",
            effectTime: 0
        })
    }))
})), $(document).ready((function() {
    $((function() {
        $(window).scroll((function() {
            $(this).scrollTop() >= 800 ? $("#bttop").fadeIn() : $("#bttop").fadeOut()
        })), $("#bttop").click((function() {
            event.preventDefault(), $("body,html").animate({
                scrollTop: 0
            }, 1600)
        }))
    })), $((function() {
        $(".noidung img").attr("data-lightbox", "roadtrip");
        var e = 0;
        $(".noidung img").each((function() {
            var t = $(this).attr("src");
            $(this).parent().is("a") ? $(this).parent("a").attr("href") === t && $(this).parent("a").attr({
                class: "example-image-link countimg" + e,
                "data-lightbox": "example-1"
            }) : ($('<a class="example-image-link countimg' + e + '" href="' + t + '" data-lightbox="example-1"></a>').insertBefore($(this)), $(".countimg" + e).append($(this)));
            e++
        })), lightbox.option({
            resizeDuration: 200,
            wrapAround: !0
        })
    })), $(".openList").click((function() {
        $("#commonHead").toggleClass("active"), $(".openList").toggleClass("ac")
    })), $("#overlay").click((function() {
        $("#commonHead").toggleClass("ac"), $(".openList").toggleClass("ac")
    })), $(".openSub").click((function() {
        $(this).next("ul").slideToggle(), $(this).toggleClass("ac"), $(this).parent("li").toggleClass("ac")
    }))
})), $(window).resize((function() {})), $(document).ready((function() {
    $("#slide").owlCarousel(owlslide($("#slide").find(">*").size(), 10, !0, !0, !1, 1, 1, 1, 1, 1, "fadeIn", "fadeOut")), $("#star .group").owlCarousel(owlslide($("#star .group").find(">*").size(), 25, !0, !1, !0, 2, 3, 3, 4, 4, "", "")), $(".product .group.slide3").owlCarousel(owlslide($(".product .group.slide3").find(">*").size(), 0, !0, !1, !0, 2, 3, 4, 4, 4, "", ""));
    var e = $(window).width();
    e > 767 ? ($(".product .group.slide").owlCarousel(owlslide($(".product .group.slide").find(">*").size(), 30, !0, !1, !0, 2, 3, 4, 5, 5, "", "")), $(".product .group.slide2").owlCarousel(owlslide($(".product .group.slide2").find(">*").size(), 20, !0, !1, !0, 2, 3, 2, 3, 3, "", ""))) : $("#footer .titleHead").click((function() {
        $(this).hasClass("active") ? ($("#footer .titleHead").removeClass("active"), $(this).nextAll().hide()) : ($("#footer .titleHead ~*").hide(), $(this).nextAll().fadeToggle(), $("#footer .titleHead").removeClass("active"), $(this).addClass("active"))
    })), e <= 1199 && $(".otherPro.slideRes .group").owlCarousel(owlslide($(".otherPro.slideRes .group").find(">*").size(), 20, !0, !1, !0, 2, 3, 3, 3, 3, "", "")), jQuery(".tabs .tab-links a").on("click", (function(e) {
        var t = jQuery(this).attr("href");
        jQuery(".tabs " + t).addClass("active").siblings().removeClass("active"), jQuery(this).parent("li").addClass("active").siblings().removeClass("active"), e.preventDefault()
    })), $(".openSubOrder").click((function() {
        $(this).hasClass("active") ? ($(this).removeClass("active"), $(".function .sub").slideUp()) : ($(".function .sub").slideUp(), $(".openSubOrder").removeClass("active"), $(this).next(".sub").slideDown(), $(this).addClass("active"))
    })), $(".closeSub").click((function() {
        $(".function .sub").slideUp(), $(".openSubOrder").removeClass("active")
    })), $(".product .xemthem").click((function() {
        $(this).parent(".btnXemthem").prev(".group").toggleClass("active"), $(this).parent(".btnXemthem").addClass("active")
    })), $(".filterLogo .group .viewMore").click((function() {
        $(this).parents(".group").toggleClass("active"), $(this).toggleClass("active")
    })), $("#product .detailPro .imgLarge").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        fade: !0,
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        asNavFor: "#product .detailPro .imgSmall",
        lazyLoad: "ondemand"
    }), $("#product .detailPro .imgSmall").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: !0,
        asNavFor: "#product .detailPro .imgLarge",
        dots: !1,
        centerMode: !1,
        focusOnSelect: !0,
        nextArrow: '<i class="fas fa-chevron-down"></i>',
        prevArrow: '<i class="fas fa-chevron-up"></i>',
        lazyLoad: "ondemand",
        vertical: !0,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 991,
            settings: {
                vertical: !0,
                slidesToShow: 4
            }
        }, {
            breakpoint: 767,
            settings: {
                vertical: !0,
                slidesToShow: 3
            }
        }, {
            breakpoint: 479,
            settings: {
                slidesToShow: 3
            }
        }]
    })
}));