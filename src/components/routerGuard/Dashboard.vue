<template>
  <div>
    <div>Dashboard</div>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import router from "@/router";

@Component
export default class Dashboard extends Vue {
  handleLogout() {
    router.replace("/login");
  }
}
</script>
