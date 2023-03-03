<template>
	<view>
		<wybar @clickLeft="back" :leftText="className"></wybar>
		<view class="row topSearch">
			<image src="../../../../static/search.png" mode="aspectFit"
				style="margin-left: 10px;width: 20px;height: 20px;"></image>
			<input class="sousuokuang" :placeholder="i18n.index.search" type="text" confirm-type="search"
				@confirm="doSearch">
		</view>
		<view class="row"
			style="width: 100%;height: 44px;background-color: #FFF;justify-content: space-around;align-items: center;margin-top: 10px;">
			<view class="row" @click="changeType(0)" style="align-items: center;font-size:14px;">
				{{curSQName}}
				<image
					:src="isShowClass == 1 ? '../../../../static/rank/rank-shang.png' : '../../../../static/rank/rank-xia.png'"
					mode="aspectFit" style="width: 15px;height: 15px;margin-left: 5px;">
				</image>
			</view>
			<view class="row" @click="juliyouxian()" style="font-size:14px;">
				{{i18n.yilou.juliyouxian}}
			</view>
			<view class="row" @click="haopingyouxian()" style="font-size:14px;">
				{{i18n.yilou.haopingyouxian}}
			</view>
		</view>
		<scroll-view scroll-y="true" style="width: 100%;background-color: #f5f6f7;" :style="'height:' + scrollHeigth + 'px;'"
			:refresher-triggered="refresherTriggered" @scrolltolower="scrolltolower">
			<view v-for="(item,j) in listArray" :key="j" class="cellBack">
				<view class="cell row" @click="gotoStore(item)">
					<image mode="aspectFill" class="cell_thumb" :src="item.thumb"></image>
					<view class="column"
						style="margin-left: 8px;overflow: hidden;height: 100px;flex: 1;margin-top: 12px;">
						<view class="nameLbale">{{item.name}}</view>
						<view class="row" style="align-items: center;">
			
							<text style="font-size: 11px;color: #6f6f6f;">{{i18n.rank.dianping}} {{item.comment_count}}</text>
							<text style="font-size: 11px;color: #6f6f6f;margin-left: 3px;">{{i18n.rank.renjun}} {{item.per_capita}}</text>
						</view>
						<view class="row" style="font-size: 11px;color: #6f6f6f;align-items: center;">
							
							<text
								style="font-size: 12px;font-weight: bold;color: #FFBF47;margin-right: 5px;">{{item.stars}}</text>
								{{item.circle_name}} {{item.type_name}}
						</view>
						<view style="display: flex;">
							<text class="goods_label" @click.stop="dorank()">{{item.circle_name}} {{item.rank}}</text>
						</view>
						<view style="display: flex;margin-top: 5px;" v-if="item.comment.length > 0">
							<text class="item_content item_content_word">{{item.comment}}dasdads</text>
						</view>
					</view>
					<view style="color: #6f6f6f;font-size: 11px;margin-right: 10px;margin-top: 35px;">
						{{item.distance}}
					</view>
				</view>


			</view>
		</scroll-view>
		<view class="classView" v-if="isShowClass" :style="'top:' + (systemTop + 140) + 'px;'"
			@click="doHideClassView()">
			<scroll-view scroll-y="true"
				style="width: 100%;min-height: 200px;max-height: 300px;background-color: #FFF;">
				<view class="classItem" @click.stop="classItemClick({},99999)"
					:style="circle_id == '0' ? 'color:#FF5725;' : ''">
					{{i18n.rank.quanbushangquan}}
				</view>
				<view v-for="(item,index) in sqList" :key="index" class="classItem"
					@click.stop="classItemClick(item,index)">
					{{item.use_name}}
				</view>

			</scroll-view>
		</view>
	</view>
</template>

