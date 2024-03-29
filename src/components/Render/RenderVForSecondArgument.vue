<template>
  <div>
    <ul id="example-1">
      <li v-for="(item, index) in itemList" :key="index">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class RenderVFor extends Vue {

  parentMessage: string = "Parent";
  itemList: Array<Item> = [
    { message: 'Foo' },
    { message: "Bar" },
  ];
}

interface Item {
  message: string;
}
</script>
