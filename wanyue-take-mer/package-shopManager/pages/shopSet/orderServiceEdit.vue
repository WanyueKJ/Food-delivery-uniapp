<template>
	<view>
		<wybar @clickLeft="back" :titleText="i18n.shop.fuwushezhi" :rightText="i18n.mine.save" @clickRight="save"></wybar>
		<view style="background-color: white;width: 100%;height: 44px;">
			<input type="text" :value="title" :placeholder="i18n.shop.fuwutip2" class="inputV" @input="inputName" />
		</view>
	</view>
</template>

<script>
	import wybar from '../../../components/wybar/wyBar.vue'
	export default {
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		components: {
			wybar
		},
		data() {
			return {
				title:'',
				isAdd:true,
				serviceID:''
			}
		},
		onLoad(e) {
			if(e.id > 0){
				this.isAdd = false
				this.serviceID = e.id
				this.title = e.txt
			}else{
				this.isAdd = true
			}
			
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			save(){
				if(this.title.length == 0){
					uni.showLoading({
						title:this.i18n.shop.nodatatip
					})
					setTimeout(function () {
						uni.hideLoading();
					}, 2000)
					return
				}
				var url = this.isAdd? 'MerchantStore.SaveServe' :'MerchantStore.UpdateServe'
				var param = this.isAdd? {'name':this.title} : {'name':this.title,'id':this.serviceID}
				this.http.sendRequest(url,param).then(function(data) {
						if(data.code == 0){
							uni.navigateBack()
						}
				})
				
			},
			inputName(e){
				this.title = e.detail.value
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
	.inputV {
		display: flex;
		flex-direction: row;
		height: 44px;
		line-height: 44px;
		top: 15px;
		background-color: white;
		font-size: 14px;
		flex: 1;
		margin-top: 15px;
		margin-left: 15px;
		margin-right: 15px;
	}
</style>
