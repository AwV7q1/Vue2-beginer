<template>
  <div>
    <ButtonCounter />
    <!-- <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ButtonCounter from "./ButtonCounter.vue";

@Component({
  components: {
    ButtonCounter,
  },
})
export default class CounterView extends Vue {}
</script>
