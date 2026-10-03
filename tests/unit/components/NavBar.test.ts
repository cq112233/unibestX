import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import NavBar from '@/src/components/NavBar/NavBar.uvue';

describe('navBar.uvue Component Tests', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should render navbar title correctly', () => {
    const wrapper = mount(NavBar, {
      props: {
        title: '我的测试页面'
      }
    });

    expect(wrapper.text()).toContain('我的测试页面');
    expect(wrapper.find('.navbar-title').text()).toBe('我的测试页面');
  });

  it('should render back button by default when showBack is true', () => {
    const wrapper = mount(NavBar, {
      props: {
        title: '详情页',
        showBack: true
      }
    });

    expect(wrapper.find('.navbar-back-btn').exists()).toBe(true);
  });

  it('should hide back button when showBack is false', () => {
    const wrapper = mount(NavBar, {
      props: {
        title: '首页',
        showBack: false
      }
    });

    expect(wrapper.find('.navbar-back-btn').exists()).toBe(false);
  });

  it('should support custom slots for mid and right content', () => {
    const wrapper = mount(NavBar, {
      slots: {
        mid: '<div class="custom-search-bar">搜索</div>',
        right: '<button class="custom-action-btn">分享</button>'
      }
    });

    expect(wrapper.find('.custom-search-bar').exists()).toBe(true);
    expect(wrapper.find('.custom-action-btn').exists()).toBe(true);
  });
});
