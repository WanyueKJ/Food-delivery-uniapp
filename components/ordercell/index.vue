<template>
	<view>
		<view @click="gotomapdetail(item)" v-for="(item,index) in list" class="cell column">
			<!-- item.istrans -->
			<view class="section1 row">
				<view class="times column">
					<view v-if="item.istrans == 0" style="height: 20px;line-height: 20px;">
						{{i18n.order.songdashijian + '：'+ item.complete_time}}
					</view>
					<view v-if="item.istrans == 1" style="height: 20px;line-height: 20px;">
						{{i18n.order.zhuandanshijian + '：'+ item.trans_time}}
					</view>
					<view style="height: 20px;line-height: 20px;">{{i18n.order.orderNum + '：'+ item.orderno}}</view>
				</view>
				<view class="section1-price column">
					<view v-if="item.istrans == 0" style="color: #02C405;font-size: 12px;">{{i18n.order.yiwancheng}}</view>
					<view v-if="item.istrans == 1" style="color: #F30700;font-size: 12px;">{{i18n.order.yizhuandan}}</view>
					<view v-if="item.istrans == 0" class="row">
						<view style="font-size: 20px;height: 20px;line-height: 22px;font-size: 16px;">{{item.income}}
						</view>
						<view style="font-size: 16px;height: 20px;font-size: 10px;margin-top: 5px;">¥</view>
					</view>
				</view>
			</view>
			<view class="section2 row">
				<view class="section2-left column">
					<image v-if="item.type == 1 || item.type == 2 || item.type == 6" src="../../static/image/qu.png"></image>
					<image v-if="item.type == 3" src="../../static/image/mai.png"></image>
					<image v-if="item.type == 4" src="../../static/image/pai.png"></image>
					<image v-if="item.type == 5" src="../../static/image/ban.png"></image>
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
			<view style="height: 10px;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: []
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
			reload(list) {
				this.list = list
				this.$forceUpdate()
			},
			//去详情
			gotomapdetail(item) {
				if (item.istrans == 0) {
					this.$emit('gotomapdetail', item)
				}
			},
		}
	}
</script>

<style>
	@import url("./index.css");
</style>
