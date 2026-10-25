/**
 * 页面生成器配置
 */
export default {
  description: '创建新页面（严格符合 unibestX 分册 4/5 规范与 definePage 约定）',
  prompts: [
    {
      type: 'list',
      name: 'location',
      message: '请选择页面类型与存放目录：',
      choices: [
        { name: '分包多页面业务模块 (src/sub/<module>/<name>/)', value: 'subModule' },
        { name: '分包独立单页 (src/sub/<name>/)', value: 'subSingle' },
        { name: '主包页面 (src/pages/<name>/)', value: 'mainPage' }
      ],
      default: 'subSingle'
    },
    {
      type: 'input',
      name: 'module',
      message: '请输入业务模块名（如 order、user、goods）：',
      when: answers => answers.location === 'subModule',
      validate: (value) => {
        if (!value || !value.trim()) {
          return '模块名不能为空！';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入页面名称（camelCase 或 kebab-case，如 orderList 或 detail）：',
      validate: (value) => {
        if (!value || !value.trim()) {
          return '页面名称不能为空！';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'title',
      message: '请输入页面中文标题（用于导航栏与 definePage）：',
      default: answers => answers.name
    },
    {
      type: 'input',
      name: 'description',
      message: '请输入页面功能简介：',
      default: '功能页面'
    },
    {
      type: 'confirm',
      name: 'needApi',
      message: '是否同时创建对应的业务模块接口层文件？',
      default: true
    }
  ],
  actions: (data) => {
    const actions = [];
    let pagePath = '';
    const moduleName = data.module ? data.module : data.name;

    // 确定页面生成路径
    if (data.location === 'subModule') {
      pagePath = 'src/sub/{{ camelCase module }}/{{ camelCase name }}/{{ camelCase name }}.uvue';
    }
    else if (data.location === 'subSingle') {
      pagePath = 'src/sub/{{ camelCase name }}/{{ camelCase name }}.uvue';
    }
    else {
      pagePath = 'src/pages/{{ camelCase name }}/{{ camelCase name }}.uvue';
    }

    // 生成页面文件
    actions.push({
      type: 'add',
      path: pagePath,
      templateFile: 'plop/page/page.uvue.hbs'
    });

    // 若需要接口文件，按规范生成到 src/api/<module>/<file>.uts
    if (data.needApi) {
      actions.push({
        type: 'add',
        path: `src/api/${moduleName}/{{ camelCase name }}.uts`,
        templateFile: 'plop/page/api.uts.hbs',
        abortOnFail: false
      });
    }

    return actions;
  }
};
