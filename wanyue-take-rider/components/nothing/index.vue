<template>
	<view v-if="list.length == 0" class="nothing">
		<image src="../../static/image/xiangzi.png" mode="aspectFill"></image>
		<text>{{string}}</text>
	</view>
</template>

<script>	
	export default {
		props: {
			string: {
				type: String,
				default: 'nothing'
			},
			list: {
				type: Array,
				default: []
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	
	.nothing {
		position: absolute;
		left: calc(50% - 60px);
		top: calc(50% - 40px);
		width: 120px;
		height: 140px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.nothing image {
		width: 60px;
		height: 60px;
	}
	
	.nothing text {
		width: 100%;
		display: block;
		text-align: center;
		font-size: 18rpx;
		color: #C7C7C7;
		margin-top: 10px;
	}
	
</style>
