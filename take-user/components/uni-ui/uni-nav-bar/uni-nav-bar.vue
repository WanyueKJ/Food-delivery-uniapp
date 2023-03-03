<template>
	<view>
		<view class="status_bar">
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<view :style="'height:' + system_top + 'px'" style="width: 100%; background-color: #FFFFFF;">
		</view>
		<!-- #endif -->
		<view :class="{ 'uni-navbar--fixed': fixed, 'uni-navbar--shadow': shadow, 'uni-navbar--border': border }" :style="{ 'background-color': backgroundColor }"
		 class="uni-navbar__content">
			<view :style="{ color: color,backgroundColor: backgroundColor }" class="uni-navbar__header uni-navbar__content_view">
				<view @tap="onClickLeft" class="uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view">
					<view class="uni-navbar__content_view" v-if="leftIcon.length">
						<uni-icons :color="color" :type="leftIcon" size="24" />
					</view>
					<view :class="{ 'uni-navbar-btn-icon-left': !leftIcon.length }" class="uni-navbar-btn-text uni-navbar__content_view"
					 v-if="leftText.length">
						<text :style="{ color: color, fontSize: '14px' }">{{ leftText }}</text>
					</view>
					<slot name="left" />
				</view>
				<view class="uni-navbar__header-container uni-navbar__content_view">
					<view class="uni-navbar__header-container-inner uni-navbar__content_view" v-if="title.length">
						<text class="uni-nav-bar-text" style="{color: #000000 }">{{title}}</text>
					</view>
					<!-- 标题插槽 -->
					<slot />
				</view>
				<view :class="title.length ? 'uni-navbar__header-btns-right' : ''" @tap="onClickRight" class="uni-navbar__header-btns uni-navbar__content_view">
					<view class="uni-navbar__content_view" v-if="rightIcon.length">
						<uni-icons :color="color" :type="rightIcon" size="24" />
					</view>
					<!-- 优先显示图标 -->
					<view class="uni-navbar-btn-text uni-navbar__content_view" v-if="rightText.length && !rightIcon.length">
						<text class="uni-nav-bar-right-text">{{ rightText }}</text>
					</view>
					<slot name="right" />
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import uniStatusBar from "../uni-status-bar/uni-status-bar.vue";
	import uniIcons from "../uni-icons/uni-icons.vue";
	/**
	 * NavBar 自定义导航栏
	 * @description 导航栏组件，主要用于头部导航
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=52
	 * @property {String} title 标题文字
	 * @property {String} leftText 左侧按钮文本
	 * @property {String} rightText 右侧按钮文本
	 * @property {String} leftIcon 左侧按钮图标（图标类型参考 [Icon 图标](http://ext.dcloud.net.cn/plugin?id=28) type 属性）
	 * @property {String} rightIcon 右侧按钮图标（图标类型参考 [Icon 图标](http://ext.dcloud.net.cn/plugin?id=28) type 属性）
	 * @property {String} color 图标和文字颜色
	 * @property {String} backgroundColor 导航栏背景颜色
	 * @property {Boolean} fixed = [true|false] 是否固定顶部
	 * @property {Boolean} statusBar = [true|false] 是否包含状态栏
	 * @property {Boolean} shadow = [true|false] 导航栏下是否有阴影
	 * @event {Function} clickLeft 左侧按钮点击时触发
	 * @event {Function} clickRight 右侧按钮点击时触发
	 */
	export default {
		name: "UniNavBar",
		data() {
			return {
				isliuhai: false,
				system_top: 0
			}
		},
		components: {
			uniStatusBar,
			uniIcons
		},
		created() {
			const res = uni.getSystemInfoSync();
			// #ifdef MP-WEIXIN
			let weinfo = uni.getMenuButtonBoundingClientRect();
			// #endif
			if (this.oncheck) {
				if (parseInt(res.safeArea.top) === 20) {
					this.system_top = 0;
				} else {
					this.system_top = parseInt(res.safeArea.top);
				}
			} else {
				if (this.onlive) {
					// #ifdef MP-WEIXIN
					this.system_top = weinfo.top - 20;
					// #endif
					// #ifndef MP-WEIXIN
					 this.system_top = parseInt(res.safeArea.top);
					// #endif
				} else {
					this.system_top = parseInt(res.safeArea.top) + 5;
				}
				// if (parseInt(res.safeArea.top) === 20) {
				// 	this.system_top -= 30;
				// }else if (parseInt(res.safeArea.top) >20 && parseInt(res.safeArea.top) < 43) {
				// 	this.system_top -= 15;
				// }
				if (this.onindex){
					
				}
			}
		},
		props: {
			title: {
				type: String,
				default: ""
			},
			leftText: {
				type: String,
				default: ""
			},
			rightText: {
				type: String,
				default: ""
			},
			leftIcon: {
				type: String,
				default: ""
			},
			rightIcon: {
				type: String,
				default: ""
			},
			fixed: {
				type: [Boolean, String],
				default: false
			},
			color: {
				type: String,
				default: "#000000"
			},
			backgroundColor: {
				type: String,
				default: "#FFFFFF"
			},
			huiyuan:{
				type: [Boolean, String],
				default: false
			},
			oncheck: {
				type: [Boolean, String],
				default: false
			},
			onindex: {
				type: [Boolean, String],
				default: false
			},
			onlive: {
				type: [Boolean, String],
				default: false
			},
			statusBar: {
				type: [Boolean, String],
				default: false
			},
			shadow: {
				type: [Boolean, String],
				default: false
			},
			border: {
				type: [Boolean, String],
				default: true
			}
		},
		mounted() {
			if (uni.report && this.title !== '') {
				uni.report('title', this.title)
			}
		},
		methods: {
			onClickLeft() {
				this.$emit("clickLeft");
			},
			onClickRight() {
				this.$emit("clickRight");
			}
		}
	};
