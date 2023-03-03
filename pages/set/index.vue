<template>
	<view class="page">
		<view style="height: 2px;"></view>
		<view class="section column">
			<view @click="setpassword" class="cell row">
				<view class="celltitle">{{i18n.bind.resetPWD}}</view>
				<image class="jiantou" src="../../static/image/jinrujiantou.png" mode="aspectFit"></image>
			</view>
			<view @click="changemobile" class="cell row">
				<view class="celltitle">{{i18n.bind.genghuanshoujihao}}</view>
				<image class="jiantou" src="../../static/image/jinrujiantou.png" mode="aspectFit"></image>
			</view>
		</view>
		<!-- #ifdef APP-PLUS -->
		<view class="section column">
			<view class="cell row">
				<view class="celltitle">{{i18n.set.lingshengyinliang}}</view>
				<view class="voicetitle">{{i18n.set.yinliangxiaotip}}</view>
			</view>
			<slider :value="voicevalue" @change="voicechanging" activeColor="#FF5725"
				backgroundColor="rgba(255,77,41,0.2)"></slider>
		</view>
		<!-- #endif -->

		<view @click="quit" class="btn">{{i18n.set.logOut}}</view>

	</view>
</template>

<script>
	// #ifdef APP-PLUS
	import permision from "@/js_sdk/wa-permission/permission.js"
	// #endif
	export default {
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				voicevalue: 0
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			this.voicevalue = plus.device.getVolume() * 100; //获取设备的系统音量
			// #endif
			uni.setNavigationBarTitle({
				 title:this.i18n.shezhi
			});
		},
		methods: {
			setpassword() {
				uni.navigateTo({
					url: '../login/BindMobile?type=2',
				});
			},
			changemobile() {
				uni.navigateTo({
					url: '../login/BindMobile?type=1',
				});
			},
			voicechanging(e) {
				// #ifdef APP-PLUS
				this.voicevalue = e.detail.value
				plus.device.setVolume(this.voicevalue / 100);
				// #endif
			},
			quit() {
				this.NB.sendRequest('Rider.User.LogOut', {}).then(data => {})
				uni.clearStorage()
				uni.closeSocket();
				// uni.$TUIKit.logout()
				getApp().globalData.userinfo = ''
				uni.reLaunch({
					url: '../login/login'
				})
			}
		}
	}
</script>

<style>
	.btn {
		margin-top: 80px;
		height: 44px;
		line-height: 44px;
		width: calc(100% - 30px);
		margin-left: 15px;
		border-radius: 4px;
		text-align: center;
		color: #FFFFFF;
		background-color: #FF5725;
	}

	.page {
		width: 100%;
		height: 100%;
		background-color: #FAFAFA;
	}

	.section {
		height: 100px;
		width: calc(100% - 30px);
		margin-left: 15px;
		background-color: #FFFFFF;
		margin-top: 15px;
		border-radius: 8px;
	}

	.cell {
		width: 100%;
		position: relative;
		height: 50px;
		align-items: center;
	}

	.celltitle {
		height: 50px;
		line-height: 50px;
		color: rgba(50, 50, 50, 1);
		font-size: 16px;
		margin-left: 15px;
	}

	.voicetitle {
		position: absolute;
		right: 15px;
		color: #FF5725;
		font-size: 12px;
	}

	.jiantou {
		position: absolute;
		right: 15px;
		width: 20px;
		height: 20px;
	}
</style>
