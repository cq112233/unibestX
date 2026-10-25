/**
 * 组件生成器配置
 */
export default {
  description: '创建新组件（严格符合 unibestX 分册 4.5 规范：单根节点、纯展示、Props/Emits 明确）',
  prompts: [
    {
      type: 'list',
      name: 'scope',
      message: '请选择组件类型：',
      choices: [
        { name: '跨页面公共组件 (src/components/<ComponentName>/)', value: 'global' },
        { name: '页面私有组件 (指定页面的 components/ 目录下)', value: 'pagePrivate' }
      ],
      default: 'global'
    },
    {
      type: 'input',
      name: 'pageDir',
      message: '请输入页面路径（如 src/sub/order 或 src/pages/index）：',
      when: answers => answers.scope === 'pagePrivate',
      validate: (value) => {
        if (!value || !value.trim()) {
          return '页面路径不能为空！';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入组件名称（PascalCase，如 OrderCard 或 UserBadge）：',
      validate: (value) => {
        if (!value || !value.trim()) {
          return '组件名称不能为空！';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'description',
      message: '请输入组件中文描述与用途：',
      default: answers => `${answers.name} 展示组件`
    }
  ],
  actions: (data) => {
    let targetPath = '';

    if (data.scope === 'global') {
      targetPath = 'src/components/{{ pascalCase name }}/{{ pascalCase name }}.uvue';
    }
    else {
      const cleanDir = data.pageDir.replace(/\/+$/, '');
      targetPath = `${cleanDir}/components/{{ pascalCase name }}.uvue`;
    }

    return [
      {
        type: 'add',
        path: targetPath,
        templateFile: 'plop/component/component.uvue.hbs'
      }
    ];
  }
};
