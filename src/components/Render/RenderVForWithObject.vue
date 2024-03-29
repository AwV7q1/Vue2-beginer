<template>
  <div>
    <ul v-for="(value, name, index) in object" :key="index">
      <li>{{ name }}: {{ value }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class RenderVForWithObject extends Vue {
  object: obj = {
    title: "How to do lists in Vue",
    author: "Jane Doe",
    publishedAt: "2016-04-10",
  };
}

interface obj {
  title: string;
  author: string;
  publishedAt: string;
}
</script>
