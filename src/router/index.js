import Vue from "vue";
import VueRouter from "vue-router";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import Apply from "../views/Apply.vue";
import Result from "../views/Result.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/signUp",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/apply",
    name: "Apply",
    component: Apply
  },
  {
    path: "/result",
    name: "Result",
    component: Result
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
