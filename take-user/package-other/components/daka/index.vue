<template>
	<view class="column" style="width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.3);position: absolute;left: 0;top: 0;">
		<view style="width: 100%;flex: 1;" @click="doHide()">

		</view>
		<view class="bottomView">
			<image src="../../static/images/dakachenggong.png" mode="aspectFit" style="width: 42px;height: 42px;" v-if="sucess"></image>
			<image src="../../static/images/dakashibai.png" mode="aspectFit" style="width: 42px;height: 42px;" v-else></image>
			
			<!-- <image :src=" sucess ? '../../static/images/dakachenggong.png' : '../../static/images/dakashibai.png'" mode="aspectFit" style="width: 42px;height: 42px;"></image> -->
			<blockquote v-if="sucess">
				<view class="" style="font-size: 16px;font-weight: bold;text-align: center;">
					{{i18n.toher.dakachenggong}}
				</view>
			</blockquote>
			<blockquote v-else>
				<view class="" style="font-size: 16px;font-weight: bold;text-align: center;">
					{{i18n.toher.dakashibai}}
				</view>
				<view class="" style="font-size: 13px;color: #6f6f6f;">
					{{i18n.toher.dakaTips}}
				</view>
			</blockquote>
			<view class="iknow" @click="doHide()">
				{{i18n.toher.ikonw}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				
			};
		},
		created() {
			const res = uni.getSystemInfoSync();
		},
		
		props: {
			sucess: {
				type: Boolean,
				default: false
			},
			
		},
		methods: {
			doHide(){
				this.$emit('hideDaka')
			}
			
		}
	}
</script>

<style>
	.bottomView {
		width: 100%;
		height: 202px;
		background-color: #FFF;
		border-radius: 16px 16px 0 0;
		margin-bottom: 0;
		align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
	}
	.iknow{
		width: 80px;
		height: 28px;
		border-radius: 14px;
		border: 0.5px solid #BFBFBF;
		text-align: center;
		line-height: 28px;
		font-size: 14px;
		margin-top: 10px;
	}
</style>
