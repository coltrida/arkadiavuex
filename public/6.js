(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/presenzeragazzi/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/statistiche/presenzeragazzi/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LIstaStatistiche__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LIstaStatistiche */ "./resources/js/pages/statistiche/presenzeragazzi/LIstaStatistiche.vue");
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
    this.loadRagazzi();
  },
  data: function data() {
    return {
      form: {
        mese: '',
        anno: '',
        ragazzo: ''
      }
    };
  },
  mounted: function mounted() {
    this.form.mese = new Date().getMonth() + 1;
  },
  computed: {
    canSend: function canSend() {
      return !(this.form.mese && this.form.anno && this.form.ragazzo);
    },
    listaragazzi: function listaragazzi() {
      return this.$store.getters['ragazzi/ragazzi'];
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
    },
    mesi: function mesi() {
      var valori = [];

      for (var i = 1; i <= 12; i++) {
        valori.push(i);
      }

      return valori;
    }
  },
  methods: {
    cerca: function cerca() {
      this.$store.dispatch('ragazzi/loadstatisticheattivitaragazzi', this.form);
      this.$store.dispatch('ragazzi/loadragazzo', this.form.ragazzo);
    },
    loadRagazzi: function loadRagazzi() {
      this.$store.dispatch('ragazzi/loadragazzi');
    },
    cleanStatisitche: function cleanStatisitche() {
      this.$store.commit('ragazzi/cleanstatistiche');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/presenzeragazzi/LIstaStatistiche.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/statistiche/presenzeragazzi/LIstaStatistiche.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LIstaStatistiche",
  computed: {
    statistiche: function statistiche() {
      return this.$store.getters['ragazzi/statisticheattivita'];
    },
    totale: function totale() {
      return this.$store.getters['ragazzi/costoTotale'];
    },
    ragazzo: function ragazzo() {
      return this.$store.getters['ragazzi/ragazzo'];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/presenzeragazzi/Index.vue?vue&type=template&id=2e07a5f8&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/statistiche/presenzeragazzi/Index.vue?vue&type=template&id=2e07a5f8&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Statistiche Presenze Ragazzi")
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
          _c(
            "v-row",
            [
              _c(
                "v-col",
                [
                  _c("v-select", {
                    attrs: {
                      items: _vm.listaragazzi,
                      "item-text": "name",
                      "item-value": "id",
                      label: "Ragazzo",
                      dark: ""
                    },
                    model: {
                      value: _vm.form.ragazzo,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "ragazzo", $$v)
                      },
                      expression: "form.ragazzo"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                [
                  _c("v-select", {
                    attrs: { items: _vm.mesi, label: "Mese", dark: "" },
                    model: {
                      value: _vm.form.mese,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "mese", $$v)
                      },
                      expression: "form.mese"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                [
                  _c("v-select", {
                    attrs: { items: _vm.anni, label: "Anno", dark: "" },
                    model: {
                      value: _vm.form.anno,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "anno", $$v)
                      },
                      expression: "form.anno"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/presenzeragazzi/LIstaStatistiche.vue?vue&type=template&id=017dad68&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/statistiche/presenzeragazzi/LIstaStatistiche.vue?vue&type=template&id=017dad68&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
      _vm._l(_vm.statistiche, function(item) {
        return _c("v-simple-table", {
          key: item.id,
          staticStyle: { "margin-bottom": "20px" },
          attrs: { dark: "" },
          scopedSlots: _vm._u(
            [
              {
                key: "default",
                fn: function() {
                  return [
                    _c("thead", [
                      _c(
                        "tr",
                        { staticStyle: { "background-color": "#2e4623" } },
                        [
                          _c("th", { staticClass: "text-left" }, [
                            _c("div", [
                              _vm._v(
                                "\n                        Attivita': " +
                                  _vm._s(item[0].activity.name) +
                                  " - " +
                                  _vm._s(item[0].activity.tipo) +
                                  "\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v(
                                "\n                        Giorno\n                    "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v(
                              "\n                    Quantita'\n                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v(
                              "\n                    costo\n                "
                            )
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(item, function(ele) {
                        return _c("tr", { key: ele.id }, [
                          _c("td", [_vm._v(_vm._s(ele.giorno))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ele.quantita))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ele.costo))])
                        ])
                      }),
                      0
                    )
                  ]
                },
                proxy: true
              }
            ],
            null,
            true
          )
        })
      }),
      _vm._v(" "),
      _vm.ragazzo
        ? _c(
            "section",
            [
              _c("v-alert", { attrs: { color: "blue-grey", dark: "" } }, [
                _vm._v(
                  "\n            Costo Totale: " +
                    _vm._s(_vm.totale) +
                    "\n        "
                )
              ]),
              _vm._v(" "),
              _c("v-alert", { attrs: { color: "blue accent-4", dark: "" } }, [
                _vm._v(
                  "\n            Saldo Voucher: " +
                    _vm._s(_vm.ragazzo.voucher) +
                    "\n        "
                )
              ])
            ],
            1
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/statistiche/presenzeragazzi/Index.vue":
/*!******************************************************************!*\
  !*** ./resources/js/pages/statistiche/presenzeragazzi/Index.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_2e07a5f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=2e07a5f8&scoped=true& */ "./resources/js/pages/statistiche/presenzeragazzi/Index.vue?vue&type=template&id=2e07a5f8&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/statistiche/presenzeragazzi/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_2e07a5f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_2e07a5f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2e07a5f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/statistiche/presenzeragazzi/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/statistiche/presenzeragazzi/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/statistiche/presenzeragazzi/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/presenzeragazzi/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/statistiche/presenzeragazzi/Index.vue?vue&type=template&id=2e07a5f8&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/pages/statistiche/presenzeragazzi/Index.vue?vue&type=template&id=2e07a5f8&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2e07a5f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=2e07a5f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/presenzeragazzi/Index.vue?vue&type=template&id=2e07a5f8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2e07a5f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2e07a5f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/statistiche/presenzeragazzi/LIstaStatistiche.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/statistiche/presenzeragazzi/LIstaStatistiche.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LIstaStatistiche_vue_vue_type_template_id_017dad68_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LIstaStatistiche.vue?vue&type=template&id=017dad68&scoped=true& */ "./resources/js/pages/statistiche/presenzeragazzi/LIstaStatistiche.vue?vue&type=template&id=017dad68&scoped=true&");
/* harmony import */ var _LIstaStatistiche_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LIstaStatistiche.vue?vue&type=script&lang=js& */ "./resources/js/pages/statistiche/presenzeragazzi/LIstaStatistiche.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LIstaStatistiche_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LIstaStatistiche_vue_vue_type_template_id_017dad68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LIstaStatistiche_vue_vue_type_template_id_017dad68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "017dad68",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/statistiche/presenzeragazzi/LIstaStatistiche.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/statistiche/presenzeragazzi/LIstaStatistiche.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/statistiche/presenzeragazzi/LIstaStatistiche.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LIstaStatistiche_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LIstaStatistiche.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/presenzeragazzi/LIstaStatistiche.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LIstaStatistiche_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/statistiche/presenzeragazzi/LIstaStatistiche.vue?vue&type=template&id=017dad68&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/pages/statistiche/presenzeragazzi/LIstaStatistiche.vue?vue&type=template&id=017dad68&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LIstaStatistiche_vue_vue_type_template_id_017dad68_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LIstaStatistiche.vue?vue&type=template&id=017dad68&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/presenzeragazzi/LIstaStatistiche.vue?vue&type=template&id=017dad68&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LIstaStatistiche_vue_vue_type_template_id_017dad68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LIstaStatistiche_vue_vue_type_template_id_017dad68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);