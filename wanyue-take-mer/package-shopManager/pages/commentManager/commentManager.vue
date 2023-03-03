<template>
	<view style="width: 100%;height: 100%;" v-if="allEvaDic">
		<view class="row" style="width: 100%;height: 70px;align-items: center;background-color: #FFF;">
			<view style="margin-left: 15px;font-size: 24px;font-weight: bold;">
				{{allEvaDic.evaluate.stars}}
			</view>
			<view class="column" style="flex: 1;margin-left: 10px;">
				<view style="font-size: 12px;color: #868686;">
					总体评分
				</view>
				<starV size=30 disabled=true :value="allEvaDic.evaluate.stars"></starV>
			</view>
			<view class="row" v-if="firstPlatformID == 3">
				<view class="column" style="margin-right: 15px;">
					<view style="font-size: 12px;color: #868686;">
						总体
					</view>

					<view style="font-size: 14px;color: #323232;font-weight: bold;">
						{{allEvaDic.evaluate.stars}}
					</view>
				</view>
				<view class="column" style="margin-right: 15px;margin-left: 15px;">
					<view style="font-size: 12px;color: #868686;">
						态度
					</view>
					<view style="font-size: 14px;color: #323232;font-weight: bold;">
						{{allEvaDic.evaluate.taste_star}}
					</view>
				</view>
				<view class="column" style="margin-right: 15px;margin-left: 15px;">
					<view style="font-size: 12px;color: #868686;">
						质量
					</view>
					<view style="font-size: 14px;color: #323232;font-weight: bold;">
						{{allEvaDic.evaluate.packaging_star}}
					</view>
				</view>
			</view>
			<view class="row" v-else>
				<view class="column" style="margin-right: 15px;">
					<view style="font-size: 12px;color: #868686;" v-if="firstPlatformID == 1">
						口味
					</view>
					<view style="font-size: 12px;color: #868686;" v-else>
						包装
					</view>
					<view style="font-size: 14px;color: #323232;font-weight: bold;">
						{{allEvaDic.evaluate.taste_star}}
					</view>
				</view>
				<view class="column" style="margin-right: 15px;margin-left: 15px;">
					<view style="font-size: 12px;color: #868686;" v-if="firstPlatformID == 1">
						包装
					</view>
					<view style="font-size: 12px;color: #868686;" v-else>
						质量
					</view>
					<view style="font-size: 14px;color: #323232;font-weight: bold;">
						{{allEvaDic.evaluate.packaging_star}}
					</view>
				</view>
				<view class="column" style="margin-right: 15px;margin-left: 15px;">
					<view style="font-size: 12px;color: #868686;">
						配送满意度
					</view>
					<view style="font-size: 14px;color: #323232;font-weight: bold;">
						{{allEvaDic.evaluate.distribution_star}}%
					</view>
				</view>
			</view>
		</view>
		<view class="column" style="width: 100%;height: 80px;background-color: #FFF;margin-top: 5px;">

			<view class="" style="margin-left: 15px;height: 40px;line-height: 40px;font-size: 18px;font-weight: bold;">
				顾客评价<text style="margin-top: 2px;font-size: 14px;">（{{allEvaDic.count}}）</text>
			</view>
			<view class="row" style="width: 100%;height: 40px;justify-content: space-around;align-items: center;">
				<view v-for="(item,index) in typeList" :key="index" class="row" style="align-items: center;"
					@click="showtypeSelectedView(index)">
					<view class=""
						:style="index < 3 ? 'font-size: 13px;color: #646464;' : 'font-size: 13px;color: #00C1DE;'">
						{{item.name}}
					</view>
					<image src="../../../static/shang.png" style="width: 12px;height: 12px;" v-if="item.open" mode="">
					</image>
					<image src="../../../static/xia.png" style="width: 12px;height: 12px;" v-else mode=""></image>
				</view>
			</view>
		</view>

		<scroll-view scroll-y="true" style="width: 100%;bbackground-color: #f5f6f7;"
			:style="'height:' + scrollHeight + 'px;'" :refresher-triggered="refresherTriggered"
			@scrolltolower="scrolltolower" :refresher-enabled="true" :refresher-threshold="45"
			@refresherrefresh="refresherrefresh">
			<view v-for="(item,index) in list" :key="index" class="cellContentView">
				<view class="row" style="width: 100%;height: 75px;" v-if="item.is_anonymous != 1">
					<image :src="item.users.avatar" mode="aspectFill" class="iconImage"></image>
					<view class="nameTimeView colum">
						<view class="userNickeName">
							{{item.users.user_nickname}}
						</view>
						<view class="userNickeName" style="color: #646464;font-size: 12px;">
							{{item.addtime}}
						</view>
					</view>

				</view>
				<view class="row" style="width: 100%;height: 75px;" v-else>
					<image :src="defaultAvatar" mode="aspectFill" class="iconImage"></image>
					<view class="nameTimeView colum">
						<view class="userNickeName">
							匿名用户
						</view>
						<view class="userNickeName" style="color: #646464;font-size: 12px;">
							{{item.addtime}}
						</view>
					</view>

				</view>
				<view class="row" style="margin-left: 15px;height: 30px;align-items: center;">
					<starV size=30 disabled=true :value="item.overall_star"></starV>
					<text style="font-size: 12px;color: #969696;font-weight: bold;"
						v-if="firstPlatformID == 1">总体{{item.overall_star}} 口味{{item.taste_star}} 包装{{item.packaging_star}} 配送3.0</text>
					<text style="font-size: 12px;color: #969696;font-weight: bold;"
						v-if="firstPlatformID == 3">总体{{item.overall_star}} 态度{{item.taste_star}} 质量{{item.packaging_star}} 配送3.0</text>
					<text style="font-size: 12px;color: #969696;font-weight: bold;"
						v-if="firstPlatformID > 4">总体{{item.overall_star}} 包装{{item.taste_star}} 质量{{item.packaging_star}} 配送3.0</text>

				</view>
				<view class="textContent">
					{{item.content}}
				</view>

				<view class="textContent" v-if="firstPlatformID == 1">
					<view class="iconfont" style="width: 100%;"
						v-if="item.product_reply['1'] && item.product_reply['-1']">
						&#xe602;<text v-for="(item_p,index_p) in item.product_reply['1']"
							:key="index_p">{{item_p.prodcut.use_name}} </text>
						&#xe601;<text v-for="(item_p,index_p) in item.product_reply['-1']"
							:key="index_p">{{item_p.prodcut.use_name}} </text>
					</view>
					<view class="" style="width: 100%;" v-else>
						<view class="iconfont" style="width: 100%;" v-if="item.product_reply['1']">
							&#xe602;<text v-for="(item_p,index_p) in item.product_reply['1']"
								:key="index_p">{{item_p.prodcut.use_name}} </text>
						</view>
						<view class="iconfont" style="width: 100%;" v-if="item.product_reply['-1']">
							&#xe601;<text v-for="(item_p,index_p) in item.product_reply['-1']"
								:key="index_p">{{item_p.prodcut.use_name}} </text>
						</view>
					</view>

				</view>
				<view class="textContent" style="font-weight: 400;margin-top: 5px;"
					v-if="firstPlatformID != 1 && item.is_product_reply == 1">
					#有商品被单独评价
				</view>
				<view class="textContent row" style="margin-top: 10px;" @click="doOrderMessage(item)">
					<view class="" style="font-size: 12px;color: #969696;line-height: 17px;width:calc(100% - 20px);">
						订单详情：
						<text v-for="(item_p,index_p) in item.cart_info" :key="index_p">{{item_p.product.use_name}}<text
								v-if="item_p.product.product_attr_id > 0">【{{item_p.product_attr.use_name}}】</text>*{{item_p.cart_num}}
						</text>
					</view>
					<image src="../../../static/ads-seld-right.png" style="width: 17px;height: 17px;" mode=""></image>
				</view>

				<view class="middle-Content"
					v-if="(item.video && item.video.url && item.pics.length == 0) || ((!item.video || !item.video.url) && item.pics.length == 1)">
					<view class="picBackView" v-if="item.video && item.video.url" style="width: 66%;">
						<image :src="item.video.thumb" mode="aspectFill" class="pic-image"
							@click.stop="showBigVideo(item.video.url)"></image>
						<image src="../../static/eva-play.png"
							style="position: absolute;right: 7px;top: 7px;width: 20px;height: 20px;" mode=""></image>
					</view>
					<view v-for="(url,index_i) in item.pics" :key="index_i" class="picBackView" style="width: 66%;"
						v-else>
						<image :src="url" mode="aspectFill" class="pic-image"
							@click.stop="showBigImage(index_i,item.pics)"></image>
					</view>

				</view>
				<view class="middle-Content" v-else>
					<view class="picBackView" v-if="item.video && item.video.url">
						<image :src="item.video.thumb" mode="aspectFill" class="pic-image"
							@click.stop="showBigVideo(item.video.url)"></image>
						<image src="../../static/eva-play.png"
							style="position: absolute;right: 6px;top: 6px;width: 20px;height: 20px;" mode=""></image>
					</view>
					<view v-for="(url,index_i) in item.pics" :key="index_i" class="picBackView">
						<image :src="url" mode="aspectFill" class="pic-image"
							@click.stop="showBigImage(index_i,item.pics)"></image>
					</view>

				</view>
				<view v-if="item.is_reply==1" class="textContent column"
					style="font-size: 12px;background-color: #F5F6F7;border-radius: 4px;">
					<view style="color: #969696;margin-left: 10px;margin-top: 10px;font-weight: bold;">
						商家回复（{{item.merchant_reply_time}}）
					</view>
					<view
						style="color: #383838;margin-left: 10px;margin-top: 5px;width:calc(100% - 20px);font-weight: bold;font-size: 13px;margin-bottom: 10px;word-break: break-all;">
						{{item.merchant_reply_content}}
					</view>
				</view>

				<view class="bottomView row">

					<view class="bottom_button" style="margin-right: 30px;" @click="doReplay(item)"
						v-if="item.is_reply == 0">
						回复
					</view>
					<view class="bottom_button" @click="doEvaDetailes(item)">
						详情
					</view>
				</view>

			</view>

		</scroll-view>



		<view class="typeSelView" v-if="typeshowIndex >= 0" :style="'top:' + topSpace + 'px;'"
			@click="dohideTypeView()">
			<view v-for="(item,index) in typeList[typeshowIndex].list" :key="index" class="typeCell"
				@click="doselectType(typeshowIndex,index,item)">
				<text v-if="typeshowIndex == 0"
					:style="reply == index ? 'color:#00C1DE;' : 'color:#323232;'">{{item}}</text>
				<text v-if="typeshowIndex == 1"
					:style="evaluate == index ? 'color:#00C1DE;' : 'color:#323232;'">{{item}}</text>
				<text v-if="typeshowIndex == 2"
					:style="content == index ? 'color:#00C1DE;' : 'color:#323232;'">{{item}}</text>
				<text v-if="typeshowIndex == 3"
					:style="month == index ? 'color:#00C1DE;' : 'color:#323232;'">{{item}}</text>

			</view>
		</view>
		<view v-if="showPop" class="replypop">
			<view class="bg">
				<view class="row"
					style="align-items: center;height: 22px;margin-top: 10px;margin-left: 30px;width: calc(100% - 40px);">
					<view class="pop-txt">回复</view>
					<image src="../../../static/wy-close.png" style="width: 20px;height: 20px;margin-right: 0;" mode=""
						@click="docloseReplayPop()"></image>
				</view>

				<textarea class="input" type="text" value="" @input="inputreply" placeholder="请输入回复内容"></textarea>
				<view class="publish" @click="puhlish()">发布</view>
			</view>
		</view>
	</view>
