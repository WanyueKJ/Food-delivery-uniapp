// 引入组件
import wybarbar from './wyBar.vue';

// 自定义组件对象
const wybar = {
  // install 是默认的方法。当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数
  install: function(Vue) {
    // Vue.component() 与正常的全局注册组件用法相同，可以理解为通过 install 和 Vue.use()函数注册了全局组件
    Vue.component('wybar', wybarbar);
  }
}
// 导出
export default wybar;