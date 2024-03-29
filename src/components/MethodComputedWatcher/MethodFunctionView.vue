<template>
  <div>
    <div>{{ count }}</div>
    <button @click="increment">Add 1</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class MethodFunctionView extends Vue {
  count: number = 0;

  increment() {
    this.count++;
  }
}
</script>
