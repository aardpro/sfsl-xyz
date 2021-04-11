<!--
 * @Author: Aardpro
 * @Date: 2021-04-10 21:40:45
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-10 21:49:03
 * @Description: 
-->
<template></template>

<script>
import { defineComponent, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "AccessToken",
  components: {},
  props: {},
  setup(props, context) {
    onBeforeMount(() => {
      const token = useRoute().params.token;
      localStorage.setItem("TOKEN", token);
      //刷新window.opener的登录状态
      window.close();
    });
    return {};
  },
});
</script>