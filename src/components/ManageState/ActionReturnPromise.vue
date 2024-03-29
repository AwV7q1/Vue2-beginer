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
export default class ActionReturnPromise extends Vue {
  increament() {
    this.$store.dispatch("actionReturn").then(() => {
      console.log("call another action");
    });
    console.log(this.$store.state.count);
  }
}
</script>


