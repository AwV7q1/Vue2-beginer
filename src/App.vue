<template>
  <div id="app">
    <main-layout>
      <template v-slot:sidebar>
        <sidebar />
      </template>
      <template #routerview>
        <router-view />
      </template>
    </main-layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import MainLayout from "@/layout/MainLayout.vue";
import Sidebar from "@/layout/Sidebar.vue";

@Component({
  components: {
    MainLayout,
    Sidebar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // width: 100%;
  // height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
