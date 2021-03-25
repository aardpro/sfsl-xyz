<!--
 * @Author: Aardpro
 * @Date: 2021-03-21 10:25:12
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-03-25 23:06:15
 * @Description: 
-->
<template>
  <div class="card-col position-relative">
    <div class="card" :class="cardClass">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <img v-if="img" :src="img" :alt="title" class="w-100" />
        <p class="card-text">{{ text }}</p>
        <div v-if="icon" class="position-absolute anchor">
          <svg-icon :icon="icon" class-name="fs-2em"></svg-icon>
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
    cardClass: String,
    title: String,
    text: String,
    target: String,
    icon: String,
    img: String,
  },
  setup: () => {
    return {};
  },
});
</script>