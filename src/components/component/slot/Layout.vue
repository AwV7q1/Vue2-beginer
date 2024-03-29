<template>
  <div class="container">
    <header>
      <slot name="header"> header </slot>
    </header>
    <main>
      <slot> main </slot>
    </main>
    <footer>
      <slot name="footer"> footer </slot>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Layout extends Vue {}
</script>
