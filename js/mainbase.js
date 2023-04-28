!(function (t) {
    var e = {};
    function n(i) {
        if (e[i]) return e[i].exports;
        var o = (e[i] = { i: i, l: !1, exports: {} });
        return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
        }),
        (n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var o in t)
                    n.d(
                        i,
                        o,
                        function (e) {
                            return t[e];
                        }.bind(null, o)
                    );
            return i;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = 8));
})([
    function (t, e, n) {
        var i, o, r;
        (r = window),
            (i = [n(20)]),
            void 0 ===
                (o = function (t) {
                    return (function (t, e) {
                        "use strict";
                        var n = {
                                extend: function (t, e) {
                                    for (var n in e) t[n] = e[n];
                                    return t;
                                },
                                modulo: function (t, e) {
                                    return ((t % e) + e) % e;
                                },
                            },
                            i = Array.prototype.slice;
                        (n.makeArray = function (t) {
                            return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? i.call(t) : [t];
                        }),
                            (n.removeFrom = function (t, e) {
                                var n = t.indexOf(e);
                                -1 != n && t.splice(n, 1);
                            }),
                            (n.getParent = function (t, n) {
                                for (; t.parentNode && t != document.body; ) if (((t = t.parentNode), e(t, n))) return t;
                            }),
                            (n.getQueryElement = function (t) {
                                return "string" == typeof t ? document.querySelector(t) : t;
                            }),
                            (n.handleEvent = function (t) {
                                var e = "on" + t.type;
                                this[e] && this[e](t);
                            }),
                            (n.filterFindElements = function (t, i) {
                                t = n.makeArray(t);
                                var o = [];
                                return (
                                    t.forEach(function (t) {
                                        if (t instanceof HTMLElement)
                                            if (i) {
                                                e(t, i) && o.push(t);
                                                for (var n = t.querySelectorAll(i), r = 0; r < n.length; r++) o.push(n[r]);
                                            } else o.push(t);
                                    }),
                                    o
                                );
                            }),
                            (n.debounceMethod = function (t, e, n) {
                                n = n || 100;
                                var i = t.prototype[e],
                                    o = e + "Timeout";
                                t.prototype[e] = function () {
                                    var t = this[o];
                                    clearTimeout(t);
                                    var e = arguments,
                                        r = this;
                                    this[o] = setTimeout(function () {
                                        i.apply(r, e), delete r[o];
                                    }, n);
                                };
                            }),
                            (n.docReady = function (t) {
                                var e = document.readyState;
                                "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
                            }),
                            (n.toDashed = function (t) {
                                return t
                                    .replace(/(.)([A-Z])/g, function (t, e, n) {
                                        return e + "-" + n;
                                    })
                                    .toLowerCase();
                            });
                        var o = t.console;
                        return (
                            (n.htmlInit = function (e, i) {
                                n.docReady(function () {
                                    var r = n.toDashed(i),
                                        s = "data-" + r,
                                        a = document.querySelectorAll("[" + s + "]"),
                                        l = document.querySelectorAll(".js-" + r),
                                        c = n.makeArray(a).concat(n.makeArray(l)),
                                        u = s + "-options",
                                        h = t.jQuery;
                                    c.forEach(function (t) {
                                        var n,
                                            r = t.getAttribute(s) || t.getAttribute(u);
                                        try {
                                            n = r && JSON.parse(r);
                                        } catch (e) {
                                            return void (o && o.error("Error parsing " + s + " on " + t.className + ": " + e));
                                        }
                                        var a = new e(t, n);
                                        h && h.data(t, i, a);
                                    });
                                });
                            }),
                            n
                        );
                    })(r, t);
                }.apply(e, i)) || (t.exports = o);
    },
    function (t, e, n) {
        var i, o, r;
        (r = window),
            (i = [n(2), n(5), n(0), n(21), n(22), n(23)]),
            void 0 ===
                (o = function (t, e, n, i, o, s) {
                    return (function (t, e, n, i, o, r, s) {
                        "use strict";
                        var a = t.jQuery,
                            l = t.getComputedStyle,
                            c = t.console;
                        function u(t, e) {
                            for (t = i.makeArray(t); t.length; ) e.appendChild(t.shift());
                        }
                        var h = 0,
                            d = {};
                        function f(t, e) {
                            var n = i.getQueryElement(t);
                            if (n) {
                                if (((this.element = n), this.element.flickityGUID)) {
                                    var o = d[this.element.flickityGUID];
                                    return o.option(e), o;
                                }
                                a && (this.$element = a(this.element)), (this.options = i.extend({}, this.constructor.defaults)), this.option(e), this._create();
                            } else c && c.error("Bad element for Flickity: " + (n || t));
                        }
                        (f.defaults = { accessibility: !0, cellAlign: "center", freeScrollFriction: 0.075, friction: 0.28, namespaceJQueryEvents: !0, percentPosition: !0, resize: !0, selectedAttraction: 0.025, setGallerySize: !0 }),
                            (f.createMethods = []);
                        var p = f.prototype;
                        i.extend(p, e.prototype),
                            (p._create = function () {
                                var e = (this.guid = ++h);
                                for (var n in ((this.element.flickityGUID = e),
                                (d[e] = this),
                                (this.selectedIndex = 0),
                                (this.restingFrames = 0),
                                (this.x = 0),
                                (this.velocity = 0),
                                (this.originSide = this.options.rightToLeft ? "right" : "left"),
                                (this.viewport = document.createElement("div")),
                                (this.viewport.className = "flickity-viewport"),
                                this._createSlider(),
                                (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this),
                                this.options.on)) {
                                    var i = this.options.on[n];
                                    this.on(n, i);
                                }
                                f.createMethods.forEach(function (t) {
                                    this[t]();
                                }, this),
                                    this.options.watchCSS ? this.watchCSS() : this.activate();
                            }),
                            (p.option = function (t) {
                                i.extend(this.options, t);
                            }),
                            (p.activate = function () {
                                this.isActive ||
                                    ((this.isActive = !0),
                                    this.element.classList.add("flickity-enabled"),
                                    this.options.rightToLeft && this.element.classList.add("flickity-rtl"),
                                    this.getSize(),
                                    u(this._filterFindCellElements(this.element.children), this.slider),
                                    this.viewport.appendChild(this.slider),
                                    this.element.appendChild(this.viewport),
                                    this.reloadCells(),
                                    this.options.accessibility && ((this.element.tabIndex = 0), this.element.addEventListener("keydown", this)),
                                    this.emitEvent("activate"),
                                    this.selectInitialIndex(),
                                    (this.isInitActivated = !0),
                                    this.dispatchEvent("ready"));
                            }),
                            (p._createSlider = function () {
                                var t = document.createElement("div");
                                (t.className = "flickity-slider"), (t.style[this.originSide] = 0), (this.slider = t);
                            }),
                            (p._filterFindCellElements = function (t) {
                                return i.filterFindElements(t, this.options.cellSelector);
                            }),
                            (p.reloadCells = function () {
                                (this.cells = this._makeCells(this.slider.children)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize();
                            }),
                            (p._makeCells = function (t) {
                                return this._filterFindCellElements(t).map(function (t) {
                                    return new o(t, this);
                                }, this);
                            }),
                            (p.getLastCell = function () {
                                return this.cells[this.cells.length - 1];
                            }),
                            (p.getLastSlide = function () {
                                return this.slides[this.slides.length - 1];
                            }),
                            (p.positionCells = function () {
                                this._sizeCells(this.cells), this._positionCells(0);
                            }),
                            (p._positionCells = function (t) {
                                (t = t || 0), (this.maxCellHeight = (t && this.maxCellHeight) || 0);
                                var e = 0;
                                if (t > 0) {
                                    var n = this.cells[t - 1];
                                    e = n.x + n.size.outerWidth;
                                }
                                for (var i = this.cells.length, o = t; o < i; o++) {
                                    var r = this.cells[o];
                                    r.setPosition(e), (e += r.size.outerWidth), (this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight));
                                }
                                (this.slideableWidth = e), this.updateSlides(), this._containSlides(), (this.slidesWidth = i ? this.getLastSlide().target - this.slides[0].target : 0);
                            }),
                            (p._sizeCells = function (t) {
                                t.forEach(function (t) {
                                    t.getSize();
                                });
                            }),
                            (p.updateSlides = function () {
                                if (((this.slides = []), this.cells.length)) {
                                    var t = new r(this);
                                    this.slides.push(t);
                                    var e = "left" == this.originSide ? "marginRight" : "marginLeft",
                                        n = this._getCanCellFit();
                                    this.cells.forEach(function (i, o) {
                                        if (t.cells.length) {
                                            var s = t.outerWidth - t.firstMargin + (i.size.outerWidth - i.size[e]);
                                            n.call(this, o, s) || (t.updateTarget(), (t = new r(this)), this.slides.push(t)), t.addCell(i);
                                        } else t.addCell(i);
                                    }, this),
                                        t.updateTarget(),
                                        this.updateSelectedSlide();
                                }
                            }),
                            (p._getCanCellFit = function () {
                                var t = this.options.groupCells;
                                if (!t)
                                    return function () {
                                        return !1;
                                    };
                                if ("number" == typeof t) {
                                    var e = parseInt(t, 10);
                                    return function (t) {
                                        return t % e != 0;
                                    };
                                }
                                var n = "string" == typeof t && t.match(/^(\d+)%$/),
                                    i = n ? parseInt(n[1], 10) / 100 : 1;
                                return function (t, e) {
                                    return e <= (this.size.innerWidth + 1) * i;
                                };
                            }),
                            (p._init = p.reposition = function () {
                                this.positionCells(), this.positionSliderAtSelected();
                            }),
                            (p.getSize = function () {
                                (this.size = n(this.element)), this.setCellAlign(), (this.cursorPosition = this.size.innerWidth * this.cellAlign);
                            });
                        var g = { center: { left: 0.5, right: 0.5 }, left: { left: 0, right: 1 }, right: { right: 0, left: 1 } };
                        return (
                            (p.setCellAlign = function () {
                                var t = g[this.options.cellAlign];
                                this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
                            }),
                            (p.setGallerySize = function () {
                                if (this.options.setGallerySize) {
                                    var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                                    this.viewport.style.height = t + "px";
                                }
                            }),
                            (p._getWrapShiftCells = function () {
                                if (this.options.wrapAround) {
                                    this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                                    var t = this.cursorPosition,
                                        e = this.cells.length - 1;
                                    (this.beforeShiftCells = this._getGapCells(t, e, -1)), (t = this.size.innerWidth - this.cursorPosition), (this.afterShiftCells = this._getGapCells(t, 0, 1));
                                }
                            }),
                            (p._getGapCells = function (t, e, n) {
                                for (var i = []; t > 0; ) {
                                    var o = this.cells[e];
                                    if (!o) break;
                                    i.push(o), (e += n), (t -= o.size.outerWidth);
                                }
                                return i;
                            }),
                            (p._containSlides = function () {
                                if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                                    var t = this.options.rightToLeft,
                                        e = t ? "marginRight" : "marginLeft",
                                        n = t ? "marginLeft" : "marginRight",
                                        i = this.slideableWidth - this.getLastCell().size[n],
                                        o = i < this.size.innerWidth,
                                        r = this.cursorPosition + this.cells[0].size[e],
                                        s = i - this.size.innerWidth * (1 - this.cellAlign);
                                    this.slides.forEach(function (t) {
                                        o ? (t.target = i * this.cellAlign) : ((t.target = Math.max(t.target, r)), (t.target = Math.min(t.target, s)));
                                    }, this);
                                }
                            }),
                            (p.dispatchEvent = function (t, e, n) {
                                var i = e ? [e].concat(n) : n;
                                if ((this.emitEvent(t, i), a && this.$element)) {
                                    var o = (t += this.options.namespaceJQueryEvents ? ".flickity" : "");
                                    if (e) {
                                        var r = a.Event(e);
                                        (r.type = t), (o = r);
                                    }
                                    this.$element.trigger(o, n);
                                }
                            }),
                            (p.select = function (t, e, n) {
                                if (this.isActive && ((t = parseInt(t, 10)), this._wrapSelect(t), (this.options.wrapAround || e) && (t = i.modulo(t, this.slides.length)), this.slides[t])) {
                                    var o = this.selectedIndex;
                                    (this.selectedIndex = t),
                                        this.updateSelectedSlide(),
                                        n ? this.positionSliderAtSelected() : this.startAnimation(),
                                        this.options.adaptiveHeight && this.setGallerySize(),
                                        this.dispatchEvent("select", null, [t]),
                                        t != o && this.dispatchEvent("change", null, [t]),
                                        this.dispatchEvent("cellSelect");
                                }
                            }),
                            (p._wrapSelect = function (t) {
                                var e = this.slides.length;
                                if (!(this.options.wrapAround && e > 1)) return t;
                                var n = i.modulo(t, e),
                                    o = Math.abs(n - this.selectedIndex),
                                    r = Math.abs(n + e - this.selectedIndex),
                                    s = Math.abs(n - e - this.selectedIndex);
                                !this.isDragSelect && r < o ? (t += e) : !this.isDragSelect && s < o && (t -= e), t < 0 ? (this.x -= this.slideableWidth) : t >= e && (this.x += this.slideableWidth);
                            }),
                            (p.previous = function (t, e) {
                                this.select(this.selectedIndex - 1, t, e);
                            }),
                            (p.next = function (t, e) {
                                this.select(this.selectedIndex + 1, t, e);
                            }),
                            (p.updateSelectedSlide = function () {
                                var t = this.slides[this.selectedIndex];
                                t &&
                                    (this.unselectSelectedSlide(),
                                    (this.selectedSlide = t),
                                    t.select(),
                                    (this.selectedCells = t.cells),
                                    (this.selectedElements = t.getCellElements()),
                                    (this.selectedCell = t.cells[0]),
                                    (this.selectedElement = this.selectedElements[0]));
                            }),
                            (p.unselectSelectedSlide = function () {
                                this.selectedSlide && this.selectedSlide.unselect();
                            }),
                            (p.selectInitialIndex = function () {
                                var t = this.options.initialIndex;
                                if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
                                else {
                                    if (t && "string" == typeof t && this.queryCell(t)) return void this.selectCell(t, !1, !0);
                                    var e = 0;
                                    t && this.slides[t] && (e = t), this.select(e, !1, !0);
                                }
                            }),
                            (p.selectCell = function (t, e, n) {
                                var i = this.queryCell(t);
                                if (i) {
                                    var o = this.getCellSlideIndex(i);
                                    this.select(o, e, n);
                                }
                            }),
                            (p.getCellSlideIndex = function (t) {
                                for (var e = 0; e < this.slides.length; e++) if (-1 != this.slides[e].cells.indexOf(t)) return e;
                            }),
                            (p.getCell = function (t) {
                                for (var e = 0; e < this.cells.length; e++) {
                                    var n = this.cells[e];
                                    if (n.element == t) return n;
                                }
                            }),
                            (p.getCells = function (t) {
                                t = i.makeArray(t);
                                var e = [];
                                return (
                                    t.forEach(function (t) {
                                        var n = this.getCell(t);
                                        n && e.push(n);
                                    }, this),
                                    e
                                );
                            }),
                            (p.getCellElements = function () {
                                return this.cells.map(function (t) {
                                    return t.element;
                                });
                            }),
                            (p.getParentCell = function (t) {
                                return this.getCell(t) || ((t = i.getParent(t, ".flickity-slider > *")), this.getCell(t));
                            }),
                            (p.getAdjacentCellElements = function (t, e) {
                                if (!t) return this.selectedSlide.getCellElements();
                                e = void 0 === e ? this.selectedIndex : e;
                                var n = this.slides.length;
                                if (1 + 2 * t >= n) return this.getCellElements();
                                for (var o = [], r = e - t; r <= e + t; r++) {
                                    var s = this.options.wrapAround ? i.modulo(r, n) : r,
                                        a = this.slides[s];
                                    a && (o = o.concat(a.getCellElements()));
                                }
                                return o;
                            }),
                            (p.queryCell = function (t) {
                                if ("number" == typeof t) return this.cells[t];
                                if ("string" == typeof t) {
                                    if (t.match(/^[#\.]?[\d\/]/)) return;
                                    t = this.element.querySelector(t);
                                }
                                return this.getCell(t);
                            }),
                            (p.uiChange = function () {
                                this.emitEvent("uiChange");
                            }),
                            (p.childUIPointerDown = function (t) {
                                "touchstart" != t.type && t.preventDefault(), this.focus();
                            }),
                            (p.onresize = function () {
                                this.watchCSS(), this.resize();
                            }),
                            i.debounceMethod(f, "onresize", 150),
                            (p.resize = function () {
                                if (this.isActive) {
                                    this.getSize(), this.options.wrapAround && (this.x = i.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
                                    var t = this.selectedElements && this.selectedElements[0];
                                    this.selectCell(t, !1, !0);
                                }
                            }),
                            (p.watchCSS = function () {
                                this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate());
                            }),
                            (p.onkeydown = function (t) {
                                var e = document.activeElement && document.activeElement != this.element;
                                if (this.options.accessibility && !e) {
                                    var n = f.keyboardHandlers[t.keyCode];
                                    n && n.call(this);
                                }
                            }),
                            (f.keyboardHandlers = {
                                37: function () {
                                    var t = this.options.rightToLeft ? "next" : "previous";
                                    this.uiChange(), this[t]();
                                },
                                39: function () {
                                    var t = this.options.rightToLeft ? "previous" : "next";
                                    this.uiChange(), this[t]();
                                },
                            }),
                            (p.focus = function () {
                                var e = t.pageYOffset;
                                this.element.focus({ preventScroll: !0 }), t.pageYOffset != e && t.scrollTo(t.pageXOffset, e);
                            }),
                            (p.deactivate = function () {
                                this.isActive &&
                                    (this.element.classList.remove("flickity-enabled"),
                                    this.element.classList.remove("flickity-rtl"),
                                    this.unselectSelectedSlide(),
                                    this.cells.forEach(function (t) {
                                        t.destroy();
                                    }),
                                    this.element.removeChild(this.viewport),
                                    u(this.slider.children, this.element),
                                    this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)),
                                    (this.isActive = !1),
                                    this.emitEvent("deactivate"));
                            }),
                            (p.destroy = function () {
                                this.deactivate(),
                                    t.removeEventListener("resize", this),
                                    this.allOff(),
                                    this.emitEvent("destroy"),
                                    a && this.$element && a.removeData(this.element, "flickity"),
                                    delete this.element.flickityGUID,
                                    delete d[this.guid];
                            }),
                            i.extend(p, s),
                            (f.data = function (t) {
                                var e = (t = i.getQueryElement(t)) && t.flickityGUID;
                                return e && d[e];
                            }),
                            i.htmlInit(f, "flickity"),
                            a && a.bridget && a.bridget("flickity", f),
                            (f.setJQuery = function (t) {
                                a = t;
                            }),
                            (f.Cell = o),
                            (f.Slide = r),
                            f
                        );
                    })(r, t, e, n, i, o, s);
                }.apply(e, i)) || (t.exports = o);
    },
    function (t, e, n) {
        var i, o;
        "undefined" != typeof window && window,
            void 0 ===
                (o =
                    "function" ==
                    typeof (i = function () {
                        "use strict";
                        function t() {}
                        var e = t.prototype;
                        return (
                            (e.on = function (t, e) {
                                if (t && e) {
                                    var n = (this._events = this._events || {}),
                                        i = (n[t] = n[t] || []);
                                    return -1 == i.indexOf(e) && i.push(e), this;
                                }
                            }),
                            (e.once = function (t, e) {
                                if (t && e) {
                                    this.on(t, e);
                                    var n = (this._onceEvents = this._onceEvents || {});
                                    return ((n[t] = n[t] || {})[e] = !0), this;
                                }
                            }),
                            (e.off = function (t, e) {
                                var n = this._events && this._events[t];
                                if (n && n.length) {
                                    var i = n.indexOf(e);
                                    return -1 != i && n.splice(i, 1), this;
                                }
                            }),
                            (e.emitEvent = function (t, e) {
                                var n = this._events && this._events[t];
                                if (n && n.length) {
                                    (n = n.slice(0)), (e = e || []);
                                    for (var i = this._onceEvents && this._onceEvents[t], o = 0; o < n.length; o++) {
                                        var r = n[o];
                                        i && i[r] && (this.off(t, r), delete i[r]), r.apply(this, e);
                                    }
                                    return this;
                                }
                            }),
                            (e.allOff = function () {
                                delete this._events, delete this._onceEvents;
                            }),
                            t
                        );
                    })
                        ? i.call(e, n, e, t)
                        : i) || (t.exports = o);
    },
    function (t, e, n) {
        var i, o, r;
        /*!
         * Unipointer v2.3.0
         * base class for doing one thing with pointer event
         * MIT license
         */ (r = window),
            (i = [n(2)]),
            void 0 ===
                (o = function (t) {
                    return (function (t, e) {
                        "use strict";
                        function n() {}
                        var i = (n.prototype = Object.create(e.prototype));
                        (i.bindStartEvent = function (t) {
                            this._bindStartEvent(t, !0);
                        }),
                            (i.unbindStartEvent = function (t) {
                                this._bindStartEvent(t, !1);
                            }),
                            (i._bindStartEvent = function (e, n) {
                                var i = (n = void 0 === n || n) ? "addEventListener" : "removeEventListener",
                                    o = "mousedown";
                                t.PointerEvent ? (o = "pointerdown") : "ontouchstart" in t && (o = "touchstart"), e[i](o, this);
                            }),
                            (i.handleEvent = function (t) {
                                var e = "on" + t.type;
                                this[e] && this[e](t);
                            }),
                            (i.getTouch = function (t) {
                                for (var e = 0; e < t.length; e++) {
                                    var n = t[e];
                                    if (n.identifier == this.pointerIdentifier) return n;
                                }
                            }),
                            (i.onmousedown = function (t) {
                                var e = t.button;
                                (e && 0 !== e && 1 !== e) || this._pointerDown(t, t);
                            }),
                            (i.ontouchstart = function (t) {
                                this._pointerDown(t, t.changedTouches[0]);
                            }),
                            (i.onpointerdown = function (t) {
                                this._pointerDown(t, t);
                            }),
                            (i._pointerDown = function (t, e) {
                                t.button || this.isPointerDown || ((this.isPointerDown = !0), (this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier), this.pointerDown(t, e));
                            }),
                            (i.pointerDown = function (t, e) {
                                this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]);
                            });
                        var o = { mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"] };
                        return (
                            (i._bindPostStartEvents = function (e) {
                                if (e) {
                                    var n = o[e.type];
                                    n.forEach(function (e) {
                                        t.addEventListener(e, this);
                                    }, this),
                                        (this._boundPointerEvents = n);
                                }
                            }),
                            (i._unbindPostStartEvents = function () {
                                this._boundPointerEvents &&
                                    (this._boundPointerEvents.forEach(function (e) {
                                        t.removeEventListener(e, this);
                                    }, this),
                                    delete this._boundPointerEvents);
                            }),
                            (i.onmousemove = function (t) {
                                this._pointerMove(t, t);
                            }),
                            (i.onpointermove = function (t) {
                                t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
                            }),
                            (i.ontouchmove = function (t) {
                                var e = this.getTouch(t.changedTouches);
                                e && this._pointerMove(t, e);
                            }),
                            (i._pointerMove = function (t, e) {
                                this.pointerMove(t, e);
                            }),
                            (i.pointerMove = function (t, e) {
                                this.emitEvent("pointerMove", [t, e]);
                            }),
                            (i.onmouseup = function (t) {
                                this._pointerUp(t, t);
                            }),
                            (i.onpointerup = function (t) {
                                t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
                            }),
                            (i.ontouchend = function (t) {
                                var e = this.getTouch(t.changedTouches);
                                e && this._pointerUp(t, e);
                            }),
                            (i._pointerUp = function (t, e) {
                                this._pointerDone(), this.pointerUp(t, e);
                            }),
                            (i.pointerUp = function (t, e) {
                                this.emitEvent("pointerUp", [t, e]);
                            }),
                            (i._pointerDone = function () {
                                this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
                            }),
                            (i._pointerReset = function () {
                                (this.isPointerDown = !1), delete this.pointerIdentifier;
                            }),
                            (i.pointerDone = function () {}),
                            (i.onpointercancel = function (t) {
                                t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
                            }),
                            (i.ontouchcancel = function (t) {
                                var e = this.getTouch(t.changedTouches);
                                e && this._pointerCancel(t, e);
                            }),
                            (i._pointerCancel = function (t, e) {
                                this._pointerDone(), this.pointerCancel(t, e);
                            }),
                            (i.pointerCancel = function (t, e) {
                                this.emitEvent("pointerCancel", [t, e]);
                            }),
                            (n.getPointerPoint = function (t) {
                                return { x: t.pageX, y: t.pageY };
                            }),
                            n
                        );
                    })(r, t);
                }.apply(e, i)) || (t.exports = o);
    },
    function (t, e) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (t) {
            "object" == typeof window && (n = window);
        }
        t.exports = n;
    },
    function (t, e, n) {
        var i, o;
        /*!
         * getSize v2.0.3
         * measure size of elements
         * MIT license
         */ window,
            void 0 ===
                (o =
                    "function" ==
                    typeof (i = function () {
                        "use strict";
                        function t(t) {
                            var e = parseFloat(t);
                            return -1 == t.indexOf("%") && !isNaN(e) && e;
                        }
                        var e =
                                "undefined" == typeof console
                                    ? function () {}
                                    : function (t) {
                                          console.error(t);
                                      },
                            n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
                            i = n.length;
                        function o(t) {
                            var n = getComputedStyle(t);
                            return n || e("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), n;
                        }
                        var r,
                            s = !1;
                        return function a(e) {
                            if (
                                ((function () {
                                    if (!s) {
                                        s = !0;
                                        var e = document.createElement("div");
                                        (e.style.width = "200px"), (e.style.padding = "1px 2px 3px 4px"), (e.style.borderStyle = "solid"), (e.style.borderWidth = "1px 2px 3px 4px"), (e.style.boxSizing = "border-box");
                                        var n = document.body || document.documentElement;
                                        n.appendChild(e);
                                        var i = o(e);
                                        (r = 200 == Math.round(t(i.width))), (a.isBoxSizeOuter = r), n.removeChild(e);
                                    }
                                })(),
                                "string" == typeof e && (e = document.querySelector(e)),
                                e && "object" == typeof e && e.nodeType)
                            ) {
                                var l = o(e);
                                if ("none" == l.display)
                                    return (function () {
                                        for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < i; e++) t[n[e]] = 0;
                                        return t;
                                    })();
                                var c = {};
                                (c.width = e.offsetWidth), (c.height = e.offsetHeight);
                                for (var u = (c.isBorderBox = "border-box" == l.boxSizing), h = 0; h < i; h++) {
                                    var d = n[h],
                                        f = l[d],
                                        p = parseFloat(f);
                                    c[d] = isNaN(p) ? 0 : p;
                                }
                                var g = c.paddingLeft + c.paddingRight,
                                    m = c.paddingTop + c.paddingBottom,
                                    v = c.marginLeft + c.marginRight,
                                    y = c.marginTop + c.marginBottom,
                                    b = c.borderLeftWidth + c.borderRightWidth,
                                    _ = c.borderTopWidth + c.borderBottomWidth,
                                    w = u && r,
                                    E = t(l.width);
                                !1 !== E && (c.width = E + (w ? 0 : g + b));
                                var x = t(l.height);
                                return !1 !== x && (c.height = x + (w ? 0 : m + _)), (c.innerWidth = c.width - (g + b)), (c.innerHeight = c.height - (m + _)), (c.outerWidth = c.width + v), (c.outerHeight = c.height + y), c;
                            }
                        };
                    })
                        ? i.call(e, n, e, t)
                        : i) || (t.exports = o);
    },
    function (t, e, n) {
        t.exports = (function () {
            "use strict";
            function t() {
                return (t =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                        }
                        return t;
                    }).apply(this, arguments);
            }
            var e = "undefined" != typeof window,
                n = (e && !("onscroll" in window)) || ("undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
                i = e && "IntersectionObserver" in window,
                o = e && "classList" in document.createElement("p"),
                r = {
                    elements_selector: "img",
                    container: n || e ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_poster: "poster",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    load_delay: 0,
                    auto_unobserve: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    use_native: !1,
                },
                s = function (e) {
                    return t({}, r, e);
                },
                a = function (t, e) {
                    var n,
                        i = new t(e);
                    try {
                        n = new CustomEvent("LazyLoad::Initialized", { detail: { instance: i } });
                    } catch (t) {
                        (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, { instance: i });
                    }
                    window.dispatchEvent(n);
                },
                l = function (t, e) {
                    return t.getAttribute("data-" + e);
                },
                c = function (t, e, n) {
                    var i = "data-" + e;
                    null !== n ? t.setAttribute(i, n) : t.removeAttribute(i);
                },
                u = function (t, e) {
                    return c(t, "ll-status", e);
                },
                h = function (t, e) {
                    return c(t, "ll-timeout", e);
                },
                d = function (t) {
                    return l(t, "ll-timeout");
                },
                f = function (t) {
                    for (var e, n = [], i = 0; (e = t.children[i]); i += 1) "SOURCE" === e.tagName && n.push(e);
                    return n;
                },
                p = function (t, e, n) {
                    n && t.setAttribute(e, n);
                },
                g = function (t, e) {
                    p(t, "sizes", l(t, e.data_sizes)), p(t, "srcset", l(t, e.data_srcset)), p(t, "src", l(t, e.data_src));
                },
                m = {
                    IMG: function (t, e) {
                        var n = t.parentNode;
                        n &&
                            "PICTURE" === n.tagName &&
                            f(n).forEach(function (t) {
                                g(t, e);
                            }),
                            g(t, e);
                    },
                    IFRAME: function (t, e) {
                        p(t, "src", l(t, e.data_src));
                    },
                    VIDEO: function (t, e) {
                        f(t).forEach(function (t) {
                            p(t, "src", l(t, e.data_src));
                        }),
                            p(t, "poster", l(t, e.data_poster)),
                            p(t, "src", l(t, e.data_src)),
                            t.load();
                    },
                },
                v = function (t, e) {
                    o ? t.classList.add(e) : (t.className += (t.className ? " " : "") + e);
                },
                y = function (t, e) {
                    o
                        ? t.classList.remove(e)
                        : (t.className = t.className
                              .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                              .replace(/^\s+/, "")
                              .replace(/\s+$/, ""));
                },
                b = function (t, e, n, i) {
                    t && (void 0 === i ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, i));
                },
                _ = function (t, e) {
                    e && ((e.loadingCount -= 1), w(t, e));
                },
                w = function (t, e) {
                    e.toLoadCount || e.loadingCount || b(t.callback_finish, e);
                },
                E = function (t, e, n) {
                    t.addEventListener(e, n);
                },
                x = function (t, e, n) {
                    t.removeEventListener(e, n);
                },
                C = function (t, e, n) {
                    x(t, "load", e), x(t, "loadeddata", e), x(t, "error", n);
                },
                S = ["IMG", "IFRAME", "VIDEO"],
                T = function (t, e, n) {
                    (function (t) {
                        return S.indexOf(t.tagName) > -1;
                    })(t) &&
                        ((function (t, e, n) {
                            var i = function i(r) {
                                    !(function (t, e, n) {
                                        var i = t.target;
                                        u(i, "loaded"), y(i, e.class_loading), v(i, e.class_loaded), b(e.callback_loaded, i, n), _(e, n);
                                    })(r, e, n),
                                        C(t, i, o);
                                },
                                o = function o(r) {
                                    !(function (t, e, n) {
                                        var i = t.target;
                                        u(i, "error"), y(i, e.class_loading), v(i, e.class_error), b(e.callback_error, i, n), _(e, n);
                                    })(r, e, n),
                                        C(t, i, o);
                                };
                            !(function (t, e, n) {
                                E(t, "load", e), E(t, "loadeddata", e), E(t, "error", n);
                            })(t, i, o);
                        })(t, e, n),
                        v(t, e.class_loading)),
                        (function (t, e, n) {
                            var i = t.tagName,
                                o = m[i];
                            o
                                ? (o(t, e),
                                  (function (t) {
                                      t && (t.loadingCount += 1);
                                  })(n))
                                : (function (t, e) {
                                      var n = l(t, e.data_src),
                                          i = l(t, e.data_bg);
                                      n && (t.style.backgroundImage = 'url("'.concat(n, '")')), i && (t.style.backgroundImage = i);
                                  })(t, e);
                        })(t, e, n),
                        (function (t, e) {
                            e && ((e.toLoadCount -= 1), w(t, e));
                        })(e, n);
                },
                D = function (t, e, n) {
                    T(t, e, n),
                        u(t, "loading"),
                        b(e.callback_loading, t, n),
                        b(e.callback_reveal, t, n),
                        (function (t, e) {
                            if (e) {
                                var n = e._observer;
                                n && e._settings.auto_unobserve && n.unobserve(t);
                            }
                        })(t, n);
                },
                A = function (t) {
                    var e = d(t);
                    e && (clearTimeout(e), h(t, null));
                },
                k = ["IMG", "IFRAME"],
                N = function (t) {
                    return t.use_native && "loading" in HTMLImageElement.prototype;
                },
                I = function (t) {
                    var e;
                    i &&
                        !N(t._settings) &&
                        (t._observer = new IntersectionObserver(
                            function (e) {
                                e.forEach(function (e) {
                                    return (function (t) {
                                        return t.isIntersecting || t.intersectionRatio > 0;
                                    })(e)
                                        ? (function (t, e, n) {
                                              var i = n._settings;
                                              b(i.callback_enter, t, e, n),
                                                  i.load_delay
                                                      ? (function (t, e, n) {
                                                            var i = e.load_delay,
                                                                o = d(t);
                                                            o ||
                                                                ((o = setTimeout(function () {
                                                                    D(t, e, n), A(t);
                                                                }, i)),
                                                                h(t, o));
                                                        })(t, i, n)
                                                      : D(t, i, n);
                                          })(e.target, e, t)
                                        : (function (t, e, n) {
                                              var i = n._settings;
                                              b(i.callback_exit, t, e, n), i.load_delay && A(t);
                                          })(e.target, e, t);
                                });
                            },
                            { root: (e = t._settings).container === document ? null : e.container, rootMargin: e.thresholds || e.threshold + "px" }
                        ));
                },
                L = function (t) {
                    return Array.prototype.slice.call(t);
                },
                O = function (t) {
                    return t.container.querySelectorAll(t.elements_selector);
                },
                P = function (t) {
                    return (
                        !(function (t) {
                            return null !== l(t, "ll-status");
                        })(t) ||
                        (function (t) {
                            return "observed" === l(t, "ll-status");
                        })(t)
                    );
                },
                j = function (t) {
                    return (function (t) {
                        return "error" === l(t, "ll-status");
                    })(t);
                },
                M = function (t, e) {
                    return (function (t) {
                        return L(t).filter(P);
                    })(t || O(e));
                },
                H = function (t, n) {
                    var i;
                    (this._settings = s(t)),
                        (this.loadingCount = 0),
                        I(this),
                        (i = this),
                        e &&
                            window.addEventListener("online", function (t) {
                                !(function (t) {
                                    var e,
                                        n = t._settings;
                                    ((e = O(n)), L(e).filter(j)).forEach(function (t) {
                                        y(t, n.class_error),
                                            (function (t) {
                                                c(t, "ll-status", null);
                                            })(t);
                                    }),
                                        t.update();
                                })(i);
                            }),
                        this.update(n);
                };
            return (
                (H.prototype = {
                    update: function (t) {
                        var e = this._settings,
                            o = M(t, e);
                        (this.toLoadCount = o.length),
                            !n && i
                                ? N(e)
                                    ? (function (t, e, n) {
                                          t.forEach(function (t) {
                                              -1 !== k.indexOf(t.tagName) &&
                                                  (t.setAttribute("loading", "lazy"),
                                                  (function (t, e, n) {
                                                      T(t, e, n), u(t, "native");
                                                  })(t, e, n));
                                          }),
                                              (n.toLoadCount = 0);
                                      })(o, e, this)
                                    : (function (t, e) {
                                          !(function (t) {
                                              t.disconnect();
                                          })(t),
                                              (function (t, e) {
                                                  e.forEach(function (e) {
                                                      t.observe(e), u(e, "observed");
                                                  });
                                              })(t, e);
                                      })(this._observer, o)
                                : this.loadAll(o);
                    },
                    destroy: function () {
                        this._observer && this._observer.disconnect(), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount;
                    },
                    loadAll: function (t) {
                        var e = this,
                            n = this._settings;
                        M(t, n).forEach(function (t) {
                            D(t, n, e);
                        });
                    },
                    load: function (t) {
                        D(t, this._settings, this);
                    },
                }),
                (H.load = function (t, e) {
                    var n = s(e);
                    D(t, n);
                }),
                e &&
                    (function (t, e) {
                        if (e)
                            if (e.length) for (var n, i = 0; (n = e[i]); i += 1) a(t, n);
                            else a(t, e);
                    })(H, window.lazyLoadOptions),
                H
            );
        })();
    },
    function (t, e, n) {
        (function (e) {
            t.exports = (function () {
                "use strict";
                var t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
                    n = "Expected a function",
                    i = /^\s+|\s+$/g,
                    o = /^[-+]0x[0-9a-f]+$/i,
                    r = /^0b[01]+$/i,
                    s = /^0o[0-7]+$/i,
                    a = parseInt,
                    l = "object" == typeof t && t && t.Object === Object && t,
                    c = "object" == typeof self && self && self.Object === Object && self,
                    u = l || c || Function("return this")(),
                    h = Object.prototype.toString,
                    d = Math.max,
                    f = Math.min,
                    p = function () {
                        return u.Date.now();
                    };
                function g(t) {
                    var e = typeof t;
                    return !!t && ("object" == e || "function" == e);
                }
                function m(t) {
                    if ("number" == typeof t) return t;
                    if (
                        (function (t) {
                            return (
                                "symbol" == typeof t ||
                                ((function (t) {
                                    return !!t && "object" == typeof t;
                                })(t) &&
                                    "[object Symbol]" == h.call(t))
                            );
                        })(t)
                    )
                        return NaN;
                    if (g(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = g(e) ? e + "" : e;
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(i, "");
                    var n = r.test(t);
                    return n || s.test(t) ? a(t.slice(2), n ? 2 : 8) : o.test(t) ? NaN : +t;
                }
                var v = function (t, e, i) {
                        var o = !0,
                            r = !0;
                        if ("function" != typeof t) throw new TypeError(n);
                        return (
                            g(i) && ((o = "leading" in i ? !!i.leading : o), (r = "trailing" in i ? !!i.trailing : r)),
                            (function (t, e, i) {
                                var o,
                                    r,
                                    s,
                                    a,
                                    l,
                                    c,
                                    u = 0,
                                    h = !1,
                                    v = !1,
                                    y = !0;
                                if ("function" != typeof t) throw new TypeError(n);
                                function b(e) {
                                    var n = o,
                                        i = r;
                                    return (o = r = void 0), (u = e), (a = t.apply(i, n));
                                }
                                function _(t) {
                                    var n = t - c;
                                    return void 0 === c || n >= e || n < 0 || (v && t - u >= s);
                                }
                                function w() {
                                    var t = p();
                                    if (_(t)) return E(t);
                                    l = setTimeout(
                                        w,
                                        (function (t) {
                                            var n = e - (t - c);
                                            return v ? f(n, s - (t - u)) : n;
                                        })(t)
                                    );
                                }
                                function E(t) {
                                    return (l = void 0), y && o ? b(t) : ((o = r = void 0), a);
                                }
                                function x() {
                                    var t = p(),
                                        n = _(t);
                                    if (((o = arguments), (r = this), (c = t), n)) {
                                        if (void 0 === l)
                                            return (function (t) {
                                                return (u = t), (l = setTimeout(w, e)), h ? b(t) : a;
                                            })(c);
                                        if (v) return (l = setTimeout(w, e)), b(c);
                                    }
                                    return void 0 === l && (l = setTimeout(w, e)), a;
                                }
                                return (
                                    (e = m(e) || 0),
                                    g(i) && ((h = !!i.leading), (s = (v = "maxWait" in i) ? d(m(i.maxWait) || 0, e) : s), (y = "trailing" in i ? !!i.trailing : y)),
                                    (x.cancel = function () {
                                        void 0 !== l && clearTimeout(l), (u = 0), (o = c = r = l = void 0);
                                    }),
                                    (x.flush = function () {
                                        return void 0 === l ? a : E(p());
                                    }),
                                    x
                                );
                            })(t, e, { leading: o, maxWait: e, trailing: r })
                        );
                    },
                    y = /^\s+|\s+$/g,
                    b = /^[-+]0x[0-9a-f]+$/i,
                    _ = /^0b[01]+$/i,
                    w = /^0o[0-7]+$/i,
                    E = parseInt,
                    x = "object" == typeof t && t && t.Object === Object && t,
                    C = "object" == typeof self && self && self.Object === Object && self,
                    S = x || C || Function("return this")(),
                    T = Object.prototype.toString,
                    D = Math.max,
                    A = Math.min,
                    k = function () {
                        return S.Date.now();
                    };
                function N(t) {
                    var e = typeof t;
                    return !!t && ("object" == e || "function" == e);
                }
                function I(t) {
                    if ("number" == typeof t) return t;
                    if (
                        (function (t) {
                            return (
                                "symbol" == typeof t ||
                                ((function (t) {
                                    return !!t && "object" == typeof t;
                                })(t) &&
                                    "[object Symbol]" == T.call(t))
                            );
                        })(t)
                    )
                        return NaN;
                    if (N(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = N(e) ? e + "" : e;
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(y, "");
                    var n = _.test(t);
                    return n || w.test(t) ? E(t.slice(2), n ? 2 : 8) : b.test(t) ? NaN : +t;
                }
                var L = function (t, e, n) {
                        var i,
                            o,
                            r,
                            s,
                            a,
                            l,
                            c = 0,
                            u = !1,
                            h = !1,
                            d = !0;
                        if ("function" != typeof t) throw new TypeError("Expected a function");
                        function f(e) {
                            var n = i,
                                r = o;
                            return (i = o = void 0), (c = e), (s = t.apply(r, n));
                        }
                        function p(t) {
                            var n = t - l;
                            return void 0 === l || n >= e || n < 0 || (h && t - c >= r);
                        }
                        function g() {
                            var t = k();
                            if (p(t)) return m(t);
                            a = setTimeout(
                                g,
                                (function (t) {
                                    var n = e - (t - l);
                                    return h ? A(n, r - (t - c)) : n;
                                })(t)
                            );
                        }
                        function m(t) {
                            return (a = void 0), d && i ? f(t) : ((i = o = void 0), s);
                        }
                        function v() {
                            var t = k(),
                                n = p(t);
                            if (((i = arguments), (o = this), (l = t), n)) {
                                if (void 0 === a)
                                    return (function (t) {
                                        return (c = t), (a = setTimeout(g, e)), u ? f(t) : s;
                                    })(l);
                                if (h) return (a = setTimeout(g, e)), f(l);
                            }
                            return void 0 === a && (a = setTimeout(g, e)), s;
                        }
                        return (
                            (e = I(e) || 0),
                            N(n) && ((u = !!n.leading), (r = (h = "maxWait" in n) ? D(I(n.maxWait) || 0, e) : r), (d = "trailing" in n ? !!n.trailing : d)),
                            (v.cancel = function () {
                                void 0 !== a && clearTimeout(a), (c = 0), (i = l = o = a = void 0);
                            }),
                            (v.flush = function () {
                                return void 0 === a ? s : m(k());
                            }),
                            v
                        );
                    },
                    O = function () {};
                function P(t) {
                    t &&
                        t.forEach(function (t) {
                            var e = Array.prototype.slice.call(t.addedNodes),
                                n = Array.prototype.slice.call(t.removedNodes);
                            if (
                                (function t(e) {
                                    var n = void 0,
                                        i = void 0;
                                    for (n = 0; n < e.length; n += 1) {
                                        if ((i = e[n]).dataset && i.dataset.aos) return !0;
                                        if (i.children && t(i.children)) return !0;
                                    }
                                    return !1;
                                })(e.concat(n))
                            )
                                return O();
                        });
                }
                function j() {
                    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                }
                var q = (function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                            }
                        }
                        return function (e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e;
                        };
                    })(),
                    R =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                            }
                            return t;
                        },
                    W = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                    F = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    z = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                    B = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
                function U() {
                    return navigator.userAgent || navigator.vendor || window.opera || "";
                }
                var $ = new ((function () {
                        function t() {
                            !(function (t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            })(this, t);
                        }
                        return (
                            q(t, [
                                {
                                    key: "phone",
                                    value: function () {
                                        var t = U();
                                        return !(!W.test(t) && !F.test(t.substr(0, 4)));
                                    },
                                },
                                {
                                    key: "mobile",
                                    value: function () {
                                        var t = U();
                                        return !(!z.test(t) && !B.test(t.substr(0, 4)));
                                    },
                                },
                                {
                                    key: "tablet",
                                    value: function () {
                                        return this.mobile() && !this.phone();
                                    },
                                },
                                {
                                    key: "ie11",
                                    value: function () {
                                        return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
                                    },
                                },
                            ]),
                            t
                        );
                    })())(),
                    V = function (t, e) {
                        var n = void 0;
                        return $.ie11() ? (n = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, { detail: e }) : (n = new CustomEvent(t, { detail: e })), document.dispatchEvent(n);
                    },
                    Q = function (t) {
                        return t.forEach(function (t, e) {
                            return (function (t, e) {
                                var n = t.options,
                                    i = t.position,
                                    o = t.node,
                                    r =
                                        (t.data,
                                        function () {
                                            t.animated &&
                                                ((function (t, e) {
                                                    e &&
                                                        e.forEach(function (e) {
                                                            return t.classList.remove(e);
                                                        });
                                                })(o, n.animatedClassNames),
                                                V("aos:out", o),
                                                t.options.id && V("aos:in:" + t.options.id, o),
                                                (t.animated = !1));
                                        });
                                n.mirror && e >= i.out && !n.once
                                    ? r()
                                    : e >= i.in
                                    ? t.animated ||
                                      ((function (t, e) {
                                          e &&
                                              e.forEach(function (e) {
                                                  return t.classList.add(e);
                                              });
                                      })(o, n.animatedClassNames),
                                      V("aos:in", o),
                                      t.options.id && V("aos:in:" + t.options.id, o),
                                      (t.animated = !0))
                                    : t.animated && !n.once && r();
                            })(t, window.pageYOffset);
                        });
                    },
                    X = function (t) {
                        for (var e = 0, n = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop); )
                            (e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0)), (n += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0)), (t = t.offsetParent);
                        return { top: n, left: e };
                    },
                    K = function (t, e, n) {
                        var i = t.getAttribute("data-aos-" + e);
                        if (void 0 !== i) {
                            if ("true" === i) return !0;
                            if ("false" === i) return !1;
                        }
                        return i || n;
                    },
                    Y = function (t, e) {
                        return (
                            t.forEach(function (t, n) {
                                var i = K(t.node, "mirror", e.mirror),
                                    o = K(t.node, "once", e.once),
                                    r = K(t.node, "id"),
                                    s = e.useClassNames && t.node.getAttribute("data-aos"),
                                    a = [e.animatedClassName].concat(s ? s.split(" ") : []).filter(function (t) {
                                        return "string" == typeof t;
                                    });
                                e.initClassName && t.node.classList.add(e.initClassName),
                                    (t.position = {
                                        in: (function (t, e, n) {
                                            var i = window.innerHeight,
                                                o = K(t, "anchor"),
                                                r = K(t, "anchor-placement"),
                                                s = Number(K(t, "offset", r ? 0 : e)),
                                                a = r || n,
                                                l = t;
                                            o && document.querySelectorAll(o) && (l = document.querySelectorAll(o)[0]);
                                            var c = X(l).top - i;
                                            switch (a) {
                                                case "top-bottom":
                                                    break;
                                                case "center-bottom":
                                                    c += l.offsetHeight / 2;
                                                    break;
                                                case "bottom-bottom":
                                                    c += l.offsetHeight;
                                                    break;
                                                case "top-center":
                                                    c += i / 2;
                                                    break;
                                                case "center-center":
                                                    c += i / 2 + l.offsetHeight / 2;
                                                    break;
                                                case "bottom-center":
                                                    c += i / 2 + l.offsetHeight;
                                                    break;
                                                case "top-top":
                                                    c += i;
                                                    break;
                                                case "bottom-top":
                                                    c += i + l.offsetHeight;
                                                    break;
                                                case "center-top":
                                                    c += i + l.offsetHeight / 2;
                                            }
                                            return c + s;
                                        })(t.node, e.offset, e.anchorPlacement),
                                        out:
                                            i &&
                                            (function (t, e) {
                                                window.innerHeight;
                                                var n = K(t, "anchor"),
                                                    i = K(t, "offset", e),
                                                    o = t;
                                                return n && document.querySelectorAll(n) && (o = document.querySelectorAll(n)[0]), X(o).top + o.offsetHeight - i;
                                            })(t.node, e.offset),
                                    }),
                                    (t.options = { once: o, mirror: i, animatedClassNames: a, id: r });
                            }),
                            t
                        );
                    },
                    G = function () {
                        var t = document.querySelectorAll("[data-aos]");
                        return Array.prototype.map.call(t, function (t) {
                            return { node: t };
                        });
                    },
                    J = [],
                    Z = !1,
                    tt = {
                        offset: 120,
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        disable: !1,
                        once: !1,
                        mirror: !1,
                        anchorPlacement: "top-bottom",
                        startEvent: "DOMContentLoaded",
                        animatedClassName: "aos-animate",
                        initClassName: "aos-init",
                        useClassNames: !1,
                        disableMutationObserver: !1,
                        throttleDelay: 99,
                        debounceDelay: 50,
                    },
                    et = function () {
                        return document.all && !window.atob;
                    },
                    nt = function () {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (Z = !0),
                            Z &&
                                ((J = Y(J, tt)),
                                Q(J),
                                window.addEventListener(
                                    "scroll",
                                    v(function () {
                                        Q(J, tt.once);
                                    }, tt.throttleDelay)
                                ));
                    },
                    it = function () {
                        if (((J = G()), rt(tt.disable) || et())) return ot();
                        nt();
                    },
                    ot = function () {
                        J.forEach(function (t, e) {
                            t.node.removeAttribute("data-aos"),
                                t.node.removeAttribute("data-aos-easing"),
                                t.node.removeAttribute("data-aos-duration"),
                                t.node.removeAttribute("data-aos-delay"),
                                tt.initClassName && t.node.classList.remove(tt.initClassName),
                                tt.animatedClassName && t.node.classList.remove(tt.animatedClassName);
                        });
                    },
                    rt = function (t) {
                        return !0 === t || ("mobile" === t && $.mobile()) || ("phone" === t && $.phone()) || ("tablet" === t && $.tablet()) || ("function" == typeof t && !0 === t());
                    };
                return {
                    init: function (t) {
                        return (
                            (tt = R(tt, t)),
                            (J = G()),
                            tt.disableMutationObserver ||
                                !!j() ||
                                (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),
                                (tt.disableMutationObserver = !0)),
                            tt.disableMutationObserver ||
                                (function (t, e) {
                                    var n = window.document,
                                        i = new (j())(P);
                                    (O = e), i.observe(n.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
                                })(0, it),
                            rt(tt.disable) || et()
                                ? ot()
                                : (document.querySelector("body").setAttribute("data-aos-easing", tt.easing),
                                  document.querySelector("body").setAttribute("data-aos-duration", tt.duration),
                                  document.querySelector("body").setAttribute("data-aos-delay", tt.delay),
                                  -1 === ["DOMContentLoaded", "load"].indexOf(tt.startEvent)
                                      ? document.addEventListener(tt.startEvent, function () {
                                            nt(!0);
                                        })
                                      : window.addEventListener("load", function () {
                                            nt(!0);
                                        }),
                                  "DOMContentLoaded" === tt.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 && nt(!0),
                                  window.addEventListener("resize", L(nt, tt.debounceDelay, !0)),
                                  window.addEventListener("orientationchange", L(nt, tt.debounceDelay, !0)),
                                  J)
                        );
                    },
                    refresh: nt,
                    refreshHard: it,
                };
            })();
        }.call(this, n(4)));
    },
    function (t, e, n) {
        n(9), n(13), n(14), n(15), n(16), n(17), n(18), n(31), n(32), n(33), n(34), n(35), n(36), (t.exports = n(37));
    },
    function (t, e, n) {
        "use strict";
        n.r(e), n(10);
        var i = n(6),
            o = n.n(i),
            r = n(7),
            s = n.n(r);
        new o.a({ elements_selector: ".lazy" }), s.a.init();
    },
    function (t, e, n) {
        /*!
         * Bootstrap v4.4.1 (https://getbootstrap.com/)
         * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
         */
        !(function (t, e, n) {
            "use strict";
            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }
            function o(t, e, n) {
                return e && i(t.prototype, e), n && i(t, n), t;
            }
            function r(t, e, n) {
                return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
            }
            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e &&
                        (i = i.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, i);
                }
                return n;
            }
            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? s(Object(n), !0).forEach(function (e) {
                              r(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : s(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          });
                }
                return t;
            }
            (e = e && e.hasOwnProperty("default") ? e.default : e), (n = n && n.hasOwnProperty("default") ? n.default : n);
            var c = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function (t) {
                    do {
                        t += ~~(1e6 * Math.random());
                    } while (document.getElementById(t));
                    return t;
                },
                getSelectorFromElement: function (t) {
                    var e = t.getAttribute("data-target");
                    if (!e || "#" === e) {
                        var n = t.getAttribute("href");
                        e = n && "#" !== n ? n.trim() : "";
                    }
                    try {
                        return document.querySelector(e) ? e : null;
                    } catch (t) {
                        return null;
                    }
                },
                getTransitionDurationFromElement: function (t) {
                    if (!t) return 0;
                    var n = e(t).css("transition-duration"),
                        i = e(t).css("transition-delay"),
                        o = parseFloat(n),
                        r = parseFloat(i);
                    return o || r ? ((n = n.split(",")[0]), (i = i.split(",")[0]), 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
                },
                reflow: function (t) {
                    return t.offsetHeight;
                },
                triggerTransitionEnd: function (t) {
                    e(t).trigger("transitionend");
                },
                supportsTransitionEnd: function () {
                    return Boolean("transitionend");
                },
                isElement: function (t) {
                    return (t[0] || t).nodeType;
                },
                typeCheckConfig: function (t, e, n) {
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                            var o = n[i],
                                r = e[i],
                                s =
                                    r && c.isElement(r)
                                        ? "element"
                                        : ((a = r),
                                          {}.toString
                                              .call(a)
                                              .match(/\s([a-z]+)/i)[1]
                                              .toLowerCase());
                            if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
                        }
                    var a;
                },
                findShadowRoot: function (t) {
                    if (!document.documentElement.attachShadow) return null;
                    if ("function" == typeof t.getRootNode) {
                        var e = t.getRootNode();
                        return e instanceof ShadowRoot ? e : null;
                    }
                    return t instanceof ShadowRoot ? t : t.parentNode ? c.findShadowRoot(t.parentNode) : null;
                },
                jQueryDetection: function () {
                    if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                    var t = e.fn.jquery.split(" ")[0].split(".");
                    if ((t[0] < 2 && t[1] < 9) || (1 === t[0] && 9 === t[1] && t[2] < 1) || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
                },
            };
            c.jQueryDetection(),
                (e.fn.emulateTransitionEnd = function (t) {
                    var n = this,
                        i = !1;
                    return (
                        e(this).one(c.TRANSITION_END, function () {
                            i = !0;
                        }),
                        setTimeout(function () {
                            i || c.triggerTransitionEnd(n);
                        }, t),
                        this
                    );
                }),
                (e.event.special[c.TRANSITION_END] = {
                    bindType: "transitionend",
                    delegateType: "transitionend",
                    handle: function (t) {
                        if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
                    },
                });
            var u = "alert",
                h = e.fn[u],
                d_CLOSE = "close.bs.alert",
                d_CLOSED = "closed.bs.alert",
                d_CLICK_DATA_API = "click.bs.alert.data-api",
                m = (function () {
                    function t(t) {
                        this._element = t;
                    }
                    var n = t.prototype;
                    return (
                        (n.close = function (t) {
                            var e = this._element;
                            t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
                        }),
                        (n.dispose = function () {
                            e.removeData(this._element, "bs.alert"), (this._element = null);
                        }),
                        (n._getRootElement = function (t) {
                            var n = c.getSelectorFromElement(t),
                                i = !1;
                            return n && (i = document.querySelector(n)), i || (i = e(t).closest(".alert")[0]), i;
                        }),
                        (n._triggerCloseEvent = function (t) {
                            var n = e.Event(d_CLOSE);
                            return e(t).trigger(n), n;
                        }),
                        (n._removeElement = function (t) {
                            var n = this;
                            if ((e(t).removeClass("show"), e(t).hasClass("fade"))) {
                                var i = c.getTransitionDurationFromElement(t);
                                e(t)
                                    .one(c.TRANSITION_END, function (e) {
                                        return n._destroyElement(t, e);
                                    })
                                    .emulateTransitionEnd(i);
                            } else this._destroyElement(t);
                        }),
                        (n._destroyElement = function (t) {
                            e(t).detach().trigger(d_CLOSED).remove();
                        }),
                        (t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this),
                                    o = i.data("bs.alert");
                                o || ((o = new t(this)), i.data("bs.alert", o)), "close" === n && o[n](this);
                            });
                        }),
                        (t._handleDismiss = function (t) {
                            return function (e) {
                                e && e.preventDefault(), t.close(this);
                            };
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.4.1";
                                },
                            },
                        ]),
                        t
                    );
                })();
            e(document).on(d_CLICK_DATA_API, '[data-dismiss="alert"]', m._handleDismiss(new m())),
                (e.fn[u] = m._jQueryInterface),
                (e.fn[u].Constructor = m),
                (e.fn[u].noConflict = function () {
                    return (e.fn[u] = h), m._jQueryInterface;
                });
            var v = e.fn.button,
                y = "active",
                w = '[data-toggle^="button"]',
                S = 'input:not([type="hidden"])',
                D = ".btn",
                A_CLICK_DATA_API = "click.bs.button.data-api",
                A_FOCUS_BLUR_DATA_API = "focus.bs.button.data-api blur.bs.button.data-api",
                A_LOAD_DATA_API = "load.bs.button.data-api",
                k = (function () {
                    function t(t) {
                        this._element = t;
                    }
                    var n = t.prototype;
                    return (
                        (n.toggle = function () {
                            var t = !0,
                                n = !0,
                                i = e(this._element).closest('[data-toggle="buttons"]')[0];
                            if (i) {
                                var o = this._element.querySelector(S);
                                if (o) {
                                    if ("radio" === o.type)
                                        if (o.checked && this._element.classList.contains(y)) t = !1;
                                        else {
                                            var r = i.querySelector(".active");
                                            r && e(r).removeClass(y);
                                        }
                                    else "checkbox" === o.type ? "LABEL" === this._element.tagName && o.checked === this._element.classList.contains(y) && (t = !1) : (t = !1);
                                    t && ((o.checked = !this._element.classList.contains(y)), e(o).trigger("change")), o.focus(), (n = !1);
                                }
                            }
                            this._element.hasAttribute("disabled") ||
                                this._element.classList.contains("disabled") ||
                                (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(y)), t && e(this._element).toggleClass(y));
                        }),
                        (n.dispose = function () {
                            e.removeData(this._element, "bs.button"), (this._element = null);
                        }),
                        (t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this).data("bs.button");
                                i || ((i = new t(this)), e(this).data("bs.button", i)), "toggle" === n && i[n]();
                            });
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.4.1";
                                },
                            },
                        ]),
                        t
                    );
                })();
            e(document)
                .on(A_CLICK_DATA_API, w, function (t) {
                    var n = t.target;
                    if ((e(n).hasClass("btn") || (n = e(n).closest(D)[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled"))) t.preventDefault();
                    else {
                        var i = n.querySelector(S);
                        if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void t.preventDefault();
                        k._jQueryInterface.call(e(n), "toggle");
                    }
                })
                .on(A_FOCUS_BLUR_DATA_API, w, function (t) {
                    var n = e(t.target).closest(D)[0];
                    e(n).toggleClass("focus", /^focus(in)?$/.test(t.type));
                }),
                e(window).on(A_LOAD_DATA_API, function () {
                    for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
                        var i = t[e],
                            o = i.querySelector(S);
                        o.checked || o.hasAttribute("checked") ? i.classList.add(y) : i.classList.remove(y);
                    }
                    for (var r = 0, s = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < s; r++) {
                        var a = t[r];
                        "true" === a.getAttribute("aria-pressed") ? a.classList.add(y) : a.classList.remove(y);
                    }
                }),
                (e.fn.button = k._jQueryInterface),
                (e.fn.button.Constructor = k),
                (e.fn.button.noConflict = function () {
                    return (e.fn.button = v), k._jQueryInterface;
                });
            var N = "carousel",
                I = ".bs.carousel",
                L = e.fn[N],
                O = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
                P = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
                j = "next",
                M = "prev",
                R = {
                    SLIDE: "slide" + I,
                    SLID: "slid" + I,
                    KEYDOWN: "keydown" + I,
                    MOUSEENTER: "mouseenter" + I,
                    MOUSELEAVE: "mouseleave" + I,
                    TOUCHSTART: "touchstart" + I,
                    TOUCHMOVE: "touchmove" + I,
                    TOUCHEND: "touchend" + I,
                    POINTERDOWN: "pointerdown" + I,
                    POINTERUP: "pointerup" + I,
                    DRAG_START: "dragstart" + I,
                    LOAD_DATA_API: "load" + I + ".data-api",
                    CLICK_DATA_API: "click" + I + ".data-api",
                },
                F = "active",
                K = ".active.carousel-item",
                nt = { TOUCH: "touch", PEN: "pen" },
                it = (function () {
                    function t(t, e) {
                        (this._items = null),
                            (this._interval = null),
                            (this._activeElement = null),
                            (this._isPaused = !1),
                            (this._isSliding = !1),
                            (this.touchTimeout = null),
                            (this.touchStartX = 0),
                            (this.touchDeltaX = 0),
                            (this._config = this._getConfig(e)),
                            (this._element = t),
                            (this._indicatorsElement = this._element.querySelector(".carousel-indicators")),
                            (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
                            (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
                            this._addEventListeners();
                    }
                    var n = t.prototype;
                    return (
                        (n.next = function () {
                            this._isSliding || this._slide(j);
                        }),
                        (n.nextWhenVisible = function () {
                            !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
                        }),
                        (n.prev = function () {
                            this._isSliding || this._slide(M);
                        }),
                        (n.pause = function (t) {
                            t || (this._isPaused = !0),
                                this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (c.triggerTransitionEnd(this._element), this.cycle(!0)),
                                clearInterval(this._interval),
                                (this._interval = null);
                        }),
                        (n.cycle = function (t) {
                            t || (this._isPaused = !1),
                                this._interval && (clearInterval(this._interval), (this._interval = null)),
                                this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
                        }),
                        (n.to = function (t) {
                            var n = this;
                            this._activeElement = this._element.querySelector(K);
                            var i = this._getItemIndex(this._activeElement);
                            if (!(t > this._items.length - 1 || t < 0))
                                if (this._isSliding)
                                    e(this._element).one(R.SLID, function () {
                                        return n.to(t);
                                    });
                                else {
                                    if (i === t) return this.pause(), void this.cycle();
                                    var o = t > i ? j : M;
                                    this._slide(o, this._items[t]);
                                }
                        }),
                        (n.dispose = function () {
                            e(this._element).off(I),
                                e.removeData(this._element, "bs.carousel"),
                                (this._items = null),
                                (this._config = null),
                                (this._element = null),
                                (this._interval = null),
                                (this._isPaused = null),
                                (this._isSliding = null),
                                (this._activeElement = null),
                                (this._indicatorsElement = null);
                        }),
                        (n._getConfig = function (t) {
                            return (t = a({}, O, {}, t)), c.typeCheckConfig(N, t, P), t;
                        }),
                        (n._handleSwipe = function () {
                            var t = Math.abs(this.touchDeltaX);
                            if (!(t <= 40)) {
                                var e = t / this.touchDeltaX;
                                (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
                            }
                        }),
                        (n._addEventListeners = function () {
                            var t = this;
                            this._config.keyboard &&
                                e(this._element).on(R.KEYDOWN, function (e) {
                                    return t._keydown(e);
                                }),
                                "hover" === this._config.pause &&
                                    e(this._element)
                                        .on(R.MOUSEENTER, function (e) {
                                            return t.pause(e);
                                        })
                                        .on(R.MOUSELEAVE, function (e) {
                                            return t.cycle(e);
                                        }),
                                this._config.touch && this._addTouchEventListeners();
                        }),
                        (n._addTouchEventListeners = function () {
                            var t = this;
                            if (this._touchSupported) {
                                var n = function (e) {
                                        t._pointerEvent && nt[e.originalEvent.pointerType.toUpperCase()] ? (t.touchStartX = e.originalEvent.clientX) : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX);
                                    },
                                    i = function (e) {
                                        t._pointerEvent && nt[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                                            t._handleSwipe(),
                                            "hover" === t._config.pause &&
                                                (t.pause(),
                                                t.touchTimeout && clearTimeout(t.touchTimeout),
                                                (t.touchTimeout = setTimeout(function (e) {
                                                    return t.cycle(e);
                                                }, 500 + t._config.interval)));
                                    };
                                e(this._element.querySelectorAll(".carousel-item img")).on(R.DRAG_START, function (t) {
                                    return t.preventDefault();
                                }),
                                    this._pointerEvent
                                        ? (e(this._element).on(R.POINTERDOWN, function (t) {
                                              return n(t);
                                          }),
                                          e(this._element).on(R.POINTERUP, function (t) {
                                              return i(t);
                                          }),
                                          this._element.classList.add("pointer-event"))
                                        : (e(this._element).on(R.TOUCHSTART, function (t) {
                                              return n(t);
                                          }),
                                          e(this._element).on(R.TOUCHMOVE, function (e) {
                                              return (function (e) {
                                                  e.originalEvent.touches && e.originalEvent.touches.length > 1 ? (t.touchDeltaX = 0) : (t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX);
                                              })(e);
                                          }),
                                          e(this._element).on(R.TOUCHEND, function (t) {
                                              return i(t);
                                          }));
                            }
                        }),
                        (n._keydown = function (t) {
                            if (!/input|textarea/i.test(t.target.tagName))
                                switch (t.which) {
                                    case 37:
                                        t.preventDefault(), this.prev();
                                        break;
                                    case 39:
                                        t.preventDefault(), this.next();
                                }
                        }),
                        (n._getItemIndex = function (t) {
                            return (this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : []), this._items.indexOf(t);
                        }),
                        (n._getItemByDirection = function (t, e) {
                            var n = t === j,
                                i = t === M,
                                o = this._getItemIndex(e),
                                r = this._items.length - 1;
                            if (((i && 0 === o) || (n && o === r)) && !this._config.wrap) return e;
                            var s = (o + (t === M ? -1 : 1)) % this._items.length;
                            return -1 === s ? this._items[this._items.length - 1] : this._items[s];
                        }),
                        (n._triggerSlideEvent = function (t, n) {
                            var i = this._getItemIndex(t),
                                o = this._getItemIndex(this._element.querySelector(K)),
                                r = e.Event(R.SLIDE, { relatedTarget: t, direction: n, from: o, to: i });
                            return e(this._element).trigger(r), r;
                        }),
                        (n._setActiveIndicatorElement = function (t) {
                            if (this._indicatorsElement) {
                                var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                                e(n).removeClass(F);
                                var i = this._indicatorsElement.children[this._getItemIndex(t)];
                                i && e(i).addClass(F);
                            }
                        }),
                        (n._slide = function (t, n) {
                            var i,
                                o,
                                r,
                                s = this,
                                a = this._element.querySelector(K),
                                l = this._getItemIndex(a),
                                u = n || (a && this._getItemByDirection(t, a)),
                                h = this._getItemIndex(u),
                                d = Boolean(this._interval);
                            if ((t === j ? ((i = "carousel-item-left"), (o = "carousel-item-next"), (r = "left")) : ((i = "carousel-item-right"), (o = "carousel-item-prev"), (r = "right")), u && e(u).hasClass(F))) this._isSliding = !1;
                            else if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && a && u) {
                                (this._isSliding = !0), d && this.pause(), this._setActiveIndicatorElement(u);
                                var f = e.Event(R.SLID, { relatedTarget: u, direction: r, from: l, to: h });
                                if (e(this._element).hasClass("slide")) {
                                    e(u).addClass(o), c.reflow(u), e(a).addClass(i), e(u).addClass(i);
                                    var p = parseInt(u.getAttribute("data-interval"), 10);
                                    p ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = p)) : (this._config.interval = this._config.defaultInterval || this._config.interval);
                                    var g = c.getTransitionDurationFromElement(a);
                                    e(a)
                                        .one(c.TRANSITION_END, function () {
                                            e(u)
                                                .removeClass(i + " " + o)
                                                .addClass(F),
                                                e(a).removeClass(F + " " + o + " " + i),
                                                (s._isSliding = !1),
                                                setTimeout(function () {
                                                    return e(s._element).trigger(f);
                                                }, 0);
                                        })
                                        .emulateTransitionEnd(g);
                                } else e(a).removeClass(F), e(u).addClass(F), (this._isSliding = !1), e(this._element).trigger(f);
                                d && this.cycle();
                            }
                        }),
                        (t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this).data("bs.carousel"),
                                    o = a({}, O, {}, e(this).data());
                                "object" == typeof n && (o = a({}, o, {}, n));
                                var r = "string" == typeof n ? n : o.slide;
                                if ((i || ((i = new t(this, o)), e(this).data("bs.carousel", i)), "number" == typeof n)) i.to(n);
                                else if ("string" == typeof r) {
                                    if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');
                                    i[r]();
                                } else o.interval && o.ride && (i.pause(), i.cycle());
                            });
                        }),
                        (t._dataApiClickHandler = function (n) {
                            var i = c.getSelectorFromElement(this);
                            if (i) {
                                var o = e(i)[0];
                                if (o && e(o).hasClass("carousel")) {
                                    var r = a({}, e(o).data(), {}, e(this).data()),
                                        s = this.getAttribute("data-slide-to");
                                    s && (r.interval = !1), t._jQueryInterface.call(e(o), r), s && e(o).data("bs.carousel").to(s), n.preventDefault();
                                }
                            }
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.4.1";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return O;
                                },
                            },
                        ]),
                        t
                    );
                })();
            e(document).on(R.CLICK_DATA_API, "[data-slide], [data-slide-to]", it._dataApiClickHandler),
                e(window).on(R.LOAD_DATA_API, function () {
                    for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = t.length; n < i; n++) {
                        var o = e(t[n]);
                        it._jQueryInterface.call(o, o.data());
                    }
                }),
                (e.fn[N] = it._jQueryInterface),
                (e.fn[N].Constructor = it),
                (e.fn[N].noConflict = function () {
                    return (e.fn[N] = L), it._jQueryInterface;
                });
            var ot = "collapse",
                rt = e.fn[ot],
                st = { toggle: !0, parent: "" },
                at = { toggle: "boolean", parent: "(string|element)" },
                lt_SHOW = "show.bs.collapse",
                lt_SHOWN = "shown.bs.collapse",
                lt_HIDE = "hide.bs.collapse",
                lt_HIDDEN = "hidden.bs.collapse",
                lt_CLICK_DATA_API = "click.bs.collapse.data-api",
                ct = "show",
                ut = "collapse",
                ht = "collapsing",
                dt = "collapsed",
                mt = '[data-toggle="collapse"]',
                vt = (function () {
                    function t(t, e) {
                        (this._isTransitioning = !1),
                            (this._element = t),
                            (this._config = this._getConfig(e)),
                            (this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')));
                        for (var n = [].slice.call(document.querySelectorAll(mt)), i = 0, o = n.length; i < o; i++) {
                            var r = n[i],
                                s = c.getSelectorFromElement(r),
                                a = [].slice.call(document.querySelectorAll(s)).filter(function (e) {
                                    return e === t;
                                });
                            null !== s && a.length > 0 && ((this._selector = s), this._triggerArray.push(r));
                        }
                        (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
                    }
                    var n = t.prototype;
                    return (
                        (n.toggle = function () {
                            e(this._element).hasClass(ct) ? this.hide() : this.show();
                        }),
                        (n.show = function () {
                            var n,
                                i,
                                o = this;
                            if (
                                !(
                                    this._isTransitioning ||
                                    e(this._element).hasClass(ct) ||
                                    (this._parent &&
                                        0 ===
                                            (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (t) {
                                                return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains(ut);
                                            })).length &&
                                        (n = null),
                                    n && (i = e(n).not(this._selector).data("bs.collapse")) && i._isTransitioning)
                                )
                            ) {
                                var r = e.Event(lt_SHOW);
                                if ((e(this._element).trigger(r), !r.isDefaultPrevented())) {
                                    n && (t._jQueryInterface.call(e(n).not(this._selector), "hide"), i || e(n).data("bs.collapse", null));
                                    var s = this._getDimension();
                                    e(this._element).removeClass(ut).addClass(ht), (this._element.style[s] = 0), this._triggerArray.length && e(this._triggerArray).removeClass(dt).attr("aria-expanded", !0), this.setTransitioning(!0);
                                    var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                                        l = c.getTransitionDurationFromElement(this._element);
                                    e(this._element)
                                        .one(c.TRANSITION_END, function () {
                                            e(o._element).removeClass(ht).addClass(ut).addClass(ct), (o._element.style[s] = ""), o.setTransitioning(!1), e(o._element).trigger(lt_SHOWN);
                                        })
                                        .emulateTransitionEnd(l),
                                        (this._element.style[s] = this._element[a] + "px");
                                }
                            }
                        }),
                        (n.hide = function () {
                            var t = this;
                            if (!this._isTransitioning && e(this._element).hasClass(ct)) {
                                var n = e.Event(lt_HIDE);
                                if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
                                    var i = this._getDimension();
                                    (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px"), c.reflow(this._element), e(this._element).addClass(ht).removeClass(ut).removeClass(ct);
                                    var o = this._triggerArray.length;
                                    if (o > 0)
                                        for (var r = 0; r < o; r++) {
                                            var s = this._triggerArray[r],
                                                a = c.getSelectorFromElement(s);
                                            null !== a && (e([].slice.call(document.querySelectorAll(a))).hasClass(ct) || e(s).addClass(dt).attr("aria-expanded", !1));
                                        }
                                    this.setTransitioning(!0), (this._element.style[i] = "");
                                    var l = c.getTransitionDurationFromElement(this._element);
                                    e(this._element)
                                        .one(c.TRANSITION_END, function () {
                                            t.setTransitioning(!1), e(t._element).removeClass(ht).addClass(ut).trigger(lt_HIDDEN);
                                        })
                                        .emulateTransitionEnd(l);
                                }
                            }
                        }),
                        (n.setTransitioning = function (t) {
                            this._isTransitioning = t;
                        }),
                        (n.dispose = function () {
                            e.removeData(this._element, "bs.collapse"), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                        }),
                        (n._getConfig = function (t) {
                            return ((t = a({}, st, {}, t)).toggle = Boolean(t.toggle)), c.typeCheckConfig(ot, t, at), t;
                        }),
                        (n._getDimension = function () {
                            return e(this._element).hasClass("width") ? "width" : "height";
                        }),
                        (n._getParent = function () {
                            var n,
                                i = this;
                            c.isElement(this._config.parent) ? ((n = this._config.parent), void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : (n = document.querySelector(this._config.parent));
                            var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                                r = [].slice.call(n.querySelectorAll(o));
                            return (
                                e(r).each(function (e, n) {
                                    i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n]);
                                }),
                                n
                            );
                        }),
                        (n._addAriaAndCollapsedClass = function (t, n) {
                            var i = e(t).hasClass(ct);
                            n.length && e(n).toggleClass(dt, !i).attr("aria-expanded", i);
                        }),
                        (t._getTargetFromElement = function (t) {
                            var e = c.getSelectorFromElement(t);
                            return e ? document.querySelector(e) : null;
                        }),
                        (t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this),
                                    o = i.data("bs.collapse"),
                                    r = a({}, st, {}, i.data(), {}, "object" == typeof n && n ? n : {});
                                if ((!o && r.toggle && /show|hide/.test(n) && (r.toggle = !1), o || ((o = new t(this, r)), i.data("bs.collapse", o)), "string" == typeof n)) {
                                    if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                                    o[n]();
                                }
                            });
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.4.1";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return st;
                                },
                            },
                        ]),
                        t
                    );
                })();
            e(document).on(lt_CLICK_DATA_API, mt, function (t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var n = e(this),
                    i = c.getSelectorFromElement(this),
                    o = [].slice.call(document.querySelectorAll(i));
                e(o).each(function () {
                    var t = e(this),
                        i = t.data("bs.collapse") ? "toggle" : n.data();
                    vt._jQueryInterface.call(t, i);
                });
            }),
                (e.fn[ot] = vt._jQueryInterface),
                (e.fn[ot].Constructor = vt),
                (e.fn[ot].noConflict = function () {
                    return (e.fn[ot] = rt), vt._jQueryInterface;
                });
            var yt = "dropdown",
                bt = e.fn[yt],
                _t = new RegExp("38|40|27"),
                wt_HIDE = "hide.bs.dropdown",
                wt_HIDDEN = "hidden.bs.dropdown",
                wt_SHOW = "show.bs.dropdown",
                wt_SHOWN = "shown.bs.dropdown",
                wt_CLICK = "click.bs.dropdown",
                wt_CLICK_DATA_API = "click.bs.dropdown.data-api",
                wt_KEYDOWN_DATA_API = "keydown.bs.dropdown.data-api",
                wt_KEYUP_DATA_API = "keyup.bs.dropdown.data-api",
                Et = "disabled",
                xt = "show",
                Dt = "dropdown-menu-right",
                kt = '[data-toggle="dropdown"]',
                It = ".dropdown-menu",
                Wt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
                Ft = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
                zt = (function () {
                    function t(t, e) {
                        (this._element = t), (this._popper = null), (this._config = this._getConfig(e)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
                    }
                    var i = t.prototype;
                    return (
                        (i.toggle = function () {
                            if (!this._element.disabled && !e(this._element).hasClass(Et)) {
                                var n = e(this._menu).hasClass(xt);
                                t._clearMenus(), n || this.show(!0);
                            }
                        }),
                        (i.show = function (i) {
                            if ((void 0 === i && (i = !1), !(this._element.disabled || e(this._element).hasClass(Et) || e(this._menu).hasClass(xt)))) {
                                var o = { relatedTarget: this._element },
                                    r = e.Event(wt_SHOW, o),
                                    s = t._getParentFromElement(this._element);
                                if ((e(s).trigger(r), !r.isDefaultPrevented())) {
                                    if (!this._inNavbar && i) {
                                        if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                        var a = this._element;
                                        "parent" === this._config.reference ? (a = s) : c.isElement(this._config.reference) && ((a = this._config.reference), void 0 !== this._config.reference.jquery && (a = this._config.reference[0])),
                                            "scrollParent" !== this._config.boundary && e(s).addClass("position-static"),
                                            (this._popper = new n(a, this._menu, this._getPopperConfig()));
                                    }
                                    "ontouchstart" in document.documentElement && 0 === e(s).closest(".navbar-nav").length && e(document.body).children().on("mouseover", null, e.noop),
                                        this._element.focus(),
                                        this._element.setAttribute("aria-expanded", !0),
                                        e(this._menu).toggleClass(xt),
                                        e(s).toggleClass(xt).trigger(e.Event(wt_SHOWN, o));
                                }
                            }
                        }),
                        (i.hide = function () {
                            if (!this._element.disabled && !e(this._element).hasClass(Et) && e(this._menu).hasClass(xt)) {
                                var n = { relatedTarget: this._element },
                                    i = e.Event(wt_HIDE, n),
                                    o = t._getParentFromElement(this._element);
                                e(o).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), e(this._menu).toggleClass(xt), e(o).toggleClass(xt).trigger(e.Event(wt_HIDDEN, n)));
                            }
                        }),
                        (i.dispose = function () {
                            e.removeData(this._element, "bs.dropdown"), e(this._element).off(".bs.dropdown"), (this._element = null), (this._menu = null), null !== this._popper && (this._popper.destroy(), (this._popper = null));
                        }),
                        (i.update = function () {
                            (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
                        }),
                        (i._addEventListeners = function () {
                            var t = this;
                            e(this._element).on(wt_CLICK, function (e) {
                                e.preventDefault(), e.stopPropagation(), t.toggle();
                            });
                        }),
                        (i._getConfig = function (t) {
                            return (t = a({}, this.constructor.Default, {}, e(this._element).data(), {}, t)), c.typeCheckConfig(yt, t, this.constructor.DefaultType), t;
                        }),
                        (i._getMenuElement = function () {
                            if (!this._menu) {
                                var e = t._getParentFromElement(this._element);
                                e && (this._menu = e.querySelector(It));
                            }
                            return this._menu;
                        }),
                        (i._getPlacement = function () {
                            var t = e(this._element.parentNode),
                                n = "bottom-start";
                            return (
                                t.hasClass("dropup")
                                    ? ((n = "top-start"), e(this._menu).hasClass(Dt) && (n = "top-end"))
                                    : t.hasClass("dropright")
                                    ? (n = "right-start")
                                    : t.hasClass("dropleft")
                                    ? (n = "left-start")
                                    : e(this._menu).hasClass(Dt) && (n = "bottom-end"),
                                n
                            );
                        }),
                        (i._detectNavbar = function () {
                            return e(this._element).closest(".navbar").length > 0;
                        }),
                        (i._getOffset = function () {
                            var t = this,
                                e = {};
                            return (
                                "function" == typeof this._config.offset
                                    ? (e.fn = function (e) {
                                          return (e.offsets = a({}, e.offsets, {}, t._config.offset(e.offsets, t._element) || {})), e;
                                      })
                                    : (e.offset = this._config.offset),
                                e
                            );
                        }),
                        (i._getPopperConfig = function () {
                            var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                            return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), a({}, t, {}, this._config.popperConfig);
                        }),
                        (t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this).data("bs.dropdown");
                                if ((i || ((i = new t(this, "object" == typeof n ? n : null)), e(this).data("bs.dropdown", i)), "string" == typeof n)) {
                                    if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                                    i[n]();
                                }
                            });
                        }),
                        (t._clearMenus = function (n) {
                            if (!n || (3 !== n.which && ("keyup" !== n.type || 9 === n.which)))
                                for (var i = [].slice.call(document.querySelectorAll(kt)), o = 0, r = i.length; o < r; o++) {
                                    var s = t._getParentFromElement(i[o]),
                                        a = e(i[o]).data("bs.dropdown"),
                                        l = { relatedTarget: i[o] };
                                    if ((n && "click" === n.type && (l.clickEvent = n), a)) {
                                        var c = a._menu;
                                        if (e(s).hasClass(xt) && !(n && (("click" === n.type && /input|textarea/i.test(n.target.tagName)) || ("keyup" === n.type && 9 === n.which)) && e.contains(s, n.target))) {
                                            var u = e.Event(wt_HIDE, l);
                                            e(s).trigger(u),
                                                u.isDefaultPrevented() ||
                                                    ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                                                    i[o].setAttribute("aria-expanded", "false"),
                                                    a._popper && a._popper.destroy(),
                                                    e(c).removeClass(xt),
                                                    e(s).removeClass(xt).trigger(e.Event(wt_HIDDEN, l)));
                                        }
                                    }
                                }
                        }),
                        (t._getParentFromElement = function (t) {
                            var e,
                                n = c.getSelectorFromElement(t);
                            return n && (e = document.querySelector(n)), e || t.parentNode;
                        }),
                        (t._dataApiKeydownHandler = function (n) {
                            if (
                                !(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || (27 !== n.which && ((40 !== n.which && 38 !== n.which) || e(n.target).closest(It).length)) : !_t.test(n.which)) &&
                                (n.preventDefault(), n.stopPropagation(), !this.disabled && !e(this).hasClass(Et))
                            ) {
                                var i = t._getParentFromElement(this),
                                    o = e(i).hasClass(xt);
                                if (o || 27 !== n.which)
                                    if (o && (!o || (27 !== n.which && 32 !== n.which))) {
                                        var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (t) {
                                            return e(t).is(":visible");
                                        });
                                        if (0 !== r.length) {
                                            var s = r.indexOf(n.target);
                                            38 === n.which && s > 0 && s--, 40 === n.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus();
                                        }
                                    } else {
                                        if (27 === n.which) {
                                            var a = i.querySelector(kt);
                                            e(a).trigger("focus");
                                        }
                                        e(this).trigger("click");
                                    }
                            }
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.4.1";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return Wt;
                                },
                            },
                            {
                                key: "DefaultType",
                                get: function () {
                                    return Ft;
                                },
                            },
                        ]),
                        t
                    );
                })();
            e(document)
                .on(wt_KEYDOWN_DATA_API, kt, zt._dataApiKeydownHandler)
                .on(wt_KEYDOWN_DATA_API, It, zt._dataApiKeydownHandler)
                .on(wt_CLICK_DATA_API + " " + wt_KEYUP_DATA_API, zt._clearMenus)
                .on(wt_CLICK_DATA_API, kt, function (t) {
                    t.preventDefault(), t.stopPropagation(), zt._jQueryInterface.call(e(this), "toggle");
                })
                .on(wt_CLICK_DATA_API, ".dropdown form", function (t) {
                    t.stopPropagation();
                }),
                (e.fn[yt] = zt._jQueryInterface),
                (e.fn[yt].Constructor = zt),
                (e.fn[yt].noConflict = function () {
                    return (e.fn[yt] = bt), zt._jQueryInterface;
                });
            var Bt = e.fn.modal,
                Ut = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
                $t = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
                Vt_HIDE = "hide.bs.modal",
                Vt_HIDE_PREVENTED = "hidePrevented.bs.modal",
                Vt_HIDDEN = "hidden.bs.modal",
                Vt_SHOW = "show.bs.modal",
                Vt_SHOWN = "shown.bs.modal",
                Vt_FOCUSIN = "focusin.bs.modal",
                Vt_RESIZE = "resize.bs.modal",
                Vt_CLICK_DISMISS = "click.dismiss.bs.modal",
                Vt_KEYDOWN_DISMISS = "keydown.dismiss.bs.modal",
                Vt_MOUSEUP_DISMISS = "mouseup.dismiss.bs.modal",
                Vt_MOUSEDOWN_DISMISS = "mousedown.dismiss.bs.modal",
                Vt_CLICK_DATA_API = "click.bs.modal.data-api",
                Yt = "modal-open",
                Gt = "fade",
                Jt = "show",
                Zt = "modal-static",
                oe = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                re = ".sticky-top",
                se = (function () {
                    function t(t, e) {
                        (this._config = this._getConfig(e)),
                            (this._element = t),
                            (this._dialog = t.querySelector(".modal-dialog")),
                            (this._backdrop = null),
                            (this._isShown = !1),
                            (this._isBodyOverflowing = !1),
                            (this._ignoreBackdropClick = !1),
                            (this._isTransitioning = !1),
                            (this._scrollbarWidth = 0);
                    }
                    var n = t.prototype;
                    return (
                        (n.toggle = function (t) {
                            return this._isShown ? this.hide() : this.show(t);
                        }),
                        (n.show = function (t) {
                            var n = this;
                            if (!this._isShown && !this._isTransitioning) {
                                e(this._element).hasClass(Gt) && (this._isTransitioning = !0);
                                var i = e.Event(Vt_SHOW, { relatedTarget: t });
                                e(this._element).trigger(i),
                                    this._isShown ||
                                        i.isDefaultPrevented() ||
                                        ((this._isShown = !0),
                                        this._checkScrollbar(),
                                        this._setScrollbar(),
                                        this._adjustDialog(),
                                        this._setEscapeEvent(),
                                        this._setResizeEvent(),
                                        e(this._element).on(Vt_CLICK_DISMISS, '[data-dismiss="modal"]', function (t) {
                                            return n.hide(t);
                                        }),
                                        e(this._dialog).on(Vt_MOUSEDOWN_DISMISS, function () {
                                            e(n._element).one(Vt_MOUSEUP_DISMISS, function (t) {
                                                e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
                                            });
                                        }),
                                        this._showBackdrop(function () {
                                            return n._showElement(t);
                                        }));
                            }
                        }),
                        (n.hide = function (t) {
                            var n = this;
                            if ((t && t.preventDefault(), this._isShown && !this._isTransitioning)) {
                                var i = e.Event(Vt_HIDE);
                                if ((e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented())) {
                                    this._isShown = !1;
                                    var o = e(this._element).hasClass(Gt);
                                    if (
                                        (o && (this._isTransitioning = !0),
                                        this._setEscapeEvent(),
                                        this._setResizeEvent(),
                                        e(document).off(Vt_FOCUSIN),
                                        e(this._element).removeClass(Jt),
                                        e(this._element).off(Vt_CLICK_DISMISS),
                                        e(this._dialog).off(Vt_MOUSEDOWN_DISMISS),
                                        o)
                                    ) {
                                        var r = c.getTransitionDurationFromElement(this._element);
                                        e(this._element)
                                            .one(c.TRANSITION_END, function (t) {
                                                return n._hideModal(t);
                                            })
                                            .emulateTransitionEnd(r);
                                    } else this._hideModal();
                                }
                            }
                        }),
                        (n.dispose = function () {
                            [window, this._element, this._dialog].forEach(function (t) {
                                return e(t).off(".bs.modal");
                            }),
                                e(document).off(Vt_FOCUSIN),
                                e.removeData(this._element, "bs.modal"),
                                (this._config = null),
                                (this._element = null),
                                (this._dialog = null),
                                (this._backdrop = null),
                                (this._isShown = null),
                                (this._isBodyOverflowing = null),
                                (this._ignoreBackdropClick = null),
                                (this._isTransitioning = null),
                                (this._scrollbarWidth = null);
                        }),
                        (n.handleUpdate = function () {
                            this._adjustDialog();
                        }),
                        (n._getConfig = function (t) {
                            return (t = a({}, Ut, {}, t)), c.typeCheckConfig("modal", t, $t), t;
                        }),
                        (n._triggerBackdropTransition = function () {
                            var t = this;
                            if ("static" === this._config.backdrop) {
                                var n = e.Event(Vt_HIDE_PREVENTED);
                                if ((e(this._element).trigger(n), n.defaultPrevented)) return;
                                this._element.classList.add(Zt);
                                var i = c.getTransitionDurationFromElement(this._element);
                                e(this._element)
                                    .one(c.TRANSITION_END, function () {
                                        t._element.classList.remove(Zt);
                                    })
                                    .emulateTransitionEnd(i),
                                    this._element.focus();
                            } else this.hide();
                        }),
                        (n._showElement = function (t) {
                            var n = this,
                                i = e(this._element).hasClass(Gt),
                                o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                            (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                                (this._element.style.display = "block"),
                                this._element.removeAttribute("aria-hidden"),
                                this._element.setAttribute("aria-modal", !0),
                                e(this._dialog).hasClass("modal-dialog-scrollable") && o ? (o.scrollTop = 0) : (this._element.scrollTop = 0),
                                i && c.reflow(this._element),
                                e(this._element).addClass(Jt),
                                this._config.focus && this._enforceFocus();
                            var r = e.Event(Vt_SHOWN, { relatedTarget: t }),
                                s = function () {
                                    n._config.focus && n._element.focus(), (n._isTransitioning = !1), e(n._element).trigger(r);
                                };
                            if (i) {
                                var a = c.getTransitionDurationFromElement(this._dialog);
                                e(this._dialog).one(c.TRANSITION_END, s).emulateTransitionEnd(a);
                            } else s();
                        }),
                        (n._enforceFocus = function () {
                            var t = this;
                            e(document)
                                .off(Vt_FOCUSIN)
                                .on(Vt_FOCUSIN, function (n) {
                                    document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus();
                                });
                        }),
                        (n._setEscapeEvent = function () {
                            var t = this;
                            this._isShown && this._config.keyboard
                                ? e(this._element).on(Vt_KEYDOWN_DISMISS, function (e) {
                                      27 === e.which && t._triggerBackdropTransition();
                                  })
                                : this._isShown || e(this._element).off(Vt_KEYDOWN_DISMISS);
                        }),
                        (n._setResizeEvent = function () {
                            var t = this;
                            this._isShown
                                ? e(window).on(Vt_RESIZE, function (e) {
                                      return t.handleUpdate(e);
                                  })
                                : e(window).off(Vt_RESIZE);
                        }),
                        (n._hideModal = function () {
                            var t = this;
                            (this._element.style.display = "none"),
                                this._element.setAttribute("aria-hidden", !0),
                                this._element.removeAttribute("aria-modal"),
                                (this._isTransitioning = !1),
                                this._showBackdrop(function () {
                                    e(document.body).removeClass(Yt), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(Vt_HIDDEN);
                                });
                        }),
                        (n._removeBackdrop = function () {
                            this._backdrop && (e(this._backdrop).remove(), (this._backdrop = null));
                        }),
                        (n._showBackdrop = function (t) {
                            var n = this,
                                i = e(this._element).hasClass(Gt) ? Gt : "";
                            if (this._isShown && this._config.backdrop) {
                                if (
                                    ((this._backdrop = document.createElement("div")),
                                    (this._backdrop.className = "modal-backdrop"),
                                    i && this._backdrop.classList.add(i),
                                    e(this._backdrop).appendTo(document.body),
                                    e(this._element).on(Vt_CLICK_DISMISS, function (t) {
                                        n._ignoreBackdropClick ? (n._ignoreBackdropClick = !1) : t.target === t.currentTarget && n._triggerBackdropTransition();
                                    }),
                                    i && c.reflow(this._backdrop),
                                    e(this._backdrop).addClass(Jt),
                                    !t)
                                )
                                    return;
                                if (!i) return void t();
                                var o = c.getTransitionDurationFromElement(this._backdrop);
                                e(this._backdrop).one(c.TRANSITION_END, t).emulateTransitionEnd(o);
                            } else if (!this._isShown && this._backdrop) {
                                e(this._backdrop).removeClass(Jt);
                                var r = function () {
                                    n._removeBackdrop(), t && t();
                                };
                                if (e(this._element).hasClass(Gt)) {
                                    var s = c.getTransitionDurationFromElement(this._backdrop);
                                    e(this._backdrop).one(c.TRANSITION_END, r).emulateTransitionEnd(s);
                                } else r();
                            } else t && t();
                        }),
                        (n._adjustDialog = function () {
                            var t = this._element.scrollHeight > document.documentElement.clientHeight;
                            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                        }),
                        (n._resetAdjustments = function () {
                            (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                        }),
                        (n._checkScrollbar = function () {
                            var t = document.body.getBoundingClientRect();
                            (this._isBodyOverflowing = t.left + t.right < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                        }),
                        (n._setScrollbar = function () {
                            var t = this;
                            if (this._isBodyOverflowing) {
                                var n = [].slice.call(document.querySelectorAll(oe)),
                                    i = [].slice.call(document.querySelectorAll(re));
                                e(n).each(function (n, i) {
                                    var o = i.style.paddingRight,
                                        r = e(i).css("padding-right");
                                    e(i)
                                        .data("padding-right", o)
                                        .css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
                                }),
                                    e(i).each(function (n, i) {
                                        var o = i.style.marginRight,
                                            r = e(i).css("margin-right");
                                        e(i)
                                            .data("margin-right", o)
                                            .css("margin-right", parseFloat(r) - t._scrollbarWidth + "px");
                                    });
                                var o = document.body.style.paddingRight,
                                    r = e(document.body).css("padding-right");
                                e(document.body)
                                    .data("padding-right", o)
                                    .css("padding-right", parseFloat(r) + this._scrollbarWidth + "px");
                            }
                            e(document.body).addClass(Yt);
                        }),
                        (n._resetScrollbar = function () {
                            var t = [].slice.call(document.querySelectorAll(oe));
                            e(t).each(function (t, n) {
                                var i = e(n).data("padding-right");
                                e(n).removeData("padding-right"), (n.style.paddingRight = i || "");
                            });
                            var n = [].slice.call(document.querySelectorAll("" + re));
                            e(n).each(function (t, n) {
                                var i = e(n).data("margin-right");
                                void 0 !== i && e(n).css("margin-right", i).removeData("margin-right");
                            });
                            var i = e(document.body).data("padding-right");
                            e(document.body).removeData("padding-right"), (document.body.style.paddingRight = i || "");
                        }),
                        (n._getScrollbarWidth = function () {
                            var t = document.createElement("div");
                            (t.className = "modal-scrollbar-measure"), document.body.appendChild(t);
                            var e = t.getBoundingClientRect().width - t.clientWidth;
                            return document.body.removeChild(t), e;
                        }),
                        (t._jQueryInterface = function (n, i) {
                            return this.each(function () {
                                var o = e(this).data("bs.modal"),
                                    r = a({}, Ut, {}, e(this).data(), {}, "object" == typeof n && n ? n : {});
                                if ((o || ((o = new t(this, r)), e(this).data("bs.modal", o)), "string" == typeof n)) {
                                    if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                                    o[n](i);
                                } else r.show && o.show(i);
                            });
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.4.1";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return Ut;
                                },
                            },
                        ]),
                        t
                    );
                })();
            e(document).on(Vt_CLICK_DATA_API, '[data-toggle="modal"]', function (t) {
                var n,
                    i = this,
                    o = c.getSelectorFromElement(this);
                o && (n = document.querySelector(o));
                var r = e(n).data("bs.modal") ? "toggle" : a({}, e(n).data(), {}, e(this).data());
                ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
                var s = e(n).one(Vt_SHOW, function (t) {
                    t.isDefaultPrevented() ||
                        s.one(Vt_HIDDEN, function () {
                            e(i).is(":visible") && i.focus();
                        });
                });
                se._jQueryInterface.call(e(n), r, this);
            }),
                (e.fn.modal = se._jQueryInterface),
                (e.fn.modal.Constructor = se),
                (e.fn.modal.noConflict = function () {
                    return (e.fn.modal = Bt), se._jQueryInterface;
                });
            var ae = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
                ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                ue = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
            function he(t, e, n) {
                if (0 === t.length) return t;
                if (n && "function" == typeof n) return n(t);
                for (
                    var i = new window.DOMParser().parseFromString(t, "text/html"),
                        o = Object.keys(e),
                        r = [].slice.call(i.body.querySelectorAll("*")),
                        s = function (t, n) {
                            var i = r[t],
                                s = i.nodeName.toLowerCase();
                            if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                            var a = [].slice.call(i.attributes),
                                l = [].concat(e["*"] || [], e[s] || []);
                            a.forEach(function (t) {
                                (function (t, e) {
                                    var n = t.nodeName.toLowerCase();
                                    if (-1 !== e.indexOf(n)) return -1 === ae.indexOf(n) || Boolean(t.nodeValue.match(ce) || t.nodeValue.match(ue));
                                    for (
                                        var i = e.filter(function (t) {
                                                return t instanceof RegExp;
                                            }),
                                            o = 0,
                                            r = i.length;
                                        o < r;
                                        o++
                                    )
                                        if (n.match(i[o])) return !0;
                                    return !1;
                                })(t, l) || i.removeAttribute(t.nodeName);
                            });
                        },
                        a = 0,
                        l = r.length;
                    a < l;
                    a++
                )
                    s(a);
                return i.body.innerHTML;
            }
            var de = "tooltip",
                fe = e.fn[de],
                pe = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                ge = ["sanitize", "whiteList", "sanitizeFn"],
                me = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string|function)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)",
                    sanitize: "boolean",
                    sanitizeFn: "(null|function)",
                    whiteList: "object",
                    popperConfig: "(null|object)",
                },
                ve = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
                ye = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent",
                    sanitize: !0,
                    sanitizeFn: null,
                    whiteList: {
                        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                        a: ["target", "href", "title", "rel"],
                        area: [],
                        b: [],
                        br: [],
                        col: [],
                        code: [],
                        div: [],
                        em: [],
                        hr: [],
                        h1: [],
                        h2: [],
                        h3: [],
                        h4: [],
                        h5: [],
                        h6: [],
                        i: [],
                        img: ["src", "alt", "title", "width", "height"],
                        li: [],
                        ol: [],
                        p: [],
                        pre: [],
                        s: [],
                        small: [],
                        span: [],
                        sub: [],
                        sup: [],
                        strong: [],
                        u: [],
                        ul: [],
                    },
                    popperConfig: null,
                },
                be = "show",
                we = {
                    HIDE: "hide.bs.tooltip",
                    HIDDEN: "hidden.bs.tooltip",
                    SHOW: "show.bs.tooltip",
                    SHOWN: "shown.bs.tooltip",
                    INSERTED: "inserted.bs.tooltip",
                    CLICK: "click.bs.tooltip",
                    FOCUSIN: "focusin.bs.tooltip",
                    FOCUSOUT: "focusout.bs.tooltip",
                    MOUSEENTER: "mouseenter.bs.tooltip",
                    MOUSELEAVE: "mouseleave.bs.tooltip",
                },
                Ee = "fade",
                xe = "show",
                Te = "hover",
                De = "focus",
                Ne = (function () {
                    function t(t, e) {
                        if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                        (this._isEnabled = !0),
                            (this._timeout = 0),
                            (this._hoverState = ""),
                            (this._activeTrigger = {}),
                            (this._popper = null),
                            (this.element = t),
                            (this.config = this._getConfig(e)),
                            (this.tip = null),
                            this._setListeners();
                    }
                    var i = t.prototype;
                    return (
                        (i.enable = function () {
                            this._isEnabled = !0;
                        }),
                        (i.disable = function () {
                            this._isEnabled = !1;
                        }),
                        (i.toggleEnabled = function () {
                            this._isEnabled = !this._isEnabled;
                        }),
                        (i.toggle = function (t) {
                            if (this._isEnabled)
                                if (t) {
                                    var n = this.constructor.DATA_KEY,
                                        i = e(t.currentTarget).data(n);
                                    i || ((i = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(n, i)),
                                        (i._activeTrigger.click = !i._activeTrigger.click),
                                        i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
                                } else {
                                    if (e(this.getTipElement()).hasClass(xe)) return void this._leave(null, this);
                                    this._enter(null, this);
                                }
                        }),
                        (i.dispose = function () {
                            clearTimeout(this._timeout),
                                e.removeData(this.element, this.constructor.DATA_KEY),
                                e(this.element).off(this.constructor.EVENT_KEY),
                                e(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
                                this.tip && e(this.tip).remove(),
                                (this._isEnabled = null),
                                (this._timeout = null),
                                (this._hoverState = null),
                                (this._activeTrigger = null),
                                this._popper && this._popper.destroy(),
                                (this._popper = null),
                                (this.element = null),
                                (this.config = null),
                                (this.tip = null);
                        }),
                        (i.show = function () {
                            var t = this;
                            if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                            var i = e.Event(this.constructor.Event.SHOW);
                            if (this.isWithContent() && this._isEnabled) {
                                e(this.element).trigger(i);
                                var o = c.findShadowRoot(this.element),
                                    r = e.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
                                if (i.isDefaultPrevented() || !r) return;
                                var s = this.getTipElement(),
                                    a = c.getUID(this.constructor.NAME);
                                s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && e(s).addClass(Ee);
                                var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                                    u = this._getAttachment(l);
                                this.addAttachmentClass(u);
                                var h = this._getContainer();
                                e(s).data(this.constructor.DATA_KEY, this),
                                    e.contains(this.element.ownerDocument.documentElement, this.tip) || e(s).appendTo(h),
                                    e(this.element).trigger(this.constructor.Event.INSERTED),
                                    (this._popper = new n(this.element, s, this._getPopperConfig(u))),
                                    e(s).addClass(xe),
                                    "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                                var d = function () {
                                    t.config.animation && t._fixTransition();
                                    var n = t._hoverState;
                                    (t._hoverState = null), e(t.element).trigger(t.constructor.Event.SHOWN), "out" === n && t._leave(null, t);
                                };
                                if (e(this.tip).hasClass(Ee)) {
                                    var f = c.getTransitionDurationFromElement(this.tip);
                                    e(this.tip).one(c.TRANSITION_END, d).emulateTransitionEnd(f);
                                } else d();
                            }
                        }),
                        (i.hide = function (t) {
                            var n = this,
                                i = this.getTipElement(),
                                o = e.Event(this.constructor.Event.HIDE),
                                r = function () {
                                    n._hoverState !== be && i.parentNode && i.parentNode.removeChild(i),
                                        n._cleanTipClass(),
                                        n.element.removeAttribute("aria-describedby"),
                                        e(n.element).trigger(n.constructor.Event.HIDDEN),
                                        null !== n._popper && n._popper.destroy(),
                                        t && t();
                                };
                            if ((e(this.element).trigger(o), !o.isDefaultPrevented())) {
                                if (
                                    (e(i).removeClass(xe),
                                    "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                                    (this._activeTrigger.click = !1),
                                    (this._activeTrigger[De] = !1),
                                    (this._activeTrigger[Te] = !1),
                                    e(this.tip).hasClass(Ee))
                                ) {
                                    var s = c.getTransitionDurationFromElement(i);
                                    e(i).one(c.TRANSITION_END, r).emulateTransitionEnd(s);
                                } else r();
                                this._hoverState = "";
                            }
                        }),
                        (i.update = function () {
                            null !== this._popper && this._popper.scheduleUpdate();
                        }),
                        (i.isWithContent = function () {
                            return Boolean(this.getTitle());
                        }),
                        (i.addAttachmentClass = function (t) {
                            e(this.getTipElement()).addClass("bs-tooltip-" + t);
                        }),
                        (i.getTipElement = function () {
                            return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
                        }),
                        (i.setContent = function () {
                            var t = this.getTipElement();
                            this.setElementContent(e(t.querySelectorAll(".tooltip-inner")), this.getTitle()), e(t).removeClass(Ee + " " + xe);
                        }),
                        (i.setElementContent = function (t, n) {
                            "object" != typeof n || (!n.nodeType && !n.jquery)
                                ? this.config.html
                                    ? (this.config.sanitize && (n = he(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n))
                                    : t.text(n)
                                : this.config.html
                                ? e(n).parent().is(t) || t.empty().append(n)
                                : t.text(e(n).text());
                        }),
                        (i.getTitle = function () {
                            var t = this.element.getAttribute("data-original-title");
                            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
                        }),
                        (i._getPopperConfig = function (t) {
                            var e = this;
                            return a(
                                {},
                                {
                                    placement: t,
                                    modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } },
                                    onCreate: function (t) {
                                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                                    },
                                    onUpdate: function (t) {
                                        return e._handlePopperPlacementChange(t);
                                    },
                                },
                                {},
                                this.config.popperConfig
                            );
                        }),
                        (i._getOffset = function () {
                            var t = this,
                                e = {};
                            return (
                                "function" == typeof this.config.offset
                                    ? (e.fn = function (e) {
                                          return (e.offsets = a({}, e.offsets, {}, t.config.offset(e.offsets, t.element) || {})), e;
                                      })
                                    : (e.offset = this.config.offset),
                                e
                            );
                        }),
                        (i._getContainer = function () {
                            return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container);
                        }),
                        (i._getAttachment = function (t) {
                            return ve[t.toUpperCase()];
                        }),
                        (i._setListeners = function () {
                            var t = this;
                            this.config.trigger.split(" ").forEach(function (n) {
                                if ("click" === n)
                                    e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                                        return t.toggle(e);
                                    });
                                else if ("manual" !== n) {
                                    var i = n === Te ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                        o = n === Te ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                    e(t.element)
                                        .on(i, t.config.selector, function (e) {
                                            return t._enter(e);
                                        })
                                        .on(o, t.config.selector, function (e) {
                                            return t._leave(e);
                                        });
                                }
                            }),
                                (this._hideModalHandler = function () {
                                    t.element && t.hide();
                                }),
                                e(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
                                this.config.selector ? (this.config = a({}, this.config, { trigger: "manual", selector: "" })) : this._fixTitle();
                        }),
                        (i._fixTitle = function () {
                            var t = typeof this.element.getAttribute("data-original-title");
                            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                        }),
                        (i._enter = function (t, n) {
                            var i = this.constructor.DATA_KEY;
                            (n = n || e(t.currentTarget).data(i)) || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(i, n)),
                                t && (n._activeTrigger["focusin" === t.type ? De : Te] = !0),
                                e(n.getTipElement()).hasClass(xe) || n._hoverState === be
                                    ? (n._hoverState = be)
                                    : (clearTimeout(n._timeout),
                                      (n._hoverState = be),
                                      n.config.delay && n.config.delay.show
                                          ? (n._timeout = setTimeout(function () {
                                                n._hoverState === be && n.show();
                                            }, n.config.delay.show))
                                          : n.show());
                        }),
                        (i._leave = function (t, n) {
                            var i = this.constructor.DATA_KEY;
                            (n = n || e(t.currentTarget).data(i)) || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(i, n)),
                                t && (n._activeTrigger["focusout" === t.type ? De : Te] = !1),
                                n._isWithActiveTrigger() ||
                                    (clearTimeout(n._timeout),
                                    (n._hoverState = "out"),
                                    n.config.delay && n.config.delay.hide
                                        ? (n._timeout = setTimeout(function () {
                                              "out" === n._hoverState && n.hide();
                                          }, n.config.delay.hide))
                                        : n.hide());
                        }),
                        (i._isWithActiveTrigger = function () {
                            for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                            return !1;
                        }),
                        (i._getConfig = function (t) {
                            var n = e(this.element).data();
                            return (
                                Object.keys(n).forEach(function (t) {
                                    -1 !== ge.indexOf(t) && delete n[t];
                                }),
                                "number" == typeof (t = a({}, this.constructor.Default, {}, n, {}, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }),
                                "number" == typeof t.title && (t.title = t.title.toString()),
                                "number" == typeof t.content && (t.content = t.content.toString()),
                                c.typeCheckConfig(de, t, this.constructor.DefaultType),
                                t.sanitize && (t.template = he(t.template, t.whiteList, t.sanitizeFn)),
                                t
                            );
                        }),
                        (i._getDelegateConfig = function () {
                            var t = {};
                            if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                            return t;
                        }),
                        (i._cleanTipClass = function () {
                            var t = e(this.getTipElement()),
                                n = t.attr("class").match(pe);
                            null !== n && n.length && t.removeClass(n.join(""));
                        }),
                        (i._handlePopperPlacementChange = function (t) {
                            var e = t.instance;
                            (this.tip = e.popper), this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
                        }),
                        (i._fixTransition = function () {
                            var t = this.getTipElement(),
                                n = this.config.animation;
                            null === t.getAttribute("x-placement") && (e(t).removeClass(Ee), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = n));
                        }),
                        (t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this).data("bs.tooltip"),
                                    o = "object" == typeof n && n;
                                if ((i || !/dispose|hide/.test(n)) && (i || ((i = new t(this, o)), e(this).data("bs.tooltip", i)), "string" == typeof n)) {
                                    if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                                    i[n]();
                                }
                            });
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.4.1";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return ye;
                                },
                            },
                            {
                                key: "NAME",
                                get: function () {
                                    return de;
                                },
                            },
                            {
                                key: "DATA_KEY",
                                get: function () {
                                    return "bs.tooltip";
                                },
                            },
                            {
                                key: "Event",
                                get: function () {
                                    return we;
                                },
                            },
                            {
                                key: "EVENT_KEY",
                                get: function () {
                                    return ".bs.tooltip";
                                },
                            },
                            {
                                key: "DefaultType",
                                get: function () {
                                    return me;
                                },
                            },
                        ]),
                        t
                    );
                })();
            (e.fn[de] = Ne._jQueryInterface),
                (e.fn[de].Constructor = Ne),
                (e.fn[de].noConflict = function () {
                    return (e.fn[de] = fe), Ne._jQueryInterface;
                });
            var Ie = "popover",
                Le = e.fn[Ie],
                Oe = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                Pe = a({}, Ne.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
                je = a({}, Ne.DefaultType, { content: "(string|element|function)" }),
                We = {
                    HIDE: "hide.bs.popover",
                    HIDDEN: "hidden.bs.popover",
                    SHOW: "show.bs.popover",
                    SHOWN: "shown.bs.popover",
                    INSERTED: "inserted.bs.popover",
                    CLICK: "click.bs.popover",
                    FOCUSIN: "focusin.bs.popover",
                    FOCUSOUT: "focusout.bs.popover",
                    MOUSEENTER: "mouseenter.bs.popover",
                    MOUSELEAVE: "mouseleave.bs.popover",
                },
                Fe = (function (t) {
                    var n, i;
                    function r() {
                        return t.apply(this, arguments) || this;
                    }
                    (i = t), ((n = r).prototype = Object.create(i.prototype)), (n.prototype.constructor = n), (n.__proto__ = i);
                    var s = r.prototype;
                    return (
                        (s.isWithContent = function () {
                            return this.getTitle() || this._getContent();
                        }),
                        (s.addAttachmentClass = function (t) {
                            e(this.getTipElement()).addClass("bs-popover-" + t);
                        }),
                        (s.getTipElement = function () {
                            return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
                        }),
                        (s.setContent = function () {
                            var t = e(this.getTipElement());
                            this.setElementContent(t.find(".popover-header"), this.getTitle());
                            var n = this._getContent();
                            "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(".popover-body"), n), t.removeClass("fade show");
                        }),
                        (s._getContent = function () {
                            return this.element.getAttribute("data-content") || this.config.content;
                        }),
                        (s._cleanTipClass = function () {
                            var t = e(this.getTipElement()),
                                n = t.attr("class").match(Oe);
                            null !== n && n.length > 0 && t.removeClass(n.join(""));
                        }),
                        (r._jQueryInterface = function (t) {
                            return this.each(function () {
                                var n = e(this).data("bs.popover"),
                                    i = "object" == typeof t ? t : null;
                                if ((n || !/dispose|hide/.test(t)) && (n || ((n = new r(this, i)), e(this).data("bs.popover", n)), "string" == typeof t)) {
                                    if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                    n[t]();
                                }
                            });
                        }),
                        o(r, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.4.1";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return Pe;
                                },
                            },
                            {
                                key: "NAME",
                                get: function () {
                                    return Ie;
                                },
                            },
                            {
                                key: "DATA_KEY",
                                get: function () {
                                    return "bs.popover";
                                },
                            },
                            {
                                key: "Event",
                                get: function () {
                                    return We;
                                },
                            },
                            {
                                key: "EVENT_KEY",
                                get: function () {
                                    return ".bs.popover";
                                },
                            },
                            {
                                key: "DefaultType",
                                get: function () {
                                    return je;
                                },
                            },
                        ]),
                        r
                    );
                })(Ne);
            (e.fn[Ie] = Fe._jQueryInterface),
                (e.fn[Ie].Constructor = Fe),
                (e.fn[Ie].noConflict = function () {
                    return (e.fn[Ie] = Le), Fe._jQueryInterface;
                });
            var ze = "scrollspy",
                Be = e.fn[ze],
                Ue = { offset: 10, method: "auto", target: "" },
                $e = { offset: "number", method: "string", target: "(string|element)" },
                Ve_ACTIVATE = "activate.bs.scrollspy",
                Ve_SCROLL = "scroll.bs.scrollspy",
                Ve_LOAD_DATA_API = "load.bs.scrollspy.data-api",
                Xe = "active",
                Ye = ".nav, .list-group",
                Ge = ".nav-link",
                Ze = ".list-group-item",
                rn = "position",
                sn = (function () {
                    function t(t, n) {
                        var i = this;
                        (this._element = t),
                            (this._scrollElement = "BODY" === t.tagName ? window : t),
                            (this._config = this._getConfig(n)),
                            (this._selector = this._config.target + " " + Ge + "," + this._config.target + " " + Ze + "," + this._config.target + " .dropdown-item"),
                            (this._offsets = []),
                            (this._targets = []),
                            (this._activeTarget = null),
                            (this._scrollHeight = 0),
                            e(this._scrollElement).on(Ve_SCROLL, function (t) {
                                return i._process(t);
                            }),
                            this.refresh(),
                            this._process();
                    }
                    var n = t.prototype;
                    return (
                        (n.refresh = function () {
                            var t = this,
                                n = this._scrollElement === this._scrollElement.window ? "offset" : rn,
                                i = "auto" === this._config.method ? n : this._config.method,
                                o = i === rn ? this._getScrollTop() : 0;
                            (this._offsets = []),
                                (this._targets = []),
                                (this._scrollHeight = this._getScrollHeight()),
                                [].slice
                                    .call(document.querySelectorAll(this._selector))
                                    .map(function (t) {
                                        var n,
                                            r = c.getSelectorFromElement(t);
                                        if ((r && (n = document.querySelector(r)), n)) {
                                            var s = n.getBoundingClientRect();
                                            if (s.width || s.height) return [e(n)[i]().top + o, r];
                                        }
                                        return null;
                                    })
                                    .filter(function (t) {
                                        return t;
                                    })
                                    .sort(function (t, e) {
                                        return t[0] - e[0];
                                    })
                                    .forEach(function (e) {
                                        t._offsets.push(e[0]), t._targets.push(e[1]);
                                    });
                        }),
                        (n.dispose = function () {
                            e.removeData(this._element, "bs.scrollspy"),
                                e(this._scrollElement).off(".bs.scrollspy"),
                                (this._element = null),
                                (this._scrollElement = null),
                                (this._config = null),
                                (this._selector = null),
                                (this._offsets = null),
                                (this._targets = null),
                                (this._activeTarget = null),
                                (this._scrollHeight = null);
                        }),
                        (n._getConfig = function (t) {
                            if ("string" != typeof (t = a({}, Ue, {}, "object" == typeof t && t ? t : {})).target) {
                                var n = e(t.target).attr("id");
                                n || ((n = c.getUID(ze)), e(t.target).attr("id", n)), (t.target = "#" + n);
                            }
                            return c.typeCheckConfig(ze, t, $e), t;
                        }),
                        (n._getScrollTop = function () {
                            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                        }),
                        (n._getScrollHeight = function () {
                            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                        }),
                        (n._getOffsetHeight = function () {
                            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                        }),
                        (n._process = function () {
                            var t = this._getScrollTop() + this._config.offset,
                                e = this._getScrollHeight(),
                                n = this._config.offset + e - this._getOffsetHeight();
                            if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                                var i = this._targets[this._targets.length - 1];
                                this._activeTarget !== i && this._activate(i);
                            } else {
                                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
                                for (var o = this._offsets.length; o--; ) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
                            }
                        }),
                        (n._activate = function (t) {
                            (this._activeTarget = t), this._clear();
                            var n = this._selector.split(",").map(function (e) {
                                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
                                }),
                                i = e([].slice.call(document.querySelectorAll(n.join(","))));
                            i.hasClass("dropdown-item")
                                ? (i.closest(".dropdown").find(".dropdown-toggle").addClass(Xe), i.addClass(Xe))
                                : (i.addClass(Xe),
                                  i
                                      .parents(Ye)
                                      .prev(Ge + ", " + Ze)
                                      .addClass(Xe),
                                  i.parents(Ye).prev(".nav-item").children(Ge).addClass(Xe)),
                                e(this._scrollElement).trigger(Ve_ACTIVATE, { relatedTarget: t });
                        }),
                        (n._clear = function () {
                            [].slice
                                .call(document.querySelectorAll(this._selector))
                                .filter(function (t) {
                                    return t.classList.contains(Xe);
                                })
                                .forEach(function (t) {
                                    return t.classList.remove(Xe);
                                });
                        }),
                        (t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this).data("bs.scrollspy");
                                if ((i || ((i = new t(this, "object" == typeof n && n)), e(this).data("bs.scrollspy", i)), "string" == typeof n)) {
                                    if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                                    i[n]();
                                }
                            });
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.4.1";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return Ue;
                                },
                            },
                        ]),
                        t
                    );
                })();
            e(window).on(Ve_LOAD_DATA_API, function () {
                for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = t.length; n--; ) {
                    var i = e(t[n]);
                    sn._jQueryInterface.call(i, i.data());
                }
            }),
                (e.fn[ze] = sn._jQueryInterface),
                (e.fn[ze].Constructor = sn),
                (e.fn[ze].noConflict = function () {
                    return (e.fn[ze] = Be), sn._jQueryInterface;
                });
            var an = e.fn.tab,
                ln_HIDE = "hide.bs.tab",
                ln_HIDDEN = "hidden.bs.tab",
                ln_SHOW = "show.bs.tab",
                ln_SHOWN = "shown.bs.tab",
                ln_CLICK_DATA_API = "click.bs.tab.data-api",
                un = "active",
                mn = ".active",
                vn = "> li > .active",
                wn = (function () {
                    function t(t) {
                        this._element = t;
                    }
                    var n = t.prototype;
                    return (
                        (n.show = function () {
                            var t = this;
                            if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(un)) || e(this._element).hasClass("disabled"))) {
                                var n,
                                    i,
                                    o = e(this._element).closest(".nav, .list-group")[0],
                                    r = c.getSelectorFromElement(this._element);
                                if (o) {
                                    var s = "UL" === o.nodeName || "OL" === o.nodeName ? vn : mn;
                                    i = (i = e.makeArray(e(o).find(s)))[i.length - 1];
                                }
                                var a = e.Event(ln_HIDE, { relatedTarget: this._element }),
                                    l = e.Event(ln_SHOW, { relatedTarget: i });
                                if ((i && e(i).trigger(a), e(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented())) {
                                    r && (n = document.querySelector(r)), this._activate(this._element, o);
                                    var u = function () {
                                        var n = e.Event(ln_HIDDEN, { relatedTarget: t._element }),
                                            o = e.Event(ln_SHOWN, { relatedTarget: i });
                                        e(i).trigger(n), e(t._element).trigger(o);
                                    };
                                    n ? this._activate(n, n.parentNode, u) : u();
                                }
                            }
                        }),
                        (n.dispose = function () {
                            e.removeData(this._element, "bs.tab"), (this._element = null);
                        }),
                        (n._activate = function (t, n, i) {
                            var o = this,
                                r = (!n || ("UL" !== n.nodeName && "OL" !== n.nodeName) ? e(n).children(mn) : e(n).find(vn))[0],
                                s = i && r && e(r).hasClass("fade"),
                                a = function () {
                                    return o._transitionComplete(t, r, i);
                                };
                            if (r && s) {
                                var l = c.getTransitionDurationFromElement(r);
                                e(r).removeClass("show").one(c.TRANSITION_END, a).emulateTransitionEnd(l);
                            } else a();
                        }),
                        (n._transitionComplete = function (t, n, i) {
                            if (n) {
                                e(n).removeClass(un);
                                var o = e(n.parentNode).find("> .dropdown-menu .active")[0];
                                o && e(o).removeClass(un), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
                            }
                            if (
                                (e(t).addClass(un),
                                "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                                c.reflow(t),
                                t.classList.contains("fade") && t.classList.add("show"),
                                t.parentNode && e(t.parentNode).hasClass("dropdown-menu"))
                            ) {
                                var r = e(t).closest(".dropdown")[0];
                                if (r) {
                                    var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                                    e(s).addClass(un);
                                }
                                t.setAttribute("aria-expanded", !0);
                            }
                            i && i();
                        }),
                        (t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this),
                                    o = i.data("bs.tab");
                                if ((o || ((o = new t(this)), i.data("bs.tab", o)), "string" == typeof n)) {
                                    if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                                    o[n]();
                                }
                            });
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.4.1";
                                },
                            },
                        ]),
                        t
                    );
                })();
            e(document).on(ln_CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
                t.preventDefault(), wn._jQueryInterface.call(e(this), "show");
            }),
                (e.fn.tab = wn._jQueryInterface),
                (e.fn.tab.Constructor = wn),
                (e.fn.tab.noConflict = function () {
                    return (e.fn.tab = an), wn._jQueryInterface;
                });
            var En = e.fn.toast,
                xn_CLICK_DISMISS = "click.dismiss.bs.toast",
                xn_HIDE = "hide.bs.toast",
                xn_HIDDEN = "hidden.bs.toast",
                xn_SHOW = "show.bs.toast",
                xn_SHOWN = "shown.bs.toast",
                Tn = "show",
                Dn = "showing",
                An = { animation: "boolean", autohide: "boolean", delay: "number" },
                kn = { animation: !0, autohide: !0, delay: 500 },
                In = (function () {
                    function t(t, e) {
                        (this._element = t), (this._config = this._getConfig(e)), (this._timeout = null), this._setListeners();
                    }
                    var n = t.prototype;
                    return (
                        (n.show = function () {
                            var t = this,
                                n = e.Event(xn_SHOW);
                            if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
                                this._config.animation && this._element.classList.add("fade");
                                var i = function () {
                                    t._element.classList.remove(Dn),
                                        t._element.classList.add(Tn),
                                        e(t._element).trigger(xn_SHOWN),
                                        t._config.autohide &&
                                            (t._timeout = setTimeout(function () {
                                                t.hide();
                                            }, t._config.delay));
                                };
                                if ((this._element.classList.remove("hide"), c.reflow(this._element), this._element.classList.add(Dn), this._config.animation)) {
                                    var o = c.getTransitionDurationFromElement(this._element);
                                    e(this._element).one(c.TRANSITION_END, i).emulateTransitionEnd(o);
                                } else i();
                            }
                        }),
                        (n.hide = function () {
                            if (this._element.classList.contains(Tn)) {
                                var t = e.Event(xn_HIDE);
                                e(this._element).trigger(t), t.isDefaultPrevented() || this._close();
                            }
                        }),
                        (n.dispose = function () {
                            clearTimeout(this._timeout),
                                (this._timeout = null),
                                this._element.classList.contains(Tn) && this._element.classList.remove(Tn),
                                e(this._element).off(xn_CLICK_DISMISS),
                                e.removeData(this._element, "bs.toast"),
                                (this._element = null),
                                (this._config = null);
                        }),
                        (n._getConfig = function (t) {
                            return (t = a({}, kn, {}, e(this._element).data(), {}, "object" == typeof t && t ? t : {})), c.typeCheckConfig("toast", t, this.constructor.DefaultType), t;
                        }),
                        (n._setListeners = function () {
                            var t = this;
                            e(this._element).on(xn_CLICK_DISMISS, '[data-dismiss="toast"]', function () {
                                return t.hide();
                            });
                        }),
                        (n._close = function () {
                            var t = this,
                                n = function () {
                                    t._element.classList.add("hide"), e(t._element).trigger(xn_HIDDEN);
                                };
                            if ((this._element.classList.remove(Tn), this._config.animation)) {
                                var i = c.getTransitionDurationFromElement(this._element);
                                e(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i);
                            } else n();
                        }),
                        (t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this),
                                    o = i.data("bs.toast");
                                if ((o || ((o = new t(this, "object" == typeof n && n)), i.data("bs.toast", o)), "string" == typeof n)) {
                                    if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                                    o[n](this);
                                }
                            });
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.4.1";
                                },
                            },
                            {
                                key: "DefaultType",
                                get: function () {
                                    return An;
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return kn;
                                },
                            },
                        ]),
                        t
                    );
                })();
            (e.fn.toast = In._jQueryInterface),
                (e.fn.toast.Constructor = In),
                (e.fn.toast.noConflict = function () {
                    return (e.fn.toast = En), In._jQueryInterface;
                }),
                (t.Alert = m),
                (t.Button = k),
                (t.Carousel = it),
                (t.Collapse = vt),
                (t.Dropdown = zt),
                (t.Modal = se),
                (t.Popover = Fe),
                (t.Scrollspy = sn),
                (t.Tab = wn),
                (t.Toast = In),
                (t.Tooltip = Ne),
                (t.Util = c),
                Object.defineProperty(t, "__esModule", { value: !0 });
        })(e, n(11), n(12));
    },
    function (t, e, n) {
        var i;
        /*!
         * jQuery JavaScript Library v3.4.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2019-05-01T21:04Z
         */ !(function (e, n) {
            "use strict";
            "object" == typeof t.exports
                ? (t.exports = e.document
                      ? n(e, !0)
                      : function (t) {
                            if (!t.document) throw new Error("jQuery requires a window with a document");
                            return n(t);
                        })
                : n(e);
        })("undefined" != typeof window ? window : this, function (n, o) {
            "use strict";
            var r = [],
                s = n.document,
                a = Object.getPrototypeOf,
                l = r.slice,
                c = r.concat,
                u = r.push,
                h = r.indexOf,
                d = {},
                f = d.toString,
                p = d.hasOwnProperty,
                g = p.toString,
                m = g.call(Object),
                v = {},
                y = function (t) {
                    return "function" == typeof t && "number" != typeof t.nodeType;
                },
                b = function (t) {
                    return null != t && t === t.window;
                },
                _ = { type: !0, src: !0, nonce: !0, noModule: !0 };
            function w(t, e, n) {
                var i,
                    o,
                    r = (n = n || s).createElement("script");
                if (((r.text = t), e)) for (i in _) (o = e[i] || (e.getAttribute && e.getAttribute(i))) && r.setAttribute(i, o);
                n.head.appendChild(r).parentNode.removeChild(r);
            }
            function E(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? d[f.call(t)] || "object" : typeof t;
            }
            var x = function (t, e) {
                    return new x.fn.init(t, e);
                },
                C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            function S(t) {
                var e = !!t && "length" in t && t.length,
                    n = E(t);
                return !y(t) && !b(t) && ("array" === n || 0 === e || ("number" == typeof e && e > 0 && e - 1 in t));
            }
            (x.fn = x.prototype = {
                jquery: "3.4.1",
                constructor: x,
                length: 0,
                toArray: function () {
                    return l.call(this);
                },
                get: function (t) {
                    return null == t ? l.call(this) : t < 0 ? this[t + this.length] : this[t];
                },
                pushStack: function (t) {
                    var e = x.merge(this.constructor(), t);
                    return (e.prevObject = this), e;
                },
                each: function (t) {
                    return x.each(this, t);
                },
                map: function (t) {
                    return this.pushStack(
                        x.map(this, function (e, n) {
                            return t.call(e, n, e);
                        })
                    );
                },
                slice: function () {
                    return this.pushStack(l.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                eq: function (t) {
                    var e = this.length,
                        n = +t + (t < 0 ? e : 0);
                    return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
                },
                end: function () {
                    return this.prevObject || this.constructor();
                },
                push: u,
                sort: r.sort,
                splice: r.splice,
            }),
                (x.extend = x.fn.extend = function () {
                    var t,
                        e,
                        n,
                        i,
                        o,
                        r,
                        s = arguments[0] || {},
                        a = 1,
                        l = arguments.length,
                        c = !1;
                    for ("boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++), "object" == typeof s || y(s) || (s = {}), a === l && ((s = this), a--); a < l; a++)
                        if (null != (t = arguments[a]))
                            for (e in t)
                                (i = t[e]),
                                    "__proto__" !== e &&
                                        s !== i &&
                                        (c && i && (x.isPlainObject(i) || (o = Array.isArray(i)))
                                            ? ((n = s[e]), (r = o && !Array.isArray(n) ? [] : o || x.isPlainObject(n) ? n : {}), (o = !1), (s[e] = x.extend(c, r, i)))
                                            : void 0 !== i && (s[e] = i));
                    return s;
                }),
                x.extend({
                    expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (t) {
                        throw new Error(t);
                    },
                    noop: function () {},
                    isPlainObject: function (t) {
                        var e, n;
                        return !(!t || "[object Object]" !== f.call(t) || ((e = a(t)) && ("function" != typeof (n = p.call(e, "constructor") && e.constructor) || g.call(n) !== m)));
                    },
                    isEmptyObject: function (t) {
                        var e;
                        for (e in t) return !1;
                        return !0;
                    },
                    globalEval: function (t, e) {
                        w(t, { nonce: e && e.nonce });
                    },
                    each: function (t, e) {
                        var n,
                            i = 0;
                        if (S(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                        else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
                        return t;
                    },
                    trim: function (t) {
                        return null == t ? "" : (t + "").replace(C, "");
                    },
                    makeArray: function (t, e) {
                        var n = e || [];
                        return null != t && (S(Object(t)) ? x.merge(n, "string" == typeof t ? [t] : t) : u.call(n, t)), n;
                    },
                    inArray: function (t, e, n) {
                        return null == e ? -1 : h.call(e, t, n);
                    },
                    merge: function (t, e) {
                        for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
                        return (t.length = o), t;
                    },
                    grep: function (t, e, n) {
                        for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) !e(t[o], o) !== s && i.push(t[o]);
                        return i;
                    },
                    map: function (t, e, n) {
                        var i,
                            o,
                            r = 0,
                            s = [];
                        if (S(t)) for (i = t.length; r < i; r++) null != (o = e(t[r], r, n)) && s.push(o);
                        else for (r in t) null != (o = e(t[r], r, n)) && s.push(o);
                        return c.apply([], s);
                    },
                    guid: 1,
                    support: v,
                }),
                "function" == typeof Symbol && (x.fn[Symbol.iterator] = r[Symbol.iterator]),
                x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
                    d["[object " + e + "]"] = e.toLowerCase();
                });
            var T =
                /*!
                 * Sizzle CSS Selector Engine v2.3.4
                 * https://sizzlejs.com/
                 *
                 * Copyright JS Foundation and other contributors
                 * Released under the MIT license
                 * https://js.foundation/
                 *
                 * Date: 2019-04-08
                 */
                (function (t) {
                    var e,
                        n,
                        i,
                        o,
                        r,
                        s,
                        a,
                        l,
                        c,
                        u,
                        h,
                        d,
                        f,
                        p,
                        g,
                        m,
                        v,
                        y,
                        b,
                        _ = "sizzle" + 1 * new Date(),
                        w = t.document,
                        E = 0,
                        x = 0,
                        C = lt(),
                        S = lt(),
                        T = lt(),
                        D = lt(),
                        A = function (t, e) {
                            return t === e && (h = !0), 0;
                        },
                        k = {}.hasOwnProperty,
                        N = [],
                        I = N.pop,
                        L = N.push,
                        O = N.push,
                        P = N.slice,
                        j = function (t, e) {
                            for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
                            return -1;
                        },
                        M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        H = "[\\x20\\t\\r\\n\\f]",
                        q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                        R = "\\[" + H + "*(" + q + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + H + "*\\]",
                        W = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                        F = new RegExp(H + "+", "g"),
                        z = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
                        B = new RegExp("^" + H + "*," + H + "*"),
                        U = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
                        $ = new RegExp(H + "|>"),
                        V = new RegExp(W),
                        Q = new RegExp("^" + q + "$"),
                        X = {
                            ID: new RegExp("^#(" + q + ")"),
                            CLASS: new RegExp("^\\.(" + q + ")"),
                            TAG: new RegExp("^(" + q + "|[*])"),
                            ATTR: new RegExp("^" + R),
                            PSEUDO: new RegExp("^" + W),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + M + ")$", "i"),
                            needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i"),
                        },
                        K = /HTML$/i,
                        Y = /^(?:input|select|textarea|button)$/i,
                        G = /^h\d$/i,
                        J = /^[^{]+\{\s*\[native \w/,
                        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        tt = /[+~]/,
                        et = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
                        nt = function (t, e, n) {
                            var i = "0x" + e - 65536;
                            return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
                        },
                        it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        ot = function (t, e) {
                            return e ? ("\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
                        },
                        rt = function () {
                            d();
                        },
                        st = _t(
                            function (t) {
                                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
                            },
                            { dir: "parentNode", next: "legend" }
                        );
                    try {
                        O.apply((N = P.call(w.childNodes)), w.childNodes), N[w.childNodes.length].nodeType;
                    } catch (t) {
                        O = {
                            apply: N.length
                                ? function (t, e) {
                                      L.apply(t, P.call(e));
                                  }
                                : function (t, e) {
                                      for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                                      t.length = n - 1;
                                  },
                        };
                    }
                    function at(t, e, i, o) {
                        var r,
                            a,
                            c,
                            u,
                            h,
                            p,
                            v,
                            y = e && e.ownerDocument,
                            E = e ? e.nodeType : 9;
                        if (((i = i || []), "string" != typeof t || !t || (1 !== E && 9 !== E && 11 !== E))) return i;
                        if (!o && ((e ? e.ownerDocument || e : w) !== f && d(e), (e = e || f), g)) {
                            if (11 !== E && (h = Z.exec(t)))
                                if ((r = h[1])) {
                                    if (9 === E) {
                                        if (!(c = e.getElementById(r))) return i;
                                        if (c.id === r) return i.push(c), i;
                                    } else if (y && (c = y.getElementById(r)) && b(e, c) && c.id === r) return i.push(c), i;
                                } else {
                                    if (h[2]) return O.apply(i, e.getElementsByTagName(t)), i;
                                    if ((r = h[3]) && n.getElementsByClassName && e.getElementsByClassName) return O.apply(i, e.getElementsByClassName(r)), i;
                                }
                            if (n.qsa && !D[t + " "] && (!m || !m.test(t)) && (1 !== E || "object" !== e.nodeName.toLowerCase())) {
                                if (((v = t), (y = e), 1 === E && $.test(t))) {
                                    for ((u = e.getAttribute("id")) ? (u = u.replace(it, ot)) : e.setAttribute("id", (u = _)), a = (p = s(t)).length; a--; ) p[a] = "#" + u + " " + bt(p[a]);
                                    (v = p.join(",")), (y = (tt.test(t) && vt(e.parentNode)) || e);
                                }
                                try {
                                    return O.apply(i, y.querySelectorAll(v)), i;
                                } catch (e) {
                                    D(t, !0);
                                } finally {
                                    u === _ && e.removeAttribute("id");
                                }
                            }
                        }
                        return l(t.replace(z, "$1"), e, i, o);
                    }
                    function lt() {
                        var t = [];
                        return function e(n, o) {
                            return t.push(n + " ") > i.cacheLength && delete e[t.shift()], (e[n + " "] = o);
                        };
                    }
                    function ct(t) {
                        return (t[_] = !0), t;
                    }
                    function ut(t) {
                        var e = f.createElement("fieldset");
                        try {
                            return !!t(e);
                        } catch (t) {
                            return !1;
                        } finally {
                            e.parentNode && e.parentNode.removeChild(e), (e = null);
                        }
                    }
                    function ht(t, e) {
                        for (var n = t.split("|"), o = n.length; o--; ) i.attrHandle[n[o]] = e;
                    }
                    function dt(t, e) {
                        var n = e && t,
                            i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                        if (i) return i;
                        if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
                        return t ? 1 : -1;
                    }
                    function ft(t) {
                        return function (e) {
                            return "input" === e.nodeName.toLowerCase() && e.type === t;
                        };
                    }
                    function pt(t) {
                        return function (e) {
                            var n = e.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && e.type === t;
                        };
                    }
                    function gt(t) {
                        return function (e) {
                            return "form" in e
                                ? e.parentNode && !1 === e.disabled
                                    ? "label" in e
                                        ? "label" in e.parentNode
                                            ? e.parentNode.disabled === t
                                            : e.disabled === t
                                        : e.isDisabled === t || (e.isDisabled !== !t && st(e) === t)
                                    : e.disabled === t
                                : "label" in e && e.disabled === t;
                        };
                    }
                    function mt(t) {
                        return ct(function (e) {
                            return (
                                (e = +e),
                                ct(function (n, i) {
                                    for (var o, r = t([], n.length, e), s = r.length; s--; ) n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
                                })
                            );
                        });
                    }
                    function vt(t) {
                        return t && void 0 !== t.getElementsByTagName && t;
                    }
                    for (e in ((n = at.support = {}),
                    (r = at.isXML = function (t) {
                        var e = t.namespaceURI,
                            n = (t.ownerDocument || t).documentElement;
                        return !K.test(e || (n && n.nodeName) || "HTML");
                    }),
                    (d = at.setDocument = function (t) {
                        var e,
                            o,
                            s = t ? t.ownerDocument || t : w;
                        return s !== f && 9 === s.nodeType && s.documentElement
                            ? ((p = (f = s).documentElement),
                              (g = !r(f)),
                              w !== f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", rt, !1) : o.attachEvent && o.attachEvent("onunload", rt)),
                              (n.attributes = ut(function (t) {
                                  return (t.className = "i"), !t.getAttribute("className");
                              })),
                              (n.getElementsByTagName = ut(function (t) {
                                  return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length;
                              })),
                              (n.getElementsByClassName = J.test(f.getElementsByClassName)),
                              (n.getById = ut(function (t) {
                                  return (p.appendChild(t).id = _), !f.getElementsByName || !f.getElementsByName(_).length;
                              })),
                              n.getById
                                  ? ((i.filter.ID = function (t) {
                                        var e = t.replace(et, nt);
                                        return function (t) {
                                            return t.getAttribute("id") === e;
                                        };
                                    }),
                                    (i.find.ID = function (t, e) {
                                        if (void 0 !== e.getElementById && g) {
                                            var n = e.getElementById(t);
                                            return n ? [n] : [];
                                        }
                                    }))
                                  : ((i.filter.ID = function (t) {
                                        var e = t.replace(et, nt);
                                        return function (t) {
                                            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                            return n && n.value === e;
                                        };
                                    }),
                                    (i.find.ID = function (t, e) {
                                        if (void 0 !== e.getElementById && g) {
                                            var n,
                                                i,
                                                o,
                                                r = e.getElementById(t);
                                            if (r) {
                                                if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
                                                for (o = e.getElementsByName(t), i = 0; (r = o[i++]); ) if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
                                            }
                                            return [];
                                        }
                                    })),
                              (i.find.TAG = n.getElementsByTagName
                                  ? function (t, e) {
                                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0;
                                    }
                                  : function (t, e) {
                                        var n,
                                            i = [],
                                            o = 0,
                                            r = e.getElementsByTagName(t);
                                        if ("*" === t) {
                                            for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                                            return i;
                                        }
                                        return r;
                                    }),
                              (i.find.CLASS =
                                  n.getElementsByClassName &&
                                  function (t, e) {
                                      if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t);
                                  }),
                              (v = []),
                              (m = []),
                              (n.qsa = J.test(f.querySelectorAll)) &&
                                  (ut(function (t) {
                                      (p.appendChild(t).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                          t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"),
                                          t.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + M + ")"),
                                          t.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="),
                                          t.querySelectorAll(":checked").length || m.push(":checked"),
                                          t.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]");
                                  }),
                                  ut(function (t) {
                                      t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                      var e = f.createElement("input");
                                      e.setAttribute("type", "hidden"),
                                          t.appendChild(e).setAttribute("name", "D"),
                                          t.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="),
                                          2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                                          (p.appendChild(t).disabled = !0),
                                          2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                                          t.querySelectorAll("*,:x"),
                                          m.push(",.*:");
                                  })),
                              (n.matchesSelector = J.test((y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector))) &&
                                  ut(function (t) {
                                      (n.disconnectedMatch = y.call(t, "*")), y.call(t, "[s!='']:x"), v.push("!=", W);
                                  }),
                              (m = m.length && new RegExp(m.join("|"))),
                              (v = v.length && new RegExp(v.join("|"))),
                              (e = J.test(p.compareDocumentPosition)),
                              (b =
                                  e || J.test(p.contains)
                                      ? function (t, e) {
                                            var n = 9 === t.nodeType ? t.documentElement : t,
                                                i = e && e.parentNode;
                                            return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
                                        }
                                      : function (t, e) {
                                            if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                                            return !1;
                                        }),
                              (A = e
                                  ? function (t, e) {
                                        if (t === e) return (h = !0), 0;
                                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                        return (
                                            i ||
                                            (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || (!n.sortDetached && e.compareDocumentPosition(t) === i)
                                                ? t === f || (t.ownerDocument === w && b(w, t))
                                                    ? -1
                                                    : e === f || (e.ownerDocument === w && b(w, e))
                                                    ? 1
                                                    : u
                                                    ? j(u, t) - j(u, e)
                                                    : 0
                                                : 4 & i
                                                ? -1
                                                : 1)
                                        );
                                    }
                                  : function (t, e) {
                                        if (t === e) return (h = !0), 0;
                                        var n,
                                            i = 0,
                                            o = t.parentNode,
                                            r = e.parentNode,
                                            s = [t],
                                            a = [e];
                                        if (!o || !r) return t === f ? -1 : e === f ? 1 : o ? -1 : r ? 1 : u ? j(u, t) - j(u, e) : 0;
                                        if (o === r) return dt(t, e);
                                        for (n = t; (n = n.parentNode); ) s.unshift(n);
                                        for (n = e; (n = n.parentNode); ) a.unshift(n);
                                        for (; s[i] === a[i]; ) i++;
                                        return i ? dt(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0;
                                    }),
                              f)
                            : f;
                    }),
                    (at.matches = function (t, e) {
                        return at(t, null, null, e);
                    }),
                    (at.matchesSelector = function (t, e) {
                        if (((t.ownerDocument || t) !== f && d(t), n.matchesSelector && g && !D[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))))
                            try {
                                var i = y.call(t, e);
                                if (i || n.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return i;
                            } catch (t) {
                                D(e, !0);
                            }
                        return at(e, f, null, [t]).length > 0;
                    }),
                    (at.contains = function (t, e) {
                        return (t.ownerDocument || t) !== f && d(t), b(t, e);
                    }),
                    (at.attr = function (t, e) {
                        (t.ownerDocument || t) !== f && d(t);
                        var o = i.attrHandle[e.toLowerCase()],
                            r = o && k.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
                        return void 0 !== r ? r : n.attributes || !g ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null;
                    }),
                    (at.escape = function (t) {
                        return (t + "").replace(it, ot);
                    }),
                    (at.error = function (t) {
                        throw new Error("Syntax error, unrecognized expression: " + t);
                    }),
                    (at.uniqueSort = function (t) {
                        var e,
                            i = [],
                            o = 0,
                            r = 0;
                        if (((h = !n.detectDuplicates), (u = !n.sortStable && t.slice(0)), t.sort(A), h)) {
                            for (; (e = t[r++]); ) e === t[r] && (o = i.push(r));
                            for (; o--; ) t.splice(i[o], 1);
                        }
                        return (u = null), t;
                    }),
                    (o = at.getText = function (t) {
                        var e,
                            n = "",
                            i = 0,
                            r = t.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof t.textContent) return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling) n += o(t);
                            } else if (3 === r || 4 === r) return t.nodeValue;
                        } else for (; (e = t[i++]); ) n += o(e);
                        return n;
                    }),
                    ((i = at.selectors = {
                        cacheLength: 50,
                        createPseudo: ct,
                        match: X,
                        attrHandle: {},
                        find: {},
                        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                        preFilter: {
                            ATTR: function (t) {
                                return (t[1] = t[1].replace(et, nt)), (t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt)), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                            },
                            CHILD: function (t) {
                                return (
                                    (t[1] = t[1].toLowerCase()),
                                    "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))), (t[5] = +(t[7] + t[8] || "odd" === t[3]))) : t[3] && at.error(t[0]),
                                    t
                                );
                            },
                            PSEUDO: function (t) {
                                var e,
                                    n = !t[6] && t[2];
                                return X.CHILD.test(t[0])
                                    ? null
                                    : (t[3] ? (t[2] = t[4] || t[5] || "") : n && V.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))), t.slice(0, 3));
                            },
                        },
                        filter: {
                            TAG: function (t) {
                                var e = t.replace(et, nt).toLowerCase();
                                return "*" === t
                                    ? function () {
                                          return !0;
                                      }
                                    : function (t) {
                                          return t.nodeName && t.nodeName.toLowerCase() === e;
                                      };
                            },
                            CLASS: function (t) {
                                var e = C[t + " "];
                                return (
                                    e ||
                                    ((e = new RegExp("(^|" + H + ")" + t + "(" + H + "|$)")) &&
                                        C(t, function (t) {
                                            return e.test(("string" == typeof t.className && t.className) || (void 0 !== t.getAttribute && t.getAttribute("class")) || "");
                                        }))
                                );
                            },
                            ATTR: function (t, e, n) {
                                return function (i) {
                                    var o = at.attr(i, t);
                                    return null == o
                                        ? "!=" === e
                                        : !e ||
                                              ((o += ""),
                                              "=" === e
                                                  ? o === n
                                                  : "!=" === e
                                                  ? o !== n
                                                  : "^=" === e
                                                  ? n && 0 === o.indexOf(n)
                                                  : "*=" === e
                                                  ? n && o.indexOf(n) > -1
                                                  : "$=" === e
                                                  ? n && o.slice(-n.length) === n
                                                  : "~=" === e
                                                  ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1
                                                  : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"));
                                };
                            },
                            CHILD: function (t, e, n, i, o) {
                                var r = "nth" !== t.slice(0, 3),
                                    s = "last" !== t.slice(-4),
                                    a = "of-type" === e;
                                return 1 === i && 0 === o
                                    ? function (t) {
                                          return !!t.parentNode;
                                      }
                                    : function (e, n, l) {
                                          var c,
                                              u,
                                              h,
                                              d,
                                              f,
                                              p,
                                              g = r !== s ? "nextSibling" : "previousSibling",
                                              m = e.parentNode,
                                              v = a && e.nodeName.toLowerCase(),
                                              y = !l && !a,
                                              b = !1;
                                          if (m) {
                                              if (r) {
                                                  for (; g; ) {
                                                      for (d = e; (d = d[g]); ) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                                      p = g = "only" === t && !p && "nextSibling";
                                                  }
                                                  return !0;
                                              }
                                              if (((p = [s ? m.firstChild : m.lastChild]), s && y)) {
                                                  for (
                                                      b = (f = (c = (u = (h = (d = m)[_] || (d[_] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === E && c[1]) && c[2], d = f && m.childNodes[f];
                                                      (d = (++f && d && d[g]) || (b = f = 0) || p.pop());

                                                  )
                                                      if (1 === d.nodeType && ++b && d === e) {
                                                          u[t] = [E, f, b];
                                                          break;
                                                      }
                                              } else if ((y && (b = f = (c = (u = (h = (d = e)[_] || (d[_] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === E && c[1]), !1 === b))
                                                  for (
                                                      ;
                                                      (d = (++f && d && d[g]) || (b = f = 0) || p.pop()) &&
                                                      ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (h = d[_] || (d[_] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] = [E, b]), d !== e));

                                                  );
                                              return (b -= o) === i || (b % i == 0 && b / i >= 0);
                                          }
                                      };
                            },
                            PSEUDO: function (t, e) {
                                var n,
                                    o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                                return o[_]
                                    ? o(e)
                                    : o.length > 1
                                    ? ((n = [t, t, "", e]),
                                      i.setFilters.hasOwnProperty(t.toLowerCase())
                                          ? ct(function (t, n) {
                                                for (var i, r = o(t, e), s = r.length; s--; ) t[(i = j(t, r[s]))] = !(n[i] = r[s]);
                                            })
                                          : function (t) {
                                                return o(t, 0, n);
                                            })
                                    : o;
                            },
                        },
                        pseudos: {
                            not: ct(function (t) {
                                var e = [],
                                    n = [],
                                    i = a(t.replace(z, "$1"));
                                return i[_]
                                    ? ct(function (t, e, n, o) {
                                          for (var r, s = i(t, null, o, []), a = t.length; a--; ) (r = s[a]) && (t[a] = !(e[a] = r));
                                      })
                                    : function (t, o, r) {
                                          return (e[0] = t), i(e, null, r, n), (e[0] = null), !n.pop();
                                      };
                            }),
                            has: ct(function (t) {
                                return function (e) {
                                    return at(t, e).length > 0;
                                };
                            }),
                            contains: ct(function (t) {
                                return (
                                    (t = t.replace(et, nt)),
                                    function (e) {
                                        return (e.textContent || o(e)).indexOf(t) > -1;
                                    }
                                );
                            }),
                            lang: ct(function (t) {
                                return (
                                    Q.test(t || "") || at.error("unsupported lang: " + t),
                                    (t = t.replace(et, nt).toLowerCase()),
                                    function (e) {
                                        var n;
                                        do {
                                            if ((n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1;
                                    }
                                );
                            }),
                            target: function (e) {
                                var n = t.location && t.location.hash;
                                return n && n.slice(1) === e.id;
                            },
                            root: function (t) {
                                return t === p;
                            },
                            focus: function (t) {
                                return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                            },
                            enabled: gt(!1),
                            disabled: gt(!0),
                            checked: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return ("input" === e && !!t.checked) || ("option" === e && !!t.selected);
                            },
                            selected: function (t) {
                                return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                            },
                            empty: function (t) {
                                for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                                return !0;
                            },
                            parent: function (t) {
                                return !i.pseudos.empty(t);
                            },
                            header: function (t) {
                                return G.test(t.nodeName);
                            },
                            input: function (t) {
                                return Y.test(t.nodeName);
                            },
                            button: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return ("input" === e && "button" === t.type) || "button" === e;
                            },
                            text: function (t) {
                                var e;
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                            },
                            first: mt(function () {
                                return [0];
                            }),
                            last: mt(function (t, e) {
                                return [e - 1];
                            }),
                            eq: mt(function (t, e, n) {
                                return [n < 0 ? n + e : n];
                            }),
                            even: mt(function (t, e) {
                                for (var n = 0; n < e; n += 2) t.push(n);
                                return t;
                            }),
                            odd: mt(function (t, e) {
                                for (var n = 1; n < e; n += 2) t.push(n);
                                return t;
                            }),
                            lt: mt(function (t, e, n) {
                                for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0; ) t.push(i);
                                return t;
                            }),
                            gt: mt(function (t, e, n) {
                                for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
                                return t;
                            }),
                        },
                    }).pseudos.nth = i.pseudos.eq),
                    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                        i.pseudos[e] = ft(e);
                    for (e in { submit: !0, reset: !0 }) i.pseudos[e] = pt(e);
                    function yt() {}
                    function bt(t) {
                        for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                        return i;
                    }
                    function _t(t, e, n) {
                        var i = e.dir,
                            o = e.next,
                            r = o || i,
                            s = n && "parentNode" === r,
                            a = x++;
                        return e.first
                            ? function (e, n, o) {
                                  for (; (e = e[i]); ) if (1 === e.nodeType || s) return t(e, n, o);
                                  return !1;
                              }
                            : function (e, n, l) {
                                  var c,
                                      u,
                                      h,
                                      d = [E, a];
                                  if (l) {
                                      for (; (e = e[i]); ) if ((1 === e.nodeType || s) && t(e, n, l)) return !0;
                                  } else
                                      for (; (e = e[i]); )
                                          if (1 === e.nodeType || s)
                                              if (((u = (h = e[_] || (e[_] = {}))[e.uniqueID] || (h[e.uniqueID] = {})), o && o === e.nodeName.toLowerCase())) e = e[i] || e;
                                              else {
                                                  if ((c = u[r]) && c[0] === E && c[1] === a) return (d[2] = c[2]);
                                                  if (((u[r] = d), (d[2] = t(e, n, l)))) return !0;
                                              }
                                  return !1;
                              };
                    }
                    function wt(t) {
                        return t.length > 1
                            ? function (e, n, i) {
                                  for (var o = t.length; o--; ) if (!t[o](e, n, i)) return !1;
                                  return !0;
                              }
                            : t[0];
                    }
                    function Et(t, e, n, i, o) {
                        for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++) (r = t[a]) && ((n && !n(r, i, o)) || (s.push(r), c && e.push(a)));
                        return s;
                    }
                    function xt(t, e, n, i, o, r) {
                        return (
                            i && !i[_] && (i = xt(i)),
                            o && !o[_] && (o = xt(o, r)),
                            ct(function (r, s, a, l) {
                                var c,
                                    u,
                                    h,
                                    d = [],
                                    f = [],
                                    p = s.length,
                                    g =
                                        r ||
                                        (function (t, e, n) {
                                            for (var i = 0, o = e.length; i < o; i++) at(t, e[i], n);
                                            return n;
                                        })(e || "*", a.nodeType ? [a] : a, []),
                                    m = !t || (!r && e) ? g : Et(g, d, t, a, l),
                                    v = n ? (o || (r ? t : p || i) ? [] : s) : m;
                                if ((n && n(m, v, a, l), i)) for (c = Et(v, f), i(c, [], a, l), u = c.length; u--; ) (h = c[u]) && (v[f[u]] = !(m[f[u]] = h));
                                if (r) {
                                    if (o || t) {
                                        if (o) {
                                            for (c = [], u = v.length; u--; ) (h = v[u]) && c.push((m[u] = h));
                                            o(null, (v = []), c, l);
                                        }
                                        for (u = v.length; u--; ) (h = v[u]) && (c = o ? j(r, h) : d[u]) > -1 && (r[c] = !(s[c] = h));
                                    }
                                } else (v = Et(v === s ? v.splice(p, v.length) : v)), o ? o(null, s, v, l) : O.apply(s, v);
                            })
                        );
                    }
                    function Ct(t) {
                        for (
                            var e,
                                n,
                                o,
                                r = t.length,
                                s = i.relative[t[0].type],
                                a = s || i.relative[" "],
                                l = s ? 1 : 0,
                                u = _t(
                                    function (t) {
                                        return t === e;
                                    },
                                    a,
                                    !0
                                ),
                                h = _t(
                                    function (t) {
                                        return j(e, t) > -1;
                                    },
                                    a,
                                    !0
                                ),
                                d = [
                                    function (t, n, i) {
                                        var o = (!s && (i || n !== c)) || ((e = n).nodeType ? u(t, n, i) : h(t, n, i));
                                        return (e = null), o;
                                    },
                                ];
                            l < r;
                            l++
                        )
                            if ((n = i.relative[t[l].type])) d = [_t(wt(d), n)];
                            else {
                                if ((n = i.filter[t[l].type].apply(null, t[l].matches))[_]) {
                                    for (o = ++l; o < r && !i.relative[t[o].type]; o++);
                                    return xt(
                                        l > 1 && wt(d),
                                        l > 1 && bt(t.slice(0, l - 1).concat({ value: " " === t[l - 2].type ? "*" : "" })).replace(z, "$1"),
                                        n,
                                        l < o && Ct(t.slice(l, o)),
                                        o < r && Ct((t = t.slice(o))),
                                        o < r && bt(t)
                                    );
                                }
                                d.push(n);
                            }
                        return wt(d);
                    }
                    return (
                        (yt.prototype = i.filters = i.pseudos),
                        (i.setFilters = new yt()),
                        (s = at.tokenize = function (t, e) {
                            var n,
                                o,
                                r,
                                s,
                                a,
                                l,
                                c,
                                u = S[t + " "];
                            if (u) return e ? 0 : u.slice(0);
                            for (a = t, l = [], c = i.preFilter; a; ) {
                                for (s in ((n && !(o = B.exec(a))) || (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
                                (n = !1),
                                (o = U.exec(a)) && ((n = o.shift()), r.push({ value: n, type: o[0].replace(z, " ") }), (a = a.slice(n.length))),
                                i.filter))
                                    !(o = X[s].exec(a)) || (c[s] && !(o = c[s](o))) || ((n = o.shift()), r.push({ value: n, type: s, matches: o }), (a = a.slice(n.length)));
                                if (!n) break;
                            }
                            return e ? a.length : a ? at.error(t) : S(t, l).slice(0);
                        }),
                        (a = at.compile = function (t, e) {
                            var n,
                                o = [],
                                r = [],
                                a = T[t + " "];
                            if (!a) {
                                for (e || (e = s(t)), n = e.length; n--; ) (a = Ct(e[n]))[_] ? o.push(a) : r.push(a);
                                (a = T(
                                    t,
                                    (function (t, e) {
                                        var n = e.length > 0,
                                            o = t.length > 0,
                                            r = function (r, s, a, l, u) {
                                                var h,
                                                    p,
                                                    m,
                                                    v = 0,
                                                    y = "0",
                                                    b = r && [],
                                                    _ = [],
                                                    w = c,
                                                    x = r || (o && i.find.TAG("*", u)),
                                                    C = (E += null == w ? 1 : Math.random() || 0.1),
                                                    S = x.length;
                                                for (u && (c = s === f || s || u); y !== S && null != (h = x[y]); y++) {
                                                    if (o && h) {
                                                        for (p = 0, s || h.ownerDocument === f || (d(h), (a = !g)); (m = t[p++]); )
                                                            if (m(h, s || f, a)) {
                                                                l.push(h);
                                                                break;
                                                            }
                                                        u && (E = C);
                                                    }
                                                    n && ((h = !m && h) && v--, r && b.push(h));
                                                }
                                                if (((v += y), n && y !== v)) {
                                                    for (p = 0; (m = e[p++]); ) m(b, _, s, a);
                                                    if (r) {
                                                        if (v > 0) for (; y--; ) b[y] || _[y] || (_[y] = I.call(l));
                                                        _ = Et(_);
                                                    }
                                                    O.apply(l, _), u && !r && _.length > 0 && v + e.length > 1 && at.uniqueSort(l);
                                                }
                                                return u && ((E = C), (c = w)), b;
                                            };
                                        return n ? ct(r) : r;
                                    })(r, o)
                                )).selector = t;
                            }
                            return a;
                        }),
                        (l = at.select = function (t, e, n, o) {
                            var r,
                                l,
                                c,
                                u,
                                h,
                                d = "function" == typeof t && t,
                                f = !o && s((t = d.selector || t));
                            if (((n = n || []), 1 === f.length)) {
                                if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                                    if (!(e = (i.find.ID(c.matches[0].replace(et, nt), e) || [])[0])) return n;
                                    d && (e = e.parentNode), (t = t.slice(l.shift().value.length));
                                }
                                for (r = X.needsContext.test(t) ? 0 : l.length; r-- && ((c = l[r]), !i.relative[(u = c.type)]); )
                                    if ((h = i.find[u]) && (o = h(c.matches[0].replace(et, nt), (tt.test(l[0].type) && vt(e.parentNode)) || e))) {
                                        if ((l.splice(r, 1), !(t = o.length && bt(l)))) return O.apply(n, o), n;
                                        break;
                                    }
                            }
                            return (d || a(t, f))(o, e, !g, n, !e || (tt.test(t) && vt(e.parentNode)) || e), n;
                        }),
                        (n.sortStable = _.split("").sort(A).join("") === _),
                        (n.detectDuplicates = !!h),
                        d(),
                        (n.sortDetached = ut(function (t) {
                            return 1 & t.compareDocumentPosition(f.createElement("fieldset"));
                        })),
                        ut(function (t) {
                            return (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href");
                        }) ||
                            ht("type|href|height|width", function (t, e, n) {
                                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
                            }),
                        (n.attributes &&
                            ut(function (t) {
                                return (t.innerHTML = "<input/>"), t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
                            })) ||
                            ht("value", function (t, e, n) {
                                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
                            }),
                        ut(function (t) {
                            return null == t.getAttribute("disabled");
                        }) ||
                            ht(M, function (t, e, n) {
                                var i;
                                if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
                            }),
                        at
                    );
                })(n);
            (x.find = T), (x.expr = T.selectors), (x.expr[":"] = x.expr.pseudos), (x.uniqueSort = x.unique = T.uniqueSort), (x.text = T.getText), (x.isXMLDoc = T.isXML), (x.contains = T.contains), (x.escapeSelector = T.escape);
            var D = function (t, e, n) {
                    for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
                        if (1 === t.nodeType) {
                            if (o && x(t).is(n)) break;
                            i.push(t);
                        }
                    return i;
                },
                A = function (t, e) {
                    for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                    return n;
                },
                k = x.expr.match.needsContext;
            function N(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
            }
            var I = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function L(t, e, n) {
                return y(e)
                    ? x.grep(t, function (t, i) {
                          return !!e.call(t, i, t) !== n;
                      })
                    : e.nodeType
                    ? x.grep(t, function (t) {
                          return (t === e) !== n;
                      })
                    : "string" != typeof e
                    ? x.grep(t, function (t) {
                          return h.call(e, t) > -1 !== n;
                      })
                    : x.filter(e, t, n);
            }
            (x.filter = function (t, e, n) {
                var i = e[0];
                return (
                    n && (t = ":not(" + t + ")"),
                    1 === e.length && 1 === i.nodeType
                        ? x.find.matchesSelector(i, t)
                            ? [i]
                            : []
                        : x.find.matches(
                              t,
                              x.grep(e, function (t) {
                                  return 1 === t.nodeType;
                              })
                          )
                );
            }),
                x.fn.extend({
                    find: function (t) {
                        var e,
                            n,
                            i = this.length,
                            o = this;
                        if ("string" != typeof t)
                            return this.pushStack(
                                x(t).filter(function () {
                                    for (e = 0; e < i; e++) if (x.contains(o[e], this)) return !0;
                                })
                            );
                        for (n = this.pushStack([]), e = 0; e < i; e++) x.find(t, o[e], n);
                        return i > 1 ? x.uniqueSort(n) : n;
                    },
                    filter: function (t) {
                        return this.pushStack(L(this, t || [], !1));
                    },
                    not: function (t) {
                        return this.pushStack(L(this, t || [], !0));
                    },
                    is: function (t) {
                        return !!L(this, "string" == typeof t && k.test(t) ? x(t) : t || [], !1).length;
                    },
                });
            var O,
                P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((x.fn.init = function (t, e, n) {
                var i, o;
                if (!t) return this;
                if (((n = n || O), "string" == typeof t)) {
                    if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : P.exec(t)) || (!i[1] && e)) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (((e = e instanceof x ? e[0] : e), x.merge(this, x.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : s, !0)), I.test(i[1]) && x.isPlainObject(e)))
                            for (i in e) y(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this;
                    }
                    return (o = s.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this;
                }
                return t.nodeType ? ((this[0] = t), (this.length = 1), this) : y(t) ? (void 0 !== n.ready ? n.ready(t) : t(x)) : x.makeArray(t, this);
            }).prototype = x.fn),
                (O = x(s));
            var j = /^(?:parents|prev(?:Until|All))/,
                M = { children: !0, contents: !0, next: !0, prev: !0 };
            function H(t, e) {
                for (; (t = t[e]) && 1 !== t.nodeType; );
                return t;
            }
            x.fn.extend({
                has: function (t) {
                    var e = x(t, this),
                        n = e.length;
                    return this.filter(function () {
                        for (var t = 0; t < n; t++) if (x.contains(this, e[t])) return !0;
                    });
                },
                closest: function (t, e) {
                    var n,
                        i = 0,
                        o = this.length,
                        r = [],
                        s = "string" != typeof t && x(t);
                    if (!k.test(t))
                        for (; i < o; i++)
                            for (n = this[i]; n && n !== e; n = n.parentNode)
                                if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, t))) {
                                    r.push(n);
                                    break;
                                }
                    return this.pushStack(r.length > 1 ? x.uniqueSort(r) : r);
                },
                index: function (t) {
                    return t ? ("string" == typeof t ? h.call(x(t), this[0]) : h.call(this, t.jquery ? t[0] : t)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function (t, e) {
                    return this.pushStack(x.uniqueSort(x.merge(this.get(), x(t, e))));
                },
                addBack: function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
                },
            }),
                x.each(
                    {
                        parent: function (t) {
                            var e = t.parentNode;
                            return e && 11 !== e.nodeType ? e : null;
                        },
                        parents: function (t) {
                            return D(t, "parentNode");
                        },
                        parentsUntil: function (t, e, n) {
                            return D(t, "parentNode", n);
                        },
                        next: function (t) {
                            return H(t, "nextSibling");
                        },
                        prev: function (t) {
                            return H(t, "previousSibling");
                        },
                        nextAll: function (t) {
                            return D(t, "nextSibling");
                        },
                        prevAll: function (t) {
                            return D(t, "previousSibling");
                        },
                        nextUntil: function (t, e, n) {
                            return D(t, "nextSibling", n);
                        },
                        prevUntil: function (t, e, n) {
                            return D(t, "previousSibling", n);
                        },
                        siblings: function (t) {
                            return A((t.parentNode || {}).firstChild, t);
                        },
                        children: function (t) {
                            return A(t.firstChild);
                        },
                        contents: function (t) {
                            return void 0 !== t.contentDocument ? t.contentDocument : (N(t, "template") && (t = t.content || t), x.merge([], t.childNodes));
                        },
                    },
                    function (t, e) {
                        x.fn[t] = function (n, i) {
                            var o = x.map(this, e, n);
                            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = x.filter(i, o)), this.length > 1 && (M[t] || x.uniqueSort(o), j.test(t) && o.reverse()), this.pushStack(o);
                        };
                    }
                );
            var q = /[^\x20\t\r\n\f]+/g;
            function R(t) {
                return t;
            }
            function W(t) {
                throw t;
            }
            function F(t, e, n, i) {
                var o;
                try {
                    t && y((o = t.promise)) ? o.call(t).done(e).fail(n) : t && y((o = t.then)) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i));
                } catch (t) {
                    n.apply(void 0, [t]);
                }
            }
            (x.Callbacks = function (t) {
                t =
                    "string" == typeof t
                        ? (function (t) {
                              var e = {};
                              return (
                                  x.each(t.match(q) || [], function (t, n) {
                                      e[n] = !0;
                                  }),
                                  e
                              );
                          })(t)
                        : x.extend({}, t);
                var e,
                    n,
                    i,
                    o,
                    r = [],
                    s = [],
                    a = -1,
                    l = function () {
                        for (o = o || t.once, i = e = !0; s.length; a = -1) for (n = s.shift(); ++a < r.length; ) !1 === r[a].apply(n[0], n[1]) && t.stopOnFalse && ((a = r.length), (n = !1));
                        t.memory || (n = !1), (e = !1), o && (r = n ? [] : "");
                    },
                    c = {
                        add: function () {
                            return (
                                r &&
                                    (n && !e && ((a = r.length - 1), s.push(n)),
                                    (function e(n) {
                                        x.each(n, function (n, i) {
                                            y(i) ? (t.unique && c.has(i)) || r.push(i) : i && i.length && "string" !== E(i) && e(i);
                                        });
                                    })(arguments),
                                    n && !e && l()),
                                this
                            );
                        },
                        remove: function () {
                            return (
                                x.each(arguments, function (t, e) {
                                    for (var n; (n = x.inArray(e, r, n)) > -1; ) r.splice(n, 1), n <= a && a--;
                                }),
                                this
                            );
                        },
                        has: function (t) {
                            return t ? x.inArray(t, r) > -1 : r.length > 0;
                        },
                        empty: function () {
                            return r && (r = []), this;
                        },
                        disable: function () {
                            return (o = s = []), (r = n = ""), this;
                        },
                        disabled: function () {
                            return !r;
                        },
                        lock: function () {
                            return (o = s = []), n || e || (r = n = ""), this;
                        },
                        locked: function () {
                            return !!o;
                        },
                        fireWith: function (t, n) {
                            return o || ((n = [t, (n = n || []).slice ? n.slice() : n]), s.push(n), e || l()), this;
                        },
                        fire: function () {
                            return c.fireWith(this, arguments), this;
                        },
                        fired: function () {
                            return !!i;
                        },
                    };
                return c;
            }),
                x.extend({
                    Deferred: function (t) {
                        var e = [
                                ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                                ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"],
                            ],
                            i = "pending",
                            o = {
                                state: function () {
                                    return i;
                                },
                                always: function () {
                                    return r.done(arguments).fail(arguments), this;
                                },
                                catch: function (t) {
                                    return o.then(null, t);
                                },
                                pipe: function () {
                                    var t = arguments;
                                    return x
                                        .Deferred(function (n) {
                                            x.each(e, function (e, i) {
                                                var o = y(t[i[4]]) && t[i[4]];
                                                r[i[1]](function () {
                                                    var t = o && o.apply(this, arguments);
                                                    t && y(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [t] : arguments);
                                                });
                                            }),
                                                (t = null);
                                        })
                                        .promise();
                                },
                                then: function (t, i, o) {
                                    var r = 0;
                                    function s(t, e, i, o) {
                                        return function () {
                                            var a = this,
                                                l = arguments,
                                                c = function () {
                                                    var n, c;
                                                    if (!(t < r)) {
                                                        if ((n = i.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                        (c = n && ("object" == typeof n || "function" == typeof n) && n.then),
                                                            y(c)
                                                                ? o
                                                                    ? c.call(n, s(r, e, R, o), s(r, e, W, o))
                                                                    : (r++, c.call(n, s(r, e, R, o), s(r, e, W, o), s(r, e, R, e.notifyWith)))
                                                                : (i !== R && ((a = void 0), (l = [n])), (o || e.resolveWith)(a, l));
                                                    }
                                                },
                                                u = o
                                                    ? c
                                                    : function () {
                                                          try {
                                                              c();
                                                          } catch (n) {
                                                              x.Deferred.exceptionHook && x.Deferred.exceptionHook(n, u.stackTrace), t + 1 >= r && (i !== W && ((a = void 0), (l = [n])), e.rejectWith(a, l));
                                                          }
                                                      };
                                            t ? u() : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()), n.setTimeout(u));
                                        };
                                    }
                                    return x
                                        .Deferred(function (n) {
                                            e[0][3].add(s(0, n, y(o) ? o : R, n.notifyWith)), e[1][3].add(s(0, n, y(t) ? t : R)), e[2][3].add(s(0, n, y(i) ? i : W));
                                        })
                                        .promise();
                                },
                                promise: function (t) {
                                    return null != t ? x.extend(t, o) : o;
                                },
                            },
                            r = {};
                        return (
                            x.each(e, function (t, n) {
                                var s = n[2],
                                    a = n[5];
                                (o[n[1]] = s.add),
                                    a &&
                                        s.add(
                                            function () {
                                                i = a;
                                            },
                                            e[3 - t][2].disable,
                                            e[3 - t][3].disable,
                                            e[0][2].lock,
                                            e[0][3].lock
                                        ),
                                    s.add(n[3].fire),
                                    (r[n[0]] = function () {
                                        return r[n[0] + "With"](this === r ? void 0 : this, arguments), this;
                                    }),
                                    (r[n[0] + "With"] = s.fireWith);
                            }),
                            o.promise(r),
                            t && t.call(r, r),
                            r
                        );
                    },
                    when: function (t) {
                        var e = arguments.length,
                            n = e,
                            i = Array(n),
                            o = l.call(arguments),
                            r = x.Deferred(),
                            s = function (t) {
                                return function (n) {
                                    (i[t] = this), (o[t] = arguments.length > 1 ? l.call(arguments) : n), --e || r.resolveWith(i, o);
                                };
                            };
                        if (e <= 1 && (F(t, r.done(s(n)).resolve, r.reject, !e), "pending" === r.state() || y(o[n] && o[n].then))) return r.then();
                        for (; n--; ) F(o[n], s(n), r.reject);
                        return r.promise();
                    },
                });
            var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (x.Deferred.exceptionHook = function (t, e) {
                n.console && n.console.warn && t && z.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
            }),
                (x.readyException = function (t) {
                    n.setTimeout(function () {
                        throw t;
                    });
                });
            var B = x.Deferred();
            function U() {
                s.removeEventListener("DOMContentLoaded", U), n.removeEventListener("load", U), x.ready();
            }
            (x.fn.ready = function (t) {
                return (
                    B.then(t).catch(function (t) {
                        x.readyException(t);
                    }),
                    this
                );
            }),
                x.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function (t) {
                        (!0 === t ? --x.readyWait : x.isReady) || ((x.isReady = !0), (!0 !== t && --x.readyWait > 0) || B.resolveWith(s, [x]));
                    },
                }),
                (x.ready.then = B.then),
                "complete" === s.readyState || ("loading" !== s.readyState && !s.documentElement.doScroll) ? n.setTimeout(x.ready) : (s.addEventListener("DOMContentLoaded", U), n.addEventListener("load", U));
            var $ = function (t, e, n, i, o, r, s) {
                    var a = 0,
                        l = t.length,
                        c = null == n;
                    if ("object" === E(n)) for (a in ((o = !0), n)) $(t, e, a, n[a], !0, r, s);
                    else if (
                        void 0 !== i &&
                        ((o = !0),
                        y(i) || (s = !0),
                        c &&
                            (s
                                ? (e.call(t, i), (e = null))
                                : ((c = e),
                                  (e = function (t, e, n) {
                                      return c.call(x(t), n);
                                  }))),
                        e)
                    )
                        for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                    return o ? t : c ? e.call(t) : l ? e(t[0], n) : r;
                },
                V = /^-ms-/,
                Q = /-([a-z])/g;
            function X(t, e) {
                return e.toUpperCase();
            }
            function K(t) {
                return t.replace(V, "ms-").replace(Q, X);
            }
            var Y = function (t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
            };
            function G() {
                this.expando = x.expando + G.uid++;
            }
            (G.uid = 1),
                (G.prototype = {
                    cache: function (t) {
                        var e = t[this.expando];
                        return e || ((e = {}), Y(t) && (t.nodeType ? (t[this.expando] = e) : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e;
                    },
                    set: function (t, e, n) {
                        var i,
                            o = this.cache(t);
                        if ("string" == typeof e) o[K(e)] = n;
                        else for (i in e) o[K(i)] = e[i];
                        return o;
                    },
                    get: function (t, e) {
                        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][K(e)];
                    },
                    access: function (t, e, n) {
                        return void 0 === e || (e && "string" == typeof e && void 0 === n) ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e);
                    },
                    remove: function (t, e) {
                        var n,
                            i = t[this.expando];
                        if (void 0 !== i) {
                            if (void 0 !== e) {
                                n = (e = Array.isArray(e) ? e.map(K) : (e = K(e)) in i ? [e] : e.match(q) || []).length;
                                for (; n--; ) delete i[e[n]];
                            }
                            (void 0 === e || x.isEmptyObject(i)) && (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
                        }
                    },
                    hasData: function (t) {
                        var e = t[this.expando];
                        return void 0 !== e && !x.isEmptyObject(e);
                    },
                });
            var J = new G(),
                Z = new G(),
                tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                et = /[A-Z]/g;
            function nt(t, e, n) {
                var i;
                if (void 0 === n && 1 === t.nodeType)
                    if (((i = "data-" + e.replace(et, "-$&").toLowerCase()), "string" == typeof (n = t.getAttribute(i)))) {
                        try {
                            n = (function (t) {
                                return "true" === t || ("false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t));
                            })(n);
                        } catch (t) {}
                        Z.set(t, e, n);
                    } else n = void 0;
                return n;
            }
            x.extend({
                hasData: function (t) {
                    return Z.hasData(t) || J.hasData(t);
                },
                data: function (t, e, n) {
                    return Z.access(t, e, n);
                },
                removeData: function (t, e) {
                    Z.remove(t, e);
                },
                _data: function (t, e, n) {
                    return J.access(t, e, n);
                },
                _removeData: function (t, e) {
                    J.remove(t, e);
                },
            }),
                x.fn.extend({
                    data: function (t, e) {
                        var n,
                            i,
                            o,
                            r = this[0],
                            s = r && r.attributes;
                        if (void 0 === t) {
                            if (this.length && ((o = Z.get(r)), 1 === r.nodeType && !J.get(r, "hasDataAttrs"))) {
                                for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf("data-") && ((i = K(i.slice(5))), nt(r, i, o[i]));
                                J.set(r, "hasDataAttrs", !0);
                            }
                            return o;
                        }
                        return "object" == typeof t
                            ? this.each(function () {
                                  Z.set(this, t);
                              })
                            : $(
                                  this,
                                  function (e) {
                                      var n;
                                      if (r && void 0 === e) return void 0 !== (n = Z.get(r, t)) || void 0 !== (n = nt(r, t)) ? n : void 0;
                                      this.each(function () {
                                          Z.set(this, t, e);
                                      });
                                  },
                                  null,
                                  e,
                                  arguments.length > 1,
                                  null,
                                  !0
                              );
                    },
                    removeData: function (t) {
                        return this.each(function () {
                            Z.remove(this, t);
                        });
                    },
                }),
                x.extend({
                    queue: function (t, e, n) {
                        var i;
                        if (t) return (e = (e || "fx") + "queue"), (i = J.get(t, e)), n && (!i || Array.isArray(n) ? (i = J.access(t, e, x.makeArray(n))) : i.push(n)), i || [];
                    },
                    dequeue: function (t, e) {
                        e = e || "fx";
                        var n = x.queue(t, e),
                            i = n.length,
                            o = n.shift(),
                            r = x._queueHooks(t, e);
                        "inprogress" === o && ((o = n.shift()), i--),
                            o &&
                                ("fx" === e && n.unshift("inprogress"),
                                delete r.stop,
                                o.call(
                                    t,
                                    function () {
                                        x.dequeue(t, e);
                                    },
                                    r
                                )),
                            !i && r && r.empty.fire();
                    },
                    _queueHooks: function (t, e) {
                        var n = e + "queueHooks";
                        return (
                            J.get(t, n) ||
                            J.access(t, n, {
                                empty: x.Callbacks("once memory").add(function () {
                                    J.remove(t, [e + "queue", n]);
                                }),
                            })
                        );
                    },
                }),
                x.fn.extend({
                    queue: function (t, e) {
                        var n = 2;
                        return (
                            "string" != typeof t && ((e = t), (t = "fx"), n--),
                            arguments.length < n
                                ? x.queue(this[0], t)
                                : void 0 === e
                                ? this
                                : this.each(function () {
                                      var n = x.queue(this, t, e);
                                      x._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && x.dequeue(this, t);
                                  })
                        );
                    },
                    dequeue: function (t) {
                        return this.each(function () {
                            x.dequeue(this, t);
                        });
                    },
                    clearQueue: function (t) {
                        return this.queue(t || "fx", []);
                    },
                    promise: function (t, e) {
                        var n,
                            i = 1,
                            o = x.Deferred(),
                            r = this,
                            s = this.length,
                            a = function () {
                                --i || o.resolveWith(r, [r]);
                            };
                        for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; s--; ) (n = J.get(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                        return a(), o.promise(e);
                    },
                });
            var it = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ot = new RegExp("^(?:([+-])=|)(" + it + ")([a-z%]*)$", "i"),
                rt = ["Top", "Right", "Bottom", "Left"],
                st = s.documentElement,
                at = function (t) {
                    return x.contains(t.ownerDocument, t);
                },
                lt = { composed: !0 };
            st.getRootNode &&
                (at = function (t) {
                    return x.contains(t.ownerDocument, t) || t.getRootNode(lt) === t.ownerDocument;
                });
            var ct = function (t, e) {
                    return "none" === (t = e || t).style.display || ("" === t.style.display && at(t) && "none" === x.css(t, "display"));
                },
                ut = function (t, e, n, i) {
                    var o,
                        r,
                        s = {};
                    for (r in e) (s[r] = t.style[r]), (t.style[r] = e[r]);
                    for (r in ((o = n.apply(t, i || [])), e)) t.style[r] = s[r];
                    return o;
                };
            function ht(t, e, n, i) {
                var o,
                    r,
                    s = 20,
                    a = i
                        ? function () {
                              return i.cur();
                          }
                        : function () {
                              return x.css(t, e, "");
                          },
                    l = a(),
                    c = (n && n[3]) || (x.cssNumber[e] ? "" : "px"),
                    u = t.nodeType && (x.cssNumber[e] || ("px" !== c && +l)) && ot.exec(x.css(t, e));
                if (u && u[3] !== c) {
                    for (l /= 2, c = c || u[3], u = +l || 1; s--; ) x.style(t, e, u + c), (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0), (u /= r);
                    (u *= 2), x.style(t, e, u + c), (n = n || []);
                }
                return n && ((u = +u || +l || 0), (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = c), (i.start = u), (i.end = o))), o;
            }
            var dt = {};
            function ft(t) {
                var e,
                    n = t.ownerDocument,
                    i = t.nodeName,
                    o = dt[i];
                return o || ((e = n.body.appendChild(n.createElement(i))), (o = x.css(e, "display")), e.parentNode.removeChild(e), "none" === o && (o = "block"), (dt[i] = o), o);
            }
            function pt(t, e) {
                for (var n, i, o = [], r = 0, s = t.length; r < s; r++)
                    (i = t[r]).style &&
                        ((n = i.style.display),
                        e ? ("none" === n && ((o[r] = J.get(i, "display") || null), o[r] || (i.style.display = "")), "" === i.style.display && ct(i) && (o[r] = ft(i))) : "none" !== n && ((o[r] = "none"), J.set(i, "display", n)));
                for (r = 0; r < s; r++) null != o[r] && (t[r].style.display = o[r]);
                return t;
            }
            x.fn.extend({
                show: function () {
                    return pt(this, !0);
                },
                hide: function () {
                    return pt(this);
                },
                toggle: function (t) {
                    return "boolean" == typeof t
                        ? t
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              ct(this) ? x(this).show() : x(this).hide();
                          });
                },
            });
            var gt = /^(?:checkbox|radio)$/i,
                mt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                vt = /^$|^module$|\/(?:java|ecma)script/i,
                yt = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""],
                };
            function bt(t, e) {
                var n;
                return (n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : []), void 0 === e || (e && N(t, e)) ? x.merge([t], n) : n;
            }
            function _t(t, e) {
                for (var n = 0, i = t.length; n < i; n++) J.set(t[n], "globalEval", !e || J.get(e[n], "globalEval"));
            }
            (yt.optgroup = yt.option), (yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead), (yt.th = yt.td);
            var wt,
                Et,
                xt = /<|&#?\w+;/;
            function Ct(t, e, n, i, o) {
                for (var r, s, a, l, c, u, h = e.createDocumentFragment(), d = [], f = 0, p = t.length; f < p; f++)
                    if ((r = t[f]) || 0 === r)
                        if ("object" === E(r)) x.merge(d, r.nodeType ? [r] : r);
                        else if (xt.test(r)) {
                            for (s = s || h.appendChild(e.createElement("div")), a = (mt.exec(r) || ["", ""])[1].toLowerCase(), l = yt[a] || yt._default, s.innerHTML = l[1] + x.htmlPrefilter(r) + l[2], u = l[0]; u--; ) s = s.lastChild;
                            x.merge(d, s.childNodes), ((s = h.firstChild).textContent = "");
                        } else d.push(e.createTextNode(r));
                for (h.textContent = "", f = 0; (r = d[f++]); )
                    if (i && x.inArray(r, i) > -1) o && o.push(r);
                    else if (((c = at(r)), (s = bt(h.appendChild(r), "script")), c && _t(s), n)) for (u = 0; (r = s[u++]); ) vt.test(r.type || "") && n.push(r);
                return h;
            }
            (wt = s.createDocumentFragment().appendChild(s.createElement("div"))),
                (Et = s.createElement("input")).setAttribute("type", "radio"),
                Et.setAttribute("checked", "checked"),
                Et.setAttribute("name", "t"),
                wt.appendChild(Et),
                (v.checkClone = wt.cloneNode(!0).cloneNode(!0).lastChild.checked),
                (wt.innerHTML = "<textarea>x</textarea>"),
                (v.noCloneChecked = !!wt.cloneNode(!0).lastChild.defaultValue);
            var St = /^key/,
                Tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Dt = /^([^.]*)(?:\.(.+)|)/;
            function At() {
                return !0;
            }
            function kt() {
                return !1;
            }
            function Nt(t, e) {
                return (
                    (t ===
                        (function () {
                            try {
                                return s.activeElement;
                            } catch (t) {}
                        })()) ==
                    ("focus" === e)
                );
            }
            function It(t, e, n, i, o, r) {
                var s, a;
                if ("object" == typeof e) {
                    for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), e)) It(t, a, n, i, e[a], r);
                    return t;
                }
                if ((null == i && null == o ? ((o = n), (i = n = void 0)) : null == o && ("string" == typeof n ? ((o = i), (i = void 0)) : ((o = i), (i = n), (n = void 0))), !1 === o)) o = kt;
                else if (!o) return t;
                return (
                    1 === r &&
                        ((s = o),
                        ((o = function (t) {
                            return x().off(t), s.apply(this, arguments);
                        }).guid = s.guid || (s.guid = x.guid++))),
                    t.each(function () {
                        x.event.add(this, e, o, i, n);
                    })
                );
            }
            function Lt(t, e, n) {
                n
                    ? (J.set(t, e, !1),
                      x.event.add(t, e, {
                          namespace: !1,
                          handler: function (t) {
                              var i,
                                  o,
                                  r = J.get(this, e);
                              if (1 & t.isTrigger && this[e]) {
                                  if (r.length) (x.event.special[e] || {}).delegateType && t.stopPropagation();
                                  else if (((r = l.call(arguments)), J.set(this, e, r), (i = n(this, e)), this[e](), r !== (o = J.get(this, e)) || i ? J.set(this, e, !1) : (o = {}), r !== o))
                                      return t.stopImmediatePropagation(), t.preventDefault(), o.value;
                              } else r.length && (J.set(this, e, { value: x.event.trigger(x.extend(r[0], x.Event.prototype), r.slice(1), this) }), t.stopImmediatePropagation());
                          },
                      }))
                    : void 0 === J.get(t, e) && x.event.add(t, e, At);
            }
            (x.event = {
                global: {},
                add: function (t, e, n, i, o) {
                    var r,
                        s,
                        a,
                        l,
                        c,
                        u,
                        h,
                        d,
                        f,
                        p,
                        g,
                        m = J.get(t);
                    if (m)
                        for (
                            n.handler && ((n = (r = n).handler), (o = r.selector)),
                                o && x.find.matchesSelector(st, o),
                                n.guid || (n.guid = x.guid++),
                                (l = m.events) || (l = m.events = {}),
                                (s = m.handle) ||
                                    (s = m.handle = function (e) {
                                        return void 0 !== x && x.event.triggered !== e.type ? x.event.dispatch.apply(t, arguments) : void 0;
                                    }),
                                c = (e = (e || "").match(q) || [""]).length;
                            c--;

                        )
                            (f = g = (a = Dt.exec(e[c]) || [])[1]),
                                (p = (a[2] || "").split(".").sort()),
                                f &&
                                    ((h = x.event.special[f] || {}),
                                    (f = (o ? h.delegateType : h.bindType) || f),
                                    (h = x.event.special[f] || {}),
                                    (u = x.extend({ type: f, origType: g, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && x.expr.match.needsContext.test(o), namespace: p.join(".") }, r)),
                                    (d = l[f]) || (((d = l[f] = []).delegateCount = 0), (h.setup && !1 !== h.setup.call(t, i, p, s)) || (t.addEventListener && t.addEventListener(f, s))),
                                    h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)),
                                    o ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                                    (x.event.global[f] = !0));
                },
                remove: function (t, e, n, i, o) {
                    var r,
                        s,
                        a,
                        l,
                        c,
                        u,
                        h,
                        d,
                        f,
                        p,
                        g,
                        m = J.hasData(t) && J.get(t);
                    if (m && (l = m.events)) {
                        for (c = (e = (e || "").match(q) || [""]).length; c--; )
                            if (((f = g = (a = Dt.exec(e[c]) || [])[1]), (p = (a[2] || "").split(".").sort()), f)) {
                                for (h = x.event.special[f] || {}, d = l[(f = (i ? h.delegateType : h.bindType) || f)] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--; )
                                    (u = d[r]),
                                        (!o && g !== u.origType) ||
                                            (n && n.guid !== u.guid) ||
                                            (a && !a.test(u.namespace)) ||
                                            (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                                            (d.splice(r, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(t, u));
                                s && !d.length && ((h.teardown && !1 !== h.teardown.call(t, p, m.handle)) || x.removeEvent(t, f, m.handle), delete l[f]);
                            } else for (f in l) x.event.remove(t, f + e[c], n, i, !0);
                        x.isEmptyObject(l) && J.remove(t, "handle events");
                    }
                },
                dispatch: function (t) {
                    var e,
                        n,
                        i,
                        o,
                        r,
                        s,
                        a = x.event.fix(t),
                        l = new Array(arguments.length),
                        c = (J.get(this, "events") || {})[a.type] || [],
                        u = x.event.special[a.type] || {};
                    for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                    if (((a.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, a))) {
                        for (s = x.event.handlers.call(this, a, c), e = 0; (o = s[e++]) && !a.isPropagationStopped(); )
                            for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                                (a.rnamespace && !1 !== r.namespace && !a.rnamespace.test(r.namespace)) ||
                                    ((a.handleObj = r), (a.data = r.data), void 0 !== (i = ((x.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, a), a.result;
                    }
                },
                handlers: function (t, e) {
                    var n,
                        i,
                        o,
                        r,
                        s,
                        a = [],
                        l = e.delegateCount,
                        c = t.target;
                    if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                                for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[(o = (i = e[n]).selector + " ")] && (s[o] = i.needsContext ? x(o, this).index(c) > -1 : x.find(o, this, null, [c]).length), s[o] && r.push(i);
                                r.length && a.push({ elem: c, handlers: r });
                            }
                    return (c = this), l < e.length && a.push({ elem: c, handlers: e.slice(l) }), a;
                },
                addProp: function (t, e) {
                    Object.defineProperty(x.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: y(e)
                            ? function () {
                                  if (this.originalEvent) return e(this.originalEvent);
                              }
                            : function () {
                                  if (this.originalEvent) return this.originalEvent[t];
                              },
                        set: function (e) {
                            Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                        },
                    });
                },
                fix: function (t) {
                    return t[x.expando] ? t : new x.Event(t);
                },
                special: {
                    load: { noBubble: !0 },
                    click: {
                        setup: function (t) {
                            var e = this || t;
                            return gt.test(e.type) && e.click && N(e, "input") && Lt(e, "click", At), !1;
                        },
                        trigger: function (t) {
                            var e = this || t;
                            return gt.test(e.type) && e.click && N(e, "input") && Lt(e, "click"), !0;
                        },
                        _default: function (t) {
                            var e = t.target;
                            return (gt.test(e.type) && e.click && N(e, "input") && J.get(e, "click")) || N(e, "a");
                        },
                    },
                    beforeunload: {
                        postDispatch: function (t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                        },
                    },
                },
            }),
                (x.removeEvent = function (t, e, n) {
                    t.removeEventListener && t.removeEventListener(e, n);
                }),
                (x.Event = function (t, e) {
                    if (!(this instanceof x.Event)) return new x.Event(t, e);
                    t && t.type
                        ? ((this.originalEvent = t),
                          (this.type = t.type),
                          (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue) ? At : kt),
                          (this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target),
                          (this.currentTarget = t.currentTarget),
                          (this.relatedTarget = t.relatedTarget))
                        : (this.type = t),
                        e && x.extend(this, e),
                        (this.timeStamp = (t && t.timeStamp) || Date.now()),
                        (this[x.expando] = !0);
                }),
                (x.Event.prototype = {
                    constructor: x.Event,
                    isDefaultPrevented: kt,
                    isPropagationStopped: kt,
                    isImmediatePropagationStopped: kt,
                    isSimulated: !1,
                    preventDefault: function () {
                        var t = this.originalEvent;
                        (this.isDefaultPrevented = At), t && !this.isSimulated && t.preventDefault();
                    },
                    stopPropagation: function () {
                        var t = this.originalEvent;
                        (this.isPropagationStopped = At), t && !this.isSimulated && t.stopPropagation();
                    },
                    stopImmediatePropagation: function () {
                        var t = this.originalEvent;
                        (this.isImmediatePropagationStopped = At), t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
                    },
                }),
                x.each(
                    {
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: function (t) {
                            var e = t.button;
                            return null == t.which && St.test(t.type) ? (null != t.charCode ? t.charCode : t.keyCode) : !t.which && void 0 !== e && Tt.test(t.type) ? (1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0) : t.which;
                        },
                    },
                    x.event.addProp
                ),
                x.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                    x.event.special[t] = {
                        setup: function () {
                            return Lt(this, t, Nt), !1;
                        },
                        trigger: function () {
                            return Lt(this, t), !0;
                        },
                        delegateType: e,
                    };
                }),
                x.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
                    x.event.special[t] = {
                        delegateType: e,
                        bindType: e,
                        handle: function (t) {
                            var n,
                                i = this,
                                o = t.relatedTarget,
                                r = t.handleObj;
                            return (o && (o === i || x.contains(i, o))) || ((t.type = r.origType), (n = r.handler.apply(this, arguments)), (t.type = e)), n;
                        },
                    };
                }),
                x.fn.extend({
                    on: function (t, e, n, i) {
                        return It(this, t, e, n, i);
                    },
                    one: function (t, e, n, i) {
                        return It(this, t, e, n, i, 1);
                    },
                    off: function (t, e, n) {
                        var i, o;
                        if (t && t.preventDefault && t.handleObj) return (i = t.handleObj), x(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                        if ("object" == typeof t) {
                            for (o in t) this.off(o, e, t[o]);
                            return this;
                        }
                        return (
                            (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
                            !1 === n && (n = kt),
                            this.each(function () {
                                x.event.remove(this, t, n, e);
                            })
                        );
                    },
                });
            var Ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Pt = /<script|<style|<link/i,
                jt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Ht(t, e) {
                return (N(t, "table") && N(11 !== e.nodeType ? e : e.firstChild, "tr") && x(t).children("tbody")[0]) || t;
            }
            function qt(t) {
                return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
            }
            function Rt(t) {
                return "true/" === (t.type || "").slice(0, 5) ? (t.type = t.type.slice(5)) : t.removeAttribute("type"), t;
            }
            function Wt(t, e) {
                var n, i, o, r, s, a, l, c;
                if (1 === e.nodeType) {
                    if (J.hasData(t) && ((r = J.access(t)), (s = J.set(e, r)), (c = r.events))) for (o in (delete s.handle, (s.events = {}), c)) for (n = 0, i = c[o].length; n < i; n++) x.event.add(e, o, c[o][n]);
                    Z.hasData(t) && ((a = Z.access(t)), (l = x.extend({}, a)), Z.set(e, l));
                }
            }
            function Ft(t, e) {
                var n = e.nodeName.toLowerCase();
                "input" === n && gt.test(t.type) ? (e.checked = t.checked) : ("input" !== n && "textarea" !== n) || (e.defaultValue = t.defaultValue);
            }
            function zt(t, e, n, i) {
                e = c.apply([], e);
                var o,
                    r,
                    s,
                    a,
                    l,
                    u,
                    h = 0,
                    d = t.length,
                    f = d - 1,
                    p = e[0],
                    g = y(p);
                if (g || (d > 1 && "string" == typeof p && !v.checkClone && jt.test(p)))
                    return t.each(function (o) {
                        var r = t.eq(o);
                        g && (e[0] = p.call(this, o, r.html())), zt(r, e, n, i);
                    });
                if (d && ((r = (o = Ct(e, t[0].ownerDocument, !1, t, i)).firstChild), 1 === o.childNodes.length && (o = r), r || i)) {
                    for (a = (s = x.map(bt(o, "script"), qt)).length; h < d; h++) (l = o), h !== f && ((l = x.clone(l, !0, !0)), a && x.merge(s, bt(l, "script"))), n.call(t[h], l, h);
                    if (a)
                        for (u = s[s.length - 1].ownerDocument, x.map(s, Rt), h = 0; h < a; h++)
                            (l = s[h]),
                                vt.test(l.type || "") &&
                                    !J.access(l, "globalEval") &&
                                    x.contains(u, l) &&
                                    (l.src && "module" !== (l.type || "").toLowerCase() ? x._evalUrl && !l.noModule && x._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }) : w(l.textContent.replace(Mt, ""), l, u));
                }
                return t;
            }
            function Bt(t, e, n) {
                for (var i, o = e ? x.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || x.cleanData(bt(i)), i.parentNode && (n && at(i) && _t(bt(i, "script")), i.parentNode.removeChild(i));
                return t;
            }
            x.extend({
                htmlPrefilter: function (t) {
                    return t.replace(Ot, "<$1></$2>");
                },
                clone: function (t, e, n) {
                    var i,
                        o,
                        r,
                        s,
                        a = t.cloneNode(!0),
                        l = at(t);
                    if (!(v.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || x.isXMLDoc(t))) for (s = bt(a), i = 0, o = (r = bt(t)).length; i < o; i++) Ft(r[i], s[i]);
                    if (e)
                        if (n) for (r = r || bt(t), s = s || bt(a), i = 0, o = r.length; i < o; i++) Wt(r[i], s[i]);
                        else Wt(t, a);
                    return (s = bt(a, "script")).length > 0 && _t(s, !l && bt(t, "script")), a;
                },
                cleanData: function (t) {
                    for (var e, n, i, o = x.event.special, r = 0; void 0 !== (n = t[r]); r++)
                        if (Y(n)) {
                            if ((e = n[J.expando])) {
                                if (e.events) for (i in e.events) o[i] ? x.event.remove(n, i) : x.removeEvent(n, i, e.handle);
                                n[J.expando] = void 0;
                            }
                            n[Z.expando] && (n[Z.expando] = void 0);
                        }
                },
            }),
                x.fn.extend({
                    detach: function (t) {
                        return Bt(this, t, !0);
                    },
                    remove: function (t) {
                        return Bt(this, t);
                    },
                    text: function (t) {
                        return $(
                            this,
                            function (t) {
                                return void 0 === t
                                    ? x.text(this)
                                    : this.empty().each(function () {
                                          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = t);
                                      });
                            },
                            null,
                            t,
                            arguments.length
                        );
                    },
                    append: function () {
                        return zt(this, arguments, function (t) {
                            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Ht(this, t).appendChild(t);
                        });
                    },
                    prepend: function () {
                        return zt(this, arguments, function (t) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var e = Ht(this, t);
                                e.insertBefore(t, e.firstChild);
                            }
                        });
                    },
                    before: function () {
                        return zt(this, arguments, function (t) {
                            this.parentNode && this.parentNode.insertBefore(t, this);
                        });
                    },
                    after: function () {
                        return zt(this, arguments, function (t) {
                            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                        });
                    },
                    empty: function () {
                        for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (x.cleanData(bt(t, !1)), (t.textContent = ""));
                        return this;
                    },
                    clone: function (t, e) {
                        return (
                            (t = null != t && t),
                            (e = null == e ? t : e),
                            this.map(function () {
                                return x.clone(this, t, e);
                            })
                        );
                    },
                    html: function (t) {
                        return $(
                            this,
                            function (t) {
                                var e = this[0] || {},
                                    n = 0,
                                    i = this.length;
                                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                                if ("string" == typeof t && !Pt.test(t) && !yt[(mt.exec(t) || ["", ""])[1].toLowerCase()]) {
                                    t = x.htmlPrefilter(t);
                                    try {
                                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (x.cleanData(bt(e, !1)), (e.innerHTML = t));
                                        e = 0;
                                    } catch (t) {}
                                }
                                e && this.empty().append(t);
                            },
                            null,
                            t,
                            arguments.length
                        );
                    },
                    replaceWith: function () {
                        var t = [];
                        return zt(
                            this,
                            arguments,
                            function (e) {
                                var n = this.parentNode;
                                x.inArray(this, t) < 0 && (x.cleanData(bt(this)), n && n.replaceChild(e, this));
                            },
                            t
                        );
                    },
                }),
                x.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
                    x.fn[t] = function (t) {
                        for (var n, i = [], o = x(t), r = o.length - 1, s = 0; s <= r; s++) (n = s === r ? this : this.clone(!0)), x(o[s])[e](n), u.apply(i, n.get());
                        return this.pushStack(i);
                    };
                });
            var Ut = new RegExp("^(" + it + ")(?!px)[a-z%]+$", "i"),
                $t = function (t) {
                    var e = t.ownerDocument.defaultView;
                    return (e && e.opener) || (e = n), e.getComputedStyle(t);
                },
                Vt = new RegExp(rt.join("|"), "i");
            function Qt(t, e, n) {
                var i,
                    o,
                    r,
                    s,
                    a = t.style;
                return (
                    (n = n || $t(t)) &&
                        ("" !== (s = n.getPropertyValue(e) || n[e]) || at(t) || (s = x.style(t, e)),
                        !v.pixelBoxStyles() && Ut.test(s) && Vt.test(e) && ((i = a.width), (o = a.minWidth), (r = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = i), (a.minWidth = o), (a.maxWidth = r))),
                    void 0 !== s ? s + "" : s
                );
            }
            function Xt(t, e) {
                return {
                    get: function () {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get;
                    },
                };
            }
            !(function () {
                function t() {
                    if (u) {
                        (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                            (u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                            st.appendChild(c).appendChild(u);
                        var t = n.getComputedStyle(u);
                        (i = "1%" !== t.top),
                            (l = 12 === e(t.marginLeft)),
                            (u.style.right = "60%"),
                            (a = 36 === e(t.right)),
                            (o = 36 === e(t.width)),
                            (u.style.position = "absolute"),
                            (r = 12 === e(u.offsetWidth / 3)),
                            st.removeChild(c),
                            (u = null);
                    }
                }
                function e(t) {
                    return Math.round(parseFloat(t));
                }
                var i,
                    o,
                    r,
                    a,
                    l,
                    c = s.createElement("div"),
                    u = s.createElement("div");
                u.style &&
                    ((u.style.backgroundClip = "content-box"),
                    (u.cloneNode(!0).style.backgroundClip = ""),
                    (v.clearCloneStyle = "content-box" === u.style.backgroundClip),
                    x.extend(v, {
                        boxSizingReliable: function () {
                            return t(), o;
                        },
                        pixelBoxStyles: function () {
                            return t(), a;
                        },
                        pixelPosition: function () {
                            return t(), i;
                        },
                        reliableMarginLeft: function () {
                            return t(), l;
                        },
                        scrollboxSize: function () {
                            return t(), r;
                        },
                    }));
            })();
            var Kt = ["Webkit", "Moz", "ms"],
                Yt = s.createElement("div").style,
                Gt = {};
            function Jt(t) {
                return (
                    x.cssProps[t] ||
                    Gt[t] ||
                    (t in Yt
                        ? t
                        : (Gt[t] =
                              (function (t) {
                                  for (var e = t[0].toUpperCase() + t.slice(1), n = Kt.length; n--; ) if ((t = Kt[n] + e) in Yt) return t;
                              })(t) || t))
                );
            }
            var Zt = /^(none|table(?!-c[ea]).+)/,
                te = /^--/,
                ee = { position: "absolute", visibility: "hidden", display: "block" },
                ne = { letterSpacing: "0", fontWeight: "400" };
            function ie(t, e, n) {
                var i = ot.exec(e);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
            }
            function oe(t, e, n, i, o, r) {
                var s = "width" === e ? 1 : 0,
                    a = 0,
                    l = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; s < 4; s += 2)
                    "margin" === n && (l += x.css(t, n + rt[s], !0, o)),
                        i
                            ? ("content" === n && (l -= x.css(t, "padding" + rt[s], !0, o)), "margin" !== n && (l -= x.css(t, "border" + rt[s] + "Width", !0, o)))
                            : ((l += x.css(t, "padding" + rt[s], !0, o)), "padding" !== n ? (l += x.css(t, "border" + rt[s] + "Width", !0, o)) : (a += x.css(t, "border" + rt[s] + "Width", !0, o)));
                return !i && r >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - 0.5)) || 0), l;
            }
            function re(t, e, n) {
                var i = $t(t),
                    o = (!v.boxSizingReliable() || n) && "border-box" === x.css(t, "boxSizing", !1, i),
                    r = o,
                    s = Qt(t, e, i),
                    a = "offset" + e[0].toUpperCase() + e.slice(1);
                if (Ut.test(s)) {
                    if (!n) return s;
                    s = "auto";
                }
                return (
                    ((!v.boxSizingReliable() && o) || "auto" === s || (!parseFloat(s) && "inline" === x.css(t, "display", !1, i))) &&
                        t.getClientRects().length &&
                        ((o = "border-box" === x.css(t, "boxSizing", !1, i)), (r = a in t) && (s = t[a])),
                    (s = parseFloat(s) || 0) + oe(t, e, n || (o ? "border" : "content"), r, i, s) + "px"
                );
            }
            function se(t, e, n, i, o) {
                return new se.prototype.init(t, e, n, i, o);
            }
            x.extend({
                cssHooks: {
                    opacity: {
                        get: function (t, e) {
                            if (e) {
                                var n = Qt(t, "opacity");
                                return "" === n ? "1" : n;
                            }
                        },
                    },
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                },
                cssProps: {},
                style: function (t, e, n, i) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var o,
                            r,
                            s,
                            a = K(e),
                            l = te.test(e),
                            c = t.style;
                        if ((l || (e = Jt(a)), (s = x.cssHooks[e] || x.cssHooks[a]), void 0 === n)) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : c[e];
                        "string" == (r = typeof n) && (o = ot.exec(n)) && o[1] && ((n = ht(t, e, o)), (r = "number")),
                            null != n &&
                                n == n &&
                                ("number" !== r || l || (n += (o && o[3]) || (x.cssNumber[a] ? "" : "px")),
                                v.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"),
                                (s && "set" in s && void 0 === (n = s.set(t, n, i))) || (l ? c.setProperty(e, n) : (c[e] = n)));
                    }
                },
                css: function (t, e, n, i) {
                    var o,
                        r,
                        s,
                        a = K(e);
                    return (
                        te.test(e) || (e = Jt(a)),
                        (s = x.cssHooks[e] || x.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)),
                        void 0 === o && (o = Qt(t, e, i)),
                        "normal" === o && e in ne && (o = ne[e]),
                        "" === n || n ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o) : o
                    );
                },
            }),
                x.each(["height", "width"], function (t, e) {
                    x.cssHooks[e] = {
                        get: function (t, n, i) {
                            if (n)
                                return !Zt.test(x.css(t, "display")) || (t.getClientRects().length && t.getBoundingClientRect().width)
                                    ? re(t, e, i)
                                    : ut(t, ee, function () {
                                          return re(t, e, i);
                                      });
                        },
                        set: function (t, n, i) {
                            var o,
                                r = $t(t),
                                s = !v.scrollboxSize() && "absolute" === r.position,
                                a = (s || i) && "border-box" === x.css(t, "boxSizing", !1, r),
                                l = i ? oe(t, e, i, a, r) : 0;
                            return (
                                a && s && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - oe(t, e, "border", !1, r) - 0.5)),
                                l && (o = ot.exec(n)) && "px" !== (o[3] || "px") && ((t.style[e] = n), (n = x.css(t, e))),
                                ie(0, n, l)
                            );
                        },
                    };
                }),
                (x.cssHooks.marginLeft = Xt(v.reliableMarginLeft, function (t, e) {
                    if (e)
                        return (
                            (parseFloat(Qt(t, "marginLeft")) ||
                                t.getBoundingClientRect().left -
                                    ut(t, { marginLeft: 0 }, function () {
                                        return t.getBoundingClientRect().left;
                                    })) + "px"
                        );
                })),
                x.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
                    (x.cssHooks[t + e] = {
                        expand: function (n) {
                            for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + rt[i] + e] = r[i] || r[i - 2] || r[0];
                            return o;
                        },
                    }),
                        "margin" !== t && (x.cssHooks[t + e].set = ie);
                }),
                x.fn.extend({
                    css: function (t, e) {
                        return $(
                            this,
                            function (t, e, n) {
                                var i,
                                    o,
                                    r = {},
                                    s = 0;
                                if (Array.isArray(e)) {
                                    for (i = $t(t), o = e.length; s < o; s++) r[e[s]] = x.css(t, e[s], !1, i);
                                    return r;
                                }
                                return void 0 !== n ? x.style(t, e, n) : x.css(t, e);
                            },
                            t,
                            e,
                            arguments.length > 1
                        );
                    },
                }),
                (x.Tween = se),
                (se.prototype = {
                    constructor: se,
                    init: function (t, e, n, i, o, r) {
                        (this.elem = t), (this.prop = n), (this.easing = o || x.easing._default), (this.options = e), (this.start = this.now = this.cur()), (this.end = i), (this.unit = r || (x.cssNumber[n] ? "" : "px"));
                    },
                    cur: function () {
                        var t = se.propHooks[this.prop];
                        return t && t.get ? t.get(this) : se.propHooks._default.get(this);
                    },
                    run: function (t) {
                        var e,
                            n = se.propHooks[this.prop];
                        return (
                            this.options.duration ? (this.pos = e = x.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)) : (this.pos = e = t),
                            (this.now = (this.end - this.start) * e + this.start),
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : se.propHooks._default.set(this),
                            this
                        );
                    },
                }),
                (se.prototype.init.prototype = se.prototype),
                (se.propHooks = {
                    _default: {
                        get: function (t) {
                            var e;
                            return 1 !== t.elem.nodeType || (null != t.elem[t.prop] && null == t.elem.style[t.prop]) ? t.elem[t.prop] : (e = x.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
                        },
                        set: function (t) {
                            x.fx.step[t.prop] ? x.fx.step[t.prop](t) : 1 !== t.elem.nodeType || (!x.cssHooks[t.prop] && null == t.elem.style[Jt(t.prop)]) ? (t.elem[t.prop] = t.now) : x.style(t.elem, t.prop, t.now + t.unit);
                        },
                    },
                }),
                (se.propHooks.scrollTop = se.propHooks.scrollLeft = {
                    set: function (t) {
                        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
                    },
                }),
                (x.easing = {
                    linear: function (t) {
                        return t;
                    },
                    swing: function (t) {
                        return 0.5 - Math.cos(t * Math.PI) / 2;
                    },
                    _default: "swing",
                }),
                (x.fx = se.prototype.init),
                (x.fx.step = {});
            var ae,
                le,
                ce = /^(?:toggle|show|hide)$/,
                ue = /queueHooks$/;
            function he() {
                le && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(he) : n.setTimeout(he, x.fx.interval), x.fx.tick());
            }
            function de() {
                return (
                    n.setTimeout(function () {
                        ae = void 0;
                    }),
                    (ae = Date.now())
                );
            }
            function fe(t, e) {
                var n,
                    i = 0,
                    o = { height: t };
                for (e = e ? 1 : 0; i < 4; i += 2 - e) o["margin" + (n = rt[i])] = o["padding" + n] = t;
                return e && (o.opacity = o.width = t), o;
            }
            function pe(t, e, n) {
                for (var i, o = (ge.tweeners[e] || []).concat(ge.tweeners["*"]), r = 0, s = o.length; r < s; r++) if ((i = o[r].call(n, e, t))) return i;
            }
            function ge(t, e, n) {
                var i,
                    o,
                    r = 0,
                    s = ge.prefilters.length,
                    a = x.Deferred().always(function () {
                        delete l.elem;
                    }),
                    l = function () {
                        if (o) return !1;
                        for (var e = ae || de(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
                        return a.notifyWith(t, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1);
                    },
                    c = a.promise({
                        elem: t,
                        props: x.extend({}, e),
                        opts: x.extend(!0, { specialEasing: {}, easing: x.easing._default }, n),
                        originalProperties: e,
                        originalOptions: n,
                        startTime: ae || de(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (e, n) {
                            var i = x.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                            return c.tweens.push(i), i;
                        },
                        stop: function (e) {
                            var n = 0,
                                i = e ? c.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; n < i; n++) c.tweens[n].run(1);
                            return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this;
                        },
                    }),
                    u = c.props;
                for (
                    (function (t, e) {
                        var n, i, o, r, s;
                        for (n in t)
                            if (((o = e[(i = K(n))]), (r = t[n]), Array.isArray(r) && ((o = r[1]), (r = t[n] = r[0])), n !== i && ((t[i] = r), delete t[n]), (s = x.cssHooks[i]) && ("expand" in s)))
                                for (n in ((r = s.expand(r)), delete t[i], r)) (n in t) || ((t[n] = r[n]), (e[n] = o));
                            else e[i] = o;
                    })(u, c.opts.specialEasing);
                    r < s;
                    r++
                )
                    if ((i = ge.prefilters[r].call(c, t, u, c.opts))) return y(i.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
                return (
                    x.map(u, pe, c),
                    y(c.opts.start) && c.opts.start.call(t, c),
                    c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                    x.fx.timer(x.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
                    c
                );
            }
            (x.Animation = x.extend(ge, {
                tweeners: {
                    "*": [
                        function (t, e) {
                            var n = this.createTween(t, e);
                            return ht(n.elem, t, ot.exec(e), n), n;
                        },
                    ],
                },
                tweener: function (t, e) {
                    y(t) ? ((e = t), (t = ["*"])) : (t = t.match(q));
                    for (var n, i = 0, o = t.length; i < o; i++) (n = t[i]), (ge.tweeners[n] = ge.tweeners[n] || []), ge.tweeners[n].unshift(e);
                },
                prefilters: [
                    function (t, e, n) {
                        var i,
                            o,
                            r,
                            s,
                            a,
                            l,
                            c,
                            u,
                            h = "width" in e || "height" in e,
                            d = this,
                            f = {},
                            p = t.style,
                            g = t.nodeType && ct(t),
                            m = J.get(t, "fxshow");
                        for (i in (n.queue ||
                            (null == (s = x._queueHooks(t, "fx")).unqueued &&
                                ((s.unqueued = 0),
                                (a = s.empty.fire),
                                (s.empty.fire = function () {
                                    s.unqueued || a();
                                })),
                            s.unqueued++,
                            d.always(function () {
                                d.always(function () {
                                    s.unqueued--, x.queue(t, "fx").length || s.empty.fire();
                                });
                            })),
                        e))
                            if (((o = e[i]), ce.test(o))) {
                                if ((delete e[i], (r = r || "toggle" === o), o === (g ? "hide" : "show"))) {
                                    if ("show" !== o || !m || void 0 === m[i]) continue;
                                    g = !0;
                                }
                                f[i] = (m && m[i]) || x.style(t, i);
                            }
                        if ((l = !x.isEmptyObject(e)) || !x.isEmptyObject(f))
                            for (i in (h &&
                                1 === t.nodeType &&
                                ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                                null == (c = m && m.display) && (c = J.get(t, "display")),
                                "none" === (u = x.css(t, "display")) && (c ? (u = c) : (pt([t], !0), (c = t.style.display || c), (u = x.css(t, "display")), pt([t]))),
                                ("inline" === u || ("inline-block" === u && null != c)) &&
                                    "none" === x.css(t, "float") &&
                                    (l ||
                                        (d.done(function () {
                                            p.display = c;
                                        }),
                                        null == c && ((u = p.display), (c = "none" === u ? "" : u))),
                                    (p.display = "inline-block"))),
                            n.overflow &&
                                ((p.overflow = "hidden"),
                                d.always(function () {
                                    (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
                                })),
                            (l = !1),
                            f))
                                l ||
                                    (m ? "hidden" in m && (g = m.hidden) : (m = J.access(t, "fxshow", { display: c })),
                                    r && (m.hidden = !g),
                                    g && pt([t], !0),
                                    d.done(function () {
                                        for (i in (g || pt([t]), J.remove(t, "fxshow"), f)) x.style(t, i, f[i]);
                                    })),
                                    (l = pe(g ? m[i] : 0, i, d)),
                                    i in m || ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
                    },
                ],
                prefilter: function (t, e) {
                    e ? ge.prefilters.unshift(t) : ge.prefilters.push(t);
                },
            })),
                (x.speed = function (t, e, n) {
                    var i = t && "object" == typeof t ? x.extend({}, t) : { complete: n || (!n && e) || (y(t) && t), duration: t, easing: (n && e) || (e && !y(e) && e) };
                    return (
                        x.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in x.fx.speeds ? (i.duration = x.fx.speeds[i.duration]) : (i.duration = x.fx.speeds._default)),
                        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                        (i.old = i.complete),
                        (i.complete = function () {
                            y(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue);
                        }),
                        i
                    );
                }),
                x.fn.extend({
                    fadeTo: function (t, e, n, i) {
                        return this.filter(ct).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i);
                    },
                    animate: function (t, e, n, i) {
                        var o = x.isEmptyObject(t),
                            r = x.speed(e, n, i),
                            s = function () {
                                var e = ge(this, x.extend({}, t), r);
                                (o || J.get(this, "finish")) && e.stop(!0);
                            };
                        return (s.finish = s), o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
                    },
                    stop: function (t, e, n) {
                        var i = function (t) {
                            var e = t.stop;
                            delete t.stop, e(n);
                        };
                        return (
                            "string" != typeof t && ((n = e), (e = t), (t = void 0)),
                            e && !1 !== t && this.queue(t || "fx", []),
                            this.each(function () {
                                var e = !0,
                                    o = null != t && t + "queueHooks",
                                    r = x.timers,
                                    s = J.get(this);
                                if (o) s[o] && s[o].stop && i(s[o]);
                                else for (o in s) s[o] && s[o].stop && ue.test(o) && i(s[o]);
                                for (o = r.length; o--; ) r[o].elem !== this || (null != t && r[o].queue !== t) || (r[o].anim.stop(n), (e = !1), r.splice(o, 1));
                                (!e && n) || x.dequeue(this, t);
                            })
                        );
                    },
                    finish: function (t) {
                        return (
                            !1 !== t && (t = t || "fx"),
                            this.each(function () {
                                var e,
                                    n = J.get(this),
                                    i = n[t + "queue"],
                                    o = n[t + "queueHooks"],
                                    r = x.timers,
                                    s = i ? i.length : 0;
                                for (n.finish = !0, x.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--; ) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                                for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                                delete n.finish;
                            })
                        );
                    },
                }),
                x.each(["toggle", "show", "hide"], function (t, e) {
                    var n = x.fn[e];
                    x.fn[e] = function (t, i, o) {
                        return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(fe(e, !0), t, i, o);
                    };
                }),
                x.each({ slideDown: fe("show"), slideUp: fe("hide"), slideToggle: fe("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
                    x.fn[t] = function (t, n, i) {
                        return this.animate(e, t, n, i);
                    };
                }),
                (x.timers = []),
                (x.fx.tick = function () {
                    var t,
                        e = 0,
                        n = x.timers;
                    for (ae = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
                    n.length || x.fx.stop(), (ae = void 0);
                }),
                (x.fx.timer = function (t) {
                    x.timers.push(t), x.fx.start();
                }),
                (x.fx.interval = 13),
                (x.fx.start = function () {
                    le || ((le = !0), he());
                }),
                (x.fx.stop = function () {
                    le = null;
                }),
                (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (x.fn.delay = function (t, e) {
                    return (
                        (t = (x.fx && x.fx.speeds[t]) || t),
                        (e = e || "fx"),
                        this.queue(e, function (e, i) {
                            var o = n.setTimeout(e, t);
                            i.stop = function () {
                                n.clearTimeout(o);
                            };
                        })
                    );
                }),
                (function () {
                    var t = s.createElement("input"),
                        e = s.createElement("select").appendChild(s.createElement("option"));
                    (t.type = "checkbox"), (v.checkOn = "" !== t.value), (v.optSelected = e.selected), ((t = s.createElement("input")).value = "t"), (t.type = "radio"), (v.radioValue = "t" === t.value);
                })();
            var me,
                ve = x.expr.attrHandle;
            x.fn.extend({
                attr: function (t, e) {
                    return $(this, x.attr, t, e, arguments.length > 1);
                },
                removeAttr: function (t) {
                    return this.each(function () {
                        x.removeAttr(this, t);
                    });
                },
            }),
                x.extend({
                    attr: function (t, e, n) {
                        var i,
                            o,
                            r = t.nodeType;
                        if (3 !== r && 8 !== r && 2 !== r)
                            return void 0 === t.getAttribute
                                ? x.prop(t, e, n)
                                : ((1 === r && x.isXMLDoc(t)) || (o = x.attrHooks[e.toLowerCase()] || (x.expr.match.bool.test(e) ? me : void 0)),
                                  void 0 !== n
                                      ? null === n
                                          ? void x.removeAttr(t, e)
                                          : o && "set" in o && void 0 !== (i = o.set(t, n, e))
                                          ? i
                                          : (t.setAttribute(e, n + ""), n)
                                      : o && "get" in o && null !== (i = o.get(t, e))
                                      ? i
                                      : null == (i = x.find.attr(t, e))
                                      ? void 0
                                      : i);
                    },
                    attrHooks: {
                        type: {
                            set: function (t, e) {
                                if (!v.radioValue && "radio" === e && N(t, "input")) {
                                    var n = t.value;
                                    return t.setAttribute("type", e), n && (t.value = n), e;
                                }
                            },
                        },
                    },
                    removeAttr: function (t, e) {
                        var n,
                            i = 0,
                            o = e && e.match(q);
                        if (o && 1 === t.nodeType) for (; (n = o[i++]); ) t.removeAttribute(n);
                    },
                }),
                (me = {
                    set: function (t, e, n) {
                        return !1 === e ? x.removeAttr(t, n) : t.setAttribute(n, n), n;
                    },
                }),
                x.each(x.expr.match.bool.source.match(/\w+/g), function (t, e) {
                    var n = ve[e] || x.find.attr;
                    ve[e] = function (t, e, i) {
                        var o,
                            r,
                            s = e.toLowerCase();
                        return i || ((r = ve[s]), (ve[s] = o), (o = null != n(t, e, i) ? s : null), (ve[s] = r)), o;
                    };
                });
            var ye = /^(?:input|select|textarea|button)$/i,
                be = /^(?:a|area)$/i;
            function _e(t) {
                return (t.match(q) || []).join(" ");
            }
            function we(t) {
                return (t.getAttribute && t.getAttribute("class")) || "";
            }
            function Ee(t) {
                return Array.isArray(t) ? t : ("string" == typeof t && t.match(q)) || [];
            }
            x.fn.extend({
                prop: function (t, e) {
                    return $(this, x.prop, t, e, arguments.length > 1);
                },
                removeProp: function (t) {
                    return this.each(function () {
                        delete this[x.propFix[t] || t];
                    });
                },
            }),
                x.extend({
                    prop: function (t, e, n) {
                        var i,
                            o,
                            r = t.nodeType;
                        if (3 !== r && 8 !== r && 2 !== r)
                            return (
                                (1 === r && x.isXMLDoc(t)) || ((e = x.propFix[e] || e), (o = x.propHooks[e])),
                                void 0 !== n ? (o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t[e] = n)) : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (t) {
                                var e = x.find.attr(t, "tabindex");
                                return e ? parseInt(e, 10) : ye.test(t.nodeName) || (be.test(t.nodeName) && t.href) ? 0 : -1;
                            },
                        },
                    },
                    propFix: { for: "htmlFor", class: "className" },
                }),
                v.optSelected ||
                    (x.propHooks.selected = {
                        get: function (t) {
                            var e = t.parentNode;
                            return e && e.parentNode && e.parentNode.selectedIndex, null;
                        },
                        set: function (t) {
                            var e = t.parentNode;
                            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                        },
                    }),
                x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    x.propFix[this.toLowerCase()] = this;
                }),
                x.fn.extend({
                    addClass: function (t) {
                        var e,
                            n,
                            i,
                            o,
                            r,
                            s,
                            a,
                            l = 0;
                        if (y(t))
                            return this.each(function (e) {
                                x(this).addClass(t.call(this, e, we(this)));
                            });
                        if ((e = Ee(t)).length)
                            for (; (n = this[l++]); )
                                if (((o = we(n)), (i = 1 === n.nodeType && " " + _e(o) + " "))) {
                                    for (s = 0; (r = e[s++]); ) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                                    o !== (a = _e(i)) && n.setAttribute("class", a);
                                }
                        return this;
                    },
                    removeClass: function (t) {
                        var e,
                            n,
                            i,
                            o,
                            r,
                            s,
                            a,
                            l = 0;
                        if (y(t))
                            return this.each(function (e) {
                                x(this).removeClass(t.call(this, e, we(this)));
                            });
                        if (!arguments.length) return this.attr("class", "");
                        if ((e = Ee(t)).length)
                            for (; (n = this[l++]); )
                                if (((o = we(n)), (i = 1 === n.nodeType && " " + _e(o) + " "))) {
                                    for (s = 0; (r = e[s++]); ) for (; i.indexOf(" " + r + " ") > -1; ) i = i.replace(" " + r + " ", " ");
                                    o !== (a = _e(i)) && n.setAttribute("class", a);
                                }
                        return this;
                    },
                    toggleClass: function (t, e) {
                        var n = typeof t,
                            i = "string" === n || Array.isArray(t);
                        return "boolean" == typeof e && i
                            ? e
                                ? this.addClass(t)
                                : this.removeClass(t)
                            : y(t)
                            ? this.each(function (n) {
                                  x(this).toggleClass(t.call(this, n, we(this), e), e);
                              })
                            : this.each(function () {
                                  var e, o, r, s;
                                  if (i) for (o = 0, r = x(this), s = Ee(t); (e = s[o++]); ) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                                  else (void 0 !== t && "boolean" !== n) || ((e = we(this)) && J.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : J.get(this, "__className__") || ""));
                              });
                    },
                    hasClass: function (t) {
                        var e,
                            n,
                            i = 0;
                        for (e = " " + t + " "; (n = this[i++]); ) if (1 === n.nodeType && (" " + _e(we(n)) + " ").indexOf(e) > -1) return !0;
                        return !1;
                    },
                });
            var xe = /\r/g;
            x.fn.extend({
                val: function (t) {
                    var e,
                        n,
                        i,
                        o = this[0];
                    return arguments.length
                        ? ((i = y(t)),
                          this.each(function (n) {
                              var o;
                              1 === this.nodeType &&
                                  (null == (o = i ? t.call(this, n, x(this).val()) : t)
                                      ? (o = "")
                                      : "number" == typeof o
                                      ? (o += "")
                                      : Array.isArray(o) &&
                                        (o = x.map(o, function (t) {
                                            return null == t ? "" : t + "";
                                        })),
                                  ((e = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value")) || (this.value = o));
                          }))
                        : o
                        ? (e = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value"))
                            ? n
                            : "string" == typeof (n = o.value)
                            ? n.replace(xe, "")
                            : null == n
                            ? ""
                            : n
                        : void 0;
                },
            }),
                x.extend({
                    valHooks: {
                        option: {
                            get: function (t) {
                                var e = x.find.attr(t, "value");
                                return null != e ? e : _e(x.text(t));
                            },
                        },
                        select: {
                            get: function (t) {
                                var e,
                                    n,
                                    i,
                                    o = t.options,
                                    r = t.selectedIndex,
                                    s = "select-one" === t.type,
                                    a = s ? null : [],
                                    l = s ? r + 1 : o.length;
                                for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                                    if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                        if (((e = x(n).val()), s)) return e;
                                        a.push(e);
                                    }
                                return a;
                            },
                            set: function (t, e) {
                                for (var n, i, o = t.options, r = x.makeArray(e), s = o.length; s--; ) ((i = o[s]).selected = x.inArray(x.valHooks.option.get(i), r) > -1) && (n = !0);
                                return n || (t.selectedIndex = -1), r;
                            },
                        },
                    },
                }),
                x.each(["radio", "checkbox"], function () {
                    (x.valHooks[this] = {
                        set: function (t, e) {
                            if (Array.isArray(e)) return (t.checked = x.inArray(x(t).val(), e) > -1);
                        },
                    }),
                        v.checkOn ||
                            (x.valHooks[this].get = function (t) {
                                return null === t.getAttribute("value") ? "on" : t.value;
                            });
                }),
                (v.focusin = "onfocusin" in n);
            var Ce = /^(?:focusinfocus|focusoutblur)$/,
                Se = function (t) {
                    t.stopPropagation();
                };
            x.extend(x.event, {
                trigger: function (t, e, i, o) {
                    var r,
                        a,
                        l,
                        c,
                        u,
                        h,
                        d,
                        f,
                        g = [i || s],
                        m = p.call(t, "type") ? t.type : t,
                        v = p.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (
                        ((a = f = l = i = i || s),
                        3 !== i.nodeType &&
                            8 !== i.nodeType &&
                            !Ce.test(m + x.event.triggered) &&
                            (m.indexOf(".") > -1 && ((v = m.split(".")), (m = v.shift()), v.sort()),
                            (u = m.indexOf(":") < 0 && "on" + m),
                            ((t = t[x.expando] ? t : new x.Event(m, "object" == typeof t && t)).isTrigger = o ? 2 : 3),
                            (t.namespace = v.join(".")),
                            (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                            (t.result = void 0),
                            t.target || (t.target = i),
                            (e = null == e ? [t] : x.makeArray(e, [t])),
                            (d = x.event.special[m] || {}),
                            o || !d.trigger || !1 !== d.trigger.apply(i, e)))
                    ) {
                        if (!o && !d.noBubble && !b(i)) {
                            for (c = d.delegateType || m, Ce.test(c + m) || (a = a.parentNode); a; a = a.parentNode) g.push(a), (l = a);
                            l === (i.ownerDocument || s) && g.push(l.defaultView || l.parentWindow || n);
                        }
                        for (r = 0; (a = g[r++]) && !t.isPropagationStopped(); )
                            (f = a),
                                (t.type = r > 1 ? c : d.bindType || m),
                                (h = (J.get(a, "events") || {})[t.type] && J.get(a, "handle")) && h.apply(a, e),
                                (h = u && a[u]) && h.apply && Y(a) && ((t.result = h.apply(a, e)), !1 === t.result && t.preventDefault());
                        return (
                            (t.type = m),
                            o ||
                                t.isDefaultPrevented() ||
                                (d._default && !1 !== d._default.apply(g.pop(), e)) ||
                                !Y(i) ||
                                (u &&
                                    y(i[m]) &&
                                    !b(i) &&
                                    ((l = i[u]) && (i[u] = null),
                                    (x.event.triggered = m),
                                    t.isPropagationStopped() && f.addEventListener(m, Se),
                                    i[m](),
                                    t.isPropagationStopped() && f.removeEventListener(m, Se),
                                    (x.event.triggered = void 0),
                                    l && (i[u] = l))),
                            t.result
                        );
                    }
                },
                simulate: function (t, e, n) {
                    var i = x.extend(new x.Event(), n, { type: t, isSimulated: !0 });
                    x.event.trigger(i, null, e);
                },
            }),
                x.fn.extend({
                    trigger: function (t, e) {
                        return this.each(function () {
                            x.event.trigger(t, e, this);
                        });
                    },
                    triggerHandler: function (t, e) {
                        var n = this[0];
                        if (n) return x.event.trigger(t, e, n, !0);
                    },
                }),
                v.focusin ||
                    x.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                        var n = function (t) {
                            x.event.simulate(e, t.target, x.event.fix(t));
                        };
                        x.event.special[e] = {
                            setup: function () {
                                var i = this.ownerDocument || this,
                                    o = J.access(i, e);
                                o || i.addEventListener(t, n, !0), J.access(i, e, (o || 0) + 1);
                            },
                            teardown: function () {
                                var i = this.ownerDocument || this,
                                    o = J.access(i, e) - 1;
                                o ? J.access(i, e, o) : (i.removeEventListener(t, n, !0), J.remove(i, e));
                            },
                        };
                    });
            var Te = n.location,
                De = Date.now(),
                Ae = /\?/;
            x.parseXML = function (t) {
                var e;
                if (!t || "string" != typeof t) return null;
                try {
                    e = new n.DOMParser().parseFromString(t, "text/xml");
                } catch (t) {
                    e = void 0;
                }
                return (e && !e.getElementsByTagName("parsererror").length) || x.error("Invalid XML: " + t), e;
            };
            var ke = /\[\]$/,
                Ne = /\r?\n/g,
                Ie = /^(?:submit|button|image|reset|file)$/i,
                Le = /^(?:input|select|textarea|keygen)/i;
            function Oe(t, e, n, i) {
                var o;
                if (Array.isArray(e))
                    x.each(e, function (e, o) {
                        n || ke.test(t) ? i(t, o) : Oe(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i);
                    });
                else if (n || "object" !== E(e)) i(t, e);
                else for (o in e) Oe(t + "[" + o + "]", e[o], n, i);
            }
            (x.param = function (t, e) {
                var n,
                    i = [],
                    o = function (t, e) {
                        var n = y(e) ? e() : e;
                        i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
                    };
                if (null == t) return "";
                if (Array.isArray(t) || (t.jquery && !x.isPlainObject(t)))
                    x.each(t, function () {
                        o(this.name, this.value);
                    });
                else for (n in t) Oe(n, t[n], e, o);
                return i.join("&");
            }),
                x.fn.extend({
                    serialize: function () {
                        return x.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var t = x.prop(this, "elements");
                            return t ? x.makeArray(t) : this;
                        })
                            .filter(function () {
                                var t = this.type;
                                return this.name && !x(this).is(":disabled") && Le.test(this.nodeName) && !Ie.test(t) && (this.checked || !gt.test(t));
                            })
                            .map(function (t, e) {
                                var n = x(this).val();
                                return null == n
                                    ? null
                                    : Array.isArray(n)
                                    ? x.map(n, function (t) {
                                          return { name: e.name, value: t.replace(Ne, "\r\n") };
                                      })
                                    : { name: e.name, value: n.replace(Ne, "\r\n") };
                            })
                            .get();
                    },
                });
            var Pe = /%20/g,
                je = /#.*$/,
                Me = /([?&])_=[^&]*/,
                He = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                qe = /^(?:GET|HEAD)$/,
                Re = /^\/\//,
                We = {},
                Fe = {},
                ze = "*/".concat("*"),
                Be = s.createElement("a");
            function Ue(t) {
                return function (e, n) {
                    "string" != typeof e && ((n = e), (e = "*"));
                    var i,
                        o = 0,
                        r = e.toLowerCase().match(q) || [];
                    if (y(n)) for (; (i = r[o++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
                };
            }
            function $e(t, e, n, i) {
                var o = {},
                    r = t === Fe;
                function s(a) {
                    var l;
                    return (
                        (o[a] = !0),
                        x.each(t[a] || [], function (t, a) {
                            var c = a(e, n, i);
                            return "string" != typeof c || r || o[c] ? (r ? !(l = c) : void 0) : (e.dataTypes.unshift(c), s(c), !1);
                        }),
                        l
                    );
                }
                return s(e.dataTypes[0]) || (!o["*"] && s("*"));
            }
            function Ve(t, e) {
                var n,
                    i,
                    o = x.ajaxSettings.flatOptions || {};
                for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
                return i && x.extend(!0, t, i), t;
            }
            (Be.href = Te.href),
                x.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Te.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Te.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: { "*": ze, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                        converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": x.parseXML },
                        flatOptions: { url: !0, context: !0 },
                    },
                    ajaxSetup: function (t, e) {
                        return e ? Ve(Ve(t, x.ajaxSettings), e) : Ve(x.ajaxSettings, t);
                    },
                    ajaxPrefilter: Ue(We),
                    ajaxTransport: Ue(Fe),
                    ajax: function (t, e) {
                        "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
                        var i,
                            o,
                            r,
                            a,
                            l,
                            c,
                            u,
                            h,
                            d,
                            f,
                            p = x.ajaxSetup({}, e),
                            g = p.context || p,
                            m = p.context && (g.nodeType || g.jquery) ? x(g) : x.event,
                            v = x.Deferred(),
                            y = x.Callbacks("once memory"),
                            b = p.statusCode || {},
                            _ = {},
                            w = {},
                            E = "canceled",
                            C = {
                                readyState: 0,
                                getResponseHeader: function (t) {
                                    var e;
                                    if (u) {
                                        if (!a) for (a = {}; (e = He.exec(r)); ) a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                        e = a[t.toLowerCase() + " "];
                                    }
                                    return null == e ? null : e.join(", ");
                                },
                                getAllResponseHeaders: function () {
                                    return u ? r : null;
                                },
                                setRequestHeader: function (t, e) {
                                    return null == u && ((t = w[t.toLowerCase()] = w[t.toLowerCase()] || t), (_[t] = e)), this;
                                },
                                overrideMimeType: function (t) {
                                    return null == u && (p.mimeType = t), this;
                                },
                                statusCode: function (t) {
                                    var e;
                                    if (t)
                                        if (u) C.always(t[C.status]);
                                        else for (e in t) b[e] = [b[e], t[e]];
                                    return this;
                                },
                                abort: function (t) {
                                    var e = t || E;
                                    return i && i.abort(e), S(0, e), this;
                                },
                            };
                        if (
                            (v.promise(C),
                            (p.url = ((t || p.url || Te.href) + "").replace(Re, Te.protocol + "//")),
                            (p.type = e.method || e.type || p.method || p.type),
                            (p.dataTypes = (p.dataType || "*").toLowerCase().match(q) || [""]),
                            null == p.crossDomain)
                        ) {
                            c = s.createElement("a");
                            try {
                                (c.href = p.url), (c.href = c.href), (p.crossDomain = Be.protocol + "//" + Be.host != c.protocol + "//" + c.host);
                            } catch (t) {
                                p.crossDomain = !0;
                            }
                        }
                        if ((p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), $e(We, p, e, C), u)) return C;
                        for (d in ((h = x.event && p.global) && 0 == x.active++ && x.event.trigger("ajaxStart"),
                        (p.type = p.type.toUpperCase()),
                        (p.hasContent = !qe.test(p.type)),
                        (o = p.url.replace(je, "")),
                        p.hasContent
                            ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Pe, "+"))
                            : ((f = p.url.slice(o.length)),
                              p.data && (p.processData || "string" == typeof p.data) && ((o += (Ae.test(o) ? "&" : "?") + p.data), delete p.data),
                              !1 === p.cache && ((o = o.replace(Me, "$1")), (f = (Ae.test(o) ? "&" : "?") + "_=" + De++ + f)),
                              (p.url = o + f)),
                        p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])),
                        ((p.data && p.hasContent && !1 !== p.contentType) || e.contentType) && C.setRequestHeader("Content-Type", p.contentType),
                        C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + ze + "; q=0.01" : "") : p.accepts["*"]),
                        p.headers))
                            C.setRequestHeader(d, p.headers[d]);
                        if (p.beforeSend && (!1 === p.beforeSend.call(g, C, p) || u)) return C.abort();
                        if (((E = "abort"), y.add(p.complete), C.done(p.success), C.fail(p.error), (i = $e(Fe, p, e, C)))) {
                            if (((C.readyState = 1), h && m.trigger("ajaxSend", [C, p]), u)) return C;
                            p.async &&
                                p.timeout > 0 &&
                                (l = n.setTimeout(function () {
                                    C.abort("timeout");
                                }, p.timeout));
                            try {
                                (u = !1), i.send(_, S);
                            } catch (t) {
                                if (u) throw t;
                                S(-1, t);
                            }
                        } else S(-1, "No Transport");
                        function S(t, e, s, a) {
                            var c,
                                d,
                                f,
                                _,
                                w,
                                E = e;
                            u ||
                                ((u = !0),
                                l && n.clearTimeout(l),
                                (i = void 0),
                                (r = a || ""),
                                (C.readyState = t > 0 ? 4 : 0),
                                (c = (t >= 200 && t < 300) || 304 === t),
                                s &&
                                    (_ = (function (t, e, n) {
                                        for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                                        if (i)
                                            for (o in a)
                                                if (a[o] && a[o].test(i)) {
                                                    l.unshift(o);
                                                    break;
                                                }
                                        if (l[0] in n) r = l[0];
                                        else {
                                            for (o in n) {
                                                if (!l[0] || t.converters[o + " " + l[0]]) {
                                                    r = o;
                                                    break;
                                                }
                                                s || (s = o);
                                            }
                                            r = r || s;
                                        }
                                        if (r) return r !== l[0] && l.unshift(r), n[r];
                                    })(p, C, s)),
                                (_ = (function (t, e, n, i) {
                                    var o,
                                        r,
                                        s,
                                        a,
                                        l,
                                        c = {},
                                        u = t.dataTypes.slice();
                                    if (u[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                                    for (r = u.shift(); r; )
                                        if ((t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), (l = r), (r = u.shift())))
                                            if ("*" === r) r = l;
                                            else if ("*" !== l && l !== r) {
                                                if (!(s = c[l + " " + r] || c["* " + r]))
                                                    for (o in c)
                                                        if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                            !0 === s ? (s = c[o]) : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                                                            break;
                                                        }
                                                if (!0 !== s)
                                                    if (s && t.throws) e = s(e);
                                                    else
                                                        try {
                                                            e = s(e);
                                                        } catch (t) {
                                                            return { state: "parsererror", error: s ? t : "No conversion from " + l + " to " + r };
                                                        }
                                            }
                                    return { state: "success", data: e };
                                })(p, _, C, c)),
                                c
                                    ? (p.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (x.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (x.etag[o] = w)),
                                      204 === t || "HEAD" === p.type ? (E = "nocontent") : 304 === t ? (E = "notmodified") : ((E = _.state), (d = _.data), (c = !(f = _.error))))
                                    : ((f = E), (!t && E) || ((E = "error"), t < 0 && (t = 0))),
                                (C.status = t),
                                (C.statusText = (e || E) + ""),
                                c ? v.resolveWith(g, [d, E, C]) : v.rejectWith(g, [C, E, f]),
                                C.statusCode(b),
                                (b = void 0),
                                h && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? d : f]),
                                y.fireWith(g, [C, E]),
                                h && (m.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")));
                        }
                        return C;
                    },
                    getJSON: function (t, e, n) {
                        return x.get(t, e, n, "json");
                    },
                    getScript: function (t, e) {
                        return x.get(t, void 0, e, "script");
                    },
                }),
                x.each(["get", "post"], function (t, e) {
                    x[e] = function (t, n, i, o) {
                        return y(n) && ((o = o || i), (i = n), (n = void 0)), x.ajax(x.extend({ url: t, type: e, dataType: o, data: n, success: i }, x.isPlainObject(t) && t));
                    };
                }),
                (x._evalUrl = function (t, e) {
                    return x.ajax({
                        url: t,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: { "text script": function () {} },
                        dataFilter: function (t) {
                            x.globalEval(t, e);
                        },
                    });
                }),
                x.fn.extend({
                    wrapAll: function (t) {
                        var e;
                        return (
                            this[0] &&
                                (y(t) && (t = t.call(this[0])),
                                (e = x(t, this[0].ownerDocument).eq(0).clone(!0)),
                                this[0].parentNode && e.insertBefore(this[0]),
                                e
                                    .map(function () {
                                        for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                                        return t;
                                    })
                                    .append(this)),
                            this
                        );
                    },
                    wrapInner: function (t) {
                        return y(t)
                            ? this.each(function (e) {
                                  x(this).wrapInner(t.call(this, e));
                              })
                            : this.each(function () {
                                  var e = x(this),
                                      n = e.contents();
                                  n.length ? n.wrapAll(t) : e.append(t);
                              });
                    },
                    wrap: function (t) {
                        var e = y(t);
                        return this.each(function (n) {
                            x(this).wrapAll(e ? t.call(this, n) : t);
                        });
                    },
                    unwrap: function (t) {
                        return (
                            this.parent(t)
                                .not("body")
                                .each(function () {
                                    x(this).replaceWith(this.childNodes);
                                }),
                            this
                        );
                    },
                }),
                (x.expr.pseudos.hidden = function (t) {
                    return !x.expr.pseudos.visible(t);
                }),
                (x.expr.pseudos.visible = function (t) {
                    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
                }),
                (x.ajaxSettings.xhr = function () {
                    try {
                        return new n.XMLHttpRequest();
                    } catch (t) {}
                });
            var Qe = { 0: 200, 1223: 204 },
                Xe = x.ajaxSettings.xhr();
            (v.cors = !!Xe && "withCredentials" in Xe),
                (v.ajax = Xe = !!Xe),
                x.ajaxTransport(function (t) {
                    var e, i;
                    if (v.cors || (Xe && !t.crossDomain))
                        return {
                            send: function (o, r) {
                                var s,
                                    a = t.xhr();
                                if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                                for (s in (t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o)) a.setRequestHeader(s, o[s]);
                                (e = function (t) {
                                    return function () {
                                        e &&
                                            ((e = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                                            "abort" === t
                                                ? a.abort()
                                                : "error" === t
                                                ? "number" != typeof a.status
                                                    ? r(0, "error")
                                                    : r(a.status, a.statusText)
                                                : r(
                                                      Qe[a.status] || a.status,
                                                      a.statusText,
                                                      "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText },
                                                      a.getAllResponseHeaders()
                                                  ));
                                    };
                                }),
                                    (a.onload = e()),
                                    (i = a.onerror = a.ontimeout = e("error")),
                                    void 0 !== a.onabort
                                        ? (a.onabort = i)
                                        : (a.onreadystatechange = function () {
                                              4 === a.readyState &&
                                                  n.setTimeout(function () {
                                                      e && i();
                                                  });
                                          }),
                                    (e = e("abort"));
                                try {
                                    a.send((t.hasContent && t.data) || null);
                                } catch (t) {
                                    if (e) throw t;
                                }
                            },
                            abort: function () {
                                e && e();
                            },
                        };
                }),
                x.ajaxPrefilter(function (t) {
                    t.crossDomain && (t.contents.script = !1);
                }),
                x.ajaxSetup({
                    accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                    contents: { script: /\b(?:java|ecma)script\b/ },
                    converters: {
                        "text script": function (t) {
                            return x.globalEval(t), t;
                        },
                    },
                }),
                x.ajaxPrefilter("script", function (t) {
                    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
                }),
                x.ajaxTransport("script", function (t) {
                    var e, n;
                    if (t.crossDomain || t.scriptAttrs)
                        return {
                            send: function (i, o) {
                                (e = x("<script>")
                                    .attr(t.scriptAttrs || {})
                                    .prop({ charset: t.scriptCharset, src: t.url })
                                    .on(
                                        "load error",
                                        (n = function (t) {
                                            e.remove(), (n = null), t && o("error" === t.type ? 404 : 200, t.type);
                                        })
                                    )),
                                    s.head.appendChild(e[0]);
                            },
                            abort: function () {
                                n && n();
                            },
                        };
                });
            var Ke,
                Ye = [],
                Ge = /(=)\?(?=&|$)|\?\?/;
            x.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var t = Ye.pop() || x.expando + "_" + De++;
                    return (this[t] = !0), t;
                },
            }),
                x.ajaxPrefilter("json jsonp", function (t, e, i) {
                    var o,
                        r,
                        s,
                        a = !1 !== t.jsonp && (Ge.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ge.test(t.data) && "data");
                    if (a || "jsonp" === t.dataTypes[0])
                        return (
                            (o = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                            a ? (t[a] = t[a].replace(Ge, "$1" + o)) : !1 !== t.jsonp && (t.url += (Ae.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
                            (t.converters["script json"] = function () {
                                return s || x.error(o + " was not called"), s[0];
                            }),
                            (t.dataTypes[0] = "json"),
                            (r = n[o]),
                            (n[o] = function () {
                                s = arguments;
                            }),
                            i.always(function () {
                                void 0 === r ? x(n).removeProp(o) : (n[o] = r), t[o] && ((t.jsonpCallback = e.jsonpCallback), Ye.push(o)), s && y(r) && r(s[0]), (s = r = void 0);
                            }),
                            "script"
                        );
                }),
                (v.createHTMLDocument = (((Ke = s.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Ke.childNodes.length)),
                (x.parseHTML = function (t, e, n) {
                    return "string" != typeof t
                        ? []
                        : ("boolean" == typeof e && ((n = e), (e = !1)),
                          e || (v.createHTMLDocument ? (((i = (e = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href), e.head.appendChild(i)) : (e = s)),
                          (r = !n && []),
                          (o = I.exec(t)) ? [e.createElement(o[1])] : ((o = Ct([t], e, r)), r && r.length && x(r).remove(), x.merge([], o.childNodes)));
                    var i, o, r;
                }),
                (x.fn.load = function (t, e, n) {
                    var i,
                        o,
                        r,
                        s = this,
                        a = t.indexOf(" ");
                    return (
                        a > -1 && ((i = _e(t.slice(a))), (t = t.slice(0, a))),
                        y(e) ? ((n = e), (e = void 0)) : e && "object" == typeof e && (o = "POST"),
                        s.length > 0 &&
                            x
                                .ajax({ url: t, type: o || "GET", dataType: "html", data: e })
                                .done(function (t) {
                                    (r = arguments), s.html(i ? x("<div>").append(x.parseHTML(t)).find(i) : t);
                                })
                                .always(
                                    n &&
                                        function (t, e) {
                                            s.each(function () {
                                                n.apply(this, r || [t.responseText, e, t]);
                                            });
                                        }
                                ),
                        this
                    );
                }),
                x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                    x.fn[e] = function (t) {
                        return this.on(e, t);
                    };
                }),
                (x.expr.pseudos.animated = function (t) {
                    return x.grep(x.timers, function (e) {
                        return t === e.elem;
                    }).length;
                }),
                (x.offset = {
                    setOffset: function (t, e, n) {
                        var i,
                            o,
                            r,
                            s,
                            a,
                            l,
                            c = x.css(t, "position"),
                            u = x(t),
                            h = {};
                        "static" === c && (t.style.position = "relative"),
                            (a = u.offset()),
                            (r = x.css(t, "top")),
                            (l = x.css(t, "left")),
                            ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? ((s = (i = u.position()).top), (o = i.left)) : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
                            y(e) && (e = e.call(t, n, x.extend({}, a))),
                            null != e.top && (h.top = e.top - a.top + s),
                            null != e.left && (h.left = e.left - a.left + o),
                            "using" in e ? e.using.call(t, h) : u.css(h);
                    },
                }),
                x.fn.extend({
                    offset: function (t) {
                        if (arguments.length)
                            return void 0 === t
                                ? this
                                : this.each(function (e) {
                                      x.offset.setOffset(this, t, e);
                                  });
                        var e,
                            n,
                            i = this[0];
                        return i ? (i.getClientRects().length ? ((e = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                    },
                    position: function () {
                        if (this[0]) {
                            var t,
                                e,
                                n,
                                i = this[0],
                                o = { top: 0, left: 0 };
                            if ("fixed" === x.css(i, "position")) e = i.getBoundingClientRect();
                            else {
                                for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === x.css(t, "position"); ) t = t.parentNode;
                                t && t !== i && 1 === t.nodeType && (((o = x(t).offset()).top += x.css(t, "borderTopWidth", !0)), (o.left += x.css(t, "borderLeftWidth", !0)));
                            }
                            return { top: e.top - o.top - x.css(i, "marginTop", !0), left: e.left - o.left - x.css(i, "marginLeft", !0) };
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (var t = this.offsetParent; t && "static" === x.css(t, "position"); ) t = t.offsetParent;
                            return t || st;
                        });
                    },
                }),
                x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
                    var n = "pageYOffset" === e;
                    x.fn[t] = function (i) {
                        return $(
                            this,
                            function (t, i, o) {
                                var r;
                                if ((b(t) ? (r = t) : 9 === t.nodeType && (r = t.defaultView), void 0 === o)) return r ? r[e] : t[i];
                                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : (t[i] = o);
                            },
                            t,
                            i,
                            arguments.length
                        );
                    };
                }),
                x.each(["top", "left"], function (t, e) {
                    x.cssHooks[e] = Xt(v.pixelPosition, function (t, n) {
                        if (n) return (n = Qt(t, e)), Ut.test(n) ? x(t).position()[e] + "px" : n;
                    });
                }),
                x.each({ Height: "height", Width: "width" }, function (t, e) {
                    x.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (n, i) {
                        x.fn[i] = function (o, r) {
                            var s = arguments.length && (n || "boolean" != typeof o),
                                a = n || (!0 === o || !0 === r ? "margin" : "border");
                            return $(
                                this,
                                function (e, n, o) {
                                    var r;
                                    return b(e)
                                        ? 0 === i.indexOf("outer")
                                            ? e["inner" + t]
                                            : e.document.documentElement["client" + t]
                                        : 9 === e.nodeType
                                        ? ((r = e.documentElement), Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t]))
                                        : void 0 === o
                                        ? x.css(e, n, a)
                                        : x.style(e, n, o, a);
                                },
                                e,
                                s ? o : void 0,
                                s
                            );
                        };
                    });
                }),
                x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
                    x.fn[e] = function (t, n) {
                        return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
                    };
                }),
                x.fn.extend({
                    hover: function (t, e) {
                        return this.mouseenter(t).mouseleave(e || t);
                    },
                }),
                x.fn.extend({
                    bind: function (t, e, n) {
                        return this.on(t, null, e, n);
                    },
                    unbind: function (t, e) {
                        return this.off(t, null, e);
                    },
                    delegate: function (t, e, n, i) {
                        return this.on(e, t, n, i);
                    },
                    undelegate: function (t, e, n) {
                        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
                    },
                }),
                (x.proxy = function (t, e) {
                    var n, i, o;
                    if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), y(t)))
                        return (
                            (i = l.call(arguments, 2)),
                            ((o = function () {
                                return t.apply(e || this, i.concat(l.call(arguments)));
                            }).guid = t.guid = t.guid || x.guid++),
                            o
                        );
                }),
                (x.holdReady = function (t) {
                    t ? x.readyWait++ : x.ready(!0);
                }),
                (x.isArray = Array.isArray),
                (x.parseJSON = JSON.parse),
                (x.nodeName = N),
                (x.isFunction = y),
                (x.isWindow = b),
                (x.camelCase = K),
                (x.type = E),
                (x.now = Date.now),
                (x.isNumeric = function (t) {
                    var e = x.type(t);
                    return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
                }),
                void 0 ===
                    (i = function () {
                        return x;
                    }.apply(e, [])) || (t.exports = i);
            var Je = n.jQuery,
                Ze = n.$;
            return (
                (x.noConflict = function (t) {
                    return n.$ === x && (n.$ = Ze), t && n.jQuery === x && (n.jQuery = Je), x;
                }),
                o || (n.jQuery = n.$ = x),
                x
            );
        });
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            function (t) {
                /**!
                 * @fileOverview Kickass library to create and place poppers near their reference elements.
                 * @version 1.16.1
                 * @license
                 * Copyright (c) 2016 Federico Zivolo and contributors
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in all
                 * copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                 * SOFTWARE.
                 */
                var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
                    i = (function () {
                        for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1) if (n && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
                        return 0;
                    })(),
                    o =
                        n && window.Promise
                            ? function (t) {
                                  var e = !1;
                                  return function () {
                                      e ||
                                          ((e = !0),
                                          window.Promise.resolve().then(function () {
                                              (e = !1), t();
                                          }));
                                  };
                              }
                            : function (t) {
                                  var e = !1;
                                  return function () {
                                      e ||
                                          ((e = !0),
                                          setTimeout(function () {
                                              (e = !1), t();
                                          }, i));
                                  };
                              };
                function r(t) {
                    return t && "[object Function]" === {}.toString.call(t);
                }
                function s(t, e) {
                    if (1 !== t.nodeType) return [];
                    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
                    return e ? n[e] : n;
                }
                function a(t) {
                    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
                }
                function l(t) {
                    if (!t) return document.body;
                    switch (t.nodeName) {
                        case "HTML":
                        case "BODY":
                            return t.ownerDocument.body;
                        case "#document":
                            return t.body;
                    }
                    var e = s(t),
                        n = e.overflow,
                        i = e.overflowX,
                        o = e.overflowY;
                    return /(auto|scroll|overlay)/.test(n + o + i) ? t : l(a(t));
                }
                function c(t) {
                    return t && t.referenceNode ? t.referenceNode : t;
                }
                var u = n && !(!window.MSInputMethodContext || !document.documentMode),
                    h = n && /MSIE 10/.test(navigator.userAgent);
                function d(t) {
                    return 11 === t ? u : 10 === t ? h : u || h;
                }
                function f(t) {
                    if (!t) return document.documentElement;
                    for (var e = d(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling; ) n = (t = t.nextElementSibling).offsetParent;
                    var i = n && n.nodeName;
                    return i && "BODY" !== i && "HTML" !== i ? (-1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? f(n) : n) : t ? t.ownerDocument.documentElement : document.documentElement;
                }
                function p(t) {
                    return null !== t.parentNode ? p(t.parentNode) : t;
                }
                function g(t, e) {
                    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
                    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
                        i = n ? t : e,
                        o = n ? e : t,
                        r = document.createRange();
                    r.setStart(i, 0), r.setEnd(o, 0);
                    var s,
                        a,
                        l = r.commonAncestorContainer;
                    if ((t !== l && e !== l) || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || ("HTML" !== a && f(s.firstElementChild) !== s) ? f(l) : l;
                    var c = p(t);
                    return c.host ? g(c.host, e) : g(t, p(e).host);
                }
                function m(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        n = "top" === e ? "scrollTop" : "scrollLeft",
                        i = t.nodeName;
                    if ("BODY" === i || "HTML" === i) {
                        var o = t.ownerDocument.documentElement,
                            r = t.ownerDocument.scrollingElement || o;
                        return r[n];
                    }
                    return t[n];
                }
                function v(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = m(e, "top"),
                        o = m(e, "left"),
                        r = n ? -1 : 1;
                    return (t.top += i * r), (t.bottom += i * r), (t.left += o * r), (t.right += o * r), t;
                }
                function y(t, e) {
                    var n = "x" === e ? "Left" : "Top",
                        i = "Left" === n ? "Right" : "Bottom";
                    return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + i + "Width"]);
                }
                function b(t, e, n, i) {
                    return Math.max(
                        e["offset" + t],
                        e["scroll" + t],
                        n["client" + t],
                        n["offset" + t],
                        n["scroll" + t],
                        d(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0
                    );
                }
                function _(t) {
                    var e = t.body,
                        n = t.documentElement,
                        i = d(10) && getComputedStyle(n);
                    return { height: b("Height", e, n, i), width: b("Width", e, n, i) };
                }
                var w = function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    },
                    E = (function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                            }
                        }
                        return function (e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e;
                        };
                    })(),
                    x = function (t, e, n) {
                        return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
                    },
                    C =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                            }
                            return t;
                        };
                function S(t) {
                    return C({}, t, { right: t.left + t.width, bottom: t.top + t.height });
                }
                function T(t) {
                    var e = {};
                    try {
                        if (d(10)) {
                            e = t.getBoundingClientRect();
                            var n = m(t, "top"),
                                i = m(t, "left");
                            (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
                        } else e = t.getBoundingClientRect();
                    } catch (t) {}
                    var o = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
                        r = "HTML" === t.nodeName ? _(t.ownerDocument) : {},
                        a = r.width || t.clientWidth || o.width,
                        l = r.height || t.clientHeight || o.height,
                        c = t.offsetWidth - a,
                        u = t.offsetHeight - l;
                    if (c || u) {
                        var h = s(t);
                        (c -= y(h, "x")), (u -= y(h, "y")), (o.width -= c), (o.height -= u);
                    }
                    return S(o);
                }
                function D(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = d(10),
                        o = "HTML" === e.nodeName,
                        r = T(t),
                        a = T(e),
                        c = l(t),
                        u = s(e),
                        h = parseFloat(u.borderTopWidth),
                        f = parseFloat(u.borderLeftWidth);
                    n && o && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
                    var p = S({ top: r.top - a.top - h, left: r.left - a.left - f, width: r.width, height: r.height });
                    if (((p.marginTop = 0), (p.marginLeft = 0), !i && o)) {
                        var g = parseFloat(u.marginTop),
                            m = parseFloat(u.marginLeft);
                        (p.top -= h - g), (p.bottom -= h - g), (p.left -= f - m), (p.right -= f - m), (p.marginTop = g), (p.marginLeft = m);
                    }
                    return (i && !n ? e.contains(c) : e === c && "BODY" !== c.nodeName) && (p = v(p, e)), p;
                }
                function A(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = t.ownerDocument.documentElement,
                        i = D(t, n),
                        o = Math.max(n.clientWidth, window.innerWidth || 0),
                        r = Math.max(n.clientHeight, window.innerHeight || 0),
                        s = e ? 0 : m(n),
                        a = e ? 0 : m(n, "left"),
                        l = { top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: o, height: r };
                    return S(l);
                }
                function k(t) {
                    var e = t.nodeName;
                    if ("BODY" === e || "HTML" === e) return !1;
                    if ("fixed" === s(t, "position")) return !0;
                    var n = a(t);
                    return !!n && k(n);
                }
                function N(t) {
                    if (!t || !t.parentElement || d()) return document.documentElement;
                    for (var e = t.parentElement; e && "none" === s(e, "transform"); ) e = e.parentElement;
                    return e || document.documentElement;
                }
                function I(t, e, n, i) {
                    var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        r = { top: 0, left: 0 },
                        s = o ? N(t) : g(t, c(e));
                    if ("viewport" === i) r = A(s, o);
                    else {
                        var u = void 0;
                        "scrollParent" === i ? "BODY" === (u = l(a(e))).nodeName && (u = t.ownerDocument.documentElement) : (u = "window" === i ? t.ownerDocument.documentElement : i);
                        var h = D(u, s, o);
                        if ("HTML" !== u.nodeName || k(s)) r = h;
                        else {
                            var d = _(t.ownerDocument),
                                f = d.height,
                                p = d.width;
                            (r.top += h.top - h.marginTop), (r.bottom = f + h.top), (r.left += h.left - h.marginLeft), (r.right = p + h.left);
                        }
                    }
                    var m = "number" == typeof (n = n || 0);
                    return (r.left += m ? n : n.left || 0), (r.top += m ? n : n.top || 0), (r.right -= m ? n : n.right || 0), (r.bottom -= m ? n : n.bottom || 0), r;
                }
                function L(t) {
                    return t.width * t.height;
                }
                function O(t, e, n, i, o) {
                    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                    if (-1 === t.indexOf("auto")) return t;
                    var s = I(n, i, r, o),
                        a = {
                            top: { width: s.width, height: e.top - s.top },
                            right: { width: s.right - e.right, height: s.height },
                            bottom: { width: s.width, height: s.bottom - e.bottom },
                            left: { width: e.left - s.left, height: s.height },
                        },
                        l = Object.keys(a)
                            .map(function (t) {
                                return C({ key: t }, a[t], { area: L(a[t]) });
                            })
                            .sort(function (t, e) {
                                return e.area - t.area;
                            }),
                        c = l.filter(function (t) {
                            var e = t.width,
                                i = t.height;
                            return e >= n.clientWidth && i >= n.clientHeight;
                        }),
                        u = c.length > 0 ? c[0].key : l[0].key,
                        h = t.split("-")[1];
                    return u + (h ? "-" + h : "");
                }
                function P(t, e, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        o = i ? N(e) : g(e, c(n));
                    return D(n, o, i);
                }
                function j(t) {
                    var e = t.ownerDocument.defaultView.getComputedStyle(t),
                        n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
                        i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
                    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
                }
                function M(t) {
                    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
                    return t.replace(/left|right|bottom|top/g, function (t) {
                        return e[t];
                    });
                }
                function H(t, e, n) {
                    n = n.split("-")[0];
                    var i = j(t),
                        o = { width: i.width, height: i.height },
                        r = -1 !== ["right", "left"].indexOf(n),
                        s = r ? "top" : "left",
                        a = r ? "left" : "top",
                        l = r ? "height" : "width",
                        c = r ? "width" : "height";
                    return (o[s] = e[s] + e[l] / 2 - i[l] / 2), (o[a] = n === a ? e[a] - i[c] : e[M(a)]), o;
                }
                function q(t, e) {
                    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
                }
                function R(t, e, n) {
                    return (
                        (void 0 === n
                            ? t
                            : t.slice(
                                  0,
                                  (function (t, e, n) {
                                      if (Array.prototype.findIndex)
                                          return t.findIndex(function (t) {
                                              return t[e] === n;
                                          });
                                      var i = q(t, function (t) {
                                          return t[e] === n;
                                      });
                                      return t.indexOf(i);
                                  })(t, "name", n)
                              )
                        ).forEach(function (t) {
                            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                            var n = t.function || t.fn;
                            t.enabled && r(n) && ((e.offsets.popper = S(e.offsets.popper)), (e.offsets.reference = S(e.offsets.reference)), (e = n(e, t)));
                        }),
                        e
                    );
                }
                function W() {
                    if (!this.state.isDestroyed) {
                        var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                        (t.offsets.reference = P(this.state, this.popper, this.reference, this.options.positionFixed)),
                            (t.placement = O(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
                            (t.originalPlacement = t.placement),
                            (t.positionFixed = this.options.positionFixed),
                            (t.offsets.popper = H(this.popper, t.offsets.reference, t.placement)),
                            (t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
                            (t = R(this.modifiers, t)),
                            this.state.isCreated ? this.options.onUpdate(t) : ((this.state.isCreated = !0), this.options.onCreate(t));
                    }
                }
                function F(t, e) {
                    return t.some(function (t) {
                        var n = t.name;
                        return t.enabled && n === e;
                    });
                }
                function z(t) {
                    for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
                        var o = e[i],
                            r = o ? "" + o + n : t;
                        if (void 0 !== document.body.style[r]) return r;
                    }
                    return null;
                }
                function B() {
                    return (
                        (this.state.isDestroyed = !0),
                        F(this.modifiers, "applyStyle") &&
                            (this.popper.removeAttribute("x-placement"),
                            (this.popper.style.position = ""),
                            (this.popper.style.top = ""),
                            (this.popper.style.left = ""),
                            (this.popper.style.right = ""),
                            (this.popper.style.bottom = ""),
                            (this.popper.style.willChange = ""),
                            (this.popper.style[z("transform")] = "")),
                        this.disableEventListeners(),
                        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                        this
                    );
                }
                function U(t) {
                    var e = t.ownerDocument;
                    return e ? e.defaultView : window;
                }
                function V() {
                    this.state.eventsEnabled ||
                        (this.state = (function (t, e, n, i) {
                            (n.updateBound = i), U(t).addEventListener("resize", n.updateBound, { passive: !0 });
                            var o = l(t);
                            return (
                                (function t(e, n, i, o) {
                                    var r = "BODY" === e.nodeName,
                                        s = r ? e.ownerDocument.defaultView : e;
                                    s.addEventListener(n, i, { passive: !0 }), r || t(l(s.parentNode), n, i, o), o.push(s);
                                })(o, "scroll", n.updateBound, n.scrollParents),
                                (n.scrollElement = o),
                                (n.eventsEnabled = !0),
                                n
                            );
                        })(this.reference, this.options, this.state, this.scheduleUpdate));
                }
                function Q() {
                    var t, e;
                    this.state.eventsEnabled &&
                        (cancelAnimationFrame(this.scheduleUpdate),
                        (this.state =
                            ((t = this.reference),
                            (e = this.state),
                            U(t).removeEventListener("resize", e.updateBound),
                            e.scrollParents.forEach(function (t) {
                                t.removeEventListener("scroll", e.updateBound);
                            }),
                            (e.updateBound = null),
                            (e.scrollParents = []),
                            (e.scrollElement = null),
                            (e.eventsEnabled = !1),
                            e)));
                }
                function X(t) {
                    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
                }
                function K(t, e) {
                    Object.keys(e).forEach(function (n) {
                        var i = "";
                        -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && X(e[n]) && (i = "px"), (t.style[n] = e[n] + i);
                    });
                }
                var Y = n && /Firefox/i.test(navigator.userAgent);
                function G(t, e, n) {
                    var i = q(t, function (t) {
                            return t.name === e;
                        }),
                        o =
                            !!i &&
                            t.some(function (t) {
                                return t.name === n && t.enabled && t.order < i.order;
                            });
                    if (!o) {
                        var r = "`" + e + "`",
                            s = "`" + n + "`";
                        console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
                    }
                    return o;
                }
                var J = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                    Z = J.slice(3);
                function tt(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Z.indexOf(t),
                        i = Z.slice(n + 1).concat(Z.slice(0, n));
                    return e ? i.reverse() : i;
                }
                var rt = {
                        placement: "bottom",
                        positionFixed: !1,
                        eventsEnabled: !0,
                        removeOnDestroy: !1,
                        onCreate: function () {},
                        onUpdate: function () {},
                        modifiers: {
                            shift: {
                                order: 100,
                                enabled: !0,
                                fn: function (t) {
                                    var e = t.placement,
                                        n = e.split("-")[0],
                                        i = e.split("-")[1];
                                    if (i) {
                                        var o = t.offsets,
                                            r = o.reference,
                                            s = o.popper,
                                            a = -1 !== ["bottom", "top"].indexOf(n),
                                            l = a ? "left" : "top",
                                            c = a ? "width" : "height",
                                            u = { start: x({}, l, r[l]), end: x({}, l, r[l] + r[c] - s[c]) };
                                        t.offsets.popper = C({}, s, u[i]);
                                    }
                                    return t;
                                },
                            },
                            offset: {
                                order: 200,
                                enabled: !0,
                                fn: function (t, e) {
                                    var l,
                                        n = e.offset,
                                        i = t.placement,
                                        o = t.offsets,
                                        r = o.popper,
                                        s = o.reference,
                                        a = i.split("-")[0];
                                    return (
                                        (l = X(+n)
                                            ? [+n, 0]
                                            : (function (t, e, n, i) {
                                                  var o = [0, 0],
                                                      r = -1 !== ["right", "left"].indexOf(i),
                                                      s = t.split(/(\+|\-)/).map(function (t) {
                                                          return t.trim();
                                                      }),
                                                      a = s.indexOf(
                                                          q(s, function (t) {
                                                              return -1 !== t.search(/,|\s/);
                                                          })
                                                      );
                                                  s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                                                  var l = /\s*,\s*|\s+/,
                                                      c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                                                  return (
                                                      (c = c.map(function (t, i) {
                                                          var o = (1 === i ? !r : r) ? "height" : "width",
                                                              s = !1;
                                                          return t
                                                              .reduce(function (t, e) {
                                                                  return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? ((t[t.length - 1] = e), (s = !0), t) : s ? ((t[t.length - 1] += e), (s = !1), t) : t.concat(e);
                                                              }, [])
                                                              .map(function (t) {
                                                                  return (function (t, e, n, i) {
                                                                      var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                                                          r = +o[1],
                                                                          s = o[2];
                                                                      if (!r) return t;
                                                                      if (0 === s.indexOf("%")) {
                                                                          return (S("%p" === s ? n : i)[e] / 100) * r;
                                                                      }
                                                                      return "vh" === s || "vw" === s
                                                                          ? (("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) /
                                                                                100) *
                                                                                r
                                                                          : r;
                                                                  })(t, o, e, n);
                                                              });
                                                      })).forEach(function (t, e) {
                                                          t.forEach(function (n, i) {
                                                              X(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
                                                          });
                                                      }),
                                                      o
                                                  );
                                              })(n, r, s, a)),
                                        "left" === a
                                            ? ((r.top += l[0]), (r.left -= l[1]))
                                            : "right" === a
                                            ? ((r.top += l[0]), (r.left += l[1]))
                                            : "top" === a
                                            ? ((r.left += l[0]), (r.top -= l[1]))
                                            : "bottom" === a && ((r.left += l[0]), (r.top += l[1])),
                                        (t.popper = r),
                                        t
                                    );
                                },
                                offset: 0,
                            },
                            preventOverflow: {
                                order: 300,
                                enabled: !0,
                                fn: function (t, e) {
                                    var n = e.boundariesElement || f(t.instance.popper);
                                    t.instance.reference === n && (n = f(n));
                                    var i = z("transform"),
                                        o = t.instance.popper.style,
                                        r = o.top,
                                        s = o.left,
                                        a = o[i];
                                    (o.top = ""), (o.left = ""), (o[i] = "");
                                    var l = I(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                                    (o.top = r), (o.left = s), (o[i] = a), (e.boundaries = l);
                                    var c = e.priority,
                                        u = t.offsets.popper,
                                        h = {
                                            primary: function (t) {
                                                var n = u[t];
                                                return u[t] < l[t] && !e.escapeWithReference && (n = Math.max(u[t], l[t])), x({}, t, n);
                                            },
                                            secondary: function (t) {
                                                var n = "right" === t ? "left" : "top",
                                                    i = u[n];
                                                return u[t] > l[t] && !e.escapeWithReference && (i = Math.min(u[n], l[t] - ("right" === t ? u.width : u.height))), x({}, n, i);
                                            },
                                        };
                                    return (
                                        c.forEach(function (t) {
                                            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                                            u = C({}, u, h[e](t));
                                        }),
                                        (t.offsets.popper = u),
                                        t
                                    );
                                },
                                priority: ["left", "right", "top", "bottom"],
                                padding: 5,
                                boundariesElement: "scrollParent",
                            },
                            keepTogether: {
                                order: 400,
                                enabled: !0,
                                fn: function (t) {
                                    var e = t.offsets,
                                        n = e.popper,
                                        i = e.reference,
                                        o = t.placement.split("-")[0],
                                        r = Math.floor,
                                        s = -1 !== ["top", "bottom"].indexOf(o),
                                        a = s ? "right" : "bottom",
                                        l = s ? "left" : "top",
                                        c = s ? "width" : "height";
                                    return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])), t;
                                },
                            },
                            arrow: {
                                order: 500,
                                enabled: !0,
                                fn: function (t, e) {
                                    var n;
                                    if (!G(t.instance.modifiers, "arrow", "keepTogether")) return t;
                                    var i = e.element;
                                    if ("string" == typeof i) {
                                        if (!(i = t.instance.popper.querySelector(i))) return t;
                                    } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                                    var o = t.placement.split("-")[0],
                                        r = t.offsets,
                                        a = r.popper,
                                        l = r.reference,
                                        c = -1 !== ["left", "right"].indexOf(o),
                                        u = c ? "height" : "width",
                                        h = c ? "Top" : "Left",
                                        d = h.toLowerCase(),
                                        f = c ? "left" : "top",
                                        p = c ? "bottom" : "right",
                                        g = j(i)[u];
                                    l[p] - g < a[d] && (t.offsets.popper[d] -= a[d] - (l[p] - g)), l[d] + g > a[p] && (t.offsets.popper[d] += l[d] + g - a[p]), (t.offsets.popper = S(t.offsets.popper));
                                    var m = l[d] + l[u] / 2 - g / 2,
                                        v = s(t.instance.popper),
                                        y = parseFloat(v["margin" + h]),
                                        b = parseFloat(v["border" + h + "Width"]),
                                        _ = m - t.offsets.popper[d] - y - b;
                                    return (_ = Math.max(Math.min(a[u] - g, _), 0)), (t.arrowElement = i), (t.offsets.arrow = (x((n = {}), d, Math.round(_)), x(n, f, ""), n)), t;
                                },
                                element: "[x-arrow]",
                            },
                            flip: {
                                order: 600,
                                enabled: !0,
                                fn: function (t, e) {
                                    if (F(t.instance.modifiers, "inner")) return t;
                                    if (t.flipped && t.placement === t.originalPlacement) return t;
                                    var n = I(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                                        i = t.placement.split("-")[0],
                                        o = M(i),
                                        r = t.placement.split("-")[1] || "",
                                        s = [];
                                    switch (e.behavior) {
                                        case "flip":
                                            s = [i, o];
                                            break;
                                        case "clockwise":
                                            s = tt(i);
                                            break;
                                        case "counterclockwise":
                                            s = tt(i, !0);
                                            break;
                                        default:
                                            s = e.behavior;
                                    }
                                    return (
                                        s.forEach(function (a, l) {
                                            if (i !== a || s.length === l + 1) return t;
                                            (i = t.placement.split("-")[0]), (o = M(i));
                                            var c = t.offsets.popper,
                                                u = t.offsets.reference,
                                                h = Math.floor,
                                                d = ("left" === i && h(c.right) > h(u.left)) || ("right" === i && h(c.left) < h(u.right)) || ("top" === i && h(c.bottom) > h(u.top)) || ("bottom" === i && h(c.top) < h(u.bottom)),
                                                f = h(c.left) < h(n.left),
                                                p = h(c.right) > h(n.right),
                                                g = h(c.top) < h(n.top),
                                                m = h(c.bottom) > h(n.bottom),
                                                v = ("left" === i && f) || ("right" === i && p) || ("top" === i && g) || ("bottom" === i && m),
                                                y = -1 !== ["top", "bottom"].indexOf(i),
                                                b = !!e.flipVariations && ((y && "start" === r && f) || (y && "end" === r && p) || (!y && "start" === r && g) || (!y && "end" === r && m)),
                                                _ = !!e.flipVariationsByContent && ((y && "start" === r && p) || (y && "end" === r && f) || (!y && "start" === r && m) || (!y && "end" === r && g)),
                                                w = b || _;
                                            (d || v || w) &&
                                                ((t.flipped = !0),
                                                (d || v) && (i = s[l + 1]),
                                                w &&
                                                    (r = (function (t) {
                                                        return "end" === t ? "start" : "start" === t ? "end" : t;
                                                    })(r)),
                                                (t.placement = i + (r ? "-" + r : "")),
                                                (t.offsets.popper = C({}, t.offsets.popper, H(t.instance.popper, t.offsets.reference, t.placement))),
                                                (t = R(t.instance.modifiers, t, "flip")));
                                        }),
                                        t
                                    );
                                },
                                behavior: "flip",
                                padding: 5,
                                boundariesElement: "viewport",
                                flipVariations: !1,
                                flipVariationsByContent: !1,
                            },
                            inner: {
                                order: 700,
                                enabled: !1,
                                fn: function (t) {
                                    var e = t.placement,
                                        n = e.split("-")[0],
                                        i = t.offsets,
                                        o = i.popper,
                                        r = i.reference,
                                        s = -1 !== ["left", "right"].indexOf(n),
                                        a = -1 === ["top", "left"].indexOf(n);
                                    return (o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0)), (t.placement = M(e)), (t.offsets.popper = S(o)), t;
                                },
                            },
                            hide: {
                                order: 800,
                                enabled: !0,
                                fn: function (t) {
                                    if (!G(t.instance.modifiers, "hide", "preventOverflow")) return t;
                                    var e = t.offsets.reference,
                                        n = q(t.instance.modifiers, function (t) {
                                            return "preventOverflow" === t.name;
                                        }).boundaries;
                                    if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                                        if (!0 === t.hide) return t;
                                        (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
                                    } else {
                                        if (!1 === t.hide) return t;
                                        (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
                                    }
                                    return t;
                                },
                            },
                            computeStyle: {
                                order: 850,
                                enabled: !0,
                                fn: function (t, e) {
                                    var n = e.x,
                                        i = e.y,
                                        o = t.offsets.popper,
                                        r = q(t.instance.modifiers, function (t) {
                                            return "applyStyle" === t.name;
                                        }).gpuAcceleration;
                                    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                    var g,
                                        m,
                                        s = void 0 !== r ? r : e.gpuAcceleration,
                                        a = f(t.instance.popper),
                                        l = T(a),
                                        c = { position: o.position },
                                        u = (function (t, e) {
                                            var n = t.offsets,
                                                i = n.popper,
                                                o = n.reference,
                                                r = Math.round,
                                                s = Math.floor,
                                                a = function (t) {
                                                    return t;
                                                },
                                                l = r(o.width),
                                                c = r(i.width),
                                                u = -1 !== ["left", "right"].indexOf(t.placement),
                                                h = -1 !== t.placement.indexOf("-"),
                                                d = e ? (u || h || l % 2 == c % 2 ? r : s) : a,
                                                f = e ? r : a;
                                            return { left: d(l % 2 == 1 && c % 2 == 1 && !h && e ? i.left - 1 : i.left), top: f(i.top), bottom: f(i.bottom), right: d(i.right) };
                                        })(t, window.devicePixelRatio < 2 || !Y),
                                        h = "bottom" === n ? "top" : "bottom",
                                        d = "right" === i ? "left" : "right",
                                        p = z("transform");
                                    if (
                                        ((m = "bottom" === h ? ("HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom) : u.top),
                                        (g = "right" === d ? ("HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right) : u.left),
                                        s && p)
                                    )
                                        (c[p] = "translate3d(" + g + "px, " + m + "px, 0)"), (c[h] = 0), (c[d] = 0), (c.willChange = "transform");
                                    else {
                                        var v = "bottom" === h ? -1 : 1,
                                            y = "right" === d ? -1 : 1;
                                        (c[h] = m * v), (c[d] = g * y), (c.willChange = h + ", " + d);
                                    }
                                    var b = { "x-placement": t.placement };
                                    return (t.attributes = C({}, b, t.attributes)), (t.styles = C({}, c, t.styles)), (t.arrowStyles = C({}, t.offsets.arrow, t.arrowStyles)), t;
                                },
                                gpuAcceleration: !0,
                                x: "bottom",
                                y: "right",
                            },
                            applyStyle: {
                                order: 900,
                                enabled: !0,
                                fn: function (t) {
                                    var e, n;
                                    return (
                                        K(t.instance.popper, t.styles),
                                        (e = t.instance.popper),
                                        (n = t.attributes),
                                        Object.keys(n).forEach(function (t) {
                                            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
                                        }),
                                        t.arrowElement && Object.keys(t.arrowStyles).length && K(t.arrowElement, t.arrowStyles),
                                        t
                                    );
                                },
                                onLoad: function (t, e, n, i, o) {
                                    var r = P(o, e, t, n.positionFixed),
                                        s = O(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                    return e.setAttribute("x-placement", s), K(e, { position: n.positionFixed ? "fixed" : "absolute" }), n;
                                },
                                gpuAcceleration: void 0,
                            },
                        },
                    },
                    st = (function () {
                        function t(e, n) {
                            var i = this,
                                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            w(this, t),
                                (this.scheduleUpdate = function () {
                                    return requestAnimationFrame(i.update);
                                }),
                                (this.update = o(this.update.bind(this))),
                                (this.options = C({}, t.Defaults, s)),
                                (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                                (this.reference = e && e.jquery ? e[0] : e),
                                (this.popper = n && n.jquery ? n[0] : n),
                                (this.options.modifiers = {}),
                                Object.keys(C({}, t.Defaults.modifiers, s.modifiers)).forEach(function (e) {
                                    i.options.modifiers[e] = C({}, t.Defaults.modifiers[e] || {}, s.modifiers ? s.modifiers[e] : {});
                                }),
                                (this.modifiers = Object.keys(this.options.modifiers)
                                    .map(function (t) {
                                        return C({ name: t }, i.options.modifiers[t]);
                                    })
                                    .sort(function (t, e) {
                                        return t.order - e.order;
                                    })),
                                this.modifiers.forEach(function (t) {
                                    t.enabled && r(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
                                }),
                                this.update();
                            var a = this.options.eventsEnabled;
                            a && this.enableEventListeners(), (this.state.eventsEnabled = a);
                        }
                        return (
                            E(t, [
                                {
                                    key: "update",
                                    value: function () {
                                        return W.call(this);
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        return B.call(this);
                                    },
                                },
                                {
                                    key: "enableEventListeners",
                                    value: function () {
                                        return V.call(this);
                                    },
                                },
                                {
                                    key: "disableEventListeners",
                                    value: function () {
                                        return Q.call(this);
                                    },
                                },
                            ]),
                            t
                        );
                    })();
                (st.Utils = ("undefined" != typeof window ? window : t).PopperUtils), (st.placements = J), (st.Defaults = rt), (e.default = st);
            }.call(this, n(4));
    },
    function (t, e) {
        $(function () {
            $(".quote").length > 0 && $("#quote-inner").length > 0 && $("#quote-inner").append($(".quote"));
        });
    },
    function (t, e) {
        $(function () {
            $(".blog-single-content .corpus").length > 0 &&
                ($(".blog-single-content .corpus h2").length > 0
                    ? $(".blog-single-content .corpus h2").each(function (t) {
                          var e = $("<a/>")
                              .attr("href", "#" + $(this)[0].id)
                              .addClass("jump")
                              .html($(this).text());
                          $(".blog-single-content .sommaire").append(e);
                      })
                    : $(".blog-single-content .sommaire").css("display", "none"));
        });
    },
    function (t, e) {},
    function (t, e) {
        document.addEventListener("DOMContentLoaded", function (t) {
            if ($(".section-flow .carousel-wrapper").length > 0) {
                for (
                    var e = function () {
                            n();
                            var t = this.dataset.index;
                            (document.querySelector('.section-flow .carousel-wrapper .carousel-img-wrapper[data-index="' + t + '"]').style.display = "block"), this.classList.add("selected");
                        },
                        n = function () {
                            for (var t = 0; t < o.length; t++) (o[t].style.display = "none"), (i[t].className = i[t].className.replace(" selected", ""));
                        },
                        i = document.querySelectorAll(".section-flow .carousel-wrapper .dot-carousel"),
                        o = document.querySelectorAll(".section-flow .carousel-wrapper .carousel-img-wrapper"),
                        r = 0;
                    r < i.length;
                    r++
                )
                    i[r].addEventListener("click", e);
                document.getElementById("defaultOpen").click();
            }
        });
    },
    function (t, e) {
        $(function () {
            ($("#glitch").length > 0 || $(".navigation-system").length > 0 || $(".systems-page").length > 0) && $(".section-footer").addClass("reset-padding-top");
        });
    },
    function (t, e, n) {
        var i = n(19);
        window.onload = function () {
            if (document.getElementsByClassName("logo-carousel").length > 0) {
                var t = null,
                    e = document.querySelector(".logo-carousel .carousel");
                ((t = new i(e, { autoPlay: !1, prevNextButtons: !1, pageDots: !1, draggable: !1, wrapAround: !0, selectedAttraction: 0.015, friction: 0.25, imagesLoaded: !0 })).x = 0),
                    (function e() {
                        t.slides && ((t.x = (t.x - 1) % t.slideableWidth), (t.selectedIndex = t.dragEndRestingSelect()), t.updateSelectedSlide(), t.settle(t.x)), window.requestAnimationFrame(e);
                    })();
            }
        };
    },
    function (t, e, n) {
        var i, o, r;
        /*!
         * Flickity v2.2.1
         * Touch, responsive, flickable carousels
         *
         * Licensed GPLv3 for open source use
         * or Flickity Commercial License for commercial use
         *
         * https://flickity.metafizzy.co
         * Copyright 2015-2019 Metafizzy
         */ window,
            (o = [n(1), n(24), n(26), n(27), n(28), n(29), n(30)]),
            void 0 ===
                (r =
                    "function" ==
                    typeof (i = function (t) {
                        return t;
                    })
                        ? i.apply(e, o)
                        : i) || (t.exports = r);
    },
    function (t, e, n) {
        var i, o;
        !(function (r, s) {
            "use strict";
            void 0 ===
                (o =
                    "function" ==
                    typeof (i = function () {
                        var t = (function () {
                            var t = window.Element.prototype;
                            if (t.matches) return "matches";
                            if (t.matchesSelector) return "matchesSelector";
                            for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
                                var i = e[n] + "MatchesSelector";
                                if (t[i]) return i;
                            }
                        })();
                        return function (e, n) {
                            return e[t](n);
                        };
                    })
                        ? i.call(e, n, e, t)
                        : i) || (t.exports = o);
        })(window);
    },
    function (t, e, n) {
        var i, o;
        window,
            (i = [n(5)]),
            void 0 ===
                (o = function (t) {
                    return (function (t, e) {
                        "use strict";
                        function n(t, e) {
                            (this.element = t), (this.parent = e), this.create();
                        }
                        var i = n.prototype;
                        return (
                            (i.create = function () {
                                (this.element.style.position = "absolute"), this.element.setAttribute("aria-hidden", "true"), (this.x = 0), (this.shift = 0);
                            }),
                            (i.destroy = function () {
                                this.unselect(), (this.element.style.position = "");
                                var t = this.parent.originSide;
                                this.element.style[t] = "";
                            }),
                            (i.getSize = function () {
                                this.size = e(this.element);
                            }),
                            (i.setPosition = function (t) {
                                (this.x = t), this.updateTarget(), this.renderPosition(t);
                            }),
                            (i.updateTarget = i.setDefaultTarget = function () {
                                var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
                                this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign;
                            }),
                            (i.renderPosition = function (t) {
                                var e = this.parent.originSide;
                                this.element.style[e] = this.parent.getPositionValue(t);
                            }),
                            (i.select = function () {
                                this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden");
                            }),
                            (i.unselect = function () {
                                this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true");
                            }),
                            (i.wrapShift = function (t) {
                                (this.shift = t), this.renderPosition(this.x + this.parent.slideableWidth * t);
                            }),
                            (i.remove = function () {
                                this.element.parentNode.removeChild(this.element);
                            }),
                            n
                        );
                    })(0, t);
                }.apply(e, i)) || (t.exports = o);
    },
    function (t, e, n) {
        var i, o;
        window,
            void 0 ===
                (o =
                    "function" ==
                    typeof (i = function () {
                        "use strict";
                        function t(t) {
                            (this.parent = t), (this.isOriginLeft = "left" == t.originSide), (this.cells = []), (this.outerWidth = 0), (this.height = 0);
                        }
                        var e = t.prototype;
                        return (
                            (e.addCell = function (t) {
                                if ((this.cells.push(t), (this.outerWidth += t.size.outerWidth), (this.height = Math.max(t.size.outerHeight, this.height)), 1 == this.cells.length)) {
                                    this.x = t.x;
                                    var e = this.isOriginLeft ? "marginLeft" : "marginRight";
                                    this.firstMargin = t.size[e];
                                }
                            }),
                            (e.updateTarget = function () {
                                var t = this.isOriginLeft ? "marginRight" : "marginLeft",
                                    e = this.getLastCell(),
                                    n = e ? e.size[t] : 0,
                                    i = this.outerWidth - (this.firstMargin + n);
                                this.target = this.x + this.firstMargin + i * this.parent.cellAlign;
                            }),
                            (e.getLastCell = function () {
                                return this.cells[this.cells.length - 1];
                            }),
                            (e.select = function () {
                                this.cells.forEach(function (t) {
                                    t.select();
                                });
                            }),
                            (e.unselect = function () {
                                this.cells.forEach(function (t) {
                                    t.unselect();
                                });
                            }),
                            (e.getCellElements = function () {
                                return this.cells.map(function (t) {
                                    return t.element;
                                });
                            }),
                            t
                        );
                    })
                        ? i.call(e, n, e, t)
                        : i) || (t.exports = o);
    },
    function (t, e, n) {
        var i, o;
        window,
            (i = [n(0)]),
            void 0 ===
                (o = function (t) {
                    return (function (t, e) {
                        "use strict";
                        var n = {
                            startAnimation: function () {
                                this.isAnimating || ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
                            },
                            animate: function () {
                                this.applyDragForce(), this.applySelectedAttraction();
                                var t = this.x;
                                if ((this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating)) {
                                    var e = this;
                                    requestAnimationFrame(function () {
                                        e.animate();
                                    });
                                }
                            },
                            positionSlider: function () {
                                var t = this.x;
                                this.options.wrapAround && this.cells.length > 1 && ((t = e.modulo(t, this.slideableWidth)), (t -= this.slideableWidth), this.shiftWrapCells(t)),
                                    this.setTranslateX(t, this.isAnimating),
                                    this.dispatchScrollEvent();
                            },
                            setTranslateX: function (t, e) {
                                (t += this.cursorPosition), (t = this.options.rightToLeft ? -t : t);
                                var n = this.getPositionValue(t);
                                this.slider.style.transform = e ? "translate3d(" + n + ",0,0)" : "translateX(" + n + ")";
                            },
                            dispatchScrollEvent: function () {
                                var t = this.slides[0];
                                if (t) {
                                    var e = -this.x - t.target,
                                        n = e / this.slidesWidth;
                                    this.dispatchEvent("scroll", null, [n, e]);
                                }
                            },
                            positionSliderAtSelected: function () {
                                this.cells.length && ((this.x = -this.selectedSlide.target), (this.velocity = 0), this.positionSlider());
                            },
                            getPositionValue: function (t) {
                                return this.options.percentPosition ? 0.01 * Math.round((t / this.size.innerWidth) * 1e4) + "%" : Math.round(t) + "px";
                            },
                            settle: function (t) {
                                this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++,
                                    this.restingFrames > 2 && ((this.isAnimating = !1), delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]));
                            },
                            shiftWrapCells: function (t) {
                                var e = this.cursorPosition + t;
                                this._shiftCells(this.beforeShiftCells, e, -1);
                                var n = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
                                this._shiftCells(this.afterShiftCells, n, 1);
                            },
                            _shiftCells: function (t, e, n) {
                                for (var i = 0; i < t.length; i++) {
                                    var o = t[i],
                                        r = e > 0 ? n : 0;
                                    o.wrapShift(r), (e -= o.size.outerWidth);
                                }
                            },
                            _unshiftCells: function (t) {
                                if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0);
                            },
                            integratePhysics: function () {
                                (this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
                            },
                            applyForce: function (t) {
                                this.velocity += t;
                            },
                            getFrictionFactor: function () {
                                return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"];
                            },
                            getRestingPosition: function () {
                                return this.x + this.velocity / (1 - this.getFrictionFactor());
                            },
                            applyDragForce: function () {
                                if (this.isDraggable && this.isPointerDown) {
                                    var t = this.dragX - this.x - this.velocity;
                                    this.applyForce(t);
                                }
                            },
                            applySelectedAttraction: function () {
                                if ((!this.isDraggable || !this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                                    var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                                    this.applyForce(t);
                                }
                            },
                        };
                        return n;
                    })(0, t);
                }.apply(e, i)) || (t.exports = o);
    },
    function (t, e, n) {
        var i, o, r;
        (r = window),
            (i = [n(1), n(25), n(0)]),
            void 0 ===
                (o = function (t, e, n) {
                    return (function (t, e, n, i) {
                        "use strict";
                        i.extend(e.defaults, { draggable: ">1", dragThreshold: 3 }), e.createMethods.push("_createDrag");
                        var o = e.prototype;
                        i.extend(o, n.prototype), (o._touchActionValue = "pan-y");
                        var r = "createTouch" in document,
                            s = !1;
                        (o._createDrag = function () {
                            this.on("activate", this.onActivateDrag),
                                this.on("uiChange", this._uiChangeDrag),
                                this.on("deactivate", this.onDeactivateDrag),
                                this.on("cellChange", this.updateDraggable),
                                r && !s && (t.addEventListener("touchmove", function () {}), (s = !0));
                        }),
                            (o.onActivateDrag = function () {
                                (this.handles = [this.viewport]), this.bindHandles(), this.updateDraggable();
                            }),
                            (o.onDeactivateDrag = function () {
                                this.unbindHandles(), this.element.classList.remove("is-draggable");
                            }),
                            (o.updateDraggable = function () {
                                ">1" == this.options.draggable ? (this.isDraggable = this.slides.length > 1) : (this.isDraggable = this.options.draggable),
                                    this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable");
                            }),
                            (o.bindDrag = function () {
                                (this.options.draggable = !0), this.updateDraggable();
                            }),
                            (o.unbindDrag = function () {
                                (this.options.draggable = !1), this.updateDraggable();
                            }),
                            (o._uiChangeDrag = function () {
                                delete this.isFreeScrolling;
                            }),
                            (o.pointerDown = function (e, n) {
                                this.isDraggable
                                    ? this.okayPointerDown(e) &&
                                      (this._pointerDownPreventDefault(e),
                                      this.pointerDownFocus(e),
                                      document.activeElement != this.element && this.pointerDownBlur(),
                                      (this.dragX = this.x),
                                      this.viewport.classList.add("is-pointer-down"),
                                      (this.pointerDownScroll = l()),
                                      t.addEventListener("scroll", this),
                                      this._pointerDownDefault(e, n))
                                    : this._pointerDownDefault(e, n);
                            }),
                            (o._pointerDownDefault = function (t, e) {
                                (this.pointerDownPointer = { pageX: e.pageX, pageY: e.pageY }), this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e]);
                            });
                        var a = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };
                        function l() {
                            return { x: t.pageXOffset, y: t.pageYOffset };
                        }
                        return (
                            (o.pointerDownFocus = function (t) {
                                a[t.target.nodeName] || this.focus();
                            }),
                            (o._pointerDownPreventDefault = function (t) {
                                var e = "touchstart" == t.type,
                                    n = "touch" == t.pointerType,
                                    i = a[t.target.nodeName];
                                e || n || i || t.preventDefault();
                            }),
                            (o.hasDragStarted = function (t) {
                                return Math.abs(t.x) > this.options.dragThreshold;
                            }),
                            (o.pointerUp = function (t, e) {
                                delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e);
                            }),
                            (o.pointerDone = function () {
                                t.removeEventListener("scroll", this), delete this.pointerDownScroll;
                            }),
                            (o.dragStart = function (e, n) {
                                this.isDraggable && ((this.dragStartPosition = this.x), this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [n]));
                            }),
                            (o.pointerMove = function (t, e) {
                                var n = this._dragPointerMove(t, e);
                                this.dispatchEvent("pointerMove", t, [e, n]), this._dragMove(t, e, n);
                            }),
                            (o.dragMove = function (t, e, n) {
                                if (this.isDraggable) {
                                    t.preventDefault(), (this.previousDragX = this.dragX);
                                    var i = this.options.rightToLeft ? -1 : 1;
                                    this.options.wrapAround && (n.x = n.x % this.slideableWidth);
                                    var o = this.dragStartPosition + n.x * i;
                                    if (!this.options.wrapAround && this.slides.length) {
                                        var r = Math.max(-this.slides[0].target, this.dragStartPosition);
                                        o = o > r ? 0.5 * (o + r) : o;
                                        var s = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                                        o = o < s ? 0.5 * (o + s) : o;
                                    }
                                    (this.dragX = o), (this.dragMoveTime = new Date()), this.dispatchEvent("dragMove", t, [e, n]);
                                }
                            }),
                            (o.dragEnd = function (t, e) {
                                if (this.isDraggable) {
                                    this.options.freeScroll && (this.isFreeScrolling = !0);
                                    var n = this.dragEndRestingSelect();
                                    if (this.options.freeScroll && !this.options.wrapAround) {
                                        var i = this.getRestingPosition();
                                        this.isFreeScrolling = -i > this.slides[0].target && -i < this.getLastSlide().target;
                                    } else this.options.freeScroll || n != this.selectedIndex || (n += this.dragEndBoostSelect());
                                    delete this.previousDragX, (this.isDragSelect = this.options.wrapAround), this.select(n), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e]);
                                }
                            }),
                            (o.dragEndRestingSelect = function () {
                                var t = this.getRestingPosition(),
                                    e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
                                    n = this._getClosestResting(t, e, 1),
                                    i = this._getClosestResting(t, e, -1);
                                return n.distance < i.distance ? n.index : i.index;
                            }),
                            (o._getClosestResting = function (t, e, n) {
                                for (
                                    var i = this.selectedIndex,
                                        o = 1 / 0,
                                        r =
                                            this.options.contain && !this.options.wrapAround
                                                ? function (t, e) {
                                                      return t <= e;
                                                  }
                                                : function (t, e) {
                                                      return t < e;
                                                  };
                                    r(e, o) && ((i += n), (o = e), null !== (e = this.getSlideDistance(-t, i)));

                                )
                                    e = Math.abs(e);
                                return { distance: o, index: i - n };
                            }),
                            (o.getSlideDistance = function (t, e) {
                                var n = this.slides.length,
                                    o = this.options.wrapAround && n > 1,
                                    r = o ? i.modulo(e, n) : e,
                                    s = this.slides[r];
                                if (!s) return null;
                                var a = o ? this.slideableWidth * Math.floor(e / n) : 0;
                                return t - (s.target + a);
                            }),
                            (o.dragEndBoostSelect = function () {
                                if (void 0 === this.previousDragX || !this.dragMoveTime || new Date() - this.dragMoveTime > 100) return 0;
                                var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
                                    e = this.previousDragX - this.dragX;
                                return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0;
                            }),
                            (o.staticClick = function (t, e) {
                                var n = this.getParentCell(t.target),
                                    i = n && n.element,
                                    o = n && this.cells.indexOf(n);
                                this.dispatchEvent("staticClick", t, [e, i, o]);
                            }),
                            (o.onscroll = function () {
                                var t = l(),
                                    e = this.pointerDownScroll.x - t.x,
                                    n = this.pointerDownScroll.y - t.y;
                                (Math.abs(e) > 3 || Math.abs(n) > 3) && this._pointerDone();
                            }),
                            e
                        );
                    })(r, t, e, n);
                }.apply(e, i)) || (t.exports = o);
    },
    function (t, e, n) {
        var i, o, r;
        /*!
         * Unidragger v2.3.0
         * Draggable base class
         * MIT license
         */ (r = window),
            (i = [n(3)]),
            void 0 ===
                (o = function (t) {
                    return (function (t, e) {
                        "use strict";
                        function n() {}
                        var i = (n.prototype = Object.create(e.prototype));
                        (i.bindHandles = function () {
                            this._bindHandles(!0);
                        }),
                            (i.unbindHandles = function () {
                                this._bindHandles(!1);
                            }),
                            (i._bindHandles = function (e) {
                                for (var n = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", i = e ? this._touchActionValue : "", o = 0; o < this.handles.length; o++) {
                                    var r = this.handles[o];
                                    this._bindStartEvent(r, e), r[n]("click", this), t.PointerEvent && (r.style.touchAction = i);
                                }
                            }),
                            (i._touchActionValue = "none"),
                            (i.pointerDown = function (t, e) {
                                this.okayPointerDown(t) && ((this.pointerDownPointer = e), t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]));
                            });
                        var o = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
                            r = { radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0 };
                        return (
                            (i.okayPointerDown = function (t) {
                                var e = o[t.target.nodeName],
                                    n = r[t.target.type],
                                    i = !e || n;
                                return i || this._pointerReset(), i;
                            }),
                            (i.pointerDownBlur = function () {
                                var t = document.activeElement;
                                t && t.blur && t != document.body && t.blur();
                            }),
                            (i.pointerMove = function (t, e) {
                                var n = this._dragPointerMove(t, e);
                                this.emitEvent("pointerMove", [t, e, n]), this._dragMove(t, e, n);
                            }),
                            (i._dragPointerMove = function (t, e) {
                                var n = { x: e.pageX - this.pointerDownPointer.pageX, y: e.pageY - this.pointerDownPointer.pageY };
                                return !this.isDragging && this.hasDragStarted(n) && this._dragStart(t, e), n;
                            }),
                            (i.hasDragStarted = function (t) {
                                return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
                            }),
                            (i.pointerUp = function (t, e) {
                                this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e);
                            }),
                            (i._dragPointerUp = function (t, e) {
                                this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
                            }),
                            (i._dragStart = function (t, e) {
                                (this.isDragging = !0), (this.isPreventingClicks = !0), this.dragStart(t, e);
                            }),
                            (i.dragStart = function (t, e) {
                                this.emitEvent("dragStart", [t, e]);
                            }),
                            (i._dragMove = function (t, e, n) {
                                this.isDragging && this.dragMove(t, e, n);
                            }),
                            (i.dragMove = function (t, e, n) {
                                t.preventDefault(), this.emitEvent("dragMove", [t, e, n]);
                            }),
                            (i._dragEnd = function (t, e) {
                                (this.isDragging = !1),
                                    setTimeout(
                                        function () {
                                            delete this.isPreventingClicks;
                                        }.bind(this)
                                    ),
                                    this.dragEnd(t, e);
                            }),
                            (i.dragEnd = function (t, e) {
                                this.emitEvent("dragEnd", [t, e]);
                            }),
                            (i.onclick = function (t) {
                                this.isPreventingClicks && t.preventDefault();
                            }),
                            (i._staticClick = function (t, e) {
                                (this.isIgnoringMouseUp && "mouseup" == t.type) ||
                                    (this.staticClick(t, e),
                                    "mouseup" != t.type &&
                                        ((this.isIgnoringMouseUp = !0),
                                        setTimeout(
                                            function () {
                                                delete this.isIgnoringMouseUp;
                                            }.bind(this),
                                            400
                                        )));
                            }),
                            (i.staticClick = function (t, e) {
                                this.emitEvent("staticClick", [t, e]);
                            }),
                            (n.getPointerPoint = e.getPointerPoint),
                            n
                        );
                    })(r, t);
                }.apply(e, i)) || (t.exports = o);
    },
    function (t, e, n) {
        var i, o;
        window,
            (i = [n(1), n(3), n(0)]),
            void 0 ===
                (o = function (t, e, n) {
                    return (function (t, e, n, i) {
                        "use strict";
                        var o = "http://www.w3.org/2000/svg";
                        function r(t, e) {
                            (this.direction = t), (this.parent = e), this._create();
                        }
                        (r.prototype = Object.create(n.prototype)),
                            (r.prototype._create = function () {
                                (this.isEnabled = !0), (this.isPrevious = -1 == this.direction);
                                var t = this.parent.options.rightToLeft ? 1 : -1;
                                this.isLeft = this.direction == t;
                                var e = (this.element = document.createElement("button"));
                                (e.className = "flickity-button flickity-prev-next-button"),
                                    (e.className += this.isPrevious ? " previous" : " next"),
                                    e.setAttribute("type", "button"),
                                    this.disable(),
                                    e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
                                var n = this.createSVG();
                                e.appendChild(n), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
                            }),
                            (r.prototype.activate = function () {
                                this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element);
                            }),
                            (r.prototype.deactivate = function () {
                                this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this);
                            }),
                            (r.prototype.createSVG = function () {
                                var t = document.createElementNS(o, "svg");
                                t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
                                var e,
                                    n = document.createElementNS(o, "path"),
                                    i =
                                        "string" == typeof (e = this.parent.options.arrowShape)
                                            ? e
                                            : "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z";
                                return n.setAttribute("d", i), n.setAttribute("class", "arrow"), this.isLeft || n.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(n), t;
                            }),
                            (r.prototype.handleEvent = i.handleEvent),
                            (r.prototype.onclick = function () {
                                if (this.isEnabled) {
                                    this.parent.uiChange();
                                    var t = this.isPrevious ? "previous" : "next";
                                    this.parent[t]();
                                }
                            }),
                            (r.prototype.enable = function () {
                                this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0));
                            }),
                            (r.prototype.disable = function () {
                                this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1));
                            }),
                            (r.prototype.update = function () {
                                var t = this.parent.slides;
                                if (this.parent.options.wrapAround && t.length > 1) this.enable();
                                else {
                                    var e = t.length ? t.length - 1 : 0,
                                        n = this.isPrevious ? 0 : e;
                                    this[this.parent.selectedIndex == n ? "disable" : "enable"]();
                                }
                            }),
                            (r.prototype.destroy = function () {
                                this.deactivate(), this.allOff();
                            }),
                            i.extend(e.defaults, { prevNextButtons: !0, arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 } }),
                            e.createMethods.push("_createPrevNextButtons");
                        var s = e.prototype;
                        return (
                            (s._createPrevNextButtons = function () {
                                this.options.prevNextButtons && ((this.prevButton = new r(-1, this)), (this.nextButton = new r(1, this)), this.on("activate", this.activatePrevNextButtons));
                            }),
                            (s.activatePrevNextButtons = function () {
                                this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons);
                            }),
                            (s.deactivatePrevNextButtons = function () {
                                this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons);
                            }),
                            (e.PrevNextButton = r),
                            e
                        );
                    })(0, t, e, n);
                }.apply(e, i)) || (t.exports = o);
    },
    function (t, e, n) {
        var i, o;
        window,
            (i = [n(1), n(3), n(0)]),
            void 0 ===
                (o = function (t, e, n) {
                    return (function (t, e, n, i) {
                        "use strict";
                        function o(t) {
                            (this.parent = t), this._create();
                        }
                        (o.prototype = Object.create(n.prototype)),
                            (o.prototype._create = function () {
                                (this.holder = document.createElement("ol")),
                                    (this.holder.className = "flickity-page-dots"),
                                    (this.dots = []),
                                    (this.handleClick = this.onClick.bind(this)),
                                    this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
                            }),
                            (o.prototype.activate = function () {
                                this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder);
                            }),
                            (o.prototype.deactivate = function () {
                                this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder);
                            }),
                            (o.prototype.setDots = function () {
                                var t = this.parent.slides.length - this.dots.length;
                                t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t);
                            }),
                            (o.prototype.addDots = function (t) {
                                for (var e = document.createDocumentFragment(), n = [], i = this.dots.length, o = i + t, r = i; r < o; r++) {
                                    var s = document.createElement("li");
                                    (s.className = "dot"), s.setAttribute("aria-label", "Page dot " + (r + 1)), e.appendChild(s), n.push(s);
                                }
                                this.holder.appendChild(e), (this.dots = this.dots.concat(n));
                            }),
                            (o.prototype.removeDots = function (t) {
                                this.dots.splice(this.dots.length - t, t).forEach(function (t) {
                                    this.holder.removeChild(t);
                                }, this);
                            }),
                            (o.prototype.updateSelected = function () {
                                this.selectedDot && ((this.selectedDot.className = "dot"), this.selectedDot.removeAttribute("aria-current")),
                                    this.dots.length && ((this.selectedDot = this.dots[this.parent.selectedIndex]), (this.selectedDot.className = "dot is-selected"), this.selectedDot.setAttribute("aria-current", "step"));
                            }),
                            (o.prototype.onTap = o.prototype.onClick = function (t) {
                                var e = t.target;
                                if ("LI" == e.nodeName) {
                                    this.parent.uiChange();
                                    var n = this.dots.indexOf(e);
                                    this.parent.select(n);
                                }
                            }),
                            (o.prototype.destroy = function () {
                                this.deactivate(), this.allOff();
                            }),
                            (e.PageDots = o),
                            i.extend(e.defaults, { pageDots: !0 }),
                            e.createMethods.push("_createPageDots");
                        var r = e.prototype;
                        return (
                            (r._createPageDots = function () {
                                this.options.pageDots &&
                                    ((this.pageDots = new o(this)),
                                    this.on("activate", this.activatePageDots),
                                    this.on("select", this.updateSelectedPageDots),
                                    this.on("cellChange", this.updatePageDots),
                                    this.on("resize", this.updatePageDots),
                                    this.on("deactivate", this.deactivatePageDots));
                            }),
                            (r.activatePageDots = function () {
                                this.pageDots.activate();
                            }),
                            (r.updateSelectedPageDots = function () {
                                this.pageDots.updateSelected();
                            }),
                            (r.updatePageDots = function () {
                                this.pageDots.setDots();
                            }),
                            (r.deactivatePageDots = function () {
                                this.pageDots.deactivate();
                            }),
                            (e.PageDots = o),
                            e
                        );
                    })(0, t, e, n);
                }.apply(e, i)) || (t.exports = o);
    },
    function (t, e, n) {
        var i, o;
        window,
            (i = [n(2), n(0), n(1)]),
            void 0 ===
                (o = function (t, e, n) {
                    return (function (t, e, n) {
                        "use strict";
                        function i(t) {
                            (this.parent = t), (this.state = "stopped"), (this.onVisibilityChange = this.visibilityChange.bind(this)), (this.onVisibilityPlay = this.visibilityPlay.bind(this));
                        }
                        (i.prototype = Object.create(t.prototype)),
                            (i.prototype.play = function () {
                                "playing" != this.state &&
                                    (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : ((this.state = "playing"), document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()));
                            }),
                            (i.prototype.tick = function () {
                                if ("playing" == this.state) {
                                    var t = this.parent.options.autoPlay;
                                    t = "number" == typeof t ? t : 3e3;
                                    var e = this;
                                    this.clear(),
                                        (this.timeout = setTimeout(function () {
                                            e.parent.next(!0), e.tick();
                                        }, t));
                                }
                            }),
                            (i.prototype.stop = function () {
                                (this.state = "stopped"), this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange);
                            }),
                            (i.prototype.clear = function () {
                                clearTimeout(this.timeout);
                            }),
                            (i.prototype.pause = function () {
                                "playing" == this.state && ((this.state = "paused"), this.clear());
                            }),
                            (i.prototype.unpause = function () {
                                "paused" == this.state && this.play();
                            }),
                            (i.prototype.visibilityChange = function () {
                                this[document.hidden ? "pause" : "unpause"]();
                            }),
                            (i.prototype.visibilityPlay = function () {
                                this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay);
                            }),
                            e.extend(n.defaults, { pauseAutoPlayOnHover: !0 }),
                            n.createMethods.push("_createPlayer");
                        var o = n.prototype;
                        return (
                            (o._createPlayer = function () {
                                (this.player = new i(this)), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer);
                            }),
                            (o.activatePlayer = function () {
                                this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this));
                            }),
                            (o.playPlayer = function () {
                                this.player.play();
                            }),
                            (o.stopPlayer = function () {
                                this.player.stop();
                            }),
                            (o.pausePlayer = function () {
                                this.player.pause();
                            }),
                            (o.unpausePlayer = function () {
                                this.player.unpause();
                            }),
                            (o.deactivatePlayer = function () {
                                this.player.stop(), this.element.removeEventListener("mouseenter", this);
                            }),
                            (o.onmouseenter = function () {
                                this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this));
                            }),
                            (o.onmouseleave = function () {
                                this.player.unpause(), this.element.removeEventListener("mouseleave", this);
                            }),
                            (n.Player = i),
                            n
                        );
                    })(t, e, n);
                }.apply(e, i)) || (t.exports = o);
    },
    function (t, e, n) {
        var i, o;
        window,
            (i = [n(1), n(0)]),
            void 0 ===
                (o = function (t, e) {
                    return (function (t, e, n) {
                        "use strict";
                        var i = e.prototype;
                        return (
                            (i.insert = function (t, e) {
                                var n = this._makeCells(t);
                                if (n && n.length) {
                                    var i = this.cells.length;
                                    e = void 0 === e ? i : e;
                                    var o = (function (t) {
                                            var e = document.createDocumentFragment();
                                            return (
                                                t.forEach(function (t) {
                                                    e.appendChild(t.element);
                                                }),
                                                e
                                            );
                                        })(n),
                                        r = e == i;
                                    if (r) this.slider.appendChild(o);
                                    else {
                                        var s = this.cells[e].element;
                                        this.slider.insertBefore(o, s);
                                    }
                                    if (0 === e) this.cells = n.concat(this.cells);
                                    else if (r) this.cells = this.cells.concat(n);
                                    else {
                                        var a = this.cells.splice(e, i - e);
                                        this.cells = this.cells.concat(n).concat(a);
                                    }
                                    this._sizeCells(n), this.cellChange(e, !0);
                                }
                            }),
                            (i.append = function (t) {
                                this.insert(t, this.cells.length);
                            }),
                            (i.prepend = function (t) {
                                this.insert(t, 0);
                            }),
                            (i.remove = function (t) {
                                var e = this.getCells(t);
                                if (e && e.length) {
                                    var i = this.cells.length - 1;
                                    e.forEach(function (t) {
                                        t.remove();
                                        var e = this.cells.indexOf(t);
                                        (i = Math.min(e, i)), n.removeFrom(this.cells, t);
                                    }, this),
                                        this.cellChange(i, !0);
                                }
                            }),
                            (i.cellSizeChange = function (t) {
                                var e = this.getCell(t);
                                if (e) {
                                    e.getSize();
                                    var n = this.cells.indexOf(e);
                                    this.cellChange(n);
                                }
                            }),
                            (i.cellChange = function (t, e) {
                                var n = this.selectedElement;
                                this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
                                var i = this.getCell(n);
                                i && (this.selectedIndex = this.getCellSlideIndex(i)),
                                    (this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex)),
                                    this.emitEvent("cellChange", [t]),
                                    this.select(this.selectedIndex),
                                    e && this.positionSliderAtSelected();
                            }),
                            e
                        );
                    })(0, t, e);
                }.apply(e, i)) || (t.exports = o);
    },
    function (t, e, n) {
        var i, o;
        window,
            (i = [n(1), n(0)]),
            void 0 ===
                (o = function (t, e) {
                    return (function (t, e, n) {
                        "use strict";
                        e.createMethods.push("_createLazyload");
                        var i = e.prototype;
                        function o(t, e) {
                            (this.img = t), (this.flickity = e), this.load();
                        }
                        return (
                            (i._createLazyload = function () {
                                this.on("select", this.lazyLoad);
                            }),
                            (i.lazyLoad = function () {
                                var t = this.options.lazyLoad;
                                if (t) {
                                    var e = "number" == typeof t ? t : 0,
                                        i = this.getAdjacentCellElements(e),
                                        r = [];
                                    i.forEach(function (t) {
                                        var e = (function (t) {
                                            if ("IMG" == t.nodeName) {
                                                var e = t.getAttribute("data-flickity-lazyload"),
                                                    i = t.getAttribute("data-flickity-lazyload-src"),
                                                    o = t.getAttribute("data-flickity-lazyload-srcset");
                                                if (e || i || o) return [t];
                                            }
                                            var r = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
                                            return n.makeArray(r);
                                        })(t);
                                        r = r.concat(e);
                                    }),
                                        r.forEach(function (t) {
                                            new o(t, this);
                                        }, this);
                                }
                            }),
                            (o.prototype.handleEvent = n.handleEvent),
                            (o.prototype.load = function () {
                                this.img.addEventListener("load", this), this.img.addEventListener("error", this);
                                var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
                                    e = this.img.getAttribute("data-flickity-lazyload-srcset");
                                (this.img.src = t),
                                    e && this.img.setAttribute("srcset", e),
                                    this.img.removeAttribute("data-flickity-lazyload"),
                                    this.img.removeAttribute("data-flickity-lazyload-src"),
                                    this.img.removeAttribute("data-flickity-lazyload-srcset");
                            }),
                            (o.prototype.onload = function (t) {
                                this.complete(t, "flickity-lazyloaded");
                            }),
                            (o.prototype.onerror = function (t) {
                                this.complete(t, "flickity-lazyerror");
                            }),
                            (o.prototype.complete = function (t, e) {
                                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                                var n = this.flickity.getParentCell(this.img),
                                    i = n && n.element;
                                this.flickity.cellSizeChange(i), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, i);
                            }),
                            (e.LazyLoader = o),
                            e
                        );
                    })(0, t, e);
                }.apply(e, i)) || (t.exports = o);
    },
    function (t, e) {
        document.addEventListener("DOMContentLoaded", function (t) {
            for (
                var e = document.querySelectorAll(".section-lp-caroussel .left .button"), n = document.querySelectorAll(".section-lp-caroussel .right .card"), i = document.querySelector(".section-lp-caroussel .right"), o = 0;
                o < e.length;
                o++
            )
                e[o].addEventListener("click", r);
            function r(t) {
                "up" == t.target.id ? (console.log("TOP"), i.prepend(n[n.length - 1])) : "down" == t.target.id && (console.log("BOTTOM"), i.appendChild(n[0])),
                    (n = document.querySelectorAll(".section-lp-caroussel .right .card")),
                    console.log(n);
            }
        });
    },
    function (t, e) {
        document.addEventListener("DOMContentLoaded", function (t) {
            if ($(".section-lp-tabs .tab").length > 0) {
                for (
                    var e = function () {
                            n();
                            var t = this.dataset.index;
                            (document.querySelector('.section-lp-tabs .tab-content[data-index="' + t + '"]').style.display = "block"), this.classList.add("active");
                        },
                        n = function () {
                            for (var t = 0; t < o.length; t++) (o[t].style.display = "none"), (i[t].className = i[t].className.replace(" active", ""));
                        },
                        i = document.querySelectorAll(".section-lp-tabs .tab"),
                        o = document.querySelectorAll(".section-lp-tabs .tab-content"),
                        r = 0;
                    r < i.length;
                    r++
                )
                    i[r].addEventListener("click", e);
                document.getElementById("defaultOpen").click();
            }
        });
    },
    function (t, e) {
        document.addEventListener("DOMContentLoaded", function (t) {
            $(".section-home-hero").length > 0 && $(".navigation").addClass("hp-style"),
                $(window).scroll(function () {
                    $(".navigation").length > 0 && $(".navigation").toggleClass("hp-style", $(this).scrollTop() < 48 && $(".section-home-hero").length > 0);
                });
        });
    },
    function (t, e) {
        $(document).ready(function () {
            $(".btn-switch").length > 0 &&
                $(".btn-switch").on("click", function () {
                    $(".btn-switch .hamburger").toggleClass("none"), $(".btn-switch .close").toggleClass("none"), $(".navigation-mobile .content").toggleClass("none");
                });
            var t,
                e = $(".item-sub .title");
            for (t = 0; t < e.length; t++)
                e[t].addEventListener("click", function () {
                    this.classList.toggle("active");
                    var t = this.nextElementSibling;
                    "block" === t.style.display ? (t.style.display = "none") : (t.style.display = "block");
                });
        });
    },
    function (t, e) {
        $(window).scroll(function () {
            $(".navigation").length > 0 && $(".navigation").toggleClass("actif", $(this).scrollTop() > 48);
        });
    },
    function (t, e) {
        document.addEventListener("DOMContentLoaded", function (t) {
            var e = function (t) {
                    for (var e = 0; e < n.length; e++) {
                        var i = n[e].parentElement,
                            o = n[e].nextElementSibling;
                        this !== n[e] || i.classList.contains("open") ? (i.classList.remove("open"), (o.style.maxHeight = "0px")) : (i.classList.add("open"), (o.style.maxHeight = o.scrollHeight + "px"));
                    }
                },
                n = document.querySelectorAll(".dropdown-container header");
            if (n && n.length > 0) for (var i = 0; i < n.length; i++) n[i].addEventListener("click", e);
        });
    },
    function (t, e) {
        $(document).ready(function () {
            var t;
            $(".universel-player").click(function () {
                t = $(this).attr("data-videourl");
            }),
                $("#modalVideo").on("shown.bs.modal", function (e) {
                    $("#video").attr("src", t + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
                }),
                $("#modalVideo").on("hide.bs.modal", function (t) {
                    $("#video").attr("src", "");
                });
        });
    },
]);
//# sourceURL=https://cdn2.hubspot.net/hub/5289388/hub_generated/template_assets/55963053860/1678385086273/meeko/js/main.js
