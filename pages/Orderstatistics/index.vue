<template>
	<view class="page">
		<view class="title">{{i18n.dingdantongji}}</view>
		<view class="tababr row">
			<view @click="changeindex(index)" v-for="(item,index) in tab" class="tab"
				:class="selectedIndex == index ? 'tabs':'tabn'">{{item}}</view>
		</view>
		<view v-if="selectedIndex == 0" class="centerview">
			<view v-for="(item,index) in centerarray" class="centercell">
				<view v-if="index == 0" class="row">
					<view style="font-size: 24px;">{{info.orders}}</view>
					<view style="font-size: 12px;margin-top: 12px;">{{i18n.order.dan}}</view>
				</view>
		
				<view v-if="index == 1" class="row">
					<view style="font-size: 24px;">{{info.graps}}</view>
					<view style="font-size: 12px;margin-top: 12px;">{{i18n.order.dan}}</view>
				</view>
				<view v-if="index == 2" class="row">
					<view v-if="info.distance > 1000" style="font-size: 24px;">{{info.distancekm}}</view>
					<view v-if="info.distance > 1000" style="font-size: 12px;margin-top: 12px;">km</view>
					<view v-if="info.distance < 1000" style="font-size: 24px;">{{info.distance}}</view>
					<view v-if="info.distance < 1000" style="font-size: 12px;margin-top: 12px;">m</view>
				</view>
				<view>{{item}}</view>
			</view>
		</view>
		
		<scroll-view scroll-y :style="'height:' + scrollH + 'px;'" class="scroll" @scrolltolower="scrolltolower">
			<block v-if="selectedIndex == 0">
				<!-- <cell :list="list" @gotomapdetail="gotomapdetail"></cell> -->
			</block>
			<block v-else>
				<view v-for="(item,index) in monthlist" class="monthcell column">
					<view class="row month">{{item.title}}
						<view v-if="index == 0" class="detailtime">{{item.des}}</view>
					</view>
					<view class="monthcelldetail row">
						<view class="column monthcelldetailcell">
							<view class="monthcelldetailcelltitle">{{i18n.order.wanchengOrder}}
								<view class="row monthcelldetailcellnums">
									<view>{{item.orders}}</view>
									<view style="font-size: 14px;margin-top: 7px;">{{i18n.order.dan}}</view>
								</view>
							</view>
						</view>
						
						<view class="column monthcelldetailcell">
							<view class="monthcelldetailcelltitle">{{i18n.order.peisonglicheng}}
								<view class="row monthcelldetailcellnums">
									<view v-if="item.distance > 1000">{{item.distancekm}}</view>
									<view v-if="item.distance > 1000" style="font-size: 14px;margin-top: 7px;">km</view>
									<view v-if="item.distance < 1000">{{item.distance}}</view>
									<view v-if="item.distance < 1000" style="font-size: 14px;margin-top: 7px;">m</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</block>
			<nothing v-if="selectedIndex == 0" :list="list"></nothing>
			<nothing v-if="selectedIndex == 1" :list="monthlist"></nothing>
		</scroll-view>
	</view>
</template>

<script>
	import cell from '../../components/ordercell/index.vue'
	export default {
		components: {
			cell
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				p: 1,
				centerarray: ['完成订单',  '已抢订单', '配送里程'],
				selectedIndex: 0,
				selectedIndex2: 0,
				tab: ['今日订单', '月订单'],
				tab2: ['全部', '已完成', '已转单'],
				scrollH: 0,
				list: [],
				info: '',
				monthlist: []
			}
		},
		onReady() {
			this.centerarray = [
				this.i18n.order.wanchengOrder,
				this.i18n.order.yiqiangOrder,
				this.i18n.order.peisonglicheng]
				this.tab = [this.i18n.order.jinriOrder,this.i18n.order.yuedingdan]
				this.tab2 = [this.i18n.eva.quanbu,this.i18n.order.yiwancheng,this.i18n.order.yizhuandan]
		},
		onLoad(option) {
			var that = this
			if (option.index) {
				this.selectedIndex2 = option.index
			}
			this.scrollH = getApp().globalData.windowHeight - getApp().globalData.top - 44 - 395
			this.NB.sendRequest('Rider.Orders.GetCount').then(data => {
				console.log(data)
				that.info = data.info[0]
				if (that.info.distance > 1000) {
					that.info.distancekm = that.fomatFloat(that.info.distance / 1000, 1)
				}
			})
			this.getlist()
		},
		methods: {
			gotomapdetail(item) {
				uni.navigateTo({
					url: '../detailmap/index?oid=' + item.id,
				});
			},
			getlist() {
				var that = this
				this.NB.sendRequest('Rider.Orders.GetCountList', {
					type: this.selectedIndex2
				}).then(data => {
					console.log(data)
					that.list = data.info
				})
			},
			scrolltolower() {
				this.p = parseInt(this.p) + 1;
				this.getlist()
			},
			fomatFloat(value, n) {
				var f = Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
				var s = f.toString();
				var rs = s.indexOf('.');
				if (rs < 0) {
					s += '.';
				}
				for (var i = s.length - s.indexOf('.'); i <= n; i++) {
					s += "0";
				}
				return s;
			},
			changeindex(index) {
				this.selectedIndex = index
				if (index == 0) {
					this.scrollH = getApp().globalData.windowHeight -
						getApp().globalData.top - 44 - 395
				} else {
					this.scrollH = getApp().globalData.windowHeight -
						getApp().globalData.top - 44 - 110

					var that = this
					this.NB.sendRequest('Rider.Orders.GetMonthCount', {
						year: 0
					}).then(data => {
						console.log(data)
						that.monthlist = data.info
						for (let i = 0; i <that.monthlist.length; i++) {
							if (that.monthlist[i].distance > 1000){
								that.monthlist[i].distancekm = that.fomatFloat(that.monthlist[i].distance/1000,1)
								that.$set(that.monthlist,i,that.monthlist[i])
							}
						}
						that.$forceUpdate()
					})
				}
			},
			changeindex2(index) {
				this.selectedIndex2 = index
				this.p = 1;
				this.getlist()
			},
		}
	}
</script>

<style>
	@import url("./index.css");
</style>
