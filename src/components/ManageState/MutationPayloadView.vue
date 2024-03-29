<template>
  <div>
    <div>
      <p>{{ $store.state.count }}</p>
      <button @click="increament">Add 10</button>
    </div>
    <div>
      <p>{{ $store.state.count }}</p>
      <button @click="increamentAmout">Add 100</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class MutationPayloadView extends Vue {
  increament() {
    this.$store.commit("increamentPayload", 10);
    console.log(this.$store.state.count);
  }

  increamentAmout() {
    this.$store.commit("increamentPayloadObject", { amount: 100 });
    console.log(this.$store.state.count);
  }
}
</script>
