<template>
	<view>
		<wybar @clickLeft="back" :titleText="i18n.mine.shoptype" :rightText="i18n.mine.save" @clickRight="save"></wybar>
		<scroll-view scroll-y="true" :style="'height:' + scrollHeight + 'px;'" style="background-color: #F5F5F5; width: 100%;"
			class="column">
			<view style="margin-top: 15px;width: 100%;"></view>
			<view v-for="(item,index) in list" :key="index">
				<view class="inputBackView">
					<view class="title">{{item.name}}</view>
<!-- 					<image v-if="index == selectedIndex" class="rightimg" src="../../../static/mine/mine-uparrow@2x.png" mode="aspectFit" @click="showDetail(index,item)"></image>
 -->					
 <!-- <image v-else class="rightimg" src="../../../static/mine/mine-downarrow@2x.png" mode="aspectFit" @click="showDetail(index,item)"></image>	 -->
				</view>
				<block v-if="index == selectedIndex">
					<view v-for="(item,index) in item.children" :key="index">
						<view class="inputBackView2">
							<view class="title2" @click="clickSecondType(item,index)" :style="index == selectedSecondIndex?'color:#00C1DE':'color:#181818'">{{item.name}}</view>
						</view>
					</view>	
				</block>
			</view>
		</scroll-view>
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
				scrollHeight:0,
				list:[],
				isShowSecond:false,
				selectedIndex:-1,
				firstTypeName:'',
				firstTypeID:'',
				secondTypeName:'',
				secondTypeID:'',
				selectedSecondIndex:-1
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
			this.scrollHeight = res.windowHeight - 80
			
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title:this.i18n.shop.fenlei
			})
			this.getData()
		},
		methods: {
			getData(){
				var that = this
				var param = {'level':'3',
							'is_tree':'1',
							'id':'0'}
				that.http.sendRequest('Users.GetMerchantTypeList',param).then(data => {
					that.list = data.info[0]
					console.log(that.list) 
				})
				
			},
			back(){
				uni.navigateBack()
			},
			save(){
				if(this.secondTypeID && this.secondTypeName){
					var dic = {'firstID':this.firstTypeID,
								'secondID':this.secondTypeID,
								'firstName':this.firstTypeName,
								'secondName':this.secondTypeName}
					uni.$emit('userChangeShopType',dic)
				}
				this.back()
			},
			showDetail(index,item){
				this.selectedIndex = index
				this.selectedSecondIndex = -1
				this.firstTypeID = item.id
				this.firstTypeName = item.name
			},
			clickSecondType(item,index){
				this.selectedSecondIndex = index
				this.secondTypeID = item.id
				this.secondTypeName = item.name
			}
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
		background-color: #F5F5F5;
	}
	.title2{
		height: 20px;
		font-size: 14px;
		text-align: left;
		color:#181818;
		line-height: 14px;
		flex: 1;
		margin-left: 15px;
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
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		border-bottom: 1px solid #e6e6e6;
	}
	
	.rightimg{
		width: 20px;
		height: 20px;
		margin-right: 15px;
	}
	.title{
		margin-left: 15px;
		font-size: 14px;
		text-align: left;
		color: #181818;
		flex: 1;
	}
	.fenlei{
		font-size: 16px;
		text-align: center;
		color: #ffffff;
		line-height: 100%;
		align-items: center; 
		width: 100%;
		background-color:#0F0F0F ;
		display: flex;
		justify-content: center;
	}
	
</style>
