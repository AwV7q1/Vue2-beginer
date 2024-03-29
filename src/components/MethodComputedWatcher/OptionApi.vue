<template>
  <div>
    <div>{{ count }}</div>
    <button @click="increament">Add 1</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increament(): number {
      return this.count++;
    },
  },
});
</script>
