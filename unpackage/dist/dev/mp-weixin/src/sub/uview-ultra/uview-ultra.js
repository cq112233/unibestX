"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_swiper_1 = common_vendor.resolveComponent("up-swiper");
  const _easycom_up_image_1 = common_vendor.resolveComponent("up-image");
  const _easycom_up_pagination_1 = common_vendor.resolveComponent("up-pagination");
  const _easycom_up_copy_1 = common_vendor.resolveComponent("up-copy");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_th_1 = common_vendor.resolveComponent("up-th");
  const _easycom_up_tr_1 = common_vendor.resolveComponent("up-tr");
  const _easycom_up_td_1 = common_vendor.resolveComponent("up-td");
  const _easycom_up_table_1 = common_vendor.resolveComponent("up-table");
  const _easycom_up_code_input_1 = common_vendor.resolveComponent("up-code-input");
  const _easycom_up_transition_1 = common_vendor.resolveComponent("up-transition");
  const _easycom_up_qrcode_1 = common_vendor.resolveComponent("up-qrcode");
  const _easycom_up_parse_1 = common_vendor.resolveComponent("up-parse");
  const _easycom_up_steps_item_1 = common_vendor.resolveComponent("up-steps-item");
  const _easycom_up_steps_1 = common_vendor.resolveComponent("up-steps");
  const _easycom_up_navbar_mini_1 = common_vendor.resolveComponent("up-navbar-mini");
  const _easycom_up_tabs_1 = common_vendor.resolveComponent("up-tabs");
  const _easycom_up_tabbar_item_1 = common_vendor.resolveComponent("up-tabbar-item");
  const _easycom_up_tabbar_1 = common_vendor.resolveComponent("up-tabbar");
  const _easycom_up_read_more_1 = common_vendor.resolveComponent("up-read-more");
  const _easycom_up_avatar_1 = common_vendor.resolveComponent("up-avatar");
  const _easycom_up_link_1 = common_vendor.resolveComponent("up-link");
  const _easycom_up_lazy_load_1 = common_vendor.resolveComponent("up-lazy-load");
  const _easycom_up_loadmore_1 = common_vendor.resolveComponent("up-loadmore");
  const _easycom_up_album_1 = common_vendor.resolveComponent("up-album");
  const _easycom_up_index_anchor_1 = common_vendor.resolveComponent("up-index-anchor");
  const _easycom_up_index_item_1 = common_vendor.resolveComponent("up-index-item");
  const _easycom_up_index_list_1 = common_vendor.resolveComponent("up-index-list");
  const _easycom_up_navbar_1 = common_vendor.resolveComponent("up-navbar");
  const _easycom_up_subsection_1 = common_vendor.resolveComponent("up-subsection");
  const _easycom_up_dropdown_item_1 = common_vendor.resolveComponent("up-dropdown-item");
  const _easycom_up_dropdown_1 = common_vendor.resolveComponent("up-dropdown");
  const _easycom_up_swipe_action_item_1 = common_vendor.resolveComponent("up-swipe-action-item");
  const _easycom_up_swipe_action_1 = common_vendor.resolveComponent("up-swipe-action");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_text_1 = common_vendor.resolveComponent("up-text");
  const _easycom_up_tag_1 = common_vendor.resolveComponent("up-tag");
  const _easycom_up_badge_1 = common_vendor.resolveComponent("up-badge");
  const _easycom_up_cell_1 = common_vendor.resolveComponent("up-cell");
  const _easycom_up_cell_group_1 = common_vendor.resolveComponent("up-cell-group");
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_divider_1 = common_vendor.resolveComponent("up-divider");
  const _easycom_up_count_down_1 = common_vendor.resolveComponent("up-count-down");
  const _easycom_up_count_to_1 = common_vendor.resolveComponent("up-count-to");
  const _easycom_up_line_progress_1 = common_vendor.resolveComponent("up-line-progress");
  const _easycom_up_empty_1 = common_vendor.resolveComponent("up-empty");
  const _easycom_up_col_1 = common_vendor.resolveComponent("up-col");
  const _easycom_up_row_1 = common_vendor.resolveComponent("up-row");
  const _easycom_up_grid_item_1 = common_vendor.resolveComponent("up-grid-item");
  const _easycom_up_grid_1 = common_vendor.resolveComponent("up-grid");
  const _easycom_up_skeleton_1 = common_vendor.resolveComponent("up-skeleton");
  const _easycom_up_no_network_1 = common_vendor.resolveComponent("up-no-network");
  const _easycom_up_back_top_1 = common_vendor.resolveComponent("up-back-top");
  (_easycom_NavBar_1 + _easycom_up_swiper_1 + _easycom_up_image_1 + _easycom_up_pagination_1 + _easycom_up_copy_1 + _easycom_up_button_1 + _easycom_up_th_1 + _easycom_up_tr_1 + _easycom_up_td_1 + _easycom_up_table_1 + _easycom_up_code_input_1 + _easycom_up_transition_1 + _easycom_up_qrcode_1 + _easycom_up_parse_1 + _easycom_up_steps_item_1 + _easycom_up_steps_1 + _easycom_up_navbar_mini_1 + _easycom_up_tabs_1 + _easycom_up_tabbar_item_1 + _easycom_up_tabbar_1 + _easycom_up_read_more_1 + _easycom_up_avatar_1 + _easycom_up_link_1 + _easycom_up_lazy_load_1 + _easycom_up_loadmore_1 + _easycom_up_album_1 + _easycom_up_index_anchor_1 + _easycom_up_index_item_1 + _easycom_up_index_list_1 + _easycom_up_navbar_1 + _easycom_up_subsection_1 + _easycom_up_dropdown_item_1 + _easycom_up_dropdown_1 + _easycom_up_swipe_action_item_1 + _easycom_up_swipe_action_1 + _easycom_up_icon_1 + _easycom_up_text_1 + _easycom_up_tag_1 + _easycom_up_badge_1 + _easycom_up_cell_1 + _easycom_up_cell_group_1 + _easycom_up_loading_icon_1 + _easycom_up_divider_1 + _easycom_up_count_down_1 + _easycom_up_count_to_1 + _easycom_up_line_progress_1 + _easycom_up_empty_1 + _easycom_up_col_1 + _easycom_up_row_1 + _easycom_up_grid_item_1 + _easycom_up_grid_1 + _easycom_up_skeleton_1 + _easycom_up_no_network_1 + _easycom_up_back_top_1)();
}
const _easycom_NavBar = () => "../../components/NavBar/NavBar.js";
const _easycom_up_swiper = () => "../../../uni_modules/uview-ultra/components/up-swiper/up-swiper.js";
const _easycom_up_image = () => "../../../uni_modules/uview-ultra/components/up-image/up-image.js";
const _easycom_up_pagination = () => "../../../uni_modules/uview-ultra/components/up-pagination/up-pagination.js";
const _easycom_up_copy = () => "../../../uni_modules/uview-ultra/components/up-copy/up-copy.js";
const _easycom_up_button = () => "../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_th = () => "../../../uni_modules/uview-ultra/components/up-th/up-th.js";
const _easycom_up_tr = () => "../../../uni_modules/uview-ultra/components/up-tr/up-tr.js";
const _easycom_up_td = () => "../../../uni_modules/uview-ultra/components/up-td/up-td.js";
const _easycom_up_table = () => "../../../uni_modules/uview-ultra/components/up-table/up-table.js";
const _easycom_up_code_input = () => "../../../uni_modules/uview-ultra/components/up-code-input/up-code-input.js";
const _easycom_up_transition = () => "../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
const _easycom_up_qrcode = () => "../../../uni_modules/uview-ultra/components/up-qrcode/up-qrcode.js";
const _easycom_up_parse = () => "../../../uni_modules/uview-ultra/components/up-parse/up-parse.js";
const _easycom_up_steps_item = () => "../../../uni_modules/uview-ultra/components/up-steps-item/up-steps-item.js";
const _easycom_up_steps = () => "../../../uni_modules/uview-ultra/components/up-steps/up-steps.js";
const _easycom_up_navbar_mini = () => "../../../uni_modules/uview-ultra/components/up-navbar-mini/up-navbar-mini.js";
const _easycom_up_tabs = () => "../../../uni_modules/uview-ultra/components/up-tabs/up-tabs.js";
const _easycom_up_tabbar_item = () => "../../../uni_modules/uview-ultra/components/up-tabbar-item/up-tabbar-item.js";
const _easycom_up_tabbar = () => "../../../uni_modules/uview-ultra/components/up-tabbar/up-tabbar.js";
const _easycom_up_read_more = () => "../../../uni_modules/uview-ultra/components/up-read-more/up-read-more.js";
const _easycom_up_avatar = () => "../../../uni_modules/uview-ultra/components/up-avatar/up-avatar.js";
const _easycom_up_link = () => "../../../uni_modules/uview-ultra/components/up-link/up-link.js";
const _easycom_up_lazy_load = () => "../../../uni_modules/uview-ultra/components/up-lazy-load/up-lazy-load.js";
const _easycom_up_loadmore = () => "../../../uni_modules/uview-ultra/components/up-loadmore/up-loadmore.js";
const _easycom_up_album = () => "../../../uni_modules/uview-ultra/components/up-album/up-album.js";
const _easycom_up_index_anchor = () => "../../../uni_modules/uview-ultra/components/up-index-anchor/up-index-anchor.js";
const _easycom_up_index_item = () => "../../../uni_modules/uview-ultra/components/up-index-item/up-index-item.js";
const _easycom_up_index_list = () => "../../../uni_modules/uview-ultra/components/up-index-list/up-index-list.js";
const _easycom_up_navbar = () => "../../../uni_modules/uview-ultra/components/up-navbar/up-navbar.js";
const _easycom_up_subsection = () => "../../../uni_modules/uview-ultra/components/up-subsection/up-subsection.js";
const _easycom_up_dropdown_item = () => "../../../uni_modules/uview-ultra/components/up-dropdown-item/up-dropdown-item.js";
const _easycom_up_dropdown = () => "../../../uni_modules/uview-ultra/components/up-dropdown/up-dropdown.js";
const _easycom_up_swipe_action_item = () => "../../../uni_modules/uview-ultra/components/up-swipe-action-item/up-swipe-action-item.js";
const _easycom_up_swipe_action = () => "../../../uni_modules/uview-ultra/components/up-swipe-action/up-swipe-action.js";
const _easycom_up_icon = () => "../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
const _easycom_up_text = () => "../../../uni_modules/uview-ultra/components/up-text/up-text.js";
const _easycom_up_tag = () => "../../../uni_modules/uview-ultra/components/up-tag/up-tag.js";
const _easycom_up_badge = () => "../../../uni_modules/uview-ultra/components/up-badge/up-badge.js";
const _easycom_up_cell = () => "../../../uni_modules/uview-ultra/components/up-cell/up-cell.js";
const _easycom_up_cell_group = () => "../../../uni_modules/uview-ultra/components/up-cell-group/up-cell-group.js";
const _easycom_up_loading_icon = () => "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
const _easycom_up_divider = () => "../../../uni_modules/uview-ultra/components/up-divider/up-divider.js";
const _easycom_up_count_down = () => "../../../uni_modules/uview-ultra/components/up-count-down/up-count-down.js";
const _easycom_up_count_to = () => "../../../uni_modules/uview-ultra/components/up-count-to/up-count-to.js";
const _easycom_up_line_progress = () => "../../../uni_modules/uview-ultra/components/up-line-progress/up-line-progress.js";
const _easycom_up_empty = () => "../../../uni_modules/uview-ultra/components/up-empty/up-empty.js";
const _easycom_up_col = () => "../../../uni_modules/uview-ultra/components/up-col/up-col.js";
const _easycom_up_row = () => "../../../uni_modules/uview-ultra/components/up-row/up-row.js";
const _easycom_up_grid_item = () => "../../../uni_modules/uview-ultra/components/up-grid-item/up-grid-item.js";
const _easycom_up_grid = () => "../../../uni_modules/uview-ultra/components/up-grid/up-grid.js";
const _easycom_up_skeleton = () => "../../../uni_modules/uview-ultra/components/up-skeleton/up-skeleton.js";
const _easycom_up_no_network = () => "../../../uni_modules/uview-ultra/components/up-no-network/up-no-network.js";
const _easycom_up_back_top = () => "../../../uni_modules/uview-ultra/components/up-back-top/up-back-top.js";
if (!Math) {
  (_easycom_NavBar + common_vendor.unref(DemoShow) + common_vendor.unref(ThemeSwitchCard) + _easycom_up_swiper + _easycom_up_image + _easycom_up_pagination + _easycom_up_copy + _easycom_up_button + _easycom_up_th + _easycom_up_tr + _easycom_up_td + _easycom_up_table + _easycom_up_code_input + _easycom_up_transition + _easycom_up_qrcode + _easycom_up_parse + _easycom_up_steps_item + _easycom_up_steps + _easycom_up_navbar_mini + _easycom_up_tabs + _easycom_up_tabbar_item + _easycom_up_tabbar + _easycom_up_read_more + _easycom_up_avatar + _easycom_up_link + _easycom_up_lazy_load + common_vendor.unref(mpHtml) + _easycom_up_loadmore + _easycom_up_album + _easycom_up_index_anchor + _easycom_up_index_item + _easycom_up_index_list + _easycom_up_navbar + _easycom_up_subsection + _easycom_up_dropdown_item + _easycom_up_dropdown + _easycom_up_swipe_action_item + _easycom_up_swipe_action + _easycom_up_icon + _easycom_up_text + _easycom_up_tag + _easycom_up_badge + _easycom_up_cell + _easycom_up_cell_group + _easycom_up_loading_icon + _easycom_up_divider + common_vendor.unref(DemoForm) + _easycom_up_count_down + _easycom_up_count_to + _easycom_up_line_progress + _easycom_up_empty + common_vendor.unref(DemoFeedback) + _easycom_up_col + _easycom_up_row + _easycom_up_grid_item + _easycom_up_grid + _easycom_up_skeleton + _easycom_up_no_network + _easycom_up_back_top + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../App.ku.js";
const LayoutComponent = () => "../../layouts/default.js";
const ThemeSwitchCard = () => "../../pages/basic/components/ThemeSwitchCard.js";
const DemoForm = () => "./components/DemoForm.js";
const DemoFeedback = () => "./components/DemoFeedback.js";
const DemoShow = () => "./components/DemoShow.js";
const mpHtml = () => "../../../uni_modules/mp-html/components/mp-html/mp-html.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "uview-ultra",
  setup(__props) {
    const scrollTop = common_vendor.ref(0);
    const scrollViewScrollTop = common_vendor.ref(0);
    const scrollHeight = common_vendor.ref(0);
    common_vendor.onMounted(() => {
      const sysInfo = common_vendor.index.getWindowInfo();
      scrollHeight.value = sysInfo.windowHeight - 44;
    });
    function onScroll(e) {
      const currentScrollTop = e.detail.scrollTop;
      scrollTop.value = currentScrollTop;
    }
    function onBackTopClick() {
      scrollViewScrollTop.value = scrollTop.value;
      setTimeout(() => {
        scrollViewScrollTop.value = 0;
      }, 20);
    }
    const value1 = common_vendor.ref(1);
    const value2 = common_vendor.ref(2);
    const options1 = common_vendor.ref([
      new UTSJSONObject({ label: "默认排序", value: 1 }),
      new UTSJSONObject({ label: "距离优先", value: 2 }),
      new UTSJSONObject({ label: "价格优先", value: 3 })
    ]);
    const options2 = common_vendor.ref([
      new UTSJSONObject({ label: "去冰", value: 1 }),
      new UTSJSONObject({ label: "加冰", value: 2 })
    ]);
    const dropdownGreenValue1 = common_vendor.ref(1);
    const dropdownGreenValue2 = common_vendor.ref(1);
    const dropdownRegionOptions1 = common_vendor.ref([
      new UTSJSONObject({ label: "全部", value: 1 }),
      new UTSJSONObject({ label: "朝阳区", value: 2 }),
      new UTSJSONObject({ label: "海淀区", value: 3 }),
      new UTSJSONObject({ label: "西城区", value: 4 })
    ]);
    const dropdownRegionOptions2 = common_vendor.ref([
      new UTSJSONObject({ label: "综合排序", value: 1 }),
      new UTSJSONObject({ label: "评分最高", value: 2 }),
      new UTSJSONObject({ label: "销量优先", value: 3 }),
      new UTSJSONObject({ label: "价格最低", value: 4 })
    ]);
    common_vendor.ref(1);
    common_vendor.ref(1);
    common_vendor.ref(null);
    common_vendor.ref(null);
    common_vendor.ref(null);
    common_vendor.ref(null);
    common_vendor.ref(null);
    common_vendor.ref("暂无");
    common_vendor.ref(1);
    common_vendor.ref(2);
    common_vendor.ref("暂无");
    common_vendor.ref([
      new UTSJSONObject({ text: "美食", icon: "star-fill", color: "#f9ae3d" }),
      new UTSJSONObject({ text: "外卖", icon: "car-fill", color: "#2979ff" }),
      new UTSJSONObject({ text: "酒店", icon: "home", color: "#19be6b" }),
      new UTSJSONObject({ text: "电影", icon: "play-right-fill", color: "#fa3534" }),
      new UTSJSONObject({ text: "KTV", icon: "mic", color: "#9c27b0" }),
      new UTSJSONObject({ text: "丽人", icon: "heart-fill", color: "#ff4081" }),
      new UTSJSONObject({ text: "周边游", icon: "map-fill", color: "#00bcd4" }),
      new UTSJSONObject({ text: "更多", icon: "grid-fill", color: "#909399" })
    ]);
    common_vendor.ref([
      new UTSJSONObject({ text: "智能排序", icon: "list-dot", color: "#2979ff" }),
      new UTSJSONObject({ text: "离我最近", icon: "map", color: "#19be6b" }),
      new UTSJSONObject({ text: "好评优先", icon: "star", color: "#f9ae3d" }),
      new UTSJSONObject({ text: "人气最高", icon: "fire", color: "#fa3534" }),
      new UTSJSONObject({ text: "价格最低", icon: "rmb-circle-fill", color: "#ff9900" }),
      new UTSJSONObject({ text: "最新发布", icon: "clock-fill", color: "#00bcd4" })
    ]);
    common_vendor.ref("暂无");
    common_vendor.ref([
      new UTSJSONObject({ id: "1", image: "https://picsum.photos/400/300?random=50", title: "招牌红烧牛肉面", desc: "精选牛腱肉·慢炖8小时", price: "¥38", tag: "热卖" }),
      new UTSJSONObject({ id: "2", image: "https://picsum.photos/400/300?random=51", title: "海鲜至尊披萨", desc: "12寸·虾仁+鱿鱼+芝士", price: "¥88", tag: "新品" }),
      new UTSJSONObject({ id: "3", image: "https://picsum.photos/400/300?random=52", title: "经典珍珠奶茶", desc: "手作黑糖珍珠·鲜奶", price: "¥18", tag: "爆款" }),
      new UTSJSONObject({ id: "4", image: "https://picsum.photos/400/300?random=53", title: "法式提拉米苏", desc: "马斯卡彭芝士·可可粉", price: "¥32", tag: "甜品" })
    ]);
    common_vendor.ref([
      new UTSJSONObject({ id: "5", image: "https://picsum.photos/400/300?random=54", title: "日式鳗鱼饭", desc: "活鳗现烤·秘制酱汁", price: "¥68", tag: "限量" }),
      new UTSJSONObject({ id: "6", image: "https://picsum.photos/400/300?random=55", title: "泰式冬阴功汤", desc: "鲜虾+香茅+椰浆", price: "¥45", tag: "推荐" }),
      new UTSJSONObject({ id: "7", image: "https://picsum.photos/400/300?random=56", title: "美式牛肉汉堡", desc: "安格斯牛肉饼·双层", price: "¥42", tag: "大份" }),
      new UTSJSONObject({ id: "8", image: "https://picsum.photos/400/300?random=57", title: "冰淇淋华夫饼", desc: "香草冰淇淋·现烤华夫", price: "¥28", tag: "甜蜜" })
    ]);
    const waterfallList = common_vendor.ref([
      new UTSJSONObject({ id: "1", image: "https://picsum.photos/400/300?random=1", title: "简约风小茶几", price: "¥299" }),
      new UTSJSONObject({ id: "2", image: "https://picsum.photos/400/500?random=2", title: "北欧风落地灯", price: "¥599" }),
      new UTSJSONObject({ id: "3", image: "https://picsum.photos/400/350?random=3", title: "日式花瓶摆件", price: "¥89" }),
      new UTSJSONObject({ id: "4", image: "https://picsum.photos/400/450?random=4", title: "复古台灯", price: "¥399" }),
      new UTSJSONObject({ id: "5", image: "https://picsum.photos/400/280?random=5", title: "ins风挂画", price: "¥159" }),
      new UTSJSONObject({ id: "6", image: "https://picsum.photos/400/520?random=6", title: "实木相框组合", price: "¥129" })
    ]);
    const waterfallLeftList = common_vendor.computed(() => {
      return waterfallList.value.filter((_, idx) => {
        return idx % 2 === 0;
      });
    });
    const waterfallRightList = common_vendor.computed(() => {
      return waterfallList.value.filter((_, idx) => {
        return idx % 2 === 1;
      });
    });
    function loadMoreWaterfall() {
      const newItems = [];
      const base = waterfallList.value.length + 1;
      for (let i = 0; i < 4; i++) {
        const idx = base + i;
        const heights = [280, 350, 420, 300, 500, 380];
        newItems.push(new UTSJSONObject({
          id: `${idx}`,
          image: `https://picsum.photos/400/${heights[i % heights.length]}?random=${idx}`,
          title: `商品 ${idx}`,
          price: `¥${(Math.random() * 500 + 50).toFixed(0)}`
        }));
      }
      waterfallList.value = waterfallList.value.concat(newItems);
    }
    function clearWaterfall() {
      waterfallList.value = [];
    }
    const loadmoreStatus = common_vendor.ref("loadmore");
    const loadmoreIsDot = common_vendor.ref(false);
    const albumUrls = common_vendor.ref([
      "https://picsum.photos/400/400?random=10",
      "https://picsum.photos/400/400?random=11",
      "https://picsum.photos/400/400?random=12",
      "https://picsum.photos/400/400?random=13",
      "https://picsum.photos/400/400?random=14",
      "https://picsum.photos/400/400?random=15",
      "https://picsum.photos/400/400?random=16",
      "https://picsum.photos/400/400?random=17",
      "https://picsum.photos/400/400?random=18",
      "https://picsum.photos/400/400?random=19",
      "https://picsum.photos/400/400?random=20"
    ]);
    const readMoreContent = common_vendor.ref(`<p>山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？</p><p>锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃。沧海月明珠有泪，蓝田日暖玉生烟。此情可待成追忆，只是当时已惘然。</p>`);
    const avatarSrc = common_vendor.ref("/static/logo.png");
    common_vendor.ref([
      "https://picsum.photos/200/200?random=1",
      "https://picsum.photos/200/200?random=2",
      "https://picsum.photos/200/200?random=3",
      "https://picsum.photos/200/200?random=4",
      "https://picsum.photos/200/200?random=5",
      "https://picsum.photos/200/200?random=6",
      "https://picsum.photos/200/200?random=7"
    ]);
    function onLinkClick() {
      common_vendor.index.showToast({ title: "链接点击事件触发", icon: "none" });
    }
    function onLazyLoadClick(index) {
      common_vendor.index.showToast({ title: `图片 ${index} 被点击`, icon: "none" });
    }
    function onLazyLoadError(err) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1094", "懒加载图片出错:", err);
    }
    const swiperList = common_vendor.ref([
      new UTSJSONObject({ image: "/static/logo.png", title: "uview-ultra 组件演示" }),
      new UTSJSONObject({ image: "/static/logo.png", title: "高品质 UI 组件库" }),
      new UTSJSONObject({ image: "/static/logo.png", title: "多端适配 · 开箱即用" })
    ]);
    const indexList = common_vendor.ref(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
    const itemArr = common_vendor.ref([
      ["安徽", "澳门"],
      ["北京"],
      ["重庆", "成都", "长沙", "常州"],
      ["东莞", "大连"],
      ["鄂尔多斯"],
      ["福州", "佛山"],
      ["广州", "贵阳", "桂林"],
      ["杭州", "合肥", "哈尔滨", "海口", "呼和浩特"],
      ["济南"],
      ["昆明"],
      ["兰州", "拉萨", "柳州"],
      ["南京", "南昌", "南宁", "宁波"],
      ["青岛", "泉州"],
      ["上海", "深圳", "苏州", "沈阳", "石家庄"],
      ["天津", "太原", "台北"],
      ["武汉", "无锡"],
      ["西安", "厦门", "西宁", "香港"],
      ["银川", "扬州"],
      ["郑州"]
    ]);
    common_vendor.ref(true);
    const lineProgressValue1 = common_vendor.ref(70);
    const lineProgressValue2 = common_vendor.ref(45);
    common_vendor.ref(90);
    common_vendor.ref(30);
    const swipeActionList = common_vendor.ref([
      new UTSJSONObject({ id: "1", title: "左滑可编辑或删除此项（第一项）" }),
      new UTSJSONObject({ id: "2", title: "左滑可编辑或删除此项（第二项）" }),
      new UTSJSONObject({ id: "3", title: "左滑可编辑或删除此项（第三项）" }),
      new UTSJSONObject({ id: "4", title: "左滑可编辑或删除此项（第四项）" })
    ]);
    const swipeActionOptions = common_vendor.ref([
      new UTSJSONObject({ text: "编辑", style: new UTSJSONObject({ backgroundColor: "primary" }) }),
      new UTSJSONObject({ text: "删除", style: new UTSJSONObject({ backgroundColor: "#f56c6c" }) })
    ]);
    function onSwipeActionClick(e) {
      const btnIndex = e["index"];
      const listIndex = e["name"];
      const item = swipeActionList.value[listIndex];
      const btn = swipeActionOptions.value[btnIndex];
      if (btn != null && item != null) {
        const action = btn.text;
        const title = item.title;
        if (action === "删除") {
          swipeActionList.value.splice(listIndex, 1);
          common_vendor.index.showToast({ title: `已删除: ${title}`, icon: "none" });
        } else {
          common_vendor.index.showToast({ title: `点击了「${action}」: ${title}`, icon: "none" });
        }
      }
    }
    const skeletonLoading = common_vendor.ref(true);
    function toggleSkeleton() {
      skeletonLoading.value = !skeletonLoading.value;
    }
    const mpHtmlContent = common_vendor.ref(`<h2 style="text-align:center">mp-html 富文本演示</h2>
<p>这是一个 <strong>uni-app X</strong> 原生渲染的富文本组件，支持以下标签：</p>
<h3>1. 文本格式</h3>
<p><b>粗体文字</b>、<i>斜体文字</i>、<u>下划线文字</u>、<s>删除线文字</s></p>
<p><em>强调文本</em>、<strong>加粗强调</strong>、<mark>高亮文本</mark></p>
<p>普通文本中含有 <code>code 代码</code> 和 <small>小号字</small></p>
<h3>2. 链接</h3>
<p>点击 <a href="https://www.baidu.com">百度链接</a> 查看效果</p>
<p>这是 <a href="https://github.com/jin-yufeng/mp-html">mp-html GitHub</a> 仓库</p>
<h3>3. 图片</h3>
<p>以下是一张示例图片：</p>
<img src="https://picsum.photos/400/300?random=2" alt="示例图片" />
<h3>4. 表格</h3>
<table border="1" cellpadding="4" cellspacing="0">
  <tr><th>姓名</th><th>年龄</th><th>城市</th></tr>
  <tr><td>张三</td><td>28</td><td>北京</td></tr>
  <tr><td>李四</td><td>32</td><td>上海</td></tr>
  <tr><td>王五</td><td>25</td><td>深圳</td></tr>
</table>
<h3>5. 列表</h3>
<ul>
  <li>uni-app X 原生渲染</li>
  <li>完整的 HTML 标签支持</li>
  <li>图片点击预览</li>
  <li>链接点击处理</li>
</ul>
<ol>
  <li>第一步：导入组件</li>
  <li>第二步：传入 content</li>
  <li>第三步：监听事件</li>
</ol>
<h3>6. 预格式文本</h3>
<pre>function hello() {
  uni.__f__('log','at src/sub/uview-ultra/uview-ultra.uvue:1210',"Hello, mp-html!")
}</pre>
<h3>7. 分割线</h3>
<hr />
<p style="text-align:center;color:#909399">以上为 mp-html 组件演示内容</p>`);
    function onMpHtmlLoad() {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1217", "mp-html 渲染完成");
    }
    function onMpHtmlLinktap(e) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1221", "链接点击:", e);
      const href = e["href"];
      if (href != null) {
        common_vendor.index.showToast({ title: `链接: ${href}`, icon: "none" });
      }
    }
    function onMpHtmlImgtap(e) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1230", "图片点击:", e);
    }
    function onMpHtmlError(e) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1234", "mp-html error:", e);
    }
    const transitionShow1 = common_vendor.ref(true);
    const transitionShow3 = common_vendor.ref(false);
    const transitionModes = common_vendor.ref([
      new UTSJSONObject({ mode: "fade-up", show: false }),
      new UTSJSONObject({ mode: "slide-down", show: false }),
      new UTSJSONObject({ mode: "zoom-in", show: false }),
      new UTSJSONObject({ mode: "fade-left", show: false })
    ]);
    function toggleTransitionMode(item) {
      var _a;
      const currentShow = (_a = item.getBoolean("show")) !== null && _a !== void 0 ? _a : false;
      item.set("show", !currentShow);
    }
    const tabsList1 = common_vendor.ref([
      new UTSJSONObject({ name: "关注" }),
      new UTSJSONObject({ name: "推荐" }),
      new UTSJSONObject({ name: "电影" }),
      new UTSJSONObject({ name: "科技" }),
      new UTSJSONObject({ name: "音乐" }),
      new UTSJSONObject({ name: "美食" }),
      new UTSJSONObject({ name: "文化" }),
      new UTSJSONObject({ name: "财经" }),
      new UTSJSONObject({ name: "时事" })
    ]);
    const tabsList2 = common_vendor.ref([
      new UTSJSONObject({ name: "关注", badge: new UTSJSONObject({ isDot: false, value: 6 }) }),
      new UTSJSONObject({ name: "推荐", badge: new UTSJSONObject({ isDot: true }) }),
      new UTSJSONObject({ name: "电影" }),
      new UTSJSONObject({ name: "科技", disabled: true }),
      new UTSJSONObject({ name: "音乐" })
    ]);
    common_vendor.ref([
      new UTSJSONObject({ name: "关注" }),
      new UTSJSONObject({ name: "推荐" }),
      new UTSJSONObject({ name: "电影" }),
      new UTSJSONObject({ name: "科技" }),
      new UTSJSONObject({ name: "音乐" })
    ]);
    common_vendor.ref([
      new UTSJSONObject({ name: "关注" }),
      new UTSJSONObject({ name: "推荐" }),
      new UTSJSONObject({ name: "电影" })
    ]);
    function onTabsClick(e) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1288", "tabs click:", e);
    }
    function onTabsChange(e) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1292", "tabs change:", e);
    }
    const tabbarValue1 = common_vendor.ref("0");
    const tabbarValue2 = common_vendor.ref("1");
    common_vendor.ref("home");
    common_vendor.ref("2");
    common_vendor.ref("0");
    common_vendor.ref("0");
    common_vendor.ref("0");
    function onTabbarChange1(e) {
      tabbarValue1.value = e.toString();
    }
    function onTabbarChange2(e) {
      tabbarValue2.value = e.toString();
    }
    const subsectionList = common_vendor.ref([
      new UTSJSONObject({ name: "关注" }),
      new UTSJSONObject({ name: "推荐" }),
      new UTSJSONObject({ name: "热点" })
    ]);
    const subsectionCurrent = common_vendor.ref(0);
    function onSubsectionChange(e) {
      var _a;
      subsectionCurrent.value = (_a = e.getNumber("index")) !== null && _a !== void 0 ? _a : 0;
    }
    const parseContent1 = common_vendor.ref(`<p>这是一段普通的<span style="color: #2979ff;">富文本</span>内容，支持 <strong>加粗</strong>、<em>斜体</em> 等样式。</p><img src="https://picsum.photos/400/300?random=30" />`);
    const parseContent2 = common_vendor.ref(`<h1>一级标题</h1><h2>二级标题</h2><h3>三级标题</h3><p><b>粗体文字</b> <i>斜体文字</i> <u>下划线</u></p><blockquote>这是一段引用文字</blockquote><p>行内代码: <code>uni.__f__('log','at src/sub/uview-ultra/uview-ultra.uvue:1354','hello')</code></p><pre>function hello() {
  return 'world'
}</pre>`);
    common_vendor.ref(`<p>点击下方图片可预览：</p><img src="https://picsum.photos/400/300?random=31" /><p>点击 <a href="https://www.baidu.com">百度链接</a> 测试链接跳转</p>`);
    common_vendor.ref(`<table border="1" cellpadding="4" cellspacing="0"><tr><th>姓名</th><th>年龄</th></tr><tr><td>张三</td><td>28</td></tr><tr><td>李四</td><td>32</td></tr></table>`);
    common_vendor.ref(`<p>这是一段可以<span style="color: #fa3534;">长按复制</span>的文本内容，尝试长按选中。</p>`);
    common_vendor.ref(new UTSJSONObject({
      p: "font-size: 15px; color: #303133; line-height: 24px;"
    }));
    function onNavbarMiniLeftClick() {
      common_vendor.index.showToast({ title: "左侧按钮点击", icon: "none" });
    }
    function onNavbarMiniHomeClick() {
      common_vendor.index.showToast({ title: "首页按钮点击", icon: "none" });
    }
    const paginationCurrentPage = common_vendor.ref(1);
    const paginationPageSize = common_vendor.ref(10);
    const paginationTotal = common_vendor.ref(100);
    function onPaginationCurrentChange(page) {
      paginationCurrentPage.value = page;
      common_vendor.index.showToast({ title: `当前页: ${page}`, icon: "none" });
    }
    function onPaginationSizeChange(size) {
      paginationPageSize.value = size;
      common_vendor.index.showToast({ title: `每页: ${size} 条`, icon: "none" });
    }
    const paginationCurrentPage2 = common_vendor.ref(1);
    const paginationPageSize2 = common_vendor.ref(10);
    const paginationTotal2 = common_vendor.ref(50);
    function onPaginationCurrentChange2(page) {
      paginationCurrentPage2.value = page;
      common_vendor.index.showToast({ title: `当前页: ${page}`, icon: "none" });
    }
    common_vendor.ref(1);
    function onCopySuccess() {
      common_vendor.index.showToast({ title: "复制成功", icon: "success" });
    }
    const codeInputValue1 = common_vendor.ref("");
    const codeInputValue2 = common_vendor.ref("");
    common_vendor.ref("");
    common_vendor.ref("");
    common_vendor.ref("");
    common_vendor.ref("");
    function onCodeInputChange(e) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/uview-ultra.uvue:1423", "code-input change:", e);
    }
    function onCodeInputFinish(e) {
      common_vendor.index.showToast({ title: `输入完成: ${e}`, icon: "success" });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "uview-ultra 组件演示",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff"
        }),
        b: common_assets._imports_0,
        c: common_assets._imports_0,
        d: common_vendor.p({
          list: swiperList.value,
          ["key-name"]: "image",
          indicator: true,
          ["indicator-mode"]: "dot",
          circular: true,
          autoplay: true,
          interval: 3e3,
          height: "180",
          ["show-title"]: true
        }),
        e: common_vendor.p({
          src: "/static/logo.png",
          width: "60px",
          height: "60px"
        }),
        f: common_vendor.p({
          src: "/static/logo.png",
          width: "60px",
          height: "60px",
          shape: "circle"
        }),
        g: common_assets._imports_0,
        h: common_vendor.o(onPaginationCurrentChange, "06"),
        i: common_vendor.o(onPaginationSizeChange, "b6"),
        j: common_vendor.p({
          ["current-page"]: paginationCurrentPage.value,
          ["page-size"]: paginationPageSize.value,
          total: paginationTotal.value,
          layout: "prev, pager, next, total"
        }),
        k: common_vendor.o(onPaginationCurrentChange2, "a4"),
        l: common_vendor.p({
          ["current-page"]: paginationCurrentPage2.value,
          ["page-size"]: paginationPageSize2.value,
          total: paginationTotal2.value,
          layout: "prev, total, next",
          ["prev-text"]: "上一页",
          ["next-text"]: "下一页"
        }),
        m: common_vendor.o(onCopySuccess, "da"),
        n: common_vendor.p({
          content: "uview-ultra is great !"
        }),
        o: common_vendor.p({
          type: "primary",
          text: "点击复制",
          size: "mini"
        }),
        p: common_vendor.o(onCopySuccess, "76"),
        q: common_vendor.p({
          content: "uview-ultra is great !"
        }),
        r: common_vendor.p({
          ["border-color"]: "#2979ff",
          ["bg-color"]: "#f8faff",
          align: "left",
          padding: "12rpx 8rpx",
          ["font-size"]: "13px",
          color: "#303133"
        }),
        s: common_vendor.o(onCodeInputChange, "5d"),
        t: common_vendor.o(onCodeInputFinish, "9a"),
        v: common_vendor.o(($event) => {
          return codeInputValue1.value = $event;
        }, "1a"),
        w: common_vendor.p({
          maxlength: 6,
          mode: "box",
          modelValue: codeInputValue1.value
        }),
        x: common_vendor.o(onCodeInputFinish, "cd"),
        y: common_vendor.o(($event) => {
          return codeInputValue2.value = $event;
        }, "b0"),
        z: common_vendor.p({
          maxlength: 4,
          mode: "line",
          modelValue: codeInputValue2.value
        }),
        A: common_vendor.p({
          show: transitionShow1.value,
          mode: "fade"
        }),
        B: common_vendor.o(($event) => {
          return transitionShow1.value = !transitionShow1.value;
        }, "a7"),
        C: common_vendor.p({
          type: "primary",
          text: transitionShow1.value ? "隐藏" : "显示",
          size: "mini"
        }),
        D: common_vendor.f(transitionModes.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.getString("mode")),
            b: common_vendor.t(item.getString("mode")),
            c: "1a834c14-42-" + i0 + ",1a834c14-1",
            d: common_vendor.p({
              show: item.getBoolean("show") ?? false,
              mode: item.getString("mode")
            }),
            e: common_vendor.o(($event) => {
              return toggleTransitionMode(item);
            }, item.getString("mode")),
            f: "1a834c14-43-" + i0 + ",1a834c14-1",
            g: common_vendor.p({
              type: "primary",
              text: item.getBoolean("show") ?? false ? "隐藏" : "显示",
              size: "mini"
            }),
            h: item.getString("mode")
          };
        }),
        E: common_vendor.p({
          show: transitionShow3.value,
          mode: "slide-right",
          duration: 800,
          ["timing-function"]: "linear"
        }),
        F: common_vendor.o(($event) => {
          return transitionShow3.value = !transitionShow3.value;
        }, "f3"),
        G: common_vendor.p({
          type: "warning",
          text: transitionShow3.value ? "隐藏" : "显示",
          size: "mini"
        }),
        H: common_vendor.p({
          size: 180,
          val: "https://uview-ultra.lingyun.net"
        }),
        I: common_vendor.p({
          size: 180,
          val: "uview-ultra",
          icon: "https://uview-ultra.jiangruyi.com/uview-ultra/common/logo.png"
        }),
        J: common_vendor.p({
          content: parseContent1.value
        }),
        K: common_vendor.p({
          content: parseContent2.value
        }),
        L: common_vendor.p({
          title: "已下单",
          desc: "10:30"
        }),
        M: common_vendor.p({
          title: "已出库",
          desc: "10:35"
        }),
        N: common_vendor.p({
          title: "运输中",
          desc: "11:40"
        }),
        O: common_vendor.p({
          current: "0"
        }),
        P: common_vendor.p({
          title: "已下单",
          desc: "10:30"
        }),
        Q: common_vendor.p({
          title: "仓库着火",
          desc: "10:35",
          error: true
        }),
        R: common_vendor.p({
          title: "破产清算",
          desc: "11:40"
        }),
        S: common_vendor.p({
          current: "1"
        }),
        T: common_vendor.o(onNavbarMiniLeftClick, "45"),
        U: common_vendor.o(onNavbarMiniHomeClick, "8c"),
        V: common_vendor.p({
          fixed: false,
          ["safe-area-inset-top"]: false,
          ["left-icon"]: "arrow-left",
          ["bg-color"]: "rgba(41,121,255,0.85)",
          ["icon-color"]: "#ffffff",
          ["icon-size"]: 18,
          height: "32px"
        }),
        W: common_vendor.p({
          fixed: false,
          ["safe-area-inset-top"]: false,
          ["bg-color"]: "rgba(25,190,107,0.85)",
          ["icon-color"]: "#ffffff",
          ["icon-size"]: 16,
          height: "30px"
        }),
        X: common_vendor.o(onTabsClick, "46"),
        Y: common_vendor.o(onTabsChange, "76"),
        Z: common_vendor.p({
          list: tabsList1.value
        }),
        aa: common_vendor.o(onTabsClick, "96"),
        ab: common_vendor.p({
          list: tabsList2.value
        }),
        ac: common_vendor.p({
          text: "首页",
          icon: "home",
          name: "0"
        }),
        ad: common_vendor.p({
          text: "放映厅",
          icon: "photo",
          name: "1"
        }),
        ae: common_vendor.p({
          text: "直播",
          icon: "play-right",
          name: "2"
        }),
        af: common_vendor.p({
          text: "我的",
          icon: "account",
          name: "3"
        }),
        ag: common_vendor.o((e) => {
          return onTabbarChange1(e);
        }, "52"),
        ah: common_vendor.p({
          value: tabbarValue1.value,
          fixed: false,
          placeholder: false,
          ["safe-area-inset-bottom"]: false
        }),
        ai: common_vendor.p({
          text: "首页",
          icon: "home",
          dot: true,
          name: "0"
        }),
        aj: common_vendor.p({
          text: "消息",
          icon: "chat",
          badge: "3",
          name: "1"
        }),
        ak: common_vendor.p({
          text: "购物车",
          icon: "cart",
          badge: "99+",
          name: "2"
        }),
        al: common_vendor.p({
          text: "我的",
          icon: "account",
          name: "3"
        }),
        am: common_vendor.o((e) => {
          return onTabbarChange2(e);
        }, "a0"),
        an: common_vendor.p({
          value: tabbarValue2.value,
          fixed: false,
          placeholder: false,
          ["safe-area-inset-bottom"]: false
        }),
        ao: readMoreContent.value,
        ap: common_vendor.p({
          ["show-height"]: "120"
        }),
        aq: readMoreContent.value,
        ar: common_vendor.p({
          toggle: true,
          ["show-height"]: "120",
          ["close-text"]: "展开阅读全文",
          ["open-text"]: "收起"
        }),
        as: common_vendor.p({
          src: avatarSrc.value,
          size: "40"
        }),
        at: common_vendor.p({
          src: avatarSrc.value,
          size: "40",
          shape: "square"
        }),
        av: common_vendor.p({
          text: "U",
          size: "40",
          ["bg-color"]: "#2979ff"
        }),
        aw: common_vendor.p({
          text: "A",
          size: "40",
          ["bg-color"]: "#19be6b"
        }),
        ax: common_vendor.o(onLinkClick, "00"),
        ay: common_vendor.p({
          href: "https://uview-ultra.lingyun.net",
          text: "打开 uview-ultra UI 文档"
        }),
        az: common_vendor.o(onLinkClick, "e1"),
        aA: common_vendor.p({
          href: "https://uniapp.dcloud.net.cn",
          text: "uni-app X 官方文档",
          ["under-line"]: true
        }),
        aB: common_vendor.o(onLazyLoadClick, "d7"),
        aC: common_vendor.o(onLazyLoadError, "00"),
        aD: common_vendor.p({
          image: "https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg",
          ["loading-img"]: "/static/logo.png",
          height: 120,
          ["border-radius"]: 8,
          index: "img1"
        }),
        aE: common_vendor.o(onLazyLoadClick, "7e"),
        aF: common_vendor.o(onLazyLoadError, "77"),
        aG: common_vendor.p({
          image: "https://picsum.photos/240/240?random=22",
          ["loading-img"]: "/static/logo.png",
          height: 120,
          ["border-radius"]: 8,
          index: "img2"
        }),
        aH: common_vendor.o(onMpHtmlLoad, "96"),
        aI: common_vendor.o(onMpHtmlLinktap, "bc"),
        aJ: common_vendor.o(onMpHtmlImgtap, "2f"),
        aK: common_vendor.o(onMpHtmlError, "65"),
        aL: common_vendor.p({
          content: mpHtmlContent.value,
          ["preview-img"]: true,
          ["show-img-menu"]: true,
          selectable: true
        }),
        aM: common_vendor.p({
          status: loadmoreStatus.value,
          ["is-dot"]: loadmoreIsDot.value,
          line: true
        }),
        aN: common_vendor.o(($event) => {
          loadmoreStatus.value = "loadmore";
          loadmoreIsDot.value = false;
        }, "5d"),
        aO: common_vendor.p({
          type: "primary",
          text: "加载更多",
          size: "mini"
        }),
        aP: common_vendor.o(($event) => {
          loadmoreStatus.value = "loading";
          loadmoreIsDot.value = false;
        }, "36"),
        aQ: common_vendor.p({
          type: "warning",
          text: "加载中",
          size: "mini"
        }),
        aR: common_vendor.p({
          urls: albumUrls.value,
          ["multiple-size"]: "72",
          space: "6",
          ["max-count"]: 9,
          ["show-more"]: true,
          ["row-count"]: "3",
          radius: "6"
        }),
        aS: common_vendor.f(itemArr.value, (item, index, i0) => {
          return {
            a: "1a834c14-89-" + i0 + "," + ("1a834c14-88-" + i0),
            b: common_vendor.p({
              text: indexList.value[index]
            }),
            c: common_vendor.f(item, (cell, cellIndex, i1) => {
              return {
                a: common_vendor.t(cell),
                b: cellIndex
              };
            }),
            d: index,
            e: "1a834c14-88-" + i0 + ",1a834c14-87"
          };
        }),
        aT: common_vendor.p({
          ["index-list"]: indexList.value,
          sticky: true
        }),
        aU: common_vendor.p({
          title: "自定义导航栏",
          fixed: false,
          ["auto-back"]: false,
          ["safe-area-inset-top"]: false,
          ["bg-color"]: "#2979ff"
        }),
        aV: common_vendor.p({
          title: "浅色主题",
          fixed: false,
          ["auto-back"]: false,
          ["safe-area-inset-top"]: false,
          ["bg-color"]: "#ffffff",
          border: true
        }),
        aW: common_vendor.o(onSubsectionChange, "96"),
        aX: common_vendor.p({
          list: subsectionList.value,
          current: subsectionCurrent.value
        }),
        aY: common_vendor.f(waterfallLeftList.value, (item, k0, i0) => {
          return {
            a: item.getString("image"),
            b: common_vendor.t(item.getString("title")),
            c: common_vendor.t(item.getString("price")),
            d: item.getString("id")
          };
        }),
        aZ: common_vendor.f(waterfallRightList.value, (item, k0, i0) => {
          return {
            a: item.getString("image"),
            b: common_vendor.t(item.getString("title")),
            c: common_vendor.t(item.getString("price")),
            d: item.getString("id")
          };
        }),
        ba: common_vendor.o(loadMoreWaterfall, "a8"),
        bb: common_vendor.p({
          type: "primary",
          text: "加载更多",
          size: "mini"
        }),
        bc: common_vendor.o(clearWaterfall, "41"),
        bd: common_vendor.p({
          type: "info",
          text: "清空",
          size: "mini"
        }),
        be: common_vendor.o(($event) => {
          return value1.value = $event;
        }, "f1"),
        bf: common_vendor.p({
          title: "距离",
          options: options1.value,
          modelValue: value1.value
        }),
        bg: common_vendor.o(($event) => {
          return value2.value = $event;
        }, "8d"),
        bh: common_vendor.p({
          title: "温度",
          options: options2.value,
          modelValue: value2.value
        }),
        bi: common_vendor.o(($event) => {
          return dropdownGreenValue1.value = $event;
        }, "d8"),
        bj: common_vendor.p({
          title: "区域",
          options: dropdownRegionOptions1.value,
          modelValue: dropdownGreenValue1.value
        }),
        bk: common_vendor.o(($event) => {
          return dropdownGreenValue2.value = $event;
        }, "86"),
        bl: common_vendor.p({
          title: "排序",
          options: dropdownRegionOptions2.value,
          modelValue: dropdownGreenValue2.value
        }),
        bm: common_vendor.p({
          ["active-color"]: "#19be6b",
          ["inactive-color"]: "#909399",
          ["border-radius"]: 12,
          ["menu-icon"]: "arrow-down-fill",
          ["menu-icon-size"]: "22",
          ["title-size"]: "26",
          ["border-bottom"]: true
        }),
        bn: common_vendor.f(swipeActionList.value, (item, idx, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item.id,
            c: common_vendor.o(onSwipeActionClick, item.id),
            d: "1a834c14-102-" + i0 + ",1a834c14-101",
            e: common_vendor.p({
              options: swipeActionOptions.value,
              name: idx,
              ["close-on-click"]: true
            })
          };
        }),
        bo: common_vendor.p({
          ["auto-close"]: true
        }),
        bp: common_vendor.p({
          type: "primary",
          text: "主要",
          size: "mini"
        }),
        bq: common_vendor.p({
          type: "success",
          text: "成功",
          size: "mini"
        }),
        br: common_vendor.p({
          type: "warning",
          text: "警告",
          size: "mini"
        }),
        bs: common_vendor.p({
          type: "error",
          text: "错误",
          size: "mini"
        }),
        bt: common_vendor.p({
          type: "info",
          text: "信息",
          size: "mini"
        }),
        bv: common_vendor.p({
          type: "primary",
          text: "朴素",
          plain: true,
          size: "mini"
        }),
        bw: common_vendor.p({
          type: "primary",
          text: "细边框",
          plain: true,
          hairline: true,
          size: "mini"
        }),
        bx: common_vendor.p({
          type: "primary",
          text: "圆形",
          shape: "circle",
          size: "mini"
        }),
        by: common_vendor.p({
          type: "primary",
          text: "禁用",
          disabled: true,
          size: "mini"
        }),
        bz: common_vendor.p({
          name: "home",
          size: "28",
          label: "home",
          ["label-size"]: "10",
          ["label-pos"]: "bottom"
        }),
        bA: common_vendor.p({
          name: "search",
          size: "28",
          color: "#2979ff",
          label: "search",
          ["label-size"]: "10",
          ["label-pos"]: "bottom"
        }),
        bB: common_vendor.p({
          text: "普通文本"
        }),
        bC: common_vendor.p({
          mode: "price",
          text: "99.9"
        }),
        bD: common_vendor.p({
          text: "主要",
          type: "primary"
        }),
        bE: common_vendor.p({
          text: "成功",
          type: "success"
        }),
        bF: common_vendor.p({
          text: "警告",
          type: "warning"
        }),
        bG: common_vendor.p({
          text: "错误",
          type: "error"
        }),
        bH: common_vendor.p({
          text: "信息",
          type: "info"
        }),
        bI: common_vendor.p({
          text: "朴素",
          type: "primary",
          plain: true
        }),
        bJ: common_vendor.p({
          text: "圆形",
          type: "primary",
          shape: "circle"
        }),
        bK: common_vendor.p({
          value: 9,
          type: "error"
        }),
        bL: common_vendor.p({
          value: 99,
          type: "error"
        }),
        bM: common_vendor.p({
          title: "单元格",
          value: "内容"
        }),
        bN: common_vendor.p({
          icon: "setting-fill",
          title: "个人设置"
        }),
        bO: common_vendor.p({
          mode: "circle"
        }),
        bP: common_vendor.p({
          mode: "spinner"
        }),
        bQ: common_vendor.p({
          text: "基础组件结束"
        }),
        bR: common_vendor.p({
          time: 30 * 60 * 1e3,
          format: "HH:mm:ss"
        }),
        bS: common_vendor.p({
          ["start-val"]: 0,
          ["end-val"]: 9999,
          duration: 3e3
        }),
        bT: common_vendor.t(lineProgressValue1.value),
        bU: common_vendor.p({
          percentage: lineProgressValue1.value,
          ["show-text"]: true,
          ["active-color"]: "#2979ff"
        }),
        bV: common_vendor.t(lineProgressValue2.value),
        bW: common_vendor.p({
          percentage: lineProgressValue2.value,
          ["show-text"]: true,
          ["active-color"]: "#19be6b"
        }),
        bX: common_vendor.p({
          mode: "search",
          text: "暂无搜索结果"
        }),
        bY: common_vendor.p({
          text: "数据组件结束"
        }),
        bZ: common_vendor.p({
          span: "2"
        }),
        ca: common_vendor.p({
          span: "4"
        }),
        cb: common_vendor.p({
          span: "6"
        }),
        cc: common_vendor.p({
          justify: "space-between",
          gutter: "10"
        }),
        cd: common_vendor.p({
          name: "home",
          size: 26
        }),
        ce: common_vendor.p({
          name: "search",
          size: 26
        }),
        cf: common_vendor.p({
          col: 4,
          border: true
        }),
        cg: common_vendor.p({
          loading: skeletonLoading.value,
          animate: true,
          rows: 3,
          title: true,
          avatar: true
        }),
        ch: common_vendor.o(toggleSkeleton, "a3"),
        ci: common_vendor.p({
          type: "primary",
          text: "切换骨架屏状态",
          size: "mini"
        }),
        cj: common_vendor.p({
          text: "分割线"
        }),
        ck: common_vendor.p({
          text: "虚线",
          dashed: true
        }),
        cl: common_vendor.p({
          text: "布局组件结束"
        }),
        cm: `${scrollHeight.value}px`,
        cn: scrollViewScrollTop.value,
        co: common_vendor.o(onScroll, "35"),
        cp: common_vendor.o(onBackTopClick, "83"),
        cq: common_vendor.p({
          ["scroll-top"]: scrollTop.value,
          mode: "circle",
          icon: "arrow-upward",
          text: "顶部",
          top: 200,
          duration: 300,
          bottom: 100,
          right: 20,
          ["z-index"]: 99,
          ["icon-style"]: {
            fontSize: "20px",
            color: "#ffffff"
          },
          ["custom-style"]: {
            backgroundColor: "#2979ff"
          }
        }),
        cr: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "uview-ultra 示例"
        }),
        cs: common_vendor.gei(_ctx, ""),
        ct: common_vendor.p({
          id: common_vendor.gei(_ctx, "")
        }),
        cv: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/uview-ultra.js.map
