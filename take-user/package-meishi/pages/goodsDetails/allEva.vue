<template>
	<view>
		<wybar @clickLeft="back" :leftText="i18n.meishi.quanbupinglun"></wybar>
		<view class="row" style="width: calc(100% - 30px);margin-left: 15px;flex-wrap: wrap;margin-bottom: 10px;" v-if="storeType == 1">
			<view v-for="(item,index) in tabbar" :key="index" class="row"
				:class="index == selectIndex ? (selectIndex == 3 ? 'tabbar_sel_cai' : 'tabbar_sel') : (index == 3 ? 'tabbar_nor_cai' : 'tabbar_nor')" @click="tabbarClick(index)">
				<image src="../../../static/meishi/zan-sel.png" style="width: 14px;height: 14px;margin-right: 3px;" v-if="index == 2" mode=""></image>
				<image src="../../static/images/cai-nor.png" style="width: 14px;height: 14px;margin-right: 3px;" v-if="index == 3" mode=""></image>
				{{item}}
			</view>
		</view>
		<view class="row" style="width: calc(100% - 30px);margin-left: 15px;" v-else>
			<view v-for="(item,index) in tabbar" :key="index" :class="index == selectIndex ? 'tabbar_sel' : 'tabbar_nor'" @click="tabbarClick(index)">
				{{item}}
			</view>
		</view>
		<scroll-view scroll-y="true" :style="'height:' + scrollHeight + 'px;'" style="width: 100%;background-color: #FFF;"
			class="column" :refresher-triggered="refresherTriggered" @scrolltolower="scrolltolower">
			<view class="" style="margin-left: 25%;margin-top: 100px;width: 50%;" v-if="listArray.length == 0">
				<image src="../../../static/nothing.png" mode="widthFix" style="width: 100%;"></image>
				<view class="" style="text-align: center;width: 100%;font-size: 14px;color: #969696;margin-top: -40px;">
					暂无评价
				</view>
			</view>
			<view v-for="(item,index) in listArray" :key="index" class="cellContentView" v-else>
				<view class="row" style="width: 100%;height: 75px;align-items: center;">
					<image :src="item.user.avatar" mode="aspectFill" class="iconImage" v-if="item.is_anonymous != 1"></image>
					<image src="../../../static/logo.png" mode="aspectFill" class="iconImage" v-else></image>
					<view class="nameTimeView column">
						<view class="userNickeName" v-if="item.is_anonymous != 1">
							{{item.user.user_nickname}}
						</view>
						<view class="userNickeName" v-else>
							{{i18n.yilou.nimingyonghu}}
						</view>
						<blockquote v-if="storeType == 1">
							<view class="row"  style="align-items: center;" v-if="item.tags == 1">
								<image src="../../../static/meishi/zan-sel.png" style="width: 14px;height: 14px;" mode=""></image>
								<view class="" style="font-size: 12px;color: #6F6F6F;">
									赞了该商品
								</view>
							</view>
							<view class="row" style="align-items: center;" v-else>
								<image src="../../static/images/cai-nor.png" style="width: 14px;height: 14px;" mode=""></image>
								<view class="" style="font-size: 12px;color: #6F6F6F;">
									踩了该商品
								</view>
							</view>
						</blockquote>
						<blockquote v-if="storeType == 3">
							<view v-if="item.tags == 1" class="" style="font-size: 12px;color: #6F6F6F;">
								满意
							</view>
							<view v-if="item.tags == 0" class="" style="font-size: 12px;color: #6F6F6F;">
								中等
							</view>
							<view v-if="item.tags == -1" class="" style="font-size: 12px;color: #6F6F6F;">
								不满意
							</view>
						</blockquote>
						<blockquote v-if="storeType == 5">
							<view v-if="item.tags == 1" class="" style="font-size: 12px;color: #6F6F6F;">
								好评
							</view>
							<view v-if="item.tags == 0" class="" style="font-size: 12px;color: #6F6F6F;">
								中评
							</view>
							<view v-if="item.tags == -1" class="" style="font-size: 12px;color: #6F6F6F;">
								差评
							</view>
						</blockquote>
					</view>
					<view class="userNickeName" style="color: #646464;font-size: 12px;margin-right: 15px;margin-top: 25px;">
						{{item.addtime}}
					</view>
				</view>
				
				<view class="textContent">
					{{item.comment}}
				</view>				
				<view class="middle-Content" v-if="(item.video && item.video.url && item.pics.length == 0) || (!item.video.url && item.pics.length == 1)">
					<view class="picBackView" v-if="item.video && item.video.url" style="width: 66%;">
						<image :src="item.video.thumb" mode="aspectFill" class="pic-image"
							@click.stop="showBigVideo(item.video.url)"></image>
						<image src="../../../static/eva-play.png" @click.stop="showBigVideo(item.video.url)" style="position: absolute;right: 7px;top: 7px;width: 20px;height: 20px;" mode=""></image>	
					</view>
					<view v-for="(url,index_i) in item.pics" :key="index_i" class="picBackView" style="width: 66%;" v-else>
						<image :src="url" mode="aspectFill" class="pic-image"
							@click.stop="showBigImage(index_i,item.pics)"></image>
					</view>
				
				</view>
				<view class="middle-Content" v-else>
					<view class="picBackView" v-if="item.video && item.video.url">
						<image :src="item.video.thumb" mode="aspectFill" class="pic-image"
							@click.stop="showBigVideo(item.video.url)"></image>
						<image src="../../../static/eva-play.png" @click.stop="showBigVideo(item.video.url)" style="position: absolute;right: 6px;top: 6px;width: 20px;height: 20px;" mode=""></image>
					</view>
					<view v-for="(url,index_i) in item.pics" :key="index_i" class="picBackView">
						<image :src="url" mode="aspectFill" class="pic-image"
							@click.stop="showBigImage(index_i,item.pics)"></image>
					</view>
				
				</view>
				<view class="textContent" style="font-size: 12px;background-color: #F5F6F7;border-radius: 4px;" v-if="item.reply.merchant_reply_content">
					<view style="color: #FF5725;margin-left: 8px;margin-top: 8px;">
						{{i18n.yilou.shangjiahuifu+'（' + item.reply.merchant_reply_time + '）'}}
					</view>
					<view style="color: #383838;margin-left: 8px;margin-top: 8px;padding-bottom: 8px;">
						{{item.reply.merchant_reply_content}}
					</view>
					
				</view>
				<view class="bottomView row">
					<!-- <view style="flex: 1;"></view>
					<view class="row" style="margin-right: 15px;align-items: center;" v-if="item.is_like == 1" @click.stop="doLike(item,0)">
						<image src="../../../static/meishi/zan-sel.png" mode="" style="width: 20px;height: 20px;"></image>
						<view style="color: #FF5725;margin-left: 5px;font-size: 14px;font-weight: bold;">
							{{item.like}}
						</view>
					</view>
					<view class="row" style="margin-right: 15px;align-items: center;" v-else @click.stop="doLike(item,1)">
						<image src="../../../static/meishi/zan-nor.png" mode="" style="width: 20px;height: 20px;"></image>
						<view style="color: #666666;margin-left: 5px;font-size: 14px;font-weight: bold;">
							{{item.like}}
						</view>
					</view> -->
					
				</view>
				
			</view>
			<view class="" style="width: 100%;height: 50px;">
				
			</view>
		</scroll-view>
		
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
				
				scrollHeight:0,
				tabbar:[],
				selectIndex:0,
				listArray:[],
				goodsID:'',
				storeID:'',
				page:1,
				refresherTriggered:false,
				storeType:1
			}
		},
		onReady() {
			var that = this
			// that.tabbar = [this.i18n.meishi.quanbupinglun + ' 100',this.i18n.meishi.zuixinpinglun,this.i18n.meishi.youtu + ' 11']
			const res = uni.getSystemInfoSync();
			var top = 44
			if (parseInt(res.safeArea.top) > top) {
				top = parseInt(res.safeArea.top)
			}
			this.scrollHeight = getApp().globalData.windowHeight - top - 40
		},
		onLoad(option) {
			var that = this
			that.goodsID = option.id
			that.storeID = option.sid
			that.storeType = option.storeType
			that.http.sendRequest('MerchantStoreOrderEvaluate.GetProductNumber',{'store_id':that.storeID,'product_id':that.goodsID}).then(function(res){
				if(res.code == 0){
					const dic = res.info[0]
					if(that.storeType == 1){
						that.tabbar = ['全部 ' + dic.all,'有图 ' + dic.figure,dic.good,dic.negative]
					}else if(that.storeType == 3){
						that.tabbar = ['全部 ' + dic.all, '满意 ' + dic.good, '中等 ' + dic.medium, '不满意 ' + dic.negative]
					}else if(that.storeType == 5){
						that.tabbar = ['全部 ' + dic.all,'好评 ' + dic.good,'中评 ' + dic.medium,'差评 ' + dic.negative,'有图 ' + dic.figure]
					}
					
					that.requestData()
				}
			})
		},
		methods: {
			tabbarClick(index){
				this.selectIndex = index
				this.page = 1
				this.requestData()
			},
			doDetailes(item,index){
				uni.navigateTo({
					
				})
			},
			showBigImage(index,list){
				uni.previewImage({
					current: index,
					urls:list,
				})
				
			},
			back(){
				uni.navigateBack({
				
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
			requestData(){
				var that = this
				var type = '';
				if(that.storeType == 1){
					if(that.selectIndex == 0){
						type = ''
					}else if(that.selectIndex == 1){
						type = 101
					}else if(that.selectIndex == 2){
						type = 1
					}else if(that.selectIndex == 3){
						type = -1
					}
				}else if(that.storeType == 3){
					if(that.selectIndex == 0){
						type = ''
					}else if(that.selectIndex == 1){
						type = 1
					}else if(that.selectIndex == 2){
						type = 0
					}else if(that.selectIndex == 3){
						type = -1
					}
				}else{
					if(that.selectIndex == 0){
						type = ''
					}else if(that.selectIndex == 1){
						type = 1
					}else if(that.selectIndex == 2){
						type = 0
					}else if(that.selectIndex == 3){
						type = -1
					}else{
						type = 101
					}
				}
				
				that.http.sendRequest('MerchantStoreOrderEvaluate.Index', {
					'type': type,
					'store_id': that.storeID,
					'product_id':that.goodsID,
					'p': that.page
				}).then(function(res) {
					// that.listArray = res.info
					if (res.code == 0) {
						if (that.page == 1) {
							that.listArray = res.info[0]
						} else {
							that.listArray = that.listArray.concat(res.info[0])
						}
					}
				})
			},
			doLike(item,status){
				
				this.http.sendRequest('MerchantStoreOrderEvaluate.SetLike', {
					'id': item.id,
					'status': status,
				}).then(function(res) {
					const info = res.info[0]
					if (res.code == 0) {
						item.is_like = info.status
						item.like = info.count
					}
				})
			},
			showBigVideo(url){
				console.log(url)
				uni.setStorage({
					key: 'videourl',
					data: url,
					success() {
						uni.navigateTo({
							url:'/pages/video/video'
						})
					}
				})
			}
		}
	}
</script>

<style>
	@import url(index.css);
	page {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
