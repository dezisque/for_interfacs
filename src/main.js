import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import Main from "@/views/Main";
import Tree from "@/views/Tree";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Main },
  { path: "/tree", component: Tree },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
