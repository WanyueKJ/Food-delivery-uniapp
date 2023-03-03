<template>
	<view class="content">
		<view class="topSearchView">
			<view class="adsNameLabel">
				{{cityname}}
			</view>
			<image src="../../static/images/address/add-cityimg.png" mode="" class="downImage"></image>
			<view class="inputBackView">
				<image src="../../../static/search.png" mode="" class="downImage"
					style="margin-top: 8px;margin-left: 5px;"></image>
				<input type="text" value="" class="inputClass" :placeholder="i18n.mine.mapInputTip" @input="inputAds" />

			</view>

		</view>
		<map id="searchMap" :latitude="latitude" :longitude="longitude" scale="16" class="mapC"
			@regionchange="mapCenterChange" :markers="markers">
			<cover-image src="../../../static/user-location.png" class="datouzhen"
				:style="'margin-left:' + datozhenLeft + 'px'"></cover-image>
		</map>

		<scroll-view scroll-y="true" class="bottomScroll" :style="'height:' + scrollHeight + 'px'">
			<view v-for="(item,index) in markers" :key="index" class="pioListView" @click="doselectAds(item,index)">
				<view class="pioNameL">
					{{item.name}}
				</view>
				<view class="pioDeatialL">
					{{item.address}}
				</view>
			</view>
		</scroll-view>

	</view>
</template>

