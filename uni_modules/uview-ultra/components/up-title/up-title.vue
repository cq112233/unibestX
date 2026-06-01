<style scoped lang="scss">
    .up-title {
		.up-title-prefix {
		    width: 4px;
		    height: 18px;
		    border-radius: 2px;
		    background: $up-primary;
		    margin-right: 12px;
		    margin-right :10px;
		}
    }
</style>
<template>
    <view class="up-title up-flex-row up-flex-y-center">
        <slot name="prefix">
            <view class="up-title-prefix">
            </view>
        </slot>
        <slot></slot>
    </view>
</template>
<script>
export default {
    name: 'up-title',
    props: {
    },
    data() {
        return {
        }
    },
    created: function () {
    },
    methods: {
    }
}
</script>
