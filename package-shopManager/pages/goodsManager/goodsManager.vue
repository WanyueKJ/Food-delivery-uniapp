<template>
	<view>
		<view class="topImageView" :style="'height:' + topHeight + 'px;'">
			<view class="nav" :style="'margin-top:' + marginTopHeight + 'px;'">
				<image class="backimg" src="../../../static/whiteback@2x.png" mode="aspectFit" @click="back()"></image>
				<text class="nav_title">{{i18n.shop.guanli}}</text>	
			</view>
			<!-- 搜索 -->
			<view class="row" style="width: 100%;height: 60px;">				
				<view class="search" @click="search()">
					<image src="../../static/search.png" mode="aspectFit" style="margin-left: 15px;margin-top: 6px; width: 20px;height: 20px;"></image>
				</view>
			</view>
		</view>
		<!-- 店铺一级分类 -->
		<view class="row" style="width: 100%;" :style="'height:' + scrollHeight + 'px;'">
			<scroll-view scroll-y="true" style="width: 80px;background-color: #FAFAFA;" :style="'height:' + scrollHeight + 'px;'">
				<view @click="leftBtnClick(index,item)" v-for="(item,index) in firstClassArr" :key="index"
					:class="index == selectIndex ? 'left_Sel' : 'left_nor'">
					{{item.use_name}}
				</view> 
			</scroll-view>
			<!-- 二级分类-->
			<view class="secondsub colum" :style="'height:' + scrollHeight + 'px;'">
				<scroll-view scroll-x="true" class="scrollX" :style="'height:' + secondViewHeight + 'px;'">
					<view @click="secondsubClick(index,item)" v-for="(item,index) in secondClassArr" :key="index"
						:class="index == secondIndex ? 'second_Sel' : 'second_nor'">
						{{item.use_name}}
					</view>
				</scroll-view>
				<!-- 商品列表 -->
				<view v-if="listArr.length == 0" class="nothing clomun">
					<image src="../../../static/noorder@2x.png" mode="aspectFit" style="width: 100px;height:60px ;"></image>
					<view style="font-size:12px;height: 20px;line-height: 20px; color:#dadada;">{{i18n.shop.nodata}}</view>
				</view>
				
				<view v-else class="goodslist" :style="'height:' + (scrollHeight - secondViewHeight-60) + 'px;'">
					<scroll-view id="shangpin" scroll-y="true" style="width:100%;height: 100%;" :scroll-into-view="toView" :refresher-threshold="45" :refresher-triggered="refresherTriggered" :refresher-enabled="true"  @refresherrefresh="refresherrefresh" @scrolltolower="reloadmoreData">
						<view v-for="(item,index) in listArr" :key="index" style="width: 100%;" :id="'header' + index" class="cell row">
							<image :src="item.image" mode="aspectFill" class="cell_thumb"></image>
							<view v-show="item.is_show==0" class="xiajiatip">{{i18n.shop.xiajia2}}</view>
							<view class="column" style="width: calc(100% - 100px);">
								<view class="nameLbale oneline">{{item.use_name}}</view>
								<view class="row store_label">
									<text style="margin-right: 5px;">{{i18n.shop.sales}}：{{item.sales}}</text>
									<view v-if="showKucun" style="color: #6F6F6F;font-size: 11px;">{{i18n.shop.kucun}}：{{item.repertory}}</view>
									<!-- <text v-if="item.repertory>0">{{item.repertory}}</text>
									<text v-else>{{i18n.shop.salesdone}}</text> -->
									
								</view>
								<view style="margin-left: 8px;color: #EF6B2A; align-items: center;flex: 1;font-size: 14px;">
										{{i18n.index.moneyFuhao}} {{item.price}}
								</view>
								<view v-if="item.is_show==1" class="xiajia" @click="xiajia(item)">{{i18n.shop.xiajia}}</view>
								<view v-else class="xiajia" @click="shangjia(item)">{{i18n.shop.shangjia}}</view>
								<view class="rightedit" @click="edit(item)">{{i18n.shop.edit}}</view>
							</view>
							<!-- </view> -->
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<!-- 底部按钮 -->
		<view style="height: 60px;position: absolute;bottom: 0;width: 100%;background-color: white;">
			<view class="row" style="width: 100%;height: 40px;">
				<view v-for="(item,index) in bottomArr" :key="index" class="fenlei" @click="itemClick(index)">
					<image :src="item.image" mode="aspectFit" style="width: 32px;height: 32px"></image>
					<view style="font-size: 13px;color: #6F6F6F;text-align: center;">{{item.name}}</view> 
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				scrollHeight:0,
				secondViewHeight:50,
				bottomViewHeight:0,
				topHeight:0,
				marginTopHeight:0,
				refresherTriggered: false,
				bottomArr:[],
				selectIndex:0,
				secondIndex:0,
				isXiajia:true,
				toView:'',
				listArr:[],
				firstClassArr:[],
				secondClassArr:[],
				page:1,
				recommendDic:{},
				storeTypeID:'0',
				selectedFirstID:'-1',
				platformID:'0',//平台分类，超市的时候显示库存
				showKucun:false
			}
		},
		onShow() {
			var shopinfo = uni.getStorageSync('shopinfo')
			console.log(shopinfo)
			this.platformID = shopinfo.top_type_id
			if (parseInt(this.platformID) == 5) {
				this.showKucun = true
			}else{
				this.showKucun = false
			}
			this.getListData()
		},
		onLoad() {
			var res = uni.getSystemInfoSync()
			this.marginTopHeight = getApp().globalData.menuButtonHeight + getApp().globalData.statusBarHeight
			this.topHeight = this.marginTopHeight + 60 + 44
			this.bottomViewHeight = 60
			this.scrollHeight = res.windowHeight - this.bottomViewHeight - this.topHeight
			this.bottomArr = [{'name':this.i18n.shop.fenlei,'image':'../../static/fenlei@2x.png'},
							  {'name':this.i18n.shop.addgoods,'image':'../../static/addgoods@2x.png'}]
			this.recommendDic = {'id':'0','use_name':this.i18n.shop.tuijian}
			this.getFirstClassData()
			this.getSecondClassData()
			if(this.storeTypeID == 0){
				this.secondViewHeight = 0
			}else{
				this.secondViewHeight = 50
			}
			var shopinfo = uni.getStorageSync('shopinfo')
			// console.log(shopinfo)
			this.platformID = shopinfo.top_type_id
			if (parseInt(this.platformID) == 5) {
				this.showKucun = true
			}else{
				this.showKucun = false
			}
		},
		methods: {
			getFirstClassData(){
				//店铺分类
				var that = this
				var param = {'level':'1',
							'is_tree':'0',
							'id':'0'}
				that.http.sendRequest('MerchantStoreType.Index',param).then(data => {
					that.firstClassArr = data.info[0]
					that.firstClassArr.unshift(that.recommendDic)
				})
			},
			//店铺二级分类
			getSecondClassData(){
				var that = this
				console.log(that.selectedFirstID)
				if(that.selectedFirstID>0){
					var param = {'level':'2',
								'is_tree':'0',
								'id':that.selectedFirstID}
					that.http.sendRequest('MerchantStoreType.Index',param).then(data => {
						that.secondClassArr = data.info[0]
						if(that.secondClassArr.length > 0){
							that.secondViewHeight = 50
							var dic = that.secondClassArr[0]
							that.storeTypeID = dic.id
							that.getListData()
						}else{
							that.secondViewHeight = 0
							that.listArr = []
						}
					})
				}else{
					that.storeTypeID = 0
					that.getListData()
					that.secondViewHeight = 0
				}
			},
			getListData(){
				var that = this
				 // console.log(this.page,this.storeTypeID)
				var param = {'p':this.page,
							 'store_type_id':this.storeTypeID}
				this.http.sendRequest('MerchantStoreProduct.Index',param).then(function(data) {
					if(that.page==1){
						that.listArr = data.info[0]
					}else{
						that.listArr = that.listArr.contact(data.info[0])
					}

				})
			},
			search(){
				uni.navigateTo({
					url:'../searchgoods/searchgoods'
				})
			},
			back(){
				uni.navigateBack()
			},
			itemClick(index){
				if(index == 0){
					//管理分类
					uni.navigateTo({
						url:'../classifyManager/classifyManager'
					})
				}else{
					//添加商品
					uni.navigateTo({
						url:'./addGoods'
					})
				}
			},
			leftBtnClick(index,item){
				this.selectIndex = index
				const sid = 'header' + index;
				this.toView = sid
				// console.log(sid)
				this.selectedFirstID = item.id
				if(this.platformID == 3){
					//服务只有一级分类
					this.storeTypeID = item.id
					this.getListData()
				}else{
					this.getSecondClassData()
				}
			},
			secondsubClick(index,item){
				this.secondIndex = index
				this.storeTypeID = item.id
				this.getListData()
			},
			edit(item){
				uni.navigateTo({
					url:'addGoods?productID=' + item.id
				})
			},
			xiajia(item){
				//下架
				console.log(111,item.id)
				var that = this
				var param = {'is_show':'0',
							 'id':item.id}
				this.http.sendRequest('MerchantStoreProduct.Status',param).then(function(data) {
					if(data.code == 0){
						that.getListData()
					}
				})
			},
			shangjia(item){
				//上架
				console.log(222,item.id)
				var that = this
				var param = {'is_show':'1',
				             'id':item.id}
				this.http.sendRequest('MerchantStoreProduct.Status',param).then(function(data) {
					if(data.code == 0){
						that.getListData()
					}				
				})
			},
			refresherrefresh() {
				this.refresherTriggered = true;
				this.page = 1
				this.getListData()
				setTimeout(() => {
					this.refresherTriggered = false;
				}, 1000);
			},
			reloadmoreData(){
				this.page++
				//this.p = parseInt(this.p) + 1;
				this.getListData()
				
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #fcfcfc;
	}
	.nothing {
		margin-top:150px;
		width: 100%;
		height: 140px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.xiajiatip{
		position: absolute;
		color: white;
		background-color: rgba(0, 0, 0, 0.3);
		font-size: 14px;
		margin-left: 15px;
		width: 76px;
		height: 76px;
		display: flex;
		align-items: center;
		justify-content: center;
		top:15px ;
		border-radius: 4px;
	}
	.xiajia{
		position: absolute;
		right: 15px;
		width: 70px;
		height: 26px;
		border: 0.5px solid #00c1de;
		border-radius: 1px;
		font-size: 14px;
		text-align: center;
		color: #00c1de;
		line-height: 26px;
		bottom: 10px;
	}
	.rightedit{
		bottom: 10px;
		width: 70px;
		position: absolute;
		right: 100px;
		height: 26px;
		border: 0.5px solid #00c1de;
		border-radius: 1px;
		font-size: 14px;
		text-align: center;
		color: #00c1de;
		line-height: 26px;
	}
	.cell {
		width: 100%;
		height: 115px;
		margin-bottom: 12px;
		position: relative;
		border-bottom: 1px solid #E6E6E6;
	}
	
	.cell_thumb {
		margin-left: 15px;
		margin-top: 15px;
		width: 76px;
		height: 76px;
		background-color: #E6E6E6;
		border-radius: 4px;
	}
	.nameLbale {
		margin-left: 8px;
		margin-top: 15px;
		height: 20px;
		color: #181818;
		font-size: 14px;
		font-weight: bold;
		line-height: 20px;
	}
	
	
	.store_label {
		margin-left: 8px;
		margin-top: 4px;
		line-height: 15px;
		font-size: 11px;
		color: #6F6F6F;
		width: calc(100% - 15px);
		align-items: center;
	}
	
	.store_label image {
		width: 10px;
		height: 10px;
		margin-right: 2px;
	}
	
	.goodslist{
		width: 100%;
		
	}
	.secondsub{
		width: calc(100% - 80px);
	}
	.scrollX{
		overflow: hidden;
		white-space: nowrap;
		background-color: white;
	}
	.second_Sel {
		/* width: 100%; */
		height: 20px;
		line-height: 20px;
		text-align: center;
		font-size: 12px;
		font-weight: bold;
		color: #181818;
		background-color: #EBFCFF;
		display: inline-block;
		margin-left: 15px;
		margin-top: 15px;
	}
	
	.second_nor {
		/* width: 100%; */
		height: 20px;
		line-height: 20px;
		text-align: center;
		font-size: 12px;
		color: #6F6F6F;
		background-color: #F6F8F8;
		display: inline-block;
		margin-left: 15px;
		margin-top: 10px;
		/* margin-top: 25px; */
	}	
	
	.left_Sel {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 12px;
		font-weight: bold;
		color: #181818;
		background-color: #FFF;
	}
	
	.left_nor {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 12px;
		color: #6F6F6F;
		background-color: #F5F6F7;
	}
	
	.fenlei{
		display: flex;
		flex-direction: row;
		width: 50%;
		height: 100%;
		position: relative;
		justify-content: center;
		align-items: center;
	}
	.backimg{
		width: 20px;
		height: 20px;
		margin-left: 15px;
		
	}
	.topImageView {
		width: 100%;
		overflow: hidden;
		background-color: #2F3E51;
		/* position: relative; */
		background-size: 100% auto;
	}
	.nav{
		display: flex;
		align-items: center;
		height: 44px;
		width: 100%;
		border-bottom: 1px solid #383838;
	}
	
	.nav_title{
		width: 50%;
		margin-left:17%;
		height: 20px;
		line-height: 20px;
		color: white;
		font-size: 16px;
		text-align: center;
	}
	.search{
		background-color: white;
		height: 32px;
		margin:15px;
		border-radius: 16px;
		width: 100%;
	}
</style>
