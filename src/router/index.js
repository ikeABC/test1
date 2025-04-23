import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import aview from "@/views/a.vue";
import bview from "@/views/b.vue";
import cview from "@/views/c.vue";
import dynamicPage from "@/views/dynamicPage.vue";
import openDynamicPage from "@/views/openDynamicPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path:"/dynamicPage",
    name:"dynamicPage",
    component: dynamicPage,
  },
  {
    path:"/openDynamicPage",
    name:"openDynamicPage",
    component: openDynamicPage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    children: [
      {
        path:"/aview",
        name:"about/aview",
        component: aview,
      },
      {
        path:"/bview",
        name:"about/bview",
        component: bview,
      },
      {
        path:"/cview",
        name:"about/cview",
        component: cview,
      },
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
