<template>
  <div>
    <div>User name {{ $route.params.username }}</div>
    <div>Post id {{ $route.params.post_id }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class DynamicRouterView extends Vue {}
</script>