<script>
	var amapFile = require('../../../libs/amap-wx.130.js'); //如：..­/..­/libs/amap-wx.js
	var myAmapFun = new amapFile.AMapWX({
		key: getApp().globalData.amapKey
	});
	var x_PI = 3.14159265358979324 * 3000.0 / 180.0;

	var PI = 3.1415926535897932384626;

	var a = 6378245.0;

	var ee = 0.00669342162296594323;
	export default {
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				latitude: '0',
				longitude: '0',
				cityname: '',
				markers: [],
				mapCtx: null,
				scrollHeight: 0,
				datozhenLeft: 0,
				keywords: '',
				firstMarkers: [],
				fromwhere: 1
			}
		},
		onLoad(option) {
			var that = this
			that.fromwhere = option.from

			var res = uni.getSystemInfoSync()
			that.scrollHeight = res.windowHeight - 314 - 44
			that.datozhenLeft = res.windowWidth / 2 - 10
			myAmapFun.getRegeo({
				iconPath: "../../../static/logo.png",
				width: 10,
				height: 10,
				success: function(data) {
					that.latitude = data[0].latitude
					that.longitude = data[0].longitude
					that.cityname = data[0].regeocodeData.addressComponent.city
					that.markers = data[0].markers
					that.firstMarkers = data[0].markers
					// console.log('cg回调' + that.markers)
				},
				fail: function(info) {
					//失败回调
					console.log('失败回调' + info)
				}
			})
			myAmapFun.getPoiAround({
				success: function(data) {
					that.markers = data.markers;
					// that.poisdatas = data.poisData;
					//成功回调
					console.log('成功回调' + JSON.stringify(data));
				},
				fail: function(info) {
					//失败回调
					console.log(info)
				}

			})
		},
		methods: {
			doselectAds(item, index) {
				var adsMsg = {}
				if (item.location) {

					let array = item.location.split(',')
					adsMsg.lat = array[1]
					adsMsg.lng = array[0]
					adsMsg.name = item.name
				} else {
					adsMsg.lat = item.latitude
					adsMsg.lng = item.longitude
					adsMsg.name = item.name
				}

				uni.navigateBack({})
				console.log(this.fromwhere, item)
				if (this.fromwhere == 1) {
					uni.$emit('selectedAdsSuccess', adsMsg)
				} else {
					console.log(this.fromwhere, adsMsg)
					uni.$emit('selectedAdsSuccess2', adsMsg)
				}

			},
			inputAds(e) {
				this.keywords = e.detail.value
				console.log(e.detail.value)
				if (this.keywords.length > 0) {
					this.doRequestData()
				} else {
					this.markers = this.firstMarkers
				}
			},
			doRequestData() {
				var that = this
				uni.request({
					url: 'https://restapi.amap.com/v3/place/text?parameters',
					method: 'GET',
					data: {
						key: getApp().globalData.amapWebKey,
						keywords: that.keywords,
						children: '1',
						offset: '20',
						page: '1',
						output: 'JSON',
						extensions: 'base',
						city: that.cityname
					},
					success: res => {
						that.markers = res.data.pois
						console.log(res)
					},
					fail: () => {
						console.log('失败')
					},
					complete: () => {}
				});
			},
			my_location: function(e) {

				var that = this;

				that.onLoad();

			},
			mapCenterChange(e) {
				console.log(e)
				console.log(e.type)
				console.log(e.causedBy)
				var that = this;
				// 地图发生变化的时候，获取中间点，也就是用户选择的位置toFixed

				if ((e.type == 'end' && (e.causedBy == 'scale' || e.causedBy == 'drag')) || e.type == 'regionchange') {




					that.mapCtx = wx.createMapContext("searchMap");

					that.mapCtx.getCenterLocation({

						type: 'gcj02',

						success: function(res) {

							// console.log(res, 11111)

							var coordinate = that.gcj02towgs84(res.longitude, res.latitude)

							console.log(coordinate, 2222)
							that.longitude = res.longitude;
							that.latitude = res.latitude;

							myAmapFun.getPoiAround({
								location: that.longitude + ',' + that.latitude,
								success: function(data) {
									that.markers = data.markers;
									// that.poisdatas = data.poisData;
									//成功回调
									console.log('成功回调' + JSON.stringify(that.markers));
								},
								fail: function(info) {
									//失败回调
									console.log(info)
								}

							})
						}

					})

				}

			},

			gcj02towgs84(lng, lat) {

				var that = this;

				if (that.out_of_china(lng, lat)) {

					return [lng, lat]

				} else {

					var dlat = that.transformlat(lng - 105.0, lat - 35.0);

					var dlng = that.transformlng(lng - 105.0, lat - 35.0);

					var radlat = lat / 180.0 * PI;

					var magic = Math.sin(radlat);

					magic = 1 - ee * magic * magic;

					var sqrtmagic = Math.sqrt(magic);

					dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);

					dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);

					var mglat = lat + dlat;

					var mglng = lng + dlng;

					return [lng * 2 - mglng, lat * 2 - mglat]

				}

			},

			transformlat(lng, lat) {

				var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math
					.abs(lng));

				ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;

				ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;

				ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;

				return ret

			},

			transformlng(lng, lat) {

				var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));

				ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;

				ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;

				ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;

				return ret

			},

			/**
			
			  * 判断是否在国内，不在国内则不做偏移
			
			  * @param lng
			
			  * @param lat
			
			  * @returns {boolean}
			
			  */

			out_of_china(lng, lat) {

				return (lng < 72.004 || lng > 137.8347) || ((lat < 0.8293 || lat > 55.8271) || false);

			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		overflow: hidden;
	}

	.content {
		background-color: #FFFFFF;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.topSearchView {
		width: 100%;
		height: 58px;
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		margin-top: 44px;
	}

	.adsNameLabel {
		margin-left: 5px;
		height: 58px;
		line-height: 58px;
		font-size: 16px;
		color: #323232;
		width: 55px;
		text-align: center;
	}

	.downImage {
		margin-left: 3px;
		height: 18px;
		width: 18px;
		margin-top: 20px;
	}

	.inputBackView {
		display: flex;
		flex-direction: row;
		background-color: #F5F5F5;
		margin-left: 10px;
		margin-top: 12px;
		height: 34px;
		border-radius: 17px;
		width: calc(100% - 100px);
	}

	.inputClass {
		margin-left: 6px;
		height: 100%;
		width: calc(100% - 46px);
		background-color: #F5F5F5;
	}

	.mapC {
		width: 100%;
		height: 256px;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
	}

	.datouzhen {
		height: 20px;
		width: 20px;
		margin-top: 118px;
	}

	.bottomScroll {
		width: 100%;
		margin-top: 0;
		/* height: calc(100%-314px); */

	}

	.pioListView {
		margin-left: 10px;
		height: 71px;
		width: calc(100% - 20px);
		border-bottom: 1px solid #f0f0f0;
		flex-shrink: 0;
	}

	.pioNameL {
		margin-top: 15px;
		height: 20px;
		line-height: 20px;
		color: #323232;
		font-size: 16px;
		font-weight: bold;
		width: 100%;
	}

	.pioDeatialL {
		margin-top: 5px;
		height: 15px;
		line-height: 15px;
		color: #989898;
		font-size: 12px;
		width: 100%;
	}
</style>
