<template>
	<view class="row">
		<view v-for="(item,index) in 10" :key="index" @click="clickStars(index+1)">
			<image mode="aspectFit" :style="{'width': size/2 + 'rpx','height':size+'rpx'}" v-if="index%2 == 0" :src=" index < valueSync ? star_fill_l : star_empty_l"></image>
			<image  mode="aspectFit" :style="{'width': size/2 + 'rpx','height':size+'rpx','margin-right':6+'px'}" v-else :src=" index < valueSync ? star_fill_r : star_empty_r"></image>
		</view>
		<!-- <image src="static/star-shi-r.png" mode=""></image> -->
	</view>
</template>

<script>
	export default{
		name:'ratestar',
		props:{
			star_fill_l: {
				//亮星星
				type: [String],
				default: require('./static/xingshil.png')
			},
			star_fill_r: {
				//亮星星
				type: [String],
				default: require('./static/xingshir.png')
			},
			star_empty_l: {
				//暗星星
				type: [String],
				default: require('./static/star-xu-l.png') 
			},
			star_empty_r: {
				//暗星星
				type: [String],
				default: require('./static/star-xu-r.png') 
			},
			size: {
				// 星星的大小
				type: [Number, String],
				default: 30
			},
			value: {
				// 当前评分
				type:[Number, String],
			},
			max: {
				// 最大评分
				type: [Number, String],
				default: 5
			},
			disabled: {
				// 是否可点击
				type: [Boolean, String],
				default: false
			},
			margin: {
				// 星星的间距
				type: [Number, String],
				default: '0 5'
			},
			tag: {
				type: [Number],
				default: 0
			}
		},
		data() {
			return {
				valueSync: 0,
			};
		},
		created() {
			this.valueSync = parseInt(this.value/0.5);
			console.log(this.size)
		},
		methods: {
			clickStars(i){
				
			  if (this.disabled) {
				  console.log(11111111111111111)
			  	return;
			  }
			  
			  this.valueSync = i
			  this.$emit("change", {
			  	value: this.valueSync*0.5,
				tag:this.tag
			  });
			},
			
		}
	}
</script>

<style>
</style>
