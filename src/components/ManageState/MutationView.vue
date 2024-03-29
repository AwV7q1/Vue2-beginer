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
export default class MutationView extends Vue {
  increament() {
    this.$store.commit("increament");
    console.log(this.$store.state.count);
  }

  created() {
    console.log(this.$store.state.count);
  }
}
</script>
