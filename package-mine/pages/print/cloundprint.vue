<template>
	<view>
		<wybar @clickLeft="back" :titleText="title" :rightText="i18n.mine.save" @clickRight="save"></wybar>
		<view class="topimg">
			<image class="bgimg" src="../../static/printbg@2x.png" mode="aspectFit"></image>
		</view>
		<view v-if="isclound == 1">
			<view class="item">
				<text>打印机名称:</text>
				<input class="inputView" type="text" :value="name" placeholder="请输入打印机名称" @input="inputname" />
			</view>
			<view class="item">
				<text>无线打印机终端号:</text>
				<input class="inputView" type="text" :value="xuliehao" placeholder="请输入终端号" @input="inputxuliehao" />
			</view>
			<view class="item">
				<text>无线打印机API密钥:</text>
				<input class="inputView" type="text" :value="secretkey" placeholder="请输入API密钥" @input="inputsecretkey" />
			</view>
			<view class="item">
				<text>无线打印机用户UID:</text>
				<input class="inputView" type="text" :value="uid" placeholder="请输入用户UID" @input="inputuid" />
			</view>
			<view class="item">
				<text>无线打印机终端ID:</text>
				<input class="inputView" type="text" :value="clientID" placeholder="请输入终端ID" @input="inputkey" />
			</view>
			<view class="item">
				<text>默认打印份数:</text>
				<view class="rightview">
					<image class="minusimg" @click="minusCopy()" src="../../static/minus@2x.png" mode="aspectFit"></image>
					<view class="copyview">{{copynumber}}份</view>
					<image class="addimg" @click="addCopy()" src="../../static/add@2x.png" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		<view v-else>
			<view class="item">
				<text>打印数量:</text>
				<view class="rightview">
					<image class="minusimg" @click="minusCopy()" src="../../static/minus@2x.png" mode="aspectFit"></image>
					<text>{{copynumber}}份</text>
					<image class="addimg" @click="addCopy()" src="../../static/add@2x.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="item">
				<text>小票样式:</text>
				<input class="inputView" type="text" :value="uid" placeholder="请输入用户UID" @input="inputuid" />
			</view>
			<view class="item">
				<text>小票间距:</text>
				<input class="inputView" type="text" :value="key" placeholder="请输入终端密钥" @input="inputkey" />
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
		
		data() {
			return {
				isclound:1,//云打印，0表示蓝牙打印
				name:'',
				xuliehao:'',
				secretkey:'',
				clientID:'',
				uid:'',
				copynumber:1,
				title:''
			}
		},
		onLoad(e) {
			var that = this
			that.isclound = e.type
			if(e.type == 1){
				that.title = that.i18n.mine.cloundset
			}else{
				that.title = that.i18n.mine.bluetooth
			}
			this.getData()
		},
		methods:{
			save(){
				var param = {'name':this.name,
				             'develop_id':this.uid,
							 'printing_api_key':this.secretkey,
							 'printing_client_id':this.clientID,
							 'terminal_number':this.xuliehao,
							 'copies':String(this.copynumber)
							 }
				this.http.sendRequest('Users.UpdateYLYConfig',param).then(function(res){
					if(res.code == 0){
						uni.navigateBack({
							
						})
					}
				})
			},
			back(){
				uni.navigateBack({
					
				})
			},
			inputname(e){
				this.name = e.target.value;
			},
			inputxuliehao(e){
				this.xuliehao = e.target.value;
			},
			inputsecretkey(e){
				this.secretkey = e.target.value;
			},
			inputuid(e){
				this.uid = e.target.value;
			},
			inputkey(e){
				this.clientID = e.target.value;
			},
			addCopy(){
				this.copynumber++
			},
			minusCopy(){
				if(this.copynumber > 1){
					this.copynumber--
				}
				
			},
			getData(){
				var that = this
				this.http.sendRequest('Users.GetYLYConfig',{}).then(function(res){
					if(res.code == 0){
						let dic = res.info[0]
						that.name = dic.name
						that.uid = dic.develop_id//开发者ID
						that.secretkey = dic.printing_api_key//应用密钥
						that.clientID = dic.printing_client_id//应用ID
						that.xuliehao = dic.terminal_number//终端号
						that.copynumber = parseInt(dic.copies)
					}
				})
			}
			
		}
	}
</script>
	
<style>
	page{
		width: 100%;
		height: 100%;
		background-color: #f5f6f7;
	}
	.topimg{
		height: 200px;
		width: 100%;
		background-color: rgb(245, 245, 245);
		display:flex;
		align-items:center;
		justify-content: center;
		/* margin-top: 50px; */
	}
	.bgimg{
		width: 88px;
		height: 88px;
		
	}
	.item{
		background-color: white;
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		border-bottom: 1px solid #f0f0f0;
	}
	.item text{
		height: 20px;
		line-height: 20px;
		color: #333;
		font-size: 14px;
		margin-left: 10px;
	}
	.inputView{
		margin-left: 10px;
		height: 45px;
		line-height: 45px;
		font-size: 14px;
		color: #333;
		flex: 1;
		margin-right: 10px;
	}
	.rightview{
		margin-left: 50px;
		flex-direction: row;
		align-items: center;
		height: 45px;
		display: flex;
	}
	.minusimg{
		width: 30px;
		height: 30px;
		margin-left: 5px;
	}
	.copyview{
		color: #00C1DE;
		font-size: 14px;
		margin-left: 5px;
	}
	.addimg{
		width: 30px;
		height: 30px;
		margin-left: 5px;
	}
	
	
	
	
</style>