<!--
 * @Author: Aardpro
 * @Date: 2021-03-24 22:05:02
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-11 20:15:09
 * @Description: 
-->
<template>
  <div class="html-graffiti">
    <div class="code-col">
      <textarea
        ref="refCode"
        placeholder="type html, css, javascript code here"
        class="code-textarea form"
      ></textarea>
    </div>
    <div class="btn-col flex-middle">
      <svg-icon
        icon="arrow-right"
        class-name="pointer"
        font-size="48px"
        :color="color"
        @click="run"
      ></svg-icon>
      <SaveCloudButton :color="color"></SaveCloudButton>
    </div>
    <div ref="refView" class="graffiti-col"></div>
  </div>

  <div class="top-go-home">
    <go-home font-size="30px" :color="color"></go-home>
  </div>
</template>

<script type='ts'>
import {
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  provide,
  watch,
} from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { removeAllChildNodes } from "../../utils";
import { GRAFFITI_DATA as SAMPLE_DATA } from "../../utils/data";
import { getCode } from "../../api";
const STORE_VIEW = "STORE-GRAFFITI";

export default defineComponent({
  name: "HTMLGraffiti",
  components: {},
  props: {},
  setup() {
    const id = ref();
    const refView = ref();
    const refCode = ref();
    const run = () => {
      removeAllChildNodes(refView.value);
      localStorage.setItem(STORE_VIEW, refCode.value.value);
      var iframe = document.createElement("iframe");
      iframe.setAttribute("height", "100%");
      iframe.setAttribute("width", "100%");
      iframe.setAttribute(
        "sandbox",
        "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-scripts allow-same-origin"
      );
      iframe.srcdoc =
        `<!DOCTYPE html>
  <ht` +
        `ml>    
  <he` +
        `ad>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
      <link href="./default.css" rel="stylesheet">
  </he` +
        `ad><bo` +
        `dy>` +
        refCode.value.value +
        `</bo` +
        `dy></ht` +
        `ml>`;
      refView.value.append(iframe);
    };
    onMounted(() => {
      let storeData = localStorage.getItem(STORE_VIEW) || SAMPLE_DATA;
      refCode.value.value = storeData;
      run();
    });

    onBeforeMount(() => {
      id.value = useRoute().params.id;
    });
    onBeforeRouteUpdate(async (to) => {
      id.value = to.params.id;
    });
    provide("getId", () => id.value);
    provide("getContent", () => refCode.value.value);

    watch(
      () => id.value,
      async (val) => {
        if (!val) {
          return;
        }
        const res = await getCode(val);
        if (res.code) {
          return;
        }
        if (refCode.value) {
          refCode.value.value = res.data.content;
          run();
        }
      }
    );
    return {
      refCode,
      refView,
      run,
      color: "#ff8a00",
    };
  },
});
</script>
<style lang="scss">
@import "../../assets/_mixins.scss";
.html-graffiti {
  width: 100%;
  height: 100vh;
  @include flex-display(row, stretch, flex-start);
  .btn-col {
    width: 120px;
    box-sizing: border-box;
  }
  .code-col,
  .graffiti-col {
    flex: 1;
    box-sizing: border-box;
  }
  .code-col {
    .code-textarea {
      width: 100%;
      height: 100%;
    }
  }

  .graffiti-col {
    border: 1px solid #ccc;
    iframe {
      border: 0;
    }
  }
}
</style>