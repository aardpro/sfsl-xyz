<!--
 * @Author: Aardpro
 * @Date: 2021-04-04 17:57:49
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-16 22:52:07
 * @Description: 
-->
<template>
  <svg-icon
    icon="home"
    class-name="pointer"
    @click="goBack"
    :style="{ fontSize, color }"
  ></svg-icon>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "GoHome",
  methods: {
    goBack() {
      if (
        sessionStorage.getItem("FROM") === "CLOUD-CODE" &&
        this.$route.path !== "/cloud-code"
      ) {
        this.$router.replace("/cloud-code");
      } else {
        this.$router.replace("/");
      }
    },
  },
  props: {
    fontSize: { type: String, default: "2em" },
    color: String,
  },
});
</script>