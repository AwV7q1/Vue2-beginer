<template>
  <div>
    <div>{{ counter }}</div>
    <button v-on:click="counter += 1">Add 1</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class EventHandling extends Vue {
  counter: number = 0;
}
</script>
