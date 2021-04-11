<!--
 * @Author: Aardpro
 * @Date: 2021-04-11 10:38:30
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-11 15:38:52
 * @Description: 云端代码
-->
<template>
  <div class="cloud-code-title flex-middle">Cloud Codes</div>
  <template v-if="records.length > 1">
    <div
      v-for="(item, index) in records"
      :key="index"
      class="row code-list"
      :class="{ title: item.isTitle }"
    >
      <div class="col-1">
        <span v-if="!item.isTitle" v-text="index"></span><span v-else>#</span>
      </div>
      <div class="col-3">{{ item.route }}</div>
      <div class="col-3">{{ item.createtime }}</div>
      <div class="col-3">{{ item.modifytime }}</div>
      <div class="col-2 flex-right">
        <template v-if="!item.isTitle"
          ><a @click="askDelete(item)">删除</a>
          <a @click="askEdit(item)">编辑</a></template
        ><span v-else>操作</span>
      </div>
    </div>
  </template>
  <div class="flex-middle pad-20">no code in cloud</div>
  <div style="position: fixed; top: 1em; right: 1em">
    <go-home font-size="30px" color="#2a795c"></go-home>
  </div>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from "vue";
import { getCodeMylist, deleteCode } from "../../api";
import { safePush } from "../../router";
export default defineComponent({
  name: "CloudCode",
  components: {},
  props: {},
  setup(props, context) {
    const records = ref([
      {
        route: "",
        createtime: "创建时间",
        modifytime: "修改时间",
        route: "功能类型",
        isTitle: true,
      },
    ]);
    onBeforeMount(() => {
      getCodeMylist()
        .then((res) => {
          if (res.data.rows instanceof Array) {
            records.value.push(...res.data.rows);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    });
    const askDelete = async (item) => {
      const res = await deleteCode(item.id);
      if (!res.code) {
        records.value.splice(
          records.value.findIndex((k) => k.id === item.id),
          1
        );
      }
    };
    const askEdit = async (item) => {
      safePush({
        name: item.route,
        params: {
          id: item.id,
        },
      });
    };
    return {
      records,
      askDelete,
      askEdit,
    };
  },
});
</script>
<style lang="scss">
@import "../../assets/_mixins.scss";
.cloud-code-title {
  padding: 30px;
  font-size: 18px;
  color: #2a795c;
  font-weight: bold;
  font-family: "Eurostile";
  text-transform: uppercase;
}
.code-list.title {
  > div {
    font-size: 1.1em;
  }
}
.code-list {
  padding: 10px 5px;
  margin: 5px;
  > div {
    @include ellipsis();
    a {
      font-size: 0.8em;
      color: black;
      cursor: pointer;
    }
    a + a {
      margin-left: 20px;
    }
  }
}
.code-list:not(.title) {
  border-bottom: 1px solid #2a795c;
}
.code-list:not(.title):hover {
  color: aliceblue;
  background-color: #2a795c;
  > div {
    a {
      color: aliceblue;
    }
  }
}
</style>