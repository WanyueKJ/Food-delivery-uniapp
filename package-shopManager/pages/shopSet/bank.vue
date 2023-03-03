<template>
	<view>
		<scroll-view scroll-y="true" :style="'height:' + scrollHeight + 'px;'"
			style="background-color: #F5F5F5;width: 100%;" class="column" :refresher-threshold="45"
			:refresher-triggered="refresherTriggered" :refresher-enabled="true" @refresherrefresh="refresherrefresh"
			@scrolltolower="reloadmoreData">
			<view v-for="(item,index) in list" :key="index" style="margin-top: 10px;">
				<view class="bg colum">
					<view class="inputBackView">
						<view class="title colum">
							<view class="title1">{{item.name}}</view>
							<view class="title2">{{item.bank_number2}}</view>
						</view>
						<image src="../../static/save@2x.png" mode="aspectFit" class="rightedit" @click="edit(item)"></image>
						<image src="../../static/shop_delete@2x.png" mode="aspectFit" class="rightdelete"@click="deleteItem(item)"></image>
					</view>
				</view>	
			</view>
		<view class="addBtn" @click="add()">{{i18n.shop.addBank}}</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				page: 1,
				refresherTriggered: false,
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		onShow() {
			this.getData()
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.i18n.shop.bank
			})
			var res = uni.getSystemInfoSync()
			// this.navHeight = 64+res.statusBarHeight
			this.scrollHeight = res.windowHeight
		
		},

		methods: {
			getData() {
				var that = this
				// var param = {
				// 	'p': this.page
				// }
				that.list = []
				this.http.sendRequest('MerchantStore.IndexBank').then(function(data) {
					let infos = data.info[0]
					for(let i = 0; i<infos.length; i++){
						var dic = infos[i]
						var number = dic.bank_number
						var newNumber = number.substring(number.length-4,number.length)
						dic.bank_number2 = '**** **** **** ****' + newNumber
						that.list.push(dic)
					}
				})
			},
			add() {
				uni.navigateTo({
					url: 'bankSet'
				})
			},
			deleteItem(item) {
				var that = this
				uni.showModal({
					title: '',
					content: that.i18n.shop.deletetip,
					success: function(res) {
						if (res.confirm) {
							that.delete(item)
						} else if (res.cancel) {

						}
					}
				});

			},
			delete(item) {
				var that = this
				var param = {
					'id': item.id
				}
				this.http.sendRequest('MerchantStore.DeleteBank', param).then(function(data) {
					if (data.code == 0) {
						that.getData()
					}
				})
			},
			edit(item) {
				uni.navigateTo({
					url: 'bankSet?param=' + JSON.stringify(item)
				})

			},
			refresherrefresh() {
				this.refresherTriggered = true;
				this.page = 1
				this.getData()
				setTimeout(() => {
					this.refresherTriggered = false;
				}, 1000);
			},
			reloadmoreData() {
				// this.page++
				// //this.p = parseInt(this.p) + 1;
				// this.getData()

			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}

	.peopleNum {
		margin-left: 15px;
		color: #383838;
		font-size: 14px;
		align-items: center;
		height: 44px;
		line-height: 44px;
	}

	.rightdelete {
		width: 20px;
		height: 20px;
		margin-right: 20px;
	}

	.rightedit {
		width: 20px;
		height: 20px;
		margin-right: 20px;
	}

	.bg {
		background-color: white;
		width: 100%;

	}

	.title {
		flex: 1;
		margin-left: 15px;
	}

	.title1 {
		height: 20px;
		font-size: 16px;
		text-align: left;
		color: #181818;
	}

	.title2 {
		height: 20px;
		font-size: 14px;
		text-align: left;
		color: #AAAAAA;
		line-height: 20px;
		margin-top: 5px;
	}

	.addBtn {
		margin-left: 15px;
		margin-top: 15px;
		margin-right: 15px;
		background-color: #00C1DE;
		color: white;
		font-size: 16px;
		align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: row;
		height: 44px;
	}

	.inputBackView {
		width: 100%;
		height: 85px;
		display: flex;
		flex-direction: row;
		background-color: white;
		/* border-bottom: 1px solid #E6E6E6; */
		align-items: center;
	}

	.editimg {
		width: 20px;
		height: 20px;
		margin-right: 15px;
	}

	.deleteimg {
		width: 20px;
		height: 20px;
		margin-right: 15px;
		margin-left: 15px;
	}
</style>
