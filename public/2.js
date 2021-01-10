(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/chilometrivetture/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/statistiche/chilometrivetture/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LIstaStatistiche__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LIstaStatistiche */ "./resources/js/pages/statistiche/chilometrivetture/LIstaStatistiche.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "index",
  components: {
    ListaStatistiche: _LIstaStatistiche__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    this.cleanStatisitche();
    this.loadVetture();
  },
  data: function data() {
    return {
      form: {
        car: '',
        mesi: [],
        anno: ''
      }
    };
  },
  computed: {
    canSend: function canSend() {
      return !(this.form.car && this.form.anno && this.form.mesi.length > 0);
    },
    listavetture: function listavetture() {
      return this.$store.getters['vetture/vetture'];
    },
    annoOggi: function annoOggi() {
      return this.form.anno = new Date().getFullYear();
    },
    anni: function anni() {
      var valori = [];

      for (var i = 2020; i <= this.annoOggi; i++) {
        valori.push(i);
      }

      return valori;
    }
  },
  methods: {
    cerca: function cerca() {
      this.$store.dispatch('vetture/loadstatistiche', this.form);
    },
    loadVetture: function loadVetture() {
      this.$store.dispatch('vetture/loadvetture');
    },
    cleanStatisitche: function cleanStatisitche() {
      this.$store.commit('vetture/cleanstatistiche');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/chilometrivetture/LIstaStatistiche.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/statistiche/chilometrivetture/LIstaStatistiche.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Passeggeri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Passeggeri */ "./resources/js/pages/statistiche/chilometrivetture/Passeggeri.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LIstaStatistiche",
  components: {
    Passeggeri: _Passeggeri__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    statistiche: function statistiche() {
      return this.$store.getters['vetture/statistiche'];
    },
    totale: function totale() {
      return this.$store.getters['vetture/totale'];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/chilometrivetture/Passeggeri.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/statistiche/chilometrivetture/Passeggeri.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Passeggeri",
  props: ['passeggeri'],
  data: function data() {
    return {
      dialog: false
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/chilometrivetture/Index.vue?vue&type=template&id=4fad7b55&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/statistiche/chilometrivetture/Index.vue?vue&type=template&id=4fad7b55&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "div",
        {
          staticStyle: { display: "flex", "justify-content": "space-between" }
        },
        [
          _c("h3", { staticStyle: { color: "white" } }, [
            _vm._v("Statistiche Chilometri Vetture")
          ]),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "router-link",
                { staticClass: "link", attrs: { to: "/statistiche" } },
                [
                  _c("v-btn", [
                    _vm._v("\n                    Indietro\n                ")
                  ])
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "v-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.cerca($event)
            }
          }
        },
        [
          _c("v-select", {
            attrs: {
              items: _vm.listavetture,
              "item-text": "name",
              "item-value": "id",
              label: "Vettura",
              dark: ""
            },
            model: {
              value: _vm.form.car,
              callback: function($$v) {
                _vm.$set(_vm.form, "car", $$v)
              },
              expression: "form.car"
            }
          }),
          _vm._v(" "),
          _c(
            "v-row",
            _vm._l(6, function(n) {
              return _c(
                "v-col",
                { key: n, attrs: { cols: "6", sm: "2", md: "2" } },
                [
                  _c("v-checkbox", {
                    attrs: {
                      label: String(n),
                      color: "primary",
                      value: n,
                      "hide-details": "",
                      dark: ""
                    },
                    model: {
                      value: _vm.form.mesi,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "mesi", $$v)
                      },
                      expression: "form.mesi"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-checkbox", {
                    attrs: {
                      label: String(n + 6),
                      color: "primary",
                      value: n + 6,
                      "hide-details": "",
                      dark: ""
                    },
                    model: {
                      value: _vm.form.mesi,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "mesi", $$v)
                      },
                      expression: "form.mesi"
                    }
                  })
                ],
                1
              )
            }),
            1
          ),
          _vm._v(" "),
          _c("v-select", {
            staticStyle: { "margin-top": "30px" },
            attrs: { items: _vm.anni, label: "Anno", dark: "" },
            model: {
              value: _vm.form.anno,
              callback: function($$v) {
                _vm.$set(_vm.form, "anno", $$v)
              },
              expression: "form.anno"
            }
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "green", type: "submit", disabled: _vm.canSend }
            },
            [_vm._v("Cerca\n        ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("lista-statistiche", { staticStyle: { "margin-top": "40px" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/chilometrivetture/LIstaStatistiche.vue?vue&type=template&id=7c761b12&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/statistiche/chilometrivetture/LIstaStatistiche.vue?vue&type=template&id=7c761b12&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-simple-table", {
        attrs: { dark: "" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function() {
              return [
                _c("thead", [
                  _c("tr", { staticStyle: { "background-color": "#2e4623" } }, [
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("\n                    Giorno\n                ")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v(
                        "\n                    km percorsi\n                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v(
                        "\n                    Operatore\n                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v(
                        "\n                    Passeggeri\n                "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.statistiche, function(ele) {
                    return _c("tr", { key: ele.id }, [
                      _c("td", [_vm._v(_vm._s(ele.giorno))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(ele.kmPercorsi))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(ele.operatore))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("passeggeri", {
                            attrs: { passeggeri: ele.passeggeri }
                          })
                        ],
                        1
                      )
                    ])
                  }),
                  0
                )
              ]
            },
            proxy: true
          }
        ])
      }),
      _vm._v(" "),
      _vm.totale
        ? _c(
            "section",
            [
              _c("v-alert", { attrs: { color: "blue-grey", dark: "" } }, [
                _vm._v(
                  "\n            Totale Ore: " +
                    _vm._s(_vm.totale) +
                    "\n        "
                )
              ])
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/chilometrivetture/Passeggeri.vue?vue&type=template&id=2b284b15&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/statistiche/chilometrivetture/Passeggeri.vue?vue&type=template&id=2b284b15&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { width: "500" },
      scopedSlots: _vm._u([
        {
          key: "activator",
          fn: function(ref) {
            var on = ref.on
            var attrs = ref.attrs
            return [
              _c(
                "v-btn",
                _vm._g(
                  _vm._b(
                    { attrs: { color: "red lighten-2", dark: "", small: "" } },
                    "v-btn",
                    attrs,
                    false
                  ),
                  on
                ),
                [_vm._v("\n            Vedi\n        ")]
              )
            ]
          }
        }
      ]),
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c("v-card-title", { staticClass: "headline grey lighten-2" }, [
            _vm._v("\n            Passeggeri\n        ")
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-list-item-group",
                { attrs: { color: "primary" } },
                _vm._l(_vm.passeggeri, function(ele, i) {
                  return _c(
                    "v-list-item",
                    { key: i },
                    [
                      _c(
                        "v-list-item-content",
                        [
                          _c("v-list-item-title", {
                            domProps: { textContent: _vm._s(ele.nome) }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "primary", text: "" },
                  on: {
                    click: function($event) {
                      _vm.dialog = false
                    }
                  }
                },
                [_vm._v("\n                chiudi\n            ")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/statistiche/chilometrivetture/Index.vue":
/*!********************************************************************!*\
  !*** ./resources/js/pages/statistiche/chilometrivetture/Index.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_4fad7b55_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=4fad7b55&scoped=true& */ "./resources/js/pages/statistiche/chilometrivetture/Index.vue?vue&type=template&id=4fad7b55&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/statistiche/chilometrivetture/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_4fad7b55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_4fad7b55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4fad7b55",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/statistiche/chilometrivetture/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/statistiche/chilometrivetture/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/statistiche/chilometrivetture/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/chilometrivetture/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/statistiche/chilometrivetture/Index.vue?vue&type=template&id=4fad7b55&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/pages/statistiche/chilometrivetture/Index.vue?vue&type=template&id=4fad7b55&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4fad7b55_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=4fad7b55&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/chilometrivetture/Index.vue?vue&type=template&id=4fad7b55&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4fad7b55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4fad7b55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/statistiche/chilometrivetture/LIstaStatistiche.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/statistiche/chilometrivetture/LIstaStatistiche.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LIstaStatistiche_vue_vue_type_template_id_7c761b12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LIstaStatistiche.vue?vue&type=template&id=7c761b12&scoped=true& */ "./resources/js/pages/statistiche/chilometrivetture/LIstaStatistiche.vue?vue&type=template&id=7c761b12&scoped=true&");
/* harmony import */ var _LIstaStatistiche_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LIstaStatistiche.vue?vue&type=script&lang=js& */ "./resources/js/pages/statistiche/chilometrivetture/LIstaStatistiche.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LIstaStatistiche_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LIstaStatistiche_vue_vue_type_template_id_7c761b12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LIstaStatistiche_vue_vue_type_template_id_7c761b12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c761b12",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/statistiche/chilometrivetture/LIstaStatistiche.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/statistiche/chilometrivetture/LIstaStatistiche.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/statistiche/chilometrivetture/LIstaStatistiche.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LIstaStatistiche_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LIstaStatistiche.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/chilometrivetture/LIstaStatistiche.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LIstaStatistiche_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/statistiche/chilometrivetture/LIstaStatistiche.vue?vue&type=template&id=7c761b12&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/pages/statistiche/chilometrivetture/LIstaStatistiche.vue?vue&type=template&id=7c761b12&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LIstaStatistiche_vue_vue_type_template_id_7c761b12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LIstaStatistiche.vue?vue&type=template&id=7c761b12&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/chilometrivetture/LIstaStatistiche.vue?vue&type=template&id=7c761b12&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LIstaStatistiche_vue_vue_type_template_id_7c761b12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LIstaStatistiche_vue_vue_type_template_id_7c761b12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/statistiche/chilometrivetture/Passeggeri.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/statistiche/chilometrivetture/Passeggeri.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Passeggeri_vue_vue_type_template_id_2b284b15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Passeggeri.vue?vue&type=template&id=2b284b15&scoped=true& */ "./resources/js/pages/statistiche/chilometrivetture/Passeggeri.vue?vue&type=template&id=2b284b15&scoped=true&");
/* harmony import */ var _Passeggeri_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Passeggeri.vue?vue&type=script&lang=js& */ "./resources/js/pages/statistiche/chilometrivetture/Passeggeri.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Passeggeri_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Passeggeri_vue_vue_type_template_id_2b284b15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Passeggeri_vue_vue_type_template_id_2b284b15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2b284b15",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/statistiche/chilometrivetture/Passeggeri.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/statistiche/chilometrivetture/Passeggeri.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/statistiche/chilometrivetture/Passeggeri.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Passeggeri_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Passeggeri.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/chilometrivetture/Passeggeri.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Passeggeri_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/statistiche/chilometrivetture/Passeggeri.vue?vue&type=template&id=2b284b15&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/pages/statistiche/chilometrivetture/Passeggeri.vue?vue&type=template&id=2b284b15&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Passeggeri_vue_vue_type_template_id_2b284b15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Passeggeri.vue?vue&type=template&id=2b284b15&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/chilometrivetture/Passeggeri.vue?vue&type=template&id=2b284b15&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Passeggeri_vue_vue_type_template_id_2b284b15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Passeggeri_vue_vue_type_template_id_2b284b15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);