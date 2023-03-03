<template>
	<view>
		<wybar @clickLeft="back"  :rightText="i18n.index.scan" @clickRight="back"></wybar>
		<view class="hexiao">{{i18n.index.hexiao}}</view>
		<view class="hexiao6">{{i18n.index.hexiao6}}</view>
		<view class="bgview row">
			<view v-for="(item,index) in 6" :key="index">
			<input class="codeinput" :id="'input'+index" type="number" 
				:focus="focus_index==index" @input="inputCode"  maxlength="1"/>
			 </view> 
		</view>
		
		<view class="surebtn" @click="requestCode()">{{i18n.index.hexiaosure}}</view>
	</view>
</template>

<script>
	import wybar from '../../components/wybar/wyBar.vue'
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
				focus_index:0,
				data:[]
			}
		},
		methods: {
			back() {
				uni.navigateBack({
			
				})
			
			},
			requestCode(){
				if(this.data.length<6){
					return
				}
				var str = this.data.join('')
				var param = {'verify_code':str}
				this.http.sendRequest('MerchantOrder.VerificationSheet',param).then(function(data) {
					if(data.code == 0){
						uni.showToast({
							title:data.msg,
							icon:'',
							duration: 1000
						})
						setTimeout(function() {
							let pages = getCurrentPages();
							uni.navigateBack({
								delta: 3
							})
							
						}, 1000);
					}
				})

			},
			inputCode(e){
				var index = (e.target.id).replace('input','')
				if(index<6){
					var value = e.target.value
					if(value != ''){
						this.focus_index = Number(index)+1
						this.data.push(value)
					}
				}
				
			}
			// focusinput(e){
			// 	var index = (e.target.id).replace('input-','')
			// 	console.log(e)
			// 	console.log(index)
			// 	if(this.data[index] != ''){
			// 		this.data[index]=''
			// 	}
			// }
			
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
		background-color: white;
	}
	.hexiao{
		margin-top: 60px;
		font-size: 17px;
		color: black;
		margin-left: 15px;
		height: 20px;
		line-height: 20px;
	}
	.hexiao6{
		margin-top: 10px;
		color: #969696;
		font-size: 12px;
		margin-left: 15px;
		height: 15px;
		line-height: 15px;
	}
	.bgview{
		margin-top: 15px;
		margin-left: 15px;
		margin-right: 15px;
		height: 60px;
	}
	.codeinput{
		width: 40px;
		height: 50px;
		margin-right: 8px;
		border-bottom: 1px solid #D8D8D8;
		padding-left: 10px;
	}
	.surebtn{
		background-color: #00C1DE;
		color: white;
		font-size: 16px;
		height: 40px;
		display: flex;
		flex-direction: row;
		border-radius: 4px;
		margin-left: 30px;
		margin-right: 30px;
		margin-top: 40px;
		align-items: center;
		justify-content: center;
	}
</style>
