import Vue from "vue";
import Router from "vue-router";
import Content from "../components/Content";
import Main from "../components/Main";
import hgh from "../components/hgh"

//安装路由
Vue.use(Router);

export default new Router({
  routes: [
    {
      //路由路径
      path:'/content',
      //跳转组件
      component:Content
    },
    {
      path:'/main',
      name:'content',
      component:Main
    },
    {
      path:'/hgh',
      component:hgh
    }
  ]
});
