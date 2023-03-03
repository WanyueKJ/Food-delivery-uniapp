<template>
	<view v-if="storeMsg">
		<view class="topView">
			<swiper class="topThumb swiper" autoplay="true">
				<swiper-item style="width: 100%;height: 100%;" v-for="(item, index) in storeMsg.environment" :key="index">
					<image style="width: 100%;height: 100%;" :src="item" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
			<view class="topView-header">

			
				<!-- #ifndef MP-WEIXIN -->
				<view class="row"
					style="margin-left: 12px;width: calc(100% - 24px);height: 40px;padding-top: 48px;align-items: center;">
				<!-- #endif -->
				<!-- <view class="row"
					style="margin-left: 12px;width: calc(100% - 24px);height: 40px;padding-top: 48px;align-items: center;"> -->
					<image class="topView-header-image" src="../../../../static/back-left.png" mode="aspectFit"
						@click="doback()"></image>
					<view style="flex:1;">

					</view>
					<view class="topView-header-image" style="position: relative;" @click="doCart()"
						:style="'margin-right:' + weixinMenuWidth + 'px;'">
						<image style="width: 100%;height: 100%;" src="../../../static/images/cart-z.png"
							mode="aspectFit">
						</image>
						<view class="redNumsV" v-show="storeMsg.cart.count > 0">
							{{storeMsg.cart.count}}
						</view>
					</view>

				</view>
				<view @click="doSearch()" class="row"
					style="margin-left: 15px;height: 40px;border-radius: 8px;background-color: rgba(245,246,247,0.8);width: calc(100% - 30px);margin-top: 20px;align-items: center;">
					<image src="../../../../static/search.png" mode=""
						style="margin-left: 10px;width: 20px;height: 20px;"></image>
					<view class="">

					</view>
				</view>

			</view>


		</view>
		<scroll-view scroll-y="true" style="width: 100%;" :style="'height:' + scrollHeight + 'px;'">
			<view class="column" style="width: 100%;background-color: #FFF;">
				<view class="storeName">
					{{storeMsg.use_name}}
				</view>
				<view class="row" style="width: 100%;align-items: center;margin-bottom: 10px;margin-top: 5px;">
					<starV size=30 disabled=true :value="storeMsg.stars" style="margin-left: 15px;"></starV>
					<view style="font-size: 12px;">{{storeMsg.stars}}{{i18n.toher.fen}}</view>
					<view style="font-size: 12px;margin-left: 20px;">{{i18n.meishi.yuexiao}}{{storeMsg.monthly_sales}}
					</view>
				</view>
			</view>
			<view class="sectionView" style="border-bottom: 1px solid #D6DADE;">
				<view style="font-weight: bold;flex: 1;">
					{{i18n.market.shangjiaMsg}}
				</view>
				<view class="" style="color: #FF5725;font-size: 14px;" @click="doStoreMsg()">
					{{i18n.market.chakan}}
				</view>
			</view>
			<scroll-view scroll-x="true" class="scroll">
				<view v-for="(item,index) in store_type" :key="index" class="storeShowCell" @click="doAllGoods(item)">
					<view class="column" style="width: 100%;">
						<image :src="item.thumb" mode="aspectFill" class="img_thumb"
							:style="'height:' + shangjiaImgH + 'px;'"></image>
						<view class="goodsName oneline" style="margin-top: 6px;text-align: center;">
							{{item.use_name}}
						</view>
					</view>

				</view>
			</scroll-view>
			<view class="sectionView" style="margin-top: 10px;">
				<view style="font-weight: bold;flex: 1;">
					{{i18n.market.remenshangpin}}
				</view>
				<view class="" style="color: #FF5725;font-size: 14px;" @click="doAllGoods(0)">
					{{i18n.market.quanbushangpin}}
				</view>
			</view>
			<view class="hotGoodsBanck">
				<view v-for="(goods,index) in recommend_product" :key="index" class="goodsCell column"
					@click="gotocell(goods)">
					<view class="column" style="width: 100%;position: relative;">
						<image :src="goods.image" mode="aspectFill" class="img_thumb"
							:style="'height:' + thumbHeight + 'px;'"></image>
						<view class="sellAll" v-if="goods.repertory == 0">
							{{i18n.market.shoukong}}
						</view>
						<view class="" v-if="goods.repertory != 0 && storeMsg.operating_state == 1" >
							<view @click.stop="jiashuliang(goods,1)" class="anniu"
								style="background-color: #FF5725;color: #FFF;position: absolute;right: 4px;bottom: 4px;border-radius: 10px;"
								v-if="goods.cart_num > 0">
								{{goods.cart_num}}
							</view>
							<view @click.stop="jiashuliang(goods,1)" class="anniu"
								style="position: absolute;right: 4px;bottom: 4px;background-color: #FFF;border-radius: 10px;"
								v-if="goods.cart_num == 0">
								+
							</view>
							<view class="controlView" v-if="editId == goods.id">
								<view @click.stop="jiashuliang(goods,1)" class="anniu">
									+
								</view>

								<view class="anniu" style="width: 32px;">
									{{goods.cart_num}}
								</view>
								<view @click.stop="jianshuliang(goods,1)" class="anniu">
									-
								</view>
							</view>
						</view>

					</view>
					<view class="goodsName oneline" style="margin-top: 6px;font-size: 14px;font-weight: bold;">
						<text style="font-size: 10px;">¥</text> {{goods.use_price}}
					</view>
					<view class="goodsName oneline" style="margin-top: 6px;">
						{{goods.use_name}}
					</view>

				</view>
			</view>
			<view v-for="(item,index) in store_type_product" :key="index">
				<view class="sectionView" style="margin-top: 10px;">
					<view style="font-weight: bold;flex: 1;">
						{{item.use_name}}
					</view>
					<view class="" style="color: #FF5725;font-size: 14px;" @click="doAllGoods(item)">
						{{i18n.market.quanbushangpin}}
					</view>
				</view>
				<view class="hotGoodsBanck">
					<view v-for="(goods,index_G) in item.product" :key="index_G" class="goodsCell column"
						@click="gotocell(goods)">
						<view class="column" style="width: 100%;position: relative;">
							<image :src="goods.image" mode="aspectFill" class="img_thumb"
								:style="'height:' + thumbHeight + 'px;'"></image>
							<view class="sellAll" v-if="goods.repertory == 0">
								{{i18n.market.shoukong}}
							</view>
							<view class="" v-if="goods.repertory != 0 && storeMsg.operating_state == 1" >
								<view @click.stop="jiashuliang(goods,0)" class="anniu"
									style="background-color: #FF5725;color: #FFF;position: absolute;right: 4px;bottom: 4px;border-radius: 10px;"
									v-if="goods.cart_num > 0">
									{{goods.cart_num}}
								</view>
								<view @click.stop="jiashuliang(goods,0)" class="anniu"
									style="position: absolute;right: 4px;bottom: 4px;background-color: #FFF;border-radius: 10px;"
									v-if="goods.cart_num == 0">
									+
								</view>
								<view class="controlView" v-if="editId == goods.id">
									<view @click.stop="jiashuliang(goods,0)" class="anniu">
										+
									</view>

									<view class="anniu" style="width: 32px;">
										{{goods.cart_num}}
									</view>
									<view @click.stop="jianshuliang(goods,0)" class="anniu">
										-
									</view>
								</view>
							</view>

						</view>
						<view class="goodsName oneline" style="margin-top: 6px;font-size: 14px;font-weight: bold;">
							<text style="font-size: 10px;">¥</text> {{goods.use_price}}
						</view>
						<view class="goodsName oneline" style="margin-top: 6px;">
							{{goods.use_name}}
						</view>

					</view>
				</view>
			</view>
		</scroll-view>
		<view tyle="width: 100%;height: 70px;" v-if="storeMsg && storeMsg.operating_state == 1">
			<view class="row cart">
				<view class="numsLabel2">
					{{storeMsg.cart.count}}
				</view>
				<view style="font-size: 14px;flex: 1;text-align: center;" @click="doCart()">
					{{i18n.meishi.chakangouwuche}}
				</view>
				<view style="font-size: 12px;">
					¥
				</view>
				<view style="font-size: 16px;margin-right: 18px;margin-left: 3px;">
					{{storeMsg.cart.price}}
				</view>
			</view>
		</view>
		<view class="row" style="width: 100%;height: 70px;" v-else>
			<view class="xiuxila">
				本店休息啦
			</view>
		</view>

	</view>
