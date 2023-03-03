<template>
	<view>
		<wybar @clickLeft="back" :titleText="i18n.shop.addgoods" :rightText="rightTitle" @clickRight="save"></wybar>
		<scroll-view scroll-y="true" :style="'height:' + scrollHeight + 'px;'"
			style="background-color: #F5F5F5; height: 100%;width: 100%;" class="column">
			<view style="height: 44px;">
				<view class="title">{{i18n.shop.xinxi}}</view>
			</view>
			<!-- 图片 -->
			<view class="picView row">
				<view class="title2">{{i18n.shop.pics}}</view>
				<image v-if="picsArr.length == 0" src="../../static/addpic@2x.png" mode="aspectFit" class="pic"
					@click="addPic()"></image>
				<view v-else v-for="(item,index) in newPicsArr" :key="index">
					<image :src="item" mode="aspectFill" class="pic"></image>
				</view>
				<image v-if="picsArr.length > 0" src="../../../static/ads-seld-right.png" mode="aspectFit"
					class="rightArrow" @click="addPic()"></image>
			</view>
			<!-- 价格 -->
			<view class="inputBackView">
				<view class="title2">{{i18n.shop.price}}</view>
				<view v-show="priceTxt.length>0" style="font-size: 13px;margin-left: 15px;color:#181818 ;">
					{{i18n.index.moneyFuhao}}
				</view>
				<input type="digit" :value="priceTxt" :placeholder="i18n.shop.write" class="inputV"
					:style="priceTxt.length>0?'margin-left:2px;':'margin-left:15px;'" @input="inputprice" />
			</view>
			
			<!-- 商品名称 -->
			<view class="inputBackView">
				<view class="title2">{{i18n.shop.goodsname}}</view>
				<input type="text" :value="isChinese?name_zh:name_th" :placeholder="i18n.shop.limit" maxlength="20"
					class="inputV" @input="inputgoodsName" />
			</view>
			<!-- 商品说明 -->
			<view class="inputBackView">
				<view class="title2">{{i18n.shop.shuoming}}</view>
				<input type="text" :value="desc" :placeholder="i18n.shop.write" class="inputV"
					@input="inputgoodsDesc" />
			</view>
			<!-- 平台分类 -->
			<view class="inputBackView">
				<view class="title2">{{i18n.shop.fenlei2}}</view>
				<input type="text" :value="goodsfenlei" :placeholder="i18n.shop.fenleitip" class="inputV"
					:disabled="true" />
				<!-- <image src="../../../static/ads-seld-right.png" mode="aspectFit" class="rightArrow"
					@click="addGoodsFenlei()"></image> -->
			</view>
			<!-- 店铺分类 -->
			<view class="inputBackView">
				<view class="title2">{{i18n.shop.shopfenlei}}</view>
				<input type="text" :value="shopfenlei" :placeholder="i18n.shop.fenleitip" class="inputV"
					:disabled="true" />
				<image src="../../../static/ads-seld-right.png" mode="aspectFit" class="rightArrow"
					@click="addShopFenlei()"></image>
			</view>
			<!-- 商品规格 分为有属性和无属性-->
			<block v-if="showSpec">
				<view class="column" style="width: 100%;" v-if="firstPlatformID == 1">
					<view style="height: 44px;">
						<view class="title">{{i18n.shop.guige}}</view>
					</view>
					<view class="row"
						style="height: 44px;background-color: #FFF;width: 100%;margin-bottom: 10px;align-items: center;padding-left: 15px;">
						<uni-data-checkbox selectedColor="#00C1DE" selectedTextColor="#333" v-model="guigeindex"
							:localdata="youwuguige"></uni-data-checkbox>
					</view>
					<!-- <block v-if="guigeArr.length > 0 && guigeindex == 1">
						<view v-for="(item,index) in guigeArr" :key="index">
							{{item.attr_name}}-
							<block v-if="item.children.length>0">
								<view v-for="(subitem,index) in item.children" :key="index" class="inputBackView">
									<block v-if="isChinese">
										<view class="title2">{{subitem.attr_name}}</view>
									</block>
									<block v-else>
										<view class="title2">{{item.th_attr_name}}-{{subitem.th_attr_name}}</view>
									</block>
									<view class="rightTxt">{{subitem.price}}</view>
								</view>
							</block>
							<block v-else>
								<view class="inputBackView">
									<block v-if="isChinese">
										<view class="title2">{{item.attr_name}}</view>
									</block>
									<block v-else>
										<view class="title2">{{item.th_attr_name}}</view>
									</block>
									<view class="rightTxt">{{item.price}}</view>
								</view>

							</block>

						</view>
						<view class="guanlibtn" @click="guige(0)">{{i18n.shop.guigeM}}</view>
					</block> -->
					<block v-if="guigeArr.length > 0 && guigeindex == 1">
						<view v-for="(item,index) in guigeArr" :key="index" class="inputBackView">
							{{item.attr_name}}-
							<text v-for="(subitem,j) in item.children" :key="j">{{subitem.attr_name}}<span v-if="j < item.children.length-1">、</span></text>
							
						</view>
						<view class="guanlibtn" @click="guige(0)">{{i18n.shop.guigeM}}</view>
					</block>
					<block v-if="guigeArr.length == 0 && guigeindex != 0">
						<view class="inputBackView" @click="guige(1)">
							<image src="../../static/add@2x.png" mode="aspectFit"
								style="width: 18px;height: 18px;margin-left: 13px;"></image>
							<view
								style="margin-left: 10px;color: #00c1de;font-size: 14px;height: 44px;line-height: 44px;">
								{{i18n.shop.addguige}}
							</view>
						</view>
					</block>
				</view>
				<view class="column" style="width: 100%;" v-else>
					<view style="height: 44px;">
						<view class="title">{{i18n.shop.guige}}</view>
					</view>
					<block v-if="guigeArr.length > 0">
						<view v-for="(item,index) in guigeArr" :key="index">
							<block v-if="item.children.length>0">
								<view v-for="(subitem,index) in item.children" :key="index" class="inputBackView">
									<block v-if="isChinese">
										<view class="title2">{{item.attr_name}}-{{subitem.attr_name}}</view>
									</block>
									<block v-else>
										<view class="title2">{{item.th_attr_name}}-{{subitem.th_attr_name}}</view>
									</block>
									<view class="rightTxt">{{subitem.price}}</view>
								</view>
							</block>
							<block v-else>
								<view class="inputBackView">
									<block v-if="isChinese">
										<view class="title2">{{item.attr_name}}</view>
									</block>
									<block v-else>
										<view class="title2">{{item.th_attr_name}}</view>
									</block>
									<view class="rightTxt">{{item.price}}</view>
								</view>

							</block>

						</view>
						<view class="guanlibtn" @click="guige(0)">{{i18n.shop.guigeM}}</view>
					</block>
					<block v-if="guigeArr.length == 0">
						<view class="inputBackView" @click="guige(1)">
							<image src="../../static/add@2x.png" mode="aspectFit"
								style="width: 18px;height: 18px;margin-left: 13px;"></image>
							<view
								style="margin-left: 10px;color: #00c1de;font-size: 14px;height: 44px;line-height: 44px;">
								{{i18n.shop.addguige}}
							</view>
						</view>
					</block>
				</view>
			</block>
			<!-- 库存 -->
			<block v-if="showKucun">
				<view style="height: 44px;">
					<view class="title">{{i18n.shop.kucuntitle}}</view>
				</view>
				<view class="inputBackView">
					<view class="title2">{{i18n.shop.nowkucun}}</view>
					<input type="number" :value="nowkucun" :placeholder="i18n.shop.write" class="inputV"
						@input="inputNowkucun" />
					<view class="man" @click="zhiman()"
						:style="nowkucunSelectedIndex==1?'color:#00C1DE;':'color: #181818;'">{{i18n.shop.enough}}</view>
					<view class="guqing" @click="guqing()"
						:style="nowkucunSelectedIndex==0?'color:#00C1DE;':'color: #181818;'">{{i18n.shop.guqing}}</view>
				</view>
				<view class="inputBackView">
					<view class="title2">{{i18n.shop.maxkucun}}</view>
					<input type="number" :value="maxkucun" :placeholder="i18n.shop.write" class="inputV"
						@input="maxKucun" />
				</view>
				<view class="inputBackView">
					<view class="title2">{{i18n.shop.kucunupdate}}</view>
					<switch :checked="isUpdateKucun" @change="kucunupdate()" class="right_switch" color="#53D76A"
						style="transform:scale(0.7) ;" />
				</view>
			</block>
			<!-- 设置推荐 -->
			<view class="tuijian">
				<view class="title2">{{i18n.shop.tuijian}}</view>
				<switch :checked="isRecommend" @change="tuijian()" class="right_switch" color="#53D76A"
					style="transform:scale(0.7) ;" />
			</view>
			<!-- 删除 -->
			<view v-show="productID>0" class="delete" @click="deleteGoods()">{{i18n.shop.delete}}</view>
			<view style="width: 100%;height: 50px;"></view>
		</scroll-view>
		<!-- 平台分类 -->
		<view v-show="showPlatformFenlei" class="uni-mask-nvue">
			<view class="bg">
				<view style="margin-top: 15px;margin-left: 15px; height: 20px;line-height: 20px;color: #181818;">
					{{i18n.shop.fenlei2}}
				</view>
				<view class="fenleibackview" @click="showFirstClass()">
					<view style="font-size: 15px;margin-left: 15px; flex:1;">{{firstPlatformClass}}</view>
					<!-- <image v-if="showFenlei1" src="../../../static/mine/mine-uparrow@2x.png" mode="aspectFit"
						class="rightClassArrow"></image> -->
					<!-- <image v-else src="../../../static/mine/mine-downarrow@2x.png" mode="aspectFit"
						class="rightClassArrow"></image> -->
				</view>
				<view class="fenleibackview" @click="showSecondClass()">
					<view style="font-size: 15px;margin-left: 15px;flex:1;">{{secondPlatformClass}}</view>
					<image v-if="showSecondFenlei" src="../../../static/mine/mine-uparrow@2x.png" mode="aspectFit"
						class="rightClassArrow"></image>
					<image v-else src="../../static/mine-downarrow@2x.png" mode="aspectFit" class="rightClassArrow">
					</image>
				</view>
				<view v-if="showFenlei1" class="firstclasslist" style="margin-top: 95px;">
					<scroll-view scroll-y="true" :style="'height:' + classScrollHeight + 'px;'"
						style="background-color: white;width: 100%;" class="column">
						<view v-for="(item,index) in firstClassArr" :key="index" @click="firstClassItemClick(item)">
							<text>{{item.name}}</text>
						</view>
					</scroll-view>
				</view>
				<view v-if="showSecondFenlei" class="firstclasslist" style="margin-top: 150px;">
					<scroll-view scroll-y="true" :style="'height:' + classScrollHeight + 'px;'"
						style="background-color: white;width: 100%;" class="column">
						<view v-for="(item,index) in secondClassArr" :key="index" @click="secondClassItemClick(item)">
							<text>{{item.name}}</text>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<!-- 店铺分类 -->
		<view v-show="isShowShopFenlei" @click="dohidefenlei()" class="uni-mask-nvue">
			<view class="bg" @click.stop="nothing()">
				<view style="margin-top: 15px;margin-left: 15px; color: #181818;">
					{{i18n.shop.shopfenlei}}
				</view>
				<view class="fenleibackview">
					<view style="font-size: 15px;margin-left: 15px;flex:1;">{{shopclassTxt1}}</view>
					<image v-if="isShowShopClass1" src="../../../static/mine/mine-uparrow@2x.png" mode="aspectFit"
						class="rightClassArrow"></image>
					<image v-else src="../../static/mine-downarrow@2x.png" mode="aspectFit" class="rightClassArrow"
						@click.stop="showShopClass1()"></image>
				</view>
				<block v-if="firstPlatformID != 3">
					<view class="fenleibackview">
						<view style="font-size: 15px;margin-left: 15px;">{{shopclassTxt2}}</view>
						<image v-if="isShowShopClass2" src="../../../static/mine/mine-uparrow@2x.png" mode="aspectFit"
							style="width: 24px;height: 24px;position: absolute;right: 40px;"></image>
						<image v-else src="../../static/mine-downarrow@2x.png" mode="aspectFit"
							style="width: 24px;height: 24px;position: absolute;right: 40px;"
							@click.stop="showShopClass2()">
						</image>
					</view>
				</block>

				<view v-if="isShowShopClass1" class="firstclasslist" style="margin-top: 95px;">
					<scroll-view scroll-y="true" :style="'height:' + classScrollHeight + 'px;'"
						style="background-color: white;width: 100%;" class="column">
						<view v-for="(item,index) in shopclassArr1" :key="index"
							@click.stop="shopClassItemClick1(item)">
							<text>{{item.use_name}}</text>
						</view>
					</scroll-view>
				</view>
				<view v-if="isShowShopClass2" class="firstclasslist" style="margin-top: 150px;">
					<scroll-view scroll-y="true" :style="'height:' + classScrollHeight + 'px;'"
						style="background-color: white;width: 100%;" class="column">
						<view v-for="(item,index) in shopclassArr2" :key="index"
							@click.stop="shopClassItemClick2(item)">
							<text>{{item.use_name}}</text>
						</view>
					</scroll-view>
				</view>
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
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		onReady() {
			var res = uni.getSystemInfoSync()
			//console.log(res.safeArea.bottom)
			this.navHeight = 64 + res.statusBarHeight
			this.scrollHeight = res.windowHeight - this.navHeight

		},
		data() {
			return {
				scrollHeight: 0,
				navHeight: 0,
				picsArr: [],
				priceTxt: '',
				name_zh: '',
				name_th: '',
				goodsfenlei: '',
				guigeArr: [],
				isedit: false,
				rightTitle: '',
				desc: '',
				isChinese: true,
				isRecommend: false,
				isUpdateKucun: false,
				maxkucun: '',
				nowkucun: '',
				showPlatformFenlei: false,
				showFenlei1: false,
				showSecondFenlei: false,
				firstClassArr: [],
				secondClassArr: [],
				firstPlatformClass: '',
				secondPlatformClass: '',
				firstPlatformID: '',
				shopfenlei: '',
				isShowShopFenlei: false,
				isShowShopClass1: false,
				isShowShopClass2: false,
				shopclassArr1: [],
				shopclassArr2: [],
				shopclassTxt1: '',
				shopclassTxt2: '',
				shopTypeID: '',
				classScrollHeight: 200,
				nowkucunSelectedIndex: -1,
				productID: 0,
				newPicsArr: [],
				showKucun: false,
				showSpec: true,
				secondPlatformID: '',
				saveBtnClick: false,
				youwuguige: [{
					text: '无规格',
					value: 0
				}, {
					text: '有规格',
					value: 1
				}],
				guigeindex: 0
			}
		},
		onShow() {
			var that = this
			var param = {
				'level': '1',
				'is_tree': '0',
				'id': '0'
			}
			//平台分类
			that.http.sendRequest('Users.GetMerchantTypeList', param).then(data => {
				that.firstClassArr = data.info[0]
				console.log(that.firstClassArr) 
			})
			//店铺分类
			that.http.sendRequest('MerchantStoreType.Index', param).then(data => {
				that.shopclassArr1 = data.info[0]
				console.log(that.shopclassArr1)
			})
		},
		onLoad(e) {
			//商品图片
			uni.$on('goodsPics', (param) => {
				console.log("-$on--goodsPics->",param)
				this.dealwithPicsArr(param)
			})
			var that = this
			var dic = uni.getStorageSync('shopAddress')
			console.log(dic)
			if (!dic || !dic.address) {
				var that = this
				uni.showModal({
					title: '',
					content: that.i18n.postorder.noaddresstip,
					success: function(res) {
						if (res.confirm) {
							uni.navigateTo({
								url: '../../mine/editProfile/editProfile'
							})
						} else if (res.cancel) {
							uni.navigateBack()
						}
					}
				});
				return
			}

			if (e.productID && e.productID > 0) {
				//编辑
				// that.isedit = true
				that.rightTitle = that.i18n.mine.save
				that.productID = e.productID
				that.getGoodsDetail()
			} else {
				//新加商品、服务等
				// that.isedit = false
				that.rightTitle = that.i18n.shop.publish
			}
			//配置平台分类
			var shopinfo = uni.getStorageSync('shopinfo')
			console.log("--->",shopinfo)
			this.firstPlatformID = shopinfo.top_type_id
			this.secondPlatformID = shopinfo.type_id
			// console.error(firstPlatformID)
			this.goodsfenlei = shopinfo.type_name
			if (this.firstPlatformID == 5 || this.firstPlatformID == 6 || this.firstPlatformID == 7) {
				this.showKucun = true
				this.showSpec = false
			} else if (this.firstPlatformID == 8) {
				//家政不需要规格和库存
				this.showKucun = false
				this.showSpec = false
			} else {
				this.showKucun = false
				this.showSpec = true
			}
			var param = {
				'level': '2',
				'is_tree': '1',
				'id': this.firstPlatformID
			}
			that.http.sendRequest('Users.GetMerchantTypeList', param).then(data => {
				that.secondClassArr = data.info[0]
			})
			
			var that = this
			var param = {
				'level': '1',
				'is_tree': '0',
				'id': '0'
			}
			//平台分类
			that.http.sendRequest('Users.GetMerchantTypeList', param).then(data => {
				that.firstClassArr = data.info[0]
				console.log(that.firstClassArr) 
			})
			//店铺分类
			that.http.sendRequest('MerchantStoreType.Index', param).then(data => {
				that.shopclassArr1 = data.info[0]
				console.log(that.shopclassArr1)
			})
			//商品规格
			uni.$on('addSpecDone', (param) => {
				console.log(param)
				if (param.length > 0) {
					this.guigeArr = param
					this.isedit = true
				}
			})
		},
		onUnload() {
			uni.$off('goodsPics')
			uni.$off('addSpecDone')
		},
		methods: {
			nothing() {

			},
			getGoodsDetail() {
				var that = this
				var param = {
					'id': that.productID
				}
				that.http.sendRequest('MerchantStoreProduct.Read', param).then(function(data) {
					if (data.code == 0) {
						var dic = data.info[0]
						console.log(dic)
						that.dealwithPicsArr(dic.image)
						that.name_zh = dic.name
						that.name_th = dic.th_name
						that.priceTxt = dic.price
						that.firstPlatformID = dic.type_id
						that.shopTypeID = dic.store_type_id
						that.isRecommend = dic.recommend == 1 ? true : false
						that.nowkucun = dic.repertory
						that.maxkucun = dic.max_repertory
						that.isUpdateKucun = dic.day_repertory
						that.desc = dic.des
						that.guigeArr = dic.attr
						if (that.guigeArr.length > 0 && that.firstPlatformID == 1) {
							that.guigeindex = 1
						}
						that.goodsfenlei = dic.top_type_name
						that.shopfenlei = dic.top_store_type_name
					}
				})
			},
			dealwithPicsArr(list) {
				this.picsArr = list
				if (list.length > 3) {
					this.newPicsArr = list.slice(0, 3)
					console.log(this.newPicsArr)
				} else {
					this.newPicsArr = list
				}
				// console.log(list)
				// console.log(JSON.stringify(list))
			},
			showShopClass1() {
				this.isShowShopClass1 = true
				this.isShowShopClass2 = false
			},
			showShopClass2() {
				this.isShowShopClass2 = true
				this.isShowShopClass1 = false
			},
			shopClassItemClick1(item) {
				this.isShowShopClass1 = false
				this.shopclassTxt1 = item.name
				if (this.firstPlatformID == 3) {
					//服务只有一级分类
					this.shopTypeID = item.id
					this.isShowShopFenlei = false
					this.shopfenlei = this.shopclassTxt1
				} else {
					var that = this
					var param = {
						'level': '2',
						'is_tree': '1',
						'id': item.id
					}
					that.http.sendRequest('MerchantStoreType.Index', param).then(data => {
						that.shopclassArr2 = data.info[0]
						if (that.shopclassArr2.length == 0) {
							uni.showModal({
								title: '',
								content: this.i18n.shop.addshopclasstip,
								success: function(res) {
									if (res.confirm) {
										uni.navigateTo({
											url: '../classifyManager/addClassify'
										})
									} else if (res.cancel) {

									}
								}
							});
						} else {
							// this.isShowShopFenlei = true
						}
					})
				}

			},
			shopClassItemClick2(item) {
				this.isShowShopClass2 = false
				this.shopclassTxt2 = item.use_name
				this.isShowShopFenlei = false
				this.shopTypeID = item.id
				this.shopfenlei = this.shopclassTxt2
			},
			dohidefenlei() {
				this.isShowShopFenlei = false
			},
			//平台分类相关功能,不需要该方法了
			firstClassItemClick(item) {
				return
				// id=5是超市，不需要商品规格，需要库存功能
				if (item.id == 5) {
					this.showKucun = true
					this.showSpec = false
				} else {
					this.showKucun = false
					this.showSpec = true
				}
				this.firstPlatformID = item.id
				console.log(item.id)
				this.showFenlei1 = false
				this.firstPlatformClass = item.use_name
				var that = this
				var param = {
					'level': '2',
					'is_tree': '1',
					'id': item.id
				}
				that.http.sendRequest('Users.GetMerchantTypeList', param).then(data => {
					that.secondClassArr = data.info[0]
				})
			},
			secondClassItemClick(item) {
				this.showSecondFenlei = false
				this.showPlatformFenlei = false
				this.secondPlatformClass = item.name
				this.secondPlatformID = item.id
				this.goodsfenlei = this.firstPlatformClass + '-' + this.secondPlatformClass
			},
			showFirstClass() {
				// this.showFenlei1 = true

			},
			showSecondClass() {
				this.showSecondFenlei = true
			},
			inputNowkucun(e) {
				this.nowkucun = e.detail.value
			},
			guqing() {
				this.nowkucun = '0'
				this.nowkucunSelectedIndex = 0
			},
			zhiman() {
				this.nowkucunSelectedIndex = 1
				if (this.maxkucun.length > 0) {
					this.nowkucun = this.maxkucun
				} else {
					uni.showLoading({
						title: this.i18n.shop.maxkucuntip
					})
					setTimeout(function() {
						uni.hideLoading();
					}, 2000)
					return
				}
			},
			maxKucun(e) {
				this.maxkucun = e.detail.value
			},
			kucunupdate() {
				this.isUpdateKucun = !this.isUpdateKucun
			},
			tuijian() {
				this.isRecommend = !this.isRecommend
			},
			back() {
				uni.navigateBack()
			},
			save() {
				if (this.saveBtnClick) {
					return
				}
				var param = {}
				// id=5是超市，id=6是生鲜,id=7是送药,不需要商品规格，需要库存功能
				if (this.firstPlatformID == 5 || this.firstPlatformID == 6 || this.firstPlatformID == 7) {
					var recommendStatus = '0'
					if (this.isRecommend) {
						recommendStatus = '1'
					}
					if (this.name_zh.length == 0 || this.name_th.length == 0 ||
						this.priceTxt.length == 0 || this.nowkucun.length == 0 ||
						this.maxkucun.length == 0 || this.picsArr.length == 0) {
						uni.showLoading({
							title: this.i18n.shop.addtip
						})
						setTimeout(function() {
							uni.hideLoading();
						}, 1000)
						return
					}
					param = {
						'image': JSON.stringify(this.picsArr),
						'name': this.name_zh,
						'th_name': this.name_th,
						'price': this.priceTxt,
						'des': this.desc,
						'type_id': this.firstPlatformID,
						'store_type_id': this.shopTypeID,
						'recommend': recommendStatus,
						'repertory': this.nowkucun,
						'max_repertory': this.maxkucun,
						'day_repertory': this.isUpdateKucun,
					}
				} else {
					var recommendStatus = '0'
					if (this.isRecommend) {
						recommendStatus = '1'
					}

					if (!this.name_zh ) {
						uni.showLoading({
							title: this.i18n.shop.nametip
						})
						setTimeout(function() {
							uni.hideLoading();
						}, 1000)
						return
					}
					if (this.picsArr.length == 0) {
						uni.showLoading({
							title: this.i18n.shop.pictip
						})
						setTimeout(function() {
							uni.hideLoading();
						}, 1000)
						return
					}
					if (this.firstPlatformID == 8) {
						param = {
							'image': JSON.stringify(this.picsArr),
							'name': this.name_zh,
							'th_name': this.name_th,
							'price': this.priceTxt,
							'des': this.desc,
							'type_id': this.firstPlatformID,
							'store_type_id': this.shopTypeID,
							'recommend': recommendStatus
						}
					} else {
						if (this.guigeArr.length == 0 && this.guigeindex == 1) {
							uni.showLoading({
								title: this.i18n.shop.guigetip
							})
							setTimeout(function() {
								uni.hideLoading();
							}, 1000)
							return
						}
						if( this.guigeindex == 0){
							param = {
								'image': JSON.stringify(this.picsArr),
								'name': this.name_zh,
								'th_name': this.name_th,
								'price': this.priceTxt,
								'des': this.desc,
								'type_id': this.firstPlatformID,
								'store_type_id': this.shopTypeID,
								'recommend': recommendStatus,
								'attr': "",
								'has_attr':1
							}
						}else{
						param = {
							'image': JSON.stringify(this.picsArr),
							'name': this.name_zh,
							'th_name': this.name_th,
							'price': this.priceTxt,
							'des': this.desc,
							'type_id': this.firstPlatformID,
							'store_type_id': this.shopTypeID,
							'recommend': recommendStatus,
							'attr': JSON.stringify(this.guigeArr),
							'has_attr':0
							
							
						}
					}
					}

				}
				//'repertory': this.nowkucun,
				// 'max_repertory': this.maxkucun,
				// 'day_repertory': this.isUpdateKucun,
				// console.log(param)
				var url = 'MerchantStoreProduct.Save'
				if (this.productID > 0) {
					param.id = this.productID
					url = 'MerchantStoreProduct.Update'
				}
				this.saveBtnClick = true
				console.log(param,url)
				this.http.sendRequest(url, param).then(function(data) {
					console.log(data)
					if (data.code == 0) {
						uni.navigateBack()
					} else {
						that.saveBtnClick = false
					}
				})
			},
			addPic() {
				uni.navigateTo({
					url: 'addGoodsPics?picArr=' + JSON.stringify(this.picsArr)
				})
			},
			inputprice(e) {
				this.priceTxt = e.detail.value
			},
			changeChinese() {
				this.isChinese = true
			},
			changeTh() {
				this.isChinese = false
			},
			inputgoodsName(e) {
				if (this.isChinese) {
					this.name_zh = e.detail.value
				} else {
					this.name_th = e.detail.value
				}
			},
			inputgoodsDesc(e) {
				this.desc = e.detail.value
			},
			addGoodsFenlei() {
				this.showPlatformFenlei = true
			},
			addShopFenlei() {
				if (this.shopclassArr1.length == 0) {
					uni.showModal({
						title: '',
						content: this.i18n.shop.addshopclasstip,
						success: function(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: '../classifyManager/addClassify'
								})
							} else if (res.cancel) {

							}
						}
					});
				} else {
					this.isShowShopFenlei = true
				}

			},
			// 规格相关
			guige(index) {
				//productID=0:添加规格
				console.log(this.firstPlatformID)
				if (this.firstPlatformID == 3) {
					uni.navigateTo({
						url: '../specManager/specServiceManager?productID=' + this.productID + '&guige=' + JSON
							.stringify(this.guigeArr)
					})
				} else if (this.firstPlatformID == 1) {
					uni.navigateTo({
						url: '../specManager/sepcMSManger?productID=' + this.productID + '&guige=' + JSON
							.stringify(
								this.guigeArr)
					})
				} else {
					uni.navigateTo({
						url: '../specManager/specManager?productID=' + this.productID + '&guige=' + JSON.stringify(
							this.guigeArr)
					})
				}
			},
			deleteGoods() {
				var that = this
				uni.showModal({
					title: '',
					content: that.i18n.shop.deletetip,
					success: function(res) {
						if (res.confirm) {
							that.delete()
						} else if (res.cancel) {

						}
					}
				})
			},
			delete() {
				var that = this
				var param = {
					'is_del': '1',
					'id': this.productID
				}
				this.http.sendRequest('MerchantStoreProduct.Status', param).then(function(data) {
					if (data.code == 0) {
						that.back()
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
		background-color: #F5F5F5;
	}

	.firstclasslist {
		background-color: white;
		display: flex;
		flex-direction: column;
		position: absolute;
		width: calc(100% - 30px);
	}

	.firstclasslist text {
		height: 30px;
		font-size: 16px;
		text-align: left;
		color: #181818;
		line-height: 40px;
		margin-left: 35px;
		margin-right: 35px;
		flex: 1;
	}

	.bg {
		background-color: white;
		margin-left: 15px;
		width: calc(100% - 30px);
		margin-right: 15px;
		height: 175px;
		display: flex;
		flex-direction: column;
	}

	.fenleibackview {
		margin-left: 15px;
		margin-right: 15px;
		margin-top: 15px;
		height: 40px;
		background: #ffffff;
		border: 0.5px solid #c5c5c5;
		border-radius: 3px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.rightClassArrow {
		margin-left: 15px;
		margin-right: 15px;
		width: 24px;
		height: 24px;
	}

	.man {
		position: absolute;
		right: 20px;
		height: 20px;
		font-size: 14px;
		text-align: left;
		color: #181818;
		line-height: 20px;
	}

	.guqing {
		position: absolute;
		right: 80px;
		height: 20px;
		font-size: 14px;
		text-align: left;
		color: #181818;
		line-height: 20px;
	}

	.delete {
		margin-left: 15px;
		margin-right: 15px;
		margin-top: 15px;
		height: 44px;
		line-height: 44px;
		font-size: 16px;
		text-align: center;
		color: #F40404;
		line-height: 44px;
		background-color: white;
	}

	.right_switch {
		position: absolute;
		right: 32px;
		width: 20px;
		height: 20px;
	}

	.tuijian {
		width: 100%;
		padding-left: 15px;
		padding-right: 15px;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		border-bottom: 1px solid #E6E6E6;
		align-items: center;
		margin-top: 15px;
	}

	.rightTxt {
		position: absolute;
		right: 20px;
		font-size: 16px;
		line-height: 44px;
		height: 44px;
	}

	.guanlibtn {
		width: 100%;
		height: 44px;
		line-height: 44px;
		font-size: 16px;
		text-align: center;
		color: #00c1de;
		line-height: 44px;
		background-color: white;
	}

	.inputBackView {
		width: 100%;
		padding-left: 15px;
		padding-right: 15px;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		border-bottom: 1px solid #E6E6E6;
		align-items: center;
	}

	.inputBackView2 {
		width: 100%;
		/* padding-left: 15px;
		padding-right: 15px; */
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

	.inputV {
		height: 44px;
		line-height: 44px;
		top: 0;
		font-size: 14px;
		width: calc(100% - 150px);
		margin-left: 15px;
		/* background-color: #DD524D; */
	}

	.pic {
		width: 64px;
		height: 64px;

		margin-left: 5px;
	}

	.rightArrow {
		right: 20px;
		height: 16px;
		width: 16px;
		position: absolute;
	}

	.picView {
		width: 100%;
		padding-left: 15px;
		padding-right: 15px;
		height: 76px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
	}

	.title {
		width: 100%;
		padding-left: 15px;
		padding-top: 17px;
		height: 10px;
		height: 44px;
		font-size: 14px;
		text-align: left;
		color: #6f6f6f;
		line-height: 10px;
	}

	.title2 {
		/* height: 44px;
		line-height: 44px; */
		top: 0;
		font-size: 16px;
		color: #181818;
	}
</style>
