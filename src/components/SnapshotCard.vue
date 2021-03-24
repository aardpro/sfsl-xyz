<!--
 * @Author: Aardpro
 * @Date: 2021-03-21 10:25:12
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-03-24 22:19:09
 * @Description: 
-->
<template>
  <div class="col-xxl-3 col-md-4 col-sm-6 col-xs-12 position-relative">
    <div class="card mb-3" :class="cardClass">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <img :src="img" :alt="title" class="w-100" />
        <p class="card-text">{{ text }}</p>
        <div class="position-absolute p-2 anchor">
          <svg-icon icon='go' class-name="fs-2"></svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "SnapshotCard",
  props: {
    cardClass: { type: String, default: "" },
    title: String,
    text: String,
    target: String,
    anchorText: String,
    img: String,
  },
  setup: () => {
    return {};
  },
});
</script>