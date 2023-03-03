<template>
	<!-- 服务规格+属性 -->
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
				<view class="inputBackView1">
					<view class="title2">规格参数</view>
					<view class="" v-if="isChinese">
						<view class="class_input" style="color: #969696;" @click="inputDialogToggle('',index,-1)"
							v-if="item.attr_name == ''">
							请填写
						</view>
						<view class="class_input" style="color: #969696;"
							@click="inputDialogToggle(item.attr_name,index,-1)" v-else>
							{{item.attr_name}}
						</view>
					</view>
					<view class="" v-else>
						<view class="class_input" style="color: #969696;" @click="inputDialogToggle('',index,-1)"
							v-if="item.th_attr_name == ''">
							请填写
						</view>
						<view class="class_input" style="color: #969696;"
							@click="inputDialogToggle(item.th_attr_name,index,-1)" v-else>
							{{item.th_attr_name}}
						</view>
					</view>
					<!-- <input type="text" :id="index" :value="isChinese?item.attr_name:item.th_attr_name"
						:placeholder="i18n.shop.shuxinglizi" class="inputV" @input="inputSpec" /> -->
				</view>
				<block v-if="item.children.length==0">
					<view class="inputBackView2">
						<view class="title2">{{i18n.shop.price}}</view>
						<input :id="index" type="number" :value="item.price" :placeholder="i18n.shop.write" class="inputV"
							@input="inputSpecPrice" />
						<view class="right">{{i18n.index.moneyUnit}}</view>
					</view>
				</block>
				<view v-for="(c,j) in item.children" :key="j">
					<view class="inputBackView">
						<view class="title2">属性参数</view>
						<view class="" v-if="isChinese">
							<view class="class_input" style="color: #969696;" @click="inputDialogToggle('',index,j)"
								v-if="c.attr_name == ''">
								请填写
							</view>
							<view class="class_input" style="color: #969696;"
								@click="inputDialogToggle(c.attr_name,index,j)" v-else>
								{{c.attr_name}}
							</view>
						</view>
						<view class="" v-else>
							<view class="class_input" style="color: #969696;" @click="inputDialogToggle('',index,j)"
								v-if="c.th_attr_name == ''">
								请填写
							</view>
							<view class="class_input" style="color: #969696;"
								@click="inputDialogToggle(c.th_attr_name,index,j)" v-else>
								{{c.th_attr_name}}
							</view>
						</view>
						<!-- <input :id="[index,j]" type="text" :value="isChinese?item.attr_name:item.th_attr_name"
							:placeholder="i18n.shop.tipshuxing" class="inputV2" @input="inputShuxing" /> -->
					</view>
					<view class="inputBackView2">
						<view class="title2">{{i18n.shop.price}}</view>
						<input :id="[index,j]" type="number" :value="c.price" :placeholder="i18n.shop.write"
							class="inputV" @input="inputPrice" />
						<view class="right">{{i18n.index.moneyUnit}}</view>
					</view>
				</view>
				<view v-if="item.children.length>0" class="add" @click="addShuxing(index)">{{i18n.shop.addShuxing}}
				</view>
				<view class="delete" @click="deleteSpec(index)">{{i18n.shop.deleteSpec}}</view>
			</view>
			<view class="add2" @click="addSpec()">添加规格</view>
		</scroll-view>
		<view>
			<!-- 输入框示例 -->
			<uni-popup ref="inputDialog" type="dialog">
				<uni-popup-dialog ref="inputClose" mode="input" :title="popTitle" :value="curContent" :placeholder="popPlaceHolder"
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
				shuxing: '',
				curContent: '',
				changeIndex: 0,
				changeChildrenIndex: 0,
				popTitle:'',
				popPlaceHolder:''
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
				console.log(111)
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
						'children': [{
							'price': '',
							'th_attr_name': '',
							'attr_name': '',
						}]
					}]
				}


			}
		},
		methods: {
			inputDialogToggle(text, index, cix) {
				this.changeIndex = index
				this.changeChildrenIndex = cix
				this.curContent = text
				if(this.changeChildrenIndex == -1){
					this.popTitle = '输入规格参数'
					this.popPlaceHolder = '请输入规格参数'
				}else{
					this.popTitle = '输入属性参数'
					this.popPlaceHolder = '请输入属性参数'
				}
				console.log(this.changeIndex, this.changeChildrenIndex, text)
				this.$refs.inputDialog.open()
			},
			dialogInputConfirm(val) {
				console.log(val)
				if(this.changeChildrenIndex == -1){
					
					if (this.isChinese) {
						this.data[this.changeIndex].attr_name = val
					} else {
						this.data[this.changeIndex].th_attr_name = val
					}
				}else{
					if (this.isChinese) {
						this.data[this.changeIndex].children[this.changeChildrenIndex].attr_name = val
					} else {
						this.data[this.changeIndex].children[this.changeChildrenIndex].th_attr_name = val
					}
				}
				
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
						for (let i = 0; i < list.length; i++) {
							var dic = list[i]
							var attrDic = {
								'id': dic.id,
								'price': dic.price,
								'th_attr_name': dic.th_attr_name,
								'attr_name': dic.attr_name,
								'children': dic.children
							}
							that.data.push(attrDic)
						}
						console.log(that.data)
					}
				})
			},
			save() {
				console.log(this.productID)
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
						that.http.sendRequest('MerchantStoreProductAttr.Update', param).then(function(data) {
							console.log(data)
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
						'product_id': that.productID,
						'attr': JSON.stringify(addArr)
					}
					
					that.http.sendRequest('MerchantStoreProductAttr.Save', param).then(function(data) {
						if (data.code == 0) {
							uni.$emit('addSpecDone', that.data)
							that.back()
						}else{
							console.log(data)
						}
					})
				} else {
					console.log(111)
					uni.$emit('addSpecDone', that.data)
					this.back()
				}
			},
			addShuxing(index) {
				var dic = this.data[index]
				var subDic = {
					'price': '',
					'th_attr_name': '',
					'attr_name': ''
				}
				dic.children.push(subDic)
			},
			inputPrice(e) {
				console.log(e.target.id, e.detail.value)
				var index = e.target.id[0]
				// console.log(index)
				var dic = this.data[index]
				// console.log(dic)
				var subindex = e.target.id[2]
				// console.log(subindex)
				var subDic = dic.children[subindex]
				console.log(subDic)
				if (e.detail.value.length > 0) {
					subDic.price = e.detail.value
				} else {
					subDic.price = '0'
				}
				console.log(subDic)
				// if (this.isAdd) {
				// 	var dic = this.data[e.target.id]
				// 	if (e.detail.value.length > 0) {
				// 		dic.price = e.detail.value
				// 	} else {
				// 		dic.price = '0'
				// 	}
				// }
			},
			inputSpec(e) {
				var dic = this.data[e.target.id]
				if (this.isChinese) {
					dic.attr_name = e.detail.value
				} else {
					dic.th_attr_name = e.detail.value
				}
			},
			inputSpecPrice(e) {
				var dic = this.data[e.target.id]
				if (e.detail.value.length > 0) {
					dic.price = e.detail.value
				} else {
					dic.price = '0'
				}
			},
			inputShuxing(e) {
				console.log(e.target.id)
				var index = e.target.id[0]
				// console.log(index)
				var dic = this.data[index]
				// console.log(dic)
				var subindex = e.target.id[2]
				// console.log(subindex)
				var subDic = dic.children[subindex]
				// console.log(subDic)
				if (this.isChinese) {
					subDic.attr_name = e.detail.value
				} else {
					subDic.th_attr_name = e.detail.value
				}
				// console.log(subDic)
			},
			addSpec() {
				this.data.push({
					'price': '',
					'th_attr_name': '',
					'attr_name': '',
					'children': [{
						'price': '',
						'th_attr_name': '',
						'attr_name': '',
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
				var that = this
				if (this.productID > 0) {
					var dic = that.data[index]
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
									'children': [{
										'price': '',
										'th_attr_name': '',
										'attr_name': '',
									}]
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
							'children': [{
								'price': '',
								'th_attr_name': '',
								'attr_name': '',
							}]
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
	.inputBackView3 {
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

	.inputBackView {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		border-bottom: 1px solid #E6E6E6;
	}

	.inputBackView1 {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		border-bottom: 1px solid #E6E6E6;
		margin-top: 10px;
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

	.inputV {
		height: 44px;
		line-height: 44px;
		top: 0;
		font-size: 14px;
		margin-left: 15px;
		margin-right: 15px;
		flex: 1;
	}

	.inputV2 {
		height: 20px;
		border-radius: 10px;
		border: 1px solid #E6E6E6;
		line-height: 20px;
		top: 0;
		font-size: 14px;
		margin-left: 15px;
		text-align: center;


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
		margin-right: 10px;
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
		border-bottom: 1px solid #E6E6E6;
	}

	.add2 {
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
		border-bottom: 1px solid #E6E6E6;
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
</style>
