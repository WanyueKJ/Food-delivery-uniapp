<template>
	<view>
	
		<scroll-view scroll-y="true" :style="'height:' + height + 'px;'"
			style="width: 100%;background-color: #FFF;white-space: nowrap;":refresher-triggered="refresherTriggered"
			@scrolltolower="scrolltolower"@refresherrefresh="refresherrefresh" :refresher-threshold="45" :refresher-enabled="true">
			<view class="row" style="width: 100%;height: 100%;flex-wrap: wrap;">
				<view v-for="(item,index) in listArray" :key="index" class="goodsCell" @click="doDetailes(item,index)">
				
					<view class="column" style="width: 100%;position: relative;">
						<view class="" style="width: 100%;display: grid;">
							<image :src="item.image" mode="aspectFill" class="img_thumb" :style="'height:' + imageWidth + 'px;'"></image>
						</view>
						<view class="sellAll" v-if="item.repertory == 0">
							{{i18n.market.shoukong}}
						</view>
						<view class="" v-if="item.repertory != 0 && operating_state == 1">
							<view @click.stop="jiashuliang(item)" class="anniu"
								style="background-color: #FF5725;color: #FFF;position: absolute;right: 4px;bottom: 4px;border-radius: 10px;"
								v-if="item.cart_num > 0">
								{{item.cart_num}}
							</view>
							<view @click.stop="jiashuliang(item)" class="anniu"
								style="position: absolute;right: 4px;bottom: 4px;background-color: #FFF;border-radius: 10px;"
								v-if="item.cart_num == 0">
								+
							</view>
							<view class="controlView" v-if="editId == item.id">
								<view @click.stop="jiashuliang(item)" class="anniu">
									+
								</view>
						
								<view class="anniu" style="width: 32px;">
									{{item.cart_num}}
								</view>
								<view @click.stop="jianshuliang(item)" class="anniu">
									-
								</view>
							</view>
						</view>
						<!-- <view class="controlView" v-else>
							<view @click="jiashuliang(item)" class="anniu">
								+
							</view>
				
							<view class="anniu" style="width: 32px;">
								{{item.cart_num}}
							</view>
							<view @click="jianshuliang(item)" class="anniu">
								-
							</view>
						</view> -->
					</view>
					<view class="goodsName oneline" style="margin-top: 6px;font-size: 14px;font-weight: bold;">
						<text style="font-size: 10px;">¥</text> {{item.use_price}}
					</view>
					<view class="goodsName oneline" style="margin-top: 6px;">
						{{item.use_name}}
					</view>
				</view>
			</view>
			
		</scroll-view>
	</view>


</template>

<script>
	export default {
		data() {
			return {
				listArray: [],
				refresherTriggered: 0,
				page:1,
				imageWidth:0,
				timer: null,
				timeCount: 0,
				editId:'',
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
			storeid: {
				type: String,
				default: ''
			},
			classID: {
				type: String,
				default: ''
			},
			operating_state: {
				type: Number,
				default: 0
			}
		},
		created() {
			var that = this
			const res = uni.getSystemInfoSync();
			
			that.imageWidth = res.windowWidth/2 - 27
			setTimeout(function() {
				that.requestData()
			}, 500);
			
		},
		methods: {
			doDetailes(item, index) {
				this.$emit('gotoCell', item)
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
			requestData() {
				var that = this
				that.http.sendRequest('Supermarket.StoreSearchProduct',{
					'id':that.storeid,
					'store_type_id':that.classID,
					'p':that.page
				}).then(function(res){
					if(res.code == 0){
						var info = res.info[0]
						if(that.page == 1){
							that.listArray = []
						}
						for (var i = 0; i < info.length; i++) {
							that.listArray.push(info[i])
						}
						console.log(that.listArray)
						that.$forceUpdate()
					}
				})
				
			},
			jiashuliang(item) {
				this.editId = ''
				
				this.changeCartNums(item,1)
			},
			jianshuliang(item) {
				this.editId = ''
				
				// if (parseInt(item.cart_num) > 1) {
					this.changeCartNums(item,-1)
				// }
			},
			changeCartNums(item,num) {
				if (!this.http.user().id || this.http.user().id == 0) {
					
					uni.navigateTo({
						url: '../../../pages/login/login'
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
						console.log(12321213231231)
						clearInterval(that.timer)
						that.timer = null
					}
				}, 1000)
				that.http.sendRequest('MerchantStoreCart.Save', {
					'product_id': item.id,
					'cart_num': num,
					'product_attr_id':''
				}).then(function(res) {
					if (res.code == 0) {
						var info = res.info[0]
						if(num == 1){
							item.cart_num ++
						}else{
							if(item.cart_num > 0){
								item.cart_num --
							}else{
								item.cart_num = 0
							}
							
						}
						that.$emit('getStore')
					}
				})
			},
		}
	}
</script>

<style>
	.goodsCell {
		margin-left: 15px;
		width: calc(50% - 27px);
		margin-right: 3px;
		overflow: hidden;
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

	.img_thumb {
		width: 100%;
		/* height: 100%;
		padding-bottom: 100%; */
		border-radius: 4px;
	}

	.goodsName {
		font-size: 12px;
		width: 100%;
	}
</style>
