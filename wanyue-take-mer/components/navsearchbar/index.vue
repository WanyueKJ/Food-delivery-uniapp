<template>
	<view>
		<view :class="message == true?'statuscolor':'clearcolor'" class="statusbar" :style="'height:' + top + 'px;'">
		</view>
		<view class="navtion" :style="fixed?'position: fixed;':''">
			<view v-if="shopdetail == false" class="navbar"
				:style="'height:' + menuButtonHeight + 'px;width:calc(100% - ' + menuleft + 'px);'">
				<view v-if="back == false && close == false" @click="goaddress" class="pagetop-address row">
					<text class="oneline">{{address}}</text>
					<!-- <image src="../../static/image/addressjian.png" mode="aspectFit"></image> -->
				</view>
				<view v-if="close == true" @click="goback">
					<!-- <image src="../../static/image/guanbi.png" class="backimage"></image> -->
				</view>

				<view v-if="back == true" @click="goback">
					<!-- <image src="../../static/image/backimage.png" class="backimage"></image> -->
				</view>

				<view v-if="back == false && close == false" @click="search"
					:class="message?'searchbar':'searchnomessage'">
					<!-- <image class="search_icon" src="../../static/image/sousuo.png"></image> -->
					<input :disabled="true" :placeholder="placeholder" class="search_input"
						placeholder-style="color:#CCCCCC;" />
				</view>

				<view v-if="back == true || close == true" @click="search"
					:class="shopcar?'searchbar_back_shop':'searchbar_back'">
					<!-- <image class="search_icon" src="../../static/image/sousuo.png"></image> -->
					<input :disabled="true" :placeholder="placeholder" class="search_input"
						placeholder-style="color:#CCCCCC;" />
				</view>
				<!-- <image @click="shopcar" v-if="shopcar == true" class="xiaoxi" src="../../static/image/gouwuche.png"> -->

					<!-- <image @click="gomessage" v-if="message == true" class="xiaoxi" src="../../static/image/xiaoxi.png">
					</image> -->
			</view>
			<view v-if="shopdetail == true" class="navbar"
				:style="'height:' + menuButtonHeight + 'px;width:calc(100% - ' + menuleft + 'px);'">
				<view @click="goback" class="backimagewhite row">
					<!-- <image src="../../static/image/fanhuiwhite.png" class="backimagewhiteimage"></image> -->
				</view>
				<view @click="goshare" class="shareview row">
					<!-- <image src="../../static/image/fenxiang.png" class="backimagewhiteimage"></image> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			fixed: {
				type: Boolean,
				default: false
			},
			placeholder: {
				type: String,
				default: '搜索商品'
			},
			close: {
				type: Boolean,
				default: false
			},
			back: {
				type: Boolean,
				default: false
			},
			shopcar: {
				type: Boolean,
				default: false
			},
			message: {
				type: Boolean,
				default: false
			},
			shopdetail: {
				type: Boolean,
				default: false
			},
			address: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				menuleft: 0,
				menuButtonHeight: 32,
				top: 10,
			}
		},
		created() {
			// #ifndef H5
			this.top = getApp().globalData.top
			this.menuButtonHeight = getApp().globalData.menuButtonHeight
			this.menuleft = getApp().globalData.menuButtonWidth + 10
			// #endif
		},
		methods: {
			goback() {
				this.$emit('goback')
			},
			goaddress() {
				this.$emit('goaddress')
			},
			search() {
				this.$emit('gosearch')
			},
			gomessage() {
				this.$emit('gomessage')
			}
		}
	}
</script>

<style>
	@import url("./index.css");
</style>
