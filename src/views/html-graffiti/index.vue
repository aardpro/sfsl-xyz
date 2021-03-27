<!--
 * @Author: Aardpro
 * @Date: 2021-03-24 22:05:02
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-03-27 15:55:01
 * @Description: 
-->
<template>
  <div class="row html-graffiti">
    <div class="col-5">
      <textarea
        ref="refCode"
        placeholder="type html, css, javascript code here"
        class="graffiti-code form"
      ></textarea>
    </div>
    <div class="col flex-middle">
      <button class="bttn-material-flat bttn-sm" @click="run">Graffiti</button>
    </div>
    <div ref="refView" class="col-5 graffiti-view"></div>
  </div>
</template>

<script type='ts'>
import { defineComponent, ref, onMounted } from "vue";
import { removeAllChildNodes } from "../../utils";
const STORE_VIEW = "STORE-GRAFFITI";

export default defineComponent({
  name: "HTMLGraffiti",
  components: {},
  props: {},
  setup(props, context) {
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
        "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-scripts"
      );
      iframe.srcdoc =
        `<!DOCTYPE html>
  <ht` +
        `ml>    
  <he` +
        `ad>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
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
      const storeData = localStorage.getItem(STORE_VIEW);
      if (storeData) {
        refCode.value.value = storeData;
      }
      run();
    });

    return {
      refCode,
      refView,
      run,
    };
  },
});
</script>
<style lang="scss">
.graffiti-view,
.graffiti-code {
  height: calc(100vh - 1em);
  box-sizing: border-box;
}
.graffiti-code {
  width: 100%;
}

.graffiti-view {
  border: 1px solid #ccc;
  iframe {
    border: 0;
  }
}
</style>