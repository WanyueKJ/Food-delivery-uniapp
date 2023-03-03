<template>
	<view v-if="goodsMsg">
		<scroll-view scroll-y="true" style="width: 100%;display: flex;" :style="'height:' + scrollHeigth + 'px;'">
			<view class="" style="width: 100%;" :style="'height:' + windowwidth + 'px;'">
				<image :src="goodsMsg.image" mode="aspectFill" class="headerImage"></image>
			</view>
			<view class="column" style="width: 100%;">
				<view class="name" style="margin-top: 20px;">
					{{goodsMsg.use_name}}
				</view>
				<view class="name" style="line-height: 18px;font-size: 12px;color: #AAAAAA;">
					{{goodsMsg.des}}
				</view>
				<view class="row" style="width: 100%;margin-top: 10px;margin-bottom: 20px;align-items: center;">
					<view style="line-height: 18px;font-size: 12px;color: #AAAAAA;flex: 1;margin-left: 15px;">
						{{i18n.meishi.yuexiao + goodsMsg.monthly_sales}}
					</view>
					<view style="font-size: 12px;font-weight: bold;">
						¥
					</view>
					<view style="margin-right: 15px;font-size: 18px;font-weight: bold;">
						{{goodsMsg.price}}
					</view>
				</view>

			</view>
			<view style="margin-left: 15px;width: calc(100% - 30px);background-color: #D6DADE;height: 0.5px;">

			</view>

			<view class="row" style="width: 100%;height: 60px;">
				<view class="name" style="flex: 1;line-height:80px;width: auto;">
					{{i18n.meishi.pingjia}}
				</view>

				<view @click="doAllEva()" class="name"
					style="margin-right: 15px;line-height:80px;font-size: 14px;font-weight: 400;color: #6F6F6F;width: auto;">
					{{i18n.meishi.quanbu}}({{comNums}})
				</view>
			</view>
			<view class="row" style="width: calc(100% - 30px);margin-left: 15px;">
				<view v-for="(item,index) in tabbar" :key="index" :class="index == selectIndex ? 'tabbar_sel' : 'tabbar_nor'" @click="tabbarClick(index)">
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
				<view v-for="(item,index) in listArray" :key="index" class="cellContentView"
					@click="doDetailes(item,index)" v-if="index < 3">
					<view class="row" style="width: 100%;height: 75px;align-items: center;">
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
				
							<view v-if="item.tags == 1" class="" style="font-size: 12px;color: #6F6F6F;">
									好评
							</view>
								<view v-if="item.tags == 0" class="" style="font-size: 12px;color: #6F6F6F;">
									中评
							</view>
								<view v-if="item.tags == -1" class="" style="font-size: 12px;color: #6F6F6F;">
									差评
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
					<view class="middle-Content" v-if="(item.video && item.video.url && item.pics.length == 0) || (!item.video.url && item.pics.length == 1)">
						<view class="picBackView" v-if="item.video && item.video.url" style="width: 66%;">
							<image :src="item.video.thumb" mode="aspectFill" class="pic-image"
								@click.stop="showBigVideo(item.video.url)"></image>
							<image @click.stop="showBigVideo(item.video.url)" src="../../../../static/eva-play.png" style="position: absolute;right: 7px;top: 7px;width: 20px;height: 20px;" mode=""></image>	
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
							<image @click.stop="showBigVideo(item.video.url)" src="../../../../static/eva-play.png" style="position: absolute;right: 6px;top: 6px;width: 20px;height: 20px;" mode=""></image>
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
						<!-- <view style="flex: 1;"></view>
						<view class="row" style="margin-right: 15px;align-items: center;" v-if="item.is_like == 1"
							@click.stop="doLike(item,0)">
							<image src="../../../../static/meishi/zan-sel.png" mode="" style="width: 20px;height: 20px;">
							</image>
							<view style="color: #FF5725;margin-left: 5px;font-size: 14px;font-weight: bold;">
								{{item.like}}
							</view>
						</view>
						<view class="row" style="margin-right: 15px;align-items: center;" v-else
							@click.stop="doLike(item,1)">
							<image src="../../../../static/meishi/zan-nor.png" mode="" style="width: 20px;height: 20px;">
							</image>
							<view style="color: #666666;margin-left: 5px;font-size: 14px;font-weight: bold;">
								{{item.like}}
							</view>
						</view> -->
				
					</view>
				
				</view>
				<view class="row" style="align-items: center;justify-content: center;width: 100%;background-color: #f5f6f7;height: 35px;" @click="doAllEva()" v-if="listArray.length > 0">
					<view class="">
						查看全部评价
					</view>
					<image src="../../../../static/static/assets/right.svg" mode="" style="width: 15px;height: 15px;"></image>
				</view>
			</view>
			
		</scroll-view>
		<view style="width: 100%;background-color: #D6DADE;height: 0.5px;">

		</view>
		<view class="row" style="width: 100%;height: 69.5px;" v-if="goodsMsg.store.operating_state == 0">
			<view class="shoukong"> 本店休息啦
			</view>
		</view>
		<view class="row" style="width: 100%;height: 69.5px;"
			v-if="goodsMsg.repertory == 0 && goodsMsg.store.operating_state == 1">
			<view class="shoukong">
				{{i18n.market.shoukong}}
			</view>

		</view>
		<view class="row" style="width: 100%;height: 69.5px;"
			v-if="goodsMsg.repertory != 0 && goodsMsg.store.operating_state == 1">
			<view class="row" style="flex: 1;">
				<image @click="delateCartNums()" src="../../../../static/meishi/jian.png" mode="" class="cartNunsBtn">
				</image>
				<view class="numsLabel">
					{{nums}}
				</view>
				<image @click="addCartNums()" src="../../../../static/meishi/jia.png" mode="" class="cartNunsBtn"
					style="margin-left: 0"></image>
			</view>
			<view class="cart" @click="addCartNums()">
				{{i18n.meishi.jiarugouwuche}}
			</view>
		</view>
		<image src="../../../../static/back-yuan.png" mode="" class="back-image" :style="'top:' + (top+4) + 'px;'"
			@click="doback()"></image>
		<image src="../../../static/images/cart-z.png" mode="" class="cartImage" style="right: 15px;"
			:style="'top:' + (top+4) + 'px;'" @click="doCart()" v-if="goodsMsg.store.operating_state == 1"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				top: 44,
				scrollHeigth: 0,
				selArray: [],
				listArray: [],
				nums: 1,
				goodsMsg: null,
				comNums: 0,
				windowwidth: 0,
				tabbar:[],
				selectIndex:0,
				// storeMsg:''
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		onReady() {
			const res = uni.getSystemInfoSync();
			if (parseInt(res.safeArea.top) > this.top) {
				this.top = parseInt(res.safeArea.top)
			}
			this.scrollHeigth = res.windowHeight - 70
			this.windowwidth = res.windowWidth
		},
		onLoad(option) {
			this.goodsID = option.id
			// this.storeMsg = option.store
			this.requestData()
		},
		methods: {
			requestData() {
				var that = this
				that.http.sendRequest('Supermarket.GetProductDetail', {
					'id': that.goodsID
				}).then(function(res) {
					if (res.code == 0) {
						that.goodsMsg = res.info[0]
						console.log(that.goodsMsg)
						that.nums = that.goodsMsg.cart_num
						that.requestEva()
						that.getevnums()
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
						that.tabbar = ['全部 ' + dic.all,'好评 ' + dic.good,'中评 ' + dic.medium,'差评 ' + dic.negative,'有图 ' + dic.figure]
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
				}else{
					type = 101
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
			doAddSelected(item, index) {
				if (this.selArray.indexOf(item.id) != -1) {
					this.selArray.splice(item.id)
				} else {
					this.selArray.push(item.id)
				}
			},
			doAllEva() {
				uni.navigateTo({
					url: '/package-meishi/pages/goodsDetails/allEva?storeType=5&id=' + this.goodsID + '&sid=' + this.goodsMsg
						.store.id
				})
			},
			doCart() {
				if (!this.http.user().id || this.http.user().id == 0) {
					uni.navigateTo({
						url: '../../../../pages/login/login'
					})
					return
				}
				var that = this
				that.http.sendRequest('MerchantStoreCart.Index', {
					'store_id': that.goodsMsg.store.id
				}).then(function(res) {
					if (res.code == 0) {
						const info = res.info[0]
						if (info.length > 0) {
							uni.navigateTo({
								url: '/package-meishi/pages/cart/index?type=meishi&store=' + JSON
									.stringify(that.goodsMsg.store) + '&top_type=' + that.goodsMsg.store.top_type_id
							})
						}
					}
				})

			},
			delateCartNums() {
				if (this.nums > 0) {
					this.nums--
					this.changeCartNums(-1)
				}
			},
			addCartNums() {
				this.nums++
				this.changeCartNums(1)
			},
			changeCartNums(nm) {
				if (!this.http.user().id || this.http.user().id == 0) {
					uni.navigateTo({
						url: '../../../../pages/login/login'
					})
					return
				}
				var that = this
				that.http.sendRequest('MerchantStoreCart.Save', {
					'product_id': that.goodsMsg.id,
					'cart_num': nm,
					'product_attr_id': JSON.stringify(that.selArray)
				}).then(function(res) {
					if (res.code == 0) {}
				})
			},
			showBigImage(index, list) {
				uni.previewImage({
					current: index,
					urls: list,
				})
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
	@import url(index.css);

	page {
		width: 100%;
		height: 100%;
		background-color: #FFF;
	}

	.headerImage {
		width: 100%;
		height: 100%;
		/* background-color: #f09; */
	}

	.back-image {
		left: 15px;
		width: 32px;
		height: 32px;
		position: absolute;

	}

	.cartImage {
		right: 15px;
		background: #FFF;
		border-radius: 16px;
		width: 32px;
		height: 32px;
		position: absolute;
	}

	.name {
		margin-left: 15px;
		line-height: 25px;
		font-weight: bold;
		font-size: 18px;
		width: calc(100% - 30px);
	}

	.cartNunsBtn {
		width: 25px;
		height: 25px;
		margin-left: 15px;
		margin-top: 17.5px;
	}

	.numsLabel {
		color: #181818;
		font-size: 18px;
		font-weight: bold;
		margin-left: 10px;
		margin-right: 10px;
		margin-top: 17.5px;
		height: 25px;
		line-height: 25px;
	}

	.cart {
		margin-top: 10px;
		margin-right: 15px;
		width: 120px;
		background-color: #FF5725;
		border-radius: 8px;
		font-weight: bold;
		line-height: 40px;
		height: 40px;
		text-align: center;
		color: #FFF;
	}

	.shoukong {
		margin-top: 10px;
		margin-left: 15px;
		width: calc(100% - 30px);
		background-color: #D8D8D8;
		border-radius: 8px;
		font-weight: bold;
		line-height: 40px;
		height: 40px;
		text-align: center;
		color: #FFF;
		font-size: 14px;
		font-weight: bold;
	}
</style>
