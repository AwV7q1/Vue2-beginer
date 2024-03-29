<template>
  <div>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h2 v-else>Oh no 😢</h2>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ConditionRender extends Vue {
  awesome: boolean = false;
}
</script>
