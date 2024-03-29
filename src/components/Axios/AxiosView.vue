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
import productApi from "./api/productApi";
@Component
export default class AxiosView extends Vue {
  listItem: any = [];

  async created() {
    try {
      this.listItem = await productApi.getAll();
    } catch (error) {
      console.log("error", error);
    }

    console.log(this.listItem);
  }
}
</script>
