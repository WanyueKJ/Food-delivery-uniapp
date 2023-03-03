<template>
	<view class="you-scroll" ref="youScroll">
		<view class="pullDown" :style="{ transform: 'translateY('+translateY+'px)', transition: isDown ? '0s' : '0.3s' }">
			<slot name="pullDown">
				<img src="./pullDown.jpg" :class="{'down-icon': true,'animate': pullDownStatus == 3}"></img>
				<span>
					<block v-if="pullDownStatus == 1">{{downPullToRefresh}}</block>
					<block v-if="pullDownStatus == 2">{{downReleaseToRefresh}}</block>
					<block v-if="pullDownStatus == 3">{{downRefreshing}}</block>
				</span>
			</slot>
		</view>
		<scroll-view class="you-scroll-inner" ref="youScrollInner" :scroll-top="scrollToTop" scroll-with-animation scroll-y :style="{ transform: 'translateY('+translateY+'px)', transition: isDown ? '0s' : 'transform 0.3s' }"
		 @touchstart="startFn" @touchmove="moveFn" @touchend="endFn" @touchcancel="endFn" @scroll="scroll">
			<view class="you-scroll-content">
				<slot></slot>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollToTop: 0,
				scrollTop: 0,
				oldTop: 0,
				sPageY: 0,
				mPageY: 0,
				ePageY: 0,
				translateY: 0,
				pullDownStatus: 1, // 1：下拉刷新 2：松开刷新 3：刷新中
				isDown: false
			};
		},
		props: {
			pullDownDistance: {
				type: Number,
				default: 50 // 下拉刷新距离
			},
			reachBottomDistance: {
				type: Number,
				default: 30 // 上拉加载距离
			},
			downPullToRefresh: {
				type: String,
				default: '下拉刷新'
			},
			downReleaseToRefresh: {
				type: String,
				default: '松开刷新'
			},
			downRefreshing: {
				type: String,
				default: '刷新中…'
			},
		},
		methods: {
			startFn(e) {
				this.isDown = true;
				this.sPageY = e.changedTouches[0].pageY;
				this.pointY = this.translateY;
			},
			moveFn(e) {
				let view = uni.createSelectorQuery().in(this).select(".you-scroll-inner");
				view.fields({ 
					size: true, 
					scrollOffset: true
				}, data => { 
					this.scrollTop = data.scrollTop;
					this.mPageY = e.changedTouches[0].pageY;
					if (this.scrollTop <= 0) {
						let translateY = ((this.mPageY - this.sPageY)  / 2) + this.pointY;
						this.translateY = (translateY < 0 ? 0 : translateY);
						
						if(this.pullDownStatus != 3) {
							if(this.translateY < this.pullDownDistance) {
								this.pullDownStatus = 1;
							} else if(this.translateY >= this.pullDownDistance) {
								this.pullDownStatus = 2;
							}
						}
					}
				}).exec();
				
			},
			endFn(e) {
				this.isDown = false;
				this.ePageY = e.changedTouches[0].pageY;
				setTimeout(() => {
					this.translateY = this.translateY >= this.pullDownDistance ? this.pullDownDistance : 0;
					if(this.pullDownStatus == 2) { // 开始刷新
						this.pullDownStatus = 3;
						this.$emit('onPullDown',this.endPullDown);
					}
				},100)
				
				
			},
			endPullDown(mm) {
				if(this.timeout) clearTimeout(this.timeout);
				this.timeout = setTimeout(() => {
					this.translateY = 0;
					this.pullDownStatus = 1;
				}, mm || 0);
			},
			prevent(e) {  
				if(this.translateY > 0) {
					e.preventDefault();
				}
			},
			scroll(e) {
				this.$emit('onScroll',e);
				this.oldTop = e.detail.scrollTop;
				
				if(this.timeout) clearTimeout(this.timeout);
				this.timeout = setTimeout(() => {
					this.scrolltolower(e);
				},20);
			},
			scrolltolower(e) {
				let view = uni.createSelectorQuery().in(this).select(".you-scroll-inner");
				view.fields({ 
					size: true, 					
					scrollOffset: true
				}, data => { 
					if(data.scrollTop >= (e.detail.scrollHeight - data.height - this.reachBottomDistance)) {
						this.$emit('onLoadMore',e);
					}
				}).exec();
				
			},
			isWeixinCient(){
				var ua = navigator.userAgent.toLowerCase();
				if(ua.match(/MicroMessenger/i)=="micromessenger") {
					return true;
				} else {
					return false;
				}
			},
			goTop(top) {
				this.scrollToTop = this.oldTop;
				this.$nextTick(function() {
					this.scrollToTop = top || 0;
				});
			}
		},
		mounted() {
			// #ifdef H5
			if(this.isWeixinCient()) {
				document.body.addEventListener('touchmove', this.prevent);
			}
			// #endif
		},
		destroyed() {
			// #ifdef H5
			if(this.isWeixinCient()) {
				document.body.removeEventListener('touchmove', this.prevent);
			}
			// #endif
		}
	}
</script>

<style scoped>
	.you-scroll {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		// background-color: #eee;
	}
	.you-scroll .pullDown {
		width: 100%;
		height: 40px;
		line-height: 50px;
		text-align: center;
		font-size: 14px;
		overflow: hidden;
		transform: translateY(-100%);
		position: absolute;
		top: -40px;
		left: 0;
	}
	.you-scroll .pullDown .down-icon {
		width: 40px;
		height: 32px;
		display: inline-block;
		vertical-align: middle;
	}
	.you-scroll .pullDown .animate {
		-webkit-animation: scaleIcon 1s infinite linear;
		-moz-animation: scaleIcon 1s infinite linear;
		-ms-animation: scaleIcon 1s infinite linear;
		animation: scaleIcon 1s infinite linear;
	}
	.you-scroll .pullDown span {
		white-space: nowrap;
		overflow: hidden;
		display: inline-block;
		vertical-align: middle;
	}
	
	.you-scroll .you-scroll-inner {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
	}
	.you-scroll-content {
		overflow: hidden;
	}

	@-webkit-keyframes scaleIcon {
		0% {
			transform: scaleY(1);
		}
		40% {
			transform: scaleY(0.8);
		}
		80% {
			transform: scaleY(0.9);
		}
		100% {
			transform: scaleY(1);
		}
	}
	@-moz-keyframes scaleIcon {
		0% {
			transform: scaleY(1);
		}
		40% {
			transform: scaleY(0.8);
		}
		80% {
			transform: scaleY(0.9);
		}
		100% {
			transform: scaleY(1);
		}
	}
	@-ms-keyframes scaleIcon {
		0% {
			transform: scaleY(1);
		}
		40% {
			transform: scaleY(0.8);
		}
		80% {
			transform: scaleY(0.9);
		}
		100% {
			transform: scaleY(1);
		}
	}
	@keyframes scaleIcon {
		0% {
			transform: scaleY(1);
		}
		40% {
			transform: scaleY(0.8);
		}
		80% {
			transform: scaleY(0.9);
		}
		100% {
			transform: scaleY(1);
		}
	}
</style>