</script>

<style scoped>
	.status_bar {
		/* #ifdef MP-WEIXIN */
		height: 20px;
		/* #endif */
		/* #ifndef MP-WEIXIN */
		height: var(--status-bar-height);
		/* #endif */
		
		
		width: 100%;
		background-color: #FFFFFF;
	}

	/* .uni-navbar {
		width: 100%;
		height: 104rpx;
		background-color: #07C160;
	} */

	.uni-nav-bar-text {
		margin-top: 0rpx;
		/* #ifdef MP-WEIXIN */
		margin-top: -10rpx;
		/* #endif */

		font-size: 34rpx;
		height: 64rpx;
		line-height: 64rpx;
	}

	.uni-nav-bar-right-text {
		font-size: 28rpx;
	}

	.uni-navbar__content {
		position: relative;
		overflow: hidden;
	}

	.uni-navbar__content_view {
		display: flex;
		align-items: center;
		flex-direction: row;
		height: 64px;
	}

	.uni-navbar__header {
		height: 44px;
		display: flex;
		flex-direction: row;
		line-height: 44px;
		font-size: 16px;
	}

	.uni-navbar__header-btns {
		display: flex;
		flex-wrap: nowrap;
		width: 120rpx;
		padding: 0 6px;
		justify-content: center;
		align-items: center;

	}

	.uni-navbar__header-btns-left {
		display: flex;
		width: 150rpx;
		justify-content: flex-start;

	}

	.uni-navbar__header-btns-right {
		display: flex;
		width: 150rpx;
		padding-right: 30rpx;
		justify-content: flex-end;
		margin-top: 20rpx;

	}

	.uni-navbar__header-container {
		flex: 1;
	}

	.uni-navbar__header-container-inner {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
	}


	.uni-navbar__placeholder-view {
		height: 44px;

	}

	.uni-navbar--fixed {
		position: fixed;
		z-index: 998;
	}

	.uni-navbar--shadow {
		box-shadow: 0 1px 6px #ccc;
	}

	.uni-navbar--border {
		border-bottom-width: 1rpx;
		border-bottom-style: solid;
		border-bottom-color: #D9D9D9;
	}
</style>
