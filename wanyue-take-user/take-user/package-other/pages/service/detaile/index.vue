<template>
	<view v-if="storeMsg">
		<view class="topView" v-if="tabIndex == 0">
			<view class="topView-header">
				<swiper class="topThumb swiper" circular="false" indicator-dots="true" autoplay="true">
					<swiper-item style="width: 100%;height: 100%;" v-for="(item, index) in storeMsg.environment"
						:key="index">
						<image style="width: 100%;height: 100%;" :src="item" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
				<view class="row babckback" style="" >
					<image class="topView-header-image" src="../../../../static/back-left.png" mode="aspectFit" @click="doback()"></image>
				</view>
			</view>
			
			<view class="yinyingview" style="">
				<view class="oneline store_name">
					{{storeMsg.use_name}}
				</view>
				<view class="store_label">
					{{storeMsg.distance}}
				</view>
				<view class="row" style="margin-left: 15px;width: calc(100% - 15px);">
					<starv size = 30 @change="onChange" disabled = true :value = "storeMsg.stars" ></starv>
					<view class="" style="flex: 1;font-size: 12px;color: #6F6F6F;">
						<!-- 500+ -->
						{{storeMsg.remark + i18n.meishi.pingjia}}
					</view>
					<view class="" style="margin-right: 10px;font-size: 12px;color: #FF5725;font-weight: bold;" @click="more()">
						{{i18n.yilou.gengduo}}
					</view>
				</view>
				
				
			</view>
			<view class="status_yingye" v-if="storeMsg.operating_state == 1">
				{{i18n.meishi.yingye}}
			</view>
			
		</view>
		
		<wybar @clickLeft="doback()" :leftText="storeMsg.use_name" v-else></wybar>
		<scroll-view scroll-x="true" class="row" style="width: 100%;height: 40px;white-space: nowrap;" :style="tabIndex == 0 ? 'margin-top: 75px;' : 'margin-top: 5px;'">
			<view v-for="(item,index) in tabbar" :key="index" style="display: inline-block;">
				<view :class="index == tabIndex ? 'tab_sel' : 'tab_nor'" @click="tabbarClick(index)">
					{{item}}
				</view>
			</view>
		</scroll-view>
		<hotV v-if="tabIndex == 0" :height="hotHeight" :storeMsg="storeMsg" :listArray="hotArray" @gotocell="gotocell"></hotV>
		<scroll-view @scroll="scrollChange" scroll-y="true" style="width: 100%;" :style="'height:' + scrollHeight + 'px;'" :scroll-into-view="'header' + tabIndex" v-else>
			<view v-for="(item,index) in dataArray" :key="index" :id="'header' + (index + 1)">
				<view class="" style="width: 100%;height: 40px;line-height: 60px;font-size: 20px;font-weight: bold;padding-left: 15px;">
					{{item.use_name}}
				</view>
				<view v-for="(obj,indexO) in item.product" :key="indexO" class="row" :class="indexO == (item.product.length - 1) ? 'fuwuCell2' : 'fuwuCell'" @click="gotocell(obj)">
					<view class="column" style="flex:1;margin-left: 15px;height: 96px;width: calc(100% - 145px);">
						<view class="oneline" style="font-size: 16px;font-weight: bold;">
							{{obj.use_name}}
						</view>
						<view class="threeLine" style="line-height: 18px;color: #6F6F6F;font-size: 13px;flex: 1;max-lines: 3;">
							{{obj.des}}
						</view>
						<view style="margin-bottom: 0;font-size: 14px;">
							¥ {{obj.use_price}}
						</view>
					</view>
					<image :src="obj.image" mode="aspectFill" style="margin-right: 15px;margin-left: 15px;width: 96px;height: 96px;border-radius: 8px;"></image>
				</view>
				<view style="width: 100%;height: 10px;background-color: #f5f6f7;">
					
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import starv from "@/components/banxing/banStar.vue"
	import wybar from "@/components/wybar/wyBar.vue"
	import hotV from "@/package-other/pages/service/components/hot.vue"
	export default {
		components:{
			starv,
			wybar,
			hotV
		},
		data() {
			return {
				storeID:'',
				system_top:44,
				itemArray:[],
				scrollHeight:0,
				hotHeight:0,
				tabbar: [],
				tabIndex: 0,
				dataArray:[],
				heightArray:[],
				storeMsg:null,
				hotArray:[]
			}
		},
		onReady() {
			const res = uni.getSystemInfoSync();
			if(parseInt(res.safeArea.top) > 44){
				this.system_top = parseInt(res.safeArea.top)
			}
			this.scrollHeight = res.windowHeight - 5 - this.system_top - 40
			this.hotHeight = res.windowHeight - 150 - 75 - 40
		},
		onLoad(option) {
			this.storeID = option.id
			this.getclass()
		},
		onShow() {
			this.requestData()
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		methods: {
			requestData(){
				var that = this
				that.http.sendRequest('Serve.GetStoreDetail', {'id':that.storeID}).then(function(res) {
					if (res.code == 0) {
						that.storeMsg = res.info[0]
					}
				})
			},
			getclass(){
				var that = this
				that.http.sendRequest('Serve.GetAllServe', {'store_id':that.storeID}).then(function(res) {
					if (res.code == 0) {
						const list = res.info[0]
						if(list.length > 0){
							that.tabbar = []
							that.tabbar.push(that.i18n.toher.remen)
							that.hotArray = list[0].product
							for (var i = 1; i < list.length; i++) {
								that.tabbar.push(list[i].use_name)
								that.dataArray.push(list[i])
							}
							console.log(that.hotArray)
							console.log(that.tabbar)
							console.log(that.dataArray)
							that.getSectionHeight()
						}
					}
				})
			},
			doback(){
				uni.navigateBack({
					
				})
			},
			tabbarClick(index){
				this.tabIndex = index
			},
			animationfinish(e) {
				this.tabIndex = e.detail.current
			},
			doRank(){
				uni.navigateTo({
					url:'../../../pages/rank/rank?type=meishi'
				})
			},
			more(){
				uni.navigateTo({
					url:'./indexMore?storeMsg=' + JSON.stringify(this.storeMsg)
				})
			},
			getSectionHeight(){
				var hh = 0;
				for (let i = 0; i < this.dataArray.length; i++) {
					const product = this.dataArray[i].product
					hh = hh + (50 + 130*product.length);
					this.heightArray.push(hh)
				}
				console.log(this.heightArray)
			},
			scrollChange(event){
				
				for (let i = 0; i < this.heightArray.length; i++) {
					if(this.heightArray[i] > event.detail.scrollTop){
						this.tabIndex = i+1
						break
					}
				}
				console.log(this.tabIndex)
			},
			onChange(){
				
			},
			gotocell(item){
				// console.log(item)
				// return
				uni.navigateTo({
					url:'../fuwuxiangqing/index?id=' + item.id
				})
			}
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
		background-color: #FFF;
	}
	.topView {
		margin-top: 0;
		width: 100%;
		background-color: #f5f6f7;
		position: relative;
	}
	.topView-header {
		width: 100%;
		height: 170px;
		border-radius: 0 0 20px 20px;
		position: relative;
		overflow: hidden;
	}
	.topView-header-image {
		width: 32px;
		height: 32px;
		background-color: #FFF;
		border-radius: 16px;
	}
	.yinyingview {
		width: calc(100% - 30px);
		min-height: 120px;
		background-color: #FFF;
		margin-left: 15px;
		position: absolute;
		top: 100px;
		border-radius: 8px;
		-moz-box-shadow: 0 0 5px 5px rgb(0, 0, 0, 0.04);
		-webkit-box-shadow: 0 0 5px 5px rgb(0, 0, 0, 0.04);
		box-shadow: 0 0 5px 5px rgb(0, 0, 0, 0.04);
	}
	.status_yingye {
		position: absolute;
		top: 90px;
		left: 25px;
		height: 20px;
		border-radius: 2px;
		padding-left: 5px;
		padding-right: 5px;
		color: #FFF;
		background-color: #FF5725;
		font-size: 11px;
		font-weight: bold;
		line-height: 20px;
	}
	.store_name {
		margin-left: 15px;
		margin-top: 26px;
		height: 25px;
		line-height: 25px;
		font-size: 18px;
		font-weight: bold;
		color: #181818;
		width: calc(100% - 120px);
	}
	.store_label {
		margin-left: 15px;
		margin-top: 8px;
		line-height: 15px;
		font-size: 11px;
		color: #6F6F6F;
		width: calc(100% - 120px);
		align-items: center;
	}
	
	.tab_sel {
		margin-top: 10px;
		font-size: 16px;
		font-weight: bold;
		color: #181818;
		margin-left: 15px;
		margin-right: 15px;
		position: relative;
		height: 30px;
		justify-content: center;
	}
	.tab_sel::after{
		content: "";
		position: absolute;
		bottom: 0;
		left: 25%;
		height: 2px;
		border-radius: 1px;
		width: 50%;
		background-color: #FF5725;
	}
	.tab_nor {
		margin-top: 10px;
		font-size: 14px;
		/* font-weight: bold; */
		color: #6f6f6f;
		margin-left: 15px;
		margin-right: 15px;
		position: relative;
		height: 30px;
	}
	.fuwuCell {
		width: 100%;
		height: 130px;
		align-items: center;
		position: relative;
	}
	.fuwuCell2 {
		width: 100%;
		height: 130px;
		align-items: center;
		position: relative;
	}
	.fuwuCell::after {
		content: '';
		position: absolute;
		left: 15px;
		bottom: 0;
		height: 1px;
		width: calc(100% - 30px);
		background-color: #D6DADE;
	}
	.threeLine{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
	.topThumb {
		width: 100%;
		height: 100%;
		/* background-color: #FF5725; */
		overflow: hidden;
	}
	.babckback {
		position: absolute;
		left: 12px;
		width: calc(100% - 24px);
		height: 40px;
		top: 48px;
		align-items: center;
	}
</style>
