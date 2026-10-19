import type { MockMethod } from 'vite-plugin-mock';

const mockDishDetail = {
  success: true,
  code: 200,
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
        checkDate: '2026-10-19',
        diningHallName: '一号餐厅留样间',
        personName: '张留样员',
        completeStatus: 1,
        checkResult: 1,
        temperature: '36.5℃',
        healthCertStatus: 1,
        skinProblem: '正常',
        infectiousDisease: '无',
        facilitatorName: '智慧食安中心',
        createTime: '2026-10-19 11:30:00'
      },
      {
        checkDate: '2026-10-19',
        diningHallName: '二号学生食堂',
        personName: '李留样员',
        completeStatus: 1,
        checkResult: 1,
        temperature: '36.3℃',
        healthCertStatus: 1,
        skinProblem: '正常',
        infectiousDisease: '无',
        facilitatorName: '智慧食安中心',
        createTime: '2026-10-19 12:00:00'
      }
    ]
  },
  extra: null
};

export default [
  // 留样记录菜品明细 POST /gateway/foodSampleReport/dishDetail
  {
    url: '/api/gateway/foodSampleReport/dishDetail',
    method: 'post',
    timeout: 80,
    response: () => mockDishDetail
  },
  {
    url: '/api-secondary/gateway/foodSampleReport/dishDetail',
    method: 'post',
    timeout: 80,
    response: () => mockDishDetail
  },
  {
    url: '/gateway/foodSampleReport/dishDetail',
    method: 'post',
    timeout: 80,
    response: () => mockDishDetail
  }
] as MockMethod[];
