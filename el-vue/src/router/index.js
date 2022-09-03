import Vue from "vue";
import Router from 'vue-router';
import main from "../views/Main";
import login from "../views/login";
import Listuer from "../views/user/List";
import Profile from "../views/user/Profile";
import NotFind from "../views/NotFind";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
    path: '/login',
      component: login,
    },
    {
      path: '/main/:username',
      component: main,
      props:true,
      children:[{
        path: '/user/profile/',
        name:'UserProfile',
        component: Profile
      },
        {
          path: '/user/list',
          component:Listuer
        }]

    },
    {
      path: '*',
      component:NotFind
    }
  ]
});



