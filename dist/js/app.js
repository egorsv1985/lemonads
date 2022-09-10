(() => {
  "use strict";
  let e = !0,
    t = (t = 500) => {
      let n = document.querySelector("body");
      if (e) {
        let r = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < r.length; e++) {
            r[e].style.paddingRight = "0px";
          }
          (n.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    },
    n = (t = 500) => {
      let n = document.querySelector("body");
      if (e) {
        let r = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < r.length; e++) {
          r[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (n.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    };
  function r() {
    let r = document.querySelector(".burger");
    r &&
      r.addEventListener("click", function (r) {
        e &&
          (((e = 500) => {
            document.documentElement.classList.contains("lock") ? t(e) : n(e);
          })(),
          document.documentElement.classList.toggle("open"));
      });
  }
  r();
  (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    r();
  const o = document.body,
    a = "scroll-up",
    c = "scroll-down";
  let i = 0;
  window.addEventListener("scroll", () => {
    const e = window.pageYOffset;
    e <= 0
      ? o.classList.remove(a)
      : (e > i && !o.classList.contains(c)
          ? (o.classList.remove(a), o.classList.add(c))
          : e < i &&
            o.classList.contains(c) &&
            (o.classList.remove(c), o.classList.add(a)),
        (i = e));
  });
  const l = document.querySelector(".main__video"),
    s = document.querySelector(".orange-juice"),
    u = document.getElementById("play-pause");
  function d() {
    l.paused
      ? ((u.className = "pause"), l.play())
      : ((u.className = "play"), l.pause());
  }
  var f;
  (l.onclick = function () {
    d();
  }),
    (u.onclick = function () {
      d();
    }),
    l.addEventListener("timeupdate", function () {
      const e = l.currentTime / l.duration;
      (s.style.width = 100 * e + "%"), l.ended && (u.className = "play");
    }),
    (window.onload = function () {
      MaskedInput({
        elm: document.getElementById("tel"),
        format: "+38 ___ ___ _ ___",
        separator: "+38 ()-",
      });
    }),
    ((f = window).MaskedInput = function (e) {
      if (!e || !e.elm || !e.format) return null;
      if (!(this instanceof f.MaskedInput)) return new f.MaskedInput(e);
      var t = this,
        n = e.elm,
        r = e.format,
        o = e.allowed || "0123456789",
        a =
          e.allowedfx ||
          function () {
            return !0;
          },
        c = e.separator || "/:-",
        i = e.typeon || "_YMDhms",
        l = e.onbadkey || function () {},
        s = e.onfilled || function () {},
        u = e.badkeywait || 0,
        d = !e.hasOwnProperty("preserve") || !!e.preserve,
        m = !0,
        h = !1,
        p = r,
        y = window.addEventListener
          ? function (e, t, n, r) {
              e.addEventListener(t, n, void 0 !== r && r);
            }
          : window.attachEvent
          ? function (e, t, n) {
              e.attachEvent("on" + t, n);
            }
          : function (e, t, n) {
              e["on" + t] = n;
            },
        v = function () {
          for (var e = n.value.length - 1; e >= 0; e--)
            for (var t = 0, r = i.length; t < r; t++)
              if (n.value[e] === i[t]) return !1;
          return !0;
        },
        g = function (e) {
          try {
            return (
              e.focus(),
              e.selectionStart >= 0
                ? e.selectionStart
                : document.selection
                ? -document.selection
                    .createRange()
                    .moveStart("character", -e.value.length)
                : -1
            );
          } catch (e) {
            return -1;
          }
        },
        w = function (e, t) {
          try {
            if (e.selectionStart) e.focus(), e.setSelectionRange(t, t);
            else if (e.createTextRange) {
              var n = e.createTextRange();
              n.move("character", t), n.select();
            }
          } catch (e) {
            return !1;
          }
          return !0;
        },
        b = function (e) {
          var t = "",
            n = (e = e || window.event).which,
            r = e.type;
          if ((null == n && (n = e.keyCode), null == n)) return "";
          switch (n) {
            case 8:
              t = "bksp";
              break;
            case 46:
              t = "keydown" === r ? "del" : ".";
              break;
            case 16:
              t = "shift";
              break;
            case 0:
            case 9:
            case 13:
              t = "etc";
              break;
            case 37:
            case 38:
            case 39:
            case 40:
              t =
                e.shiftKey || 39 === e.charCode || void 0 === e.charCode
                  ? String.fromCharCode(n)
                  : "etc";
              break;
            default:
              t = String.fromCharCode(n);
          }
          return t;
        },
        k = function (e, t) {
          e.preventDefault && e.preventDefault(), (e.returnValue = t || !1);
        },
        A = function (e) {
          var t = g(n),
            s = n.value,
            u = "";
          switch (!0) {
            case -1 !== o.indexOf(e):
              if ((t += 1) > r.length) return !1;
              for (; -1 !== c.indexOf(s.charAt(t - 1)) && t <= r.length; )
                t += 1;
              if (!a(e, t)) return l(e), !1;
              (u = s.substr(0, t - 1) + e + s.substr(t)),
                -1 === o.indexOf(s.charAt(t)) &&
                  -1 === i.indexOf(s.charAt(t)) &&
                  (t += 1);
              break;
            case "bksp" === e:
              if ((t -= 1) < 0) return !1;
              for (
                ;
                -1 === o.indexOf(s.charAt(t)) &&
                -1 === i.indexOf(s.charAt(t)) &&
                t > 1;

              )
                t -= 1;
              u = s.substr(0, t) + r.substr(t, 1) + s.substr(t + 1);
              break;
            case "del" === e:
              if (t >= s.length) return !1;
              for (; -1 !== c.indexOf(s.charAt(t)) && "" !== s.charAt(t); )
                t += 1;
              (u = s.substr(0, t) + r.substr(t, 1) + s.substr(t + 1)), (t += 1);
              break;
            case "etc" === e:
              return !0;
            default:
              return !1;
          }
          return (n.value = ""), (n.value = u), w(n, t), !1;
        },
        S = function (e) {
          if (!m) return !0;
          if (((e = e || event), h)) return k(e), !1;
          var t = b(e);
          return (
            !!("etc" === t || e.metaKey || e.ctrlKey || e.altKey) ||
            ("bksp" !== t &&
              "del" !== t &&
              "shift" !== t &&
              ((function (e) {
                if (
                  -1 === o.indexOf(e) &&
                  "bksp" !== e &&
                  "del" !== e &&
                  "etc" !== e
                ) {
                  var t = g(n);
                  return (
                    (h = !0),
                    l(e),
                    setTimeout(function () {
                      (h = !1), w(n, t);
                    }, u),
                    !1
                  );
                }
                return !0;
              })(t)
                ? A(t)
                  ? (v() && s(), k(e, !0), !0)
                  : (v() && s(), k(e), !1)
                : (k(e), !1)))
          );
        };
      return (
        (t.resetField = function () {
          n.value = r;
        }),
        (t.setAllowed = function (e) {
          (o = e), t.resetField();
        }),
        (t.setFormat = function (e) {
          (r = e), t.resetField();
        }),
        (t.setSeparator = function (e) {
          (c = e), t.resetField();
        }),
        (t.setTypeon = function (e) {
          (i = e), t.resetField();
        }),
        (t.setEnabled = function (e) {
          m = e;
        }),
        !n.tagName ||
        ("INPUT" !== n.tagName.toUpperCase() &&
          "TEXTAREA" !== n.tagName.toUpperCase())
          ? null
          : ((d && "" !== n.value) || (n.value = r),
            y(n, "keydown", function (e) {
              !(function (e) {
                if (!m) return !0;
                if (((e = e || event), h)) return k(e), !1;
                var t = b(e);
                (!e.metaKey && !e.ctrlKey) || ("X" !== t && "V" !== t)
                  ? e.metaKey ||
                    e.ctrlKey ||
                    ("" === n.value && ((n.value = r), w(n, 0)),
                    ("bksp" !== t && "del" !== t) || (A(t), k(e)))
                  : k(e);
              })(e);
            }),
            y(n, "keypress", function (e) {
              S(e);
            }),
            y(n, "focus", function () {
              p = n.value;
            }),
            y(n, "blur", function () {
              n.value !== p && n.onchange && n.onchange();
            }),
            t)
      );
    });
  let m = document.querySelectorAll(".field__file");
  Array.prototype.forEach.call(m, function (e) {
    let t = e.nextElementSibling,
      n = t.querySelector(".field__file-fake").innerText;
    e.addEventListener("change", function (e) {
      let r = "";
      this.files && this.files.length >= 1 && (r = this.files.length),
        (t.querySelector(".field__file-fake").innerText = r
          ? "Выбрано файлов: " + r
          : n);
    });
  });
})();
