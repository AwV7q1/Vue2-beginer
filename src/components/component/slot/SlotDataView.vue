<template>
  <SlotPassData v-slot:default="slotProps">
    {{ slotProps.user.firstName }} {{ slotProps.user.lastName }}
  </SlotPassData>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SlotPassData from "./SlotPassData.vue";

@Component({
  components: {
    SlotPassData,
  },
})
export default class SlotDataView extends Vue {}
</script>
