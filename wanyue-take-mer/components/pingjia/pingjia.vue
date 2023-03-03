<template>
	<view>
		<!-- <scroll-view scroll-y="true" :style="'height:' + height + 'px;'" style="width: 100%;background-color: #f5f6f7;"
			class="column" :refresher-triggered="refresherTriggered" @scrolltolower="scrolltolower"> -->
			<view v-for="(item,index) in listArr" :key="index" class="cellContentView">
				<view class="row" style="width: 100%;height: 75px;">
					<block v-if="item.is_anonymous==1">
						<image :src="defaultAvatar" mode="aspectFill" class="iconImage" @click.stop="doUserCenter(item)"></image>
					</block>
					<block v-else>
						<image :src="item.users.avatar" mode="aspectFill" class="iconImage" @click.stop="doUserCenter(item)"></image>
					</block>
					<view class="nameTimeView colum">
						<view v-if="item.is_anonymous==1" class="userNickeName">
							{{i18n.index.niming}}
						</view>
						<view v-else class="userNickeName">
							{{item.users.user_nickname}}
						</view>
						<view class="userNickeName" style="color: #646464;font-size: 12px;">
							{{item.addtime}}
						</view>
					</view>
					<view class="row" style="margin-top: 22px;  margin-left: 15px;  margin-right: 15px; height: 30px;top:20px">
						<starV size = 30 @change="onChange" disabled = true :value = "item.overall_star" ></starV>
					</view>
				</view>
				
				<!-- 评论内容 -->
				<view class="textContent">{{item.content}}</view>	
				<!-- 评论图片 -->
				<view class="middle-Content">
					<view v-for="(url,index_i) in item.pics" :key="index_i" class="picBackView">
						<image :src="url"  mode="aspectFill" class="pic-image" @click.stop="showBigImage(index_i,item.pics)"></image>
					</view>
				</view>
				<!-- 订单信息 -->
				<view v-if="typeString == 1 && item.order" class="orderdetail colum">
					<view class="order_top row">
						<view class="ordernum">{{i18n.shop.ordernum}}{{item.order.order_id}}</view>
						<image class="rightImg" src="../../static/ads-seld-right.png" mode="aspectFit" @click="doOrderDetailes(item)"></image>
					</view>
					<block v-if="item.producct.length==1">
						<view class="row" style="margin-top: 5px; width: 100%;height:60px ;align-items:center;">
							<image :src="item.producct[0].image" mode="aspectFit" style=" width:72px;height: 50px;"></image>
							<view style="margin-left:8px;margin-right:8px;flex: 1; font-size: 13px;color: #6F6F6F;">{{item.producct[0].use_name}}</view>
							<view style="font-size: 11px;color: #6F6F6F; margin-left: 12px; margin-top: 10px;width: 8px;display: flex;flex-direction: columns;align-items: center;">{{i18n.shop.amount}}{{item.order.total_num}}{{i18n.shop.jianshu}}</view>
						</view>
					</block>
					<block v-if="item.producct.length>1">
						<view class="row" style="margin-top: 5px; width: 100%; ;align-items:center;">
							<scroll-view scroll-x="true" style=" width: calc(100% - 50px);white-space: nowrap;height:100% ;">
								<view v-for="(item,index) in item.producct " :key="index" class="orderItem colum">
									<image :src="item.image" mode="aspectFit" style="margin-right: 8px; width:72px;height: 50px;"></image>
									<view style="font-size: 11px;color: #6F6F6F;text-align: center;width:72px;">{{item.use_name}}</view>
								</view>
							</scroll-view>
							<view style="font-size: 11px;color: #6F6F6F; margin-left: 12px; margin-top: 10px;width: 8px;display: flex;flex-direction: columns;align-items: center;">{{i18n.shop.amount}}{{item.order.total_num}}{{i18n.shop.jianshu}}</view>
						</view>
					</block>
				</view>
				<!-- 底部赞个数 服务类型订单没有点赞数--> 
				<view class="bottomView row">
					<view v-show="firstPlatformID != 3" style="color: #6F6F6F;font-size: 14px;">{{i18n.index.zannum}} {{item.like}}</view>
					<view v-show="item.is_reply==0" class="reply" @click="reply(item)">{{i18n.index.reply}}</view>
				</view>
				<view v-show="item.is_reply==1" class="textContent" style="font-size: 12px;background-color: #F5F6F7;border-radius: 4px;">
					<view style="color: #00C1DE;margin-left: 8px;margin-top: 8px;">
						{{i18n.index.shopreply}}
					</view>
					<view style="color: #383838;margin-left: 8px;margin-top: 8px;padding-bottom: 8px;">
						{{item.merchant_reply_content}}
					</view>
				</view>	
			</view>
		<!-- </scroll-view>	 -->
		<!-- 回复弹出窗 -->
		<view v-show="showPop" class="replypop">
			<view class="bg">
				<view class="pop-txt">{{i18n.index.reply}}</view>
				<input class="input" type="text" value="" @input="inputreply"/>
				<view class="publish" @click="puhlish()">{{i18n.index.publish}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import http from '../../toolClass/WYToolClass.js'
	import starV from '@/components/banxing/merbanStar.vue'
	export default {
		components: {
			starV
		},
		data() {
			return {
				selectIndex: 0,
				testUrl:'../../static/logo.png',
				refresherTriggered:0,
				showPop:false,
				replyTxt:'',
				replyID:'',
				firstPlatformID:'',
				defaultAvatar:''
			}
		},
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
			typeString:{
				type:[Number,String],
				default:0
			},
			listArr:{
				type:[Array],
				default:[]
			}
		},
		created() {
			var that = this
			var shopinfo = uni.getStorageSync('shopinfo')
			// console.log(shopinfo)
			this.firstPlatformID = shopinfo.top_type_id
			this.defaultAvatar = getApp().globalData.weburl + 'default.png'
		},
		methods: {
			tabbarClick(index){
				this.selectIndex = index
			},
			doOrderDetailes(item){
				console.log(item)
				uni.$emit('gotoDetail',item)
			},
			reply(item){
				this.showPop = true
				this.replyID = item.id
				
			},
			puhlish(){
				this.showPop = false
				if(this.replyTxt.length>0){
					var param = {'id':this.replyID,
								 'merchant_reply_content':this.replyTxt}
					var that = this
					this.http.sendRequest('MerchantStoreOrderEvaluate.ReplySave',param).then(function(data) {
						if(data.code == 0){
							that.showPop = false
							uni.$emit('refreshReply')
						}
					})
				}
				
			},
			inputreply(e){
				this.replyTxt = e.detail.value
			},
			showBigImage(index,pics){
				uni.previewImage({
					current: index,
					urls:pics,
				})
				
			},
			onChange(){
				
			},
			// scrolltolower() {
			// 	console.log('滚动到底部');
			// 	var that = this
			// 	that.page++
			// 	that.requestData()
			// },
			// refresherrefresh() {
			// 	var that = this
			// 	that.page = 1
			
			// 	that.refresherTriggered = true;
			// 	that.requestData()
			// 	console.log('自定义下拉刷新被触发');
			// 	setTimeout(() => {
			// 		that.refresherTriggered = false;
			// 	}, 1000);
			// },
			// requestData(){
				
			// }
		}
	}
