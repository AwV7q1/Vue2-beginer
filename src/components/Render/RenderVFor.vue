<template>
  <div>
    <ul id="example-1">
      <li v-for="item in itemList" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component

export default class RenderVFor extends Vue {
    
    itemList: Array<Item> = [
        {id: 1, name: 'boot'},
        {id: 2, name: 'glove'},
    ] 
}

interface Item {
        id: number,
        name: string
    }
</script>
