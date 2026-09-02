import { ref } from 'vue';

export const isPageScrollDisabled = ref(false);

export function setPageScrollEnabled(enabled: boolean) {
  isPageScrollDisabled.value = !enabled;
}
