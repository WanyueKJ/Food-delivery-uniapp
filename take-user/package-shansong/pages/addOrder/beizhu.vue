<template>
	<view class="content">
		
		<textarea type="text" :value="beizhuStr" :placeholder="i18n.shansong.beizhutip" class="inputClass" @input="input"></textarea>
		<view @click="doAddBeizhu()" class="wanchengBtn">{{i18n.shansong.wancheng}}</view>
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
				beizhuStr: ''
			}
		},
		onLoad(option) {
			console.log(option.beizhu)
			this.beizhuStr = option.beizhu
		},
		methods: {
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
		background-color: #FF5725;
		text-align: center;
		border-radius: 5px;
	}
</style>
