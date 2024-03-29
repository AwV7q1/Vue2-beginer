<template>
  <div>
    <!-- 2 way binding -->
    <div>
      <input type="text" v-model="inputValue" placeholder="Enter text" />
      <!-- <input type="text" v-model="inputValue" placeholder="Enter text" /> -->
      <p>{{ inputValue }}</p>
    </div>
    <!-- 2 way binding -->

    <br />

    <!-- text multi line -->
    <div>
      <textarea v-model="message" placeholder="add multiple lines"></textarea>
      <p style="white-space: pre-line">{{ message }}</p>
    </div>
    <!-- text multi line -->

    <br />

    <!-- single checkbox -->
    <div>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>
    </div>
    <!-- single checkbox -->

    <br />

    <!-- multi checkbox same array -->
    <div>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <!-- multi checkbox same array -->

    <br />

    <!-- radio -->
    <div>
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>
      <br />
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
      <br />
      <span>Picked: {{ picked }}</span>
    </div>
    <!-- radio -->

    <br />

    <!-- select option -->
    <div>
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
    <!-- select option -->

    <br />

    <!-- value binding -->

    <!-- checkbox toggle data-->
    <div>
      <input
        type="checkbox"
        v-model="toggle"
        true-value="yes"
        false-value="no"
      />
      <span>{{ toggle }}</span>
    </div>
    <!-- checkbox toggle data-->

    <br />

    <!-- radio bind value -->
    <div>
      <input type="radio" v-model="pick" v-bind:value="radio" />
      <span>{{ pick }}</span>
    </div>
    <!-- radio bind value -->

    <br />

    <!-- select bind value -->
    <div>
      <select v-model="selected2">
        <!-- inline object literal -->
        <option v-bind:value="{ number: 123 }">123</option>
      </select>
      <span>{{ selected2 }}</span>
    </div>
    <!-- select bind value -->

    <br />

    <!-- v-model modifier -->

    <!-- .lazy -->
    <div>
      <input v-model.lazy="msg" />
      <p>{{ msg }}</p>
    </div>
    <!-- .lazy -->

    <br />

    <!-- .number -->
    <div>
      <input v-model.number="age" type="number" />
      <p>{{ age }}</p>
    </div>
    <!-- .number -->

    <br />

    <!-- .trim -->
    <div>
      <input v-model.trim="trimMsg" />
      <p>{{ trimMsg }}</p>
    </div>
    <!-- .trim -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class FormView extends Vue {
  inputValue: string = "";
  message: string = "";
  checked: boolean = false;
  checkedNames: Array<String> = [];
  picked: boolean = false;
  selected: string = "";
  toggle: string = "no";
  pick: string = "";
  radio: string = "radio check";
  selected2: number | string = "";
  msg: string = "";
  age: number = 0;
  trimMsg: string = "";
}
</script>
