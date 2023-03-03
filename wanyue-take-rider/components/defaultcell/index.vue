<template>
	<view>
		<!-- type 订单类型 1帮送  2帮取 3帮买 4 帮排队 5帮办-->
		<view @click="gotomapdetail(item)" v-for="(item,index) in list" class="cell column">
			<!-- 时间状态 -->
			<!-- 35分钟内送达 8:00到达  尽快送达 尽快购买 尽快取件 服务中 -->
			<view class="section1 row">
				<image v-if="item.ispre == 1" class="section1-image-yu " src="../../static/image/yu.png"></image>
				<image v-else class="section1-shijian" src="../../static/image/shijian.png"></image>
				<block v-if="item.type == 4 || item.type == 5">
					<view v-if="item.status == 4" class="section1-time row">
						<view>{{i18n.order.fuwuzhong}}</view>
					</view>
					<view v-else class="section1-time row">{{item.service_time}}
						<view style="color: #323232;">{{i18n.order.daoda}}</view>
					</view>
				</block>
				<block v-else>
					<view class="section1-time row">{{item.service_time}}
						<view v-if="item.type == 1 || item.type == 2" style="color: #323232;">{{i18n.order.qujian}}</view>
						<view v-if="item.type == 3" style="color: #323232;">{{i18n.order.songda}}</view>
						<block v-if="item.type == 4 || item.type == 5">
							<view v-if="item.status == 3" style="color: #323232;">{{i18n.order.daoda}}</view>
							<view v-if="item.status == 4">{{i18n.order.fuwuzhong}}</view>
						</block>
					</view>
				</block>


				<block v-if="selectedIndex == 0">
					<view class="section1-price row">
						<view style="font-size: 20px;height: 20px;line-height: 22px;">{{item.income}}</view>
						<view style="font-size: 16px;height: 20px;">¥</view>
					</view>
				</block>
				<block v-if="selectedIndex !=0">
					<view v-if=" item.reminder_count > 0" class="section1-price row">
						<view style="font-size: 20px;height: 20px;line-height: 22px;">{{i18n.order.cuidan}}</view>
					</view>
					<image @tap.stop="navigation(item)" class="daohangimgage" src="../../static/image/daohang.png">
					</image>
				</block>
			</view>
			<view class="section2 row">
				<view class="section2-left column">
					<image v-if="item.type == 1 || item.type == 2 || item.type == 6" src="../../static/image/qu.png"></image>
					<image v-if="item.type == 3" src="../../static/image/mai.png"></image>
					<image v-if="item.type == 4" src="../../static/image/pai.png"></image>
					<image v-if="item.type == 5" src="../../static/image/ban.png"></image>
					<block v-if="item.type == 3">
						<text v-if="item.f_lng != ''" >{{item.myDistance}}</text>
					</block>
					<block v-else>
						<text>{{item.myDistance}}</text>
					</block>
					<!-- <text v-if="item.type !=3 && item.extra.type != 2" >{{item.myDistance}}</text> -->
				</view>
				<view class="section2-right column">
					<block v-if="item.type != 4 && item.type != 5">
						<block v-if="item.type == 3">
							<block v-if="item.extra.type == 2">
								<view class="section2-right-title oneline">
									 {{i18n.order.jiujingoumai}}
								</view>
							</block>
							<block v-else>
								<view class="section2-right-title oneline">
									{{item.f_name}}
								</view>
							</block>
						</block>
						<block v-else>
							<view class="section2-right-title oneline">
								{{item.f_name}}
							</view>
						</block>
						
						<view class="section2-right-des oneline">
							{{item.f_addr}}
						</view>
					</block>
					<block v-else>
						<view class="section2-right-title oneline">
							{{item.t_name}}
						</view>
						<view class="section2-right-des oneline">
							{{item.t_addr}}
						</view>
					</block>
				</view>
			</view>
			<view v-if="item.type != 4 && item.type != 5" class="line"></view>
			<view v-if="item.type != 4 && item.type != 5" class="section3 row">
				<view class="section2-left column">
					<image src="../../static/image/song.png"></image>
					<text v-if="item.allDistance">{{item.allDistance}}</text>
				</view>
				<view class="section2-right column">
					<view class="section2-right-title oneline">
						{{item.t_name}}
					</view>
					<view class="section2-right-des oneline">
						{{item.t_addr}}
					</view>
				</view>
			</view>
			<!-- 任务类型 -->
			<!-- 帮我办 帮我送 帮我买 帮我排队 -->
			<view class="section4 row">
				<view v-if="item.type_t" class="section4-type1">{{item.type_t}}</view>
				<view v-if="item.tips" class="section4-type2" :style="item.ispre == 1?'background-color: #FDC208;':''">
					{{item.tips}}
				</view>
				<view class="section4-service_time" v-if="selectedIndex == 2 && (item.type == 4 || item.type == 5)">
					{{item.service_time+i18n.order.daoda}}
				</view>
			</view>
			<view v-if="item.des.length > 0" class="section7">
				<view class="sectionbeizhu">{{item.des}}</view>
			</view>
			<image class="zhuandan" v-if="item.istrans == 1" src="../../static/image/zhuandan.png"></image>
			<!-- 按钮状态 -->
			<!-- 拒绝接单 抢单 -->
			<block v-if="selectedIndex == 0">
				<view class="section5 row">
					<view class="section5-type1" @tap.stop="RefuseOrders(item)">{{i18n.order.jujuejiedan}}</view>
					<view class="section5-type2" @tap.stop="GrabOrder(item)">{{i18n.order.qiangdan}}</view>
				</view>
			</block>
			<!-- 已取件 开始服务 已购买 -->
			<block v-if="selectedIndex == 1">
				<view class="section6 row">
					<view class="section6-type1" @tap.stop="connect(item)">{{i18n.order.lianxi}}</view>
					<view v-if="item.type == 4 || item.type == 5" class="section6-type2" @tap.stop="StartService(item)">
						{{i18n.order.kaishifuwu}}</view>
					<view v-if="item.type == 1 || item.type == 2 || item.type == 6" class="section6-type2" @tap.stop="pickSure(item)">{{i18n.order.querenqujian}}
					</view>
					<view v-if="item.type == 3" class="section6-type2" @tap.stop="BuySure(item)">{{i18n.order.querengoumai}}</view>
				</view>
			</block>
			<!-- 确认送达  服务完成 -->
			<block v-if="selectedIndex == 2">
				<view class="section6 row">
					<view class="section6-type1" @tap.stop="connect(item)">{{i18n.order.lianxi}}</view>
					<view v-if="item.type == 4 || item.type == 5" class="section6-type2"
						@tap.stop="serviceCompleted(item)">{{i18n.order.fuwuwancheng}}</view>
					<view v-else class="section6-type2" @tap.stop="serviceCompleted(item)">{{i18n.order.querensongda}}</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			selectedIndex: {
				type: Number,
				default: 0
			},
			// list: {
			// 	type: Array,
			// 	default: []
			// }
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				list: []

			}
		},
		created() {

		},
		methods: {
			reload(list) {
				this.list = list
				this.$forceUpdate()
			},
			//服务完成
			serviceCompleted(item) {
				this.$emit('serviceCompleted', item)
			},
			//拒绝接单
			RefuseOrders(item) {
				this.$emit('RefuseOrders', item)
			},
			//接单
			GrabOrder(item) {
				this.$emit('GrabOrder', item)
			},
			//去详情
			gotomapdetail(item) {
				// if (item.istrans == 0){
					this.$emit('gotomapdetail', item)
				// }
			},
			//开始服务-完成服务
			StartService(item) {
				this.$emit('StartService', item)
			},
			pickSure(item) {
				this.$emit('StartService', item)
			},
			BuySure(item) {
				this.$emit('StartService', item)
			},
			//联系
			connect(item) {
				this.$emit('connect', item)
				console.log('联系')
			},
			//跳转导航
			navigation(item) {
				if (this.selectedIndex == 1) {
					if (item.type == 1 || item.type == 2 || item.type == 3) {
						this.openLocation('__UNI__7350749', item.f_lng, item.f_lat, item.f_name)
					} else {
						this.openLocation('__UNI__7350749', item.t_lng, item.t_lat, item.t_name)
					}
				} else {
					this.openLocation('__UNI__7350749', item.t_lng, item.t_lat, item.t_name)
				}
			},
			openLocation(appid, lng, lat, name) {
				var farray = this.NB.wgs84togcj02(lng, lat)
				lng = farray[0]
				lat = farray[1]
				console.log(farray)
				uni.openLocation({
					latitude: parseFloat(lat),
					longitude: parseFloat(lng),
					success: function() {
						console.log('success');
					},
					fail(err) {
						console.log(err);
					}
				});
			}
		}
	}
</script>

<style>
	@import url("./index.css");
</style>
