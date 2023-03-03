<template>
	<view>
		<view :style="'height:' + height + 'px;'" style="width: 100%;background-color: #f5f6f7;" class="column">
			<!-- @refresherrefresh="refresherrefresh" :refresher-threshold="45" :refresher-enabled="true" -->
			<image :src="storeMsg.banner[0]" mode="aspectFill" class="topImageView" v-if="storeMsg.banner.length > 0">
			</image>
			<view class="row" style="width: 100%;" :style="'height:' + (height-85) + 'px;'">
				<scroll-view scroll-y="true" style="width: 80px;height: 100%;">
					<view @click="leftBtnClick(index)" v-for="(item,index) in timeArray" :key="index"
						:class="index == selectIndex ? 'left_Sel' : 'left_nor'">
						{{item.use_name}}
					</view>
				</scroll-view>
				<scroll-view id="shangpin" scroll-y="true" style="width: calc(100% - 80px);height: 100%;"
					:scroll-into-view="toView" @scroll="scrollChange">

					<view v-for="(item,index) in timeArray" :key="index" style="width: 100%;" :id="'header' + index">
						<view class="left_nor" style="color: #383838;width: auto;margin-left: 15px;text-align: left;">
							{{item.use_name}}
						</view>
						<view v-for="(obj,j) in item.list" :key="j" class="cell row" @click="gotocell(obj)">
							<image :src="obj.image" mode="" class="cell_thumb"></image>
							<view class="column" style="width: calc(100% - 100px);">
								<view class="nameLbale oneline">
									{{obj.use_name}}
								</view>
								<view style="display: flex;" v-if="obj.evaluate.length > 0">
									<view class="goods_label oneline">
										{{obj.evaluate}}
									</view>
								</view>
								<view class="" style="height: 20px;" v-else>
									
								</view>
								<view class="row store_label">
									<image src="../../../static/meishi/yuexiao.png" mode=""></image>
									<text style="margin-right: 5px;">{{i18n.meishi.yuexiao}} {{obj.month_sales}}</text>
									<image src="../../../static/meishi/zan-nor.png" mode=""></image>
									<text>{{i18n.meishi.haoping}} {{obj.starts_rate}}</text>
								</view>
								<view class="row" style="align-items: center;position: relative;">
									<view class="nameLbale" style="align-items: center;flex: 1;">
										<text style="font-size: 10px;">¥ </text> {{obj.use_price}}
									</view>
									<view class="row" v-if="storeMsg.operating_state == 1">
										<block v-if="obj.attr.length == 0">
											<image @click.stop="delateCartNums(obj)"
												src="../../../static/meishi/jian.png" mode="" class="cartNunsBtn"
												style="background-color: #6F6F6F;" v-if="obj.cart_num>0"></image>
											<view class="numsLabel" v-if="obj.cart_num>0"> {{obj.cart_num}} </view>
											<image @click.stop="addCartNums(obj)" src="../../../static/meishi/jia.png"
												mode="" class="cartNunsBtn"
												style="background-color: #7900B2;margin-right: 5px;"></image>
										</block>
										<block v-else>
											<view @click.stop="doxuanguige(obj)" class="xuanguige" style="">
												{{i18n.yilou.xuanguige}}
											</view>
										</block>
									</view>
									
								</view>
								<view class="guigeNums" v-if="obj.cart_num>0 && obj.attr.length > 0">
									{{obj.cart_num}}
								</view>
							</view>

						</view>
					</view>

				</scroll-view>
			</view>
			<!-- <view style="width: 100%;height: 80px;">
				<view class="row cart">
					<view class="numsLabel2">
						{{nums}}
					</view>
					<view style="font-size: 14px;flex: 1;text-align: center;" @click="doCart()">
						{{i18n.meishi.chakangouwuche}}
					</view>
					<view style="font-size: 12px;">
						¥
					</view>
					<view style="font-size: 16px;margin-right: 18px;margin-left: 3px;">
						{{allPrice}}
					</view>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				windowHeight: 0,
				selectIndex: 0,
				timeArray: [],
				titleStr: '',
				nums: 0,
				allPrice: 0,
				toView: '',
				heightArray: [],
				detaileItem: null
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
			storeMsg: {
				type: Object,
				default: null
			}
		},
		created() {
			var that = this
			that.nums = that.storeMsg.cart.count
			that.allPrice = that.storeMsg.cart.price
			console.log(that.storeMsg)
			that.requestData()
			uni.$on('meishicartchange', function(pid, num) {
				console.log(pid, num)
				that.gerstoremsg()
				that.requestData()
				// if(that.detaileItem){
				// 	that.detaileItem.cart_num = num
				// 	for (let i = 0; i < that.detaileItem.attr.length; i++) {
				// 		if(pid == that.detaileItem.attr[i].id){
				// 			that.detaileItem.attr[i].cart_num = num
				// 		}
				// 	}
				// }

			})
		},
		methods: {

			gerstoremsg() {
				this.$emit('gerstoremsg')
				// var that = this
				// that.http.sendRequest('FineFood.GetStoreDetail', {
				// 	'id': that.storeMsg.id
				// }).then(function(res) {
				// 	if (res.code == 0) {
				// 		var dic = res.info[0]
				// 		that.nums = dic.cart.count
				// 		that.allPrice = dic.cart.price
				// 	}
				// })
			},
			requestData() {
				var that = this
				that.http.sendRequest('FineFood.GetClassOfFood', {
					'id': that.storeMsg.id
				}).then(function(res) {
					if (res.code == 0) {
						that.timeArray = res.info[0]
						console.log(that.timeArray)
						setTimeout(function() {
							that.getSectionHeight()
						}, 10);

					}
				})
			},
			delateCartNums(item) {
				if (item.cart_num > 0) {
					// item.cart_num--
					this.clickGoods = item
					this.changeCartNums({
						'id': ''
					}, -1, item.id)
				}

			},
			addCartNums(item) {
				this.clickGoods = item
				this.changeCartNums({
					'id': ''
				}, 1, item.id)
			},
			changeCartNums(item, num, pid) {
				if (!this.http.user().id || this.http.user().id == 0) {
					
					uni.navigateTo({
						url: '../../../pages/login/login'
					})
					
					return
				}
				console.log(item)
				var that = this
				
				if(item == 1){
					that.requestData()
					that.gerstoremsg()
					return
				}

				that.http.sendRequest('MerchantStoreCart.Save', {
					'product_id': pid,
					'cart_num': num,
					// 'product_attr_id': item.id,
					// 'more_product_attr_id':''
				}).then(function(res) {
					if (res.code == 0) {
						// var info = res.info[0]
						// if (num == 1) {
						// 	that.clickGoods.cart_num++
						// } else {
						// 	that.clickGoods.cart_num--
						// }
						// that.nums = info.count
						// that.allPrice = info.price
						that.requestData()
						that.gerstoremsg()
					}
				})
			},
			doxuanguige(obj) {
				if (!this.http.user().id || this.http.user().id == 0) {
					
					uni.navigateTo({
						url: '../../../pages/login/login'
					})
					
					return
				}
				this.clickGoods = obj
				this.$emit('showGuigeView', obj)
			},
			leftBtnClick(index) {
				this.selectIndex = index
				const sid = 'header' + index;
				this.toView = sid
				console.log(sid)
			},
			getSectionHeight() {
				var that = this
				that.heightArray = []
				var hh = 0;
				for (let i = 0; i < that.timeArray.length; i++) {
					var item = that.timeArray[i]
					hh = hh + (50 + 112 * item.list.length);
					that.heightArray.push(hh)
				}
				console.log(that.heightArray)
			},
			scrollChange(event) {
				console.log(event.detail.scrollTop)
				for (let i = 0; i < this.heightArray.length; i++) {
					if (this.heightArray[i] > event.detail.scrollTop) {
						this.selectIndex = i
						break
					}
				}
			},
			gotocell(obj) {
				this.detaileItem = obj
				uni.navigateTo({
					url: '../../pages/goodsDetails/index?id=' + obj.id
				})
			},
			doCart() {
				if (!this.http.user().id || this.http.user().id == 0) {
					
					uni.navigateTo({
						url: '../../../pages/login/login'
					})
					
					return
				}
				if (this.nums > 0) {
					uni.navigateTo({
						url: '../../pages/cart/index?top_type=1&type=meishi&store=' + JSON.stringify(this.storeMsg)
					})
				}

			}

		}
	}
