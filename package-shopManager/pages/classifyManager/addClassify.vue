<template>
	<view>
		<wybar @clickLeft="back" :titleText="i18n.shop.addfenlei" :rightText="i18n.mine.save" @clickRight="save">
		</wybar>
		<!-- <view class="inputBackView2">
			<view class="leftbtn"
				:style="isChinese?'color:#ffffff; background: #00c1de;':'color:#181818; background: #C7C5C8;'"
				@click="changeChinese()">{{i18n.shop.chinese}}</view>
			<view class="rightbtn"
				:style="isChinese?'color:#181818;background: #C7C5C8;':'color:#ffffff; background: #00c1de;'"
				@click="changeTh()">{{i18n.shop.th}}</view>
		</view> -->
		<view class="inputBackView">
			<view class="title">{{i18n.shop.cengji}}</view>
			<view class="title2">{{title}}</view>
			
			<block v-if="isAdd && firstPlatformID!=3">
				<image v-if="isShowList" class="rightimg" src="../../../static/mine/mine-uparrow@2x.png"
					mode="aspectFit" @click="showList"></image>
				<image v-else class="rightimg" src="../../static/mine-downarrow@2x.png" mode="aspectFit"
					@click="showList"></image>
			</block>

		</view>
		<block v-if="isShowList">
			<view v-for="(item,index) in list" :key="index" class="inputBackView2">
				<view class="title" style="color: white;">{{i18n.shop.cengji}}</view>
				<view class="title3" @click="clickFirstClass(item)">{{item.use_name}}</view>
			</view>
		</block>
		<view class="inputBackView">
			<view class="title">{{i18n.shop.mingcheng}}</view>
			<input type="text" class="inputV" :value="subTitle" @input="inputname" :placeholder="i18n.shop.tip10" />
		</view>
		<block v-if="firstPlatformID==5 || firstPlatformID==6 || firstPlatformID==7 || firstPlatformID==8 || firstPlatformID==1">
			<view class="inputBackView" style="height: 90px;">
				<view class="title">{{i18n.shop.guigePic}}</view>
				<view v-if="thumb.length>0" class="inputBackViewpic">
					<image :src="thumb" mode="aspectFill" style="width: 64px;height: 64px;"></image>
					<image @click="deleteImage()" src="../../static/deletepic@2x.png" class=""
						style="position: absolute;right: 0;top: 0;width: 20px;height: 20px;border-radius: 10px;">
					</image>
				</view>
				<image v-if="thumb.length == 0" @click="doAddImage()" src="../../static/addpic@2x.png"
					mode="aspectFit" style="width: 64px;height: 64px;margin-left: 40px;"></image>
			</view>
		</block>

	</view>
</template>

