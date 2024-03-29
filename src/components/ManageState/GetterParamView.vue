<template>
  <div>
    <ul v-for="todo of todos" v-bind:key="todo.id">
      <li>{{ todo.id }}</li>
      <li>{{ todo.text }}</li>
      <li>{{ todo.done }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class GetterParamView extends Vue {
  todos: Array<Job> = [];

  created() {
    this.todos.push(this.$store.getters.getToDoById(2));
  }
}

interface Job {
  id: number;
  text: string;
  done: boolean;
}
</script>
