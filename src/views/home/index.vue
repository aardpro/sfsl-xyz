<!--
 * @Author: Aardpro
 * @Date: 2021-03-24 22:05:02
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-16 22:50:35
 * @Description: 
-->
<template>
  <div
    class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4"
  >
    <snapshot-card
      v-for="(card, index) in CardList"
      :key="index"
      v-bind="card"
    ></snapshot-card>
  </div>
</template>

<script type='ts'>
import { defineComponent } from "vue";

import SnapshotCard from "../../components/SnapshotCard.vue";
import { CardList } from "./CardList";
export default defineComponent({
  name: "Home",
  components: { SnapshotCard },
  props: {},
  setup(props, context) {
    sessionStorage.setItem("FROM","HOME")
    return { CardList };
  },
});
</script>