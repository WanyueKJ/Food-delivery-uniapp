export const toDate = function(date) {
	return isDate(date) ? new Date(date) : null;
};

export const isDate = function(date) {
	if (date === null || date === undefined) return false;
	if (isNaN(new Date(date).getTime())) return false;
	if (Array.isArray(date)) return false;
	return true;
};

export const isDateObject = function(val) {
	return val instanceof Date;
};
// 判断当月有多少天
export const daysInMonth = (year, month) => {
	return /8|3|5|10/.test(month) ?
		30 :
		month === 1 ?
		(!(year % 4) && year % 100) || !(year % 400) ?
		29 :
		28 :
		31;
};

/* 判断是否为同一天 */
export const compareDates = (date1, date2) => {

	const d1 = new Date(date1.getTime());
	// #ifdef MP-WEIXIN
	date2 = new Date(Date.parse(date2));
	// #endif
	const d2 = new Date(date2.getTime());

	d1.setHours(0, 0, 0, 0);
	d2.setHours(0, 0, 0, 0);
	return d1.getTime() === d2.getTime();

};
/* 判断是否是日期 */
export const isValidDate = (date) => {
	if (Object.prototype.toString.call(date) !== "[object Date]") {
		return false;
	}
	return !isNaN(date.getTime());
};
/* 格式化时间*/
export const parseTime = (time, fmt = "yyyy-MM-dd hh:mm:ss") => {
	if (time === undefined) {
		return "--";
	}
	let date = null;
	if (Object.prototype.toString.call(time) === "[object Date]") {
		date = time;
	} else if (Object.prototype.toString.call(time) !== "[object String]") {
		date = new Date(time);
	}
	if (date) {
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(
				RegExp.$1,
				(date.getFullYear() + "").substr(4 - RegExp.$1.length)
			);
		}
		const o = {
			"M+": date.getMonth() + 1,
			"d+": date.getDate(),
			"h+": date.getHours(),
			"m+": date.getMinutes(),
			"s+": date.getSeconds(),
		};
		for (const k in o) {
			if (new RegExp(`(${k})`).test(fmt)) {
				const str = o[k] + "";
				fmt = fmt.replace(
					RegExp.$1,
					RegExp.$1.length === 1 ? str : padLeftZero(str)
				);
			}
		}
		return fmt;
	} else {
		return "";
	}
};

const padLeftZero = (str) => {
	return ("00" + str).substr(str.length);
};
/* 根据某个日期 返回这个月的日期，一共 6 * 7 = 42个日期的数组*/
export const getDateList = (d = new Date(), firstDay = 1) => {

	let dObj = new Date(
		d.getFullYear(),
		d.getMonth(),
		1,
		d.getHours(),
		d.getMinutes()
	);
	// #ifdef MP-WEIXIN
	dObj = new Date(Date.parse(dObj));
	// #endif
	let daysInMon = daysInMonth(dObj.getFullYear(), dObj.getMonth());
	let days = [];
	/* 上月日期*/
	const oneIndex = dObj.getDay(); // 本月一号是周几
	let preNum = oneIndex; // 上个月的日期有多少天
	if (firstDay === 1) {
		preNum = oneIndex - 1;
	} else if (firstDay && oneIndex === 0) {
		preNum = 6;
	}
	for (let i = 0; i < preNum; i++) {
		const tempobj = new Date(
			d.getFullYear(),
			d.getMonth(),
			1 - (preNum - i),
			0,
			0
		);
		days.push({
			date: tempobj.getDate(),
			timestamp: tempobj.getTime(),
			isPreMonth: true,
			isNextMonth: false,
			isToday: compareDates(tempobj, new Date()),
			dateObj: tempobj,
			isHighlight: false,
			isDot: false,
		});
	}
	/* 当月日期*/
	for (let i = 0; i < daysInMon; i++) {
		days.push({
			date: dObj.getDate(),
			timestamp: dObj.getTime(),
			isPreMonth: false,
			isNextMonth: false,
			isToday: compareDates(dObj, new Date()),
			dateObj: new Date(dObj.getTime()),
			isHighlight: false,
			isDot: false,
		});
		dObj.setDate(dObj.getDate() + 1);
	}
	// 下月日期
	const nextdays = 42 - (preNum + daysInMon);

	for (let i = 0; i < nextdays; i++) {
		const tempobj = new Date(d.getFullYear(), d.getMonth() + 1, 1 + i, 0, 0);
		days.push({
			date: tempobj.getDate(),
			timestamp: tempobj.getTime(),
			isPreMonth: false,
			isNextMonth: true,
			isToday: compareDates(tempobj, new Date()),
			dateObj: tempobj,
			isHighlight: false,
			isDot: false,
		});
	}
	return days;
};
