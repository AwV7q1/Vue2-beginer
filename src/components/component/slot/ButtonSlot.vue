<template>
  <button>
    <slot>Submit</slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class ButtonSlot extends Vue {}
</script>
