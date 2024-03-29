<template>
  <div>
    <ButtonCounter v-bind:counter="counter" v-on:increament="increament" />
    <ButtonCounter v-bind:counter="counter" v-on:increament="increament" />
    <ButtonCounter v-bind:counter="counter" v-on:increament="increament" />
    <ButtonCounter v-bind:counter="counter" v-on:increament="increament" />
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
export default class SameCounterView extends Vue {
  counter: number = 0;

  increament() {
    this.counter++;
  }
}
</script>
