"use strict";

var hamburger = document.getElementById('menu__button'); // Получаем бургер

var menu = document.querySelector('.nav__inner'); // Получаем меню

var body = document.getElementsByTagName('body')[0]; // Получаем body

var nav_link = document.querySelectorAll('.nav__link');
var screenWidth = window.screen.availWidth; // Получаем текущий размер экрана

if ($(hamburger).length) {
  var mobileMenu = function mobileMenu() {
    if (!hamburger.classList.contains('active')) {
      // Если бургер не имеет активного класса, то он добавляется
      hamburger.classList.add('active');
      menu.classList.add('nav__inner--open'); // Открытие меню

      body.classList.add('no-scroll'); // Запрет на прокрутку экрана
    } else {
      hamburger.classList.remove('active'); // В противном случае активный класс убирается

      menu.classList.remove('nav__inner--open'); // Меню закрывается

      body.classList.remove('no-scroll'); // Запрет на прокрутку экрана снимается
    }
  }; // При изменении экрана мобильное меню исчезает при заданной ширине экрана (на текущий момент 1024px)


  //убираем запрет на скролл страницы,после того как нажали на ссылку в бургер менб
  var addScrollToBody = function addScrollToBody(links) {
    links.forEach(function (item) {
      item.addEventListener('click', function () {
        hamburger.classList.remove('active');
        menu.classList.remove('nav__inner--open');
        body.classList.remove('no-scroll');
      });
    });
  };

  hamburger.addEventListener('click', mobileMenu);
  window.addEventListener('resize', function () {
    screenWidth = window.screen.availWidth;

    if (screenWidth > 768) {
      hamburger.classList.remove('active'); // В противном случае активный класс убирается

      menu.classList.remove('nav__inner--open'); // Меню закрывается

      body.classList.remove('no-scroll'); // Запрет на прокрутку экрана снимается
    }
  });
  addScrollToBody(nav_link);
}

;
"use strict";

$(".default_option").click(function () {
  $(this).parent().toggleClass("active");
});
$(".select_ul li").click(function () {
  var currentele = $(this).html();
  $(".default_option li").html(currentele);
  $(this).parents(".select_wrap").removeClass("active");
});
"use strict";

var config = {
  type: 'carousel',
  perView: 4,
  peek: {
    before: 0,
    after: 150
  }
};
Breakpoints.match({
  600: {
    perView: 2
  },
  1200: {
    perView: 3
  }
});
var glide = new Glide('#glide', config);
var slides = document.querySelectorAll('.slide-wrap');
var images = document.querySelectorAll('.sales-img');
glide.on('move', function (event) {
  // console.log('move', glide.index);
  if (glide.index + 4 == slides.length - 1) {
    console.log('End');
    glide.index = 0;
  } else {
    var slideCurrent = slides[glide.index + 4];
    var imgCurrent = images[glide.index + 4];
    var slidePrev = slides[glide.index + 3];
    var imgPrev = images[glide.index + 3];
    console.log(glide.index + 4);
    console.log(glide.index + 3);
    slideCurrent.classList.add('slide-wrap--opacity');
    imgCurrent.classList.add('sales-img--opacity');
    slidePrev.classList.remove('slide-wrap--opacity');
    imgPrev.classList.remove('sales-img--opacity');
  } // console.log(glide.index + 4);
  // console.log(glide.index + 3);

});
glide.mount();
"use strict";

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var c = a;else c = document.createElement("a"), c.href = a;
        return c.protocol.replace(/:/g, "") + c.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          c,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }

        var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var b = h[0];
        h = h[1];
        var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h(), e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(), delete e[b].onload, e[b] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();