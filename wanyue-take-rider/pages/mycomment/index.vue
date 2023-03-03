<template>
	<view>
		<view class="top row">
			<view class="source">{{userInfo.star}}</view>
			<view class="topview column">
				<view class="starbg ow">
					<image class="xingxing" v-for="(item,index) in 5" src="../../static/image/xiaohui.png"
						mode="aspectFit"></image>
				</view>
				<view class="starbgS ow">
					<image class="xingxing" v-for="(item,index) in star" src="../../static/image/xingxingxiao.png"
						mode="aspectFit"></image>
					<image v-if="half" class="xingxing" mode="aspectFit" src="../../static/image/bankexing.png"></image>
				</view>
				<view class="nums">{{i18n.eva.gong+ userInfo.evaluates + i18n.eva.renpingjia}}</view>
			</view>
			<view class="zonghepingfen">{{i18n.eva.zonghepingfen}}</view>
		</view>
		<view class="tabbar row">
			<view @click="changeindex(index)" :style="index == 0?'margin-left:10px':''"
				:class="selectedIndex == index?'cellok':'cellno'" v-for="(item,index) in tabbars" class="tabcell">
				{{item}}
			</view>
		</view>
		<scroll-view scroll-y class="scroll" :style="'height:' + windowHeight + 'px;'" @scrolltolower="scrolltolower">
			<view v-for="(item,index) in list" class="listcell column">
				<view class="row">
					
					<image class="avatar" :src="item.is_anonymous == 1 ? '../../static/logo.png' : item.uinfo.avatar"></image>
					<view class="cellname column">
						<view class="name" v-if="item.is_anonymous == 1">{{i18n.order.nimingyonghu}}</view>
						<view class="name" v-else>{{item.uinfo.user_nickname}}</view>
						<view class="cellxingn row">
							<image class="xingxings" v-for="(item2,index2) in 5" src="../../static/image/xiaohui.png"
								mode="aspectFit"></image>
						</view>

						<view class="cellxings row">
							<image class="xingxings" v-for="(item2,index2) in item.stars"
								src="../../static/image/xingxingxiao.png" mode="aspectFit"></image>
							<image v-if="item.half" class="xingxings" mode="aspectFit"
								src="../../static/image/bankexing.png"></image>

						</view>
					</view>
					<view class="time">{{item.add_time}}</view>
				</view>
				<view class="des">{{item.content}}</view>
			</view>
			<nothing :list="list"></nothing>
		</scroll-view>
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
				star: 0,
				p: 1,
				list: [],
				selectedIndex: 0,
				windowHeight: 0,
				userInfo: '',
				tabbars: [],
				half: false,
			}
		},
		onReady() {
			uni.setNavigationBarTitle({
				title: this.i18n.wodepingjia
			});
		},
		onLoad() {
			this.windowHeight = getApp().globalData.windowHeight - 160 - getApp().globalData.top - 44
			this.userInfo = this.NB.user()
			var string1 = this.i18n.eva.quanbu + '(' + this.userInfo.evaluates + ')'
			var string2 = this.i18n.eva.haoping + '(' + this.userInfo.good + ')'
			var string3 = this.i18n.eva.zhongping + '(' + this.userInfo.average + ')'
			var string4 = this.i18n.eva.chaping + '(' + this.userInfo.bad + ')'
			this.tabbars = [string1, string2, string3, string4]

			// 1.1  1.2  1.3 显示一颗   1.4 1.5 1.6 1.7 显示一颗半  1.8 1.9 两颗
			this.star = parseInt(this.userInfo.star)
			var string = String(this.userInfo.star)
			if (string.length == 3) {
				var starnum = string.substring(3, 2)
				if (starnum > 3 && starnum < 8) {
					this.half = true
				} else if (starnum < 4) {
					this.half = false
				} else {
					this.half = false
					this.star += 1
				}
			}
			this.GetRecord()
		},
		methods: {
			scrolltolower() {
				this.p = parseInt(this.p) + 1;
				this.GetRecord()
			},
			GetRecord() {
				uni.showLoading()
				var that = this
				this.NB.sendRequest('Rider.Evaluate.GetRecord', {
					p: this.p,
					type: this.selectedIndex
				}).then(data => {
					console.log(data.info)
					setTimeout(() => {
						uni.hideLoading()
					}, 300)

					for (let i = 0; i < data.info.length; i++) {
						var string = String(data.info[i].star)
						data.info[i].stars = parseInt(data.info[i].star)
						if (string.length == 3) {
							var starnum = string.substring(3, 2)
							console.log(starnum)
							if (starnum > 3 && starnum < 8) {
								data.info[i].half = true
							} else if (starnum < 4) {
								data.info[i].half = false
							} else {
								data.info[i].half = false
								data.info[i].stars = parseInt(data.info[i].stars) + 1
							}
						} else {
							data.info[i].half = false
						}
					}
					if (this.p == 1) {
						that.list = data.info
					} else {
						for (let i = 0; i < data.info.length; i++) {
							that.list.push(data.info[i]);
						}
					}
				})
			},
			changeindex(index) {
				this.selectedIndex = index
				this.p = 1
				this.list = []
				this.GetRecord()
			}

		}
	}
