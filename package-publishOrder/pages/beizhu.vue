<template>
	<view>
		<wybar @clickLeft="back" :titleText="title" :rightText="i18n.index.done1" @clickRight="doAddBeizhu"></wybar>
		<view class="content">
			<textarea type="text" :value="beizhuStr" :placeholder="i18n.postorder.beizhutip" class="inputClass" @input="input"></textarea>
		
		</view>
	</view>
	
</template>

<script>
	import wybar from '../../components/wybar/wyBar.vue'
	
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
				beizhuStr: '',
				title:''
			}
		},
		onLoad(option) {
			console.log(option.beizhu)
			this.beizhuStr = option.beizhu
			this.title = this.i18n.titles.beizhu
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			input(e) {
				this.beizhuStr = e.detail.value
			},
			doAddBeizhu(){
				uni.navigateBack({
				
				}),
				uni.$emit('beizhuChange', this.beizhuStr)
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
	}

	.content {
		background-color: #FFFFFF;
		width: 100%;
		height: 100%;
	}

	.inputClass {
		margin-left: 15px;
		margin-top: 20px;
		width: calc(100% - 38px);
		padding-top: 8px;
		padding-left: 8px;
		border-radius: 10px;
		border:1px solid #F2F2F2;
		background-color: #fafafa;
		height: 120px;
	}
	.wanchengBtn{
		margin-top: 20px;
		width: calc(100% - 30px);
		margin-left: 15px;
		height: 40px;
		line-height: 40px;
		font-size: 15px;
		color: #FFFFFF;
		background-color: #7900B2;
		text-align: center;
		border-radius: 5px;
	}
</style>
