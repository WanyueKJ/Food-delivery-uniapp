<template>
	<view>
		<block v-if="!success">
			<view class="title">{{i18n.shop.ketixian}} {{i18n.index.moneyFuhao}}{{money}}</view>
			<view class="inputBackView2">
				<view class="title2">{{i18n.index.moneyFuhao}}</view>
				<input type="text" :value="tixianMoney" class="inputV" @input="inputMoney" />
				<view class="titleright" @click="tixianAll()">{{i18n.shop.tixian_tip}}</view>
			</view>
			<view class="inputBackView">
				<view class="title2">{{i18n.shop.tixian_user}}</view>
				<input type="text" :value="name" class="inputV" @input="inputName" :disabled="true"/>
				<image style="margin-right: 15px; width: 20px;height: 20px;" v-if="isShow" src="../../../static/shang.png"
						mode="aspectFit"></image>
				<image style="margin-right: 15px;width: 20px;height: 20px;" v-else src="../../../static/xia.png" mode="aspectFit" @click="showBank()"></image>
			</view>
			<view v-if="isShow" style="width: 100%;background-color: white;display: flex;flex-direction: column;">
			<scroll-view scroll-y="true" style="width: 100%;height: 110px;">
				<view v-for="(item,index) in bankList" :key="index">
					<view class="item" @click="selectedBank(item,index)" :style="index==selectecIndex? 'color:#00C1DE' : 'color:#323232'">{{item.name}}  {{item.bank_name}}</view>
				</view>
			</scroll-view>
			</view>
			<view class="inputBackView">
				<view class="title2">{{i18n.shop.tixian_cardNum}}</view>
				<!-- :placeholder="i18n.shop.cardtip" -->
				<input type="text" :value="card"  class="inputV" @input="inputCard" :disabled="true"/>
			</view>
			<view class="tixianBtn" @click="tixian()">{{i18n.shop.tixian}}</view>
		</block> 
		<view v-else class="result">
			<image class="tipimg" src="../../static/tixiansuccess@2x.png" mode="aspectFit"></image>
			<view class="tip1">{{i18n.shop.tixian_tip1}}</view>
			<view class="tip2">{{i18n.shop.tixian_tip2}}</view>
			<view class="close" @click="close()">{{i18n.shop.tixian_close}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				success:false,
				money:'',
				tixianMoney:'',
				name:'',
				card:'',
				cardID:'',
				bankList:[],
				isShow:false,
				selectecIndex:-1
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title:this.i18n.shop.tixian
			})
			this.money = option.param
			this.getBankList()
		},
		methods: {
			getBankList(){
				var that = this
				this.http.sendRequest('MerchantStore.IndexBank').then(function(data) {
					console.log(data)
					that.bankList = data.info[0]
				})
			},
			tixian(){
				var that = this
				var param = {'bink_id':that.cardID,
							 'money':that.tixianMoney}
				that.http.sendRequest('Earnings.Save',param).then(function(data) {
					if(data.code == 0){
						that.success = true
					}
				})

			},
			tixianAll(){
				this.tixianMoney = this.money
			},
			inputName(e){
				this.name = e.detail.value
			},
			inputCard(e){
				this.card = e.detail.value
			},
			inputMoney(e){
				if(parseInt(e.detail.value) > parseInt(this.money)){
					uni.showLoading({
						title:this.i18n.shop.tixianError
					})
					setTimeout(function () {
						uni.hideLoading();
					}, 2000)
					return		
				}
				this.tixianMoney = e.detail.value
			},
			showBank(){
				this.isShow = true
			},
			selectedBank(item,index){
				this.name = item.name
				this.card = item.bank_number
				this.cardID = item.id
				this.selectecIndex = index
				this.isShow = false
			},
			close(){
				uni.navigateBack()
			}
			
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}
	.item{
		height: 44px;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		color: #323232;
	}
	.title{
		background-color: white;
		height: 44px;
		width: 100%;
		margin-top: 15px;
		display: flex;
		flex-direction: row;
		font-size: 14;
		color: #323232;
		border-bottom: 1px solid #E6E6E6;
		align-items: center;
		padding-left: 15px;
	}
	.result{
		width: 100%;
		height: 100%;
		align-items: center;
		display: flex;
		flex-direction: column;
	}
	.content{
		
	}
	.tipimg{
		width: 60px;
		height: 60px;
		margin-top: 90px;
	}
	.tip1{
		width: 100%;
		text-align: center;
		color:#181818 ;
		font-size: 20px;
		font-weight: bold;
		margin-top: 10px;
	}
	.tip2{
		width: 100%;
		margin-top: 20px;
		text-align: center;
		color: #AAAAAA;
		font-size: 15px;
	}
	.close{
		margin-left: 15px;
		margin-right: 15px;
		width: calc(100% - 30px);
		height: 48px;
		margin-top: 180px;
		border-radius: 4px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: white;
		background-color: #00C1DE;
		font-size:14px ;
	}
	.tixianBtn{
		margin-top: 35px;
		margin-left: 15px;
		margin-right: 15px;
		height: 44px;
		background-color: #00C1DE;
		color: white;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-size: 16px;
	}
	.title1{
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		color: #323232;
		justify-content: center;
		margin-top: 10px;
		border-bottom: 1px solid #E6E6E6;
	}
	.title2{
		margin-left: 15px;
		color: #323232;
		font-size: 14px;
	}
	.titleright{
		margin-right: 20px;
		font-size: 13px;
		color: #00C1DE;
	}
	.inputV {
		height: 44px;
		line-height: 44px;
		font-size: 14px;
		margin-left: 15px;
		margin-right: 15px;
		flex: 1;
	}
	.inputBackView {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		margin-top: 10px;
	}
	.inputBackView2 {
		width: 100%;
		height: 68px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		
	}
	.inputV {
		height: 44px;
		line-height: 44px;
		top: 0;
		font-size: 14px;
		margin-left: 15px;
		margin-right: 15px;
		flex: 1;
	}
</style>
