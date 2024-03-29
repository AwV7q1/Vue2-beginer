<template>
  <div>
    <div>{{ hello }}</div>
    <button @click="updateText('VueJS')">Update text</button>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import MixinComponent from "./MixinComponent.vue";
@Component
export default class SingleMixinView extends MixinComponent {
  created() {
    console.log("component hook called");
    console.log(this.hello);
  }
}
</script>
