<!--
 * @Author: Aardpro
 * @Date: 2021-03-24 22:05:02
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-10 00:42:01
 * @Description: 
-->
<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-7 col-12">
        <label for="vue-image-slim-w">剪裁宽度</label>
        <input
          v-model.number="w"
          type="number"
          step="10"
          id="vue-image-slim-w"
        />
        <label for="vue-image-slim-h">高度</label>
        <input
          v-model.number="h"
          type="number"
          step="10"
          id="vue-image-slim-h"
        />
        <label for="vue-image-slim-o">原点</label>
        <select name="pets" id="vue-image-slim-o" v-model="o">
          <option
            v-for="(item, index) in origins"
            :key="index"
            :value="item.value"
          >
            {{ item.label }}
          </option>
        </select>
      </div>
      <div class="col-xl-5 col-12">
        <label for="vue-image-slim-btn-width">按钮宽度</label>
        <input
          v-model="btnw"
          type="number"
          step="10"
          id="vue-image-slim-btn-width"
        />
        <label for="vue-image-slim-btn-height">高度</label>
        <input
          v-model="btnh"
          type="number"
          step="10"
          id="vue-image-slim-btn-height"
        />
        <label for="vue-image-slim-btn-disabled">禁用</label>
        <input
          v-model="disabled"
          type="checkbox"
          id="vue-image-slim-btn-disabled"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12 flex-left">
        <div class="flex-left">
          <div id="vue-image-slim-screen"></div>
          <div id="vue3-image-slim-screen"></div>
          <div class="flex-middle">
            <div class="pad-10">点击按钮选择图片文件</div>
            <vue3-image-slim
              :o="o"
              :w="w"
              :h="h"
              :btn-width="btnWidth"
              :btn-height="btnHeight"
              :disabled="disabled"
              @getDataURL="getDataURL"
            ></vue3-image-slim>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex-wrap">
    <div v-for="(img, index) in images" :key="index" class="pad-10 image-view">
      <img :src="img" class="auto-image" />
      <div class="block-delete">
        <svg-icon
          icon="delete"
          class-name="pointer"
          @click="askDelete(index)"
        ></svg-icon>
      </div>
    </div>
  </div>
  <div style="position: fixed; top: 1em; right: 1em">
    <go-home font-size="30px" color="#873935"></go-home>
  </div>
</template>

<script type='ts'>
import { defineComponent, ref, computed, onMounted, watch } from "vue";
import Vue3ImageSlim from "vue3-image-slim";
import CodeFlask from "codeflask";

export default defineComponent({
  name: "VueImageSlim",
  components: { Vue3ImageSlim },
  props: {},
  setup(props, context) {
    let cfv2, cfv3;
    const images = ref([]);
    const w = ref(400);
    const h = ref(300);
    const o = ref("LT");
    const btnw = ref(100);
    const btnh = ref(100);
    const btnWidth = computed(() => btnw.value + "px");
    const btnHeight = computed(() => btnh.value + "px");
    const disabled = ref(false);
    const origins = ref([
      { value: "LT", label: "左上角,缺省项" },
      { value: "RT", label: "右上角" },
      { value: "C", label: "中心点 center" },
      { value: "LB", label: "左下角" },
      { value: "RB", label: "右下角" },
    ]);
    const getDataURL = (val) => {
      images.value.push(val);
    };
    const comCodeV2 = computed(
      () =>`//install and import it for vue2
npm install vue-image-slim
components: { VueImageSlim:() => import("vue-image-slim") }

// how to use in template
<vue-image-slim
 :w="${w.value}"
 :h="${h.value}"
 o="${o.value}"
 btn-width="${btnWidth.value}"
 btn-height="${btnHeight.value}"
 :disabled="${disabled.value}"
 @getDataURL="getDataURL"
 @getFile="getFile"
></vue-image-slim>
`
    );
    const comCodeV3 = computed(
      () =>`//install and import it for vue3
npm install vue3-image-slim
import Vue3ImageSlim from "vue3-image-slim"
components: { Vue3ImageSlim }
  
// how to use in template
<vue3-image-slim
 :w="${w.value}"
 :h="${h.value}"
 o="${o.value}"
 btn-width="${btnWidth.value}"
 btn-height="${btnHeight.value}"
 :disabled="${disabled.value}"
 @getDataURL="getDataURL"
 @getFile="getFile"
></vue3-image-slim>
`
    );
    const askDelete = (index) => {
      images.value.splice(index, 1);
    };
    watch(
      () => comCodeV2.value,
      (val) => {
        if (cfv2) {
          cfv2.updateCode(val);
        }
      }
    );
    watch(
      () => comCodeV3.value,
      (val) => {
        if (cfv3) {
          cfv3.updateCode(val);
        }
      }
    );
    onMounted(() => {
      cfv2 = new CodeFlask("#vue-image-slim-screen", {
        language: "js",
        lineNumbers: true,
        readonly: true,
      });
      cfv2.updateCode(comCodeV2.value);
      cfv3 = new CodeFlask("#vue3-image-slim-screen", {
        language: "js",
        lineNumbers: true,
        readonly: true,
      });
      cfv3.updateCode(comCodeV3.value);
    });
    return {
      w,
      h,
      o,
      images,
      getDataURL,
      btnWidth,
      btnHeight,
      btnw,
      btnh,
      disabled,
      origins,
      askDelete,
    };
  },
});
</script>
<style>
input,
select {
  padding: 0.4em;
  font-size: 1.2em;
  text-align: right;
  margin: 1em 1em 1em 0.4em;
}
input {
  width: 5em;
}
input[type="checkbox"] {
  width: 1em;
}
.image-view {
  position: relative;
}
.image-view .block-delete {
  position: absolute;
  top: 1em;
  right: 1em;
}
.image-view .block-delete .icon {
  font-size: 2em;
  color: red;
  cursor: pointer;
}
#vue-image-slim-screen,
#vue3-image-slim-screen {
  position: relative;
  height: 400px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
#vue-image-slim-screen {
  width: 480px;
}
#vue3-image-slim-screen {
  margin: 0 50px;
  width: 400px;
}
</style>