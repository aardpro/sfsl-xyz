<!--
 * @Author: Aardpro
 * @Date: 2021-03-24 22:05:02
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-10 09:54:12
 * @Description: 
-->
<template>
  <div class="html-run">
    <div class="code-col">
      <textarea
        ref="refJwt"
        placeholder="put jwt string here"
        class="code-textarea form"
      ></textarea>
    </div>
    <div class="btn-col flex-middle">
      <svg-icon
        icon="arrow-right"
        class-name="pointer"
        font-size="48px"
        :color="color"
        @click="toData"
      ></svg-icon>
    </div>
    <div class="run-col">
      <textarea
        ref="refData"
        placeholder="jwt data to be decoded here..."
        class="code-textarea form"
      ></textarea>
    </div>
  </div>

  <div class="top-go-home">
    <go-home font-size="30px" :color="color"></go-home>
  </div>
</template>

<script type='ts'>
import { defineComponent, ref, onMounted } from "vue";
import { sjson } from "../../utils";
import { JWT_DATA as SAMPLE_DATA } from "../../utils/data";
const STORE_JWT = "STORE-JWT-STRING";

export default defineComponent({
  name: "JSRun",
  components: {},
  props: {},
  setup() {
    const refJwt = ref();
    const refData = ref();
    const toData = () => {
      refData.value.value = "";
      let str = refJwt.value.value;
      if (!str) {
        return;
      }
      try {
        str = decodeURIComponent(escape(window.atob(str.split(".")[1])));
        const data = sjson(str);
        if (data) {
          refData.value.value = JSON.stringify(data, null, 2);
          localStorage.setItem(STORE_JWT, refJwt.value.value);
        }
      } catch (e) {
        refData.value.value = e.message;
        console.error(e);
      }
    };

    onMounted(() => {
      let storeData = localStorage.getItem(STORE_JWT) || SAMPLE_DATA;
      refJwt.value.value = storeData;
      toData();
    });

    return {
      refJwt,
      refData,
      toData,
      color: "#333",
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
</style>