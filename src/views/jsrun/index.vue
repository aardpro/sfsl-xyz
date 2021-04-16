<!--
 * @Author: Aardpro
 * @Date: 2021-03-24 22:05:02
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-15 23:02:16
 * @Description: 
-->
<template>
  <div class="html-run">
    <div class="code-col">
      <textarea
        ref="refCode"
        placeholder="javascript code here, use console.log()"
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
    <div class="run-col">
      <textarea ref="refLog" class="code-textarea form"></textarea>
    </div>
  </div>

  <div class="top-go-home">
    <go-home font-size="30px" :color="color"></go-home>
  </div>
</template>

<script type='ts'>
import { defineComponent, ref, onMounted, provide } from "vue";
import { getCode } from "../../api";
import { useRoute } from "vue-router";
import { JSRUN_DATA as SAMPLE_DATA } from "../../utils/data";
const STORE_VIEW = "STORE-JSRUN";
let editor, editorLog;

export default defineComponent({
  name: "JSRun",
  components: {},
  props: {},
  setup() {
    const id = ref();
    const refLog = ref();
    const refCode = ref();
    const getValue = () => {
      if (editor && editor.getValue) {
        return editor.getValue();
      }
      return "";
    };
    const setValue = (str) => {
      if (editor && editor.setValue) {
        editor.setValue(str);
      }
    };
    const setLogValue = (str) => {
      if (editorLog && editorLog.setValue) {
        editorLog.setValue(str);
      }
    };
    const run = () => {
      localStorage.setItem(STORE_VIEW, getValue());
      console.logs.length = 0;
      setLogValue("Start to run....");
      const t = new Date().valueOf();
      try {
        eval(getValue());
      } catch (err) {
        console.logs.push("error: " + err);
      }
      if (console.logs instanceof Array && console.logs.length > 0) {
        const logs = console.logs.reduce((t, cur, idx) => {
          let value =
            typeof cur === "object" && !!cur
              ? JSON.stringify(cur, null, 2)
              : cur;
          t.push(`${value}`);
          return t;
        }, []);

        setLogValue(
          logs.join("\n") + "\n\n用时:" + (new Date().valueOf() - t) + "ms"
        );
      }
    };

    onMounted(async () => {
      editor = CodeMirror.fromTextArea(refCode.value, {
        mode: "javascript",
        lineNumbers: true,
        theme: "erlang-dark",
        tabSize: 2,
        lineWrapping: true,
        lineNumbers: true,
      });
      editorLog = CodeMirror.fromTextArea(refLog.value, {
        mode: "javascript",
        lineNumbers: true,
        theme: "cobalt",
        tabSize: 2,
        lineWrapping: true,
        lineNumbers: true,
      });

      id.value = useRoute().params.id;
      if (id.value) {
        const res = await getCode(id.value);
        if (!res.code) {
          setValue(res.data.content);
          run();
          return;
        }
      }
      let storedData = localStorage.getItem(STORE_VIEW) || SAMPLE_DATA;
      setValue(storedData);
      run();
    });

    provide("getId", () => id.value);
    provide("getContent", () => getValue());

    return {
      refCode,
      refLog,
      run,
      color: "#4a588c",
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
  }
}
</style>