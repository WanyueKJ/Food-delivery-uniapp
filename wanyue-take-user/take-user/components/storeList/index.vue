<template>
	<view>
		<scroll-view scroll-y="true" :style="'height:' + height + 'px;'" style="width: 100%;background-color: #f5f6f7;"
			class="column" :refresher-triggered="refresherTriggered" @scrolltolower="scrolltolower">
			<!-- @refresherrefresh="refresherrefresh" :refresher-threshold="45" :refresher-enabled="true" -->
			<view v-for="(item,index) in listArray" :key="index" @click="gotoCell(item)" class="row item_back">
				<image mode="aspectFill" class="item_image" :src="item.thumb"></image>
				<view class="column" style="margin-left: 8px;overflow: hidden;height: 72px;flex: 1;">
					<view class="item_biaoti">{{item.name}}</view>
					<view class="row" style="height: 28px;align-items: center;">
						<text
							style="font-size: 14px;font-weight: bold;color: #FF5725;margin-left: 3px;">{{item.stars}}</text>
						<text
							style="font-size: 12px;color: #FF5725;margin-left: 3px;">分</text>
						<view v-if="typeString == 4">
							<text style="font-size: 11px;color: #6f6f6f;margin-left: 8px;">({{item.comment_count}})
								{{item.store_type_name}}</text>
						</view>
						<view class="row" style="align-items: center;" v-else>
							<text style="font-size: 12px;color: #AAAAAA;margin-left: 8px;">{{i18n.meishi.yuexiao}}{{item.month_sales}}</text>
						</view>

					</view>
					<view style="display: flex;" v-if="item.comment.length > 0">
						<text class="item_content item_content_word">{{item.comment}}</text>
					</view>
				</view>
				<view style="color: #6f6f6f;font-size: 11px;margin-right: 10px;">
					{{item.distance}}
				</view>
			</view>
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
		props: {
			height: {
				type: Number,
				default: 0
			},
			typeString: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				page: 1,
				refresherTriggered: false,
				listArray: [],
				type_id: ''
			}
		},
		created() {
			this.type_id = this.typeString
			// if (this.typeString == 0) {
			// 	this.type_id = '1'
			// } else if (this.typeString == 1) {
			// 	this.type_id = '5'
			// } else if (this.typeString == 2) {
			// 	this.type_id = '3'
			// }
			var loaction = uni.getStorageSync('userlocation');
			// console.log(value)
			if (loaction) {
				this.requestData()
			}

		},
		methods: {
			requestData() {

				var that = this
				that.http.sendRequest('Home.SearchStore', {
					'p': that.page,
					'type_id': that.type_id
				}).then(function(res) {
					// that.listArray = res.info
					if (res.code == 0) {
						if (that.page == 1) {
							that.listArray = res.info[0]
						} else {
							that.listArray = that.listArray.concat(res.info[0])
						}
					}

				})

			},
			gotoCell(item) {
				this.$emit('gotoCell', item, this.typeString)
			},

			scrolltolower() {
				console.log('滚动到底部');
				var that = this
				that.page++
				that.requestData()
			},
			refresherrefresh() {
				var that = this
				that.page = 1

				that.refresherTriggered = true;
				that.requestData()
				console.log('自定义下拉刷新被触发');
				setTimeout(() => {
					that.refresherTriggered = false;
				}, 1000);
			},
		}
	}
</script>

<style>
	.item_back {
		width: calc(100% - 30px);
		height: 96px;
		margin-left: 15px;
		border-radius: 8px;
		margin-bottom: 10px;
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
		/* background-color: #ff00dd; */
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
		line-height: 17px;
		padding-left: 5px;
		padding-right: 5px;
	}
</style>
