<template>
	<view>
		<scroll-view scroll-y="true" :style="'height:' + height + 'px;'" style="width: 100%;background-color: #f5f6f7;"
			class="column" :refresher-triggered="refresherTriggered" @scrolltolower="scrolltolower"  @refresherrefresh="refresherrefresh" :refresher-threshold="45" :refresher-enabled="true">
			<view class="" style="margin-left: 25%;margin-top: 100px;width: 50%;" v-if="listArray.length == 0">
				<image src="../../static/nothing.png" mode="widthFix" style="width: 100%;"></image>
				<view class="" style="text-align: center;width: 100%;font-size: 14px;color: #969696;margin-top: -40px;">
					暂无通知
				</view>
			</view>
			<view v-for="(item,index) in listArray" :key="index" class="cell" @click="gotoCell(item)">
				<image src="../../static/message/xitong.png" v-if="item.type == 0" mode="aspectFit" class="leftImg"></image>
				<image src="../../static/message/dazhe.png" v-if="item.type == 1" mode="aspectFit" class="leftImg"></image>
				<image src="../../static/message/huodong.png" v-if="item.type == 2" mode="aspectFit" class="leftImg"></image>
				 
				<view class="contentView">
					<view class="column" style="flex:1;max-width: 80%;">
						<view class="oneline" style="color: #1F2226;font-size: 16px;">
							{{item.title}}
						</view>
						<view class="oneline" style="color: #AAA;font-size: 12px;">
							{{item.content}}
						</view>
					</view>
					<view class="column" style="align-items: flex-end;">
						<view class="" style="color: #1F2226;font-size: 12px;">
							{{item.addtime}}
						</view>
						<view class="redBage" v-if="item.is_read != 1">

						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		props: {
			height: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				page: 1,
				refresherTriggered: false,
				listArray: [],
				height: 0
			}
		},
		created() {
			// const res = uni.getSystemInfoSync();
			// var top = 44;
			// if (parseInt(res.safeArea.top) > 44) {
			// 	top = parseInt(res.safeArea.top)
			// }
			// this.height = res.windowHeight - 42
			this.requestData()
		},
		methods: {
			gotoCell(item) {
				item.is_read = 1
				this.$emit('gotoCell', item)
			},
			requestData() {
				var that = this
				that.http.sendRequest('Message.Index', {
					'p': that.page
				}).then(function(res) {
					if (res.code == 0) {
						const info = res.info[0]
						if (that.page == 1) {
							that.listArray = info
						} else {
							that.listArray = that.listArray.concat(info)
						}
					}
				})
			},
			scrolltolower() {
				console.log('滚动到底部');
				var that = this
				that.page++
				that.requestData()
			},
			refresherrefresh() {
				var that = this
				that.page = 1

				that.refresherTriggered = true;
				that.requestData()
				console.log('自定义下拉刷新被触发');
				setTimeout(() => {
					that.refresherTriggered = false;
				}, 1000);
			},
		},
	}
</script>

<style>
	.cell {
		width: 100%;
		height: 66px;
		display: flex;
		flex-direction: row;
		/* align-items: center; */
	}

	.leftImg {
		background-color: #FFF;
		margin-left: 15px;
		margin-top: 13px;
		width: 40px;
		height: 40px;
		border-radius: 20px;
	}

	.contentView {
		margin-top: 13px;
		margin-left: 10px;
		width: calc(100% - 80px);
		height: 52px;
		border-bottom: 0.5px solid #E7E7E7;
		display: flex;
		flex-direction: row;
	}

	.redBage {
		margin-top: 5px;
		margin-right: 0;
		width: 6px;
		height: 6px;
		border-radius: 3px;
		background-color: #FF4C4C;
	}
</style>
