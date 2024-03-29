<template>
  <div>
    <ButtonSlot>Active</ButtonSlot>
    <ButtonSlot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ButtonSlot from "./ButtonSlot.vue";

@Component({
  components: {
    ButtonSlot,
  },
})
export default class SlotView extends Vue {}
</script>
