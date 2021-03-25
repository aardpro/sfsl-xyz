<!--
 * @Author: Aardpro
 * @Date: 2021-03-24 22:05:02
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-03-25 23:00:24
 * @Description: 
-->
<template>
  <div class="card-row">
    <snapshot-card
      v-for="(card, index) in CardList"
      :key="index"
      v-bind="card"
    ></snapshot-card>    
  </div>
  <div class="row">
    <div class="copy-right">@copyright 2018-2021 <a href='http://beian.miit.gov.cn/'>粤ICP备18001137号</a></div>
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
    return { CardList };
  },
});
</script>