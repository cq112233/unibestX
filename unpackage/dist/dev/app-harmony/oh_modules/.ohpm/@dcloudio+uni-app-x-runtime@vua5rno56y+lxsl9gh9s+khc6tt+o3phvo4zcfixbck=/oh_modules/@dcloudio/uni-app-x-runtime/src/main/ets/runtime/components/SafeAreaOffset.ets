import { getSafeAreaInsets, onSafeAreaInsetsChange, offSafeAreaInsetsChange } from '../helper';

interface SafeAreaInsets {
  top?: number
  bottom?: number
}

@Component
export struct SafeAreaOffset {
  @Prop type: string
  @State h: number = 0
  onSafeAreaInsetsChange = (safeAreaInsets: SafeAreaInsets) => {
    if (this.type === 'top' && typeof safeAreaInsets.top === 'number') {
      this.h = safeAreaInsets.top
    } else if (this.type === 'bottom' && typeof safeAreaInsets.bottom === 'number') {
      this.h = safeAreaInsets.bottom
    }
  }

  build() {
    Stack().height(this.h).width('100%')
  }

  aboutToAppear(): void {
    const safeAreaInsets = getSafeAreaInsets(false) as SafeAreaInsets
    this.onSafeAreaInsetsChange(safeAreaInsets)
    onSafeAreaInsetsChange(this.onSafeAreaInsetsChange, false)
  }

  aboutToDisappear(): void {
    offSafeAreaInsetsChange(this.onSafeAreaInsetsChange)
  }
}
