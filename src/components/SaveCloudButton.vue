<!--
 * @Author: Aardpro
 * @Date: 2021-04-10 09:55:48
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-11 15:43:19
 * @Description: 将结果保存在服务器
-->
<template>
  <teleport to="body">
    <div class="bot-button-block">
      <svg-icon
        icon="upload-cloud-fill"
        class-name="pointer"
        font-size="48px"
        :color="color"
        @click="toCloud"
      ></svg-icon>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from "vue";
import { safePush } from "../router";
import { createCode, saveCode } from "../api";
import { toast } from "../utils/toast";

export default defineComponent({
  name: "SaveCloudButton",
  components: {},
  props: {
    color: String,
  },
  setup(props, context) {
    const getId = inject("getId") as Function; //get provided function
    const getContent = inject("getContent") as Function; //get provided function
    const getPath = inject("getPath") as Function; //get provided function
    const routeName = inject("routeName") as Function; //get provided function
    const getToken = inject("getToken") as Function; //get provided function
    const hasId = computed(() =>
      typeof getId === "function" ? getId() : false
    );
    const toCloud = async () => {
      if (!getToken()) {
        const wauth = window.open(
          "https://github.com/login/oauth/authorize?client_id=aef4a64b87a77c313674&allow_signup=true&redirect_uri=" +
            encodeURI("https://sfsl.xyz/xyz/index.php?route=/github"),
          "GITHUB-AUTH",
          "height=600,width=800,location=no,menubar=no,resizable=no,status=yes,toolbar=no,top=200,left=500"
        );
        if (wauth) {
          wauth.document.title = "GITHUB AUTHORIZTION";
          toast("请通过GITHUB授权注册。如果网速慢，请多次刷新。",10000);
        }
        return;
      }
      const content = typeof getContent === "function" ? getContent() : "";
      if (!content || content.length > 5000) {
        return;
      }
      const data = {
        content,
        name: "code",
        route: routeName(),
        featured: 0,
      };
      //修改或者新建代码
      let res;
      if (getId()) {
        res = await saveCode(getId(), data);
      } else {
        res = await createCode(data);
        if (!res.code) {
          safePush(getPath("/" + res.data.id));
        }
      }
      if (!res.code) {
        toast("成功保存到云端");
      }
    };
    return {
      hasId,
      toCloud,
    };
  },
});
</script>