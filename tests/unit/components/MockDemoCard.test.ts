import { mount } from '@vue/test-utils';
import { afterEach, describe, expect, it, vi } from 'vitest';
import MockDemoCard from '@/src/sub/httpBasicDemo/components/MockDemoCard.uvue';

/**
 * 本地 Mock 卡片（vite-plugin-mock + useQuery / useMutation）行为验证
 *
 * 验证目标：
 * 1. 初始两个状态机都是 idle，且页面不自动发起请求（useQuery enabled=false）；
 * 2. 点击列表按钮才 refetch，pending → success，展示映射后的摘要；
 * 3. 登录 mutation 成功 / 失败分别反映到徽标与文案。
 */

const { fetchMockFooListMock, fetchMockLoginMock } = vi.hoisted(() => {
  return {
    fetchMockFooListMock: vi.fn(),
    fetchMockLoginMock: vi.fn()
  };
});

vi.mock('@/src/api/example.uts', () => {
  return {
    fetchMockFooList: fetchMockFooListMock,
    fetchMockLogin: fetchMockLoginMock
  };
});

function defer<T>() {
  let resolve!: (value: T) => void;
  let reject!: (err: any) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

async function flush(times = 4): Promise<void> {
  for (let i = 0; i < times; i++) {
    await new Promise(resolve => setTimeout(resolve, 0));
  }
}

function findButton(wrapper: ReturnType<typeof mount>, bgClass: string) {
  const buttons = wrapper.findAll('view').filter(node => node.classes().includes(bgClass));
  return buttons.length > 0 ? buttons[0] : null;
}

describe('mockDemoCard (vite-plugin-mock + hooks)', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('初始为 idle，且不会自动请求（enabled=false）', () => {
    const wrapper = mount(MockDemoCard);

    expect(wrapper.text()).toContain('本地 Mock 拦截');
    expect(wrapper.text()).toContain('vite-plugin-mock');
    expect(wrapper.text()).toContain('pnpm dev:mock');
    // 两个状态机都还没动过
    expect(wrapper.text()).toContain('idle');
    expect(fetchMockFooListMock).not.toHaveBeenCalled();
    expect(fetchMockLoginMock).not.toHaveBeenCalled();
  });

  it('点击后才 refetch：pending → success，并展示列表摘要', async () => {
    const pending = defer<any>();
    fetchMockFooListMock.mockReturnValue(pending.promise);

    const wrapper = mount(MockDemoCard);
    const button = findButton(wrapper, 'bg-[#ec4899]');
    expect(button).not.toBeNull();

    await button!.trigger('click');
    await flush();

    expect(fetchMockFooListMock).toHaveBeenCalledTimes(1);
    expect(wrapper.text()).toContain('fetching');
    expect(wrapper.text()).toContain('拦截中…');

    pending.resolve({
      list: [
        { id: 1, name: 'unix', desc: 'uni-app X 核心架构' },
        { id: 2, name: 'UnibestX', desc: '最好的 uni-app X 跨端开发模板' }
      ],
      hasMore: false,
      total: 2
    });
    await flush();

    expect(wrapper.text()).toContain('success');
    expect(wrapper.text()).toContain('共 2 条');
    expect(wrapper.text()).toContain('unix / UnibestX');
  });

  it('登录 mutation 成功后展示 token 与昵称', async () => {
    fetchMockLoginMock.mockResolvedValue({
      token: 'mock-token-123',
      expiresIn: 7200,
      username: 'admin',
      nickname: '超级管理员'
    });

    const wrapper = mount(MockDemoCard);
    const button = findButton(wrapper, 'bg-[#6366f1]');
    expect(button).not.toBeNull();

    await button!.trigger('click');
    await flush();

    expect(fetchMockLoginMock).toHaveBeenCalledWith('admin', '123456');
    expect(wrapper.text()).toContain('success');
    expect(wrapper.text()).toContain('超级管理员（admin）');
    expect(wrapper.text()).toContain('mock-token-123');
  });

  it('登录失败时展示 mutation.error 文案', async () => {
    fetchMockLoginMock.mockReturnValue(Promise.reject(new Error('密码错误，测试账号密码为 123456')));

    const wrapper = mount(MockDemoCard);
    const button = findButton(wrapper, 'bg-[#6366f1]');
    await button!.trigger('click');
    await flush();

    expect(wrapper.text()).toContain('error');
    expect(wrapper.text()).toContain('密码错误，测试账号密码为 123456');
  });

  it('列表查询失败时提示可能未以 dev:mock 启动', async () => {
    fetchMockFooListMock.mockReturnValue(Promise.reject(new Error('未授权[401]：未登录')));

    const wrapper = mount(MockDemoCard);
    const button = findButton(wrapper, 'bg-[#ec4899]');
    await button!.trigger('click');
    await flush();

    expect(wrapper.text()).toContain('error');
    expect(wrapper.text()).toContain('pnpm dev:mock');
  });
});
