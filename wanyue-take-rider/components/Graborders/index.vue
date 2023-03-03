<template>
	<view class="uni-mask" @click="hide">
		<view v-if="showresult == false" class="grabview">
			<image class="bgimage" src="../../static/image/bj.png">
			</image>
			<view class="circle">{{nums}}</view>
			<view class="garbtext">{{i18n.order.qiangdanzhong}}</view>
			<view class="garbdes">{{i18n.order.qiangdaningqingshaohou}}</view>
		</view>
		<view v-if="showresult == true" class="grabview">
			<image class="bgimage" src="../../static/image/bj.png">
			</image>
			<view class="circle2">
				<image src="../../static/image/grabguanbi.png"></image>
			</view>
			<view class="garbtextfail">{{i18n.order.qiangdanshibai}}</view>
			<view class="garbdesfail">{{i18n.order.qiangdanshibaitip}}</view>
			<view class="grabbtn" @tap.stop="grapagain">{{i18n.order.jixuqiangdan}}</view>
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
				showresult: false,
				nums: 3,
				timer: null,
			}
		},
		created() {
			var that = this
			this.timer = setInterval(() => {
				that.nums -= 1;
				if (that.nums == 0) {
					clearInterval(that.timer)
					that.timer = null;
					// that.showresult = true
				}
			}, 1000)
		},
		methods: {
			grapagain() {
				this.$emit('hidegrab')
			},
			hide() {
				if (this.showresult == true) {
					this.$emit('hidegrab')
				}
			},
			success() {
				clearInterval(this.timer)
				this.timer = null;
				this.$emit('hidegrab')
			},
			getresult() {
				clearInterval(this.timer)
				this.timer = null;
				this.showresult = true
			}
		}
	}
</script>

<style>
	.grabbtn {
		top: 270px;
		position: absolute;
		margin-left: calc(50% - 85px);
		width: 170px;
		height: 42px;
		line-height: 42px;
		color: rgba(255, 255, 255, 1);
		font-size: 16px;
		font-weight: bold;
		text-align: center;
		border-radius: 21px;
		background: linear-gradient(to left, rgba(255, 107, 36, 1), rgba(249, 159, 41, 1));
		z-index: 999;
	}

	.garbtext {
		position: absolute;
		width: 100%;
		color: rgba(50, 50, 50, 1);
		font-size: 18px;
		font-weight: bold;
		text-align: center;
		margin-top: 220px;
		height: 40px;
		line-height: 40px;
		z-index: 999;
	}

	.garbtextfail {
		position: absolute;
		width: 100%;
		color: rgba(50, 50, 50, 1);
		font-size: 18px;
		font-weight: bold;
		text-align: center;
		margin-top: 180px;
		height: 40px;
		line-height: 40px;
		z-index: 999;
	}

	.garbdes {
		position: absolute;
		width: 100%;
		color: rgba(152, 152, 152, 1);
		font-size: 16px;
		text-align: center;
		margin-top: 260px;
		height: 20px;
		line-height: 20px;
		z-index: 999;
	}

	.garbdesfail {
		position: absolute;
		width: 100%;
		color: rgba(152, 152, 152, 1);
		font-size: 16px;
		text-align: center;
		margin-top: 230px;
		height: 20px;
		line-height: 20px;
		z-index: 999;
	}

	.grabview {
		width: 287px;
		height: 347px;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.circle {
		font-size: 60px;
		text-align: center;
		line-height: 155px;
		color: #FFFFFF;
		font-weight: bolder;
		top: 40px;
		margin-left: calc(50% - 80px);
		position: absolute;
		width: 155px;
		height: 155px;
		border-radius: 80px;
		border: 5px solid rgba(255, 237, 227, 1);
		z-index: 1000;
		background: linear-gradient(to bottom, rgba(255, 107, 36, 1), rgba(249, 159, 41, 1));
	}

	.circle2 {
		display: flex;
		align-items: center;
		justify-content: center;
		top: 60px;
		margin-left: calc(50% - 42px);
		position: absolute;
		width: 85px;
		height: 85px;
		border-radius: 45px;
		border: 5px solid rgba(255, 237, 227, 1);
		z-index: 1000;
		background: linear-gradient(to bottom, rgba(255, 107, 36, 1), rgba(249, 159, 41, 1));
	}

	.circle2 image {
		width: 40px;
		height: 40px;
	}

	.bgimage {
		position: absolute;
		width: 287px;
		height: 347px;
		z-index: 999;
	}
</style>
