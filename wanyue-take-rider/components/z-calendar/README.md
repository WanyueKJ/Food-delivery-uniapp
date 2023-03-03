## z-calendar
这是一个支持滑动切换，自定义打卡日期，配置项丰富的日历组件。组件样式使用了sass所以需要项目先安装node-sass和sass-loader，如果已经安装可导入之后可直接使用,如果项目支持easycom那么不需要导入即可直接使用。
## 组件调用方式

1. 如果支持easycom组件模式的话那么可以在你需要的页面直接使用该组件  

*template*
```
<view>
 <z-calendar
      :firstDayOfWeek="1"
      v-model="checkDate"
      :dotDates="ondutys"
    ></z-calendar>
</view>
```
*script*
```
export default {
  data() {
    return {
      title: "Hello",
      checkDate: new Date(),
      ondutys: [{ date: "2021-10-11" }],
    };
  },
  onLoad() {},
  methods: {},
};
```
*注意*
通过v-model可以绑定当前选中日期的值，如果你不需要那么不用也可以

2.如果不支持easycom组件模式，那么在使用之前我们需要先将组件引入  
*script*

```
import ZCalendar from "../../components/z-calendar/z-calendar.vue";
export default {
  components: {
    ZCalendar,
  },
  data() {
    return {
      title: "Hello",
      checkDate: new Date(),
      ondutys: [{ date: "2021-10-11" }],
    };
  },
  onLoad() {},
  methods: {},
};
```

## 组件属性说明props

组件提供了很多自定义属性，比如第一天是显示周一还是周日，打卡日期，打卡日期圆点位置和颜色，控制按钮是否显示，是否允许滑动切换到月份，更多属性如下表。    


| 属性名 | 数据类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| timeFormatter | String | yyyy年MM月 | 头部日期月份格式化yyyy表示年，MM表示月 |
| touchSwitch | Boolean | true | 是否可以滑动切换月份 |
| showYearControl | Boolean | true | 是否显示上一年下一年控制按钮 |
| showMonthControl | Boolean | true |  是否显示上一月下一月控制按钮 |
| firstDayOfWeek | Number | 1 | 是从周一开始还是周日开始可选值[1,7] |
| dotDates | Array | [] | 打点日期列表是一个对象数组，对象中有一个属性是date如：[{date: '2021-10-11'}] ,date也可以是一个时间戳|
| dotPosition | Object | {top:10,right: 16} | 打点小圆点的位置 |
| dotColor | String | #faad14 | 打卡圆点的颜色 | 

## 组件属性说明props 
| 事件名 | 事件说明 |
| --- | --- |
| @on-selected | 选中日期改变时触发,返回值为选中日期的时间对象 |
|@month-change | 月份改变（年或者月改变）时触发,返回值为选中日期的时间对象，当月份或者年改变时默认选中日期为该月份1号

## TODO
- [ ] 增加周模式和月模式切换

## 联系
有问题可以在以下评论区评论，或者邮件wallowyou@outlook.com
