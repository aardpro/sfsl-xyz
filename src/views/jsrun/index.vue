<!--
 * @Author: Aardpro
 * @Date: 2021-03-24 22:05:02
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-04 21:23:50
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
        font-size="48px"
        :color="color"
        @click="run"
      ></svg-icon>
    </div>
    <div class="run-col">
      <textarea ref="refLog" class="code-textarea form"></textarea>
    </div>
  </div>

  <div class="run-go-home">
    <go-home font-size="30px" :color="color"></go-home>
  </div>
</template>

<script type='ts'>
import { defineComponent, ref, onMounted } from "vue";
const STORE_VIEW = "STORE-JSRUN";
if (typeof console.stdlog === "undefined") {
  console.stdlog = console.log.bind(console);
  console.logs = [];
  console.log = function () {
    console.logs.push(...Array.from(arguments));
    console.stdlog.apply(console, arguments);
  };
}

export default defineComponent({
  name: "JSRun",
  components: {},
  props: {},
  setup() {
    const refLog = ref();
    const refCode = ref();
    const run = () => {
      localStorage.setItem(STORE_VIEW, refCode.value.value);
      console.logs.length = 0;
      refLog.value.value = "Start to run....";
      const t = new Date().valueOf();
      try {
        eval(refCode.value.value);
      } catch (err) {
        console.logs.push("error: " + err);
      }
      if (console.logs instanceof Array && console.logs.length > 0) {
        const logs = console.logs.reduce((t, cur, idx) => {
          let value =
            typeof cur === "object" && !!cur
              ? JSON.stringify(cur, null, 2)
              : cur;
          t.push(`${idx + 1}:\t${value}`);
          return t;
        }, []);
        refLog.value.value =
          logs.join("\n") + "\n\n用时:" + (new Date().valueOf() - t) + "ms";
      }
    };

    onMounted(() => {
      let storeData = localStorage.getItem(STORE_VIEW);
      if (!storeData) {
        storeData = "console.log(123)\nconsole.log('abc')";
      }
      refCode.value.value = storeData;
      run();
    });

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