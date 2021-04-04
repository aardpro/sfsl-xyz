<!--
 * @Author: Aardpro
 * @Date: 2021-03-24 22:05:02
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-04 20:32:39
 * @Description: 
-->
<template>
  <div class="html-run">
    <div class="code-col">
      <textarea
        ref="refJson"
        placeholder="JSON string here"
        class="code-textarea form"
      ></textarea>
    </div>
    <div class="btn-col flex-middle">
      <div class="btn-div">
        <svg-icon
          icon="arrow-right"
          font-size="48px"
          @click="toData"
        ></svg-icon>
      </div>
      <div class="btn-div">
        <svg-icon icon="arrow-left" font-size="48px" @click="toJson"></svg-icon>
      </div>
    </div>
    <div class="run-col">
      <textarea
        ref="refData"
        placeholder="Object or Array data here"
        class="code-textarea form"
      ></textarea>
    </div>
  </div>

  <div class="run-go-home">
    <go-home font-size="30px" color="#b6090b"></go-home>
  </div>
</template>

<script type='ts'>
import { defineComponent, ref, onMounted } from "vue";

const STORE_JSON = "STORE-JSON";
const STORE_DATA = "STORE-DATA";

export default defineComponent({
  name: "JSRun",
  components: {},
  props: {},
  setup() {
    const refJson = ref();
    const refData = ref();
    const dataVal = ref("");
    const toData = () => {
      try {
        let data = JSON.parse(refJson.value.value);
        refData.value.value = JSON.stringify(data, null, 2);
        localStorage.setItem(STORE_JSON, refJson.value.value);
      } catch (e) {
        refData.value.value = e.message;
      }
    };
    const toJson = () => {
      try {
        eval("dataVal.value=" + refData.value.value);
        localStorage.setItem(STORE_DATA, refData.value.value);
        refJson.value.value = JSON.stringify(dataVal.value);
      } catch (e) {
        refJson.value.value = e.message;
        return;
      }
    };

    onMounted(() => {
      let storeData = localStorage.getItem(STORE_JSON);
      if (!storeData) {
        storeData =
          '{"name":"aardpro","age":77,"hobbies":["hike","programming","metal music"]}';
      }
      refJson.value.value = storeData;
      toData();
      storeData = localStorage.getItem(STORE_DATA);
      if (storeData) {
        refData.value.value = storeData;
      }
    });

    return {
      refJson,
      refData,
      toData,
      toJson,
    };
  },
});
</script>
<style lang="scss">
@import "../../assets/_mixins.scss";
.html-run {
  width: 100%;
  height: 100vh;
  @include flex-display(row, stretch, flex-start);
  .btn-col {
    .btn-div + .btn-div {
      margin-top: 2em;
    }
    width: 120px;
    box-sizing: border-box;
  }
  .code-col,
  .run-col {
    flex: 1;
    box-sizing: border-box;
    .code-textarea {
      width: 100%;
      height: 100%;
    }
  }
}
.run-go-home {
  position: fixed;
  top: 1em;
  left: 50%;
  transform: translateX(-50%);
}
</style>