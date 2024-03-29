<template>
  <div>
    {{ revertMessage }}
    <button @click="updateMessage">Update</button>
    <hr />
    {{ now }}
    <hr />
    Reactive: {{ date }}
    <button @click="updateDate">update date</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      message: "Hello",
      date: Date.now(),
    };
  },

  methods: {
    updateMessage(): string {
      return (this.message = "This is vuejs");
    },
    updateDate(): number {
      return (this.date = Date.now());
    },
  },

  computed: {
    revertMessage(): string {
      return this.message.split("").reverse().join("");
    },
    now(): number {
      return Date.now();
    },
  },
});
</script>
