<template>
	<view class="uni-mask" :style="'height:' + windowHeight + 'px;'" @click="dsfsdffsds()">
		<view class="showView">
			<view class="heaerView">
				<text class="cancleBtn" @click="doClose(0)">取消</text>
				<text class="titleText">选择排队时长</text>
				<text class="closeBtn" @click="doClose(1)">确定</text>
			</view>
			<picker-view class="contentView" indicator-style="height: 40px;" :value="value" @change="bindChange">
				<picker-view-column>
					<view class="item" v-for="(item,index) in days" :key="index">{{item}}天</view>
				</picker-view-column>
				<picker-view-column>
					<view class="item" v-for="(item,index) in hours" :key="index">{{item}}小时</view>
				</picker-view-column>
				<picker-view-column>
					<view class="item" v-for="(item,index) in mintus" :key="index">{{item}}分钟</view>
				</picker-view-column>
			</picker-view>
			<view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				windowHeight: 0,
				selectIndex: 0,
				days: ['0', '1'],
				mintus: ['0', '30'],
				hours: [],
				value:[0,0,0],
				ddd: 0,
				mmm: 0,
				hhh: 0,

			}
		},
		created() {
			var that = this

			that.windowHeight = getApp().globalData.windowHeight
			for (let i = 0; i <= 24; i++) {
				that.hours.push(i)
			}
		},
		methods: {
			doClose(e) {
				if (e == 0) {
					uni.$emit('paiTimeSelected', 0)
				} else {
					uni.$emit('paiTimeSelected', {
						'ddd': this.ddd,
						'hhh': this.hhh,
						'mmm': this.mmm
					})
				}

			},
			bindChange(e) {
				const val = e.detail.value
				
				this.ddd = this.days[val[0]]
				this.hhh = this.hours[val[1]]
				this.mmm = this.mintus[val[2]]
				
			},
			dsfsdffsds(){}
		}
	}
</script>

<style>
	.showView {
		width: 750rpx;
		height: 476rpx;
		border-radius: 32rpx 32rpx 0 0;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
	}

	.heaerView {
		display: flex;
		flex-direction: row;
		height: 108rpx;
		/* border-bottom: 1px solid #f0f0f0; */
	}

	.cancleBtn {
		position: absolute;
		height: 40rpx;
		margin-top: 34rpx;
		margin-left: 20rpx;
		line-height: 40rpx;
		color: #989898;
		font-size: 34rpx;
		/* background-color: #007AFF; */
	}

	.closeBtn {
		position: absolute;
		height: 40rpx;
		margin-top: 34rpx;
		right: 20rpx;
		line-height: 40rpx;
		color: #323232;
		font-size: 34rpx;
	}

	.titleText {
		height: 108rpx;
		line-height: 108rpx;
		/* left: 160rpx; */
		width: 750rpx;
		color: #323232;
		font-size: 36rpx;
		font-weight: bold;
		display: inline-block;
		text-align: center;
	}

	.contentView {
		position: relative;
		display: flex;
		flex-direction: column;
		/* top: 54px; */
		bottom: 0px;
		width: 750rpx;
		left: 0;
		height: 368rpx;
		/* background-color: #18BC37; */
	}

	.item {
		height: 40px;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 16px;
		line-height: 40px;
		color: #323232;
		font-weight: bold;
	}
</style>
