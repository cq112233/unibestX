const fs = require('fs');

const demos = {
  'grid': '<up-grid :border="true"><up-grid-item v-for="i in 4" :key="i"><up-icon name="photo" :size="30"></up-icon><text style="margin-top:10px;font-size:14px;color:#333;">宫格</text></up-grid-item></up-grid>',
  'line': '<up-line color="#2979ff" length="100%"></up-line>',
  'album': '<up-album :urls="[\'https://cdn.uviewui.com/uview/album/1.jpg\', \'https://cdn.uviewui.com/uview/album/2.jpg\']"></up-album>',
  'gap': '<up-gap height="30" bgColor="#f3f4f6"></up-gap>',
  'sticky': '<up-sticky><up-button type="primary" text="吸顶按钮" style="width: 150px;"></up-button></up-sticky>',
  'keyboard': '<up-keyboard mode="number" :show="true" :safeAreaInsetBottom="true"></up-keyboard>',
  'dropdown': '<up-dropdown><up-dropdown-item title="属性" :options="[{label:\'默认\', value:1}, {label:\'最新\', value:2}]"></up-dropdown-item></up-dropdown>',
  'swipe-action': '<up-swipe-action><up-swipe-action-item :options="[{text:\'删除\', style:{backgroundColor:\'#f56c6c\'}}]" ><view style="padding:15px;background:#fff;border-radius:5px;">左滑查看操作选项</view></up-swipe-action-item></up-swipe-action>',
  'line-progress': '<up-line-progress :percentage="50" activeColor="#2979ff"></up-line-progress>',
  'count-down': '<up-count-down :time="30 * 60 * 60 * 1000" format="HH:mm:ss"></up-count-down>',
  'count-to': '<up-count-to :endVal="1000" color="#2979ff" :fontSize="30"></up-count-to>',
  'navbar': '<up-navbar title="自定义标题" :fixed="false" leftText="返回" bgColor="#f8fafc"></up-navbar>',
  'tabbar': '<up-tabbar :value="0" :fixed="false" :safeAreaInsetBottom="false"><up-tabbar-item text="首页" icon="home"></up-tabbar-item><up-tabbar-item text="我的" icon="account"></up-tabbar-item></up-tabbar>',
  'tabs': '<up-tabs :list="[{name:\'关注\'},{name:\'推荐\'},{name:\'科技\'}]"></up-tabs>',
  'subsection': '<up-subsection :list="[\'待付款\', \'待发货\', \'待收货\']" :current="1"></up-subsection>',
  'index-list': '<view style="height:300px;"><up-index-list><up-index-anchor text="A"></up-index-anchor><up-index-item><view style="padding:10px;">阿里巴巴</view></up-index-item></up-index-list></view>'
};

for (const [comp, templateStr] of Object.entries(demos)) {
  const filePath = `src/sub/uview-ultra/demos/${comp}/${comp}.uvue`;
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(`<up-${comp}></up-${comp}>`, templateStr);
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${comp}`);
  }
}
