const { defineComponent, ref, computed, onMounted, onUnmounted, openBlock, createBlock, withCtx, createCommentVNode, createElementVNode, toDisplayString } = globalThis.Vue
import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { d as dayuts } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/common/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/common/use&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/utssdk/interface&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TimeDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const currentFullTime = ref("");
    let timerId = 0;
    const offsetDays = ref(0);
    function updateClock() {
      currentFullTime.value = dayuts().format("YYYY-MM-DD HH:mm:ss.SSS dddd");
    }
    function adjustOffset(days) {
      offsetDays.value += days;
    }
    const targetOffsetTime = computed(() => {
      return dayuts().add(offsetDays.value, "day").format("YYYY-MM-DD HH:mm:ss");
    });
    const startOfMonth = computed(() => {
      return dayuts().startOf("month").format("YYYY-MM-DD");
    });
    const endOfMonth = computed(() => {
      return dayuts().endOf("month").format("YYYY-MM-DD");
    });
    const isLeapYear = computed(() => {
      return dayuts().isLeapYear();
    });
    const daysToYearEnd = computed(() => {
      const endOfYear = dayuts().endOf("year");
      const diffVal = endOfYear.diff(dayuts(), "day");
      return Math.ceil(diffVal);
    });
    onMounted(() => {
      updateClock();
      timerId = setInterval(() => {
        updateClock();
      }, 100);
    });
    onUnmounted(() => {
      if (timerId != 0) {
        clearInterval(timerId);
      }
    });
    const __returned__ = { currentFullTime, get timerId() {
      return timerId;
    }, set timerId(v) {
      timerId = v;
    }, offsetDays, updateClock, adjustOffset, targetOffsetTime, startOfMonth, endOfMonth, isLeapYear, daysToYearEnd, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__e0edff_": { "": { "backgroundImage": "none", "backgroundColor": "#e0edff" } }, "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "border-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-top-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0" } }, "border-top-style-solid": { "": { "borderTopStyle": "solid" } }, "border-top-width-1px": { "": { "borderTopWidth": 1 } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex": { "": { "display": "flex" } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "font-medium": { "": { "fontWeight": 500 } }, "h-36px": { "": { "height": 36 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "justify-center": { "": { "justifyContent": "center" } }, "mb-12px": { "": { "marginBottom": 12 } }, "mb-16px": { "": { "marginBottom": 16 } }, "mb-4px": { "": { "marginBottom": 4 } }, "mb-6px": { "": { "marginBottom": 6 } }, "mb-8px": { "": { "marginBottom": 8 } }, "mr-8px": { "": { "marginRight": 8 } }, "mt-8px": { "": { "marginTop": 8 } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "pt-8px": { "": { "paddingTop": 8 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__1e293b_": { "": { "color": "#1e293b" } }, "text-__334155_": { "": { "color": "#334155" } }, "text-__3b82f6_": { "": { "color": "#3b82f6" } }, "text-__64748b_": { "": { "color": "#64748b" } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-__f43f5e_": { "": { "color": "#f43f5e" } }, "text-_var_--theme-color__37c2bc__": { "": { "color": "var(--theme-color,#37c2bc)" } }, "text-12px": { "": { "fontSize": 12 } }, "text-13px": { "": { "fontSize": 13 } }, "text-14px": { "": { "fontSize": 14 } }, "text-16px": { "": { "fontSize": 16 } }, "text-24px": { "": { "fontSize": 24 } }, "w-full": { "": { "width": "100%" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Card"], { title: "时间日期操作 (lime-dayuts)" }, {
    default: withCtx(() => [
      createCommentVNode(" 实时时间与自定义格式化展示 "),
      createElementVNode("view", { class: "bg-__f8fafc_ rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        createElementVNode("text", { class: "text-13px font-bold text-__1e293b_ mb-8px" }, "实时高精度时钟 (更新于每一百毫秒)"),
        createElementVNode(
          "text",
          {
            class: "text-24px font-bold text-_var_--theme-color__37c2bc__ mb-6px",
            style: { "font-family": "monospace" }
          },
          toDisplayString($setup.currentFullTime),
          1
          /* TEXT */
        ),
        createElementVNode("text", { class: "text-12px text-__94a3b8_" }, " 格式模板: YYYY-MM-DD HH:mm:ss.SSS dddd ")
      ]),
      createCommentVNode(" 日期加减偏移计算 "),
      createElementVNode("view", { class: "bg-__f8fafc_ rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        createElementVNode("text", { class: "text-13px font-bold text-__1e293b_ mb-12px" }, "日期偏移操作"),
        createElementVNode("view", { class: "flex-row items-center justify-between mb-12px" }, [
          createElementVNode("text", { class: "text-14px text-__64748b_" }, "当前偏移天数:"),
          createElementVNode(
            "text",
            { class: "text-16px font-bold text-__334155_" },
            toDisplayString($setup.offsetDays > 0 ? "+" : "") + toDisplayString($setup.offsetDays) + " 天",
            1
            /* TEXT */
          )
        ]),
        createElementVNode("view", { class: "flex-row justify-between mb-12px" }, [
          createElementVNode("view", { class: "flex-1 mr-8px" }, [
            createElementVNode("view", {
              class: "w-full h-36px rounded-8px bg-__e0edff_ flex flex-row items-center justify-center",
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.adjustOffset(-7))
            }, [
              createElementVNode("text", { class: "text-__3b82f6_ text-12px font-bold" }, "-7 天")
            ])
          ]),
          createElementVNode("view", { class: "flex-1 mr-8px" }, [
            createElementVNode("view", {
              class: "w-full h-36px rounded-8px bg-__e0edff_ flex flex-row items-center justify-center",
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.adjustOffset(-1))
            }, [
              createElementVNode("text", { class: "text-__3b82f6_ text-12px font-bold" }, "-1 天")
            ])
          ]),
          createElementVNode("view", { class: "flex-1 mr-8px" }, [
            createElementVNode("view", {
              class: "w-full h-36px rounded-8px bg-__e0edff_ flex flex-row items-center justify-center",
              onClick: _cache[2] || (_cache[2] = ($event) => $setup.adjustOffset(1))
            }, [
              createElementVNode("text", { class: "text-__3b82f6_ text-12px font-bold" }, "+1 天")
            ])
          ]),
          createElementVNode("view", { class: "flex-1" }, [
            createElementVNode("view", {
              class: "w-full h-36px rounded-8px bg-__e0edff_ flex flex-row items-center justify-center",
              onClick: _cache[3] || (_cache[3] = ($event) => $setup.adjustOffset(7))
            }, [
              createElementVNode("text", { class: "text-__3b82f6_ text-12px font-bold" }, "+7 天")
            ])
          ])
        ]),
        createElementVNode("view", { class: "border-top-width-1px border-top-style-solid border-top-color-__e2e8f0_ pt-8px mt-8px" }, [
          createElementVNode("text", { class: "text-12px text-__94a3b8_ mb-4px" }, "计算得到的目标时间:"),
          createElementVNode(
            "text",
            { class: "text-14px font-bold text-__334155_" },
            toDisplayString($setup.targetOffsetTime),
            1
            /* TEXT */
          )
        ])
      ]),
      createCommentVNode(" 快捷日期边界与比较计算 "),
      createElementVNode("view", { class: "bg-__f8fafc_ rounded-12px p-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        createElementVNode("text", { class: "text-13px font-bold text-__1e293b_ mb-12px" }, "常用日期边界与区间计算"),
        createElementVNode("view", { class: "flex-row justify-between mb-8px" }, [
          createElementVNode("text", { class: "text-14px text-__64748b_" }, "本月第一天"),
          createElementVNode(
            "text",
            { class: "text-14px font-medium text-__334155_" },
            toDisplayString($setup.startOfMonth),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("view", { class: "flex-row justify-between mb-8px" }, [
          createElementVNode("text", { class: "text-14px text-__64748b_" }, "本月最后一天"),
          createElementVNode(
            "text",
            { class: "text-14px font-medium text-__334155_" },
            toDisplayString($setup.endOfMonth),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("view", { class: "flex-row justify-between mb-8px" }, [
          createElementVNode("text", { class: "text-14px text-__64748b_" }, "今年天数"),
          createElementVNode(
            "text",
            { class: "text-14px font-medium text-__334155_" },
            toDisplayString($setup.isLeapYear ? "366天 (闰年)" : "365天 (平年)"),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("view", { class: "flex-row justify-between" }, [
          createElementVNode("text", { class: "text-14px text-__64748b_" }, "距离今年底倒计时"),
          createElementVNode(
            "text",
            { class: "text-14px font-bold text-__f43f5e_" },
            toDisplayString($setup.daysToYearEnd) + " 天",
            1
            /* TEXT */
          )
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const TimeDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/TimeDemoCard.uvue"]]);
export {
  TimeDemoCard as T
};
//# sourceMappingURL=TimeDemoCard.js.map
