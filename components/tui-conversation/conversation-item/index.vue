<template>
	<!--TODO: 默认图片在 cos 上添加 -->
	<movable-area v-if="conversation.conversationID" class="t-conversation-item-container">
		<movable-view class="t-conversation-item list-touch" direction="horizontal" @change="handleTouchMove"
			damping="100" :x="xScale" @touchstart="touchS" @touchmove="touchM" @touchend="touchE"
			:style="txtStyle">
			<view class="avatar-box">
				<image class="t-conversation-item-avatar" :src="setConversationAvatar" @error="handleImageError">
				</image>
				<view class="unread" v-if="conversation.unreadCount !== 0">
					<view class="read-text" v-if="conversation.unreadCount > 99">99+</view>
					<view class="read-text" v-else>{{ conversation.unreadCount }}</view>
				</view>
			</view>
			<view class="t-conversation-item-content">
				<label class="tui-conversation-item-name">{{ conversationName }}</label>
				<view class="tui-conversation-lastMessage">
					<text v-if="conversation.lastMessage.messageForShow.indexOf('TUIKit-kami') != -1">订单消息</text>
					<text v-else>{{ conversation.lastMessage.messageForShow }}</text>
				</view>
			</view>
			<view class="t-conversation-item-info">{{ timeago }}</view>
			<view class="list-touch t-conversation-delete" style="width: 144rpx;" @tap.stop="deleteConversation">
				{{i18n.shanchu}}</view>
		</movable-view>


	</movable-area>
</template>

<script>
	import {
		caculateTimeago
	} from '../../base/common';

	export default {
		data() {
			return {
				xScale: 0,
				conversationName: '',
				conversationAvatar: '',
				setConversationAvatar: '',
				timeago: '',
				delBtnWidth: 72,
				startX: 0,
				txtStyle: ''
			};
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		components: {},
		props: {
			conversation: {
				type: Object,
				default: () => {}
			}
		},
		watch: {
			conversation: {
				handler: function(conversation) {
					// 计算时间戳
					this.setData({
						conversationName: this.getConversationName(conversation),
						setConversationAvatar: this.setConversationAvatarHandler(conversation),
						timeago: caculateTimeago(conversation.lastMessage.lastTime * 1000)
					});
					this.$updateTimeago(conversation);
				},
				immediate: true,
				deep: true
			}
		},

		methods: {
			// 先查 remark；无 remark 查 (c2c)nick/(group)name；最后查 (c2c)userID/(group)groupID
			getConversationName(conversation) {
				if (conversation.type === '@TIM#SYSTEM') {
					return '系统通知';
				}

				if (conversation.type === 'C2C') {
					return conversation.remark || conversation.userProfile.nick || conversation.userProfile.userID;
				}

				if (conversation.type === 'GROUP') {
					return conversation.groupProfile.name || conversation.groupProfile.groupID;
				}
			},

			setConversationAvatarHandler(conversation) {
				if (conversation.type === '@TIM#SYSTEM') {
					return 'https://web.sdk.qcloud.com/component/TUIKit/assets/system.png';
				}

				if (conversation.type === 'C2C') {
					return conversation.userProfile.avatar ||
						'https://sdk-web-1252463788.cos.ap-hongkong.myqcloud.com/component/TUIKit/assets/avatar_21.png';
				}

				if (conversation.type === 'GROUP') {
					return conversation.groupProfile.avatar || '/static/static/assets/gruopavatar.svg';
				}
			},

			deleteConversation() {
				uni.showModal({
					content: '确认删除会话？',
					success: res => {
						if (res.confirm) {
							uni.$TUIKit.deleteConversation(this.conversation.conversationID);
							this.setData({
								conversation: {},
								xScale: 0
							});
						}
					}
				});
			},

			handleTouchMove(e) {
				if (!this.lock) {
					this.last = e.detail.x;
					this.lock = true;
				}

				if (this.lock && e.detail.x - this.last < -5) {
					this.setData({
						xScale: -75
					});
					setTimeout(() => {
						this.lock = false;
					}, 2000);
				} else if (this.lock && e.detail.x - this.last > 5) {
					this.setData({
						xScale: 0
					});
					setTimeout(() => {
						this.lock = false;
					}, 2000);
				}
			},

			$updateTimeago(conversation) {
				if (conversation.conversationID) {
					// conversation.lastMessage.timeago = caculateTimeago(conversation.lastMessage.lastTime * 1000);
					conversation.lastMessage.messageForShow = conversation.lastMessage.messageForShow.slice(0, 15);
				}
				this.setData({
					conversation
				});
			},

			handleImageError() {
				this.setData({
					setConversationAvatar: '/static/static/assets/gruopavatar.svg'
				});
			},
			touchS: function(e) {
				// console.log('touchS')
				if (e.touches.length == 1) {
					//设置触摸起始点水平方向位置
					this.startX = e.touches[0].clientX
					// console.log(this.startX)
				}
			},
			touchM: function(e) {
				// console.log('touchM')
				if (e.touches.length == 1) {
					//手指移动时水平方向位置
					var moveX = e.touches[0].clientX;
					//手指起始点位置与移动期间的差值
					var disX = this.startX - moveX;
					var delBtnWidth = this.delBtnWidth;
					var txtStyle = "";
					if (disX == 0 || disX < 0) { //如果移动距离小于等于0，说明向右滑动，文本层位置不变
						txtStyle = "left:0px";
					} else if (disX > 0) { //移动距离大于0，文本层left值等于手指移动距离
						txtStyle = "left:-" + disX + "px";
						if (disX >= delBtnWidth) {
							//控制手指移动距离最大值为删除按钮的宽度
							txtStyle = "left:-" + delBtnWidth + "px";
						}
					}

					// this.txtStyle = txtStyle;

				}
			},
			touchE: function(e) {
				// console.log('touchE')
				if (e.changedTouches.length == 1) {
					//手指移动结束后水平位置
					var endX = e.changedTouches[0].clientX;
					//触摸开始与结束，手指移动的距离
					var disX = this.startX - endX;
					var delBtnWidth = this.delBtnWidth;
					//如果距离小于删除按钮的1/2，不显示删除按钮
					var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "px" : "left:0px";
					//获取手指触摸的是哪一项

					this.txtStyle = txtStyle;

				}
			},
		}
	};
</script>
<style>
	@import './index.css';
</style>
