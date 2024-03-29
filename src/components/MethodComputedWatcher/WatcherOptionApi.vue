<template>
  <div>
    <input type="text" v-model="question" />
    <div>value ban đầu = {{ message }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      question: "1",
      message: "1",
    };
  },

  watch: {
    question(newValue, oldValue) {
      console.log("new value", newValue);
      console.log("old value", oldValue);
      this.message = newValue;
    },
  },
});
</script>
