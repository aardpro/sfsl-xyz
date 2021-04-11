<!--
 * @Author: Aardpro
 * @Date: 2021-03-21 10:25:12
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-11 15:16:59
 * @Description: 
-->
<template>
  <div
    class="home-container"
    :class="{
      container: $route.meta.notFluid,
      'container-fluid': !$route.meta.notFluid,
    }"
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

<script>
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
const tag = "TEXTAREA";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const atHome = computed(() => {
      return useRoute().name === "HomePage";
    });
    return { atHome };
  },
  updated() {
    let tts = document.getElementsByTagName(tag);
    for (let i in tts) {
      if (tts[i].tagName === tag) {
        tts[i].addEventListener(
          "keydown",
          function (e) {
            if (e.keyCode === 9) {
              // get caret position/selection
              var start = this.selectionStart;
              var end = this.selectionEnd;
              var target = e.target;
              var value = target.value;
              // set textarea value to: text before caret + tab + text after caret
              target.value =
                value.substring(0, start) + "  " + value.substring(end);
              // put caret at right position again (add one for the tab)
              this.selectionStart = this.selectionEnd = start + 1;
              // prevent the focus lose
              e.preventDefault();
            }
          },
          false
        );
      }
    }
  },
});
</script>

<style lang="scss">
@import "./assets/index.scss";
</style>
