<template>
	<view>
		<wybar @clickLeft="back" :titleText="i18n.shop.bank" :rightText="i18n.shop.submit" @clickRight="save"></wybar>
		<view class="tip">{{i18n.shop.bankTips}}</view>
		<view class="inputBackView" style="margin-top: 15px;">
			<view class="title2">{{i18n.shop.realname}}</view>
			<input type="text" :value="name" :placeholder="i18n.shop.nametip" class="inputV" @input="inputName" />
		</view>
		<view class="inputBackView">
			<view class="title2">{{i18n.shop.bankname}}</view>
			<input type="text" :value="bank" :placeholder="i18n.shop.banktip" class="inputV" @input="inputBank" />
		</view>
		<view class="inputBackView">
			<view class="title2">{{i18n.shop.cardNum}}</view>
			<input type="text" :value="cardNum" :placeholder="i18n.shop.cardtip" class="inputV" @input="inputCard" />
		</view>
	</view>
</template>

<script>
	import wybar from '../../../components/wybar/wyBar.vue'
	export default {
		components: {
			wybar
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				name:'',
				bank:'',
				cardNum:'',
				isAdd:true,
				bankID:''
			}
		},
		onLoad(option) {
			if(option.param){
				this.isAdd = false
				var param = JSON.parse(option.param)
				this.name = param.name
				this.bank = param.bank_name
				this.cardNum = param.bank_number
				this.bankID = param.id
			}else{
				this.isAdd = true
			}
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			save(){
				if(this.name && this.cardNum && this.bank){
					
					var param = {'name':this.name,
								 'bank_number':this.cardNum,
								 'bank_name':this.bank}
					if(!this.isAdd){
						param = {'name':this.name,
								 'bank_number':this.cardNum,
								 'bank_name':this.bank,
								 'id':this.bankID}
					}
					var url = this.isAdd ? 'MerchantStore.SaveBank' : 'MerchantStore.UpdateBank'
					this.http.sendRequest(url, param).then(function(res) {
						console.log(res)
						uni.navigateBack()
						
					})
				}else{
					
				}
				
			},
			inputName(e){
				this.name = e.detail.value
			},
			inputBank(e){
				this.bank = e.detail.value
			},
			inputCard(e){
				this.cardNum = e.detail.value
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
	.title2{
		margin-left: 15px;
		color: #181818;
		font-size: 16px;
	}
	.inputBackView {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		border-bottom: 1px solid #E6E6E6;
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
	.tip{
		margin-left: 15px;
		/* height: 40px; */
		margin-top: 15px;
		width: calc(100% - 30px);
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 12px;
		text-align: left;
		color: #F40404;
	}
</style>
