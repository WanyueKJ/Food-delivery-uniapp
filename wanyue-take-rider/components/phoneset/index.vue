<template>
	<view class="uni-mask">
		<view class="setview">
			<view class="settop">
				<view class="settitle">{{i18n.set.jiedantixingset}}</view>
				<view class="closeview" @click="close">
					<image src="../../static/image/guanbi.png" class="guanbiimage"></image>
				</view>
				<view class="setlist column">
					<view class="set1 row">
						<view>{{i18n.set.shoujidingweiquanxian}}</view>
						<view class="setbtn" @click="goset">{{i18n.qushezhi}}</view>
					</view>
					<!-- #ifdef APP-PLUS -->
					<view class="set1 row">
						<view>{{i18n.set.tongzhiquanxian}}</view>
						<view class="setbtn" @click="goset">{{i18n.qushezhi}}</view>
					</view>
					<view class="set1 row">
						<view>{{i18n.set.lingshengyinliang}}</view>
					</view>
					<slider :value="voicevalue" @change="voicechanging" activeColor="#FF5725"
						backgroundColor="rgba(255,77,41,0.2)"></slider>
					<!-- #endif -->
				</view>
			</view>
		</view>
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
				voicevalue: 0,
			}
		},
		created() {
			// #ifdef APP-PLUS
			this.voicevalue = plus.device.getVolume() * 100;
			// #endif
		},
		methods: {
			close() {
				this.$emit('colseset')
			},
			voicechanging(e) {
				console.log(e.detail.value)
				this.voicevalue = e.detail.value
				plus.device.setVolume(this.voicevalue / 100);
			},
			goset() {
				// #ifdef APP-PLUS
				permision.gotoAppPermissionSetting()
				// #endif
				
			},
		}
	}
</script>

<style>
	.setlist {
		margin-top: 20px;
		width: calc(100% - 20px);
		margin-left: 10px;
	}

	.setbtn {
		position: absolute;
		right: 0;
		width: 56px;
		height: 24px;
		line-height: 24px;
		text-align: center;
		color: #FF5725;
		font-size: 14px;
		border: 1px solid #FF5725;

	}

	.set1 {
		position: relative;
		height: 50px;
		line-height: 50px;
		color: #323232;
		font-size: 16px;
		font-weight: bold;
		align-items: center;
	}

	.closeview {
		width: 50px;
		height: 50px;
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.settop {
		height: 50px;
		align-items: center;
	}

	.guanbiimage {
		width: 16px;
		height: 16px;
	}

	.settitle {
		width: 100%;
		height: 50px;
		line-height: 50px;
		color: #323232;
		text-align: center;
		font-size: 18px;
		font-weight: bold;
	}

	.setview {
		width: 100%;
		height: 320px;
		border-radius: 16px 16px 0 0;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
	}
</style>
