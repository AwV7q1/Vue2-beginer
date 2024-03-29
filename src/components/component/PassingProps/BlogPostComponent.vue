<template>
  <div>{{ title }}</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const GetProps = Vue.extend({
  props: {
    title: String,
  },
});

@Component
export default class BlogPostComponent extends GetProps {}
</script>
