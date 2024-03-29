<template v-if="awesome">
  <div>
    <h1>Vue is awesome!</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class RenderTemplate extends Vue {
  awesome: boolean = false;
}
</script>
