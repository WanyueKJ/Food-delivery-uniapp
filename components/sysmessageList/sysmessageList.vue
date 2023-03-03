<template>
	<view>
		<scroll-view scroll-y="true" :style="'height:' + height + 'px;'" style="width: 100%;background-color: #f5f6f7;"
			class="column" :refresher-triggered="refresherTriggered"   @refresherrefresh="refresherrefresh" :refresher-threshold="45" :refresher-enabled="true">
			<!-- @scrolltolower="scrolltolower" -->
			<view v-if="listArray.length == 0" class="nothing clomun">
				<image src="../../static/noorder@2x.png" mode="aspectFit" style="width: 100px;height:60px ;"></image>
				<view style="font-size:12px;height: 20px;line-height: 20px; color:#dadada;">{{i18n.message.nodata}}</view>
			</view>
			<view v-else v-for="(item,index) in listArray" :key="index" class="cell" @click="gotoCell(item)">
				<image src="../../static/message/gonggao.png"  mode="aspectFit" class="leftImg"></image>
				<!-- <image src="../../static/message/dazhe.png" v-if="item.type == 1" mode="aspectFit" class="leftImg"></image>
				<image src="../../static/message/huodong.png" v-if="item.type == 2" mode="aspectFit" class="leftImg"></image>
				 -->
				<view class="contentView">
					<view class="column" style="flex:1;">
						<view class="" style="color: #383838;font-size: 15px;">
							{{i18n.message.sysTongzhi}}
						</view>
						<view class="title">{{item.title}}</view>
					</view>
					<view class="column" style="align-items: flex-end;">
						<view class="" style="color: #1F2226;font-size: 12px;">{{item.addtime}}</view>
						<view class="redBage" v-show="item.is_read==0"></view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:'sysmessageList',
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		props: {
			// height: {
			// 	type: Number,
			// 	default: 0
			// },
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
			const res = uni.getSystemInfoSync();
			var top = 44;
			if (parseInt(res.safeArea.top) > 44) {
				top = parseInt(res.safeArea.top)
			}
			console.log(top)
			this.height = res.windowHeight - top - 40
			this.requestData()
		},
		methods: {
			gotoCell(item) {
				// item.is_read = 1
				this.$emit('gotoCell', item)
			},
			requestData() {
				var that = this
				that.http.sendRequest('Message.Index', {
					'p': String(that.page)
				}).then(function(res) {
					if (res.code == 0) {
						const info2 = res.info[0]
						
						if (that.page == 1) {
							that.listArray = info2
						} else {
							that.listArray = that.listArray.concat(info2)
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
		height: 64px;
		display: flex;
		flex-direction: row;
		/* align-items: center; */
	}
	.nothing {
		margin-top:150px;
		width: 100%;
		height: 140px;
		display: flex;
		flex-direction: column;
		align-items: center;
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
		height: 55px;
		border-bottom: 0.5px solid #E7E7E7;
		display: flex;
		flex-direction: row;
	}
	.title{
		/* display: flex;
		flex-direction: row; */
		color: #AAA;
		font-size: 12px;
		height: 30px;
		overflow: hidden;
		word-break: break-all;  /* break-all(允许在单词内换行。) */
		text-overflow: ellipsis;  /* 超出部分省略号 */
		display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 1; /** 显示的行数 **/
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
