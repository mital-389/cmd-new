// document.addEventListener("DOMContentLoaded", function (e) {
//     function t(e, t) {
//         return (" " + e.className + " ").indexOf(" " + t + " ") > -1
//     }

//     window.onclick = function () {
//         for (var e = document.getElementsByClassName("selectbox-options"), t = 0; t < e.length; t++) e[t].setAttribute("class", "selectbox-options selectbox-options--hidden")
//     };
//     for (var s = document.getElementsByClassName("justselect"), n = 0; n < s.length; n++) {
//         s[n].required = !0, s[n].onchange = function () {
//             var e = document.getElementsByClassName("selectbox__label"), t = this.value, s = this.dataset.sid,
//                 n = this.options;
//             for (a = 0; a < e.length; a++) if (e[a].parentElement.dataset.pair === s) {
//                 for (b = 0; b < n.length; b++) if (n[b].value == t) {
//                     e[a].innerHTML = n[b].innerHTML;
//                     break
//                 }
//                 break
//             }
//         };
//         var o = s[n].options, l = document.createElement("div");
//         l.setAttribute("class", "selectbox"), l.setAttribute("data-pair", "select-" + (n + 1));
//         var i = document.createElement("div");
//         i.setAttribute("class", "selectbox__label"), l.appendChild(i);
//         var c = document.createElement("div");
//         c.setAttribute("class", "selectbox-options selectbox-options--hidden");
//         for (var r = 0; r < o.length; r++) {
//             var d = document.createElement("div");
//             d.setAttribute("class", "selectbox__option"), d.setAttribute("data-value", o[r].value), !0 === o[r].selected && (d.setAttribute("class", d.className + " selectbox__option--selected"), i.innerHTML = o[r].text), o[r].disabled || (d.innerHTML = o[r].text, c.appendChild(d), l.appendChild(c))
//         }
//         !function (e, t) {
//             e.parentNode.insertBefore(t, e.nextSibling)
//         }(s[n], l), s[n].setAttribute("data-sid", "select-" + (n + 1)), s[n].style.display = "none"
//     }
//     for (var u = document.getElementsByClassName("justselect"), p = 0; p < u.length; p++) {
//         var m = document.createElement("div");
//         m.setAttribute("class", "justwrap");
//         var h = document.getElementsByClassName("selectbox");
//         u[p].parentElement.insertBefore(m, u[p]), h[p].parentElement.insertBefore(m, h[p]), m.appendChild(u[p]), m.appendChild(h[p])
//     }
//     for (var v = document.getElementsByClassName("selectbox__label"), x = 0; x < v.length; x++) v[x].onclick = function (e) {
//         e.stopPropagation();
//         var s = this, n = this.nextSibling, o = n.children;
//         t(n, "selectbox-options--hidden") ? n.setAttribute("class", "selectbox-options") : n.setAttribute("class", "selectbox-options selectbox-options--hidden");
//         for (var a = 0; a < o.length; a++) o[a].onclick = function () {
//             for (var e = 0; e < o.length; e++) e != a && o[e].setAttribute("class", "selectbox__option");
//             s.innerHTML = this.innerHTML, this.setAttribute("class", "selectbox__option selectbox__option--selected"), document.querySelectorAll('[data-sid="' + s.parentElement.dataset.pair + '"]')[0].value = this.dataset.value, n.setAttribute("class", "selectbox-options selectbox-options--hidden")
//         }
//     }
// });

$(document).ready(function () {

    $('.rte img').addClass(
        function(){
            var floated = $(this).css('float');
            return floated ? 'img-' + floated : '';
        });

    if($(window).width() <= 767) {
        $('.footer-col h5').click(function () {
            $(this).next().slideToggle(200);
            $(this).toggleClass('active');
        })

        $('.product-gallery').slick({
            arrows: false,
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        });
    }

    $('.cta-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        fade: true
    });

    $('.menu-opener').click(function () {
        $('.side-navigation').addClass('active');
        $('.overlay').addClass('active');
        $('body').addClass('nav-active');
    });
    $('.search-icon a').click(function () {
        $('.search-box').addClass('active');
    });
    $('.opensizechart').click(function () {
        $('.size-chart').addClass('active');
        $('.overlay').addClass('active');
        $('body').addClass('chart-active');
    });
    $('#add-to-giftcard').click(function () {
        $('.giftcard-box').addClass('active');
        $('.overlay').addClass('active');
        $('body').addClass('gift-active');
    });

    $('.overlay, .close-btn').click(function () {
        $('.side-navigation').removeClass('active');
        $('.overlay').removeClass('active');
        $('.size-chart').removeClass('active');
        $('body').removeClass('chart-active');
        $('body').removeClass('nav-active');
        $('body').removeClass('search-active');
        $('body').removeClass('gift-active');
        $('.search-box').removeClass('active');
        $('.giftcard-box').removeClass('active');
    });

    $(".input-field").polymerForm();

    $('.add-tax .btn').click(function (e) {
        $('.estimated-tax .estimated-tax-cover').slideToggle();
    });
    $('.add-new-address .add-new').click(function (e) {
        $('.add-new-address .collapse').slideToggle();
    });
});
