import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { d as dayuts } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/common/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/common/use&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/utssdk/interface&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, onMounted, onUnmounted, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
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
const _style_0 = {"wtu-1oju4iv-0":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-115tbw1-1":{"":{"color":"#1e293b"}},"wtu-i1z22m-2":{"":{"color":"var(--theme-color)"}},"wtu-1bwkk92-3":{"":{"color":"#94a3b8"}},"wtu-av7f06-4":{"":{"flexDirection":"row"}},"wtu-484t6y-5":{"":{"alignItems":"center"}},"wtu-avfu85-6":{"":{"justifyContent":"space-between"}},"wtu-v9onga-7":{"":{"color":"#64748b"}},"wtu-lavu4m-8":{"":{"color":"#334155"}},"wtu-1qpd44h-9":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-173zvjd-a":{"":{"width":"100%"}},"wtu-16xqvqb-b":{"":{"backgroundColor":"#e0edff"}},"wtu-1jd3mn7-c":{"":{"display":"flex"}},"wtu-7vso4e-d":{"":{"justifyContent":"center"}},"wtu-ee1xhe-e":{"":{"color":"#3b82f6"}},"wtu-quefir-f":{"":{"--tw-font-weight":"var(--font-weight-medium, 500)","fontWeight":500}},"wtu-kluce4-g":{"":{"color":"#f43f5e"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "时间日期操作 (lime-dayuts)" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("text", { class: "text-13px wtu-1oju4iv-0 wtu-115tbw1-1 mb-8px" }, "实时高精度时钟 (更新于每一百毫秒)"),
        _createElementVNode(
          "text",
          {
            class: "text-24px wtu-1oju4iv-0 wtu-i1z22m-2 mb-6px",
            style: { "font-family": "monospace" }
          },
          _toDisplayString($setup.currentFullTime),
          1
          /* TEXT */
        ),
        _createElementVNode("text", { class: "text-12px wtu-1bwkk92-3" }, " 格式模板: YYYY-MM-DD HH:mm:ss.SSS dddd ")
      ]),
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("text", { class: "text-13px wtu-1oju4iv-0 wtu-115tbw1-1 mb-12px" }, "日期偏移操作"),
        _createElementVNode("view", { class: "wtu-av7f06-4 wtu-484t6y-5 wtu-avfu85-6 mb-12px" }, [
          _createElementVNode("text", { class: "text-14px wtu-v9onga-7" }, "当前偏移天数:"),
          _createElementVNode(
            "text",
            { class: "text-16px wtu-1oju4iv-0 wtu-lavu4m-8" },
            _toDisplayString($setup.offsetDays > 0 ? "+" : "") + _toDisplayString($setup.offsetDays) + " 天",
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-av7f06-4 wtu-avfu85-6 mb-12px" }, [
          _createElementVNode("view", { class: "wtu-1qpd44h-9 mr-8px" }, [
            _createElementVNode("view", {
              class: "wtu-173zvjd-a h-36px rounded-8px wtu-16xqvqb-b wtu-1jd3mn7-c wtu-av7f06-4 wtu-484t6y-5 wtu-7vso4e-d",
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.adjustOffset(-7))
            }, [
              _createElementVNode("text", { class: "wtu-ee1xhe-e text-12px wtu-1oju4iv-0" }, "-7 天")
            ])
          ]),
          _createElementVNode("view", { class: "wtu-1qpd44h-9 mr-8px" }, [
            _createElementVNode("view", {
              class: "wtu-173zvjd-a h-36px rounded-8px wtu-16xqvqb-b wtu-1jd3mn7-c wtu-av7f06-4 wtu-484t6y-5 wtu-7vso4e-d",
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.adjustOffset(-1))
            }, [
              _createElementVNode("text", { class: "wtu-ee1xhe-e text-12px wtu-1oju4iv-0" }, "-1 天")
            ])
          ]),
          _createElementVNode("view", { class: "wtu-1qpd44h-9 mr-8px" }, [
            _createElementVNode("view", {
              class: "wtu-173zvjd-a h-36px rounded-8px wtu-16xqvqb-b wtu-1jd3mn7-c wtu-av7f06-4 wtu-484t6y-5 wtu-7vso4e-d",
              onClick: _cache[2] || (_cache[2] = ($event) => $setup.adjustOffset(1))
            }, [
              _createElementVNode("text", { class: "wtu-ee1xhe-e text-12px wtu-1oju4iv-0" }, "+1 天")
            ])
          ]),
          _createElementVNode("view", { class: "wtu-1qpd44h-9" }, [
            _createElementVNode("view", {
              class: "wtu-173zvjd-a h-36px rounded-8px wtu-16xqvqb-b wtu-1jd3mn7-c wtu-av7f06-4 wtu-484t6y-5 wtu-7vso4e-d",
              onClick: _cache[3] || (_cache[3] = ($event) => $setup.adjustOffset(7))
            }, [
              _createElementVNode("text", { class: "wtu-ee1xhe-e text-12px wtu-1oju4iv-0" }, "+7 天")
            ])
          ])
        ]),
        _createElementVNode("view", { class: "border-top-width-1px border-top-style-solid border-top-color-[#e2e8f0] pt-8px mt-8px" }, [
          _createElementVNode("text", { class: "text-12px wtu-1bwkk92-3 mb-4px" }, "计算得到的目标时间:"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-1oju4iv-0 wtu-lavu4m-8" },
            _toDisplayString($setup.targetOffsetTime),
            1
            /* TEXT */
          )
        ])
      ]),
      _createElementVNode("view", { class: "rounded-12px p-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("text", { class: "text-13px wtu-1oju4iv-0 wtu-115tbw1-1 mb-12px" }, "常用日期边界与区间计算"),
        _createElementVNode("view", { class: "wtu-av7f06-4 wtu-avfu85-6 mb-8px" }, [
          _createElementVNode("text", { class: "text-14px wtu-v9onga-7" }, "本月第一天"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-quefir-f wtu-lavu4m-8" },
            _toDisplayString($setup.startOfMonth),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-av7f06-4 wtu-avfu85-6 mb-8px" }, [
          _createElementVNode("text", { class: "text-14px wtu-v9onga-7" }, "本月最后一天"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-quefir-f wtu-lavu4m-8" },
            _toDisplayString($setup.endOfMonth),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-av7f06-4 wtu-avfu85-6 mb-8px" }, [
          _createElementVNode("text", { class: "text-14px wtu-v9onga-7" }, "今年天数"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-quefir-f wtu-lavu4m-8" },
            _toDisplayString($setup.isLeapYear ? "366天 (闰年)" : "365天 (平年)"),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-av7f06-4 wtu-avfu85-6" }, [
          _createElementVNode("text", { class: "text-14px wtu-v9onga-7" }, "距离今年底倒计时"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-1oju4iv-0 wtu-kluce4-g" },
            _toDisplayString($setup.daysToYearEnd) + " 天",
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
const TimeDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/function/components/TimeDemoCard.uvue"]]);
export {
  TimeDemoCard as T
};
//# sourceMappingURL=TimeDemoCard.js.map
