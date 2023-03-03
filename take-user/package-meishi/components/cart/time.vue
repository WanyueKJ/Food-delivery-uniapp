<template>
	<view class="uni-mask-nvue" :style="'height:' + windowHeight + 'px;'" @click="dsfsdffsds()">
		<view class="showView">
			<view class="heaerView">
				<text class="titleText">{{titleStr}}</text>
				<image src="/static/wy-close.png" mode="" class="closeBtn" @click="doClose"></image>
			</view>
			<view class="contentView" v-if="timeArray.length > 0">
				<view class="leftView">
					<text v-for="(item,index) in timeArray" :key="index" class="leftItem" @click="cliclDay(index)"
						:style=" selectIndex == index ? 'background-color:#ffffff' : 'background-color:#f9f9f9'">{{item.name}}</text>
				</view>
				<scroll-view scroll-y="1" class="rightView">
					<text v-for="(item,index) in timeArray[selectIndex].list" :key="index"
						class="timeLabelItem onelinele" @click="cliclTime(item,index)"
						:style=" (selectIndex == 0 && index == 0) ? 'color:#FF5725' : 'color:#323232'">{{item.time}}</text>
				</scroll-view>
			</view>

		</view>
	</view>
</template>

<script>
	import http from '@/toolClass/WYToolClass.js'
	export default {
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				windowHeight: 0,
				selectIndex: 0,
				timeArray: [],
				titleStr: ''
			}
		},
		props: {
			type: {
				type: Number,
				default: 0
			},
			storeID: {
				type: String,
				default: ''
			},
			org_time: {
				type: Number,
				default: 0
			},
		},
		created() {
			var that = this
			that.windowHeight = getApp().globalData.windowHeight
			console.log(that.type)
			var url = ''
			if (that.type == 0) {
				that.titleStr = that.i18n.meishi.songdashijian
				url = 'Helpsend.GetTakeOutTimes'
			} else if (that.type == 1) {
				that.titleStr = that.i18n.meishi.zitishijian
				url = 'Helpsend.GetPickUpTimes'
			}

			// const curDate = new Date()
			// const curDateStr = curDate.getFullYear() + '-' + (curDate.getMonth() + 1) + '-' + curDate.getDate()

			// const mDate = new Date()
			// mDate.setDate(curDate.getDate() + 1)
			// const mDateStr = mDate.getFullYear() + '-' + (mDate.getMonth() + 1) + '-' + mDate.getDate()

			// const hDate = new Date()
			// hDate.setDate(curDate.getDate() + 2)
			// const hDateStr = hDate.getFullYear() + '-' + (hDate.getMonth() + 1) + '-' + hDate.getDate()

			// var minutesss = curDate.getMinutes()
			// var hour = curDate.getHours()

			// const todaylist = that.timesolt123(minutesss,hour)
			// const otherlist = that.timesolt()
			// that.timeArray = [
			// 	{
			// 		'name':that.i18n.shansong.jintian,
			// 		'list':todaylist,
			// 		'date':curDateStr
			// 	},
			// 	{
			// 		'name':that.i18n.shansong.mingtian,
			// 		'list':otherlist,
			// 		'date':mDateStr
			// 	},
			// 	{
			// 		'name':hDateStr,
			// 		'list':otherlist,
			// 		'date':hDateStr
			// 	}
			// ]
			// console.log(that.timeArray)
			http.sendRequest(url, {
				'store_id': this.storeID,
				'preset_time': this.org_time
			}).then(function(res) {
				if (res.code == 0) {
					that.timeArray = res.info
					console.log(that.timeArray)
					that.$forceUpdate()
				}
			})
		},
		methods: {
			cliclDay(e) {
				this.selectIndex = e
			},
			doClose() {
				uni.$emit('timeSelcted', 0)
			},
			cliclTime(item, index) {
				var that = this
				var dic = {};
				var today = that.timeArray[that.selectIndex]
				console.log(today)
				// dic.name = today.name + ' ' + item
				// dic.dateStr = today.date + ' ' + item
				dic.name = today.name + ' ' + item.time
				dic.dateStr = item.servetime
				if (that.selectIndex == 0 && index == 0) {
					dic.jishi = 1
				}
				uni.$emit('timeSelcted', dic)
			},
			timesolt() {

				let timeNum = 20;
				let html = '';
				let end = 60 * 24;
				var array = []
				for (let n = 0, m = 0; n < end; m++) {
					let start = n;
					let end_t = start + timeNum;
					if (end_t > end) {
						end_t = end;
					}
					n = end_t;

					let start_h = Math.floor(start / 60);
					let start_i = start % 60;
					start_h = this.PrefixInteger(start_h, 2);
					start_i = this.PrefixInteger(start_i, 2);
					let start_txt = start_h + ':' + start_i;
					array.push(start_txt)
					// let end_h = Math.floor(end_t / 60);
					// let end_i = end_t % 60;
					// end_h = PrefixInteger(end_h, 2);
					// end_i = PrefixInteger(end_i, 2);
					// let end_txt = end_h + ':' + end_i;

				}
				console.log(array)
				return array

			},
			timesolt123(minutesss, hour) {
				let timeNum = 20;


				let html = '';
				let end = 60 * 24;
				var array = []
				for (let n = 0, m = 0; n < end; m++) {
					let start = n;
					let end_t = start + timeNum;
					if (end_t > end) {
						end_t = end;
					}
					n = end_t;

					let start_h = Math.floor(start / 60);
					let start_i = start % 60;
					start_h = this.PrefixInteger(start_h, 2);
					start_i = this.PrefixInteger(start_i, 2);
					let start_txt = start_h + ':' + start_i;
					if (start_h > hour) {
						array.push(start_txt)
					}
					if (start_h == hour && start_i >= (minutesss + 20)) {
						array.push(start_txt)
					}

					// let end_h = Math.floor(end_t / 60);
					// let end_i = end_t % 60;
					// end_h = PrefixInteger(end_h, 2);
					// end_i = PrefixInteger(end_i, 2);
					// let end_txt = end_h + ':' + end_i;

				}
				// console.log(array)
				return array
			},
			PrefixInteger(num, length) {
				return (Array(length).join('0') + num).slice(-length);
			},
			dsfsdffsds() {}
		}
	}