</template>

<script>
	import starV from "@/components/banxing/banStar.vue"
	export default {
		components: {
			starV
		},
		data() {
			return {
				storeID: '',
				system_top: 24,
				weixinMenuWidth: 0,
				weixinMenutop: 0,
				weixinMenuheight: 0,
				scrollHeight: 0,
				timer: null,
				timeCount: 0,
				storeMsg: null,
				store_type: [],
				store_type_product: [],
				recommend_product: [],
				shangjiaImgH: 0,
				thumbHeight: 0,
				editId: '',
				type: 5
			}
		},
		onReady() {
			const res = uni.getSystemInfoSync();

			
			this.system_top = parseInt(res.safeArea.top)
			this.scrollHeight = res.windowHeight - 240
			this.shangjiaImgH = res.windowWidth * 0.2 - 5
			this.thumbHeight = res.windowWidth * 0.25 - 6
		},
		onLoad(option) {
			this.storeID = option.id
			this.type = option.type

		},
		onShow() {
			this.requestData()
			this.requestHomeData()
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		methods: {
			requestData() {
				var that = this

				that.http.sendRequest('Supermarket.GetStoreDetail', {
					'id': that.storeID
				}).then(function(res) {
					if (res.code == 0) {
						that.storeMsg = res.info[0]
					}
				})
			},
			requestHomeData() {
				var that = this

				that.http.sendRequest('Supermarket.StoreHome', {
					'id': that.storeID
				}).then(function(res) {
					if (res.code == 0) {
						var dic = res.info[0]
						// that.type = dic.type_id
						that.store_type = dic.store_type
						that.store_type_product = dic.store_type_product
						that.recommend_product = dic.recommend_product
					}
				})
			},
			doback() {
				uni.navigateBack()
			},
			doSearch() {
				uni.navigateTo({
					url: '../search/store?id=' + this.storeID
				})
			},
			doStoreMsg() {
				uni.navigateTo({
					url: 'storeMsg?msg=' + JSON.stringify(this.storeMsg)
				})
			},

			jiashuliang(item, hot) {
				this.editId = ''
				// this.timeCount = 5
				// item.cart_num = parseInt(item.cart_num) + 1
				// if (item.cart_num > item.repertory) {
				// 	item.cart_num = item.repertory
				// }
				this.changeCartNums(item, 1, hot)
			},
			jianshuliang(item, hot) {
				this.editId = ''
				// this.timeCount = 5
				// if (parseInt(item.cart_num) > 1) {
				// item.cart_num = parseInt(item.cart_num) - 1
				this.changeCartNums(item, -1, hot)
				// }
			},
			changeCartNums(item, num, hot) {
				if (!this.http.user().id || this.http.user().id == 0) {
					uni.navigateTo({
						url: '../../../../pages/login/login'
					})
					return
				}
				var that = this
				that.editId = item.id
				if (that.timer) {
					clearInterval(that.timer)
					that.timer = null
				}
				that.timeCount = 5
				that.timer = setInterval(() => {
					that.timeCount--
					if (that.timeCount == 0) {
						that.editId = ''
						clearInterval(that.timer)
						that.timer = null
					}
				}, 1000)
				that.http.sendRequest('MerchantStoreCart.Save', {
					'product_id': item.id,
					'cart_num': num,
					'product_attr_id': ''
				}).then(function(res) {
					if (res.code == 0) {
						var info = res.info[0]
						if (num == 1) {
							item.cart_num++
						} else {
							if (item.cart_num > 0) {
								item.cart_num--
							} else {
								item.cart_num = 0
							}
						}
						if (hot == 1) {
							that.changeother(item)
						}
						that.requestData()
						// that.storeMsg.cart.count = info.count
						// that.storeMsg.cart.price = info.price
						console.log(info)
					}
				})
			},
			changeother(item) {
				var that = this
				for (var i = 0; i < that.store_type_product.length; i++) {
					var product = that.store_type_product[i].product
					for (var j = 0; j < product.length; j++) {
						var goods = product[j]
						if (goods.id == item.id) {
							goods.cart_num = item.cart_num
						}
					}
				}
			},
			gotocell(goods) {
				console.log(goods)
				uni.navigateTo({
					url: '../goodsDetaile/index?id=' + goods.id + '&type=' + this.type
				})
			},
			doCart() {
				
				if (!this.http.user().id || this.http.user().id == 0) {
					uni.navigateTo({
						url: '../../../../pages/login/login'
					})
					return
				}
				if (this.storeMsg.cart.count > 0) {
					uni.navigateTo({
						url: '/package-meishi/pages/cart/index?type=meishi&store=' + JSON.stringify(this.storeMsg) + '&top_type=' + this.storeMsg.type_id
					})
				}

			},
			doAllGoods(item) {
				if (item == 0) {
					uni.navigateTo({
						url: '../classGoods/classGoods?id=0&name=' + this.i18n.market.remenshangpin + '&type=' +
							this.type + '&storeID=' + this.storeID + '&operating_state=' + this.storeMsg.operating_state
					
					})
				} else {
					uni.navigateTo({
						url: '../classGoods/classGoods?id=' + item.id + '&name=' + item.use_name + '&type=' + this
							.type + '&storeID=' + this.storeID + '&operating_state=' + this.storeMsg.operating_state
					
					})
				}
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

	.topView {
		margin-top: 0;
		width: 100%;
		background-color: #FFF;
		position: relative;

	}

	.topView-header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 170px;
		/* background-image: url(); */
		/* background-color: #F0d; */
	}

	.topThumb {
		width: 100%;
		height: 170px;
		/* background-color: #FF5725; */
		overflow: hidden;

	}

	.topView-header-image {
		width: 32px;
		height: 32px;
		background-color: #FFF;
		border-radius: 16px;
	}

	.redNumsV {
		min-width: 14px;
		height: 14px;
		border-radius: 7px;
		line-height: 14px;
		font-size: 11px;
		font-weight: bold;
		text-align: center;
		background-color: #FF4C4C;
		color: #FFF;
		position: absolute;
		right: 0;
		bottom: 0;
	}

	.storeName {
		margin-left: 15px;
		margin-top: 20px;
		width: calc(100% - 30px);
		line-height: 25px;
		color: #181818;
		font-size: 18px;
		font-weight: bold;
	}

	.sectionView {
		margin-left: 15px;
		width: calc(100% - 30px);
		height: 35px;
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 16px;
	}

	.scroll {
		margin-left: 15px;
		width: calc(100% - 30px);
		/* height: 110px; */
		white-space: nowrap;
		margin-top: 10px;
	}

	.storeShowCell {
		width: calc(20% - 5px);
		/* height: 100%; */
		/* flex-direction: column; */
		position: relative;
		display: inline-block;
		margin-right: 6px;
	}

	.img_thumb {
		width: 100%;
		/* height: 100%;
		padding-bottom: calc(100%); */
		border-radius: 4px;
	}

	.goodsName {
		font-size: 12px;
		width: 100%;
	}

	.hotGoodsBanck {
		margin-left: 15px;
		width: calc(100% - 30px);
		display: flex;
		margin-top: 10px;
	}

	.goodsCell {
		width: calc(25% - 6px);
		margin-right: 6px;
	}

	.sellAll {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		font-size: 13px;
		color: #FFF;
		line-height: 100%;
		text-align: center;
		justify-content: center;
		align-items: center;
		display: flex;
	}

	.controlView {
		position: absolute;
		left: 0;
		bottom: 4px;
		/* right: 4px;s */
		/* width: 100%; */
		height: 20px;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		background-color: #FFF;
		border-radius: 10px;
		width: 72px;
		left: calc(100% - 76px);
	}

	.anniu {
		width: 20px;
		height: 20px;
		text-align: center;
		line-height: 20px;
		font-size: 12px;
		font-weight: bold;
		color: #FF5725;
	}


	.cart {
		margin-top: 15px;
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
	.xiuxila {
		margin-top: 15px;
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

	.lineone {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
</style>
