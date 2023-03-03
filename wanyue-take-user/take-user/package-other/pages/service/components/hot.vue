<template>
	<view :style="'height:' + height + 'px;'" style="width: 100%;background-color: #FFF;" class="column">
		<view class="headrV">
			<view class="" style="font-size: 20px;font-weight: bold;">
				{{i18n.toher.remen}}
			</view>
			<view class="" style="font-size: 12px;color: #AAAAAA;">
				{{i18n.toher.zuishouhuanying}}
			</view>
		</view>
		<scroll-view scroll-y="true" :style="'height:' + (height - 200) + 'px;'"
			style="width: 100%;background-color: #FFF;display: flex;flex-wrap: wrap;"
			 @scrolltolower="scrolltolower">
			<view v-for="(item,index) in listArray" :key="index" class="cell-back" @click="gotocell(item)">

				<image :src="item.image" mode="aspectFill" class="pic-image"></image>
				<view class="abslView" style="">
					<view class="name" >
						{{item.use_name}}
					</view>
					<view class="money" >
						¥ {{item.use_price}}
					</view>
				</view>

			</view>
		</scroll-view>
		<view tyle="width: 100%;height: 100px;">
			<view class="row cart" v-if="storeMsg.operating_state == 1">
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
			<view v-else style="width: 100%;height: 80px;background-color: #FFF;position: absolute;left:0;bottom: 0;">
				<view class="row cart" style="background-color: #CCCCCC;justify-content: center;">
					本店休息啦
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				
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
			storeMsg:{
				type: Object,
				default: null
			},
			listArray:{
				type: Array,
				default: []
			},
		},
		created() {
			var that = this

		},
		methods: {

			scrolltolower() {
				console.log('滚动到底部');
				var that = this
				that.page++
				that.requestData()
			},
			refresherrefresh() {
				// var that = this
				// that.page = 1

				// that.refresherTriggered = true;
				// that.requestData()
				// console.log('自定义下拉刷新被触发');
				// setTimeout(() => {
				// 	that.refresherTriggered = false;
				// }, 1000);
			},
			requestData() {

			},
			doCart(){
				if (!this.http.user().id || this.http.user().id == 0) {
					uni.navigateTo({
						url: '../../../../pages/login/login'
					})
					return
				}
				uni.navigateTo({
					url:'../../../../package-meishi/pages/cart/index?top_type=3&type=fuwu&store=' + JSON.stringify(this.storeMsg)
				})
			},
			gotocell(item){
				this.$emit('gotocell',item)
			}
			
		}
	}
</script>

<style>
	.headrV {
		margin-left: 15px;
		width: calc(100% - 30px);
		height: 100px;
		justify-content: center;
		display: flex;
		flex-direction: column;
	}

	.cell-back {
		margin-left: 30rpx;
		width: 333rpx;
		height: 333rpx;
		position: relative;
		border-radius: 8px;
		margin-right: 24rpx;
		margin-bottom: 10px;
		overflow: hidden;
		display: inline-block;
	}

	.cell-back:nth-child(2n) {
		margin-left: 0;
	}

	.pic-image {
		width: 100%;
		height: 100%;
		/* padding-bottom: calc(100%);
		back */
		ground-color: #FF0000;
	}

	.abslView {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0));
	}
	
	.name {
		margin-left: 8px;
		margin-top: 8px;
		margin-right: 8px;
		color: #FFF;
		font-size: 16px;
		font-weight: bold;
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
	.money {
		position: absolute;
		right: 8px;
		bottom: 8px;
		width: 64px;
		height: 26px;
		background-color: #FFF;
		border-radius: 13px;
		text-align: center;
		font-size: 14px;
		font-weight: bold;
		line-height: 26px;
	}
</style>
