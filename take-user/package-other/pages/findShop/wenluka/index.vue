<template>
	<!-- 	:style="'width:' + windowHeight + 'px;height:' + windowWidth + 'px;'"
 -->
	<view class="backView row" :style="'width:' + windowHeight + 'px;height:' + windowWidth + 'px;'">
		<view class="leftView" :class="isLiuhai ? 'liuhai' : 'liuhai_no'">
			<view class="row nameView">
				<view style="width: 4px;height: 100%;background-color: #FFF;"></view>
				<view style="margin-left: 3px;">
					{{i18n.toher.shanghuming}}
				</view>
			</view>
			<view style="width: 100%;font-size: 32px;font-weight: bold;margin-top: 10px;">
				{{name}}
			</view>

			<view class="row nameView" :style="isLiuhai ? 'margin-top: 40px;' : 'margin-top: 20px;'">
				<view style="width: 4px;height: 100%;background-color: #FFF;"></view>
				<view style="margin-left: 3px;">
					{{i18n.toher.dizhi}}
				</view>
			</view>
			<view style="width: 100%;font-size: 32px;font-weight: bold;margin-top: 10px;">
				{{ads}}
			</view>
		</view>
		<image @click="doback()" src="../../../static/images/close.png" mode="aspectFit" style="height: 32px;width: 32px;"
			:style="isLiuhai ? 'margin-top: 40px;' : 'margin-top: 20px;'"></image>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				windowHeight: 0,
				windowWidth: 0,
				isLiuhai: false,
				name:'',
				ads:''
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		onShow() {
			// #ifdef APP-PLUS
			this.isLiuhai = plus.navigator.hasNotchInScreen()
			// #endif
			// #ifdef MP-WEIXIN
			const res = uni.getSystemInfoSync();
			if (res.statusBarHeight >= 44) {
				this.isLiuhai = true
			} else {
				this.isLiuhai = false
			}
			// #endif
		},
		onReady() {
			const res = uni.getSystemInfoSync();
			this.windowHeight = res.windowHeight
			this.windowWidth = res.windowWidth
		},
		onLoad(option) {
			this.name = option.name
			this.ads = option.ads
		},
		methods: {
			doback() {
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #ED6236;
		overflow: hidden;
	}

	.backView {
		background-color: #ED6236;
		/* height: 100%;
		width: 100%; */
		transform: rotateZ(90deg);
		display: flex;
		flex-direction: row;
		/* justify-content: center;
		align-items: center; */

		transform-origin: 23.5% 49%;
	}

	.leftView {
		align-items: center;
		color: #FFF;
	}

	.liuhai {
		margin-left: 60px;
		margin-top: 60px;
		width: calc(100% - 150px);
	}

	.liuhai_no {
		margin-left: 40px;
		margin-top: 30px;
		width: calc(100% - 120px);
	}

	.nameView {
		height: 20px;
		color: #FFF;
		font-size: 18px;
		line-height: 20px;
		/* width: calc(100% - 120px); */
	}
</style>
