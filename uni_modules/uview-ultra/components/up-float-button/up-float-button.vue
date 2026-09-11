<template>
    <view
        class="up-float-button"
        :style="containerStyle"
    >
        <!-- 当菜单向上展开时（bottom 定位），列表渲染在主按钮上方 -->
        <view
            v-if="!isTopLayout && showList"
            class="up-float-button__list up-float-button__list--bottom"
        >
            <view
                v-for="(item, index) in displayList"
                :key="index"
                class="up-float-button__item"
                :style="getItemStyle(item)"
                @click.stop="itemClick(item, index)"
            >
                <up-icon :name="item.name" :color="(item && item.color) ? item.color : color"></up-icon>
            </view>
            <slot name="list"></slot>
        </view>

        <!-- 主按钮 -->
        <view
            class="up-float-button__main"
            @click="clickHandler"
            :style="mainButtonStyle"
        >
            <slot :showList="showList">
                <up-icon class="cursor-pointer" :class="{'show-list': showList}" name="plus" :color="color"></up-icon>
            </slot>
        </view>

        <!-- 当菜单向下展开时（top 定位），列表渲染在主按钮下方 -->
        <view
            v-if="isTopLayout && showList"
            class="up-float-button__list up-float-button__list--top"
        >
            <view
                v-for="(item, index) in displayList"
                :key="index"
                class="up-float-button__item"
                :style="getItemStyle(item)"
                @click.stop="itemClick(item, index)"
            >
                <up-icon :name="item.name" :color="(item && item.color) ? item.color : color"></up-icon>
            </view>
            <slot name="list"></slot>
        </view>
    </view>
</template>

<script>
import { mpMixin } from '../../libs/mixin/mpMixin';
import { mixin } from '../../libs/mixin/mixin';
import { addStyle, addUnit } from '../../libs/function/index';

export default {
    name: 'up-float-button',
    mixins: [mpMixin, mixin],
    emits: ['click', 'item-click'],
    props: {
        backgroundColor: {
            type: String,
            default: '#2979ff'
        },
        color: {
            type: String,
            default: '#fff'
        },
        width: {
            type: String,
            default: '50px'
        },
        height: {
            type: String,
            default: '50px'
        },
        borderColor: {
            type: String,
            default: ''
        },
        right: {
            type: [String, Number],
            default: '30px'
        },
        left: {
            type: [String, Number],
            default: ''
        },
        top: {
            type: [String, Number],
            default: ''
        },
        bottom: {
            type: [String, Number],
            default: ''
        },
        isMenu: {
            type: Boolean,
            default: false
        },
        list: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            showList: false
        }
    },
    computed: {
        isTopLayout() {
            return this.top != null && this.top !== '' && (!this.bottom || this.bottom === '')
        },
        isMenuComputed() {
            return this.isMenu === true || this['is-menu'] === true || this.$attrs['is-menu'] === true || this.$attrs['isMenu'] === true
        },
        displayList() {
            const raw = this.list
            if (raw && raw.value && Array.isArray(raw.value)) {
                return raw.value
            }
            if (Array.isArray(raw)) {
                return raw
            }
            return []
        },
        containerStyle() {
            const style = {
                position: 'fixed',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 999
            }
            if (this.left != null && this.left !== '') {
                style.left = addUnit(this.left)
            } else if (this.right != null && this.right !== '') {
                style.right = addUnit(this.right)
            }
            if (this.top != null && this.top !== '') {
                style.top = addUnit(this.top)
            } else if (this.bottom != null && this.bottom !== '') {
                style.bottom = addUnit(this.bottom)
            }
            return style
        },
        mainButtonStyle() {
            return {
                backgroundColor: this.backgroundColor,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: addUnit(this.width),
                height: addUnit(this.height),
                borderRadius: '999px',
                overflow: 'hidden',
                borderColor: this.borderColor
            }
        }
    },
    methods: {
        addStyle,
        getItemStyle(item) {
            const bg = (item && (item.backgroundColor || item['background-color'])) ? (item.backgroundColor || item['background-color']) : this.backgroundColor
            const border = (item && (item.borderColor || item['border-color'])) ? (item.borderColor || item['border-color']) : this.borderColor
            return {
                backgroundColor: bg,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: addUnit(this.width),
                height: addUnit(this.height),
                borderRadius: '999px',
                overflow: 'hidden',
                borderColor: border
            }
        },
        clickHandler(e) {
            if (this.isMenuComputed) {
                this.showList = !this.showList
            }
            this.$emit('click', e)
        },
        itemClick(item, index) {
            this.$emit('item-click', {
                ...item,
                index
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.up-float-button {
    position: fixed;
    z-index: 999;
    user-select: none;

    &__main {
        position: relative;
        cursor: pointer;
        transition: transform 0.15s ease;
        z-index: 1000;

        &:active {
            transform: scale(0.95);
        }
    }

    &__list {
        display: flex;
        flex-direction: column;
        align-items: center;

        &--bottom {
            margin-bottom: 12px;
        }

        &--top {
            margin-top: 12px;
        }
    }

    &__item {
        margin-bottom: 10px;
        cursor: pointer;
        transition: transform 0.15s ease;

        &:last-child {
            margin-bottom: 0;
        }

        &:active {
            transform: scale(0.92);
        }
    }
}

.show-list {
    transform: rotate(45deg);
    transition: transform 0.25s ease;
}
</style>
