<template>
  <div>
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="say('what?')">Say hi</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class MethodInline extends Vue {
  say(message: string) {
    alert(message);
  }
}
</script>
