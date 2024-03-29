<template>
  <div>
    <h3>Directive</h3>
    <hr />
    <h4>v-text</h4>
    <div>
      <span v-text="message" />
    </div>
    <hr />
    <h4>v-html</h4>
    <div v-html="domHtml" />
    <hr />
    <h4>v-model</h4>
    <input type="text" v-model="inputData" v-focus />
    <p>{{ inputData }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus();
      },
    },
  },
})
export default class DirectiveView extends Vue {
  message: string = "Hello";
  domHtml: string = "<h3>render html</h3>";
  inputData: string = "";
}
</script>
