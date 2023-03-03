<template>
	<view class="uni-mask">
		<!-- <view class="codeview">
			<view class="codetext">
				{{'您当前手中还有' + nums + '个订单进行中,确定休息吗?'}}
			</view>
			<view class="inputrow row">
				<view @click="cancle" class="canclebtn">取消</view>
				<view @click="sure" class="surebtn">确定</view>
			</view>
		</view> -->
		<view class="codeview">
			<view class="codetext">
				{{i18n.order.danqiangshouzhong + nums + i18n.order.gedingdanxiuxi}}
			</view>
			<view class="inputrow row">
				<!-- <view @click="cancle" class="canclebtn">取消</view> -->
				<view @click="sure" class="surebtn">{{i18n.sure}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			nums: {
				type: Number
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {

			}
		},
		created() {

		},
		methods: {
			cancle() {
				this.$emit('relaxcancle')
			},
			sure() {
				this.$emit('relaxsure')
			}
		}
	}
</script>

<style>
	.canclebtn {
		width: 92px;
		height: 42px;
		line-height: 42px;
		text-align: center;
		color: #FFFFFF;
		border-radius: 21px;
		background-color: rgba(209, 209, 209, 1);
	}

	.surebtn {
		/* position: absolute; */
		/* right: 0; */
		width: 92px;
		height: 42px;
		line-height: 42px;
		text-align: center;
		color: #FFFFFF;
		border-radius: 21px;
		background-color: #FF5725;
	}

	.inputrow {
		position: relative;
		margin-top: 30px;
		width: calc(100% - 40px);
		margin-left: 20px;
		height: 60px;
		justify-content: center;
		align-items: center;
	}

	.codetext {
		color: rgba(50, 50, 50, 1);
		font-size: 16px;
		font-weight: bold;
		height: 40px;
		width: calc(100% - 40px);
		margin-left: 20px;
		margin-top: 40px;
	}

	.codeview {
		width: 288px;
		height: 196px;
		background-color: #FFFFFF;
		border-radius: 8px;
	}
</style>
