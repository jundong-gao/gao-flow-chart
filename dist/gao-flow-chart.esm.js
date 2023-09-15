//
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
    flowItemStyle() {
      let item = this.item;
      let backgroundImage = `url(${item?.item_info?.icon})`;
      if (item.item_info.type == 'switch') {
        if (item.item_info.switch_status) backgroundImage = `url(${item?.item_info?.active_icon})`;
      }
      return {
        backgroundImage
      };
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "flow-item",
    style: _vm.flowItemStyle
  }, [_vm.item.item_info && _vm.item.item_info.type == 'text' ? _c('div', {
    staticClass: "text-content flex-jac"
  }, [_c('div', {
    staticClass: "text-content-text"
  }, [_vm._v(_vm._s(_vm.item.item_info && _vm.item.item_info.content))])]) : _vm._e()]);
};
var __vue_staticRenderFns__$1 = [];

/* style */
const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-5906232a_0", {
    source: ".flow-item[data-v-5906232a]{position:absolute;width:100px;height:100px;user-select:none;background-size:100% 100%;background-repeat:no-repeat}.flow-item-icon[data-v-5906232a]{width:100%;height:100%;display:block;object-fit:contain}.flow-item .text-content[data-v-5906232a]{width:100%;height:100%;padding:20px;box-sizing:border-box}.flow-item .text-content-input[data-v-5906232a]{background-color:#fff;z-index:9999999;text-align:center}.flow-item .text-content-text[data-v-5906232a]{font-size:14px;color:#333;text-align:center}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
const __vue_scope_id__$1 = "data-v-5906232a";
/* module identifier */
const __vue_module_identifier__$1 = undefined;
/* functional template */
const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);
var FlowItem = __vue_component__$1;

//
var script = {
  name: 'GaoFlowChart',
  // vue component name
  components: {
    FlowItem
  },
  props: {
    options: {
      type: Object,
      default: () => ({
        nodes: [],
        lines: [],
        detail: {}
      })
    }
  },
  data() {
    return {
      djinstance: null,
      // all_nodes: json.nodes,
      // all_lines: json.lines,
      id: `gao-flow-chart-${parseInt(Math.random() * 100 / 4 * 1000 * Math.random())}`,
      zoom: 1
    };
  },
  computed: {
    detailStyle() {
      return {
        ...this.options?.detail,
        width: `${this.options.detail?.width}px`,
        height: `${this.options.detail?.height}px`,
        zoom: this.zoom
      };
    }
  },
  mounted() {
    this.$nextTick(() => {
      let dom = document.getElementById(this.id);
      this.zoom = dom.parentNode.clientWidth / (this.options?.detail?.width || dom.parentNode.clientWidth);
      this.init();
    });
  },
  methods: {
    init() {
      jsPlumb.ready(() => {
        this.djinstance = jsPlumb.getInstance({
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
        this.setNode();
      });
    },
    // 新增端点
    addEndpoints(toId, sourceAnchors, targetAnchors) {
      let cus_endpoints = {
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
    setNode() {
      // 渲染元素
      this.options.nodes.forEach(item => {
        this.addEndpoints(item.id, ["RightMiddle", "BottomCenter"], ["LeftMiddle", "TopCenter"]);
      });

      // 渲染线条
      this.options.lines.forEach(item => {
        let newconne = this.djinstance.connect({
          ...item
        });
        if (!newconne) return console.warn('连线失败', newconne);
        // id替换成新的
        item.id = newconne.id;
      });
    }
  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', {
    staticClass: "gao-flow-chart",
    attrs: {
      "id": _vm.id
    }
  }, [_c('div', {
    staticClass: "flow-build",
    style: _vm.detailStyle,
    attrs: {
      "id": "flow-build"
    }
  }, _vm._l(_vm.options.nodes, function (item) {
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
const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-e50551f8_0", {
    source: "",
    map: undefined,
    media: undefined
  }), inject("data-v-e50551f8_1", {
    source: ".gao-flow-chart[data-v-e50551f8]{width:100%;height:100%}.flow-build[data-v-e50551f8]{position:relative;width:100%;height:100%}.flow-build-item[data-v-e50551f8]{position:absolute;width:100px;height:100px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
const __vue_scope_id__ = "data-v-e50551f8";
/* module identifier */
const __vue_module_identifier__ = undefined;
/* functional template */
const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);
var component = __vue_component__;

// Import vue component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = component;

  // Attach install function executed by Vue.use()
  installable.install = Vue => {
    Vue.component('GaoFlowChart', installable);
  };
  return installable;
})();

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export { entry_esm as default };
