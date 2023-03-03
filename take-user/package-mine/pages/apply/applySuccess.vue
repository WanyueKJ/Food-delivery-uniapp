<template>
	<view >
		<wybar @clickLeft="back" :leftText="titleStr"></wybar>
		<view class="column" style="width: 100%;margin-top: 100px;align-items: center;">
			<image src="../../../static/item-sel.png" mode="" style="width: 60px;height: 60px;"></image>
			<view class="" style="margin-top: 10px;font-size: 20px;font-weight: bold;">
				{{i18n.yilou.tijiaochenggong}}
			</view>
			<view class="" style="margin-top: 25px;font-size: 15px;color: #AAAAAA;width: 90%;text-align: center;">
				{{i18n.yilou.subSucTips}}
			</view>
		</view>
		<view class="sub" @click="back()">
			{{i18n.yilou.guanbi}}
		</view>
		
	</view>
</template>

<script>
	import wybar from '../../../components/wybar/wyBar.vue'
	export default {
		components: {
			wybar
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				titleStr: '',
				type: 0,
			}
		},
		onShow() {
			
		},
		onLoad(option) {
			this.type = option.type
			if (this.type == 0) {
				this.titleStr = this.i18n.mine.shanghuruzhu
			} else if (this.type == 1) {
				this.titleStr = this.i18n.mine.qishoujiameng
			} else if (this.type == 2) {
				this.titleStr = this.i18n.mine.shangwuhezuo
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 2
				})
			},
		}	
	}
</script>

<style>
	page{
		background-color: #f5f6f7;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.sub {
		position: absolute;
		left: 15px;
		right: 15px;
		bottom: 50px;
		height: 49px;
		border-radius: 8px;
		background-color: #FF5725;
		font-size: 14px;
		color: #FFF;
		font-weight: bold;
		text-align: center;
		line-height: 49px;
	}
</style>