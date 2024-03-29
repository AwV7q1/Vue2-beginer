<template>
  <div>
    <input type="text" v-model="question" />
    <div>value ban đầu = {{ message }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";

@Component
export default class WatcherView extends Vue {
  question: string = "1";
  message: string = "1";

  @Watch("question")
  onQuestionChanged(newValue: string, oldValue: string) {
    console.log("new value", newValue);
    console.log("old value", oldValue);
    this.message = newValue;
  }
}
</script>
