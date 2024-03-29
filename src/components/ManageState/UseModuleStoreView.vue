<template>
  <div>
    <p>Use getters - {{ textFromStore }}</p>
    <p>Get state from store - {{ $store.state.moduleA.test }}</p>
    <div>
      <button @click="updateText">Update text</button>
      <button @click="recoveryText">Use Mutation</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class UseModuleStoreView extends Vue {
  get textFromStore(): string {
    return this.$store.getters["moduleA/getState"];
  }

  updateText() {
    this.$store.dispatch("moduleA/updateText");
  }

  recoveryText() {
    this.$store.commit("moduleA/recoveryState");
  }

  created() {
    console.log(this.$store.state.moduleA.test);
  }
}
</script>
