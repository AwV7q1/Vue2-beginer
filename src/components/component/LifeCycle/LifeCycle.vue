<template>
  <div>
    <div id="aa">{{ count }}</div>
    <button @click="increment">Add 1</button>
    <button @click="deleteCounter">Destroy</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class LifeCycle extends Vue {
  count: number = 0;
  active: boolean = true;

  increment() {
    this.count++;
  }

  resetCounter() {
    this.count = 0;
  }

  deleteCounter() {
       // destroy the vue listeners, etc
    this.$destroy();
    // remove the element from the DOM
    this.$el.parentNode?.removeChild(this.$el);
  }

  beforeCreate() {
    console.log("1. before create");
  }

  created() {
    console.log("2. created");
  }

  beforeMount() {
    console.log("3. before create");
  }

  mounted() {
    console.log("4. mounted");
  }

  beforeUpdate() {
    console.log("5. before update");
  }

  updated() {
    console.log("6. updated");
  }

  beforeDestroy() {
    console.log("7. before destroy");
  }

  destroyed() {
    console.log("8. destroy");
  }
}
</script>
