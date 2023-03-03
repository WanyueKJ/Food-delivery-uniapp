<template>
	<view class="uni-mask" style="align-items: center;">
		<view class="whiteView">
			<view class="goodsName">
				{{goodsMsg.use_name}}

			</view>
			<image @click="doclose()" class="cartNunsBtn-gg" style="position: absolute;top: 15px;right: 15px;"
				src="../../../static/wy-close.png" mode=""></image>
			<!-- <view class="guige">
				{{i18n.order.guige}}:
			</view> -->
			<view class="column" style="width: 100%;" v-for="(item,index) in goodsMsg.attr" :key="index">
				<view class="guige">
					{{item.use_attr_name}}
				</view>
				<view class="row" style="width: 100%;margin-top: 6px;flex-wrap: wrap;margin-bottom: 20px;">
					<view v-for="(c,j) in item.children" :key="j"
						:class="Math.floor(item.index) == j ? 'classItem_sel row' : 'classItem row'" style="min-width: calc(33% - 45px);" @click="doClass(item,j)">
						{{c.use_attr_name}}
						<view v-if="index == 0" class="priceText">¥{{goodsMsg.use_price}}</view>
					</view>
				</view>
			</view>

			<view class=""
				style="padding-left: 15px;height: 32px;line-height: 32px;font-size: 11px;color: #6F6F6F;background-color: #f5f6f7;">
				{{i18n.order.yixuanguige}}<text style="color: #181818;">{{selectName}}</text>
			</view>
			<view class="row" style="width: 100%;height: 60px;align-items: center;">
				<view class="" style="font-size: 16px;font-weight: bold;color: #323232;flex: 1;">
					<text style="font-size: 12px;margin-left: 15px;">总计 ¥</text> {{curPrice}}
				</view>
				<view class="row" style="margin-right: 15px;align-items: center;" v-if="curCartNum > 0">
					<image @click.stop="delateCartNums()" src="../../../static/meishi/jian.png" mode=""
						class="cartNunsBtn-gg"></image>
					<view class="numsLabel-gg">
						{{curCartNum}}
					</view>
					<image @click.stop="addCartNums()" src="../../../static/meishi/jia.png" mode="" class="cartNunsBtn-gg"
						></image>
				</view>
				<view class="" style="margin-right: 15px;" v-else @click.stop="addCartNums()">
					<view class="classItem_sel" style="background-color: #FF5725;color: #FFF;font-size: 13px;">
						+ 加入购物车
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				curCartNum: -1,
				selectName: '',
				curPrice:'',
				curAttrJson:''
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		props: {
			goodsMsg: {
				type: Object,
				default: null
			}
		},
		created() {
			var that = this
			that.curPrice = that.goodsMsg.use_price
			for (let i = 0; i < that.goodsMsg.attr.length; i++) {
				var dic = that.goodsMsg.attr[i]
				dic.index = 0
			}
			that.dochangeselectName()
			
		},
		methods: {
			dochangeselectName() {
				var that = this
				var str = ''
				var list = []
				for (let i = 0; i < that.goodsMsg.attr.length; i++) {
					const att = that.goodsMsg.attr[i]
					for (let j = 0; j < that.goodsMsg.attr[i].children.length; j++) {
						var dic = that.goodsMsg.attr[i].children[j]
						if (att.index == j) {
							str = str + dic.use_attr_name + '、'
							list.push(dic.id)
						}
					}
				}
				that.selectName = str.slice(0,str.length-1);
				that.dogetcartCount(list)
				console.log(str)
			},
			dogetcartCount(list){
				var that = this
				that.curAttrJson = JSON.stringify(list)
				that.http.sendRequest('MerchantStoreCart.GetCount', {
					'product_id': that.goodsMsg.id,
					'product_attr_id':0,
					'more_product_attr_id':that.curAttrJson
				}).then(function(res) {
					if (res.code == 0) {
						that.curCartNum = res.info.count
						if(that.curCartNum > 0){
							that.curPrice = res.info.price
						}else{
							that.curPrice = that.goodsMsg.use_price
						}
						
					}
				})
			},
			doClass(item, index) {
				item.index = index
				this.dochangeselectName()
			},
			delateCartNums() {
				
				this.changeCartNums(-1)
				
			},
			addCartNums() {
				this.changeCartNums(1)
			},
			changeCartNums(count) {
				// #ifdef APP-PLUS
				plus.nativeUI.showWaiting()
				// #endif
				// #ifndef APP-PLUS
				uni.showLoading({
					title: ' '
				})
				// #endif
				var that = this
				that.http.sendRequest('MerchantStoreCart.Save', {
					'product_id': that.goodsMsg.id,
					'cart_num':count,
					'product_attr_id':0,
					'more_product_attr_id':that.curAttrJson
				}).then(function(res) {
					if (res.code == 0) {
						if(count == 1){
							that.curCartNum ++
						}else{
							that.curCartNum --
						}
						if(that.curCartNum > 0){
							that.curPrice = that.goodsMsg.use_price * that.curCartNum
						}else{
							that.curPrice = that.goodsMsg.use_price
						}
						console.log()
						
						that.$emit('changeCartNums', 1, count, that.goodsMsg.id)
						
					}
				})
			},
			doclose() {
				this.$emit('closeGuige')
			}

		}
	}
</script>

<style>
	.whiteView {
		width: 90%;
		border-radius: 12px;
		background-color: #FFF;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		position: relative;
	}

	.goodsName {
		/* width: 100%; */
		/* text-align: center; */
		font-size: 16px;
		font-weight: bold;
		line-height: 50px;
		height: 50px;
		/* align-items: center; */
		margin-left: 15px;
	}

	.guige {
		margin-left: 15px;
		margin-top: 10px;
		font-size: 12px;
		color: #969696;
	}

	.priceText {
		height: 30px;
		text-align: center;
		font-size: 12px;
		font-weight: bold;
		color: #FF5623;
		line-height: 30px;
		padding-left: 10px;
		border-left: 1px solid #FF5623;
		margin-left: 5px;
	}

	.classItem {
		margin-left: 15px;
		margin-bottom: 10px;
		height: 30px;
		border-radius: 6px;
		background-color: #FFF;
		text-align: center;
		font-size: 12px;
		font-weight: bold;
		color: #646464;
		line-height: 30px;
		padding-left: 10px;
		padding-right: 10px;
		border: 1px solid #D3D3D3;
	}

	.classItem_sel {
		margin-left: 15px;
		margin-bottom: 10px;
		height: 30px;
		border-radius: 6px;
		background-color: #FFF2EE;
		text-align: center;
		font-size: 12px;
		font-weight: bold;
		color: #FF5623;
		line-height: 30px;
		padding-left: 10px;
		padding-right: 10px;
		border: 1px solid #FF5623;
	}

	.cartNunsBtn-gg {
		width: 20px;
		height: 20px;
		border-radius: 10px;
	}

	.numsLabel-gg {
		color: #383838;
		font-size: 13px;
		margin-left: 10px;
		margin-right: 10px;
	}
</style>
