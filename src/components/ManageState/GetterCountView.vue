<template>
  <div>
    <div>{{ countGetter }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class GetterCountView extends Vue {
  get countGetter() {
    return this.$store.getters.doneTodosCount;
  }
}
</script>
