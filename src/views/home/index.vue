<!--
 * @Author: Aardpro
 * @Date: 2021-03-24 22:05:02
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-03-24 22:13:25
 * @Description: 
-->
<template>
  <snapshot-card
    v-for="(card, index) in CardList"
    :key="index"
    v-bind="card"
  ></snapshot-card>
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
    return { CardList };
  },
});
</script>