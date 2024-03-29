<template>
  <div>mixin component</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class MixinComponent extends Vue {
  hello: string = "hello";

  updateText(value: string) {
    return (this.hello = value);
  }

  created() {
    console.log('mixin hook called')
  }
}
</script>
