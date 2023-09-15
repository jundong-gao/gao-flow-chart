'use strict';function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}//
//
//
//
//
//
//
//
//
//

var script$1 = {
  props: {
    item: Object
  },
  computed: {
    flowItemStyle: function flowItemStyle() {
      var _item$item_info;
      var item = this.item;
      var backgroundImage = "url(".concat(item === null || item === void 0 || (_item$item_info = item.item_info) === null || _item$item_info === void 0 ? void 0 : _item$item_info.icon, ")");
      if (item.item_info.type == 'switch') {
        var _item$item_info2;
        if (item.item_info.switch_status) backgroundImage = "url(".concat(item === null || item === void 0 || (_item$item_info2 = item.item_info) === null || _item$item_info2 === void 0 ? void 0 : _item$item_info2.active_icon, ")");
      }
      return {
        backgroundImage: backgroundImage
      };
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "flow-item",
    style: _vm.flowItemStyle
  }, [_vm._ssrNode(_vm.item.item_info && _vm.item.item_info.type == 'text' ? "<div class=\"text-content flex-jac\" data-v-5906232a><div class=\"text-content-text\" data-v-5906232a>" + _vm._ssrEscape(_vm._s(_vm.item.item_info && _vm.item.item_info.content)) + "</div></div>" : "<!---->")]);
};
var __vue_staticRenderFns__$1 = [];

/* style */
var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-5906232a_0", {
    source: ".flow-item[data-v-5906232a]{position:absolute;width:100px;height:100px;user-select:none;background-size:100% 100%;background-repeat:no-repeat}.flow-item-icon[data-v-5906232a]{width:100%;height:100%;display:block;object-fit:contain}.flow-item .text-content[data-v-5906232a]{width:100%;height:100%;padding:20px;box-sizing:border-box}.flow-item .text-content-input[data-v-5906232a]{background-color:#fff;z-index:9999999;text-align:center}.flow-item .text-content-text[data-v-5906232a]{font-size:14px;color:#333;text-align:center}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$1 = "data-v-5906232a";
/* module identifier */
var __vue_module_identifier__$1 = "data-v-5906232a";
/* functional template */
var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);
var FlowItem = __vue_component__$1;var script = {
  name: 'GaoFlowChart',
  // vue component name
  components: {
    FlowItem: FlowItem
  },
  props: {
    options: {
      type: Object,
      default: function _default() {
        return {
          nodes: [],
          lines: [],
          detail: {}
        };
      }
    }
  },
  data: function data() {
    return {
      djinstance: null,
      // all_nodes: json.nodes,
      // all_lines: json.lines,
      id: "gao-flow-chart-".concat(parseInt(Math.random() * 100 / 4 * 1000 * Math.random())),
      zoom: 1
    };
  },
  computed: {
    detailStyle: function detailStyle() {
      var _this$options, _this$options$detail, _this$options$detail2;
      return _objectSpread2(_objectSpread2({}, (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.detail), {}, {
        width: "".concat((_this$options$detail = this.options.detail) === null || _this$options$detail === void 0 ? void 0 : _this$options$detail.width, "px"),
        height: "".concat((_this$options$detail2 = this.options.detail) === null || _this$options$detail2 === void 0 ? void 0 : _this$options$detail2.height, "px"),
        zoom: this.zoom
      });
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function () {
      var _this$options2;
      var dom = document.getElementById(_this.id);
      _this.zoom = dom.parentNode.clientWidth / (((_this$options2 = _this.options) === null || _this$options2 === void 0 || (_this$options2 = _this$options2.style) === null || _this$options2 === void 0 ? void 0 : _this$options2.width) || dom.parentNode.clientWidth);
      _this.init();
    });
  },
  methods: {
    init: function init() {
      var _this2 = this;
      jsPlumb.ready(function () {
        _this2.djinstance = jsPlumb.getInstance({
          Container: "flow-build",
          DragOptions: {
            cursor: "pointer",
            zIndex: 26
          },
          ConnectionsDetachable: false,
          Connector: "Straight",
          PaintStyle: {
            strokeWidth: 1,
            stroke: "#333",
            outlineStroke: 'none',
            outlineWidth: 50
          }
        });
        // 初始化完成 渲染节点
        _this2.setNode();
      });
    },
    // 新增端点
    addEndpoints: function addEndpoints(toId, sourceAnchors, targetAnchors) {
      var cus_endpoints = {
        paintStyle: {
          fill: "",
          stroke: '',
          strokeWidth: .5,
          radius: 0
        }
      };

      // /源节点
      if (sourceAnchors.length) {
        for (var i = 0; i < sourceAnchors.length; i++) {
          var sourceUUID = toId + sourceAnchors[i];
          this.djinstance.addEndpoint(toId, cus_endpoints, {
            anchor: sourceAnchors[i],
            uuid: sourceUUID
          });
        }
      }

      // /目标节点
      if (targetAnchors.length) {
        for (var j = 0; j < targetAnchors.length; j++) {
          var targetUUID = toId + targetAnchors[j];
          this.djinstance.addEndpoint(toId, cus_endpoints, {
            anchor: targetAnchors[j],
            uuid: targetUUID
          });
        }
      }
    },
    setNode: function setNode() {
      var _this3 = this;
      // 渲染元素
      this.options.nodes.forEach(function (item) {
        _this3.addEndpoints(item.id, ["RightMiddle", "BottomCenter"], ["LeftMiddle", "TopCenter"]);
      });

      // 渲染线条
      this.options.lines.forEach(function (item) {
        var newconne = _this3.djinstance.connect(_objectSpread2({}, item));
        if (!newconne) return console.warn('连线失败', newconne);
        // id替换成新的
        item.id = newconne.id;
      });
    }
  }
};/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "gao-flow-chart",
    attrs: {
      "id": _vm.id
    }
  }, [_vm._ssrNode("<div id=\"flow-build\" class=\"flow-build\"" + _vm._ssrStyle(null, _vm.detailStyle, null) + " data-v-4050d420>", "</div>", _vm._l(_vm.options.nodes, function (item) {
    return _c('FlowItem', {
      key: item.id,
      staticClass: "flow-build-item",
      style: item.style,
      attrs: {
        "item": item,
        "id": item.id
      }
    });
  }), 1)]);
};
var __vue_staticRenderFns__ = [];

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-4050d420_0", {
    source: "",
    map: undefined,
    media: undefined
  }), inject("data-v-4050d420_1", {
    source: ".gao-flow-chart[data-v-4050d420]{width:100%;height:100%}.flow-build[data-v-4050d420]{position:relative;width:100%;height:100%}.flow-build-item[data-v-4050d420]{position:absolute;width:100px;height:100px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__ = "data-v-4050d420";
/* module identifier */
var __vue_module_identifier__ = "data-v-4050d420";
/* functional template */
var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);
var component$1 = __vue_component__;// Import vue component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = component$1;

  // Attach install function executed by Vue.use()
  installable.install = function (Vue) {
    Vue.component('GaoFlowChart', installable);
  };
  return installable;
})();

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default':component});// Attach named exports directly to component. IIFE/CJS will
// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)
Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    exportName = _ref2[0],
    exported = _ref2[1];
  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;