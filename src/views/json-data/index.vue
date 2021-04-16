<!--
 * @Author: Aardpro
 * @Date: 2021-03-24 22:05:02
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-15 22:40:47
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
          class-name="pointer"
          font-size="48px"
          :color="color"
          @click="toData"
        ></svg-icon>
      </div>
      <div class="btn-div">
        <svg-icon
          icon="arrow-left"
          class-name="pointer"
          font-size="48px"
          :color="color"
          @click="toJson"
        ></svg-icon>
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

  <div class="top-go-home">
    <go-home font-size="30px" :color="color"></go-home>
  </div>
</template>

<script type='ts'>
import { defineComponent, ref, onMounted } from "vue";
import { JSON_DATA as SAMPLE_DATA } from "../../utils/data";
const STORE_JSON = "STORE-JSON";
let editorJson, editorData; //editorJson是左侧json框，editorData是右侧数据框
let dataVal;

export default defineComponent({
  name: "JSRun",
  components: {},
  props: {},
  setup() {
    const refJson = ref();
    const refData = ref();
    const getJsonValue = () => {
      if (editorJson && editorJson.getValue) {
        return editorJson.getValue();
      }
      return "";
    };
    const setJsonValue = (str) => {
      if (editorJson && editorJson.setValue) {
        editorJson.setValue(str);
      }
    };
    const getDataValue = () => {
      if (editorData && editorData.getValue) {
        return editorData.getValue();
      }
      return "";
    };
    const setDataValue = (str) => {
      if (editorData && editorData.setValue) {
        editorData.setValue(str);
      }
    };

    const toData = () => {
      try {
        const data = JSON.parse(getJsonValue());
        setDataValue(JSON.stringify(data, null, 2));
        localStorage.setItem(STORE_JSON, getJsonValue());
      } catch (e) {
        setDataValue(e.message);
      }
    };
    const toJson = () => {
      try {
        eval("dataVal=" + getDataValue());
        const json = JSON.stringify(dataVal);
        setJsonValue(json);
        localStorage.setItem(STORE_JSON, json);
      } catch (e) {
        setJsonValue(e.message);
      }
    };

    onMounted(() => {
      editorJson = CodeMirror.fromTextArea(refJson.value, {
        mode: "javascript",
        lineNumbers: true,
        theme: "erlang-dark",
        tabSize: 2,
        lineWrapping: true,
        lineNumbers: true,
      });
      editorData = CodeMirror.fromTextArea(refData.value, {
        mode: "javascript",
        lineNumbers: true,
        theme: "cobalt",
        tabSize: 2,
        lineWrapping: true,
        lineNumbers: true,
      });

      const storedJson = localStorage.getItem(STORE_JSON) || SAMPLE_DATA;
      if (storedJson) {
        setJsonValue(storedJson);
        toData();
      }
    });

    return {
      refJson,
      refData,
      toData,
      toJson,
      color: "#b6090b",
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
</style>