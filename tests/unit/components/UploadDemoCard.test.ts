import { mount } from '@vue/test-utils';
import { afterEach, describe, expect, it, vi } from 'vitest';
import UploadDemoCard from '@/src/sub/httpBasicDemo/components/UploadDemoCard.uvue';

/**
 * 上传卡片（useMutation 驱动）行为验证
 *
 * 验证目标：
 * 1. 初始为 idle 且显示「未选择文件」；
 * 2. 选择图片后 mutation 进入 pending，成功时渲染直链与预览图；
 * 3. 上传失败时展示 mutation.error 的文案；
 * 4. 选图失败（本地异常）优先展示本地错误，而不是走 mutation。
 */

const { uploadFooFileMock } = vi.hoisted(() => {
  return {
    uploadFooFileMock: vi.fn()
  };
});

vi.mock('@/src/api/example.uts', () => {
  return {
    FOO_UPLOAD_PATH: 'https://tmpfiles.org/api/v1/upload',
    uploadFooFile: uploadFooFileMock
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

/** 让 uni.chooseImage 直接回一个临时文件路径 */
function stubChooseImageSuccess(path: string): void {
  (globalThis as any).uni.chooseImage = vi.fn((options: any) => {
    options.success({ tempFilePaths: [path], tempFiles: [] });
  });
}

/** 让 uni.chooseImage 走失败分支 */
function stubChooseImageFail(errMsg: string): void {
  (globalThis as any).uni.chooseImage = vi.fn((options: any) => {
    options.fail({ errMsg });
  });
}

/** 上传按钮：外层容器文本同样匹配，且顶部装饰条也带同色 class，需按高度 + 文案精确定位 */
function findUploadButton(wrapper: ReturnType<typeof mount>) {
  const buttons = wrapper.findAll('view').filter(
    node => node.classes().includes('h-[42px]') && node.text().trim() == '选择图片并上传'
  );
  return buttons.length > 0 ? buttons[0] : null;
}

describe('uploadDemoCard (useMutation)', () => {
  afterEach(() => {
    vi.clearAllMocks();
    delete (globalThis as any).uni.chooseImage;
  });

  it('初始渲染为 idle，并提示未选择文件', () => {
    const wrapper = mount(UploadDemoCard);

    expect(wrapper.text()).toContain('上传结果（useMutation）');
    expect(wrapper.text()).toContain('idle');
    expect(wrapper.text()).toContain('未选择文件');
  });

  it('选择图片后先进入 pending，成功后展示上传链接', async () => {
    const pending = defer<string>();
    uploadFooFileMock.mockReturnValue(pending.promise);
    stubChooseImageSuccess('/tmp/pick.png');

    const wrapper = mount(UploadDemoCard);
    const button = findUploadButton(wrapper);
    expect(button).not.toBeNull();

    await button!.trigger('click');
    await flush();

    // pending 阶段：状态徽标与按钮文案都跟随 mutation.isPending
    expect(wrapper.text()).toContain('pending');
    expect(wrapper.text()).toContain('正在上传...');
    expect(uploadFooFileMock).toHaveBeenCalledTimes(1);
    expect(uploadFooFileMock.mock.calls[0][0]).toBe('/tmp/pick.png');

    pending.resolve('https://tmpfiles.org/dl/1/pick.png');
    await flush();

    expect(wrapper.text()).toContain('success');
    expect(wrapper.text()).toContain('https://tmpfiles.org/dl/1/pick.png');
    // 上传成功后展示图片预览（:src 直接绑定 mutation.data）
    expect(wrapper.find('image').attributes('src')).toBe('https://tmpfiles.org/dl/1/pick.png');
  });

  it('上传失败时展示 mutation.error 的文案并进入 error 状态', async () => {
    uploadFooFileMock.mockReturnValue(Promise.reject(new Error('上传响应中未找到文件地址')));
    stubChooseImageSuccess('/tmp/pick.png');

    const wrapper = mount(UploadDemoCard);
    const button = findUploadButton(wrapper);
    await button!.trigger('click');
    await flush();

    expect(wrapper.text()).toContain('error');
    expect(wrapper.text()).toContain('上传响应中未找到文件地址');
  });

  it('选图失败属于本地错误，不会触发上传 mutation', async () => {
    stubChooseImageFail('chooseImage:fail 用户取消');

    const wrapper = mount(UploadDemoCard);
    const button = findUploadButton(wrapper);
    await button!.trigger('click');
    await flush();

    // 用户取消时静默，不显示错误也不上传
    expect(uploadFooFileMock).not.toHaveBeenCalled();
    expect(wrapper.text()).toContain('idle');
  });

  it('再次上传会先 reset 掉上一轮结果（失败后不残留旧链接）', async () => {
    uploadFooFileMock.mockReturnValueOnce(Promise.resolve('https://tmpfiles.org/dl/1/first.png'));
    stubChooseImageSuccess('/tmp/first.png');

    const wrapper = mount(UploadDemoCard);
    const button = findUploadButton(wrapper);
    await button!.trigger('click');
    await flush();
    expect(wrapper.text()).toContain('first.png');

    const second = defer<string>();
    uploadFooFileMock.mockReturnValueOnce(second.promise);
    stubChooseImageSuccess('/tmp/second.png');
    await button!.trigger('click');
    await flush();

    // 第二轮 pending 期间不应继续显示第一轮的链接
    expect(wrapper.text()).toContain('正在上传...');
    expect(wrapper.text()).not.toContain('first.png');

    second.reject(new Error('网络错误'));
    await flush();
    expect(wrapper.text()).toContain('网络错误');
    expect(wrapper.text()).not.toContain('first.png');
  });
});