</script>

<style>
	.orderdetail{
		margin-left: 15px;
		margin-right: 15px;
		height: 100px;
	}
	.order_top{
		width: 100%;
		height: 20px;
		margin-top: 10px;
		align-items: center;
	}
	.ordernum{
		flex: 1;
		margin-right: 15px;
	}
	.rightImg{
		margin-right: 20px;
		width: 20px;
		height: 20px;
	}
	.orderItem{
		display: inline-block;
	}
	.replypop{
		position: fixed;
		/* z-index: 999; */
		width: 100%;
		height: 100%;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.2);
		display: flex;
		justify-content: center;	
	}
	.bg{
		width:303px ;
		height: 185px;
		position: absolute;
		background-color: white;
		border-radius: 8px;
		display: flex;
		top:calc(50% - 92.5px);
		flex-direction: column;
	}
	.pop-txt{
		margin-top: 10px;
		height: 22px;
		font-size: 16px;
		font-weight: 500;
		text-align: center;
		color: #181818;
		line-height: 22px;
	}
	.publish{
		margin-top: 10px;
		height: 22px;
		font-size: 16px;
		font-weight: 400;
		text-align: center;
		color: #00c1de;
		line-height: 22px;
	}
	.input{
		margin-top: 10px;
		margin-left: 12px;
		margin-right: 12px;
		height: 97px;
		background: #f9f9f9;
		border-radius: 4px;
	}
	.tabbar_sel {
		height: 19px;
		border-radius: 2px;
		font-size: 10px;
		color: #FFF;
		padding-left: 5px;
		padding-right: 5px;
		background-color: #7900B2;
		margin-left: 12px;
		line-height: 19px;
		margin-top: 10.5px;
	}
	.tabbar_nor {
		height: 19px;
		border-radius: 2px;
		font-size: 10px;
		color: #7900B2;
		padding-left: 5px;
		padding-right: 5px;
		background-color: #ECEAF2;
		margin-left: 12px;
		line-height: 19px;
		margin-top: 10.5px;
	}
	.cellContentView {
		width: 100%;
		background-color: #FFFFFF;
		margin-bottom: 1px;
	}
	.iconImage {
		margin-left: 15px;
		margin-top: 20px;
		width: 40px;
		height: 40px;
		border-radius: 20px;
		/* background-color: #007AFF; */
	}
	.nameTimeView {
		margin-left: 8px;
		margin-top: 20px;
		height: 40px;
		flex: 1;
	}
	.userNickeName {
		height: 20px;
		line-height: 20px;
		font-size: 15px;
		color: #343434;
	}
	.textContent{
		margin-left: 15px;
		width: calc(100% - 30px);
		line-height: 20px;
		font-size: 14px;
		color: #181818;
	}
	.middle-Content{
		margin-left: 15px;
		width: calc(100% - 30px);
		display: flex;
		flex-wrap: wrap;
		position: relative;
		margin-top: 10px;
	}
	/* .middle-Content::after {
		content: "";
		position: absolute;
		width: 100%;
		bottom: 0;
		height: 1px;
		background-color: #F0F0F0;
	} */
	.picBackView {
		width: calc(33.3% - 3px); 
		border-radius: 8px;
		margin-bottom: 5px; 
		overflow: hidden;
		position: relative;
		/* height: 0;
		padding-bottom: calc(33.3% - 3px);
		background-color: #007AFF;
		background-size: calc(100%) calc(100%); */
		
	}
	.pic-image {
		width: 100%;
		height: 100%;
		padding-bottom: calc(100%);
	}
	.bottomView {
		height: 30px;
		margin-left: 15px;
		margin-right: 15px;
		align-items: center;
	}
	/* .image:last-child {
	    margin-right: auto;
	} */
	.picBackView:not(:nth-child(3n)) {
	    margin-right: 4.5px;
	}
	.reply{
		width: 64px;
		height: 30px;
		background: #ffffff;
		border: 1px solid #dedede;
		border-radius: 4px;
		font-size: 14px;
		font-weight: 400;
		text-align: center;
		color: #6f6f6f;
		line-height: 30px;
		position: absolute;
		right: 15px;
	}
	
</style>
