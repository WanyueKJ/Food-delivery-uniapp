<template>
	<view>
		<scroll-view scroll-y="true" style="width: 100%;" :style="'height:' + scrollHeigth + 'px;'">

			<view class="row" style="width: 100%;position: relative;" :style="'height:' + (windowWidth * 0.75) + 'px;'">
				<image style="width: 100%;height: 100%;" :src="goodsMsg.image" mode="aspectFill"></image>

				<!-- <swiper class="topThumb swiper" circular="false" indicator-dots="true" autoplay="true">
					<swiper-item style="width: 100%;height: 100%;" v-for="(item, index) in goodsMsg.banner"
						:key="item.id">
						<image style="width: 100%;height: 100%;" :src="item" mode="aspectFill"></image>
					</swiper-item>
				</swiper> -->
				
			</view>
			<view class="store_name" style="font-size: 24px;color: #FF5725;"><text style="font-size: 16px;">¥</text>{{curPrice}}
			</view>
			<!-- <view class="row"> -->
				<view class="store_name" style="width: calc(100% - 100px);flex: 1;">
					{{goodsMsg.use_name}}
				</view>
				
			<!-- </view> -->
			<view class="des">
				{{goodsMsg.des}}
			</view>

			<view
				style="margin-left: 15px;margin-top: 10px;width: calc(100% - 30px);height: 0.3px;background-color: #D6DADE;">

			</view>
			<view class="attr_title">
				规格
			</view>
			<view class="row attr_contentView" style="border-bottom: 0.3px solid #D6DADE;">
			
				<view @click="dochangeFirindex(index,item)" v-for="(item,index) in goodsMsg.attr" :key="index"
					:class="index == firIndex ? 'attr_sel' : 'attr_nor'">
					{{item.use_attr_name}}
				</view>
				
			</view>
			
			<view class="attr_title">
				属性
			</view>
			<view class="row attr_contentView">
				<view v-for="(item,index) in goodsMsg.attr[firIndex].children" :key="index" :class="index == secIndex ? 'attr_sel' : 'attr_nor'"
					@click="dochangeSecindex(index,item)">
					{{item.use_attr_name}}
				</view>
			</view>
			<view
				style="width: 100;height: 10px;background-color: #f5f6f7;margin-top: 5px;">
			
			</view>
			<!-- <view class="column" style="width: 100%;" v-if="goodsMsg.attr.length > 0">
				<view v-for="(item,index) in goodsMsg.attr[firIndex].children" :key="index" class="row itemCell"
					@click="dochangeSecindex(index,item)">
					<view style="font-size: 14px;font-weight: bold;flex: 1;width: calc(100% - 80px);"
						:style="secIndex == index ? 'color:#FF5725;' : 'color:#181818;'">
						{{item.use_attr_name}}
					</view>
					<view style="margin-right: 0;color: #FF5725;font-size: 14px;font-weight: bold;"
						v-if="secIndex == index">
						¥ {{item.use_price}}
					</view>
				</view>
			</view>
			<view
				style="margin-left: 15px;margin-top: 10px;width: calc(100% - 30px);height: 1px;background-color: #D6DADE;"
				v-if="goodsMsg.attr.length > 0">

			</view>
			<view class="row" style="width: 100%;flex-wrap: wrap;">

				<view @click="dochangeFirindex(index,item)" v-for="(item,index) in goodsMsg.attr" :key="index"
					class="typeCell"
					:style="firIndex == index ? 'color:#FF5725;border: 1px solid #FF5725;' : 'color:#6F6F6F;border: 1px solid #6F6F6F;'">
					{{item.use_attr_name}}
				</view>
			</view> -->


			<view class="row" style="width: 100%;height: 60px;">
				<view class="name" style="flex: 1;line-height:80px;margin-left: 15px;">
					{{i18n.meishi.pingjia}}
				</view>

				<view @click="doAllEva()" class="name"
					style="margin-right: 15px;line-height:80px;font-size: 14px;font-weight: 400;color: #6F6F6F;">
					{{i18n.meishi.quanbu + '(' + comNums + ')'}}
				</view>
			</view>
			<view class="row" style="width: calc(100% - 30px);margin-left: 15px;">
				<view v-for="(item,index) in tabbar" :key="index"
					:class="index == selectIndex ? 'tabbar_sel' : 'tabbar_nor'" @click="tabbarClick(index)">
					{{item}}
				</view>
			</view>
			<view class="" style="margin-left: 25%;margin-top: 50px;width: 50%;" v-if="listArray.length == 0">
				<image src="../../../../static/nothing.png" mode="widthFix" style="width: 100%;"></image>
				<view class="" style="text-align: center;width: 100%;font-size: 14px;color: #969696;">
					暂无评价
				</view>
			</view>
			<view class="cellContentView" v-else>
				<view v-for="(item,index) in listArray" :key="index" class="cellContentView" v-if="index < 3">
					<view class="row" style="width: 100%;height: 75px;">
						<image :src="item.user.avatar" mode="aspectFill" class="iconImage" v-if="item.is_anonymous != 1">
						</image>
						<image src="../../../../static/logo.png" mode="aspectFill" class="iconImage" v-else></image>
						<view class="nameTimeView column">
							<view class="userNickeName" v-if="item.is_anonymous != 1">
								{{item.user.user_nickname}}
							</view>
							<view class="userNickeName" v-else>
								{{i18n.yilou.nimingyonghu}}
							</view>
							<view v-if="item.tags == 1" class="" style="font-size: 12px;color: #6F6F6F;margin-left: 5px;">
								满意
							</view>
							<view v-if="item.tags == 0" class="" style="font-size: 12px;color: #6F6F6F;margin-left: 5px;">
								中等
							</view>
							<view v-if="item.tags == -1" class="" style="font-size: 12px;color: #6F6F6F;margin-left: 5px;">
								不满意
							</view>
						</view>
						<view class="userNickeName"
							style="color: #646464;font-size: 12px;margin-right: 15px;margin-top: 25px;">
							{{item.addtime}}
						</view>
				
					</view>
				
					<view class="textContent">
						{{item.comment}}
					</view>
					<view class="middle-Content"
						v-if="(item.video && item.video.url && item.pics.length == 0) || (!item.video.url && item.pics.length == 1)">
						<view class="picBackView" v-if="item.video && item.video.url" style="width: 66%;">
							<image :src="item.video.thumb" mode="aspectFill" class="pic-image"
								@click.stop="showBigVideo(item.video.url)"></image>
							<image @click.stop="showBigVideo(item.video.url)" src="../../../../static/eva-play.png"
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
							<image @click.stop="showBigVideo(item.video.url)" src="../../../../static/eva-play.png"
								style="position: absolute;right: 6px;top: 6px;width: 20px;height: 20px;" mode=""></image>
						</view>
						<view v-for="(url,index_i) in item.pics" :key="index_i" class="picBackView">
							<image :src="url" mode="aspectFill" class="pic-image"
								@click.stop="showBigImage(index_i,item.pics)"></image>
						</view>
				
					</view>
					<view class="textContent" style="font-size: 12px;background-color: #F5F6F7;border-radius: 4px;"
						v-if="item.reply.merchant_reply_content">
						<view style="color: #FF5725;margin-left: 8px;margin-top: 8px;">
							{{i18n.yilou.shangjiahuifu+'（' + item.reply.merchant_reply_time + '）'}}
						</view>
						<view style="color: #383838;margin-left: 8px;margin-top: 8px;padding-bottom: 8px;">
							{{item.reply.merchant_reply_content}}
						</view>
				
					</view>
					<view class="bottomView row">
				
				
					</view>
				</view>
				<view class="row"
					style="align-items: center;justify-content: center;width: 100%;background-color: #f5f6f7;height: 35px;"
					@click="doAllEva()" v-if="listArray.length > 0">
					<view class="">
						查看全部评价
					</view>
					<image src="../../../../static/static/assets/right.svg" mode="" style="width: 15px;height: 15px;">
					</image>
				</view>
			</view>
			<view class="" style="width: 100%;height: 50px;">
				
			</view>

		</scroll-view>
		<view class="row" style="width: 100%;height: 70px;align-items: center;" v-if="goodsMsg && goodsMsg.store.operating_state == 1">
			<view class="row" style="flex: 1;align-items: center;">
				<image @click="delateCartNums()" src="../../../../static/meishi/jian-s.png" v-if="goodsMsg.cart_num > 0"
					mode="" class="cartNunsBtn" style="">
				</image>
				<image src="../../../../static/meishi/jian.png" v-else mode="" class="cartNunsBtn">
				</image>
				<view class="numsLabel">
					{{goodsMsg.cart_num}}
				</view>
				<image @click="addCartNums()" src="../../../../static/meishi/jia.png" mode="" class="cartNunsBtn"
					style="margin-left: 0"></image>
			</view>
			<view class="cart" @click="addCartNums()">
				{{i18n.meishi.jiarugouwuche}}
			</view>
			<!-- <view class="row cart">
				<view class="numsLabel2">
					{{goodsMsg.cart_num}}
				</view>
				<view style="font-size: 14px;flex: 1;text-align: center;" @click="doCart()">
					{{i18n.meishi.chakangouwuche}}
				</view>
				<view style="font-size: 12px;">
					¥
				</view>
				<view style="font-size: 16px;margin-right: 18px;margin-left: 3px;">
					{{goodsMsg.use_price}}
				</view>
			</view> -->
			
		</view>
		
		
		
		<view class="row" style="width: 100%;height: 69.5px;" v-else>
			<view class="xiuxila">
				本店休息啦
			</view>
		</view>
		
		<image class="topView-header-image" src="../../../../static/back-left.png" mode="aspectFit"
			@click="doback()"></image>
	</view>
