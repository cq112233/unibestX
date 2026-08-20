import { C as Card } from "../../basic/components/Card.js";
import { d as dayuts } from "../../../../uni_modules/lime-dayuts/common/index.js";
import "../../../../uni_modules/lime-dayuts/common/use.js";
import "../../../../uni_modules/lime-dayuts/utssdk/interface.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
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
const _style_0 = {"wtu-4kmwrd-0":{"":{"borderTopLeftRadius":12,"borderTopRightRadius":12,"borderBottomRightRadius":12,"borderBottomLeftRadius":12}},"wtu-1jdh43a-1":{"":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16}},"wtu-dtibgf-2":{"":{"marginBottom":16}},"wtu-1h5kt0c-3":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1}},"wtu-4rnkc-4":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"wtu-11f339e-5":{"":{"borderTopColor":"#e2e8f0","borderRightColor":"#e2e8f0","borderBottomColor":"#e2e8f0","borderLeftColor":"#e2e8f0"}},"wtu-1iqtm2m-6":{"":{"fontSize":13}},"wtu-1oju4iv-7":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-115tbw1-8":{"":{"color":"#1e293b"}},"wtu-c3b92s-9":{"":{"marginBottom":8}},"wtu-110ukgw-a":{"":{"fontSize":24}},"wtu-i1z22m-b":{"":{"color":"var(--theme-color)"}},"wtu-1mdi86u-c":{"":{"marginBottom":6}},"wtu-19je0nn-d":{"":{"fontSize":12}},"wtu-1bwkk92-e":{"":{"color":"#94a3b8"}},"wtu-136pgjf-f":{"":{"marginBottom":12}},"wtu-av7f06-g":{"":{"flexDirection":"row"}},"wtu-484t6y-h":{"":{"alignItems":"center"}},"wtu-avfu85-i":{"":{"justifyContent":"space-between"}},"wtu-2fc1j5-j":{"":{"fontSize":14}},"wtu-v9onga-k":{"":{"color":"#64748b"}},"wtu-1r68wxj-l":{"":{"fontSize":16}},"wtu-lavu4m-m":{"":{"color":"#334155"}},"wtu-1qpd44h-n":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-1oyi3ms-o":{"":{"marginRight":8}},"wtu-173zvjd-p":{"":{"width":"100%"}},"wtu-t2tdnc-q":{"":{"height":36}},"wtu-1qs4qj6-r":{"":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"wtu-16xqvqb-s":{"":{"backgroundColor":"#e0edff"}},"wtu-1jd3mn7-t":{"":{"display":"flex"}},"wtu-7vso4e-u":{"":{"justifyContent":"center"}},"wtu-ee1xhe-v":{"":{"color":"#3b82f6"}},"wtu-1xfhmhe-w":{"":{"height":1}},"wtu-lhlnxb-x":{"":{"backgroundColor":"#e2e8f0"}},"wtu-vpqmae-y":{"":{"marginTop":10,"marginBottom":10}},"wtu-c0eg5k-z":{"":{"marginBottom":4}},"wtu-quefir-10":{"":{"--tw-font-weight":"var(--font-weight-medium, 500)","fontWeight":500}},"wtu-kluce4-11":{"":{"color":"#f43f5e"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "时间日期操作 (lime-dayuts)" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-4kmwrd-0 wtu-1jdh43a-1 wtu-dtibgf-2 wtu-1h5kt0c-3 wtu-4rnkc-4 wtu-11f339e-5" }, [
        _createElementVNode("text", { class: "wtu-1iqtm2m-6 wtu-1oju4iv-7 wtu-115tbw1-8 wtu-c3b92s-9" }, "实时高精度时钟 (更新于每一百毫秒)"),
        _createElementVNode(
          "text",
          {
            class: "wtu-110ukgw-a wtu-1oju4iv-7 wtu-i1z22m-b wtu-1mdi86u-c",
            style: { "font-family": "monospace" }
          },
          _toDisplayString($setup.currentFullTime),
          1
          /* TEXT */
        ),
        _createElementVNode("text", { class: "wtu-19je0nn-d wtu-1bwkk92-e" }, " 格式模板: YYYY-MM-DD HH:mm:ss.SSS dddd ")
      ]),
      _createElementVNode("view", { class: "wtu-4kmwrd-0 wtu-1jdh43a-1 wtu-dtibgf-2 wtu-1h5kt0c-3 wtu-4rnkc-4 wtu-11f339e-5" }, [
        _createElementVNode("text", { class: "wtu-1iqtm2m-6 wtu-1oju4iv-7 wtu-115tbw1-8 wtu-136pgjf-f" }, "日期偏移操作"),
        _createElementVNode("view", { class: "wtu-av7f06-g wtu-484t6y-h wtu-avfu85-i wtu-136pgjf-f" }, [
          _createElementVNode("text", { class: "wtu-2fc1j5-j wtu-v9onga-k" }, "当前偏移天数:"),
          _createElementVNode(
            "text",
            { class: "wtu-1r68wxj-l wtu-1oju4iv-7 wtu-lavu4m-m" },
            _toDisplayString($setup.offsetDays > 0 ? "+" : "") + _toDisplayString($setup.offsetDays) + " 天",
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-av7f06-g wtu-avfu85-i wtu-136pgjf-f" }, [
          _createElementVNode("view", { class: "wtu-1qpd44h-n wtu-1oyi3ms-o" }, [
            _createElementVNode("view", {
              class: "wtu-173zvjd-p wtu-t2tdnc-q wtu-1qs4qj6-r wtu-16xqvqb-s wtu-1jd3mn7-t wtu-av7f06-g wtu-484t6y-h wtu-7vso4e-u",
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.adjustOffset(-7))
            }, [
              _createElementVNode("text", { class: "wtu-ee1xhe-v wtu-19je0nn-d wtu-1oju4iv-7" }, "-7 天")
            ])
          ]),
          _createElementVNode("view", { class: "wtu-1qpd44h-n wtu-1oyi3ms-o" }, [
            _createElementVNode("view", {
              class: "wtu-173zvjd-p wtu-t2tdnc-q wtu-1qs4qj6-r wtu-16xqvqb-s wtu-1jd3mn7-t wtu-av7f06-g wtu-484t6y-h wtu-7vso4e-u",
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.adjustOffset(-1))
            }, [
              _createElementVNode("text", { class: "wtu-ee1xhe-v wtu-19je0nn-d wtu-1oju4iv-7" }, "-1 天")
            ])
          ]),
          _createElementVNode("view", { class: "wtu-1qpd44h-n wtu-1oyi3ms-o" }, [
            _createElementVNode("view", {
              class: "wtu-173zvjd-p wtu-t2tdnc-q wtu-1qs4qj6-r wtu-16xqvqb-s wtu-1jd3mn7-t wtu-av7f06-g wtu-484t6y-h wtu-7vso4e-u",
              onClick: _cache[2] || (_cache[2] = ($event) => $setup.adjustOffset(1))
            }, [
              _createElementVNode("text", { class: "wtu-ee1xhe-v wtu-19je0nn-d wtu-1oju4iv-7" }, "+1 天")
            ])
          ]),
          _createElementVNode("view", { class: "wtu-1qpd44h-n" }, [
            _createElementVNode("view", {
              class: "wtu-173zvjd-p wtu-t2tdnc-q wtu-1qs4qj6-r wtu-16xqvqb-s wtu-1jd3mn7-t wtu-av7f06-g wtu-484t6y-h wtu-7vso4e-u",
              onClick: _cache[3] || (_cache[3] = ($event) => $setup.adjustOffset(7))
            }, [
              _createElementVNode("text", { class: "wtu-ee1xhe-v wtu-19je0nn-d wtu-1oju4iv-7" }, "+7 天")
            ])
          ])
        ]),
        _createElementVNode("view", { class: "wtu-1xfhmhe-w wtu-lhlnxb-x wtu-vpqmae-y" }),
        _createElementVNode("view", null, [
          _createElementVNode("text", { class: "wtu-19je0nn-d wtu-1bwkk92-e wtu-c0eg5k-z" }, "计算得到的目标时间:"),
          _createElementVNode(
            "text",
            { class: "wtu-2fc1j5-j wtu-1oju4iv-7 wtu-lavu4m-m" },
            _toDisplayString($setup.targetOffsetTime),
            1
            /* TEXT */
          )
        ])
      ]),
      _createElementVNode("view", { class: "wtu-4kmwrd-0 wtu-1jdh43a-1 wtu-1h5kt0c-3 wtu-4rnkc-4 wtu-11f339e-5" }, [
        _createElementVNode("text", { class: "wtu-1iqtm2m-6 wtu-1oju4iv-7 wtu-115tbw1-8 wtu-136pgjf-f" }, "常用日期边界与区间计算"),
        _createElementVNode("view", { class: "wtu-av7f06-g wtu-avfu85-i wtu-c3b92s-9" }, [
          _createElementVNode("text", { class: "wtu-2fc1j5-j wtu-v9onga-k" }, "本月第一天"),
          _createElementVNode(
            "text",
            { class: "wtu-2fc1j5-j wtu-quefir-10 wtu-lavu4m-m" },
            _toDisplayString($setup.startOfMonth),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-av7f06-g wtu-avfu85-i wtu-c3b92s-9" }, [
          _createElementVNode("text", { class: "wtu-2fc1j5-j wtu-v9onga-k" }, "本月最后一天"),
          _createElementVNode(
            "text",
            { class: "wtu-2fc1j5-j wtu-quefir-10 wtu-lavu4m-m" },
            _toDisplayString($setup.endOfMonth),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-av7f06-g wtu-avfu85-i wtu-c3b92s-9" }, [
          _createElementVNode("text", { class: "wtu-2fc1j5-j wtu-v9onga-k" }, "今年天数"),
          _createElementVNode(
            "text",
            { class: "wtu-2fc1j5-j wtu-quefir-10 wtu-lavu4m-m" },
            _toDisplayString($setup.isLeapYear ? "366天 (闰年)" : "365天 (平年)"),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-av7f06-g wtu-avfu85-i" }, [
          _createElementVNode("text", { class: "wtu-2fc1j5-j wtu-v9onga-k" }, "距离今年底倒计时"),
          _createElementVNode(
            "text",
            { class: "wtu-2fc1j5-j wtu-1oju4iv-7 wtu-kluce4-11" },
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
