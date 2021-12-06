"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_view-product_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/view-product/checkout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/view-product/checkout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: ""
      },
      purchaseDiag: false,
      isValid: true
    };
  },
  methods: {
    viewItem: function viewItem() {
      this.purchaseDiag = true;
    },
    closeDiag: function closeDiag() {
      this.purchaseDiag = false;
      this.$refs.form.reset();
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/view-product/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/view-product/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.vue */ "./resources/js/components/view-product/checkout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    purchase: _checkout_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      product_details: {},
      loading: true
    };
  },
  methods: {
    read: function read() {
      var _this = this;

      axios.get('/api/items/' + this.$route.params.id).then(function (data) {
        _this.product_details = data.data;
        _this.loading = false;
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.read();
  }
});

/***/ }),

/***/ "./resources/js/components/view-product/checkout.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/view-product/checkout.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkout_vue_vue_type_template_id_6fc43053___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.vue?vue&type=template&id=6fc43053& */ "./resources/js/components/view-product/checkout.vue?vue&type=template&id=6fc43053&");
/* harmony import */ var _checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.vue?vue&type=script&lang=js& */ "./resources/js/components/view-product/checkout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkout_vue_vue_type_template_id_6fc43053___WEBPACK_IMPORTED_MODULE_0__.render,
  _checkout_vue_vue_type_template_id_6fc43053___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/view-product/checkout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/view-product/index.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/view-product/index.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_21819b15___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=21819b15& */ "./resources/js/components/view-product/index.vue?vue&type=template&id=21819b15&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/view-product/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_21819b15___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_21819b15___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/view-product/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/view-product/checkout.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/view-product/checkout.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/view-product/checkout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/view-product/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/view-product/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/view-product/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/view-product/checkout.vue?vue&type=template&id=6fc43053&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/view-product/checkout.vue?vue&type=template&id=6fc43053& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_6fc43053___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_6fc43053___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_6fc43053___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./checkout.vue?vue&type=template&id=6fc43053& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/view-product/checkout.vue?vue&type=template&id=6fc43053&");


/***/ }),

/***/ "./resources/js/components/view-product/index.vue?vue&type=template&id=21819b15&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/view-product/index.vue?vue&type=template&id=21819b15& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_21819b15___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_21819b15___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_21819b15___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=21819b15& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/view-product/index.vue?vue&type=template&id=21819b15&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/view-product/checkout.vue?vue&type=template&id=6fc43053&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/view-product/checkout.vue?vue&type=template&id=6fc43053& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { "max-width": "600px", persistent: "" },
      scopedSlots: _vm._u([
        {
          key: "activator",
          fn: function (ref) {
            var on = ref.on
            var attrs = ref.attrs
            return [
              _c(
                "v-btn",
                _vm._g(
                  _vm._b(
                    {
                      staticClass: "float-right mt-2",
                      attrs: { color: "#000", dark: "" },
                      on: { click: _vm.viewItem },
                    },
                    "v-btn",
                    attrs,
                    false
                  ),
                  on
                ),
                [_vm._v("\n            Buy Now\n            ")]
              ),
            ]
          },
        },
      ]),
      model: {
        value: _vm.purchaseDiag,
        callback: function ($$v) {
          _vm.purchaseDiag = $$v
        },
        expression: "purchaseDiag",
      },
    },
    [
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { color: "#000", dark: "" } },
            [
              _c("span", { staticClass: "headline" }, [
                _vm._v("Checkout Item"),
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { text: "" }, on: { click: _vm.closeDiag } },
                [_c("v-icon", [_vm._v("mdi-close")])],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-form",
            {
              ref: "form",
              attrs: { "lazy-validation": "" },
              model: {
                value: _vm.isValid,
                callback: function ($$v) {
                  _vm.isValid = $$v
                },
                expression: "isValid",
              },
            },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", xs: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  counter: 100,
                                  label: "Your Name*",
                                  color: "#000",
                                },
                                model: {
                                  value: _vm.form.name,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "name", $$v)
                                  },
                                  expression: "form.name",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", xs: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  counter: 100,
                                  label: "Address*",
                                  color: "#000",
                                },
                                model: {
                                  value: _vm.form.address,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "address", $$v)
                                  },
                                  expression: "form.address",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "6", xs: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  counter: 30,
                                  label: "City*",
                                  color: "#000",
                                },
                                model: {
                                  value: _vm.form.city,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "city", $$v)
                                  },
                                  expression: "form.city",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "6", xs: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  counter: 20,
                                  label: "State*",
                                  color: "#000",
                                },
                                model: {
                                  value: _vm.form.state,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "state", $$v)
                                  },
                                  expression: "form.state",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "6", xs: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  counter: 6,
                                  label: "ZIP Code*",
                                  color: "#000",
                                },
                                model: {
                                  value: _vm.form.zip,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "zip", $$v)
                                  },
                                  expression: "form.zip",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "6", xs: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Phone Number*",
                                  type: "number",
                                  color: "#000",
                                },
                                model: {
                                  value: _vm.form.phone,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "phone", $$v)
                                  },
                                  expression: "form.phone",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { color: "#FFD700" } },
                    [
                      _c("v-icon", [_vm._v("mdi-paypal")]),
                      _vm._v(
                        "\n                    Pay With PayPal\n                "
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/view-product/index.vue?vue&type=template&id=21819b15&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/view-product/index.vue?vue&type=template&id=21819b15& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-container", { attrs: { fluid: "" } }, [
    _vm.loading
      ? _c(
          "div",
          { staticStyle: { height: "calc(100vh - 250px)" } },
          [
            _c(
              "v-row",
              {
                staticClass: "fill-height",
                attrs: { "align-content": "center", justify: "center" },
              },
              [
                _c(
                  "v-col",
                  {
                    staticClass: "subtitle-1 text-center",
                    attrs: { cols: "12" },
                  },
                  [_vm._v("\n                Please wait...\n            ")]
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  { attrs: { cols: "6" } },
                  [
                    _c("v-progress-linear", {
                      attrs: {
                        color: "black",
                        indeterminate: "",
                        rounded: "",
                        height: "6",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        )
      : _c(
          "div",
          [
            _c(
              "v-row",
              { attrs: { justify: "center" } },
              [
                _c(
                  "v-col",
                  { attrs: { cols: "8" } },
                  [
                    _c(
                      "v-card",
                      [
                        _c(
                          "v-card-title",
                          { staticClass: "justify-content-center" },
                          [_c("h1", [_vm._v(_vm._s(_vm.product_details.name))])]
                        ),
                        _vm._v(" "),
                        _c("v-img", {
                          staticClass: "mx-auto",
                          attrs: {
                            src: _vm.product_details.image,
                            "max-height": "350",
                            "max-width": "350",
                          },
                        }),
                        _vm._v(" "),
                        _c("v-card-text", { staticClass: "text-center" }, [
                          _c("h5", [
                            _vm._v(_vm._s(_vm.product_details.description)),
                          ]),
                          _vm._v(" "),
                          _c("h5", [
                            _vm._v("Price is at "),
                            _c("b", { staticClass: "text-success" }, [
                              _vm._v("$" + _vm._s(_vm.product_details.price)),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-card-actions",
                          { staticClass: "justify-content-center" },
                          [_c("purchase")],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);