</script>

<style>
	.showView {
		width: 750rpx;
		height: 800rpx;
		border-radius: 32rpx 32rpx 0 0;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
	}

	.heaerView {
		display: flex;
		flex-direction: row;
		height: 108rpx;
		border-bottom: 1px solid #f0f0f0;
	}

	.titleText {
		height: 108rpx;
		line-height: 108rpx;
		/* margin-left: 160rpx; */
		margin-left: 15px;
		flex: 1;
		color: #323232;
		font-size: 36rpx;
		font-weight: bold;
		/* display:inline-block; */
		/* text-align: center; */
	}

	.closeBtn {
		/* position: absolute; */
		width: 40rpx;
		height: 40rpx;
		margin-top: 34rpx;
		margin-right: 20rpx;
		/* margin-left: 40rpx; */
		/* background-color: #007AFF; */
	}

	.contentView {
		display: flex;
		flex-direction: row;
		/* top: 54px; */
		bottom: 0px;
		width: 750rpx;
		left: 0;
	}

	.leftView {
		margin-left: 0;
		width: 200rpx;
		background-color: #F9F9F9;
		height: 692rpx;
		display: flex;
		flex-direction: column;
	}

	.leftItem {
		width: 200rpx;
		height: 100rpx;
		line-height: 100rpx;
		color: #323232;
		font-size: 15px;
		font-weight: bold;
		text-align: center;
	}

	.rightView {
		margin-left: 40rpx;
		width: 480rpx;
		height: 692rpx;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
	}

	.timeLabelItem {
		width: 480rpx;
		height: 100rpx;
		line-height: 100rpx;
		color: #323232;
		font-size: 16px;
	}

	.onelinele {
		overflow: hidden;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		/* white-space: nowrap; */
		word-wrap: break-word;
		lines: 1;
		white-space: nowrap;

	}
</style>
