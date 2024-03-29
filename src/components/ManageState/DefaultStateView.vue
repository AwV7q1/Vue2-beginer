<template>
  <div>
    <p>{{ $store.state.count }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class DefaultStateView extends Vue {
  created() {
    console.log(this.$store.state.count);
  }
}
</script>