</script>

<style>
	.topImageView {
		margin-left: 15px;
		margin-top: 10px;
		width: calc(100% - 30px);
		border-radius: 4px;
		height: 90px;
		overflow: hidden;
		background-color: #FF5725;
	}

	.left_Sel {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 12px;
		font-weight: bold;
		color: #181818;
		background-color: #FFF;
	}

	.left_nor {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 12px;
		color: #6F6F6F;
		background-color: #F5F6F7;
	}

	.cell {
		width: 100%;
		height: 100px;
		margin-bottom: 12px;
		position: relative;
	}

	.cell_thumb {
		/* background-color: #06f; */
		margin-left: 15px;
		width: 76px;
		height: 76px;
		border-radius: 4px;

	}

	.nameLbale {
		margin-left: 8px;
		height: 20px;
		color: #181818;
		font-size: 14px;
		font-weight: bold;
		line-height: 20px;
	}

	.goods_label {
		margin-left: 8px;
		height: 20px;
		border-radius: 2px;
		padding-left: 5px;
		padding-right: 5px;
		color: #FFF;
		background-color: #FEF0E5;
		color: #FF5725;
		font-size: 10px;
		font-weight: bold;
		line-height: 20px;
		margin-top: 4px;
		margin-right: 10px;
		width: auto;
	}

	.store_label {
		margin-left: 8px;
		margin-top: 4px;
		line-height: 15px;
		font-size: 11px;
		color: #6F6F6F;
		width: calc(100% - 15px);
		align-items: center;
	}

	.store_label image {
		width: 10px;
		height: 10px;
		margin-right: 2px;
	}

	.cartNunsBtn {
		width: 20px;
		height: 20px;
		border-radius: 10px;
	}

	.numsLabel {
		color: #383838;
		font-size: 13px;
		margin-left: 10px;
		margin-right: 10px;
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

	.xuanguige {
		background-color: #FF5725;
		margin-right: 5px;
		width: auto;
		padding-left: 5px;
		padding-right: 5px;
		border-radius: 4px;
		height: 20px;
		color: #FFF;
		font-size: 12px;
		line-height: 20px;
	}

	.guigeNums {
		position: absolute;
		bottom: 30px;
		right: 5px;
		min-width: 15px;
		height: 15px;
		background-color: #CCC;
		text-align: center;
		color: #FFF;
		font-size: 10px;
		line-height: 15px;
		border-radius: 7.5px;
	}
</style>
