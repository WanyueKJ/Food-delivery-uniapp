<template>
	<view>
		<wybar @clickLeft="back" :leftText="i18n.login.country"></wybar>
		<scroll-view scroll-y="true" style="width: 100%;" :style="'height:' + scrollHeight + 'px;'">
			<view v-for="(item,index) in keyArray" :key="index">
				<view style="width: 100%;">
					<view class="header">
						{{item}}
					</view>
					<view @click="didSelectCell(country,j)" v-for="(country,j) in valueArray[index]" :key="j" class="row cell">
						<view style="flex: 1;">
							{{country.country}}
						</view>
						<view style="margin-right: 0;color: #AAAAAA;">
							{{country.code}}
						</view>
						<view class="line"></view>
					</view>
				</view>
			</view>
		</scroll-view>
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
				scrollHeight: 0,
				keyArray:[],
				valueArray:[]
			}
		},
		onReady() {
			var res = uni.getSystemInfoSync()
			this.scrollHeight = res.windowHeight - getApp().globalData.top - 40
		},
		onLoad() {
			this.requestData()
		},
		methods: {
			requestData(){
				var that = this
				that.http.sendRequest('Login.GetCountryCode', {}).then(function(res) {
					var arr = res.info
					that.keyArray = Object.keys(arr)
					that.valueArray =  Object.values(arr)
				})
			},
			back() {
				uni.navigateBack({

				})
			},
			didSelectCell(country,j){
				uni.setStorage({
					key: 'countryCode',
					data: country.code,
					success() {
						uni.navigateBack({
							
						})
					}
				})
				
			}
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.header {
		width: 100%;
		height: 40px;
		background-color: #F7F7F7;
		font-size: 15px;
		color: #6F6F6F;
		line-height: 40px;
		padding-left: 15px;
	}
	.cell {
		margin-left: 15px;
		width: calc(100% - 30px);
		font-size: 15px;
		color: #323232;
		line-height: 40px;
		position: relative;
	}
	.line {
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
		height: 1px;
		background-color: #D6DADE;
	}
</style>
