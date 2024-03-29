<template>
  <div>
    <div>
      {{ helloWord }}
    </div>
    <div>{{ name }}</div>
    <button @click="updateText('Vue')">Update text</button>
  </div>
</template>

<script lang="ts">
import Component, { mixins } from "vue-class-component";
import { Hello, World } from "./MixinData";

@Component
export default class MultiMixinView extends mixins(Hello, World) {
  created() {
    console.log(this.hello + " " + this.world);
  }

  get helloWord() {
    return this.hello + " " + this.world;
  }
}
</script>
