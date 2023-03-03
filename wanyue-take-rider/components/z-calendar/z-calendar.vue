<template>
	<view class="z-calendar">
		<view class="z-calendar-header" style="display: flex;flex-direction: row;align-items: center;">
			<image @click="previousYear" src="../../static/image/leftyear.png" class="leftmonth"></image>
			<image @click="previousMonth" src="../../static/image/lefttmonth.png" class="leftyear"></image>
			<view class="z-calendar-center">
				{{ timeStr }}
			</view>
			<image @click="nextMonth" src="../../static/image/righttmonth.png" class="rightyear"></image>
			<image @click="nextYear" src="../../static/image/rightyear.png" class="rightmonth"></image>
		</view>
		<view class="z-calendar-week">
			<view class="z-calendar-day" v-for="day in weeks" :key="day">{{
        day
      }}</view>
		</view>
		<view class="z-calenda-wrap">
			<swiper class="swiper" :indicator-dots="false" :autoplay="false" @change="change" :current="current"
				:circular="true" :disable-touch="!touchSwitch">
				<swiper-item v-for="i in [0, 1, 2]" :key="i">
					<view class="swiper-item">
						<view class="z-calendar-dates">
							<view class="z-calendar-date" v-for="date in current === i
                  ? daysMap.curs
                  : current - i === 1 || current - i === -2
                  ? daysMap.pres
                  : daysMap.nexts" :key="date.timestamp">
								<view class="z-calendar-date-inner" @click="dateClick(date)" :class="{
                    istoday: date.isToday,
                    ishighlight: date.isHighlight,
                    notmonth: date.isPreMonth || date.isNextMonth,
                  }">
									{{ date.date }}
									<view class="isdot" v-show="date.isDot" :style="{
                      top: dotPosition.top + 'rpx',
                      right: dotPosition.right + 'rpx',
                      background: dotColor,
                    }"></view>
								</view>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	const WEEKS = ["日", "一", "二", "三", "四", "五", "六"];
	import {
		parseTime,
		getDateList,
		compareDates
	} from "./date-util";
	export default {
		name: "ZCalendar",
		props: {
			type: {
				type: String,
				default: "date", // 模式
			},
			timeFormatter: {
				type: String,
				default: "yyyy年MM月", // 头部日期月份格式化
			},
			touchSwitch: {
				type: Boolean,
				default: true, // 是否可以滑动切换
			},
			showYearControl: {
				type: Boolean,
				default: true, // 是否显示上一年下一年控制按钮
			},
			showMonthControl: {
				type: Boolean,
				default: true, // 是否显示上一月下一月控制按钮
			},
			firstDayOfWeek: {
				default: 1,
				type: Number,
				validator: (val) => val === 1 || val === 7, //是从周一开始还是周日开始
			},
			value: {
				type: Date,
				default () {
					return new Date();
				},
			},
			dotDates: {
				type: Array,
				default () {
					return [];
				},
			},
			dotPosition: {
				type: Object, // 打点小圆点的位置
				default () {
					return {
						top: 10,
						right: 16,
					};
				},
			},
			dotColor: {
				type: String,
				default: 'rgba(0,0,0,0)', // 打卡圆点的颜色
			},
		},
		data() {
			return {
				pageDate: new Date(),
				currentDate: this.value,
				current: 1,
			};
		},
		watch: {
			value(val) {
				this.currentDate = val;
			},
		},
		computed: {
			timeStr() {
				return parseTime(this.pageDate, this.timeFormatter);
			},
			weeks() {
				if (this.firstDayOfWeek === 7) {
					return WEEKS;
				} else {
					return WEEKS.slice(1).concat(["日"]);
				}
			},
			daysMap() {
				let d = this.pageDate;
				let preD = new Date(
					d.getFullYear(),
					d.getMonth() - 1,
					1,
					d.getHours(),
					d.getMinutes()
				);
				let nextD = new Date(
					d.getFullYear(),
					d.getMonth() + 1,
					1,
					d.getHours(),
					d.getMinutes()
				);
				let pres = getDateList(preD, this.firstDayOfWeek);
				let curs = getDateList(d, this.firstDayOfWeek);
				let nexts = getDateList(nextD, this.firstDayOfWeek);

				curs.forEach((item) => {
					item.isHighlight = compareDates(item.dateObj, this.currentDate);
					item.isDot = !!this.dotDates.find((i) => {
						return compareDates(item.dateObj, new Date(i.date));
					});
				});

				return {
					pres,
					curs,
					nexts,
				};
			},
		},

		mounted() {},
		methods: {
			changeMonth(incrementBy) {
				const date = this.pageDate;
				this.pageDate = new Date(
					date.getFullYear(),
					date.getMonth() + incrementBy,
					date.getDate()
				);
				this.setCurrentDate2();
				this.emitMonthChange();
			},
			changeYear(incrementBy) {
				const date = this.pageDate;
				this.pageDate = new Date(
					date.getFullYear() + incrementBy,
					date.getMonth(),
					date.getDate()
				);
				this.setCurrentDate2();
				this.emitMonthChange();
			},
			dateClick(e) {
				console.log(e)
				const {
					dateObj,
					isPreMonth,
					isNextMonth
				} = e;
				if (isPreMonth || isNextMonth) {
					return;
				}

				var aaaa = dateObj
				
				// 复制副本
				this.currentDate = new Date(
					aaaa.getFullYear(),
					aaaa.getMonth(),
					aaaa.getDate()
				);
				let month = parseInt(aaaa.getMonth()) + 1
				if (month < 10){
					month = '0' + month
				}
				let day = parseInt(aaaa.getDate())
				if (day < 10){
					day = '0' + day
				}
				var times = aaaa.getFullYear() + '-' + month + '-' + day
				this.$emit("input", this.currentDate);
				this.$emit("on-selected", times);
			},
			previousMonth() {
				this.changeMonth(-1);
			},
			nextMonth() {
				this.changeMonth(+1);
			},
			previousYear() {
				this.changeYear(-1);
			},
			nextYear() {
				this.changeYear(+1);
			},
			setCurrentDate2() {
				// 切换月份或者年份之后，默认选中当前月的1号
				const y = this.pageDate.getFullYear();
				const m = this.pageDate.getMonth();
				this.currentDate = new Date(y, m, 1);
				this.$emit("input", this.currentDate);
				// this.$emit("on-selected", this.currentDate);
			},
			setCurrentDate() {
				// 切换月份或者年份之后，默认选中当前月的1号
				const y = this.pageDate.getFullYear();
				const m = this.pageDate.getMonth();
				this.currentDate = new Date(y, m, 1);
				this.$emit("input", this.currentDate);
				this.$emit("on-selected", this.currentDate);
			},
			emitMonthChange() {
				this.$emit("month-change", this.currentDate);
			},
			change(e) {
				let preCurrent = this.current;
				let current = e.detail.current;
				this.current = current;
				if (current - preCurrent === 1 || current - preCurrent === -2) {
					this.nextMonth();
				} else if (current - preCurrent === -1 || current - preCurrent === 2) {
					this.previousMonth();
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "./fonts/iconfont.css";

	.leftyear {
		position: absolute;
		margin-left: 54px;
		width: 22px;
		height: 22px;
	}

	.leftmonth {
		position: absolute;
		margin-left: 15px;
		width: 22px;
		height: 22px;
	}

	.rightyear {
		position: absolute;
		right: 54px;
		width: 22px;
		height: 22px;
	}

	.rightmonth {
		position: absolute;
		right: 15px;
		width: 22px;
		height: 22px;
	}

	.z-calendar {
		width: 100%;

		&-header {
			display: flex;
			flex-flow: row nowrap;
			justify-content: flex-start;
			align-content: center;
			align-items: center;
			font-size: 18px;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			height: 70px;
			line-height: 70px;
		}

		&-left,
		&-right {
			width: 160rpx;
			font-size: 32rpx;
			color: rgba(0, 0, 0, 0.45);
		}

		&-center {
			flex: 1;
			text-align: center;
		}

		&-left {
			text-align: left;
		}

		&-right {
			text-align: right;
		}

		&-week {
			display: flex;
			flex-flow: row nowrap;
			justify-content: flex-start;
			align-items: center;
			height: 60rpx;
			line-height: 60rpx;
			font-size: 34rpx;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			margin-top: 16rpx;
		}

		&-day {
			flex: 1;
			text-align: center;
			height: 100%;
		}

		&-dates {
			display: flex;
			flex-flow: row wrap;
			justify-content: flex-start;
			color: rgba(51, 51, 51, 1);
			font-size: 18px;
		}

		&-date {
			height: 75rpx;
			width: calc(100% / 7);
			text-align: center;
			margin-top: 12rpx;
			line-height: 75rpx;
		}

		&-date-inner {
			width: 75rpx;
			height: 75rpx;
			margin: 0 auto;
			position: relative;
		}

		.swiper {
			height: 516rpx;
		}
	}

	.pre-month {
		margin-left: 40rpx;
	}

	.next-month {
		margin-right: 40rpx;
	}

	.istoday {
		color: #FF5725;
	}

	.notmonth {
		color: rgba(0, 0, 0, 0.25);
	}

	.ishighlight {
		background: #FF5725;
		color: #ffffff;
		border-radius: 4px;
	}

	.isdot {
		display: block;
		content: "";
		position: absolute;
		width: 8rpx;
		height: 8rpx;
		border-radius: 4px;
	}
</style>
