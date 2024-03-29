<template>
  <div class="layout">
    <div class="sidebar">
      <slot name="sidebar"></slot>
    </div>
    <div class="container">
      <slot name="routerview"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class MainLayout extends Vue {}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
}

.sidebar {
  width: 350px;
  min-width: 350px;
  height: 100dvh;
  background: #f3f3f3;
  overflow-y: scroll;
}

.container {
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
