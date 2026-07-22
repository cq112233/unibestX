const fs = require('fs');

const pagesJsonPath = 'pages.json';
const data = JSON.parse(fs.readFileSync(pagesJsonPath, 'utf8'));

const demos = [
  { path: 'grid', title: 'up-grid 宫格' },
  { path: 'line', title: 'up-line 线条' },
  { path: 'album', title: 'up-album 相册' },
  { path: 'gap', title: 'up-gap 间隔槽' },
  { path: 'sticky', title: 'up-sticky 吸顶' },
  { path: 'keyboard', title: 'up-keyboard 键盘' },
  { path: 'dropdown', title: 'up-dropdown 下拉菜单' },
  { path: 'swipe-action', title: 'up-swipe-action 滑动操作' },
  { path: 'circle-progress', title: 'up-circle-progress 圆形进度条' },
  { path: 'line-progress', title: 'up-line-progress 线型进度条' },
  { path: 'count-down', title: 'up-count-down 倒计时' },
  { path: 'count-to', title: 'up-count-to 数字滚动' },
  { path: 'navbar', title: 'up-navbar 导航栏' },
  { path: 'tabbar', title: 'up-tabbar 底部导航' },
  { path: 'tabs', title: 'up-tabs 标签页' },
  { path: 'subsection', title: 'up-subsection 分段器' },
  { path: 'index-list', title: 'up-index-list 索引列表' }
];

const subPkg = data.subPackages.find(sp => sp.root === 'src/sub');

for (const demo of demos) {
  const pagePath = `uview-ultra/demos/${demo.path}/${demo.path}`;
  if (!subPkg.pages.find(p => p.path === pagePath)) {
    subPkg.pages.push({
      path: pagePath,
      style: {
        navigationStyle: 'custom',
        navigationBarTitleText: demo.title
      }
    });
  }
}

fs.writeFileSync(pagesJsonPath, JSON.stringify(data, null, 2));
console.log('pages.json updated');
