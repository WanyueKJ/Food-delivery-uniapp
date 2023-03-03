<template>
	<view>
		<view class="top">
			<view style="width: 100%;height: 196px;position: relative;">
				<image src="../../static/rank/rank_bj.png" mode="aspectFill" style="width: 100%;height: 100%;"></image>
				<view class="" style="width: 100%;height: 100%;position: absolute;left: 0;top: 0;">
					<view style="width: 100%;" :style="'height:' + system_top + 'px;'"></view>
					<image @click="doBack()" src="../../static/back-yuan.png" mode="aspectFit"
						style="width: 32px;height: 32px;margin-left: 12px;margin-top: 4px;"></image>
					<view class="row" style="justify-content: center;">
						<image src="../../static/rank/maisui-l.png" mode="aspectFill" class="topImage"></image>
						<view class="column" style="margin-left: -5px;margin-right: -5px;align-items: center;">
							<view class="jianbian"
								style="color: #F8E6DC;font-size: 30px;font-weight: bold;position: relative;" >
								{{biaoti}}
							</view>
							<view class="" style="color: #FDE8DB;font-size: 12px;">
								{{baotiTip}}
							</view>
						</view>
						<image src="../../static/rank/maisui-r.png" mode="aspectFill" class="topImage"></image>
					</view>
					<image src="../../static/rank/rank-star.png" mode="aspectFit" style="width: 100%;height: 12px;">
					</image>
				</view>
				
			</view>
			<view class="row"
				style="width: 100%;height: 44px;background-color: #FFF;justify-content: space-around;align-items: center;">
				<view class="row" @click="changeType(0)" style="align-items: center;">
					{{curSQName}}
					<image :src="(isShowShangquan && showIndex == 0) ? '../../static/rank/rank-shang.png' : '../../static/rank/rank-xia.png'" mode="aspectFit" style="width: 15px;height: 15px;margin-left: 5px;">
					</image>
				</view>
				<view class="row" @click="changeType(1)" style="align-items: center;">
					{{curTypeName}}
					<image :src="(isShowClass && showIndex == 1) ? '../../static/rank/rank-shang.png' : '../../static/rank/rank-xia.png'" mode="aspectFit" style="width: 15px;height: 15px;margin-left: 5px;">
					</image>
				</view>
			</view>
		</view>

		<scroll-view scroll-y="true" style="width: 100%;" :style="'height:' + scrollHeight + 'px;'">
			<view v-for="(item,index) in listArray" :key="index" @click="gotoCell(item)" class="row item_back">
				<image mode="aspectFill" class="item_image" :src="item.thumb"></image>
				<view class="column" style="margin-left: 8px;overflow: hidden;height: 72px;flex: 1;">
					<view class="item_biaoti">{{item.name}}</view>
					<view class="row" style="height: 28px;align-items: center;">
						<image src="../../static/meishi/pingfen.png" mode="" style="width: 10px;height: 10px;"></image>
						<text style="font-size: 12px;font-weight: bold;color: #FFBF47;margin-left: 3px;">{{item.stars}}</text>

						<image src="../../static/rank/dianping.png" mode="" style="width: 10px;height: 10px;margin-left: 8px">
						</image>
						<text style="font-size: 11px;color: #6f6f6f;margin-left: 3px;">{{i18n.rank.dianping}} {{item.remark}}</text>
						<image src="../../static/rank/renjun.png" mode="" style="width: 10px;height: 10px;margin-left: 8px">
						</image>
						<text style="font-size: 11px;color: #6f6f6f;margin-left: 3px;">{{i18n.rank.renjun}} {{item.per_capita}}</text>
					</view>

					<view class="item_content item_content_word">{{item.circle_name}}</view>

				</view>
				<view style="color: #6f6f6f;font-size: 11px;margin-right: 10px;">
					{{item.distance}}
				</view>
				<view class="labellabel">
					
					<image :src="index < 3 ? '../../static/rank/top.png' : '../../static/rank/top_gray.png'" mode="" style="width: 100%;height: 100%;"></image>
					<view class="column"  style="position: absolute;width: 100%;height: 100%;left: 0;top: 0;">
						<view style="font-size: 12px;">
							TOP
						</view>
						<view style="font-size: 16px;">
							{{index + 1}}
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="classView" v-if="isShowClass" :style="'height:' + scrollHeight + 'px;'" @click="doHideClassView()">
			<scroll-view scroll-y="true" style="width: 100%;min-height: 200px;max-height: 300px;background-color: #FFF;">
				<view class="classItem" @click.stop="classItemClick({},99999)" :style="type_id == '0' ? 'color:#FF5725;' : ''">
					{{i18n.rank.quanbufenlei}}
				</view>
				<view v-for="(item,index) in classList" :key="index" class="classItem" :style="item.id == type_id ? 'color:#FF5725;' : ''" @click.stop="classItemClick(item,index)">
					{{item.use_name}}
				</view>
			</scroll-view>
		</view>
		<view class="classView" v-if="isShowShangquan" :style="'height:' + scrollHeight + 'px;'" @click="doHideClassView()">
			<scroll-view scroll-y="true" style="width: 100%;min-height: 200px;max-height: 300px;background-color: #FFF;">
				<view class="classItem" @click.stop="sqItemClick({},99999)" :style="circle_id == '0' ? 'color:#FF5725;' : ''">
					{{i18n.rank.quanbushangquan}}
				</view>
				<view v-for="(item,index) in sqList" :key="index" class="classItem" :style="item.id == circle_id ? 'color:#FF5725;' : ''" @click.stop="sqItemClick(item,index)">
					{{item.use_name}}
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				system_top: 44,
				scrollHeight: 0,
				type: 0,
				listArray: [],
				isShowClass:false,
				isShowShangquan:false,
				showIndex:0,
				type_id:'0',
				circle_id:'0',
				sqList:[],
				classList:[],
				biaoti:'',
				baotiTip:'',
				curSQName:'',
				curTypeName:''
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		onReady() {
			const res = uni.getSystemInfoSync();
			if (parseInt(res.safeArea.top) > this.system_top) {
				this.system_top = parseInt(res.safeArea.top)
			}
			this.scrollHeight = res.windowHeight - 240
			this.baotiTip = this.i18n.rank.rank_tip
		},
		onLoad(option) {
			console.log(option.type)
			this.type = option.type
			if(this.type == 'meishi'){
				this.biaoti = this.i18n.rank.meishipaihang
			}else if(this.type == 'zhaodian'){
				this.biaoti = this.i18n.rank.zhaodianpaihang
			}
			this.curSQName = this.i18n.rank.quanbushangquan
			this.curTypeName = this.i18n.rank.quanbufenlei
			
			this.requestData()
			this.getCLass()
			this.getCircle()
		},
		methods: {
			doBack() {
				uni.navigateBack({

				})
			},
			gotoCell(item) {
				var that = this
				if(that.type == 'meishi'){
					uni.navigateTo({
						url: '../../package-meishi/pages/store/store?id=' + item.id
					})
				}else if(that.type == 'zhaodian'){
					console.log(item)
					uni.navigateTo({
						url: '/package-other/pages/findShop/detail/index?id=' + item.id
					})
				}
				
			},
			changeType(index){
				var that = this
				that.showIndex = index
				if(index == 0){
					that.isShowShangquan = true
					that.isShowClass = false
				}else{
					that.isShowClass = true
					that.isShowShangquan = false
				}
			},
			classItemClick(item,index){
				var that = this
				that.isShowClass = false
				if(index == 99999){
					that.type_id = '0'
					that.curTypeName = that.i18n.rank.quanbufenlei
				}else{
					that.type_id = item.id
					that.curTypeName = item.use_name
				}
				that.requestData()
			},
			sqItemClick(item,index){
				var that = this
				that.isShowShangquan = false
				if(index == 99999){
					that.circle_id = '0'
					that.curSQName = that.i18n.rank.quanbushangquan
				}else{
					that.circle_id = item.id
					that.curSQName = item.use_name
				}
				that.requestData()
			},
			doHideClassView(){
				this.isShowClass = false
				this.isShowShangquan = false
				console.log('doHideClassView')
			},
			requestData(){
				var that = this
				var url;
				if(that.type == 'meishi'){
					url = 'FineFood.CircleRanking';
				}else if(that.type == 'zhaodian'){
					url = 'LookingShop.RankingList';
				}
				
				that.http.sendRequest(url, {'type_id':that.type_id,'circle_id':that.circle_id,'p':1}).then(function(res) {
					if (res.code == 0) {
						setTimeout(function() {
							that.listArray = res.info[0]
						}, 10);
					}
				})
			},
			getCLass(){
				var that = this
				var tid;
				if(that.type == 'meishi'){
					tid = 1;
				}else if(that.type == 'zhaodian'){
					tid = 4;
				}
				that.http.sendRequest('FineFood.FoodType', {'type_id':tid,'level':1}).then(function(res) {
					if (res.code == 0) {
						that.classList = res.info[0]
					}
				})
			},
			getCircle(){
				var that = this
				var tid;
				if(that.type == 'meishi'){
					tid = 1;
				}else if(that.type == 'zhaodian'){
					tid = 4;
				}
				that.http.sendRequest('FineFood.GetCateCircle', {'type_id':tid}).then(function(res) {
					if (res.code == 0) {
						that.sqList = res.info[0]
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
		background-color: #f5f6f7;
		overflow: hidden;
	}

	.top {
		width: 100%;
		height: 240px;
		position: relative;
	}

	.topImage {
		width: 32px;
		height: 53px;
	}

	.jianbian {
		background-image: -webkit-linear-gradient(bottom, #FFFDF8, #F8E6DC);

		-webkit-background-clip: text;

		-webkit-text-fill-color: transparent;
	}

	.item_back {
		width: calc(100% - 30px);
		height: 96px;
		margin-left: 15px;
		border-radius: 8px;
		margin-top: 10px;
		overflow: hidden;
		position: relative;
		background-color: #FFF;
		align-items: center;
	}



	.item_image {
		/* margin-top: 12px; */
		margin-left: 12px;
		width: 96px;
		height: 72px;
		border-radius: 4px;
		overflow: hidden;
		/* background-color: #ff00dd; */
	}

	.item_biaoti {
		/* margin-top: 8px; */
		height: 22px;
		line-height: 22px;
		font-size: 16px;
		font-weight: bold;
		color: #181818;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		/* max-width: calc(100% - 20px); */
	}

	.item_content {
		text-overflow: ellipsis;

		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;

		display: -moz-box;
		-moz-line-clamp: 3;
		-moz-box-orient: vertical;

		overflow-wrap: break-word;
		word-break: break-all;
		white-space: normal;
		overflow: hidden;
	}

	.item_content_word {
		
		color: #676767;
		font-size: 11px;
		
	}
	.labellabel{
		position: absolute;
		left: 12px;
		top: 0;
		width: 31px;
		height: 42px;
		text-align: center;
		color: #FFF;
		font-weight: bold;
		background-size: 100% 100%;
		
	}
	.classView {
		position: absolute;
		top: 240px;
		background-color: rgba(0, 0, 0, 0.6);
		width: 100%;
	}
	.classItem {
		width: 100%;
		height: 40px;
		line-height: 40px;
		padding-left: 15px;
		font-size: 14px;
	}
</style>
