<template>
	<view class="self-view" :style="'height:' + windowHeight + 'px;'">
		<view class="whiteView">
			<view class="column" style="width: 100%;height: 88px;background-color: #FF5725;">
				<view class="" style="width: 100%;height: 44px;"></view>
				<view class="row" style="width: 100%;height: 44px;align-items: center;">
					<image src="../../static/close-bai.png" mode="aspectFit"
						style="margin-left: 15px;width: 32px;height: 32px;" @click="doClose(0)"></image>
					<view class="column" style="margin-left: 15px;">
						<view class="" style="font-size: 16px;color: #FFF;font-weight: bold;">
							{{curads.addr}}<!-- <text v-if="curads.id"> {{curads.addr}}</text> -->
						</view>
						<view class="" style="font-size: 13px;color: #FFF;">
							{{curads.place}}<!-- {{curads.name + ' ' + curads.mobile}} -->
						</view>
					</view>
				</view>
			</view>
			<view class="mapBackView">
				<map id="wyhomeMap" class="mapView" :latitude="latitude" :longitude="longitude" scale="16"
					:show-location="true">
				</map>
				<view class="row" style="margin-left: 10px;width: calc(100% - 20px);height: 74px;align-items: center;">
					<!-- <image src="../../static/item-sel.png" mode="" style="width: 20px;height: 20px;"></image> -->
					<image v-if="selectIndex == 99999" src="../../static/item-sel.png" mode=""
						style="width: 20px;height: 20px;"></image>
					<image v-else src="../../static/item-nor.png" mode="" style="width: 20px;height: 20px;"></image>
					<view class="column" style="margin-left: 10px;height: 100%;justify-content: center;">
						<view style="font-size: 14px;font-weight: bold;">
							{{i18n.index.xianzaiweizhi}}
						</view>
						<view class="" style="font-size: 13px;color: #6F6F6F;">
							{{curads.addr}}
						</view>
						<view class="" style="font-size: 13px;color: #6F6F6F;">
							{{curads.place}}
						</view>
					</view>
				</view>
			</view>
			<view @tap="doselectAds(item,index)" v-for="(item,index) in adsListArray" :key="index" class="row"
				style="width: 100%;height: 57px;align-items: center;"
				:style="selectIndex == index ? 'background-color:#FFF9F8' : 'background-color:#FFF'">
				<image v-if="selectIndex == index" src="../../static/item-sel.png" mode=""
					style="width: 20px;height: 20px;margin-left: 15px;"></image>
				<image v-else src="../../static/item-nor.png" mode=""
					style="width: 20px;height: 20px;margin-left: 15px;"></image>
				<view class="column" style="margin-left: 10px;height: 100%;justify-content: center;">

					<view class="" style="font-size: 16px;color: #181818;font-weight: bold;">
						<!-- {{curads.place}}<text v-if="curads.id"> {{curads.addr}}</text> -->
						{{item.addr}}
					</view>
					<view class="" style="font-size: 13px;color: #6F6F6F;">
						{{item.place}}<!-- {{curads.name + ' ' + curads.mobile}} -->
					</view>
				</view>
			</view>
			<view class="row" style="width: 100%;height: 44px;align-items: center;" @click="doAddAds()">
				<image src="../../static/dizhi-jia.png" mode="aspectFit"
					style="margin-left: 15px;width: 16px;height: 32px;"></image>
				<view class="" style="font-size: 16px;color: #FF5725;font-weight: bold;margin-left: 15px;">
					{{i18n.index.xindizhi}}
				</view>

			</view>
		</view>

		<view class="" style="flex: 1;" @click="doClose(0)"></view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				windowHeight: 0,
				selectIndex: 99999,
				adsListArray: [],
				selectedAds: null
			}
		},
		props: {
			latitude: {
				type: String,
				default: '0'
			},
			longitude: {
				type: String,
				default: '0'
			},
			curads: {
				type: Object,
				default: null
			},
		},
		created() {
			var that = this
			var res = uni.getSystemInfoSync()
			this.windowHeight = res.screenHeight
			uni.hideTabBar()
			that.getAddrList()
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		methods: {
			doClose(e) {
				this.$emit('closeAdsView', e)
			},
			getAddrList() {
				var that = this
				that.http.sendRequest('Addr.GetList', {}).then(function(res) {
					var info = res.info
					for (var i = 0; i < info.length; i++) {
						if (i < 2) {
							that.adsListArray.push(info[i])
						}
					}
				})
			},
			doselectAds(item, index) {
				console.log(121212111221)
				this.selectIndex = index
				this.selectedAds = item
				this.$emit('closeAdsView', this.selectedAds)
			},
			doAddAds() {
				this.doClose(0)
				uni.navigateTo({
					url:'/package-mine/pages/address/address?adsType=2'
				})
				
			}
		}
	}
</script>

<style>
	.self-view {
		position: fixed;
		width: 100%;
		/* height: 100%; */
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.6);
		display: flex;
		flex-direction: column;
		z-index: 999;
	}

	.whiteView {
		top: 0;
		left: 0;
		background-color: #FFF;
		border-radius: 0 0 16px 16px;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.topTipsLabel {
		margin-left: 15px;
		margin-top: 20px;
		font-size: 16px;
		font-weight: bold;
		color: #383838;
		width: calc(100% - 30px);
	}

	.mapBackView {
		margin-left: 15px;
		margin-top: 10px;
		width: calc(100% - 30px);
		height: 174px;
		border-radius: 6px;
		background-color: #FFF9F8;
	}

	.mapView {
		margin-left: 10px;
		margin-top: 10px;
		width: calc(100% - 20px);
		height: 88px;
	}

	.bottomBtn {
		margin-left: 15px;
		margin-top: 20px;
		margin-bottom: 50px;
		width: calc(100% - 30px);
		height: 50px;
		border-radius: 8px;
		line-height: 50px;
		color: #FFF;
		background-color: #FF5725;
		font-size: 14px;
		font-weight: bold;
		text-align: center;
	}
</style>
