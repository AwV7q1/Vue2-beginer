<template>
  <div>
    <p>{{ $store.state.count }}</p>
    <button @click="increament">Add 1</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class ActionCommitView extends Vue {
  increament() {
    this.$store.dispatch("increment");
    console.log(this.$store.state.count);
  }
}
</script>
