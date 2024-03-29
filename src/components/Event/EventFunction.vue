<template>
  <div>
    <div>{{ counter }}</div>
    <button v-on:click="increment">Add 1</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class EventFunction extends Vue {
  counter: number = 1;

  increment() {
    this.counter++;
    console.log(this.counter);
  }
}
</script>
