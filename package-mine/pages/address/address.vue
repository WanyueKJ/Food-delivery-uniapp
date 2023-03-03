<template>
	<view>
		<wybar @clickLeft="back" :titleText="i18n.mine.address" ></wybar>
		<view class="inputback" @click="editAddress()">
			<view class="adds">{{address}}</view>
			<view class="list_cell_right">
				<image src="../../static/mine-editaddress@2x.png" mode="aspectFit" style="width: 20px;height: 20px;"></image>
			</view>
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
				userInfo: {},
				addressDic:{},
				address:'',
				lng:'',
				lat:''
			}
		},
		onLoad(e) {
			var that = this
			that.address = e.content
			// uni.$on('updateAddress',(param) =>{
			// 	that.address = param.address + param.detailAddress
			// 	that.addressDic = param
			// })	
		},
		onUnload() {
			// uni.$off('updateAddress')
		},
		methods: {
			back() {
				// console.log(this.addressDic)
				// uni.$emit('updateAddress2',this.addressDic)
				uni.navigateBack({

				})
			},
			editAddress(){
				uni.navigateTo({
					url:'editAds'
				})
			}
				
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #f5f6f7;
	}

	.inputback {
		margin-top: 10px;
		/* height: 46px; */
		width: 100%;
		background-color: #FFF;
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
	}

	.adds{
		display: flex;
		flex-direction: row;
		margin-left: 15px;
		margin-right: 15px;
		flex: 1;
		/* height: 46px; */
		/* line-height: 46px; */
		font-size: 16px;
		background-color: white;
		color: #333;
		
	}

	.list_cell_right{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-right: 5px;
		width: 40px;
		height: 40px;
	}
</style>
