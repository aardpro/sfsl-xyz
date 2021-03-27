<!--
 * @Author: Aardpro
 * @Date: 2021-03-21 10:25:12
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-03-27 15:53:26
 * @Description: 
-->
<template>
  <div
    class="home-container"
    :class="{ container: atHome, 'container-fluid': !atHome }"
  >
    <router-view></router-view>
  </div>
  <div class="footer" v-show="atHome">
    <div>
      @Copyright 2021
      <a href="http://beian.miit.gov.cn/">粤ICP备18001137号</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const atHome = computed(() => {
      let route = useRoute();
      if (!route || !route.name) return false;
      return route.name === "HomePage";
    });
    return { atHome };
  },
});
</script>

<style lang="scss">
@import "./assets/index.scss";
</style>