<script>
	import wybar from '@/components/wybar/wyBar.vue'

	export default {
		components: {
			wybar,
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				listArray: [],
				scrollHeigth: 0,
				classID: '',
				className: '',
				isShowClass: false,
				systemTop: 44,
				keywords: '',
				curDESC: {
					'overall': 'DESC'
				},
				page: 1,
				refresherTriggered: false,
				sqList: [],
				circle_id: '',
				curSQName: ''
			}
		},
		onReady() {
			const res = uni.getSystemInfoSync();
			var top = 44
			if (parseInt(res.safeArea.top) > top) {
				top = parseInt(res.safeArea.top)
				this.systemTop = top
			}
			this.scrollHeigth = getApp().globalData.windowHeight - top - 40 - 60 - 42
			this.curSQName = this.i18n.rank.quanbushangquan

		},
		onLoad(option) {
			this.className = option.name
			this.classID = option.id
			this.requestData(this.curDESC)
			this.getCircle()
		},
		methods: {
			back() {
				uni.navigateBack({})
			},
			changeType(index) {
				this.isShowClass = true
			},
			classItemClick(item, index) {

				var that = this
				that.page = 1
				that.isShowClass = false
				that.isShowShangquan = false
				if (index == 99999) {
					that.circle_id = '0'
					that.curSQName = that.i18n.rank.quanbushangquan
				} else {
					that.circle_id = item.id
					that.curSQName = item.use_name
				}
				that.requestData(that.curDESC)
			},

			doHideClassView() {
				this.isShowClass = false
				console.log('doHideClassView')
			},
			juliyouxian() {
				this.curDESC = {
					'distanc': 'ASC'
				}
				this.page = 1
				this.requestData(this.curDESC)
			},
			haopingyouxian() {
				this.curDESC = {
					'evaluate': 'ASC'
				}
				this.page = 1
				this.requestData(this.curDESC)
			},
			doSearch(e) {
				console.log(e.detail.value)
				that.page = 1
				this.keywords = e.detail.value
				this.requestData(this.curDESC)
			},
			requestData(dic) {
				var that = this
				dic.type_id = that.classID
				dic.circle_id = that.circle_id
				dic.p = that.page
				dic.keywords = that.keywords
				that.http.sendRequest('LookingShop.Search', dic).then(function(res) {
					if (res.code == 0) {
						var list = res.info[0]
						if (that.page == 1) {
							that.listArray = []
						}
						for (var i = 0; i < list.length; i++) {
							that.listArray.push(list[i])
						}
					}
				})
			},
			getCircle() {
				var that = this
				that.http.sendRequest('FineFood.GetCateCircle', {
					'type_id': 4
				}).then(function(res) {
					if (res.code == 0) {
						that.sqList = res.info[0]
					}
				})
			},
			dorank() {
				uni.navigateTo({
					url: '/pages/rank/rank?type=zhaodian'
				})
			},
			gotoStore(store) {
				uni.navigateTo({
					url: '../detail/index?id=' + store.id
				})
			},
		}
	}
</script>

<style>
	.topSearch {
		margin-left: 15px;
		margin-top: 10px;
		width: calc(100% - 30px);
		height: 36px;
		border-radius: 8px;
		background-color: #F5F6F7;
		align-items: center;
	}

	.sousuokuang {
		margin-left: 10px;
		margin-right: 10px;
		height: 100%;
		flex: 1;
		font-size: 14px;
		color: #181818;
	}

	.item_back {
		width: calc(100% - 30px);
		/* height: 134px; */
		margin-left: 15px;
		border-radius: 8px;
		margin-top: 10px;
		overflow: hidden;
		position: relative;
		background-color: #FFF;
		align-items: center;
		
	}



	.item_image {
		/* margin-top: 12px; */
		margin-left: 12px;
		width: 96px;
		height: 72px;
		border-radius: 4px;
		overflow: hidden;
		background-color: #ff00dd;
	}

	.item_biaoti {
		/* margin-top: 8px; */
		height: 22px;
		line-height: 22px;
		font-size: 16px;
		font-weight: bold;
		color: #181818;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		/* max-width: calc(100% - 20px); */
	}

	

	.labellabel {
		position: absolute;
		left: 12px;
		top: 0;
		width: 31px;
		height: 42px;
		text-align: center;
		color: #FFF;
		font-weight: bold;
		background-size: 100% 100%;
	}

	.classView {
		position: absolute;
		top: 142px;
		background-color: rgba(0, 0, 0, 0.6);
		width: 100%;
	}

	.classItem {
		width: 100%;
		height: 40px;
		line-height: 40px;
		padding-left: 15px;
		font-size: 14px;
	}

	.cellBack {
		margin-left: 15px;
		width: calc(100% - 30px);
		/* height: 135px; */
		background-color: #fff;
		margin-top: 10px;
		border-radius: 8px;
		overflow: hidden;
		/* padding-bottom: 10px; */
	}

	.cell {
		width: 100%;
		/* height: 100%; */
		position: relative;
		margin-bottom: 10px;
	}

	.cell_thumb {
		background-color: #06f;
		margin-left: 12px;
		width: 110px;
		height: 83px;
		border-radius: 4px;
		margin-top: 12px;
	}

	.nameLbale {
		/* margin-left: 8px; */
		height: 20px;
		color: #181818;
		font-size: 14px;
		font-weight: bold;
		line-height: 20px;
	}

	.goods_label {
		/* margin-left: 8px; */
		height: 20px;
		border-radius: 2px;
		padding-left: 5px;
		padding-right: 5px;
		color: #FFF;
		background-color: #FEF0E5;
		color: #FF5725;
		font-size: 10px;
		font-weight: bold;
		line-height: 20px;
		margin-top: 4px;
		margin-right: 10px;
		width: auto;
	}

	.store_label {
		margin-left: 8px;
		margin-top: 4px;
		line-height: 15px;
		font-size: 11px;
		color: #6F6F6F;
		height: 15px;
		width: calc(100% - 15px);
		align-items: center;
		flex-direction: wrap;
	}

	.store_label image {
		width: 10px;
		height: 10px;
		margin-right: 2px;
	}

	.item_content {
		text-overflow: ellipsis;

		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;

		display: -moz-box;
		-moz-line-clamp: 3;
		-moz-box-orient: vertical;

		overflow-wrap: break-word;
		word-break: break-all;
		white-space: normal;
		overflow: hidden;
	}

	.item_content_word {
		width: auto;
		height: 20px;
		border-radius: 2px;
		background-color: #FEF0E5;
		color: #FF5725;
		font-size: 10px;
		line-height: 20px;
		padding-left: 5px;
		padding-right: 5px;
	}
</style>