<script>
	import wybar from '../../../components/wybar/wyBar.vue'
	export default {
		components: {
			wybar
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				title: '',
				currentID: '',
				subTitle: '',
				isAdd: true,
				isChinese: true,
				title_zh: '',
				title_th: '',
				parentID: 0,
				classID: '',
				parentName: '',
				isShowList: false,
				list: [],
				thumb: '',
				firstPlatformID: '',
				saveBtnClick:false
			}
		},
		onLoad(option) {
			//配置平台分类
			var shopinfo = uni.getStorageSync('shopinfo')

			this.firstPlatformID = shopinfo.top_type_id

			if (option.param) {
				var dic = JSON.parse(option.param)
				this.title = dic.use_name
				
				this.parentID = dic.pid
				this.classID = dic.id
				console.log(dic)
				if (this.parentID > 0) { //编辑二级分类
					this.isAdd = false
					this.parentName = option.parentName
					this.title = this.parentName
					this.subTitle = dic.use_name
					this.title_th = dic.th_name
					this.title_zh = dic.name
				} else {
					if (this.firstPlatformID == 3) {
						//服务类只需一级分类
						this.title = this.i18n.shop.yiji
						this.isAdd = false
						this.subTitle = dic.use_name
						this.title_th = dic.th_name
						this.title_zh = dic.name
					} else {
						//添加二级分类
						this.parentID = dic.id
						this.isAdd = true
					}

				}

			} else {
				//添加一级分类
				this.title = this.i18n.shop.yiji
				this.isAdd = true
				this.getData()
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			getData() {
				var that = this
				var param = {
					'level': '1',
					'is_tree': '0',
					'id': '0'
				}
				//店铺分类
				that.http.sendRequest('MerchantStoreType.Index', param).then(data => {
					that.list = data.info[0]
					var yijiDic = {
						'id': '0',
						'use_name': that.i18n.shop.yiji
					}
					that.list.unshift(yijiDic)
				})
			},
			save() {
				if(this.saveBtnClick){
					return
				}
				if (this.title_zh.length == 0) {
					uni.showLoading({
						title: this.i18n.shop.chinesetip
					})
					setTimeout(function() {
						uni.hideLoading();
					}, 1000)
					return
				}
				// if (this.title_th.length == 0) {
				// 	uni.showLoading({
				// 		title: this.i18n.shop.thtip
				// 	})
				// 	setTimeout(function() {
				// 		uni.hideLoading();
				// 	}, 1000)
				// 	return
				// }
				this.saveBtnClick = true
				if(this.thumb.length>0){
					this.uploadImg()
				}else{
					this.submit()
				}
			},
			uploadImg(){
				var that = this
				const value = uni.getStorageSync('userinfo');
				var toolData = {}
				if (value) {
					toolData.uid = value.uid
					toolData.token = value.token
				}
				console.log(that.thumb)
				// var thumbnew = JSON.stringify([that.thumb])
				uni.uploadFile({
					url: getApp().globalData.weburl + 'api/?s=Merchant.Upload.Upload',
					filePath:that.thumb,
					name: 'file',
					formData: toolData,
					success(res) {
						uni.hideLoading()
						var data = JSON.parse(res.data)
						var img = data.data.info[0].url_all
						that.thumb = img
						that.submit()
					},
					fail: err => {
						uni.hideLoading()
						that.saveBtnClick = false
					}
				})
					
			},
			submit(){
				var url = this.isAdd ? 'MerchantStoreType.Save' : 'MerchantStoreType.Update'
				var param = {}
				if (this.isAdd) {
					param = {
						'pid': this.parentID,
						'name': this.title_zh,
						'th_name': this.title_th,
						'thumb': this.thumb
					}
				} else {
					param = {
						'id': this.classID,
						'name': this.title_zh,
						'th_name': this.title_th,
						'thumb': this.thumb
					}
				}
				// console.log(param)
				var that = this
				this.http.sendRequest(url, param).then(function(data) {
					if (data.code == 0) {
						uni.navigateBack()
					}else{
						that.saveBtnClick = false
					}
				})
			},
			inputname(e) {
				this.subTitle = e.detail.value
				if (this.isChinese) {
					this.title_zh = this.subTitle
				} else {
					this.title_th = this.subTitle
				}
			},
			changeChinese() {
				// var str = uni.getLocale()
				// console.log(str)
				this.isChinese = true
				if (this.title_zh.length > 0) {
					this.subTitle = this.title_zh
				} else {
					this.subTitle = ''
				}
			},
			changeTh() {
				this.isChinese = false
				if (this.title_th.length > 0) {
					this.subTitle = this.title_th
				} else {
					this.subTitle = ''
				}
			},
			showList() {
				this.isShowList = true
			},
			clickFirstClass(item) {
				this.title = item.use_name
				this.parentID = item.id
				this.isShowList = false
			},
			deleteImage(index) {
				this.thumb = ''
			},
			doAddImage() {
				var that = this
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: function(res) {
						let tempFilePaths = res.tempFilePaths;
						that.thumb = tempFilePaths[0];
					}
				})
			}
		
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}

	.inputBackView {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		margin-top: 10px;
	}

	.inputBackViewpic {
		width: 82px;
		height: 82px;
		margin-left: 40px;
		align-items: center;
		justify-content: center;
		display: flex;
		position: relative;
	}

	.title3 {
		font-size: 15px;
		text-align: left;
		color: #6f6f6f;
		margin-left: 40px;
		flex: 1;
	}

	.backview {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: red;
		align-items: center;
	}

	.rightimg {
		width: 20px;
		height: 20px;
		margin-right: 15px;
	}

	.title2 {
		margin-left: 40px;
		font-size: 16px;
		text-align: left;
		color: #181818;
		flex: 1;
	}

	.title {
		margin-left: 15px;
		font-size: 16px;
		text-align: left;
		color: #181818;
	}

	.inputV {
		height: 44px;
		line-height: 44px;
		top: 0;
		font-size: 14px;
		margin-left: 40px;
		font-size: 16px;
		text-align: left;
		color: #181818;
		margin-right: 15px;
		flex: 1;
	}

	.inputBackView2 {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		justify-content: space-around;
	}

	.leftbtn {
		width: 160px;
		/* background: #00c1de; */
		border-radius: 2px;
		height: 30px;
		font-size: 14px;
		text-align: center;
		line-height: 30px;
	}

	.rightbtn {
		width: 160px;
		border-radius: 2px;
		height: 30px;
		font-size: 14px;
		text-align: center;
		line-height: 30px;
	}
</style>
