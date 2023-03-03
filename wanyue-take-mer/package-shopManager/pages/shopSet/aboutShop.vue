<template>
	<view>
		<wybar @clickLeft="back" :titleText="i18n.shop.about" :rightText="i18n.shop.submit" @clickRight="save"></wybar>
		<view style="width: 375px;background-color: white;margin-top: 10px;"> 
			<textarea class="uni-textarea"  :value="content" placeholder-style="color:#C5C5C5" :placeholder="i18n.shop.abouttip" @input="inputAbout"/>
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
				content:''
			}
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			inputAbout(e){
				this.content = e.detail.value
			},
			save(){
				var that = this
				let param = {'about':that.content}
				this.http.sendRequest('MerchantStore.Update',param).then(function(data) {
					if(data.code == 0){
						uni.navigateBack()
					}
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #f5f5f5;
		/* width: 100%;
		height: 100%; */
	}
	.uni-textarea{
		/* width: 100%; */
		height: 300px;
		background-color: white;
		margin-left: 10px;
		
	}
</style>
