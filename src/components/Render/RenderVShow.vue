<template>
  <h1 v-show="ok">Hello!</h1>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class RenderVShow extends Vue {
  ok: boolean = true;
}
</script>