</template>

<script>
	import pingjia from '@/components/pingjia/pingjia.vue'
	import starV from '@/components/banxing/merbanStar.vue'
	import commentDetailVue from './commentDetail.vue'
	export default {
		components: {
			pingjia,
			starV
		},
		data() {
			return {
				scrollHeight: 0,
				allEvaDic: null,
				page: 1,
				list: [],
				refresherTriggered: false,
				typeList: [{
					name: '全部回复',
					list: ['全部回复', '已回复', '未回复'],
					open: false
				}, {
					name: '全部评价',
					list: ['全部评价', '好评', '差评'],
					open: false
				}, {
					name: '全部内容',
					list: ['全部内容', '有内容', '无内容'],
					open: false
				}, {
					name: '近1个月',
					list: ['近1个月', '近2个月', '近3个月'],
					open: false
				}],
				typeshowIndex: -1,
				topSpace: 0,
				defaultAvatar: '',
				showPop: false,
				replyTxt: '',
				replyCell: '',
				firstPlatformID: 1,
				reply: 0,
				evaluate: 0,
				content: 0,
				month: 0
			}
		},

		onReady: function() {
			var shopinfo = uni.getStorageSync('shopinfo')
			this.firstPlatformID = shopinfo.top_type_id

			const res = uni.getSystemInfoSync();
			this.scrollHeight2 = res.windowHeight - 20
			this.topSpace = 155
			this.scrollHeight = res.windowHeight - this.topSpace
			this.defaultAvatar = getApp().globalData.weburl + 'default.png'
		},
		onLoad() {

			this.getListData()
			// uni.$on('gotoDetail', (param) => {
			// 	console.log(param)
			// 	uni.navigateTo({
			// 		url: 'commentDetail?param=' + JSON.stringify(param)
			// 	})
			// })


		},
		onUnload() {

		},
		methods: {
			getListData() {
				var that = this
				var param = {
					'reply': that.reply,
					'evaluate': that.evaluate,
					'content': that.content,
					'month': that.month + 1,
					'p': that.page
				}

				that.http.sendRequest('MerchantStoreOrderEvaluate.Index', param).then(function(data) {
					// console.log(data)
					if (data.code == 0) {
						that.allEvaDic = data.info[1]
						console.log(that.allEvaDic)
						if (that.page == 1) {
							that.list = data.info[0]
						} else {
							var arr = data.info[0]
							for (let i = 0; i < arr.length; i++) {
								that.list.push(arr[i])
							}
						}
					}
				})
			},

			refresherrefresh() {
				this.refresherTriggered = true;
				this.page = 1
				this.getListData()
				setTimeout(() => {
					this.refresherTriggered = false;
				}, 1000);
			},

			scrolltolower() {
				console.log('滚动到底部');
				var that = this
				that.page++
				that.getListData()
			},

			showtypeSelectedView(index) {
				var that = this
				that.typeshowIndex = index
				for (var i = 0; i < that.typeList.length; i++) {
					if (that.typeshowIndex == i) {
						that.typeList[i].open = true
					} else {
						that.typeList[i].open = false
					}
				}

			},
			doselectType(type, index, name) {
				console.log(type, index)
				this.typeList[this.typeshowIndex].name = name
				if (type == 0) {
					this.reply = index
				} else if (type == 1) {
					this.evaluate = index
				} else if (type == 2) {
					this.content = index
				} else {
					this.month = index
				}
				// this.$forceUpdate()
				this.page = 1
				this.getListData()
			},
			dohideTypeView() {
				console.log(1111111111)
				this.typeList[this.typeshowIndex].open = false
				this.typeshowIndex = -1
			},
			showBigImage(index, list) {
				uni.previewImage({
					current: index,
					urls: list,
				})

			},

			showBigVideo(url) {
				console.log(url)
				uni.setStorage({
					key: 'videourl',
					data: url,
					success() {
						uni.navigateTo({
							url: '/pages/video/video'
						})
					}
				})
			},
			doEvaDetailes(item) {
				uni.navigateTo({
					url: 'commentDetail?id=' + item.id,
					events: {
						// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
						replaySucesss: function(data) {
							console.log(data)
							item.is_reply = data.is_reply
							item.merchant_reply_time = data.merchant_reply_time
							item.merchant_reply_content = data.merchant_reply_content
						}
					},
				})
			},
			doReplay(item) {
				this.showPop = true
				this.replyCell = item
			},
			inputreply(e) {
				this.replyTxt = e.detail.value
			},
			puhlish() {
				var that = this
				that.showPop = false
				if (that.replyTxt.length > 0) {
					var param = {
						'id': that.replyCell.id,
						'merchant_reply_content': that.replyTxt
					}
					that.http.sendRequest('MerchantStoreOrderEvaluate.ReplySave', param).then(function(data) {
						if (data.code == 0) {
							console.log(data)
							that.showPop = false
							that.replyCell.is_reply = 1
							that.replyCell.merchant_reply_content = that.replyTxt
							that.replyCell.merchant_reply_time = data.info[0].merchant_reply_time
							uni.showToast({
								title: data.msg,
								duration: 2000,
								icon: 'none'
							})
						}
					})
				}

			},
			docloseReplayPop() {
				this.showPop = false

			},
			doOrderMessage(item) {
				uni.navigateTo({
					url: '/package-index/pages/indexOrderDetail?id=' + item.order.id
				})
			}
		}
	}
</script>

<style>
	@import url("comment.css");
	@import url("../../static/iconf/iconfont.css");

	page {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
		overflow: hidden;
	}

	.nothing {
		margin-top: 150px;
		width: 100%;
		height: 140px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}


	.typeSelView {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.3);
	}

	.typeCell {
		background-color: #FFF;
		height: 40px;
		line-height: 40px;
		padding-left: 15px;
		font-size: 14px;
		color: #323232;
	}
</style>
