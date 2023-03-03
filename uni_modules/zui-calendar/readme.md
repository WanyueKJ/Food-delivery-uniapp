## zui-calendar
## 使用说明
| 参数		| 是否必填	|  值类型	| 默认值	| 说明			|
| --------- | -------- 	| -----: 	| --: 	| :------------:|
| list		|	否 		| Array	| []	| {avatar: '地址', title: '标题', time: '时间段', details:'任务类型', date: '时间'}	|
| weekList | 否   | Array | ['日', '一', '二', '三', '四', '五', '六'] | 周 |
| date     | 否   | Object | { year, month, day } | 默认：年月日 |
| isShrink     | 否   | Boolean | false | 是否显示日期收缩功能 |
| isUnfold     | 否   | Boolean | false | 默认是否展开或者收缩  true:收缩， false:展开 |
| extraData     | 否   | Array | [] | date:日期, value:名称, status:审核状态（状态）, dot:是否显示徽标，active：是否当前 |

## 方法
| 方法名|  参数| 说明|
| --------- | ---------| :--: |
| click-active | {year, month, date, index} | 点击当前天数回调方法|
| click-task | {row, index} | 点击任务方法 |

## 点击天数据 模态框显示使用说明
| 参数	 | 说明	|  类型	| 默认值	| 可选值	|
| ------ | -------- | ----- | -- | -------- |
| show	| 是否显示模态框，请赋值给show	|  Boolean	| false	| true|
| title	| 标题内容	|  String	| -	| -  |
| content	| 模态框内容，如传入slot内容，则此参数无效	|  String	| -	| - |
| confirmText	| 确认按钮的文字	|  String	| 确认	| - |
| cancelText	| 取消按钮的文字	|  String	| 取消	| - |
| showConfirmButton	| 是否显示确认按钮	|  Boolean	| true	| false |
| showCancelButton	| 是否显示取消按钮	|  Boolean	| false	| true |
| confirmColor	| 确认按钮的颜色	|  String	| #2979ff	| - |
| cancelColor	| 取消按钮的颜色	|  String	| #606266	| - |
| closeOnClickOverlay	| 是否显示遮罩	|  Boolean	| true	| false |
| width	| modal宽度，不支持百分比，可以数值，px，rpx单位	|  String | 650rpx	| px/rpx |

## Slots插槽弹框插槽参数
| 名称	 | 说明 |
| --------- | ---------|
| title | 标题 |
| content | 内容 |
| footer | 按钮 |

## Event插槽弹框事件
| 事件名	 | 说明 | 回调参数 |
| --------- | ---------| ---------|
| confirm | 点击确认按钮时触发 | - |
| cancel | 点击取消按钮时触发 | - |
| close | 点击遮罩关闭出发，closeOnClickOverlay为true有效 | - |
## 备注
	如果父组件赋值后，子组件值无法更新，则给子组件标签上添加:key="key"值，通过 :key 值变更触发DOM重新渲染

	``` javascript
	<zui-calendar :key="upDatakey" :list="list" :extraData="extraData" @click-active="clickActive" @click-task="clickTask"></zui-calendar>
	
	```
	更新key方式：this.upDatakey = new Date().getTime()，放在方法中即可
### 插槽方式vue:
	``` javascript
	<zui-calendar :list="list" :extraData="extraData" @click-active="clickActive" @click-task="clickTask">
		<template slot="task">
			<view>这里边写你自己的布局方式</view>
		</template>
	</zui-calendar>
	```
### vue:
``` javascript
<zui-calendar :list="list" :extraData="extraData" @click-active="clickActive" @click-task="clickTask"></zui-calendar>
```

---
* 函数说明


``` javascript
/*  */
export default {
	data() {
		return {
			list: [
				{
					avatar: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
					title: '整理会议记录文档1',
					time: '45分钟',
					details:'首要任务',
					date: '10:30'
				},
				{
					avatar: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
					title: '整理会议记录文档',
					time: '45分钟',
					details:'首要任务',
					date: '10:30'
				},
				{
					avatar: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
					title: '整理会议记录文档',
					time: '45分钟',
					details:'首要任务',
					date: '10:30'
				}
			],
			upDatakey: '',//为重新渲染DOM值，入不需要则可取消
			extraData:[{date: '2022-7-20', value: '签到', status: true, dot: true, active: false},{date: '2022-7-19', value: '未签到', status: false, dot: true, active: true}]
		}
	},
	methods: {
		// 点击日数方法
		clickActive({year, month, date, index}){
			console.log(year, month, date, index)
		},
		
		// 点击任务方法
		clickTask({row, index}){
			console.log(row, index)
		}
	}
}
```
## 温馨提示
 # 1. 欢迎加入QQ讨论群：869207900
 # 2. 若能帮到你还请点亮5颗小星星以作鼓励哈~
