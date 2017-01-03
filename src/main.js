// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import seller from 'components/seller/seller';
import ratings from 'components/ratings/ratings';

import './common/scss/index.scss';
import '../static/css/animate.css';

Vue.use(VueRouter);
Vue.use(VueResource);

// 定义路由  每个路由应该映射一个组件
const routes = [
  {path: '/', component: goods},
  {path: '/goods', component: goods},
  {path: '/seller', component: seller},
  {path: '/ratings', component: ratings}
];
// 创建 router 实例，然后传 routes配置
const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
  linkActiveClass: 'active'
});

// 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
// /* eslint-disable no-new */
  new Vue({
    router,
    template: '<App/>',
    components: {App}
  }).$mount('#app');
