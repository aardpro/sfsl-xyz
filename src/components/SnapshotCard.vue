<!--
 * @Author: Aardpro
 * @Date: 2021-03-21 10:25:12
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-03-28 01:57:00
 * @Description: 
-->
<template>
  <div class="col position-relative">
    <div class="card" :class="cardClass" @click="redirect">
      <div class="card-body">
        <div class="card-title">{{ title }}</div>
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
import { defineComponent } from "vue";
import { safePush } from "../router";

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
  setup: (props) => {
    const redirect = () => safePush(props.target);
    return { redirect };
  },
});
</script>