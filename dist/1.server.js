exports.ids = [1];
exports.modules = {

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Item_vue__ = __webpack_require__(27);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1c4665c3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Item_vue__ = __webpack_require__(32);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "5a5dc87a"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1c4665c3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Item.vue"

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_modules_foo__ = __webpack_require__(31);
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  asyncData: function asyncData(_ref) {
    var store = _ref.store,
        route = _ref.route;

    store.registerModule('foo', __WEBPACK_IMPORTED_MODULE_0__store_modules_foo__["a" /* default */]);
    return Promise.all([
    // 触发 action 后，会返回 Promise
    store.dispatch('fetchItem', route.params.id), store.dispatch('foo/inc')]);
  },
  destroyed: function destroyed() {
    this.$store.unregisterModule('foo');
  },

  computed: {
    // 从 store 的 state 对象中的获取 item。
    item: function item() {
      return this.$store.state.items[this.$route.params.id];
    },
    fooCount: function fooCount() {
      return this.$store.state.foo.count;
    }
  }
});

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	namespaced: true,
	//重要信息: state 必须是个函数
	//因此可以创建多个实例化该模块
	state: function state() {
		return {
			count: 0
		};
	},
	actions: {
		inc: function inc(_ref) {
			var commit = _ref.commit;
			return commit('inc');
		}
	},
	mutations: {
		inc: function inc(state) {
			return state.count++;
		}
	}
});

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._ssrNode(
      _vm._ssrEscape(_vm._s(_vm.item.text) + " ---- " + _vm._s(_vm.fooCount))
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

};;
//# sourceMappingURL=1.server.js.map