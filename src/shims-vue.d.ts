/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "vue/types/vue" {
  import VueRouter, { Route } from "vue-router";

  interface Vue {
    $router: VueRouter;
    $route: Route;
  }
}

interface ResponseBody {
  code: string;
  success: boolean;
  message: string;
  type: string;
  //加?的意思是可选
  //变量用是const，属性的话是readonly
  data?: any;
}
