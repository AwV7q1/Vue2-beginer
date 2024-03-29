<template>
  <div>
    <span>
      <slot v-bind:user="user">
        {{ user.lastName }}
      </slot>
    </span>
    <span>
      <slot name="slot2"></slot>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class SlotPassData extends Vue {
  user = {
    firstName: "Vue",
    lastName: "JS",
  };
}
</script>
