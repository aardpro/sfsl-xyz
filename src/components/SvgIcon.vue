<!--
 * @Author: Aardpro
 * @Date: 2021-03-23 21:57:08
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-03-23 22:13:47
 * @Description: svg
 用法：https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code
 假设icon编号是icon-home，那么：
<svg icon='home'></svg>即可
-->
<template>
  <svg class="icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconClass"></use>
  </svg>
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "SvgIcon",
  components: {},
  props: {
    icon: String,
    className: String,
  },
  setup(props, context) {
    const iconClass = computed(() => "#icon-" + props.icon);
    return { iconClass };
  },
});
</script>