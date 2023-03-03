<template>
	<view>
		<wybar @clickLeft="back" :titleText="i18n.shop.addyouhui" :rightText="i18n.index.publish" @clickRight="save">
		</wybar>
		<scroll-view scroll-y="true" :style="'height:' + scrollHeight + 'px;'"
			style="background-color: #F5F5F5; height: 100%;width: 100%;" class="column">
			<view class="inputBackView3">
				<view class="leftbtn"
					:style="isChinese?'color:#ffffff; background: #00c1de;':'color:#181818; background: #C7C5C8;'"
					@click="changeChinese()">{{i18n.shop.chinese}}</view>
				<view class="rightbtn"
					:style="isChinese?'color:#181818;background: #C7C5C8;':'color:#ffffff; background: #00c1de;'"
					@click="changeTh()">{{i18n.shop.th}}</view>
			</view>
			<view class="top_title">{{i18n.shop.youhuiSpec}}</view>
			<view class="inputBackView">
				<view class="title">{{i18n.shop.youhuiname}}</view>
				<input type="text" :value="isChinese? name:name_th" :placeholder="i18n.shop.namelimit" class="inputV" maxlength="10" @input="inputname" />
			</view>
			<view class="inputBackView">
				<view class="title">{{i18n.shop.youhuiValue}}</view>
				<input type="digit" :value="price" :placeholder="i18n.shop.write" class="inputV" @input="inputprice" />
				<view style="margin-right: 20px;color:#6f6f6f;font-size: 16px;">{{i18n.index.moneyUnit}}</view>
			</view>
			<view class="inputBackView2">
				<view class="title">{{i18n.shop.uselimit}}</view>
				<view class="rightview">
					<view class="row nolimit">
						<view style="display: flex;flex: 1;margin-left:15px;font-size: 16px;color: #181818;">
							{{i18n.shop.nolimit}}
						</view>
						<image v-if="selectedIndex == 0" src="../../../static/item-sel.png" class="rightimg"
							mode="aspectFit"></image>
						<image v-else src="../../../static/item-nor.png" mode="aspectFit" class="rightimg"
							@click="selected(0)"></image>
					</view>
					<view class="row nolimit">
						<view style="margin-left: 15px;font-size: 16px;color: #181818;">{{i18n.shop.man}}</view>
						<input type="digit" :value="pricelimit" class="inputV2" @input="inputpricelimit" />
						<view style="font-size: 16px;color: #181818;">{{i18n.index.moneyUnit}}</view>
						<image v-if="selectedIndex == 1" src="../../../static/item-sel.png" class="rightimg"
							mode="aspectFit"></image>
						<image v-else src="../../../static/item-nor.png" class="rightimg" mode="aspectFit"
							@click="selected(1)"></image>
					</view>
				</view>
			</view>
			<view class="inputBackView">
				<view class="title">{{i18n.shop.youhuiamount}}</view>
				<input type="text" :value="amount" :placeholder="i18n.shop.write" class="inputV"
					style="margin-left: 45px;" @input="inputAmount" />
				<view style="margin-right: 20px;color:#6f6f6f;font-size: 16px;">{{i18n.shop.youhuiunit}}</view>
			</view>
			<view class="top_title">{{i18n.shop.usetime}}</view>
			<view class="inputBackView">
				<view class="title">{{i18n.shop.usetime}}:</view>
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<input type="text" @click="choseStartTime()" :value="starttime" :placeholder="i18n.shop.begintime"
						class="time" :disabled="true" />
				</picker>
				<text style="margin-left: 5px ;">-</text>
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<input type="text" @click="choseEndTime()" :value="endtime" :placeholder="i18n.shop.endtime"
					class="time" :disabled="true" />
				</picker>
			</view>
		</scroll-view>
		<!-- v-if="visible" -->
		<!-- <picker-view  :indicator-style="indicatorStyle" :value="value" @change="bindChange"
			class="picker-view">
			<picker-view-column>
				<view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
			</picker-view-column>
			<picker-view-column>
				<view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
			</picker-view-column>
			<picker-view-column>
				<view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
			</picker-view-column>
		</picker-view> -->
	</view>
</template>

