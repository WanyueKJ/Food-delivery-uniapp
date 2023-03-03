<template>
	<view>
		<view class="statusbar" :style="'height:' + top + 'px;'">
		</view>
		<view class="navtion">
			<view class="navbar" :style="'height:' + menuButtonHeight + 'px;width:calc(100% - ' + menuleft + 'px);'">
				<view class="centerview row" @click="showbianzu">
					<text>{{mintitle}}</text>
					<image
						:src="status == true?'../../static/image/jiantouxia.png':'../../static/image/jiantouxia2.png'">
					</image>
				</view>
				<view class="leftview" @click="my">
					<image src="../../static/image/geren.png" mode="aspectFit"></image>
				</view>
				<!-- <view class="rightview" @click="ditu">
					<image src="../../static/image/ditu.png" mode="aspectFit"></image>
				</view> -->
				<view v-if="status == true" class="pop row" @click="changestatus">
					<image class="popback" src="../../static/image/bianzu.png" mode="aspectFill">
						<image class="popxiuxi" src="../../static/image/xiuxi.png"></image>
						<text class="poptext">{{xiuxi}}</text>
					</image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {

		},
		data() {
			return {
				online: 0,
				mintitle: '',
				xiuxi: '',
				status: false,
				menuleft: 0,
				menuButtonHeight: 44,
				top: 0,
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		created() {
			var that = this
			// #ifndef H5
			this.top = getApp().globalData.top
			this.menuButtonHeight = getApp().globalData.menuButtonHeight
			this.menuleft = getApp().globalData.menuButtonWidth + 10
			// #endif

			if (this.NB.user().isrest == 0) {
				that.mintitle = this.i18n.order.jiedanzhong
				that.online = 1
			} else {
				that.online = 0
				that.mintitle = this.i18n.xiuxizhong
			}
		},
		methods: {
			changedata(data) {
				if (data == 1) {
					this.mintitle = this.i18n.xiuxizhong
				} else {
					this.mintitle = this.i18n.order.jiedanzhong
				}
				this.status = false
			},
			changestatus() {
				this.$emit('changestatus')
			},
			getstatus(){
				this.status = false
			},
			showbianzu() {
				this.status = !this.status
				if (this.mintitle == this.i18n.order.jiedanzhong) {
					this.xiuxi = this.i18n.xiuxi
				} else {
					this.xiuxi = this.i18n.order.jiedan
				}
			},
			my() {
				this.$emit('showdriver')
			},
			ditu() {
				this.$emit('ditu')
			},
			goaddress() {
				this.$emit('goaddress')
			},
			search() {
				this.$emit('gosearch')
			},
			gomessage() {
				this.$emit('gomessage')
			}
		}
	}
</script>

<style>
	@import url("./index.css");
</style>
