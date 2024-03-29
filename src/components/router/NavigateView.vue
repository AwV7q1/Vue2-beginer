<template>
  <div>
    <button @click="moveToPageUser">Move to page user</button>
    <button @click="moveToPageWithPath">Move to page with path</button>
    <button @click="moveToPageWithNameAndParam">
      Move to page with name & param
    </button>
    <button @click="useDynamicPath">Use dynamic path</button>
    <button @click="useDynamicParams">Use dynamic params</button>
    <button @click="useReplace">Use replace</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import router from "@/router";

@Component
export default class NavigateView extends Vue {
  userId: string = "456";

  moveToPageUser() {
    router.push("user");
  }

  moveToPageWithPath() {
    router.push({ path: "user" });
  }

  moveToPageWithNameAndParam() {
    router.push({ name: "user", params: { id: "456" } });
  }

  //bị lỗi khi back
  useDynamicPath() {
    router.push({ path: `user/${this.userId}` });
  }
  //không nhận param khi dùng path
  useDynamicParams() {
    router.push({ name: "user", params: { id: this.userId } });
    // router.push({ path: "user", params: { id: this.userId } });
  }

  useReplace() {
    router.replace("user");
  }

  
}
</script>