<script>
	import wybar from '../../../components/wybar/wyBar.vue'
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				scrollHeight: 0,
				selectedIndex: 0,
				date:currentDate,
				pricelimit: '',
				starttime: '',
				endtime:'',
				name: '',
				name_th:'',
				amount: '',
				price: '',
				choseStart: true,
				starttimeParam:'',
				endtimeParam:'',
				youhuiquanID:'',
				isAdd:true,//true新增 false编辑
				isChinese:true
				// startYear: '',
				// startMonth: '',
				// startDay: '',
				// endYear: '',
				// endMonth: '',
				// endDay: '',
				// visible: false,
				// years: [],
				// months: [],
				// days: [],
				// value: [],
				// indicatorStyle: `height: 50px;`,

			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		components: {
			wybar
		},

		onLoad(option) {
			var res = uni.getSystemInfoSync()
			this.navHeight = 64 + res.statusBarHeight
			// console.log(res.statusBarHeight)
			this.scrollHeight = res.windowHeight - this.navHeight
			if(option.id > 0){
				this.isAdd = false
				this.youhuiquanID = option.id
				this.getData()
			}else{
				this.isAdd = true
			}
			// const date = new Date()
			// this.years = []
			// this.startYear = date.getFullYear()
			// this.months = []
			// this.startMonth = date.getMonth() + 1
			// this.days = []
			// this.startDay = date.getDate()
			// for (let i = this.startYear; i <= this.startYear + 100; i++) {
			// 	this.years.push(i)
			// }
			// for (let i = 1; i <= 12; i++) {
			// 	this.months.push(i)
			// }
			// for (let i = 1; i <= 31; i++) {
			// 	this.days.push(i)
			// }
			// this.value = [9999, this.startMonth - 1, this.startDay - 1]
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			getData(){
				var that = this
				var param = {'id':this.youhuiquanID}
				this.http.sendRequest('Coupon.Read',param).then(function(data) {
					var dic = data.info[0]
					that.name = dic.name
					that.price = dic.limit_money
					that.pricelimit = dic.limit_val
					that.selectedIndex = dic.limit_type
					that.amount = dic.nums_total
					that.starttimeParam = dic.use_start
					that.endtimeParam = dic.use_end
					that.starttime = that.starttimeParam.substring(0,10)
					that.endtime = that.endtimeParam.substring(0,10)
				})	
			},
			bindDateChange: function(e) {
				if(this.choseStart){
					this.starttime = e.detail.value
					console.log(this.starttime)
					this.starttimeParam = this.starttime + ' 00:00:00'
				}else{
					this.endtime = e.detail.value
					this.endtimeParam = this.endtime + ' 23:59:59'
				}
				// this.date = e.detail.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			changeChinese() {
				this.isChinese = true
			},
			changeTh() {
				this.isChinese = false
			},
			save() {
				var param = {'name':this.name,
				             'limit_val':this.pricelimit,
							 'limit_money':this.price,
							 'limit_type':this.selectedIndex,
							 'nums_total':this.amount,
							 'use_start':this.starttimeParam,
							 'use_end':this.endtimeParam,
							 'use_type':'1'
							 }
				if(!this.isAdd){
					param = {'name':this.name,
					             'limit_val':this.pricelimit,
								 'limit_money':this.price,
								 'limit_type':this.selectedIndex,
								 'nums_total':this.amount,
								 'use_start':this.starttimeParam,
								 'use_end':this.endtimeParam,
								 'use_type':'1',
								 'id':this.youhuiquanID
								 }
				}
				var url = this.isAdd? 'Coupon.Save':'Coupon.Update'
				this.http.sendRequest(url,param).then(function(data) {
					if(data.code === 0){
						uni.navigateBack()
					}
					
				})

			},
			selected(index) {
				console.log(index)
				this.selectedIndex = index
			},
			inputname(e) {
				if(this.isChinese){
					this.name = e.detail.value
				}else{
					this.name_th = e.detail.value
				}
				
			},
			inputprice(e) {
				this.price = e.detail.value
			},
			inputAmount(e) {
				this.amount = e.detail.value
			},
			inputpricelimit(e) {
				this.pricelimit = e.detail.value
			},
			choseStartTime() {
				console.log(1111)
				// this.visible = true
				this.choseStart = true
			},
			choseEndTime() {
				// this.visible = true
				this.choseStart = false
			},
			// bindChange: function(e) {
			// 	const val = e.detail.value
			// 	if (this.choseStart) {
			// 		this.startYear = this.years[val[0]]
			// 		this.startMonth = this.months[val[1]]
			// 		this.startDay = this.days[val[2]]
			// 	} else {
			// 		this.endYear = this.years[val[0]]
			// 		this.endMonth = this.months[val[1]]
			// 		this.endDay = this.days[val[2]]
			// 	}
			// }
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #F5F5F5;
	}

	.time {
		width: 100px;
		height: 30px;
		border: 1px solid #e6e6e6;
		margin-left: 15px;
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.nolimit {
		width: 100%;
		height: 45px;
		align-items: center;
		display: flex;
	}

	.rightview {
		align-items: center;
		height: 100%;
		flex: 1;
		margin-left: 15px;
		margin-right: 20px;
		justify-content: center;
		display: flex;
		flex-direction: column;
	}

	.rightimg {
		width: 20px;
		height: 20px;
		right: 20px;
		position: absolute;
	}

	.inputBackView2 {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 90px;
		background-color: white;
		border-bottom: 1px solid #e6e6e6;
		align-items: center;
		justify-content: center;
	}

	.top_title {
		width: 100%;
		height: 44px;
		color: #6F6F6F;
		font-size: 14px;
		margin-left: 15px;
		align-items: center;
		display: flex;
		flex-direction: row;
	}

	.inputBackView {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 44px;
		background-color: white;
		border-bottom: 1px solid #e6e6e6;
		align-items: center;
	}

	.title {
		font-size: 16px;
		text-align: left;
		color: #383838;
		margin-left: 15px;
	}

	.inputV {
		margin-left: 15px;
		margin-right: 15px;
		flex: 1;
		height: 44px;
		line-height: 44px;
		top: 0;
		font-size: 14px;
	}

	.inputV2 {
		margin-left: 15px;
		margin-right: 15px;
		border: 1px solid #e6e6e6;
		height: 22px;
		line-height: 22px;
		font-size: 14px;
		width: 80px;
	}

	.picker-view {
		width: 100%;
		height: 400px;
		bottom: 0;
		position: absolute;
	}

	.item {
		height: 50px;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.inputBackView3 {
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
</style>
