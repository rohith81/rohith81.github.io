(window.webpackJsonp = window.webpackJsonp || []).push([
  [132],
  {
    365: function (e, t, o) {
      "use strict";
      o.r(t);
      var n = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "main",
          {
            staticClass: "main v-home",
          },
          [
            e._e(),
            e._v(" "),
            o("view-home-projects-v2"),
            e._v(" "),
            o("view-home-awards"),
            e._v(" "),
            o("view-home-press"),
            e._v(" "),
            o("view-home-win"),
            e._v(" "),
            o("view-home-do"),
            e._v(" "),
            e._m(0),
          ],
          1
        );
      };
      n._withStripped = !0;
      o(662);
      var r = o(5),
        i = o(29),
        a = o(52),
        s = o(53),
        l = {
          "en-us": {
            metaInfo: {
              title: "Mobile App Development & Digital Transformation Company",
              description: i.a.common.about,
              jsonLd: {
                "@graph": [
                  i.a.organizationSchema,
                  Object(s.b)({
                    about: i.a.common.about,
                    url: "/",
                  }),
                  {
                    "@type": "WebPage",
                    primaryImageOfPage: i.a.common.primaryImageOfPage,
                    breadcrumb: Object(a.a)(),
                  },
                ],
              },
            },
            hero: {
              h1: ["Digital Transfor­mation", "Accele­rated"],
              copy:
                "Fueled is an award-winning technology consultancy that transforms businesses by generating ideas, building products, and accelerating growth.",
              scroll: "What We Do",
            },
            projectsV2: {
              hero: {
                title: "We Transform Companies",
                copy:
                  "Fueled is an award-winning technology consultancy that transforms businesses by generating ideas, building products, and accelerating growth.",
                scroll: "What We Do",
              },
              nav: "See our work for {client}",
              project: "View the case study for {client}",
              items: {
                apple: {
                  title: "We Helped Grow Sales",
                },
                crunchbase: {
                  title: "We Shared Investments",
                },
                richr: {
                  title: "We Make You Richr",
                },
                riteaid: {
                  title: "We Prescribed Efficiency",
                },
                mgm: {
                  title: "We Fired Check-in Lines",
                },
                "warby-parker": {
                  title: "We Focus on Winning",
                },
                wirecutter: {
                  title: "We Ended Choice Paralysis",
                },
              },
            },
            awards: {
              heading: "Award-Winning App Development",
              usual: "We have won all the usual agency awards…",
              proud: "…but this is the recognition we’re most proud of:",
            },
            win: {
              heading: "What’s Our Secret?",
              intro:
                "There are really only two things that make Fueled special: our process and our team.",
              copy: [
                "Our process is our playbook for client success. It’s the infrastructure that allows our team to create the great things that drive results for our clients.",
                "Our people come from startups, not agencies. Instead of obsessing over awards, they’ve focused on satisfying customers and users. They’re ex-CEOs, ex-CTOs, ex-CMOs—people who know how to win in the marketplace.",
              ],
              ctas: [
                {
                  label: "More about us",
                  link: "services",
                },
              ],
            },
            do: {
              heading: "So, What do We Do, Exactly?",
              intro:
                "When clients utilize our full offering of services, it means we take a project from opportunity analysis through the design and build process and then through launch, growth, and iteration.",
              copy: [
                "We would start with an initial investigation about our client and their industry. We identify openings for growth, efficiency gains, and innovation by leveraging off-the-shelf or custom tech implementations. We interview stakeholders, do research, host focus groups, dive into analytics, and review data. That leads us to an understanding of what opportunities exist and what it will take to exploit them. We figure out ROI and what a roadmap would look like; we flesh out some concepts. And then we execute.",
                "Of course, not every client needs our full suite of services, and around half our business is focused on providing our capabilities a la carte. We work with a wide range of clients across numerous types of engagements, so flexibility is key, but we’ll never compromise our commitment to modern, agile best practices across product, design, development, growth, and project management.",
              ],
              ctas: [
                {
                  label: "View Our Capabilities",
                  link: "services",
                },
              ],
            },
            press: {
              heading: "Great Apps Get Noticed",
              intro:
                "It’d be a bit much to list all our press mentions on our homepage so we gave them their {0}.",
              pressLinkLabel: "very own page",
              cta: {
                link: "press",
                label: "See all press mentions",
              },
              uiPressLabel: "View all press",
            },
          },
          "en-gb": {
            projectsV2: {
              hero: {
                title: "We transform companies",
                scroll: "What we do",
              },
            },
          },
          es: {
            metaInfo: {
              title: "Empresa de diseño y desarrollo de aplicaciones",
            },
            hero: {
              h1: ["Transformación digital", "a la velocidad"],
              copy: [
                "Más que una empresa de desarrollo de aplicaciones: Fueled es una consultoría tecnológica galardonada que transforma las empresas al generar ideas, crear productos y acelerar el crecimiento.",
              ],
              scroll: "Nuestro último trabajo",
            },
            press: {
              heading: "Buen trabajo se hace notar",
              intro:
                "Hay demasiadas menciones de prensa para enumerar, por lo que pensamos que solo mostraríamos algunas.",
              cta: {
                label: "Toda la prensa",
              },
            },
          },
        },
        c = o(438),
        u = o(73),
        d = o(434),
        h = function () {
          var e = this,
            t = e.$createElement,
            o = e._self._c || t;
          return o(
            "section",
            {
              staticClass: "v-home-projects-v2",
            },
            [
              e._l(e.slides, function (t, n) {
                return o(
                  "module-block-v2",
                  {
                    key: t.slug,
                    ref: "project",
                    refInFor: !0,
                    class: [
                      "v-home-projects-v2__slide",
                      "v-home-projects-v2__slide--" + n,
                      ((r = {
                        "v-home-projects-v2__slide--angle": n > 0,
                        "v-home-projects-v2__slide--active":
                          e.active === t.slug && e.intro,
                        "v-home-projects-v2__slide--loaded": e.getSlideLoaded(
                          t.slug
                        ),
                        "v-home-projects-v2__slide--visible":
                          (e.active === t.slug && e.intro) ||
                          ("last" === e.active &&
                            "crunchbase" === t.slug &&
                            e.intro) ||
                          (!e.intro && "hero" === t.slug),
                      }),
                      (r["v-home-projects-v2__slide--" + t.slug] = t.slug),
                      r),
                    ],
                    attrs: {
                      "background-hidden": !0,
                      group: !1,
                      "theme-variables": [],
                      tag: "div",
                      "data-slide": t.slug,
                    },
                  },
                  [
                    e._o(
                      o("div", {
                        staticClass: "v-home-projects-v2__beacon",
                        attrs: {
                          slot: "outside-content",
                          id: "project-" + t.slug,
                          "aria-hidden": "true",
                        },
                        slot: "outside-content",
                      }),
                      0,
                      t.slug
                    ),
                    e._v(" "),
                    o(
                      "module-group",
                      {
                        staticClass: "v-home-projects-v2__wrapper",
                        attrs: {
                          "spacing-top": "half",
                          "spacing-bottom": "half",
                        },
                      },
                      [
                        o(
                          "div",
                          {
                            staticClass: "v-home-projects-v2__heading",
                          },
                          [
                            e._o(
                              o("module-heading", {
                                attrs: {
                                  tag: 0 === n ? "h1" : "h2",
                                  level: "h1",
                                  "spacing-top": "none",
                                  "spacing-bottom": "none",
                                  text: t.title,
                                  "data-heading": t.title,
                                },
                              }),
                              1,
                              t.slug
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        t.square
                          ? o(
                              "div",
                              {
                                ref: 0 === n && "square-hero",
                                refInFor: !0,
                                staticClass: "v-home-projects-v2__square",
                                attrs: {
                                  role: "presentation",
                                },
                              },
                              [
                                0 === n && !1 !== e.appIntro
                                  ? o(
                                      "div",
                                      {
                                        staticClass:
                                          "v-home-projects-v2__intro",
                                        style: {
                                          "--home-intro-square-scale":
                                            e.heroSquareWidth / e.viewportWidth,
                                        },
                                        attrs: {
                                          role: "presentation",
                                        },
                                      },
                                      [
                                        e._o(
                                          o("div", {
                                            class: e.getIntroChunkClass("we"),
                                          }),
                                          2,
                                          t.slug
                                        ),
                                        e._v(" "),
                                        e._o(
                                          o("div", {
                                            class: e.getIntroChunkClass("are"),
                                          }),
                                          3,
                                          t.slug
                                        ),
                                        e._v(" "),
                                        e._o(
                                          o("module-logo", {
                                            class: e.getIntroChunkClass("logo"),
                                            attrs: {
                                              lockup: "logo",
                                            },
                                          }),
                                          4,
                                          t.slug
                                        ),
                                      ],
                                      1
                                    )
                                  : e._e(),
                                e._v(" "),
                                0 === n
                                  ? o("div", {
                                      ref: "intro-finale",
                                      refInFor: !0,
                                      class: e.getIntroChunkClass("square"),
                                    })
                                  : e._e(),
                              ]
                            )
                          : e._e(),
                        e._v(" "),
                        0 === n
                          ? o(
                              "div",
                              {
                                staticClass: "v-home-projects-v2__content",
                              },
                              [
                                o("module-paragraph", {
                                  attrs: {
                                    level:
                                      e.viewportHeight >= 600 &&
                                      "fixed" === e.slideStyle
                                        ? "large"
                                        : "medium",
                                    "spacing-top":
                                      e.viewportHeight >= 600 &&
                                      "fixed" === e.slideStyle
                                        ? "full"
                                        : "half",
                                    "spacing-bottom":
                                      e.viewportHeight >= 600 &&
                                      "fixed" === e.slideStyle
                                        ? "full"
                                        : "half",
                                    text: e.$t("home.projectsV2.hero.copy"),
                                  },
                                }),
                                e._v(" "),
                                o("module-scroll", {
                                  attrs: {
                                    id: !1,
                                    label: e.$t("home.projectsV2.hero.scroll"),
                                    anchor:
                                      "fluid" === e.slideStyle
                                        ? "project-" + e.projectsOrder[1]
                                        : void 0,
                                  },
                                  nativeOn: {
                                    click: function (t) {
                                      return e.onNavigation(0);
                                    },
                                    touchstart: function (t) {
                                      return e.onNavigation(0);
                                    },
                                  },
                                }),
                              ],
                              1
                            )
                          : o(
                              t.link ? "module-link" : "div",
                              e._b(
                                {
                                  tag: "component",
                                  staticClass: "v-home-projects-v2__details",
                                },
                                "component",
                                t.link
                                  ? {
                                      link: t.link,
                                      title: e.$t("home.projectsV2.project", {
                                        client: t.name,
                                      }),
                                      appearance: "no-underline",
                                    }
                                  : {},
                                !1
                              ),
                              [
                                (e.getSlideLoaded(t.slug),
                                o(
                                  "div",
                                  {
                                    staticClass: "v-home-projects-v2__logos",
                                  },
                                  e._o(
                                    e._l(t.logos, function (t, n) {
                                      return o(
                                        "module-company-logo",
                                        e._b(
                                          {
                                            key: n,
                                          },
                                          "module-company-logo",
                                          t,
                                          !1
                                        )
                                      );
                                    }),
                                    5,
                                    t.slug
                                  ),
                                  1
                                )),
                                e._v(" "),
                                e._o(
                                  o(
                                    "module-heading",
                                    {
                                      attrs: {
                                        level: "h6",
                                        tag: "ul",
                                        "spacing-bottom": "none",
                                        "spacing-top": "half",
                                        lang: "en-US",
                                      },
                                    },
                                    e._l(t.types, function (t, n) {
                                      var r = t.noTransform,
                                        i = t.text;
                                      return o(
                                        "li",
                                        {
                                          key: n,
                                          class: r && "h-ttn",
                                        },
                                        [e._v(e._s(i))]
                                      );
                                    }),
                                    0
                                  ),
                                  6,
                                  t.slug
                                ),
                              ],
                              1
                            ),
                      ],
                      1
                    ),
                  ],
                  1
                );
                var r;
              }),
              e._v(" "),
              o("div", {
                ref: "finished-beacon",
                staticStyle: {
                  height: "52px",
                  "margin-bottom": "-50px",
                  width: "100%",
                },
              }),
              e._v(" "),
              o("module-pips", {
                class: [
                  "v-home-projects-v2__navigation",
                  {
                    "v-home-projects-v2__navigation--hidden":
                      -1 === e.navigationActive,
                  },
                ],
                attrs: {
                  alignment: "vertical",
                  center: !0,
                  pips: e.navigationPips,
                  active: e.navigationActive,
                },
                on: {
                  "pips-click": e.onNavigation,
                },
              }),
            ],
            2
          );
        };
      h._withStripped = !0;
      var p = o(275),
        v = o.n(p),
        m = o(276),
        g = o(182),
        f = o(22),
        b = {
          do: -5,
        },
        w = [
          "wirecutter",
          "apple",
          "warby-parker",
          "mgm",
          "riteaid",
          "crunchbase",
        ],
        y = {
          apple: {
            square: !0,
          },
          crunchbase: {
            square: !0,
          },
          mgm: {},
          riteaid: {
            square: !0,
          },
          richr: {
            logo: {
              lockup: "marque",
            },
          },
          "warby-parker": {
            square: !0,
          },
          wirecutter: {
            logos: [
              {
                company: "new-york-times",
              },
              {},
            ],
          },
        },
        _ = o(442),
        k = o(71),
        j = o(451),
        O = o(427),
        S = o(436),
        x = o(447);
      function T(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var o = [],
              n = !0,
              r = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(n = (a = s.next()).done) &&
                (o.push(a.value), !t || o.length !== t);
                n = !0
              );
            } catch (e) {
              (r = !0), (i = e);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (r) throw i;
              }
            }
            return o;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      function C(e, t) {
        if (null == e) return {};
        var o,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var o,
              n,
              r = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (o = i[n]), t.indexOf(o) >= 0 || (r[o] = e[o]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (o = i[n]),
              t.indexOf(o) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, o) &&
                  (r[o] = e[o]));
        }
        return r;
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(o);
          "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(o).filter(function (e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              $(e, t, o[t]);
            });
        }
        return e;
      }
      function $(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      function E(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, o = new Array(e.length); t < e.length; t++)
                o[t] = e[t];
              return o;
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      var P = {
          32: -1,
          33: 1,
          34: -1,
          38: 1,
          40: -1,
        },
        V = {
          rootMargin: "-4px 0% 0% 0%",
        },
        A = {
          name: "view-home-projects-v2",
          components: {
            ModuleBlockV2: c.a,
            ModuleCompanyLogo: _.a,
            ModuleGroup: k.a,
            ModuleHeading: u.a,
            ModuleLink: j.a,
            ModuleLogo: O.a,
            ModuleParagraph: d.a,
            ModulePips: S.a,
            ModuleScroll: x.a,
          },
          data: function () {
            return {
              slideStyle: null,
              navigationActive: -1,
              active: null,
              intro: !1,
              scrolling: !1,
              peeking: 0,
              peekTimeout: null,
              observer: null,
              intersecting: !1,
              projectRefs: {},
              projectsOrder: ["hero"].concat(E(w), ["last"]),
              touchScrollY: {
                start: null,
                end: null,
              },
              heroSquareWidth: 0,
            };
          },
          computed: M(
            {},
            Object(r.c)("loader", ["appIntro"]),
            {},
            Object(r.c)("app", [
              "viewportWidth",
              "viewportHeight",
              "prefersReducedMotion",
            ]),
            {
              navigationPips: function () {
                var e = this;
                return w.map(function (t) {
                  var o = f.a[t].name;
                  return e.$t("home.projectsV2.nav", {
                    client: o,
                  });
                });
              },
              slides: function () {
                var e = {
                    slug: "hero",
                    title: this.$t("home.projectsV2.hero.title"),
                    backgroundColor: "dark",
                    square: !0,
                  },
                  t = this.$t("home.projectsV2.items");
                return w.reduce(
                  function (e, o) {
                    var n,
                      r = y[o] || {};
                    n = (n = r.logos ? r.logos : [r.logo || {}]).map(function (
                      e
                    ) {
                      return M(
                        {
                          company: o,
                          inline: !0,
                          color: "mono-light",
                        },
                        e
                      );
                    });
                    var i = t[o] || {},
                      a = f.a[o] || {},
                      s = a.projectTypes,
                      l = C(a, ["projectTypes"]),
                      c = M(
                        {
                          slug: o,
                        },
                        l,
                        {},
                        i,
                        {
                          logos: n,
                          square: r.square || !1,
                          link: Object(g.b)(o),
                        }
                      );
                    return (
                      (c.types = (s || [])
                        .map(function (e) {
                          return f.b[e];
                        })
                        .filter(function (e) {
                          return e;
                        })),
                      c.types.push({
                        text: "Strategy",
                      }),
                      e.push(c),
                      e
                    );
                  },
                  [e]
                );
              },
            }
          ),
          watch: {
            viewportWidth: function () {
              var e = this;
              requestAnimationFrame(function () {
                return e.onViewportChange("resize-width");
              });
            },
            viewportHeight: function () {
              var e = this;
              requestAnimationFrame(function () {
                return e.onViewportChange("resize-height");
              });
            },
          },
          methods: {
            getIntroChunkClass: function (e) {
              return [
                "v-home-projects-v2__intro-chunk",
                "v-home-projects-v2__intro-chunk--".concat(e),
              ];
            },
            toggleBodyOverflowVisible: function (e) {
              var t = document.body.style;
              e ? t.removeProperty("overflow") : (t.overflow = "hidden");
            },
            setSlideLoaded: function (e) {
              this.$set(this.projectRefs[e], "loaded", !0);
            },
            getSlideLoaded: function (e) {
              var t = this.projectRefs[e];
              return t && t.loaded;
            },
            scrollToProject: function (e) {
              var t = this;
              this.scrolling = !0;
              var o =
                "last" === e
                  ? this.$refs["finished-beacon"]
                  : this.projectRefs[e].beacon;
              v()().animateScroll(o, null, {
                speed: 800,
                speedAsDuration: !0,
                updateURL: !1,
              }),
                setTimeout(function () {
                  (t.scrolling = !1), (t.navigationActive = w.indexOf(e));
                }, 600),
                setTimeout(function () {
                  t.peeking = 0;
                }, 800);
            },
            onKeyJack: function (e) {
              if ((this.intro || e.preventDefault(), this.intersecting)) {
                var t = P[e.keyCode];
                t &&
                  (e.preventDefault(),
                  this.onScrollJack({
                    fakeLethargy: t,
                  }));
              }
            },
            onTouchEvent: function (e, t) {
              if (this.intro) {
                if (
                  this.intersecting &&
                  (this.$set(this.touchScrollY, t, e.changedTouches[0].screenY),
                  "end" === t)
                ) {
                  var o = this.touchScrollY,
                    n = o.start,
                    r = o.end,
                    i = 0;
                  r - n > 0 ? (i = 1) : r - n < 0 && (i = -1),
                    0 !== i &&
                      this.onScrollJack({
                        fakeLethargy: i,
                      });
                }
              } else e.preventDefault();
            },
            onTouchStart: function (e) {
              this.onTouchEvent(e, "start");
            },
            onTouchEnd: function (e) {
              this.onTouchEvent(e, "end");
            },
            onScrollJack: function (e, t) {
              var o = this,
                n = e.preventDefault;
              if (this.intro) {
                if (
                  this.intersecting &&
                  (n && e.preventDefault(),
                  !("hero" === this.active && e.deltaY <= 0))
                ) {
                  var r = e.fakeLethargy || this.lethargy.check(e);
                  if (!1 === r && !this.prefersReducedMotion) {
                    var i = this.lethargyLow.check(e);
                    if (
                      !1 === i ||
                      0 !== this.peeking ||
                      this.scrolling ||
                      !this.active
                    )
                      return;
                    return (
                      (this.peeking = i),
                      void this.$nextTick(function () {
                        if (!o.scrolling) {
                          var t =
                              "last" === o.active
                                ? o.$refs["finished-beacon"]
                                : o.projectRefs[o.active].beacon,
                            n = -10 * e.deltaY,
                            r = {
                              speed: 250,
                              speedAsDuration: !0,
                              updateURL: !1,
                            },
                            i = v()();
                          i.animateScroll(
                            t,
                            null,
                            M({}, r, {
                              offset: n,
                            })
                          ),
                            clearTimeout(o.peekTimeout),
                            (o.peekTimeout = setTimeout(function () {
                              (o.peeking = 0), i.animateScroll(t, null, r);
                            }, 300));
                        }
                      })
                    );
                  }
                  if (!this.scrolling) {
                    (this.scrolling = !0), clearTimeout(this.peekTimeout);
                    var a = this.projectsOrder,
                      s =
                        "number" == typeof t
                          ? t
                          : a.indexOf(this.active || "hero") + -1 * r,
                      l = a[s];
                    l && l !== this.active
                      ? ((this.active = l), this.scrollToProject(l))
                      : (this.scrolling = !1);
                  }
                }
              } else n && e.preventDefault();
            },
            setupScrollJacking: function () {
              var e = this;
              (this.observer = new IntersectionObserver(function (t) {
                var o = T(t, 1)[0].isIntersecting;
                (e.intersecting = o),
                  e.toggleBodyOverflowVisible(!o),
                  o && "last" === e.active && e.onNavigation(w.length - 1);
              }, V)),
                this.observer.observe(this.$el);
              (this.lethargy = new m.Lethargy(7, 66, 0.05)),
                (this.lethargyLow = new m.Lethargy(7, 8, 0.05)),
                document.addEventListener("wheel", this.onScrollJack, {
                  capture: !0,
                  passive: !1,
                }),
                document.addEventListener("keydown", this.onKeyJack, {
                  passive: !1,
                }),
                document.addEventListener("touchstart", this.onTouchStart, {
                  passive: !1,
                }),
                document.addEventListener("touchend", this.onTouchEnd, {
                  passive: !1,
                });
            },
            destroyScrollJacking: function () {
              this.observer && this.observer.unobserve(this.$el),
                (this.active = null),
                this.toggleBodyOverflowVisible(!0),
                document.removeEventListener("wheel", this.onScrollJack, {
                  capture: !0,
                  passive: !1,
                }),
                document.removeEventListener("keydown", this.onKeyJack, {
                  passive: !1,
                }),
                document.removeEventListener("touchstart", this.onTouchStart, {
                  passive: !1,
                }),
                document.removeEventListener("touchend", this.onTouchEnd, {
                  passive: !1,
                });
            },
            onViewportChange: function (e) {
              var t = this.slideStyle,
                o = window.matchMedia(
                  "only screen and (min-aspect-ratio: 10000/9000) and (min-height: 33.75em) and (min-width: 48em)"
                ).matches;
              o && "fixed" !== t
                ? ((this.slideStyle = "fixed"),
                  this.setupScrollJacking(),
                  "mounted" !== e && this.onNavigation(-1))
                : o ||
                  "fluid" === t ||
                  ((this.slideStyle = "fluid"), this.destroyScrollJacking()),
                (this.heroSquareWidth = this.$refs[
                  "square-hero"
                ][0].offsetWidth);
            },
            onNavigation: function (e) {
              this.onScrollJack(
                {
                  fakeLethargy: -1,
                },
                e + 1
              );
            },
            handleIntroAnimation: function () {
              var e = this,
                t = function t(o) {
                  (e.intro = !0),
                    e.$store.dispatch("loader/setIntro", !1),
                    (e.active = "hero"),
                    o &&
                      o.removeEventListener("animationend", function () {
                        return t(o);
                      });
                };
              if (!1 === this.appIntro) t();
              else {
                var o = T(this.$refs["intro-finale"], 1)[0],
                  n = o.$el || o;
                n.addEventListener("animationend", function () {
                  return t(n);
                });
              }
            },
          },
          mounted: function () {
            var e = this;
            this.loadObserver = new IntersectionObserver(
              function (t) {
                var o = T(t, 1)[0],
                  n = o.intersectionRatio,
                  r = o.target;
                if (n > 0) {
                  var i = r.dataset.slide;
                  e.setSlideLoaded(i),
                    "hero" === i && e.setSlideLoaded(w[0]),
                    e.loadObserver.unobserve(r);
                }
              },
              {
                rootMargin: "0% 0% 100% 0%",
              }
            );
            var t = this.$refs.project.reduce(function (t, o) {
              var n = o.$el,
                r = n.dataset.slide,
                i = document.getElementById("project-".concat(r));
              return (
                (t[r] = {
                  el: n,
                  beacon: i,
                  loaded: !1,
                }),
                e.loadObserver.observe(n),
                t
              );
            }, {});
            this.$set(this, "projectRefs", t),
              Object.keys(t).length &&
                (requestAnimationFrame(function () {
                  return e.onViewportChange("mounted");
                }),
                this.handleIntroAnimation());
          },
          beforeDestroy: function () {
            this.destroyScrollJacking(), this.loadObserver.disconnect();
          },
        },
        I = o(1),
        W = Object(I.a)(A, h, [], !1, null, null, null);
      W.options.__file = "client/components/ViewHome/ViewHomeProjectsV2.vue";
      var L = W.exports,
        H = function () {
          var e = this,
            t = e.$createElement,
            o = e._self._c || t;
          return o(
            "module-block-v2",
            {
              staticClass: "v-home-win",
              attrs: {
                "angle-next": e.ANGLES.do,
                theme: "light",
                "center-contents": !0,
                size: "grow",
                group: {
                  spacingTop: "full",
                  spacingBottom: "none",
                },
              },
            },
            [
              o("module-heading", {
                staticClass: "v-home-win__heading",
                attrs: {
                  text: e.$t("home.win.heading"),
                  level: "h2",
                  "spacing-top": "none",
                  tag: "h3",
                },
              }),
              e._v(" "),
              o("ui-device-set", {
                class: [
                  "v-home-win__devices",
                  {
                    "v-home-win__devices--visible": e.devicesVisible,
                  },
                ],
                attrs: {
                  devices: [
                    {
                      deviceModel: "iphone-x",
                      screen: "mgm-select-show-time",
                      orientation: "tilt-right",
                    },
                    {
                      deviceModel: "iphone-x",
                      screen: "mgm-onboarding",
                      orientation: "tilt-right",
                    },
                  ],
                  "spacing-top": "-full",
                  "spacing-bottom": "-full",
                  "horizontal-alignment": "center",
                  "overlap-devices": !0,
                },
              }),
              e._v(" "),
              o(
                "div",
                {
                  staticClass: "v-home-win__copy",
                },
                [
                  o("module-paragraph", {
                    attrs: {
                      text: e.$t("home.win.intro"),
                      level: "large",
                      "spacing-top": "none",
                    },
                  }),
                  e._v(" "),
                  e._l(e.$t("home.win.copy"), function (t, n) {
                    return o("module-paragraph", {
                      key: "text-" + n,
                      attrs: {
                        "spacing-top": 0 === n ? "none" : null,
                        "spacing-bottom":
                          e.$t("home.win.copy").length === n + 1
                            ? "none"
                            : null,
                        text: t,
                      },
                    });
                  }),
                  e._v(" "),
                  e._l(e.$t("home.win.ctas"), function (t, n) {
                    return o(
                      "module-button",
                      e._b(
                        {
                          key: "button-" + n,
                          staticClass: "mb0",
                          attrs: {
                            level: "primary",
                            track: e.trackEvent,
                            "track-args": {
                              location: "home-win",
                            },
                            "spacing-bottom": "none",
                          },
                        },
                        "module-button",
                        t,
                        !1
                      )
                    );
                  }),
                ],
                2
              ),
            ],
            1
          );
        };
      H._withStripped = !0;
      var D = o(72),
        q = o(1535);
      function B(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var o = [],
              n = !0,
              r = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(n = (a = s.next()).done) &&
                (o.push(a.value), !t || o.length !== t);
                n = !0
              );
            } catch (e) {
              (r = !0), (i = e);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (r) throw i;
              }
            }
            return o;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      function z(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var J = {
          name: "view-home-win",
          components: {
            ModuleBlockV2: c.a,
            ModuleButton: D.a,
            ModuleHeading: u.a,
            ModuleParagraph: d.a,
            UiDeviceSet: q.a,
          },
          data: function () {
            return {
              ANGLES: b,
              devicesVisible: !1,
            };
          },
          methods: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" == typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  z(e, t, o[t]);
                });
            }
            return e;
          })({}, Object(r.b)("tracking", ["trackEvent"])),
          mounted: function () {
            var e = this;
            new IntersectionObserver(
              function (t, o) {
                B(t, 1)[0].intersectionRatio > 0 &&
                  (o.unobserve(e.$el), (e.devicesVisible = !0));
              },
              {
                rootMargin: "-33.33%",
              }
            ).observe(this.$el);
          },
        },
        G = Object(I.a)(J, H, [], !1, null, null, null);
      G.options.__file = "client/components/ViewHome/ViewHomeWin.vue";
      var N = G.exports,
        R = function () {
          var e = this,
            t = e.$createElement,
            o = e._self._c || t;
          return o(
            "module-block-v2",
            {
              staticClass: "v-home-do",
              attrs: {
                angle: e.ANGLES.do,
                theme: "dark",
                "center-contents": !0,
                size: "grow",
                group: {
                  spacingTop: "full",
                  spacingBottom: "full",
                },
              },
            },
            [
              o("module-heading", {
                attrs: {
                  text: e.$t("home.do.heading"),
                  level: "h2",
                  "spacing-top": "none",
                  tag: "h3",
                },
              }),
              e._v(" "),
              o("module-paragraph", {
                attrs: {
                  level: "large",
                  text: e.$t("home.do.intro"),
                },
              }),
              e._v(" "),
              o(
                "div",
                {
                  staticClass: "v-home-do__copy",
                },
                [
                  e._l(e.$t("home.do.copy"), function (t, n) {
                    return o("module-paragraph", {
                      key: "text-" + n,
                      attrs: {
                        "spacing-top": 0 === n ? "none" : null,
                        "spacing-bottom":
                          e.$t("home.do.copy").length === n + 1 ? "none" : null,
                        text: t,
                      },
                    });
                  }),
                  e._v(" "),
                  e._l(e.$t("home.do.ctas"), function (t, n) {
                    return o(
                      "module-button",
                      e._b(
                        {
                          key: "button-" + n,
                          staticClass: "mb0",
                          attrs: {
                            level: "primary",
                            track: e.trackEvent,
                            "track-args": {
                              location: "homeDo",
                            },
                          },
                        },
                        "module-button",
                        t,
                        !1
                      )
                    );
                  }),
                ],
                2
              ),
              e._v(" "),
              o(
                "div",
                {
                  staticClass: "v-home-do__device",
                },
                [
                  o("module-device-v2", {
                    attrs: {
                      "device-model": "macbook-air",
                      orientation: "isometric-right",
                      screen: "wirecutter-holiday",
                      browser: e.deviceUrl,
                      lazy: !0,
                    },
                  }),
                ],
                1
              ),
            ],
            1
          );
        };
      R._withStripped = !0;
      var F = o(1525);
      function Y(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var U = {
          name: "view-home-do",
          components: {
            ModuleBlockV2: c.a,
            ModuleButton: D.a,
            ModuleDeviceV2: F.a,
            ModuleHeading: u.a,
            ModuleParagraph: d.a,
          },
          data: function () {
            return {
              ANGLES: b,
              deviceUrl: f.a.wirecutter.links.website,
            };
          },
          methods: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" == typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  Y(e, t, o[t]);
                });
            }
            return e;
          })({}, Object(r.b)("tracking", ["trackEvent"])),
        },
        K = Object(I.a)(U, R, [], !1, null, null, null);
      K.options.__file = "client/components/ViewHome/ViewHomeDo.vue";
      var X = K.exports,
        Q = function () {
          var e = this,
            t = e.$createElement,
            o = e._self._c || t;
          return o(
            "module-block",
            {
              staticClass: "home-awards",
              attrs: {
                block: "accent",
                group: {
                  spacingTop: "full",
                  spacingBottom: "full",
                },
                trigger: !0,
              },
            },
            [
              o("module-heading", {
                attrs: {
                  level: "h2",
                  text: e.$t("home.awards.heading"),
                  "spacing-top": "none",
                },
              }),
              e._v(" "),
              o("module-paragraph", {
                attrs: {
                  text: e.$t("home.awards.usual"),
                  level: "large",
                },
              }),
              e._v(" "),
              o(
                "div",
                {
                  directives: [
                    {
                      name: "scroll-reveal",
                      rawName: "v-scroll-reveal",
                      value: {
                        id: "awards-usual",
                        stagger: 75,
                      },
                      expression:
                        "{\n      id: `awards-usual`,\n      stagger: 75,\n    }",
                    },
                  ],
                  ref: "usual",
                  staticClass: "home-awards__usual",
                },
                e._l(e.usual, function (e, t, n) {
                  return o(
                    "div",
                    {
                      key: n,
                      class: ["home-awards__item", "home-awards__item--" + t],
                    },
                    [
                      o(e, {
                        tag: "component",
                        class: ["home-awards__svg", "home-awards__svg--" + t],
                      }),
                    ],
                    1
                  );
                }),
                0
              ),
              e._v(" "),
              o("module-paragraph", {
                attrs: {
                  text: e.$t("home.awards.proud"),
                  level: "large",
                  "spacing-top": "full",
                },
              }),
              e._v(" "),
              o("ui-award-grid", {
                attrs: {
                  awards: e.proud,
                },
              }),
            ],
            1
          );
        };
      Q._withStripped = !0;
      var Z = o(186),
        ee = o(68),
        te = o(278),
        oe = o(277),
        ne = o(279),
        re = o(280),
        ie = o(281),
        ae = o(283),
        se = o(282),
        le = o(284),
        ce = {
          name: "view-home-awards",
          directives: {
            "scroll-reveal": Z.a,
          },
          components: {
            ModuleHeading: u.a,
            ModuleParagraph: d.a,
            UiAwardGrid: ee.a,
          },
          data: function () {
            var e = "Apple App Store";
            return {
              usual: {
                "webby-awards": oe.a,
                fwa: te.a,
                w3: ne.a,
                "omma-awards": re.a,
                "the-digiday-awards": ie.a,
                "creative-review": se.a,
                "hive-awards": ae.a,
                "communication-arts": le.a,
              },
              proud: [
                {
                  topText: "Afterlight",
                  award: "#1 App",
                  bottomText: "".concat(e, " Top Grossing"),
                },
                {
                  topText: "Warby Parker",
                  award: "Best of 2016",
                  bottomText: e,
                },
                {
                  topText: "Afterlight",
                  bottomText: e,
                },
                {
                  topText: "Afterlight",
                  award: "#2 App",
                  bottomText: "".concat("Google Play Store", " Top Grossing"),
                },
                {
                  topText: "Walc",
                  award: "Winner",
                  bottomText: "McDonald’s Innovation Challenge",
                },
                {
                  topText: "Afterlight",
                  bottomText: "Google Play Store",
                },
                {
                  topText: "Quizup",
                  award: "#1 App",
                  bottomText: e,
                },
                {
                  topText: "CharityBuzz",
                  bottomText: e,
                },
                {
                  topText: "CrunchBase",
                  bottomText: e,
                },
                {
                  topText: "Barneys NYC",
                  bottomText: e,
                },
                {
                  topText: "Quizup",
                  bottomText: "Google Play Store",
                },
                {
                  topText: "Thrillist",
                  bottomText: e,
                },
                {
                  topText: "YouHue",
                  bottomText: e,
                },
              ],
            };
          },
        },
        ue = Object(I.a)(ce, Q, [], !1, null, null, null);
      ue.options.__file = "client/components/ViewHome/ViewHomeAwards.vue";
      var de = ue.exports,
        he = function () {
          var e = this,
            t = e.$createElement,
            o = e._self._c || t;
          return o(
            "module-block-v2",
            {
              staticClass: "v-home-press",
              attrs: {
                block: "accent",
              },
            },
            [
              o(
                "module-group",
                {
                  staticClass: "v-home-press__intro",
                  attrs: {
                    "spacing-top": "full",
                    "spacing-bottom": "half",
                  },
                },
                [
                  o("module-heading", {
                    attrs: {
                      level: "h2",
                      text: e.$t("home.press.heading"),
                      "spacing-top": "none",
                    },
                  }),
                  e._v(" "),
                  o(
                    "i18n",
                    {
                      attrs: {
                        path: "home.press.intro",
                        tag: "module-paragraph",
                        "spacing-top": "none",
                        level: "large",
                      },
                    },
                    [
                      o("module-link", {
                        attrs: {
                          label: e.$t("home.press.pressLinkLabel"),
                          link: "press",
                        },
                      }),
                    ],
                    1
                  ),
                  e._v(" "),
                  o("module-button", {
                    staticClass: "mt0",
                    attrs: {
                      label: e.$t("home.press.cta.label"),
                      link: e.$t("home.press.cta.link"),
                      level: "secondary",
                      track: e.trackEvent,
                    },
                  }),
                ],
                1
              ),
              e._v(" "),
              o(
                "div",
                {
                  class: [
                    "v-home-press__grid",
                    {
                      "v-home-press__grid--hidden-detail": e.hidden,
                    },
                  ],
                  style: {
                    "--v-home-press-grid-detail": e.detailSize,
                  },
                },
                [
                  o("b", {
                    ref: "bg",
                    class: [
                      "v-home-press__bg",
                      {
                        "v-home-press__bg--loading": e.loading,
                      },
                    ],
                    on: {
                      mousemove: e.onHover,
                    },
                  }),
                  e._v(" "),
                  o("module-spinner", {
                    attrs: {
                      absolute: !0,
                      active: e.loading,
                      opaque: !0,
                    },
                  }),
                  e._v(" "),
                  e.active > -1
                    ? o(
                        "ui-press",
                        e._b(
                          {
                            style: e.cellStyle,
                            attrs: {
                              link: "press",
                              "link-label": e.$t("home.press.uiPressLabel"),
                            },
                          },
                          "ui-press",
                          e.press[e.active],
                          !1
                        )
                      )
                    : e._e(),
                ],
                1
              ),
            ],
            1
          );
        };
      he._withStripped = !0;
      o(666);
      var pe = o(187),
        ve = o(43),
        me = o(31),
        ge = o(445),
        fe = o(435);
      function be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(o);
          "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(o).filter(function (e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              we(e, t, o[t]);
            });
        }
        return e;
      }
      function we(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var ye = {
          name: "ui-press-grid",
          components: {
            ModuleBlockV2: c.a,
            ModuleButton: D.a,
            ModuleLink: j.a,
            ModuleGroup: k.a,
            ModuleHeading: u.a,
            ModuleParagraph: d.a,
            ModuleSpinner: ge.a,
            UiPress: fe.a,
          },
          data: function () {
            return {
              loading: !0,
              animating: !1,
              touchInt: null,
              press: [],
              columns: 17,
              hidden: !0,
              active: -1,
              cell: {
                x: 0,
                y: 0,
              },
              cellStyle: {
                left: 0,
                top: 0,
              },
              width: 0,
            };
          },
          computed: be({}, Object(r.c)("app", ["touch"]), {
            rows: function () {
              return this.detailSize + 2;
            },
            detailSize: function () {
              var e = this.width;
              return e >= 1200
                ? 4
                : e >= 900
                ? 5
                : e >= 720
                ? 6
                : e >= 680
                ? 7
                : e >= 540
                ? 8
                : e >= 440
                ? 9
                : e >= 360
                ? 10
                : 12;
            },
          }),
          methods: be({}, Object(r.b)("tracking", ["trackEvent"]), {
            setupInt: function () {
              var e = this;
              this.touchInt = setInterval(function () {
                e.setActive(!0);
              }, 5e3);
            },
            clearInt: function () {
              clearInterval(this.touchInt);
            },
            setWidth: function () {
              var e = this;
              requestAnimationFrame(function () {
                return (e.width = Object(me.a)(e.$el.clientWidth));
              });
            },
            setCell: function (e) {
              var t = e.offsetX,
                o = e.offsetY,
                n = e.target.clientWidth / this.columns;
              this.cell = {
                x: Math.floor(t / n),
                y: Math.floor(o / n),
              };
            },
            setActive: function (e) {
              var t = this;
              if (!this.animating && !this.loading) {
                (this.animating = !0),
                  e &&
                    (this.cell = {
                      x: Object(ve.a)(0, this.columns - 1),
                      y: Object(ve.a)(0, this.rows - 1),
                    });
                var o = this.cell,
                  n = o.x,
                  r = o.y,
                  i = this.$refs.bg.clientWidth / this.columns,
                  a = r * this.columns + n;
                a >= this.press.length && (a %= this.press.length);
                var s = 1;
                this.active > -1 && ((this.hidden = !0), (s = 250));
                var l = function (e) {
                  var o = t.cell[e] - Math.floor(t.detailSize / 2),
                    n = ("x" === e ? t.columns : t.rows) - t.detailSize;
                  return (
                    o < 0 && (o = 0),
                    o > n && (o = n),
                    "".concat(Object(ve.b)(o * i, 3), "px")
                  );
                };
                setTimeout(function () {
                  (t.active = a),
                    (t.cellStyle = {
                      left: l("x"),
                      top: l("y"),
                    }),
                    setTimeout(function () {
                      t.hidden = !1;
                    }, 50);
                }, s),
                  setTimeout(function () {
                    t.animating = !1;
                  }, s + 250 + 50);
              }
            },
            onHover: function (e) {
              var t = e.offsetX,
                o = e.offsetY,
                n = e.target;
              this.setCell({
                offsetX: t,
                offsetY: o,
                target: n,
              }),
                this.touch || this.setActive();
            },
          }),
          mounted: function () {
            var e = this;
            this.setWidth(),
              Object(pe.a)().then(function (t) {
                e.$set(e, "press", t),
                  (e.loading = !1),
                  e.setActive(!0),
                  e.touch && e.setupInt();
              }),
              window.addEventListener("resize-debounce", this.setWidth, !1);
          },
          destroyed: function () {
            this.clearInt(),
              window.removeEventListener("resize-debounce", this.setWidth, !1);
          },
        },
        _e = Object(I.a)(ye, he, [], !1, null, null, null);
      _e.options.__file = "client/components/ViewHome/ViewHomePress.vue";
      var ke = _e.exports;
      function je(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var Oe = {
          name: "view-home",
          components: {
            ModuleBlockV2: c.a,
            ModuleParagraph: d.a,
            ModuleHeading: u.a,
            ViewHomeProjectsV2: L,
            ViewHomeWin: N,
            ViewHomeDo: X,
            ViewHomeAwards: de,
            ViewHomePress: ke,
          },
          methods: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" == typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  je(e, t, o[t]);
                });
            }
            return e;
          })(
            {},
            Object(r.b)("i18n", ["addMessages"]),
            {},
            Object(r.b)("metaInfo", ["updateMetaInfoV2"])
          ),
          created: function () {
            var e = this,
              t = {
                key: "home",
                translations: l,
              };
            this.addMessages(t).then(function () {
              e.updateMetaInfoV2(e.$t("home.metaInfo"));
            });
          },
        },
        Se = Object(I.a)(
          Oe,
          n,
          [
            function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t(
                "a",
                {
                  attrs: {
                    href: "//www.dandb.com/verified/business/672809775/",
                    target: "_blank",
                  },
                },
                [
                  t("img", {
                    attrs: {
                      src: "//www.dandb.com/verified/seal/pixel/?t=672809775",
                    },
                  }),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        );
      Se.options.__file = "client/components/ViewHome/ViewHome.vue";
      var xe = Se.exports;
      o.d(t, "default", function () {
        return xe;
      });
    },
    662: function (e, t, o) {},
    666: function (e, t, o) {},
  },
]);
