<template>
  <div>
    <div>{{ counter }}</div>
    <button @click="increament">Add 1</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ButtonCounter extends Vue {
  counter: number = 0;
  increament() {
    this.counter++;
  }
}
</script>
