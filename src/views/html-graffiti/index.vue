<!--
 * @Author: Aardpro
 * @Date: 2021-03-24 22:05:02
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-04 20:28:51
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
      <button class="bttn-material-flat bttn-sm" @click="run">Graffiti</button>
    </div>
    <div ref="refView" class="graffiti-col"></div>
  </div>

  <div class="graffiti-go-home">
    <go-home font-size="30px" color="#ff8a00"></go-home>
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
  setup() {
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
      let storeData = localStorage.getItem(STORE_VIEW);
      if (!storeData) {
        storeData =
          '<link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.0.0-beta2/css/bootstrap.min.css" rel="stylesheet">\n<h1>Hellow world</h1>\n<h3>Hellow world</h3>\n<div id=sample></div>\n<script';
        storeData +=
          '>\n  document.getElementById("sample").innerText="Hello world!"\n</scr';
        storeData += "ipt>\n";
      }
      refCode.value.value = storeData;
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
.graffiti-go-home {
  position: fixed;
  top: 1em;
  left: 50%;
  transform: translateX(-50%);
}
</style>