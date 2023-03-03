<template>
	<view v-if="storeMsg">
		<!-- <wybar @clickLeft="back" :leftText="className"></wybar> -->
		<view class="row" style="width: 100%;height: 48px;align-items: center;" :style="'margin-top:' + topspace + 'px;'">
			<image src="../../../../static/back-left.png" @click="back()" mode="" style="width: 30px;height: 30px;margin-left: 15px;"></image>
			<view class="" style="margin-left: 10px;font-size: 15px;font-weight: bold;color: #FF5725;">
				{{className}}
			</view>
		</view>
		<scroll-view scroll-x="true"
			style="width: 100%;white-space: nowrap;background-color: #FFF;margin-top: 8px;height: 32px;" v-if="classID != 0">
			<text v-for="(item,index) in tabbar" :key="index" :class="index == tabIndex ? 'tab_sel' : 'tab_nor'"
				@click="tabbarClick(index)">
				{{item.use_name}}
			</text>
		</scroll-view>
		<listV :height="scrollHeigth" @gotoCell="gotoCell" @getStore="getStore" :storeid="stoID" :classID="0" :operating_state="operating_state" v-if="classID == 0"></listV>
		<swiper v-else :autoplay="false" style="width: 100%;background-color: #FFF;" :style="'height:' + scrollHeigth + 'px;'" :current="tabIndex" @change="intervalChange">
			<swiper-item v-for="(item,index) in tabbar" @touchmove.stop="stopTouchMove">
				<listV :height="scrollHeigth" @gotoCell="gotoCell" @getStore="getStore" :storeid="stoID" :classID="item.id" :operating_state="operating_state"></listV>
			</swiper-item>
			
		</swiper>
		<view tyle="width: 100%;height: 100px;" v-if="operating_state == 1">
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
		<view class="row" style="width: 100%;height: 100px;" v-else>
			<view class="xiuxila">
				本店休息啦
			</view>
		</view>
	</view>
	
</template>

<script>
	import wybar from '@/components/wybar/wyBar.vue'
	import listV from "@/package-other/components/marketGoods/index.vue"
	export default {
		components: {
			wybar,
			listV
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				className: '',
				classID: '',
				tabbar: [],
				tabIndex: 0,
				scrollHeigth: 0,
				type: 5,
				stoID:'',
				storeMsg:null,
				topspace:44,
				operating_state:0
			}
		},
		onReady() {
			// this.tabbar = ['全部', '全部', '全部', '全部', '全部', '全部', '全部', '全部', '全部', '全部']
			
		},
		onLoad(option) {
			this.className = option.name
			this.type = option.type
			this.stoID = option.storeID
			this.classID = option.id
			this.operating_state = option.operating_state
			console.log(this.classID)
			const res = uni.getSystemInfoSync();
			var top = 44
			if (parseInt(res.safeArea.top) > top) {
				top = parseInt(res.safeArea.top)
			}
			this.topspace = top
			if (this.classID == 0) {
				this.scrollHeigth = res.windowHeight - top - 48 - 60 -20 

			} else {
				this.scrollHeigth = res.windowHeight - top - 48 - 100 -20 
				this.getclass()
			}

		},
		onShow() {
			this.getStore()
		},
		methods: {
			stopTouchMove: function() {
				return false;
			},
			back() {
				uni.navigateBack({})
			},
			getStore(){
				var that = this
				
				that.http.sendRequest('Supermarket.GetStoreDetail', {
					'id': that.stoID
				}).then(function(res) {
					if (res.code == 0) {
						that.storeMsg = res.info[0]
					}
				})
			},
			getclass() {
				var that = this
				var dic = {}
				dic.level = 2
				dic.is_tree = 0
				dic.id = that.classID
				dic.store_id = that.stoID
				that.http.sendRequest('Supermarket.GetStoreType', dic).then(function(res) {
					if (res.code == 0) {
						var list = res.info[0]
						that.tabbar = list
					}
				})
			},
			tabbarClick(index) {
				var that = this;
				that.tabIndex = index

			},
			gotoCell(item) {
				// uni.navigateTo({
				// 	url: '../store/store'
				// })
				uni.navigateTo({
					url:'../goodsDetaile/index?id=' + item.id + '&type=' + this.type
				})
			},
			doCart(){
				if (!this.http.user().id || this.http.user().id == 0) {
					uni.navigateTo({
						url: '../../../../pages/login/login'
					})
					return
				}
				var that = this
				that.http.sendRequest('MerchantStoreCart.Index', {
					'store_id': that.stoID
				}).then(function(res) {
					if (res.code == 0) {
						const info = res.info[0]
						if(info.length > 0){
							uni.navigateTo({
								url: '/package-meishi/pages/cart/index?type=meishi&store=' + JSON.stringify(that.storeMsg) + '&top_type=' + that.type
							})
						}
					}
				})
				
			},
			intervalChange(e){
				this.tabIndex = e.detail.current
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #FFF;
		overflow: hidden;
	}

	.tab_sel {
		font-size: 16px;
		font-weight: bold;
		color: #181818;
		margin-left: 15px;
		margin-right: 4px;
		position: relative;
		height: 30px;
		justify-content: center;
	}

	.tab_sel::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 25%;

		height: 2px;
		border-radius: 1px;
		width: 50%;
		background-color: #FF5725;
	}

	.tab_nor {
		font-size: 14px;
		/* font-weight: bold; */
		color: #383838;
		margin-left: 15px;
		margin-right: 4px;
		position: relative;
		height: 30px;
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
</style>