</script>

<style>
	.des {
		margin-top: 20px;
		width: calc(100% - 60px);
		margin-left: 45px;
		margin-bottom: 20px;
	}

	.xingxings {
		width: 13px;
		height: 13px;
		margin-right: 2px;
	}

	.time {
		margin-top: 30px;
		position: absolute;
		right: 10px;
		color: rgba(152, 152, 152, 1);
		font-size: 12px;
	}

	.cellxingn {
		position: absolute;
		height: 20px;
		margin-top: 40px;
	}

	.cellxings {
		height: 20px;
		margin-top: 5px;
	}

	.name {
		margin-top: 20px;
		height: 15px;
		line-height: 15px;
	}

	.cellname {
		margin-left: 10px;
		position: relative;
		height: 36px;
	}

	.avatar {
		margin-top: 20px;
		width: 36px;
		height: 36px;
		border-radius: 18px;
		background-color: #DD524D;
	}

	.listcell {
		width: calc(100% - 20px);
		margin-left: 10px;
		border-bottom: 1px solid rgba(240, 240, 240, 1);
		min-height: 100px;
	}

	.cellok {
		background-color: #FF5725;
		color: #FFFFFF;
	}

	.cellno {
		background-color: rgba(240, 239, 245, 1);
		color: rgba(50, 50, 50, 1);
	}

	.tabcell {
		margin-top: 10px;
		line-height: 30px;
		text-align: center;
		width: calc((100% - 50px)/4);
		margin-right: 10px;
		height: 30px;
		font-size: 14px;
		border-radius: 15px;
	}

	.tabbar {
		height: 60px;
		width: 100%;
	}

	.zonghepingfen {
		color: rgba(50, 50, 50, 1);
		font-size: 16px;
		font-weight: bold;
		margin-left: 30px;
	}

	.nums {
		width: 100%;
		text-align: left;
		margin-left: 0;
		color: rgba(152, 152, 152, 1);
		font-size: 14px;
		margin-bottom: 5px;
	}

	.xingxing {
		width: 20px;
		height: 20px;
		margin-right: 5px;
	}

	.topview {
		position: relative;
		margin-left: 20px;
		height: 50px;
		width: 150px;
		align-items: center;
		border-right: 1px solid #F5F5F5;
	}

	.starbgS {
		position: absolute;
		width: 100%;
		height: 25px;
	}

	.starbg {
		width: 100%;
		height: 25px;
	}

	.source {
		color: #FF5725;
		font-size: 40px;
		font-weight: bolder;
		height: 60px;
		line-height: 60px;
		margin-left: 20px;
	}

	.top {
		align-items: center;
		width: 130%;
		background-color: #FFFFFF;
		height: 100px;
		border-bottom: 10px solid #FAFAFA;
	}
</style>
