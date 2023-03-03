<template>
	<view v-if="goodsMsg">
		<scroll-view scroll-y="true" style="width: 100%;display: flex;" :style="'height:' + scrollHeigth + 'px;'">
			<view class="" style="width: 100%;" :style="'height:' + windowwidth + 'px;'">
				<image :src="goodsMsg.image" mode="aspectFill" class="headerImage"></image>
			</view>
			<view class="column" style="width: 100%;">
				<view class="name">
					{{goodsMsg.use_name}}
				</view>
				<view class="" style="display: flex;">
					<view class="mainGuige" v-if="goodsMsg.attr && goodsMsg.attr.length > 0">
						{{goodsMsg.attr[0].children[0].use_attr_name}}
					</view>
				</view>
				<view class="yuexiao">
					月销{{goodsMsg.monthly_sales}}
				</view>
				<view class="row" style="width: 100%;">
					<view class="price" style="flex: 1;">
						<text style="font-size: 16px;">¥</text>
						{{goodsMsg.price}}
					</view>
					<view @click.stop="doxuanguige(obj)" class="xuanguige" style="" v-if="goodsMsg.attr.length > 0">
						{{i18n.yilou.xuanguige}}
					</view>
				</view>


			</view>
			<view style="margin-left: 15px;width: calc(100% - 30px);background-color: #D6DADE;height: 0.5px;">

			</view>
			<!-- <view class="column" style="width: 100%;margin-top: 10px;margin-bottom: 10px;">
				<view @click="doAddSelected(item,index)" v-for="(item,index) in goodsMsg.attr" :key="index" class="row"
					style="margin-left: 15px;width: calc(100% - 30px);height: 32px;align-items: center;">
					<image src="../../../static/item-sel.png" v-if="attr_index == index" mode=""
						style="width: 18px;height: 18px;"></image>
					<image src="../../../static/item-nor.png" v-else mode="" style="width: 18px;height: 18px;"></image>
					<view class="name oneline" style="flex: 1;font-size: 14px;">
						{{item.use_attr_name}}
					</view>
					<view class="name" style="font-size: 10px;">
						¥
					</view>
					<view class="name" style="margin-right: 15px;font-size: 14px;">
						{{item.use_price}}
					</view>
				</view>
			</view> -->
			<!-- <view style="margin-left: 15px;width: calc(100% - 30px);background-color: #D6DADE;height: 0.5px;">

			</view> -->
			<view class="row" style="width: 100%;height: 60px;">
				<view class="" style="flex: 1;line-height:80px;font-size: 16px;font-weight: bold;margin-left: 15px;">
					{{i18n.meishi.pingjia}}
				</view>

				<view @click="doAllEva()" class=""
					style="margin-right: 15px;line-height:80px;font-size: 14px;font-weight: 400;color: #6F6F6F;">
					{{i18n.meishi.quanbu}}({{comNums}})
				</view>
			</view>
			<view class="row" style="width: calc(100% - 30px);margin-left: 15px;flex-wrap: wrap;margin-bottom: 10px;">
				<view v-for="(item,index) in tabbar" :key="index" class="row"
					:class="index == selectIndex ? (selectIndex == 3 ? 'tabbar_sel_cai' : 'tabbar_sel') : (index == 3 ? 'tabbar_nor_cai' : 'tabbar_nor')"
					@click="tabbarClick(index)">
					<image src="../../../static/meishi/zan-sel.png" style="width: 14px;height: 14px;margin-right: 3px;"
						v-if="index == 2" mode=""></image>
					<image src="../../static/images/cai-nor.png" style="width: 14px;height: 14px;margin-right: 3px;"
						v-if="index == 3" mode=""></image>
					{{item}}
				</view>
			</view>
			
			<view v-for="(item,index) in listArray" :key="index" class="cellContentView" v-if="index < 3">
				<view class="row" style="width: 100%;height: 75px;align-items: center;">
					<image :src="item.user.avatar" mode="aspectFill" class="iconImage" v-if="item.is_anonymous != 1">
					</image>
					<image src="../../../static/logo.png" mode="aspectFill" class="iconImage" v-else></image>
					<view class="nameTimeView column">
						<view class="userNickeName" v-if="item.is_anonymous != 1">
							{{item.user.user_nickname}}
						</view>
						<view class="userNickeName" v-else>
							{{i18n.yilou.nimingyonghu}}
						</view>
						<view class="row" style="align-items: center;" v-if="item.tags == 1">
							<image src="../../../static/meishi/zan-sel.png" style="width: 14px;height: 14px;" mode="">
							</image>
							<view class="" style="font-size: 12px;color: #6F6F6F;margin-left: 5px;">
								赞了该商品
							</view>
						</view>
						<view class="row" style="align-items: center;" v-else>
							<image src="../../static/images/cai-nor.png" style="width: 14px;height: 14px;" mode="">
							</image>
							<view class="" style="font-size: 12px;color: #6F6F6F;margin-left: 5px;">
								踩了该商品
							</view>
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
					v-if="(item.video && item.video.url && item.pics.length == 0) || ((!item.video || !item.video.url) && item.pics.length == 1)">
					<view class="picBackView" v-if="item.video && item.video.length > 0" style="width: 66%;">
						<image :src="item.video.thumb" mode="aspectFill" class="pic-image"
							@click.stop="showBigVideo(item.video.url)"></image>
						<image src="../../../static/eva-play.png" @click.stop="showBigVideo(item.video.url)"
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
						<image src="../../../static/eva-play.png" @click.stop="showBigVideo(item.video.url)"
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
			<view class="" style="margin-left: 25%;margin-top: 50px;width: 50%;" v-if="listArray.length == 0">
				<image src="../../../static/nothing.png" mode="widthFix" style="width: 100%;"></image>
				<view class="" style="text-align: center;width: 100%;font-size: 14px;color: #969696;">
					暂无评价
				</view>
			</view>
			<view class="row"
				style="align-items: center;justify-content: center;width: 100%;background-color: #f5f6f7;height: 35px;"
				@click="doAllEva()" v-else>
				<view class="">
					查看全部评价
				</view>
				<image src="../../../static/static/assets/right.svg" mode="" style="width: 15px;height: 15px;">
				</image>
			</view>
			<view class="" style="width: 100%;height: 50px;">
				
			</view>
		</scroll-view>
		<view style="width: 100%;background-color: #D6DADE;height: 0.5px;">

		</view>
		<view class="row" style="width: 100%;height: 69.5px;">
			<view class="row" style="flex: 1;">
				<image @click="delateCartNums()" src="../../../static/meishi/jian.png" mode="" class="cartNunsBtn">
				</image>
				<view class="numsLabel">
					{{nums}}
				</view>
				<image @click="addCartNums()" src="../../../static/meishi/jia.png" mode="" class="cartNunsBtn"
					style="margin-left: 0"></image>
			</view>
			<view class="cart" @click="doCart()">
				{{i18n.meishi.jiarugouwuche}}
			</view>
		</view>
		<image src="../../../static/back-yuan.png" mode="" class="back-image" :style="'top:' + (top+4) + 'px;'"
			@click="doback()"></image>
		<guigeV v-if="isShowGuige" :goodsMsg="goodsMsg" @changeCartNums="changeCartNumsForguige" @closeGuige="closeGuige">
		</guigeV>
	</view>
