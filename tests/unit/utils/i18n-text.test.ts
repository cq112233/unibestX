import { describe, expect, it, vi } from 'vitest';
import i18n from '@/src/i18n';
import { getI18nText, isI18nKeyLike } from '@/src/i18n/utils/index.uts';

describe('i18n text Unit Tests', () => {
  describe('isI18nKeyLike', () => {
    it('should accept dotted ascii keys', () => {
      expect(isI18nKeyLike('tabbar.home')).toBe(true);
      expect(isI18nKeyLike('basic.langTitle')).toBe(true);
    });

    it('should reject display text (chinese / spaced / dotless)', () => {
      expect(isI18nKeyLike('Crypto 加密解密')).toBe(false);
      expect(isI18nKeyLike('时间日期操作')).toBe(false);
      expect(isI18nKeyLike('AI')).toBe(false);
      expect(isI18nKeyLike('')).toBe(false);
      expect(isI18nKeyLike('.hidden')).toBe(false);
      // 含点号但夹了非 ASCII，仍视为展示原文
      expect(isI18nKeyLike('v1.0 计算')).toBe(false);
    });
  });

  describe('getI18nText', () => {
    it('should translate key-like titles', () => {
      const spy = vi.spyOn(i18n.global, 't');
      getI18nText('tabbar.home');
      expect(spy).toHaveBeenCalledWith('tabbar.home');
      spy.mockRestore();
    });

    it('should translate %xxx% wrapped titles', () => {
      const spy = vi.spyOn(i18n.global, 't');
      getI18nText('%basic.langTitle%');
      expect(spy).toHaveBeenCalledWith('basic.langTitle');
      spy.mockRestore();
    });

    it('should pass display text through without touching i18n', () => {
      const spy = vi.spyOn(i18n.global, 't');
      // 中文标题原文：原样返回且不查询翻译（否则 lime-i18n 会打「无法翻译键路径」告警）
      expect(getI18nText('Crypto 加密解密')).toBe('Crypto 加密解密');
      expect(getI18nText('时间日期操作')).toBe('时间日期操作');
      expect(getI18nText('隐私政策')).toBe('隐私政策');
      expect(spy).not.toHaveBeenCalled();
      spy.mockRestore();
    });
  });
});
