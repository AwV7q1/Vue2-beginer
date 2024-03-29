<template>
  <div>
    <Layout>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>
      <!-- start main -->
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
      <!-- end main -->
      <template v-slot:[dynamicName]>
        <p>---------Footer---------</p>
      </template>
    </Layout>
    <button @click="updateName">Update slot name</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Layout from "./Layout.vue";

@Component({
  components: {
    Layout,
  },
})
export default class SlotLayoutView extends Vue {
  dynamicName: string = "footer";

  updateName() {
    this.dynamicName = "header";
  }
}
</script>
