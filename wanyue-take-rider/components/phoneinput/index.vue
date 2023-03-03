<template>
	<view class="uni-mask">
		<view class="codeview">
			<image @click="cancleinput" class="cancle" src="../../static/image/guanbi.png"></image>
			<view class="codetext">
				{{i18n.order.gaozhigukeshuaxin}}
			</view>
			<view class="inputrow row">
				<input :focus="focus1" :maxlength="1" v-model="num1" type="number" @input="codeinput1"
					style="margin-right: 12px;" class="input" />
				<input :focus="focus2" :maxlength="1" v-model="num2" type="number" @input="codeinput2"
					style="margin-right: 12px;" class="input" />
				<input :focus="focus3" :maxlength="1" v-model="num3" type="number" @input="codeinput3"
					style="margin-right: 12px;" class="input" />
				<input :focus="focus4" :maxlength="1" v-model="num4" type="number" @input="codeinput4" class="input" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				focus1: true,
				focus2: false,
				focus3: false,
				focus4: false,
				num1: '',
				num2: '',
				num3: '',
				num4: '',
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		created() {

		},
		methods: {
			cancleinput(){
				this.$emit('cancleinput')	
			},
			focusno(){
				if (this.num1.length == 1 && this.num2.length == 1 && this.num3.length == 1 && this.num4.length == 1) {
					this.focus1 = false
					this.focus2 = false
					this.focus3 = false
					this.focus4 = false
					var code = String(this.num1) + String(this.num2) + String(this.num3) + String(this.num4)
					this.$emit('finishcode',code)
				}
			},
			codeinput1(e) {
				this.num1 = e.detail.value
				if (this.num1.length == 1) {
					this.focus1 = false
					this.focus2 = true
				}
				this.focusno()
				
			},
			codeinput2(e) {
				console.log(e.detail.value)
				this.num2 = e.detail.value
				if (this.num2.length == 1) {
					this.focus1 = false
					this.focus2 = false
					this.focus3 = true
				}
				this.focusno()
			},
			codeinput3(e) {
				this.num3 = e.detail.value
				if (this.num3.length == 1) {
					this.focus1 = false
					this.focus2 = false
					this.focus3 = false
					this.focus4 = true
				}
				this.focusno()
			},
			codeinput4(e) {
				this.num4 = e.detail.value
				if (this.num4.length == 1) {
					this.focus1 = false
					this.focus2 = false
					this.focus3 = false
					this.focus4 = false
				}
				this.focusno()
			},
		}
	}
</script>

<style>
	.cancle {
		position: absolute;
		right: 10px;
		top: 10px;
		width: 20px;
		height: 20px;
	}
	.input {
		width: 52px;
		height: 52px;
		line-height: 20px;
		text-align: center;
		border-radius: 2px;
		border: 1px solid rgba(232, 232, 232, 1);
		flex-shrink: 0;
	}

	.inputrow {
		margin-top: 30px;
		width: calc(100% - 40px);
		margin-left: 20px;
		height: 60px;
	}

	.codetext {
		color: rgba(50, 50, 50, 1);
		font-size: 14px;
		height: 40px;
		width: calc(100% - 40px);
		margin-left: 20px;
		margin-top: 40px;
	}

	.codeview {
		width: 288px;
		height: 196px;
		background-color: #FFFFFF;
		border-radius: 8px;
		position: relative;
	}
</style>
