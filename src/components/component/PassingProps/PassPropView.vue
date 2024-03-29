<template>
  <div>
    <BlogPostComponent title="My journey with Vue" />
    <BlogPostComponent title="Blogging with Vue" />
    <BlogPostComponent title="Why Vue is so fun" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import BlogPostComponent from "./BlogPostComponent.vue";

@Component({
  components: {
    BlogPostComponent,
  },
})
export default class PassPropView extends Vue {}
</script>
