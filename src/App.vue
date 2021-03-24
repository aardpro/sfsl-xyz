<!--
 * @Author: Aardpro
 * @Date: 2021-03-21 10:25:12
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-03-24 22:11:53
 * @Description: 
-->
<template>
  <div class="row card-block">
    <router-view></router-view>
  </div>
  <div class="position-fixed top-brand">Code Tools</div>
  <div class="position-fixed footer">Copyright</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
@import "./assets/index.scss";
</style>
