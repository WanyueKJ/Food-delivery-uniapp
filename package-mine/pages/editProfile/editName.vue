<template>
	<view>
		<wybar @clickLeft="back" :titleText="title" :rightText="savetxt" @clickRight="save"></wybar>
			<block v-if="type==1">
				
				<view class="inputback">
					<input type="text" @input="input" :value="content" class="input">
				</view>
			</block>
			<block v-else>
				<view class="inputback">
					<input type="text" @input="input" :value="content" class="input">
				</view>
			</block>
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
				userInfo: {},
				content: '',
				content_th:'',
				type:1,
				title:'',
				savetxt:'',
				isChinese:true
			}
		},
		onLoad(e) {
			var that = this
			that.type = e.type
			if(that.type == 1){
				that.title = that.i18n.mine.shopname
				
				console.log(that.content_th)
			}else{
				that.title = that.i18n.mine.shopphone
			}
			that.content = e.content
			
			that.savetxt = that.i18n.mine.save
		},
		methods: {
			back() {
				uni.navigateBack({

				})
			},
			save(){
				if(this.content.length == 0){
					uni.showModal({
						title: '',
						content: this.i18n.mine.tipname,
						showCancel: false,
						confirmText: '确定',
						success: res => {
							
						},
						fail: () => {},
						complete: () => {}
					});
					return
				}
				if(this.type == 1){
					//name
					uni.$emit('namechange',this.content,this.content_th)
				}else{
					uni.$emit('phonechange',this.content)
				}
				this.back()
			},
			changeChinese() {
				this.isChinese = true
			},
			changeTh() {
				this.isChinese = false
			},
			input(e) {
				if(this.type == 1){
					if(this.isChinese){
						this.content = e.detail.value
					}else{
						this.content_th = e.detail.value
					}
				}else{
					this.content = e.target.value
				}
				
				
			},
				
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #f5f6f7;
	}

	.inputback {
		margin-left: 10px;
		width: calc(100% - 20px);
		margin-top: 10px;
		height: 46px;
		border-radius: 8px;
		background-color: #FFF;
	}

	.input {
		margin-left: 15px;
		height: 46px;
		line-height: 46px;
		font-size: 16px;
		color: #333;
		width: calc(100% - 30px);
	}

	.save {
		left: 15px;
		width: calc(100% - 30px);
		height: 49px;
		border-radius: 8px;
		color: #FFF;
		text-align: center;
		font-size: 14px;
		font-weight: bold;
		background-color: #7900B2;
		position: absolute;
		bottom: 50px;
		line-height: 49px;
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
