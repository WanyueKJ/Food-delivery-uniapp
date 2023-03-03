<template>
	<view>
		<wybar @clickLeft="back" :leftText="i18n.mine.yijianfankui"></wybar>
		<view class="yijian-wrap">
			<textarea :maxlength="500" class="yijian-txt" v-model="yijian" :placeholder="i18n.mine.yjfkTips" />
			<image @click="photo" class="img-wrap" :src="imgPath" mode="aspectFill" v-if="imgPath.length > 0">
			</image>
			<view @click="photo" class="img-wrap column" style="border:1px dashed #DCDCDC;" v-else>
				<image src="../../static/images/camera.png" mode="" class="camera-fd"></image>
				<text
					style="width: 100%;margin-top: 5px;font-size: 14px;color: #646464;text-align: center;">{{i18n.mine.shangchuantupian}}</text>
			</view>
			<view :enabled="false" :class="{opatity: enabled}" class="submit-wrap" @click="subyijian">
				{{i18n.mine.submit}}
			</view>
		</view>
	</view>
</template>

<script>
	import wybar from '../../../components/wybar/wyBar.vue'
	export default {
		components: {
			wybar
		},


		data() {
			return {
				imgname: '',
				imgPath: '',
				yijian: '',
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
			enabled: function() {
				if (this.yijian == '') {
					return true;
				}
				return false;
			}
		},
		onLoad() {
			console.log(this.i18n.mine.yijianfankui)
			// this.imgPath = '../../static/creatRoomThumb.png';
		},
		methods: {
			back() {
				uni.navigateBack({

				})
			},
			//上传
			photo() {
				var that = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相机/相册选择
					success: function(res) {
						var tempFiles = res.tempFiles[0]
						var path = tempFiles.path
						that.imgPath = path
						that.uploadImageToservice()
					}
				});
			},
			uploadImageToservice() {
				uni.showToast({
					title:' '
				})
				var that = this
				const value = uni.getStorageSync('userinfo');
				var toolData = {}
				if (value) {
					toolData.uid = value.id
					toolData.token = value.token
				}
				uni.uploadFile({
					url: getApp().globalData.weburl + 'api/?s=App.Upload.Upload',
					filePath: that.imgPath,
					name: 'file',
					formData: toolData,
					success(res) {
						console.log(res)
						uni.hideLoading()
						var data = JSON.parse(res.data)
						that.imgname = data.data.info[0].url
					},
					fail: err => {
						uni.hideLoading()
					}
				})
			},
			getTime() {
				return new Date().getTime(); //1603009495724,精确到毫秒
			},
			subyijian() {
				if (this.yijian == '') {
					return;
				}
				var dic = {}
				dic.content = this.yijian
				dic.thumb = this.imgname
				this.http.sendRequest('Feedback.Add', dic).then(function(e) {
					if (e.code == 0) {
						setTimeout(function() {
							uni.navigateBack({
								delta: 1
							});
						}, 500);
					}
				})

			}
		}
	}
</script>
<style>
	@import url("./index.css");
</style>
