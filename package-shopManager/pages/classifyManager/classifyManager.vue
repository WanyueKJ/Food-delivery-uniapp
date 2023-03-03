<template>
	<view>
		<scroll-view scroll-y="true" :style="'height:' + scrollHeight + 'px;'"
			style="background-color: #F5F5F5; width: 100%;" class="column">
			<view v-for="(item,index) in list" :key="index">
				<view class="inputBackView">
					<image v-if="index == selectedIndex" class="leftimg" src="../../static/mine-downarrow@2x.png"
						mode="aspectFit" @click="showDetail(index)"></image>
					<image v-else class="leftimg" src="../../static/rightarrow@2x.png" mode="aspectFit"
						@click="showDetail(index)"></image>
					<view class="title">{{item.use_name}}</view>
					<view class="edit" @click="editFirst(item)">{{i18n.shop.edit}}</view>
					<view class="delete" @click="deleteFirst(item)">{{i18n.shop.delete}}</view>
				</view>
				<block v-if="index == selectedIndex">
					<view v-for="(item,index) in item.children" :key="index">
						<view class="inputBackView2">
							<view class="title2">{{item.use_name}}</view>
							<view class="edit" @click="editSecond(item)">{{i18n.shop.edit}}</view>
							<view class="delete" @click="deleteSecond(item)">{{i18n.shop.delete}}</view>
						</view>
					</view>
				</block>
				
			</view>
		</scroll-view>
		<view @click="add()" class="fenlei" :style="'height:' + bottomHeight + 'px;'">{{i18n.shop.addfenlei}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollHeight: 0,
				bottomHeight: 0,
				list: [],
				isShowSecond: true,
				selectedIndex: -1,
				sectionHeight: 44
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		onReady() {
			var res = uni.getSystemInfoSync()
			// console.log(res.safeArea.bottom)
			this.bottomHeight = 60
			this.scrollHeight = res.windowHeight - this.bottomHeight

		},
		onShow() {
			this.getData()
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.i18n.shop.fenlei
			})
			
		},
		methods: {
			getData() {
				var that = this
				var param = {
					'level': '2',
					'is_tree': '1',
					'id': '0'
				}
				//店铺分类
				that.http.sendRequest('MerchantStoreType.Index', param).then(data => {
					that.list = data.info[0]
					console.log(that.list)
				})

			},
			showDetail(index) {
				this.selectedIndex = index
			},
			add() {
				uni.navigateTo({
					url: 'addClassify'
				})
			},
			editFirst(item) {
				uni.navigateTo({
					url: 'addClassify?param=' + JSON.stringify(item)
				})
			},
			deleteFirst(item) {
				var that = this
				uni.showModal({
					title: '',
					content: that.i18n.shop.deletetip,
					success: function(res) {
						if (res.confirm) {
							that.delete(item.id)
						} else if (res.cancel) {

						}
					}
				});

			},
			delete(ID){
				var that = this
				var param = {'id':ID}
				this.http.sendRequest('MerchantStoreType.Delete',param).then(function(data) {
					if(data.code == 0){
						that.getData()
					}
				})	
				
			},
			editSecond(item) {
				var dic = this.list[this.selectedIndex]
				uni.navigateTo({
					url: 'addClassify?param=' + JSON.stringify(item) + '&parentName=' + dic.use_name
				})
			},
			deleteSecond(item) {
				var that = this
				uni.showModal({
					title: '',
					content: that.i18n.shop.deletetip,
					success: function(res) {
						if (res.confirm) {
							that.delete(item.id)
						} else if (res.cancel) {
				
						}
					}
				});
			
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #F5F5F5;
	}

	.title2 {
		height: 20px;
		font-size: 14px;
		text-align: left;
		color: #646464;
		line-height: 14px;
		flex: 1;
		margin-left: 39px;
	}

	.inputBackView2 {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
	}

	.inputBackView {
		width: 100%;
		margin-top: 15px;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
	}

	.leftimg {
		width: 20px;
		height: 20px;
		margin-left: 15px;
	}

	.title {
		margin-left: 4px;
		font-size: 16px;
		text-align: left;
		color: #181818;
		flex: 1;
	}

	.delete {
		margin-right: 20px;
		font-size: 14px;
		color: #f40404;

	}

	.edit {
		/* position: absolute; */
		margin-right: 15px;
		/* height: 20px; */
		font-size: 14px;
		/* text-align: left; */
		color: #6f6f6f;
		/* line-height: 20px; */
	}

	.fenlei {
		font-size: 16px;
		text-align: center;
		color: #ffffff;
		line-height: 100%;
		align-items: center;
		width: 100%;
		background-color: #0F0F0F;
		display: flex;
		justify-content: center;
	}
</style>
