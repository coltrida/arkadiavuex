(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/associa/attivitaragazzo/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/associa/attivitaragazzo/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListaAssociazioni__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListaAssociazioni */ "./resources/js/pages/associa/attivitaragazzo/ListaAssociazioni.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.loadAttivita();
    this.loadRagazzi();
  },
  data: function data() {
    var srcs = {
      1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'
    };
    return {
      autoUpdate: true,
      menu2: false,
      isUpdating: false,
      form: {
        attivita: '',
        ragazzi: []
      },
      name: 'Midnight Crew',

      /*people: [
          { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
          { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
          { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
          { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
          { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
          { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
          { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
          { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] },
      ],*/
      title: 'The summer breeze'
    };
  },
  computed: {
    canSend: function canSend() {
      return !(this.form.attivita && this.form.ragazzi.length);
    },
    listaattivita: function listaattivita() {
      return this.$store.getters['attivita/attivita'];
    },
    people: function people() {
      return this.$store.getters['ragazzi/ragazzi'];
    }
  },
  methods: {
    inserisci: function inserisci() {
      var _this = this;

      this.$store.dispatch('associa/inserisciassociazione', this.form).then(function () {
        _this.form.attivita = '';
        _this.form.ragazzi = [];
      });
    },
    loadAttivita: function loadAttivita() {
      this.$store.dispatch('attivita/loadattivita');
    },
    loadRagazzi: function loadRagazzi() {
      this.$store.dispatch('ragazzi/loadragazzi');
    },
    remove: function remove(item) {
      var index = this.form.ragazzi.indexOf(item.id);
      if (index >= 0) this.form.ragazzi.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/associa/attivitaragazzo/ListaAssociazioni.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/associa/attivitaragazzo/ListaAssociazioni.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ListaAssociazioni",
  created: function created() {
    this.loadAssociazioni();
  },
  computed: {
    associazioni: function associazioni() {
      return this.$store.getters['associa/associazioni'];
    }
  },
  methods: {
    loadAssociazioni: function loadAssociazioni() {
      this.$store.dispatch('associa/loadassociazioni');
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/associa/attivitaragazzo/Index.vue?vue&type=template&id=876dfeb4&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/associa/attivitaragazzo/Index.vue?vue&type=template&id=876dfeb4&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Associa Attività - Ragazzo")
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
              items: _vm.listaattivita,
              "item-text": "name",
              "item-value": "id",
              label: "Attività",
              dark: ""
            },
            model: {
              value: _vm.form.attivita,
              callback: function($$v) {
                _vm.$set(_vm.form, "attivita", $$v)
              },
              expression: "form.attivita"
            }
          }),
          _vm._v(" "),
          _c("v-autocomplete", {
            attrs: {
              disabled: _vm.isUpdating,
              items: _vm.people,
              filled: "",
              chips: "",
              color: "blue-grey lighten-2",
              label: "Ragazzi",
              "item-text": "name",
              "item-value": "id",
              multiple: ""
            },
            scopedSlots: _vm._u([
              {
                key: "selection",
                fn: function(data) {
                  return [
                    _c(
                      "v-chip",
                      _vm._b(
                        {
                          attrs: { "input-value": data.selected, close: "" },
                          on: {
                            click: data.select,
                            "click:close": function($event) {
                              return _vm.remove(data.item)
                            }
                          }
                        },
                        "v-chip",
                        data.attrs,
                        false
                      ),
                      [
                        _c(
                          "v-avatar",
                          { attrs: { left: "" } },
                          [_c("v-img", { attrs: { src: data.item.avatar } })],
                          1
                        ),
                        _vm._v(
                          "\n                    " +
                            _vm._s(data.item.name) +
                            "\n                "
                        )
                      ],
                      1
                    )
                  ]
                }
              },
              {
                key: "item",
                fn: function(data) {
                  return [
                    typeof data.item !== "object"
                      ? [
                          _c("v-list-item-content", {
                            domProps: { textContent: _vm._s(data.item) }
                          })
                        ]
                      : [
                          _c("v-list-item-avatar", [
                            _c("img", { attrs: { src: data.item.avatar } })
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", {
                                domProps: { innerHTML: _vm._s(data.item.name) }
                              }),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", {
                                domProps: { innerHTML: _vm._s(data.item.group) }
                              })
                            ],
                            1
                          )
                        ]
                  ]
                }
              }
            ]),
            model: {
              value: _vm.form.ragazzi,
              callback: function($$v) {
                _vm.$set(_vm.form, "ragazzi", $$v)
              },
              expression: "form.ragazzi"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/associa/attivitaragazzo/ListaAssociazioni.vue?vue&type=template&id=00053af6&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/associa/attivitaragazzo/ListaAssociazioni.vue?vue&type=template&id=00053af6&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
                  _vm._v("\n                Attivita'\n            ")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left" }, [
                  _vm._v("\n                Ragazzo\n            ")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left" })
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.associazioni, function(item, index) {
                return _c("tr", { key: item.id }, [
                  _c("td", [_vm._v(_vm._s(item.attivita))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.ragazzo))]),
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

/***/ "./resources/js/pages/associa/attivitaragazzo/Index.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/associa/attivitaragazzo/Index.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_876dfeb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=876dfeb4&scoped=true& */ "./resources/js/pages/associa/attivitaragazzo/Index.vue?vue&type=template&id=876dfeb4&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/associa/attivitaragazzo/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_876dfeb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_876dfeb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "876dfeb4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/associa/attivitaragazzo/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/associa/attivitaragazzo/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/associa/attivitaragazzo/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/associa/attivitaragazzo/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/associa/attivitaragazzo/Index.vue?vue&type=template&id=876dfeb4&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/associa/attivitaragazzo/Index.vue?vue&type=template&id=876dfeb4&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_876dfeb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=876dfeb4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/associa/attivitaragazzo/Index.vue?vue&type=template&id=876dfeb4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_876dfeb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_876dfeb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/associa/attivitaragazzo/ListaAssociazioni.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/associa/attivitaragazzo/ListaAssociazioni.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListaAssociazioni_vue_vue_type_template_id_00053af6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListaAssociazioni.vue?vue&type=template&id=00053af6&scoped=true& */ "./resources/js/pages/associa/attivitaragazzo/ListaAssociazioni.vue?vue&type=template&id=00053af6&scoped=true&");
/* harmony import */ var _ListaAssociazioni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListaAssociazioni.vue?vue&type=script&lang=js& */ "./resources/js/pages/associa/attivitaragazzo/ListaAssociazioni.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListaAssociazioni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListaAssociazioni_vue_vue_type_template_id_00053af6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListaAssociazioni_vue_vue_type_template_id_00053af6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "00053af6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/associa/attivitaragazzo/ListaAssociazioni.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/associa/attivitaragazzo/ListaAssociazioni.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/associa/attivitaragazzo/ListaAssociazioni.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaAssociazioni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListaAssociazioni.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/associa/attivitaragazzo/ListaAssociazioni.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaAssociazioni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/associa/attivitaragazzo/ListaAssociazioni.vue?vue&type=template&id=00053af6&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/pages/associa/attivitaragazzo/ListaAssociazioni.vue?vue&type=template&id=00053af6&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaAssociazioni_vue_vue_type_template_id_00053af6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListaAssociazioni.vue?vue&type=template&id=00053af6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/associa/attivitaragazzo/ListaAssociazioni.vue?vue&type=template&id=00053af6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaAssociazioni_vue_vue_type_template_id_00053af6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaAssociazioni_vue_vue_type_template_id_00053af6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);