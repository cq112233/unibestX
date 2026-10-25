import pagePrompt from './page/prompt.js';
import componentPrompt from './component/prompt.js';

/**
 * Plop 主配置入口
 * @param {import('plop').NodePlopAPI} plop
 */
export default function (plop) {
  // 注册页面生成器
  plop.setGenerator('page', pagePrompt);

  // 注册组件生成器
  plop.setGenerator('component', componentPrompt);
}
