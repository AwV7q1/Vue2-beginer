<template>
  <div>
    <input type="text" v-model="name" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  firstName: string = 'John'
  lastName: string = 'Doe'

  get name() {
    return this.firstName + ' ' + this.lastName;
  }

  set name(value) {
    const splited = value.split(" ");
    this.firstName = splited[0];
    this.lastName = splited[1] || '';
  }
}
</script>