</template>

<script>
	import starV from '@/components/banxing/banStar.vue'

	export default {
		components: {
			starV
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				top: 44,
				scrollHeigth: 0,
				listArray: [],
				secIndex: 0,
				firIndex: 0,
				goodsMsg: null,
				curPrice: 0,
				comNums: 0,
				tabbar: [],
				selectIndex: 0,
				windowWidth:0
			}
		},
		onReady() {
			const res = uni.getSystemInfoSync();
			this.windowWidth = res.windowWidth
			if (parseInt(res.safeArea.top) > this.top) {
				this.top = parseInt(res.safeArea.top)
			}
			this.scrollHeigth = res.windowHeight - 70
		},
		onLoad(option) {
			this.goodsID = option.id
			this.requestData()
		},
		methods: {
			requestData() {
				var that = this
				that.http.sendRequest('Serve.GetProductDetail', {
					'id': that.goodsID
				}).then(function(res) {
					if (res.code == 0) {
						that.goodsMsg = res.info[0]
						that.curPrice = that.goodsMsg.price
						that.getevnums()
						that.requestEva()
					}
				})
			},
			getevnums() {
				var that = this
				that.http.sendRequest('MerchantStoreOrderEvaluate.GetProductNumber', {
					'store_id': that.goodsMsg.store.id,
					'product_id': that.goodsID
				}).then(function(res) {
					if (res.code == 0) {
						const dic = res.info[0]
						that.comNums = dic.all
						that.tabbar = ['全部 ' + dic.all, '满意 ' + dic.good, '中等 ' + dic.medium, '不满意 ' + dic.negative]

					}
				})
			},
			tabbarClick(index){
				this.selectIndex = index
				this.page = 1
				this.requestEva()
			},
			requestEva() {
				var that = this
				var type = '';
				if(that.selectIndex == 0){
					type = ''
				}else if(that.selectIndex == 1){
					type = 1
				}else if(that.selectIndex == 2){
					type = 0
				}else if(that.selectIndex == 3){
					type = -1
				}
				that.http.sendRequest('MerchantStoreOrderEvaluate.Index', {
					'type': type,
					'store_id': that.goodsMsg.store.id,
					'product_id': that.goodsID,
					'p': 1
				}).then(function(res) {
					// that.listArray = res.info
					if (res.code == 0) {
						that.listArray = res.info[0]
					}

				})
			},
			doback() {
				uni.navigateBack({

				})
			},
			doCart() {
				uni.navigateTo({
					url: '../../../../package-meishi/pages/cart/index?top_type=3&type=fuwu&store=' + JSON.stringify(this.goodsMsg.store)
				})
			},
			delateCartNums() {
				if (this.goodsMsg.cart_num > 0) {
					this.changeCartNums(-1)
				}
			},
			addCartNums() {
				this.changeCartNums(1)
			},
			changeCartNums(num) {
				if (!this.http.user().id || this.http.user().id == 0) {
					uni.navigateTo({
						url: '../../../../pages/login/login'
					})
					return
				}
				var that = this
				var product_attr_id = ''
				if (that.goodsMsg.attr.length > 0) {
					if (that.goodsMsg.attr[that.firIndex].children.length > 0) {
						product_attr_id = that.goodsMsg.attr[that.firIndex].children[that.secIndex].id
					} else {
						product_attr_id = that.goodsMsg.attr[that.firIndex].id
					}

				}
				that.http.sendRequest('MerchantStoreCart.Save', {
					'product_id': that.goodsMsg.id,
					'cart_num': num,
					'product_attr_id': product_attr_id
				}).then(function(res) {
					if (res.code == 0) {
						var info = res.info[0]
						if (num == 1) {
							that.goodsMsg.cart_num++
						} else {
							that.goodsMsg.cart_num--
						}
					}
				})
			},
			doAllEva() {
				uni.navigateTo({
					url: '../../../../package-meishi/pages/goodsDetails/allEva?storeType=3&id=' + this.goodsID +
						'&sid=' + this
						.goodsMsg.store.id
				})
			},
			dochangeFirindex(index, item) {
				this.firIndex = index
				this.secIndex = 0
				this.curPrice = this.goodsMsg.attr[this.firIndex].children[this.secIndex].use_price
			},
			dochangeSecindex(index, item) {
				this.secIndex = index
				this.curPrice = this.goodsMsg.attr[this.firIndex].children[this.secIndex].use_price
			},
			doLike(item, status) {
				if (!this.http.user().id || this.http.user().id == 0) {
					uni.navigateTo({
						url: '../../../../pages/login/login'
					})
					return
				}
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
			}
		}


	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #FFF;
	}

	.topView-header-image {
		position: absolute;
		left: 15px;
		top: 52px;
		width: 32px;
		height: 32px;
		background-color: #f5f6f7;
		border-radius: 16px;
	}

	.store_name {
		margin-left: 15px;
		margin-top: 15px;
		line-height: 25px;
		font-size: 18px;
		font-weight: bold;
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

	.textContent {
		margin-left: 15px;
		width: calc(100% - 30px);
		line-height: 20px;
		font-size: 14px;
		color: #181818;
	}

	.middle-Content {
		margin-left: 15px;
		width: calc(100% - 30px);
		display: flex;
		flex-wrap: wrap;
		position: relative;
		margin-top: 10px;
	}



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

	.cartNunsBtn {
		width: 25px;
		height: 25px;
		margin-left: 15px;
		/* margin-top: 17.5px; */
	}

	.numsLabel {
		color: #181818;
		font-size: 18px;
		font-weight: bold;
		margin-left: 10px;
		margin-right: 10px;
		/* margin-top: 17.5px; */
		height: 25px;
		line-height: 25px;
	}

	.cart {
		/* margin-top: 10px; */
		margin-right: 15px;
		margin-left: 30px;
		flex: 1;
		/* width: 120px; */
		background-color: #FF5725;
		border-radius: 8px;
		font-weight: bold;
		line-height: 40px;
		height: 40px;
		text-align: center;
		color: #FFF;
	}

	.xiuxila {
		margin-top: 10px;
		margin-left: 15px;
		width: calc(100% - 30px);
		background-color: #CCCCCC;
		border-radius: 8px;
		font-weight: bold;
		line-height: 40px;
		height: 40px;
		text-align: center;
		color: #FFF;
	}

	.des {
		color: #6F6F6F;
		font-size: 12px;
		margin-left: 15px;
		width: calc(100% - 30px);
		line-height: 15px;
	}

	.itemCell {
		margin-left: 15px;
		width: calc(100% - 30px);
		height: 50px;
		align-items: center;
	}

	.typeCell {
		margin-left: 15px;
		margin-top: 10px;
		padding-left: 15px;
		padding-right: 15px;
		height: 34px;
		line-height: 34px;
		font-size: 14px;
		font-weight: bold;
		border-radius: 17px;
	}

	.topThumb {
		width: 100%;
		height: 100%;
		/* background-color: #FF5725; */
		overflow: hidden;
	}

	.bottomView {
		margin-left: 15px;
		width: calc(100% - 30px);
		height: 20px;
		align-items: center;
		border-bottom: 1px solid #D6DADE;
	}

	.picBackView:not(:nth-child(3n)) {
		margin-right: 4.5px;
	}

	.tabbar_sel {
		height: 29px;
		border-radius: 4px;
		font-size: 12px;
		font-weight: bold;
		color: #FFF;
		padding-left: 10px;
		padding-right: 10px;
		background-color: #FF5725;
		margin-right: 8px;
		line-height: 29px;
		margin-top: 10.5px;
	}

	.tabbar_nor {
		height: 29px;
		border-radius: 4px;
		font-size: 12px;
		color: #646464;
		padding-left: 10px;
		padding-right: 10px;
		background-color: #FEF0E5;
		margin-right: 8px;
		line-height: 29px;
		margin-top: 10.5px;
	}

	.attr_sel {
		height: 29px;
		border-radius: 4px;
		font-size: 12px;
		font-weight: bold;
		color: #FF5725;
		padding-left: 10px;
		padding-right: 10px;
		background-color: #FFF;
		margin-right: 12px;
		line-height: 29px;
		margin-bottom: 10.5px;
		border: 1px solid #FF5725;
	}
	
	.attr_nor {
		height: 29px;
		border-radius: 4px;
		font-size: 12px;
		color: #646464;
		padding-left: 10px;
		padding-right: 10px;
		background-color: #F5F5F5;
		margin-right: 12px;
		line-height: 29px;
		margin-bottom: 10.5px;
	}
	.attr_title {
		margin-left: 15px;
		width: calc(100% - 30px);
		height: 40px;
		line-height:40px;
		font-size: 14px;
		font-weight: bold;
	}
	.attr_contentView {
		margin-left: 15px;
		width: calc(100% - 30px);
		flex-wrap: wrap;
		/* border-bottom: 0.3px solid #D6DADE; */
	}
	.buyview {
		width: 100%;
		height: 58px;
		border-bottom: 8px solid #f5f6f7;
		
	}
	.cart {
		/* margin-top: 15px; */
		margin-left: 15px;
		width: calc(100% - 30px);
		background-color: #FF5725;
		border-radius: 8px;
		font-weight: bold;
		line-height: 50px;
		height: 50px;
		align-items: center;
		color: #FFF;
	}
	.numsLabel2 {
		margin-left: 18px;
		font-size: 16px;
		width: 25px;
		height: 25px;
		border-radius: 12.5px;
		border: 1px solid #FFF;
		line-height: 25px;
		text-align: center;
	}
	
	.bottomView::after {
		content: "";
		position: absolute;
		left: 15px;
		width: calc(100% - 30px);
		bottom: 0;
		height: 1px;
		background-color: #F0F0F0;
	}
</style>
