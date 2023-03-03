<template>
	<view class="content">
		<view class="stutasView" :style="'height:' + naviHeight + 'px'">
			
		</view>
		<view class="naviContentView">
			<view class="naviLeftView" v-if="naviLeftViewHidden" @click="doReturn">
				<image class="navi_returnImage" src="../../static/naviImage/navi_backImg.png" mode="aspectFit"></image>
				<slot name="left" />
			</view>
			<view class="">
				{{naviTitleStr}}
			</view> 
			<!-- #ifndef MP-WEIXIN -->
				<view class="naviRightView" v-if="naviRightViewHidden">
					<slot name="right" />
				</view>
			<!-- #endif -->
			
		</view>
	</view>
	
	
</template>

<script>
	export default {
		name: "naviView",
		props: {
					naviTitleStr: {
						type: String,
						default: function() {
							return '';
						}
					},
					naviLeftViewHidden:{
						type:Boolean,
						default:function(){
							return true;
						}
					},
					naviRightViewHidden:{
						type:Boolean,
						default:function(){
							return false;
						}
					}
				},
		data() {
			return {
				naviHeight: 0,
				// titleStr:''
			}
		},
		created() {
			const res = uni.getSystemInfoSync();
			this.naviHeight = res.statusBarHeight;
		},
		methods:{
			doReturn(){
				// this.$emit('doreturn')
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>
	
	.stutasView{
		margin-top: 0;
		margin-left: 0;
		width: 100%;
		background-color: #1AAD19;
	}
	.naviContentView{
		margin-left: 0;
		margin-top: 0;
		width: 100%;
		background-color: #FFFFFF;
		color: #323232;
		line-height: 40px;
		height: 40px;
		font-weight: bold;
		font-size: 15px;
		text-align: center;
		flex-wrap: nowrap;
		position: relative;
		
	}
	.naviContentView::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0px;
		width: 100%;
		height: 1rpx;
		background-color: #F0F0F0;
		margin: 0 auto;
	}
	.naviLeftView{
		position: absolute;
		left: 10px;
		top: 0;
		height: 100%;
		width: 60px;
		/* background-color: #DD524D; */
	}
	.navi_returnImage{
		position: absolute;
		left: 5px;
		top: 10px;
		width: 20px;
		height: 20px;
	}
	.naviRightView{
		position: absolute;
		right: 10px;
		top: 0;
		height: 100%;
		width: 60px;
		background-color: #DD524D;
	}
	.naviRightView-weixin{
		right: 100px;
	}
</style>
