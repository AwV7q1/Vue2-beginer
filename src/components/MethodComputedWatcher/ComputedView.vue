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
import Component from "vue-class-component";

@Component
export default class ComputedView extends Vue {
  message: string = "Hello";
  date: number = Date.now();

  //----start fucntion
  updateMessage(): string {
    return (this.message = "This is vuejs");
  }

  updateDate(): number {
    return (this.date = Date.now());
  }
  //---end function

  //---start computed
  get revertMessage(): string {
    return this.message.split("").reverse().join("");
  }

  get now(): number {
    return Date.now();
  }
  //---end computed
}
</script>
