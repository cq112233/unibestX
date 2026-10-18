/**
 * 契约自动挡板 Mock 文件 (Contract Mocking)
 *
 * ⚠️ 本文件由 scripts/api-generate.mjs 根据 Apifox / Swagger 契约规范全自动生成。
 * ⚠️ 请勿手动修改本文件。后端契约更新后，运行 pnpm api:gen 会全自动同步更新。
 * 💡 规则：手动编写的 Mock（如 mock/auth.ts, mock/foo.ts）拥有最高优先级，同名接口自动优先使用手写版。
 */
import type { MockMethod } from 'vite-plugin-mock';

export default [
  // [POST] /gateway/morningCheckReport/page - 晨间记录
  {
    url: '/gateway/morningCheckReport/page',
    method: 'post',
    timeout: 50,
    response: () => {
      return {
        success: true,
        code: '10000',
        msg: '业务处理成功',
        data: {
          currentPage: 1,
          pageSize: 10,
          totalNum: 2,
          isMore: 0,
          totalPage: 1,
          startIndex: 0,
          data: [
            {
              checkDate: '2026-07-27',
              diningHallName: '掌控者食安食堂',
              personName: '小李',
              completeStatus: 1,
              checkResult: 0,
              temperature: '38℃',
              healthCertStatus: 2,
              skinProblem: '异物',
              infectiousDisease: '无',
              facilitatorName: '掌控者',
              createTime: '2026-07-28 17:30:52'
            },
            {
              checkDate: '2026-07-27',
              diningHallName: '掌控者食安食堂',
              personName: '小王',
              completeStatus: 1,
              checkResult: 1,
              temperature: '36℃',
              healthCertStatus: 1,
              skinProblem: '无',
              infectiousDisease: '无',
              facilitatorName: '掌控者',
              createTime: '2026-07-28 17:30:52'
            }
          ]
        },
        extra: null
      };
    }
  },

  // [POST] /gateway/foodSampleReport/page -  留样记录报表分页列表
  {
    url: '/gateway/foodSampleReport/page',
    method: 'post',
    timeout: 50,
    response: () => {
      return {
        success: true,
        code: '10000',
        msg: '业务处理成功',
        data: {
          currentPage: 1,
          pageSize: 10,
          totalNum: 2,
          isMore: 0,
          totalPage: 1,
          startIndex: 0,
          data: [
            {
              checkDate: '2026-07-27',
              diningHallName: '掌控者食安食堂',
              personName: '小李',
              completeStatus: 1,
              checkResult: 0,
              temperature: '38℃',
              healthCertStatus: 2,
              skinProblem: '异物',
              infectiousDisease: '无',
              facilitatorName: '掌控者',
              createTime: '2026-07-28 17:30:52'
            },
            {
              checkDate: '2026-07-27',
              diningHallName: '掌控者食安食堂',
              personName: '小王',
              completeStatus: 1,
              checkResult: 1,
              temperature: '36℃',
              healthCertStatus: 1,
              skinProblem: '无',
              infectiousDisease: '无',
              facilitatorName: '掌控者',
              createTime: '2026-07-28 17:30:52'
            }
          ]
        },
        extra: null
      };
    }
  },

  // [POST] /gateway/ingredientTestReport/page - 食材检测记录报表
  {
    url: '/gateway/ingredientTestReport/page',
    method: 'post',
    timeout: 50,
    response: () => {
      return {
        success: true,
        code: '10000',
        msg: '业务处理成功',
        data: {
          currentPage: 1,
          pageSize: 10,
          totalNum: 2,
          isMore: 0,
          totalPage: 1,
          startIndex: 0,
          data: [
            {
              checkDate: '2026-07-27',
              diningHallName: '掌控者食安食堂',
              personName: '小李',
              completeStatus: 1,
              checkResult: 0,
              temperature: '38℃',
              healthCertStatus: 2,
              skinProblem: '异物',
              infectiousDisease: '无',
              facilitatorName: '掌控者',
              createTime: '2026-07-28 17:30:52'
            },
            {
              checkDate: '2026-07-27',
              diningHallName: '掌控者食安食堂',
              personName: '小王',
              completeStatus: 1,
              checkResult: 1,
              temperature: '36℃',
              healthCertStatus: 1,
              skinProblem: '无',
              infectiousDisease: '无',
              facilitatorName: '掌控者',
              createTime: '2026-07-28 17:30:52'
            }
          ]
        },
        extra: null
      };
    }
  },

  // [POST] /gateway/foodSampleReport/dishDetail - 留样记录菜品明细
  {
    url: '/gateway/foodSampleReport/dishDetail',
    method: 'post',
    timeout: 50,
    response: () => {
      return {
        success: true,
        code: '10000',
        msg: '业务处理成功',
        data: {
          currentPage: 1,
          pageSize: 10,
          totalNum: 2,
          isMore: 0,
          totalPage: 1,
          startIndex: 0,
          data: [
            {
              checkDate: '2026-07-27',
              diningHallName: '掌控者食安食堂',
              personName: '小李',
              completeStatus: 1,
              checkResult: 0,
              temperature: '38℃',
              healthCertStatus: 2,
              skinProblem: '异物',
              infectiousDisease: '无',
              facilitatorName: '掌控者',
              createTime: '2026-07-28 17:30:52'
            },
            {
              checkDate: '2026-07-27',
              diningHallName: '掌控者食安食堂',
              personName: '小王',
              completeStatus: 1,
              checkResult: 1,
              temperature: '36℃',
              healthCertStatus: 1,
              skinProblem: '无',
              infectiousDisease: '无',
              facilitatorName: '掌控者',
              createTime: '2026-07-28 17:30:52'
            }
          ]
        },
        extra: null
      };
    }
  },

  // [POST] /gateway/roomDisinfectionReport/page - 专间消毒记录报表
  {
    url: '/gateway/roomDisinfectionReport/page',
    method: 'post',
    timeout: 50,
    response: () => {
      return {
        success: true,
        code: '10000',
        msg: '业务处理成功',
        data: {
          currentPage: 1,
          pageSize: 10,
          totalNum: 2,
          isMore: 0,
          totalPage: 1,
          startIndex: 0,
          data: [
            {
              checkDate: '2026-07-27',
              diningHallName: '掌控者食安食堂',
              personName: '小李',
              completeStatus: 1,
              checkResult: 0,
              temperature: '38℃',
              healthCertStatus: 2,
              skinProblem: '异物',
              infectiousDisease: '无',
              facilitatorName: '掌控者',
              createTime: '2026-07-28 17:30:52'
            },
            {
              checkDate: '2026-07-27',
              diningHallName: '掌控者食安食堂',
              personName: '小王',
              completeStatus: 1,
              checkResult: 1,
              temperature: '36℃',
              healthCertStatus: 1,
              skinProblem: '无',
              infectiousDisease: '无',
              facilitatorName: '掌控者',
              createTime: '2026-07-28 17:30:52'
            }
          ]
        },
        extra: null
      };
    }
  },

  // [POST] /gateway/tablewareDisinfectionReport/page - 餐饮具消毒记录
  {
    url: '/gateway/tablewareDisinfectionReport/page',
    method: 'post',
    timeout: 50,
    response: () => {
      return {
        success: true,
        code: '10000',
        msg: '业务处理成功',
        data: {
          currentPage: 1,
          pageSize: 10,
          totalNum: 2,
          isMore: 0,
          totalPage: 1,
          startIndex: 0,
          data: [
            {
              checkDate: '2026-07-27',
              diningHallName: '掌控者食安食堂',
              personName: '小李',
              completeStatus: 1,
              checkResult: 0,
              temperature: '38℃',
              healthCertStatus: 2,
              skinProblem: '异物',
              infectiousDisease: '无',
              facilitatorName: '掌控者',
              createTime: '2026-07-28 17:30:52'
            },
            {
              checkDate: '2026-07-27',
              diningHallName: '掌控者食安食堂',
              personName: '小王',
              completeStatus: 1,
              checkResult: 1,
              temperature: '36℃',
              healthCertStatus: 1,
              skinProblem: '无',
              infectiousDisease: '无',
              facilitatorName: '掌控者',
              createTime: '2026-07-28 17:30:52'
            }
          ]
        },
        extra: null
      };
    }
  },

  // [POST] /gateway/hygienePatrolReport/page - 卫生巡查记录
  {
    url: '/gateway/hygienePatrolReport/page',
    method: 'post',
    timeout: 50,
    response: () => {
      return {
        success: true,
        code: '10000',
        msg: '业务处理成功',
        data: {
          currentPage: 1,
          pageSize: 10,
          totalNum: 2,
          isMore: 0,
          totalPage: 1,
          startIndex: 0,
          data: [
            {
              checkDate: '2026-07-27',
              diningHallName: '掌控者食安食堂',
              personName: '小李',
              completeStatus: 1,
              checkResult: 0,
              temperature: '38℃',
              healthCertStatus: 2,
              skinProblem: '异物',
              infectiousDisease: '无',
              facilitatorName: '掌控者',
              createTime: '2026-07-28 17:30:52'
            },
            {
              checkDate: '2026-07-27',
              diningHallName: '掌控者食安食堂',
              personName: '小王',
              completeStatus: 1,
              checkResult: 1,
              temperature: '36℃',
              healthCertStatus: 1,
              skinProblem: '无',
              infectiousDisease: '无',
              facilitatorName: '掌控者',
              createTime: '2026-07-28 17:30:52'
            }
          ]
        },
        extra: null
      };
    }
  }
] as MockMethod[];
