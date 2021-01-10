(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/presenzeoperatori/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/statistiche/presenzeoperatori/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LIstaStatistiche__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LIstaStatistiche */ "./resources/js/pages/statistiche/presenzeoperatori/LIstaStatistiche.vue");
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
    this.loadOperatori();
    this.loadSettimane();
  },
  watch: {
    settimane: function settimane(value) {
      return this.form.settimana = value[this.settimanaAttuale];
    }
  },
  data: function data() {
    return {
      form: {
        operatore: '',
        settimana: ''
      }
    };
  },
  computed: {
    canSend: function canSend() {
      return !(this.form.operatore && this.form.settimana);
    },
    listaoperatori: function listaoperatori() {
      return this.$store.getters['operatori/operatori'];
    },
    settimane: function settimane() {
      return this.$store.getters['operatori/settimane'];
    },
    settimanaAttuale: function settimanaAttuale() {
      return this.$store.getters['operatori/settimanaAttuale'] - 1;
    }
  },
  methods: {
    cerca: function cerca() {
      this.$store.dispatch('operatori/loadoperatore', this.form.operatore);
      this.$store.dispatch('operatori/loadstatisticheoperatori', this.form);
    },
    loadOperatori: function loadOperatori() {
      this.$store.dispatch('operatori/loadoperatori');
    },
    loadSettimane: function loadSettimane() {
      this.$store.dispatch('operatori/loadSettimane');
    },
    cleanStatisitche: function cleanStatisitche() {
      this.$store.commit('operatori/cleanstatistiche');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/presenzeoperatori/LIstaStatistiche.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/statistiche/presenzeoperatori/LIstaStatistiche.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LIstaStatistiche",
  computed: {
    statistiche: function statistiche() {
      return this.$store.getters['operatori/statistiche'];
    },
    totore: function totore() {
      return this.$store.getters['operatori/totore'];
    },
    operatore: function operatore() {
      return this.$store.getters['operatori/operatore'];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/presenzeoperatori/Index.vue?vue&type=template&id=568eeb89&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/statistiche/presenzeoperatori/Index.vue?vue&type=template&id=568eeb89&scoped=true& ***!
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
            _vm._v("Statistiche Presenze Operatori")
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
                      items: _vm.listaoperatori,
                      "item-text": "name",
                      "item-value": "id",
                      label: "Operatore",
                      dark: ""
                    },
                    model: {
                      value: _vm.form.operatore,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "operatore", $$v)
                      },
                      expression: "form.operatore"
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
                    attrs: {
                      items: _vm.settimane,
                      "item-text": "testo",
                      "item-value": "id",
                      label: "Settimana",
                      dark: ""
                    },
                    model: {
                      value: _vm.form.settimana,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "settimana", $$v)
                      },
                      expression: "form.settimana"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/presenzeoperatori/LIstaStatistiche.vue?vue&type=template&id=c699cc7a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/statistiche/presenzeoperatori/LIstaStatistiche.vue?vue&type=template&id=c699cc7a&scoped=true& ***!
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
                      _vm._v("\n                    Ore\n                ")
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
                      _c("td", [_vm._v(_vm._s(ele.ore))])
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
      _vm.totore
        ? _c(
            "section",
            [
              _c("v-alert", { attrs: { color: "blue-grey", dark: "" } }, [
                _vm._v(
                  "\n            Totale Ore: " +
                    _vm._s(_vm.totore) +
                    "\n        "
                )
              ]),
              _vm._v(" "),
              _c("v-alert", { attrs: { color: "blue accent-4", dark: "" } }, [
                _vm._v(
                  "\n            Saldo Ore: " +
                    _vm._s(_vm.operatore.oresaldo) +
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

/***/ "./resources/js/pages/statistiche/presenzeoperatori/Index.vue":
/*!********************************************************************!*\
  !*** ./resources/js/pages/statistiche/presenzeoperatori/Index.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_568eeb89_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=568eeb89&scoped=true& */ "./resources/js/pages/statistiche/presenzeoperatori/Index.vue?vue&type=template&id=568eeb89&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/statistiche/presenzeoperatori/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_568eeb89_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_568eeb89_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "568eeb89",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/statistiche/presenzeoperatori/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/statistiche/presenzeoperatori/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/statistiche/presenzeoperatori/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/presenzeoperatori/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/statistiche/presenzeoperatori/Index.vue?vue&type=template&id=568eeb89&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/pages/statistiche/presenzeoperatori/Index.vue?vue&type=template&id=568eeb89&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_568eeb89_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=568eeb89&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/presenzeoperatori/Index.vue?vue&type=template&id=568eeb89&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_568eeb89_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_568eeb89_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/statistiche/presenzeoperatori/LIstaStatistiche.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/statistiche/presenzeoperatori/LIstaStatistiche.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LIstaStatistiche_vue_vue_type_template_id_c699cc7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LIstaStatistiche.vue?vue&type=template&id=c699cc7a&scoped=true& */ "./resources/js/pages/statistiche/presenzeoperatori/LIstaStatistiche.vue?vue&type=template&id=c699cc7a&scoped=true&");
/* harmony import */ var _LIstaStatistiche_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LIstaStatistiche.vue?vue&type=script&lang=js& */ "./resources/js/pages/statistiche/presenzeoperatori/LIstaStatistiche.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LIstaStatistiche_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LIstaStatistiche_vue_vue_type_template_id_c699cc7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LIstaStatistiche_vue_vue_type_template_id_c699cc7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c699cc7a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/statistiche/presenzeoperatori/LIstaStatistiche.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/statistiche/presenzeoperatori/LIstaStatistiche.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/statistiche/presenzeoperatori/LIstaStatistiche.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LIstaStatistiche_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LIstaStatistiche.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/presenzeoperatori/LIstaStatistiche.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LIstaStatistiche_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/statistiche/presenzeoperatori/LIstaStatistiche.vue?vue&type=template&id=c699cc7a&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/pages/statistiche/presenzeoperatori/LIstaStatistiche.vue?vue&type=template&id=c699cc7a&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LIstaStatistiche_vue_vue_type_template_id_c699cc7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LIstaStatistiche.vue?vue&type=template&id=c699cc7a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/statistiche/presenzeoperatori/LIstaStatistiche.vue?vue&type=template&id=c699cc7a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LIstaStatistiche_vue_vue_type_template_id_c699cc7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LIstaStatistiche_vue_vue_type_template_id_c699cc7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);