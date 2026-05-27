/** vite.config.js */
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { unovite } from "./js_sdk/a-hua-unocss";

export default defineConfig({
  define: {
    __X_STYLE_ISOLATION__: false,
    __X_STYLE_ISOLATION_UP_ARROW__: false,
  },
  server: {
    port: 9001,
  },
  plugins: [
    uni(),
    unovite({
      rules: [
        [
          "p-safe",
          {
            padding:
              "env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)",
          },
        ],
        ["pt-safe", { "padding-top": "env(safe-area-inset-top)" }],
        ["pb-safe", { "padding-bottom": "env(safe-area-inset-bottom)" }],
      ],
      shortcuts: {},
      theme: {
        colors: {
          /** 主题色，用法如: text-primary */
          primary: "var(--theme-color,#0957DE)",
        },
        fontSize: {
          /** 提供更小号的字体，用法如：text-2xs */
          "2xs": ["20rpx", "28rpx"],
          "3xs": ["18rpx", "26rpx"],
        },
      },
    }),
  ],
});
