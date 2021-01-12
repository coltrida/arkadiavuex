(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/associa/operatoreore/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/associa/operatoreore/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListaAssociazioni__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListaAssociazioni */ "./resources/js/pages/associa/operatoreore/ListaAssociazioni.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ListaAssociazioni: _ListaAssociazioni__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    this.loadOperatori();
  },
  data: function data() {
    return {
      form: {
        operatore: '',
        ore: ''
      }
    };
  },
  computed: {
    canSend: function canSend() {
      return !(this.form.operatore && this.form.ore);
    },
    listaoperatori: function listaoperatori() {
      return this.$store.getters['operatori/operatori'];
    }
  },
  methods: {
    inserisci: function inserisci() {
      var _this = this;

      this.$store.dispatch('operatori/inseriscioresettimanali', this.form).then(function () {
        _this.form.operatore = '';
        _this.form.ore = '';
      });
    },
    loadOperatori: function loadOperatori() {
      this.$store.dispatch('operatori/loadoperatori');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/associa/operatoreore/ListaAssociazioni.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/associa/operatoreore/ListaAssociazioni.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ListaAssociazioni",
  created: function created() {
    this.loadAssociazioni();
  },
  computed: {
    operatori: function operatori() {
      return this.$store.getters['operatori/operatori'];
    }
  },
  methods: {
    loadAssociazioni: function loadAssociazioni() {
      this.$store.dispatch('operatori/loadoperatori');
    },
    delAssociazione: function delAssociazione(id, indice) {
      this.$store.dispatch('associa/eliminaassociazione', {
        id: id,
        indice: indice
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/associa/operatoreore/Index.vue?vue&type=template&id=918dcaa2&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/associa/operatoreore/Index.vue?vue&type=template&id=918dcaa2&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Associa Operatore - Ore Settimanali")
          ]),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "router-link",
                { staticClass: "link", attrs: { to: "/associa" } },
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
              return _vm.inserisci($event)
            }
          }
        },
        [
          _c("v-select", {
            attrs: {
              items: _vm.listaoperatori,
              "item-text": "name",
              "item-value": "id",
              label: "Operatori",
              dark: ""
            },
            model: {
              value: _vm.form.operatore,
              callback: function($$v) {
                _vm.$set(_vm.form, "operatore", $$v)
              },
              expression: "form.operatore"
            }
          }),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: {
              label: "Ore",
              type: "number",
              step: "0.5",
              required: "",
              dark: ""
            },
            model: {
              value: _vm.form.ore,
              callback: function($$v) {
                _vm.$set(_vm.form, "ore", $$v)
              },
              expression: "form.ore"
            }
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "green", type: "submit", disabled: _vm.canSend }
            },
            [_vm._v("Associa\n        ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("lista-associazioni", { staticStyle: { "margin-top": "40px" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/associa/operatoreore/ListaAssociazioni.vue?vue&type=template&id=779c91e4&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/associa/operatoreore/ListaAssociazioni.vue?vue&type=template&id=779c91e4&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-simple-table", {
    attrs: { dark: "" },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function() {
          return [
            _c("thead", [
              _c("tr", { staticStyle: { "background-color": "#2e4623" } }, [
                _c("th", { staticClass: "text-left" }, [
                  _vm._v("\n                Nome\n            ")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left" }, [
                  _vm._v("\n                Ore Settimanali\n            ")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left" }, [
                  _vm._v("\n                Ore Saldo\n            ")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left" })
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.operatori, function(item, index) {
                return _c("tr", { key: item.id }, [
                  _c("td", [_vm._v(_vm._s(item.name))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.oresettimanali))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.oresaldo))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "red" },
                          on: {
                            click: function($event) {
                              return _vm.delAssociazione(item.id, index)
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("mdi-delete")])],
                        1
                      )
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
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/associa/operatoreore/Index.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/associa/operatoreore/Index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_918dcaa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=918dcaa2&scoped=true& */ "./resources/js/pages/associa/operatoreore/Index.vue?vue&type=template&id=918dcaa2&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/associa/operatoreore/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_918dcaa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_918dcaa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "918dcaa2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/associa/operatoreore/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/associa/operatoreore/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/associa/operatoreore/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/associa/operatoreore/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/associa/operatoreore/Index.vue?vue&type=template&id=918dcaa2&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/associa/operatoreore/Index.vue?vue&type=template&id=918dcaa2&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_918dcaa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=918dcaa2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/associa/operatoreore/Index.vue?vue&type=template&id=918dcaa2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_918dcaa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_918dcaa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/associa/operatoreore/ListaAssociazioni.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/associa/operatoreore/ListaAssociazioni.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListaAssociazioni_vue_vue_type_template_id_779c91e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListaAssociazioni.vue?vue&type=template&id=779c91e4&scoped=true& */ "./resources/js/pages/associa/operatoreore/ListaAssociazioni.vue?vue&type=template&id=779c91e4&scoped=true&");
/* harmony import */ var _ListaAssociazioni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListaAssociazioni.vue?vue&type=script&lang=js& */ "./resources/js/pages/associa/operatoreore/ListaAssociazioni.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListaAssociazioni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListaAssociazioni_vue_vue_type_template_id_779c91e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListaAssociazioni_vue_vue_type_template_id_779c91e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "779c91e4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/associa/operatoreore/ListaAssociazioni.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/associa/operatoreore/ListaAssociazioni.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/associa/operatoreore/ListaAssociazioni.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaAssociazioni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListaAssociazioni.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/associa/operatoreore/ListaAssociazioni.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaAssociazioni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/associa/operatoreore/ListaAssociazioni.vue?vue&type=template&id=779c91e4&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/pages/associa/operatoreore/ListaAssociazioni.vue?vue&type=template&id=779c91e4&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaAssociazioni_vue_vue_type_template_id_779c91e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListaAssociazioni.vue?vue&type=template&id=779c91e4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/associa/operatoreore/ListaAssociazioni.vue?vue&type=template&id=779c91e4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaAssociazioni_vue_vue_type_template_id_779c91e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaAssociazioni_vue_vue_type_template_id_779c91e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);