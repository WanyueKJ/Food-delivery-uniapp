<template>
	<view>
		<view class="bottom">
			<view class="word1">
				{{tt}}
				<!-- {{i18n.meishi.elietianqiTitle}} -->
			</view>
			<view class="word2">
				{{dd}}
				<!-- {{i18n.meishi.elietianqiDes}} -->
			</view>
			<view class="zhidaole" @click="domeishi()">
				{{i18n.meishi.zhidaole}}
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				tt:'',
				dd:''
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		onLoad(option) {
			this.tt = option.t
			this.dd = option.d
		},
		methods: {
			domeishi() {
				uni.navigateTo({
					url: '/package-meishi/pages/index/index?rdex=2'
				})
			}

		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-image: url('@/static/meishi/tianqi.jpg');
		background-size: 100% 100%;
	}

	.bottom {
		position: absolute;
		left: 15px;
		right: 15px;
		bottom: 70px;
		height: auto;
	}

	.word1 {
		width: 100%;
		color: #FFF;
		font-size: 20px;
		font-weight: bold;
		line-height: 28px;
	}

	.word2 {
		width: 100%;
		color: #FFF;
		font-size: 14px;
		/* font-weight: bold; */
		line-height: 20px;
		margin-top: 10px;
		margin-bottom: 20px;
	}

	.zhidaole {

		width: 100%;
		height: 50px;
		border-radius: 8px;
		background-color: #FFF;
		color: #383838;
		text-align: center;
		font-size: 16px;
		font-weight: bold;
		line-height: 50px;
	}
</style>
