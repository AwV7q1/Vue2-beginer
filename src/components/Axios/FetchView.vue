<template>
  <div>
    <ul v-for="item in listItem" v-bind:key="item.id">
      <li>{{ item.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class FetchView extends Vue {
  listItem: any = [];
  async created() {
    try {
      const request = new Request("http://localhost:3000/items", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await fetch(request);
      this.listItem = await res.json();
      console.log(this.listItem);
    } catch (err) {
      console.log("error", err);
    }
  }
}
</script>
