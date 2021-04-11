<!--
 * @Author: Aardpro
 * @Date: 2021-04-04 17:57:49
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-04 18:10:27
 * @Description: 
-->
<template>
  <svg-icon
    icon="home"
    class-name="pointer"
    @click="$router.replace('/')"
    :style="{ fontSize, color }"
  ></svg-icon>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "GoHome",
  props: {
    fontSize: { type: String, default: "2em" },
    color: String,
  },
});
</script>