<template>
  <div class="yin-footer">
<!--    <el-button @click="handle2" type="text" size="small">修改</el-button>-->

    <p v-for="(item, index) in footerList" :key="index">
      {{ item }}
    </p>


  </div>
</template>

<script lang="ts">
import {defineComponent, getCurrentInstance, readonly} from "vue";
import {ComponentPublicInstance} from "@vue/runtime-core";
import {NavName, RouterName} from "@/enums";
import mixin from "@/mixins/mixin";

export default defineComponent({
  setup() {
    const footerList = readonly([
      "关于 | 帮助 | 条款 | 反馈",
      "Copyright © 2019 Yin-Hongwei",
    ]);

    const { proxy } = getCurrentInstance();
    const { changeIndex,routerManager } = mixin();

    function goPage(path, name) {
      if (!path && !name) {
        changeIndex(NavName.Home);
        routerManager(RouterName.Home, { path: RouterName.Home });
      } else {
        changeIndex(name);
        routerManager(path, { path });
      }
    }

    return { goPage,
      footerList
      };
  },
  methods:{
    handle (){
      //  路径/home对应我在router目录下index.js中定义的path属性值
      this.$router.push('/demo1');
    },
    handle2 (){
      //  路径/home对应我在router目录下index.js中定义的path属性值
      this.$router.push('/demo2');
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/css/var.scss";
@import "@/assets/css/global.scss";

.yin-footer {
  width: 100%;
  height: $footer-height;
  padding: 20px 0;
  box-sizing: border-box;
  font-size: 14px;
  @include layout(center, center, column);
}

p {
  height: 30px;
}
</style>
