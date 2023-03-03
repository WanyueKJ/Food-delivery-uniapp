<template>
	<view style="width: 100%;height: 100%;">
		<scroll-view scroll-y="true" style="width: 100%;background-color: #f5f5f5;height: 100%;" class="column"
			v-if="item">

			<view class="column" style="width: 100%;background-color: #fdfdfd;">
				<view class=""
					style="margin-left: 15px;height: 40px;line-height: 40px;font-size: 18px;font-weight: bold;">
					店铺评价
				</view>
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
						v-if="firstPlatformID == 1">总体{{item.overall_star}} 口味{{item.taste_star}} 包装{{item.packaging_star}} 配送{{item.distribution_star}}</text>
					<text style="font-size: 12px;color: #969696;font-weight: bold;"
						v-if="firstPlatformID == 3">总体{{item.overall_star}} 态度{{item.taste_star}} 质量{{item.packaging_star}} 配送{{item.distribution_star}}</text>
					<text style="font-size: 12px;color: #969696;font-weight: bold;"
						v-if="firstPlatformID > 4">总体{{item.overall_star}} 包装{{item.taste_star}} 质量{{item.packaging_star}} 配送{{item.distribution_star}}</text>

				</view>
				<view class="textContent">
					{{item.content}}
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
					style="font-size: 12px;background-color: #F5F6F7;border-radius: 4px;margin-bottom: 10px;">
					<view style="color: #969696;margin-left: 10px;margin-top: 10px;font-weight: bold;">
						商家回复（{{item.merchant_reply_time}}）
					</view>
					<view
						style="color: #383838;margin-left: 10px;margin-top: 5px;width:calc(100% - 20px);font-weight: bold;font-size: 13px;margin-bottom: 10px;word-break: break-all;">
						{{item.merchant_reply_content}}
					</view>
				</view>

				<view class="bottomView row" style="border-bottom: none;" v-else>

					<view class="bottom_button" @click="doReplay()" v-if="item.is_reply == 0">
						回复
					</view>

				</view>


			</view>


			<view class="column" style="width: 100%;background-color: #fdfdfd;margin-top: 10px;padding-bottom: 10px;"
				v-if="firstPlatformID == 1">
				<view class=""
					style="margin-left: 15px;height: 40px;line-height: 40px;font-size: 18px;font-weight: bold;"> TA的踩赞
				</view>
				<view class="textContent">
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
			</view>
			<view class="column" style="width: 100%;background-color: #fdfdfd;margin-top: 10px;padding-bottom: 10px;"
				v-else>
				<view class=""
					style="margin-left: 15px;height: 40px;line-height: 40px;font-size: 18px;font-weight: bold;">商品评价
				</view>
				<view v-for="(item_p,index) in item.product" :key="index">
					<view class="row" style="width: 100%;height: 75px;align-items: center;">
						<image :src="item_p.prodcut.image" mode="aspectFill" class="product_thumb" v-if="item.is_anonymous != 1"></image>
						<view class="column"  style="margin-left: 10px;">
							<view class="userNickeName">
								{{item_p.prodcut.use_name}}
							</view>
							
							<blockquote v-if="firstPlatformID == 3">
								<view v-if="item_p.tags == 1" class="emoj_back">
									<image class="emoj" src="../../static/manyi-s.png" mode=""></image>满意
								</view>
								<view v-if="item_p.tags == 0" class="emoj_back">
									<image class="emoj" src="../../static/zhongdeng-s.png" mode=""></image>中等
								</view>
								<view v-if="item_p.tags == -1" class="emoj_back">
									<image class="emoj" src="../../static/bumanyi-s.png" mode=""></image>不满意
								</view>
							</blockquote>
							<blockquote v-else>
								<view v-if="item_p.tags == 1" class="emoj_back">
									好评
								</view>
								<view v-if="item_p.tags == 0" class="emoj_back">
									中评
								</view>
								<view v-if="item_p.tags == -1" class="emoj_back">
									差评
								</view>
							</blockquote>
						</view>
						
					</view>
					<view class="textContent">
						{{item_p.comment}}
					</view>
					
					<view class="middle-Content"
						v-if="(item_p.video && item_p.video.url && item_p.pics.length == 0) || ((!item_p.video || !item_p.video.url) && item_p.pics.length == 1)">
						<view class="picBackView" v-if="item_p.video && item_p.video.url" style="width: 66%;">
							<image :src="item_p.video.thumb" mode="aspectFill" class="pic-image"
								@click.stop="showBigVideo(item_p.video.url)"></image>
							<image src="../../static/eva-play.png"
								style="position: absolute;right: 7px;top: 7px;width: 20px;height: 20px;" mode=""></image>
						</view>
						<view v-for="(url,index_i) in item_p.pics" :key="index_i" class="picBackView" style="width: 66%;"
							v-else>
							<image :src="url" mode="aspectFill" class="pic-image"
								@click.stop="showBigImage(index_i,item_p.pics)"></image>
						</view>
					
					</view>
					<view class="middle-Content" v-else>
						<view class="picBackView" v-if="item_p.video && item_p.video.url">
							<image :src="item_p.video.thumb" mode="aspectFill" class="pic-image"
								@click.stop="showBigVideo(item_p.video.url)"></image>
							<image src="../../static/eva-play.png"
								style="position: absolute;right: 6px;top: 6px;width: 20px;height: 20px;" mode=""></image>
						</view>
						<view v-for="(url,index_i) in item_p.pics" :key="index_i" class="picBackView">
							<image :src="url" mode="aspectFill" class="pic-image"
								@click.stop="showBigImage(index_i,item_p.pics)"></image>
						</view>
					
					</view>
					<view class="bottomView" style="height: 15px;">
						
					</view>
				</view>
			</view>
			<view class="column" style="width: 100%;background-color: #fdfdfd;margin-top: 10px;padding-bottom: 10px;"
				v-if="firstPlatformID != 3">
				<view class=""
					style="margin-left: 15px;height: 40px;line-height: 40px;font-size: 18px;font-weight: bold;"> 骑手评价
				</view>
				<view class="row" style="width: 100%;height: 75px;">
					<image :src="item.rider_evaluate.rider.avatar" mode="aspectFill" class="iconImage"></image>
					<view class="nameTimeView colum">
						<view class="userNickeName">
							{{item.rider_evaluate.rider.user_nickname}}
						</view>
						<view class="userNickeName" style="color: #646464;font-size: 12px;">
							{{item.rider_evaluate.end_time}}
						</view>
					</view>
					<starV size=30 style="margin-right: 15px;margin-top: 25px;" disabled=true
						:value="item.rider_evaluate.distribution_star"></starV>
				</view>
				<view class="textContent">
					{{item.rider_evaluate.content}}
				</view>
			</view>
			<view class="" style="width: 100%;height: 50px;">
				
			</view>
		</scroll-view>
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
	import starV from '@/components/banxing/merbanStar.vue'
	export default {
		components: {
			starV
		},
		data() {
			return {
				scrollHeight: 0,
				commentID: '',
				item: null,
				orderNumID: '',
				goodsNum: '',
				cartInfo: [],
				showPop: false,
				replyTxt: '',
				replyID: '',
				order: {},
				firstPlatformID: '',
				defaultAvatar: ''
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			}
		},
		onReady() {
			const res = uni.getSystemInfoSync();
			this.scrollHeight = res.windowHeight
		},
		onLoad(option) {

			this.defaultAvatar = getApp().globalData.weburl + 'default.png'
			var shopinfo = uni.getStorageSync('shopinfo')
			this.firstPlatformID = shopinfo.top_type_id

			this.commentID = option.id
			this.getData()

		},
		onShow() {},

		methods: {
			getData() {
				var that = this
				var param = {
					'id': this.commentID
				}
				this.http.sendRequest('MerchantStoreOrderEvaluate.Detail', param).then(function(data) {
					console.log(data)
					if (data.code == 0) {
						that.item = data.info[0]
						console.log(that.item)
						that.cartInfo = that.item.cart_info
						that.order = that.item.order
						console.log(that.cartInfo)
					}
				})
			},
			showBigImage(index, pics) {
				uni.previewImage({
					current: index,
					urls: pics,
				})

			},
			inputreply(e) {
				this.replyTxt = e.detail.value
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
			onChange() {

			},
			doReplay() {

				this.showPop = true
			},
			puhlish() {
				this.showPop = false
				if (this.replyTxt.length > 0) {
					var param = {
						'id': this.item.id,
						'merchant_reply_content': this.replyTxt
					}
					var that = this
					this.http.sendRequest('MerchantStoreOrderEvaluate.ReplySave', param).then(function(data) {
						if (data.code == 0) {
							that.showPop = false
							const info = data.info[0]
							const eventChannel = that.getOpenerEventChannel()
							eventChannel.emit('replaySucesss', {
								data: {
									is_replay: 1,
									merchant_reply_time: info.merchant_reply_time,
									merchant_reply_content: that.replyTxt
								}
							})
							that.getData()
						}
					})
				}

			},
			docloseReplayPop() {
				this.showPop = false
			},
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
	.product_thumb{
		width: 50px;
		height: 50px;
		border-radius: 4px;
		margin-left: 15px;
	}
	.emoj{
		margin-right: 5px;
		width: 22px;
		height: 22px;
	}
	.emoj_back{
		font-size: 12px;
		color: #6F6F6F;
		margin-top: 5px;
		display: flex;
		align-items: center;
	}
</style>
