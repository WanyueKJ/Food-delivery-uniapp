<template>
	<view>
		<!-- 无地址数据 -->
		<view v-if="type == 0" class="addBtn" @click="addDizhi()">{{i18n.shop.addDizhi}}</view>
		<!-- 添加地址的UI -->
		<view v-if="type == 1" class="bg">
			<view class="inputBackView">
				<input type="text" :value="name" :placeholder="i18n.shop.dizhitip1" class="inputV" @input="inputName" />
			</view>
			<view class="inputBackView">
				<input type="text" :value="street" :placeholder="i18n.shop.dizhitip2" class="inputV" :disabled="true" />
				<image class="img" src="../../../static/ads-seld-right.png" mode="aspectFit" @click="click()"></image>
				<image class="img" src="../../static/save@2x.png" mode="aspectFit" @click="saveAddress()">
				</image>
				<image class="img" src="../../static/shop_delete@2x.png" mode="aspectFit"
					@click="deleteAddress()"></image>
			</view>
			<view class="inputBackView">
				<input type="text" :value="menpaihao" :placeholder="i18n.shop.dizhitip3" class="inputV"
					@input="inputMenpaihao" />
			</view>
		</view>
		<!-- 地址址展示 -->
		<view v-if="type == 2" class="detail row">
			<view class="top colum">
				<view class="address1">{{name}}</view>
				<view class="address2">{{street}}{{menpaihao}}</view>
			</view>
			<image class="img" src="../../static/editaddress@2x.png" mode="aspectFit" @click="editAds()">
			</image>
			<image class="img" src="../../static/shop_delete@2x.png" mode="aspectFit"
				@click="deleteCurrentAds()"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				street: '',
				menpaihao: '',
				lat: '',
				lng: '',
				type: 0, //0 无地址 1 添加地址 2 地址添加完成展示  
				addressID: '',
				isAdd:true
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},

		onLoad() {
			uni.setNavigationBarTitle({
				title: this.i18n.shop.dizhi
			})
			var that = this
			uni.$on('selectedAdsSuccess', (msg) => {
				console.log(msg)
				that.street = msg.name
				that.lat = msg.lat
				that.lng = msg.lng
			})
			this.getData()

		},
		onUnload() {
			uni.$off('selectedAdsSuccess');
		},
		methods: {
			getData() {
				var that = this
				this.http.sendRequest('MerchantStore.ReadPickup').then(function(data) {
					console.log(data.info[0])
					if (data.code == 0) {
						if (data.info[0].id > 0) {
							that.type = 2
							that.name = data.info[0].name
							that.street = data.info[0].address
							that.menpaihao = data.info[0].doorplate
							that.addressID = data.info[0].id
							that.isAdd = false
						} else {
							that.type = 0
							that.isAdd = true
						}

					}
				})
			},
			addDizhi() {
				this.type = 1
				this.isAdd = true
			},
			saveAddress() {
				
				if (this.name.length == 0 || this.street.length == 0 || this.menpaihao.length == 0) {
					return
				}
				var dic = {
					'name': this.name,
					'address': this.street,
					'doorplate': this.menpaihao
				}
				var url = this.isAdd? 'MerchantStore.SavePickup' : 'MerchantStore.UpdatePickup'
				if(!this.isAdd){
					var dic = {
						'name': this.name,
						'address': this.street,
						'doorplate': this.menpaihao,
						'id':this.addressID
					}
				}
				var that = this
				this.http.sendRequest(url, dic).then(function(data) {
					
					if(data.code == 0){
						that.type = 2
						that.getData()
					}
				})
			},
			//填写地址的时候删除按钮点击，清空当前所写内容
			deleteAddress() {
				this.name = ''
				this.street = ''
				this.menpaihao = ''
			},
			click() {
				uni.navigateTo({
					url: '../../../package-mine/pages/address/handSelecedAds?from=1'
				})
			},
			inputName(e) {
				this.name = e.detail.value
			},
			inputMenpaihao(e) {
				this.menpaihao = e.detail.value
			},
			deleteCurrentAds() {
				var that = this
				uni.showModal({
					title: '',
					content: that.i18n.shop.deletetip,
					success: function(res) {
						if (res.confirm) {
							that.deleteZitiAddress()
						} else if (res.cancel) {
				
						}
					}
				});

			},
			deleteZitiAddress(){
				var param = {'id':this.addressID}
				var that = this
				this.http.sendRequest('MerchantStore.DeletePickup',param).then(function(data) {
					if(data.code == 0){
						that.type = 0
						that.name = ''
						that.street = ''
						that.menpaihao = ''
					}
				})
			},
			editAds() {
				this.type = 1
				this.isAdd = false
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

	.detail {
		margin-top: 10px;
		width: 100%;
		height: 76px;
		background-color: white;
		align-items: center;
	}

	.top {
		margin: 10px;
		flex: 1;
	}

	.address1 {
		height: 15px;
		font-size: 16px;
		text-align: left;
		color: #181818;
		line-height: 15px;
	}

	.address2 {
		height: 15px;
		font-size: 14px;
		text-align: left;
		color: #A8A8A8;
		line-height: 15px;
		margin-top: 5px;
	}

	.addBtn {
		margin-left: 15px;
		margin-top: 15px;
		margin-right: 15px;
		background-color: #00C1DE;
		color: white;
		height: 44px;
		font-size: 16px;
		align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: row;
	}

	.bg {
		background-color: white;
		margin-top: 15px;
		width: 100%;
	}

	.inputBackView {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		border-bottom: 1px solid #E6E6E6;
		align-items: center;
	}

	.inputV {
		height: 44px;
		line-height: 44px;
		top: 0;
		font-size: 14px;
		margin-left: 5px;
		margin-right: 5px;
		flex: 1;
	}

	.inputV2 {
		height: 44px;
		line-height: 44px;
		top: 0;
		font-size: 14px;
		margin-left: 5px;
		margin-right: 5px;
		flex: 1;
	}

	.img {
		width: 20px;
		height: 20px;
		margin-right: 15px;
	}
</style>
