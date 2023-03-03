<template>
	<view>
		<view class="list_cell" @click="gotoBluetooth()">
			<text class="list_cell_title">{{i18n.mine.bluetooth}}</text>
			<image src="../../../static/ads-seld-right.png" mode="aspectFit" class="list_cell_right"></image>
		</view>
		<view class="list_cell2" @click="gotoCloundSet()">
			<text class="list_cell_title">{{i18n.mine.cloundset}}</text>
			<image src="../../../static/ads-seld-right.png" mode="aspectFit" class="list_cell_right"></image>
		</view>
	</view>
</template>

<script>
	// import wybar from '../../components/wybar/wyBar.vue'
	export default {
		// components: {
		// 	wybar
		// },
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				userInfo: {},
				content: '',
				type:1,
				title:'',
				savetxt:''
			}
		},
		methods:{
			gotoBluetooth(){
				uni.navigateTo({
					url:'./cloundprint?type=0',
				})
			},
			gotoCloundSet(){
				uni.navigateTo({
					url:'./cloundprint?type=1',
				})
			}
		}
	}
</script>

<style>

	page{
		width: 100%;
		background-color:#F1F6FD ;
	}
	.list_cell{
		width: 100%;
		height: 55px;
		margin-top: 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		background-color: white;
		border-bottom: 1px solid #f0f0f0;
	}
	.list_cell_title{
		color: #4A4A4A;
		font-size: 16px;
		margin-left: 10px;
		height: 20px;
		line-height: 20px;
	}
	.list_cell2{
		width: 100%;
		height: 55px;
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		background-color: white;
	}
	.list_cell_right{
		position: absolute;
		right: 12px;
		width: 20px;
		height: 20px;
	}
</style>