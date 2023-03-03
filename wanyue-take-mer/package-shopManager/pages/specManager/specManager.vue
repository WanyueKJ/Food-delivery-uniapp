<template>
	<!-- 规格 -->
	<view>
		<wybar @clickLeft="back" :titleText="i18n.shop.specM" :rightText="i18n.mine.save" @clickRight="save"></wybar>
		<view class="inputBackView3">
			<view class="leftbtn"
				:style="isChinese?'color:#ffffff; background: #00c1de;':'color:#181818; background: #C7C5C8;'"
				@click="changeChinese()">{{i18n.shop.chinese}}</view>
			<view class="rightbtn"
				:style="isChinese?'color:#181818;background: #C7C5C8;':'color:#ffffff; background: #00c1de;'"
				@click="changeTh()">{{i18n.shop.th}}</view>
		</view>
		<scroll-view scroll-y="true" style="width: 100%;background-color: #FAFAFA;"
			:style="'height:' + scrollHeight + 'px;'">
			<view v-for="(item,index) in data" :key="index">
				<view class="inputBackView">
					<view class="title2">{{i18n.shop.specName}}</view>
					<input type="text" :id="index" :value="isChinese?item.attr_name:item.th_attr_name"
						:placeholder="i18n.shop.speclizi" class="inputV" @input="inputSpec" />
				</view>
				<view class="inputBackView2">
					<view class="title2">{{i18n.shop.price}}</view>
					<input type="digit" :id="index" :value="item.price" :placeholder="i18n.shop.write" class="inputV"
						@input="inputPrice" />
					<view class="right">{{i18n.index.moneyUnit}}</view>
				</view>
				<view class="delete" @click="deleteSpec(index)">{{i18n.shop.deleteSpec}}</view>
			</view>
			<view class="add" @click="addSpec()">{{i18n.shop.addTxt}}</view>
		</scroll-view>

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
				spec: '',
				price: '',
				scrollHeight: 0,
				data: [],
				isChinese: true,
				isAdd: true,
				productID: '',
				newSpecArr: []
			}
		},
		onLoad(option) {
			var res = uni.getSystemInfoSync()
			// console.log(res.safeArea.bottom)
			this.navHeight = 64 + res.statusBarHeight
			this.scrollHeight = res.windowHeight - this.navHeight - 44
			if (option.productID > 0) {
				this.isAdd = false
				this.productID = option.productID
				this.getSpecDetail()
			} else {
				this.isAdd = true
				var guigeArr = JSON.parse(option.guige)
				console.log(this.guigeArr)
				if (guigeArr.length > 0) {
					this.data = guigeArr
				} else {
					this.data = [{
						'price': '',
						'th_attr_name': '',
						'attr_name': '',
						'children': []
					}]
				}
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			getSpecDetail() {
				var that = this
				var param = {
					'product_id': that.productID
				}
				this.http.sendRequest('MerchantStoreProductAttr.Read', param).then(function(data) {
					if (data.code == 0) {
						console.log(data.info[0])
						var list = data.info[0]
						if(list.length == 0){
							console.log(121)
							that.data = [{
								'price': '',
								'th_attr_name': '',
								'attr_name': '',
								'children': []
							}]
						}else{
							console.log(1222)
							for (let i = 0; i < list.length; i++) {
								var dic = list[i]
								var attrDic = {
									'id': dic.id,
									'price': dic.price,
									'th_attr_name': dic.th_attr_name,
									'attr_name': dic.attr_name,
									'children': []
								}
								that.data.push(attrDic)
							}
						}
						
						console.log(that.data)
					}
				})
			},
			save() {
				// console.log(this.productID)
				console.log(this.data)
				var that = this
				var param = {}
				var url = ''
				var addArr = []
				var modifyArr = []
				for (let i = 0; i < that.data.length; i++) {
					var dic = that.data[i]
					if (dic.id > 0) {
						modifyArr.push(dic)
						// url = 'MerchantStoreProductAttr.Update'
						// param = {'product_id':this.productID,
						// 		 'attr':JSON.stringify(that.data[i])}
						// this.http.sendRequest('MerchantStoreProductAttr.Update',param).then(function(data) {
						// 	if(data.code == 0){
						// 		uni.$emit('addSpecDone', that.data)
						// 	}
						// })
					} else {
						// url = 'MerchantStoreProductAttr.Save'
						addArr.push(dic)

					}
				}

				if (that.productID > 0) {
					if (modifyArr.length > 0) {
						param = {
							'product_id': this.productID,
							'attr': JSON.stringify(modifyArr)
						}
						this.http.sendRequest('MerchantStoreProductAttr.Update', param).then(function(data) {
							if (data.code == 0) {
								uni.$emit('addSpecDone', that.data)
								console.log(222)
								that.uploadNewData(addArr)
							}
						})
					} else {
						that.uploadNewData(addArr)

					}

					// if(that.data.length == 1){
					// 	param = {'product_id':this.productID,
					// 			 'attr':JSON.stringify(that.data[0])}
					// }else{
					// 	param = {'product_id':this.productID,
					// 			 'attr':JSON.stringify(that.data[0])}
					// }
					// console.log(param)
					// this.http.sendRequest('MerchantStoreProductAttr.Update',param).then(function(data) {
					// 	if(data.code == 0){
					// 		uni.$emit('addSpecDone', that.data)
					// 		that.back()
					// 	}
					// })
				} else {
					uni.$emit('addSpecDone', that.data)
					that.back()
				}
			},
			uploadNewData(addArr) {
				var that = this
				if (addArr.length > 0) {
					var param = {
						'product_id': this.productID,
						'attr': JSON.stringify(addArr)
					}
					this.http.sendRequest('MerchantStoreProductAttr.Save', param).then(function(data) {
						if (data.code == 0) {
							uni.$emit('addSpecDone', that.data)
							that.back()
						}
					})
				} else {
					console.log(111)
					uni.$emit('addSpecDone', that.data)
					this.back()
				}
			},
			inputPrice(e) {
				var dic = this.data[e.target.id]
				if (e.detail.value.length > 0) {
					dic.price = e.detail.value
				} else {
					dic.price = '0'
				}
			},
			inputSpec(e) {
				var dic = this.data[e.target.id]
				if (this.isChinese) {
					dic.attr_name = e.detail.value
				} else {
					dic.th_attr_name = e.detail.value
				}
			},
			addSpec() {
				this.data.push({
					'price': '',
					'th_attr_name': '',
					'attr_name': '',
					'children': []
				})

			},
			deleteSpec(index) {
				var that = this
				uni.showModal({
					title: '',
					content: that.i18n.shop.deletetip,
					success: function(res) {
						if (res.confirm) {
							that.delete(index)
						} else if (res.cancel) {

						}
					}
				});
			},
			delete(index) {
				console.log(index,this.productID)
				var that = this
				if (this.productID > 0) {
					var dic = that.data[index]
					console.log(dic)
					var param = {
						'product_attr_id': dic.id
					}
					var that = this
					this.http.sendRequest('MerchantStoreProductAttr.Delete', param).then(function(data) {
						if (data.code == 0) {
							that.data.splice(index, 1)
							if (that.data.length == 0) {
								that.data = [{
									'price': '',
									'th_attr_name': '',
									'attr_name': '',
									'children': []
								}]
							}
						}
					})
				} else {
					this.data.splice(index, 1)
					if (this.data.length == 0) {
						this.data = [{
							'price': '',
							'th_attr_name': '',
							'attr_name': '',
							'children': []
						}]
					}
				}
			},
			changeChinese() {
				this.isChinese = true
			},
			changeTh() {
				this.isChinese = false
			}
		}
	}
</script>

<style>
	.inputBackView {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		margin-top: 10px;
		border-bottom: 1px solid #E6E6E6;
	}

	.inputBackView2 {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		border-bottom: 1px solid #E6E6E6;
		justify-content: center;
	}

	.inputBackView3 {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		justify-content: space-around;
	}

	.inputV {
		height: 44px;
		line-height: 44px;
		top: 0;
		font-size: 14px;
		margin-left: 15px;
		margin-right: 15px;
		flex: 1;
	}

	.right {
		position: absolute;
		right: 20px;
		font-size: 16px;
		text-align: left;
		color: #6f6f6f;
	}

	.title2 {
		font-size: 14px;
		text-align: left;
		color: #181818;
		/* line-height: 14px; */
		margin-left: 15px;
	}

	.delete {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		font-size: 16px;
		text-align: center;
		color: #f42424;
		line-height: 44px;
		justify-content: center;
	}

	.add {
		margin-top: 10px;
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		font-size: 16px;
		text-align: center;
		color: #00C1DE;
		line-height: 44px;
		justify-content: center;
	}

	.leftbtn {
		width: 160px;
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
