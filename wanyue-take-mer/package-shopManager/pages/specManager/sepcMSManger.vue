<template>
	<!-- 规格 -->
	<view v-if="data.length > 0">
		<wybar @clickLeft="back" :titleText="i18n.shop.specM" :rightText="i18n.mine.save" @clickRight="save"></wybar>

		<scroll-view scroll-y="true" style="width: 100%;background-color: #FAFAFA;"
			:style="'height:' + scrollHeight + 'px;'">
			<view class="left_title">
				主规格
			</view>
			<view class="inputBackView">
				<view class="title2">规格名称</view>
				<input type="text" id="0" :maxlength="10" placeholder="如份量" :value="data[0].attr_name"
					class="inputV" @input="inputSpec" />
			</view>
			<view class="inputBackView">
				<view class="title2">规格参数</view>

				<view class="class_input" @click="inputDialogToggle(data[0].children[0].attr_name,0,0)"
					v-if="data[0].children && data[0].children[0].attr_name != ''">
					{{data[0].children[0].attr_name}}
				</view>
				<view class="class_input" style="color: #969696;" @click="inputDialogToggle('',0,0)" v-else>
					请填写
				</view>
			</view>

			<view class="left_title">
				其他规格
			</view>
			<view v-for="(item,index) in data" :key="index" v-if="index > 0" style="width: 100%;margin-bottom: 10px;">
				<view class="inputBackView">
					<view class="title2">规格名称</view>
					<input type="text" :id="index" :value="item.attr_name" placeholder="如辣度" class="inputV"
						@input="inputSpec" />
				</view>
				<view class="inputBackView">
					<view class="title2">规格参数</view>
					<view class="class_input" v-for="(c,j) in item.children" :key="j" v-if="c.attr_name != ''"
						@click="inputDialogToggle(c.attr_name,index,j)">
						{{c.attr_name}}
					</view>
					<view class="class_input_add" @click="doAddCanshu(index)"
						v-if="item.children.length > 0 && item.children[item.children.length-1].attr_name != ''">
						+
					</view>
					<view class="class_input" style="color: #969696;"
						@click="inputDialogToggle('',index,item.children.length-1)" v-else>
						请填写
					</view>
				</view>
				<view class="delete" @click="deleteSpec(index)">{{i18n.shop.deleteSpec}}</view>
			</view>
			<view class="add" @click="addSpec()">{{i18n.shop.addTxt}}</view>
		</scroll-view>
		<view>
			<!-- 输入框示例 -->
			<uni-popup ref="inputDialog" type="dialog">
				<uni-popup-dialog ref="inputClose" mode="input" title="输入规格参数" :value="curContent" placeholder="请输入规格参数"
					@confirm="dialogInputConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>
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
				newSpecArr: [],
				mainName: '',
				mainCanshu: '',
				zhucanshu: [],
				noPut: true,
				curContent: '',
				changeIndex: 0,
				changeChildrenIndex: 0
			}
		},
		onLoad(option) {
			var res = uni.getSystemInfoSync()
			// console.log(res.safeArea.bottom)
			this.navHeight = 64 + res.statusBarHeight
			this.scrollHeight = res.windowHeight - this.navHeight
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
							'is_main': 1,
							'price': '',
							'th_attr_name': '',
							'attr_name': '',
							'children': [{
								'is_main': 1,
								'attr_name': '',
								'price': '',
								'th_attr_name': ''
							}]
						},
						{
							'is_main': 0,
							'price': '',
							'th_attr_name': '',
							'attr_name': '',
							'children': [{
								'is_main': 0,
								'attr_name': '',
								'price': '',
								'th_attr_name': ''
							}]
						}
					]
				}
			}
		},
		methods: {
			doAddCanshu(index) {
				this.data[index].children.push({
					'is_main': 0,
					'price': '',
					'attr_name': '',
					'th_attr_name': ''
				})
			},
			inputDialogToggle(text, index, cix) {
				this.changeIndex = index
				this.changeChildrenIndex = cix
				this.curContent = text
				console.log(this.changeIndex, this.changeChildrenIndex, text)
				this.$refs.inputDialog.open()
			},
			dialogInputConfirm(val) {
				console.log(val)

				this.data[this.changeIndex].children[this.changeChildrenIndex].attr_name = val
				this.data[this.changeIndex].children[this.changeChildrenIndex].th_attr_name = val
				
				console.log(this.data)

			},
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
						if (list.length == 0) {
							console.log(121)
							that.data = [{
									'is_main': 1,
									'price': '',
									'th_attr_name': '',
									'attr_name': '',
									'children': [{
										'is_main': 1,
										'attr_name': '',
										'price': '',
										'th_attr_name': ''
									}]
								},
								{
									'is_main': 0,
									'price': '',
									'th_attr_name': '',
									'attr_name': '',
									'children': [{
										'is_main': 0,
										'attr_name': '',
										'price': '',
										'th_attr_name': ''
									}]
								}
							]
						} else if (list.length == 1) {
							console.log(121)
							that.data = that.data.concat(list)
							that.data.push({
								'is_main': 0,
								'price': '',
								'th_attr_name': '',
								'attr_name': '',
								'children': [{
									'is_main': 0,
									'attr_name': '',
									'price': '',
									'th_attr_name': ''
								}]
							})
						} else {
							that.data = that.data.concat(list)
							// console.log(1222)
							// for (let i = 0; i < list.length; i++) {
							// 	var dic = list[i]
							// 	var attrDic = {
							// 		'id': dic.id,
							// 		'price': dic.price,
							// 		'th_attr_name': dic.th_attr_name,
							// 		'attr_name': dic.attr_name,
							// 		'children': []
							// 	}
							// 	that.data.push(attrDic)
							// }
						}

						console.log(that.data)
					}
				})
			},
			save() {
				// console.log(this.productID)
				console.log(this.data)
				var that = this
				var submitList = []
				submitList = submitList.concat(that.data)
				var param = {}
				var url = ''
				var addArr = []
				var modifyArr = []
				for (let i = 0; i < submitList.length; i++) {
					var dic = submitList[i]
					if(dic.children.length > 0){
						var lastobj = dic.children[dic.children.length - 1]
						if(lastobj.attr_name == ''){
							dic.children.pop(lastobj)
						}
					}
					if(dic.attr_name == '' || dic.children.length == 0){
						uni.showToast({
							title:'请正确输入规格名称、参数',
							icon:'none'
						})
					}
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
								uni.$emit('addSpecDone', submitList)
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
					uni.$emit('addSpecDone', submitList)
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
				// if (this.isChinese) {
					dic.attr_name = e.detail.value
				// } else {
					dic.th_attr_name = e.detail.value
				// }
			},
			addSpec() {
				this.data.push({
					'is_main': 0,
					'price': '',
					'th_attr_name': '',
					'attr_name': '',
					'children': [{
						'is_main': 0,
						'attr_name': '',
						'price': '',
						'th_attr_name': ''
					}]
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
				console.log(index, this.productID)
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
		min-height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		border-bottom: 1px solid #E6E6E6;
		flex-wrap: wrap;
	}

	.left_title {
		color: #6F6F6F;
		/* width: 100%; */
		height: 50px;
		line-height: 50px;
		margin-left: 15px;
		font-size: 14px;
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

	.class_input {
		height: 28px;
		line-height: 28px;
		font-size: 14px;
		margin-left: 15px;
		border-radius: 4px;
		border: 1px solid #E6E6E6;
		padding-left: 20px;
		padding-right: 20px;
		margin-bottom: 8px;
		margin-top: 8px;
	}

	.class_input_add {
		height: 28px;
		width: 28px;
		text-align: center;
		line-height: 24px;
		font-size: 20px;
		margin-left: 15px;
		border-radius: 4px;
		border: 1px solid #E6E6E6;
		margin-bottom: 8px;
		margin-top: 8px;
		color: #ABABAB;
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
