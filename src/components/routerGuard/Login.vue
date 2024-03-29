<template>
  <div>
    <div>Login</div>
    <div>
      <form action="" @submit.prevent="handleSubmit">
        <div>
          <label for="">Username</label>
          <input type="text" placeholder="Username" v-model="username" />
        </div>
        <div>
          <label for="">Password</label>
          <input type="text" placeholder="Password" v-model="password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import router from "../../router";

@Component
export default class Login extends Vue {
  username: string = "";
  password: string = "";

  beforeRouteEnter(to: any, from: any, next: any) {
    console.log("aaaaa");
    next();
  }

  handleSubmit() {
    this.$store.dispatch("setUserName", this.username);
    router.push("/dashboard");
  }

  get stateUsername() {
    return this.$store.getters.getUserName;
  }
}
</script>
