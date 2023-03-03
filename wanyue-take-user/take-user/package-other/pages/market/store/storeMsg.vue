<template>
	<view>
		<wybar @clickLeft="back" :leftText="i18n.market.shangjiaMsg"></wybar>
		<view style="width: 100%;background-color: #FFF;" class="column">
			<view v-for="(item,index) in array" :key="index" class="row" style="width: 100%;">
				<image :src="item.img" mode="" class="leftimg"></image>
				<view class="word">
					{{item.name}}
				</view>
				<view class="word" style="margin-right: 15px;flex: 1;" @click="phoneCall(index)">
					{{msgArray[index]}}
				</view>
			</view>
			<view class="word" style="margin-left: 15px;font-weight: bold;">
				{{i18n.meishi.shangjiazizhi}}
			</view>
			<view class="msgView">
				<view class="item" v-if="storeMsg.industry.business_image.length > 0" @click="showbigImage(storeMsg.industry.business_image)">
					<image :src="storeMsg.industry.business_image[0]" mode="aspectFill" style="width: 100%;height: 72px;border-radius: 2px;"></image>
					<view class="" style="width: 100%;text-align: center;font-size: 12px;margin-top: 5px;">
						{{i18n.meishi.yingyezhizhao}}
					</view>
				</view>
				<view class="item" v-if="storeMsg.industry.license_image.length > 0" @click="showbigImage(storeMsg.industry.license_image)">
					<image :src="storeMsg.industry.license_image[0]" mode="aspectFill" style="width: 100%;height: 72px;border-radius: 2px;margin-left: 10px;"></image>
					<view class="" style="width: 100%;text-align: center;font-size: 12px;margin-top: 5px;">
						{{i18n.meishi.qitazizhi}}
					</view>
				</view>
			</view>
		</view>

	</view>
	</view>
</template>

<script>
	import wybar from '@/components/wybar/wyBar.vue'
	export default {
		components: {
			wybar,
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				msgArray: [],
				array:[],
				storeMsg:null
			}
		},
		onLoad(option) {
			this.storeMsg = JSON.parse(option.msg)

			this.array = [{
					name: this.i18n.meishi.dianpudizhi,
					img: '../../../../static/meishi/shangjia-ads.png'
				},
				{
					name: this.i18n.meishi.yingyeshijian,
					img: '../../../../static/meishi/shangjia-time.png'
				},
				{
					name: this.i18n.meishi.lianxidianhu,
					img: '../../../../static/meishi/shangjia-call.png'
				}

			]
			this.msgArray = [this.storeMsg.address,this.storeMsg.open_date + ' ' + this.storeMsg.open_time,this.storeMsg.phone]
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			phoneCall(index) {
				if (index == 2) {
					uni.makePhoneCall({
						phoneNumber: this.msgArray[index] //仅为示例
					});
				}
			},
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #FFF;
		overflow: hidden;
	}
	.leftimg {
		margin-left: 15px;
		margin-top: 15px;
		width: 20px;
		height: 20px;
	}
	.word {
		margin-left: 5px;
		margin-top: 15px;
		font-size: 14px;
		color: #383838;
		line-height: 20px;
	}
	.msgView {
		margin-left: 15px;
		width: calc(100% - 30px);
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
	}
	.item {
		margin-top: 10px;
		width: calc(30%);
		margin-right: 3%;
	}
</style>
