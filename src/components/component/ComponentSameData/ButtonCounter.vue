<template>
  <div>
    <button @click="addNumber">You click button {{ counter }} times</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

const GetProps = Vue.extend({
  props: {
    counter: Number,
  },
});

@Component
export default class ButtonCounter extends GetProps {
  addNumber() {
    this.$emit("increament");
  }
}
</script>