</template>

<script>
	import guigeV from "@/package-meishi/components/guige/index.vue"
	
	export default {
		components: {
			guigeV
		},
		data() {
			return {
				top: 44,
				scrollHeigth: 0,
				selArray: [],
				listArray: [],
				nums: 1,
				goodsMsg: {},
				comNums: 0,
				attr_index: 0,
				goodsID: '',
				windowwidth: 0,
				selectIndex: 0,
				tabbar: ['', '', '', ''],
				isShowGuige:false
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
			this.attr_index = 0
			this.goodsID = option.id
			console.log(this.goodsID)
			// this.storeMsg = option.store
			this.requestData()
		},
		methods: {
			changeCartNumsForguige(item, count, pid) {
				var that = this
				if (count == 1) {
					that.nums++
				} else {
					that.nums--
				}
				uni.$emit('meishicartchange', {}, that.nums)
			},
			closeGuige() {
				this.isShowGuige = false
			},
			doxuanguige(obj) {
				if (!this.http.user().id || this.http.user().id == 0) {
					
					
					uni.navigateTo({
						url: '../../../pages/login/login'
					})
					
					return
				}
				this.isShowGuige = true
				
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
						that.tabbar = ['全部 ' + dic.all, '有图 ' + dic.figure, dic.good, dic.negative]
					}
				})
			},
			requestData() {
				var that = this
				that.http.sendRequest('MerchantStoreProduct.Read', {
					'id': that.goodsID
				}).then(function(res) {
					if (res.code == 0) {
						setTimeout(function() {
							that.goodsMsg = res.info[0]
							that.nums = that.goodsMsg.cart_num
							that.requestEva()
							that.getevnums()
						}, 10);


					}
				})
			},
			requestEva() {
				var that = this
				var type = '';
				if (that.selectIndex == 0) {
					type = ''
				} else if (that.selectIndex == 1) {
					type = 101
				} else if (that.selectIndex == 2) {
					type = 1
				} else if (that.selectIndex == 3) {
					type = -1
				}
				console.log(that.goodsMsg.store.id)
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
				this.attr_index = index
				// if(this.selArray.indexOf(item.id) != -1){
				// 	this.selArray.splice(item.id)
				// }else{
				// 	this.selArray.push(item.id)
				// }
			},
			doAllEva() {
				uni.navigateTo({
					url: './allEva?storeType=1&id=' + this.goodsID + '&sid=' + this.goodsMsg.store.id
				})
			},
			showBigImage(index, list) {
				uni.previewImage({
					current: index,
					urls: list,
				})

			},
			doCart() {
				// uni.navigateTo({
				// 	url:'../cart/index'
				// })
				// this.nums++
				this.changeCartNums(1)
			},
			delateCartNums() {
				if (this.nums > 1) {

					this.changeCartNums(-1)
				}
			},
			addCartNums() {

				this.changeCartNums(1)
			},
			changeCartNums(nums) {
				if (!this.http.user().id || this.http.user().id == 0) {
					
					uni.navigateTo({
						url: '../../../pages/login/login'
					})
				
					return
				}
				var that = this
				if(that.goodsMsg.attr.length > 0){
					that.doxuanguige()
					return
				}
				
				that.http.sendRequest('MerchantStoreCart.Save', {
					'product_id': that.goodsMsg.id,
					'cart_num': nums,
					// 'product_attr_id': 0,//that.goodsMsg.attr[that.attr_index].id
					// 'more_product_attr_id':0
				}).then(function(res) {
					if (res.code == 0) {
						if (nums == 1) {
							that.nums++
						} else {
							that.nums--
						}
						uni.$emit('meishicartchange', that.goodsMsg.attr[that.attr_index].id, that.nums)
					}
				})
			},
			doLike(item, status) {
				if (!this.http.user().id || this.http.user().id == 0) {
					
					uni.navigateTo({
						url: '../../../pages/login/login'
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
			tabbarClick(index) {
				this.selectIndex = index
				this.requestEva()
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
		overflow: hidden;
	}

	.headerImage {
		width: 100%;
		/* padding-bottom: 100%; */
		height: 100%;
		/* background-color: #f09; */
	}

	.back-image {
		left: 15px;
		width: 32px;
		height: 32px;
		position: absolute;

	}

	.name {
		margin-left: 15px;
		width: calc(100% - 30px);
		line-height: 20px;
		font-weight: bold;
		font-size: 18px;
		margin-top: 15px;
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

	.xuanguige {
		background-color: #FF5725;
		margin-right: 15px;
		width: auto;
		padding-left: 5px;
		padding-right: 5px;
		border-radius: 4px;
		height: 28px;
		color: #FFF;
		font-size: 12px;
		line-height: 28px;
	}
</style>
