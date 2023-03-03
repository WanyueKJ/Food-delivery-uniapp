<template>
	<view class="rate-media">
		<view class="rate-media-body">
			<view class="rate-media-cell"
				  v-for="(item,index) in max"
				  :key="index"
				  @click="clickStars(index)">
				<image :style="{'width': size + 'rpx','height':size+'rpx','margin':margin+'rpx'}" :src="valueSync>index?star_fill:star_empty"/></image>
			</view>
		</view>
		<view class="rate-media-info" v-if="is_score||is_attitude">
			<view v-if="is_score">{{is_infos_text()}}</view>
			<view v-if="is_attitude">{{rateScoreText}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'rate',
		props:{
			star_fill: {
				//亮星星
				type: [String],
				default: require('./rate/star.png')
			},
			star_empty: {
				//暗星星
				type: [String],
				default: require('./rate/star_empty.png') 
			},
			score:{
				type:Array,
				default:function(){
					return ['1分','2分','3分','4分','5分']
				}
			},
			is_score:{
				type: [Boolean, String],
				default: false
			},
			attitude:{
				type: Array,
				default:function(){
					return ['非常不满意，各方面都很差', '不满意，比较差', '一般，还需改善', '比较满意，仍可改善', '非常满意,无可挑剔']
				}
			},
			is_attitude:{
				type: [Boolean, String],
				default: false
			},
			size: {
				// 星星的大小
				type: [Number, String],
				default: 48
			},
			value: {
				// 当前评分
				type: [Number, String],
				default: 0
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
		},
		data() {
			return {
				valueSync: 0,
				rateScoreText:"",
			};
		},
		created() {
			this.valueSync = parseInt(this.value);
			console.log(this.star_fill,this.star_empty)
		},
		methods: {
			clickStars(i){
				
			  if (this.disabled) {
				  console.log(11111111111111111)
				  
			  	return;
			  }
			  
			  this.rateScoreText = this.attitude[i]||''
			  this.valueSync = i+1
			  this.$emit("change", {
			  	value: this.valueSync,
				attitude: this.attitude[i]||'',
				score: this.score[i]||''
			  });
			},
			is_infos_text(){
				return this.score[this.valueSync-1||0]||''
			},
			// is_score_text(index){
			// 	return this.score[index]
			// }
		}
	}
</script>

<style lang="scss">
	.rate-media{
		display: flex;
		line-height: 1;
		.rate-media-body{
			display: flex;
			flex-direction: row;
		}
		.rate-media-info{
			display: flex;
			align-items: center;
			color: #FF5725;
			font-size: 30rpx;
			view:nth-child(1){
				margin:0 20rpx;
			}
			
		}
	}
</style>
