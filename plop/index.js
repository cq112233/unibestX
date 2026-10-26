import pagePrompt from './page/prompt.js';
import componentPrompt from './component/prompt.js';
import hookPrompt from './hook/prompt.js';

/**
 * Plop 主配置入口
 * @param {import('plop').NodePlopAPI} plop
 */
export default function (plop) {
  // 注册页面生成器 (pnpm plop page)
  plop.setGenerator('page', pagePrompt);

  // 注册组件生成器 (pnpm plop component)
  plop.setGenerator('component', componentPrompt);

  // 注册 Hook 生成器 (pnpm plop hook)
  plop.setGenerator('hook', hookPrompt);
}
