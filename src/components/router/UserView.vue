<template>
  <div>
    <div>User id {{ $route.params.id }}</div>
    <router-view />
    <button @click="back">Back</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import router from "@/router";
import { Route, RawLocation } from "vue-router";

@Component
export default class UserView extends Vue {
  status: boolean = true;

  back() {
    router.push("navigate");
  }

  // beforeRouteEnter(to: any, from: any, next: any) {
  //   console.log("beforeRouteEnter");

  //   // called before the route that renders this component is confirmed.
  //   // does NOT have access to `this` component instance,
  //   // because it has not been created yet when this guard is called!
  //   next();
  // }
  // beforeRouteUpdate(to: any, from: any, next: any) {
  //   console.log("beforeRouteUpdate");
  //   // called when the route that renders this component has changed.
  //   // This component being reused (by using an explicit `key`) in the new route or not doesn't change anything.
  //   // For example, for a route with dynamic params `/foo/:id`, when we
  //   // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
  //   // will be reused (unless you provided a `key` to `<router-view>`), and this hook will be called when that happens.
  //   // has access to `this` component instance.
  //   next();
  // }

  // beforeRouteLeave(to: any, from: any, next: any) {
  //   if (this.status) {
  //     next();
  //   } else {
  //     if (confirm("blah blah")) {
  //       next();
  //     } else {
  //       console.log("beforeRouteLeave");
  //       next(false);
  //     }
  //   }
  //   // called when the route that renders this component is about to
  //   // be navigated away from.
  //   // has access to `this` component instance.
  // }

  beforeRouteEnter?(
    to: Route,
    from: Route,
    next: (to?: RawLocation | false | ((vm: Vue) => void)) => void
  ): void {
    console.log("beforeRouteEnter");
    next();
  }

  beforeRouteLeave?(
    to: Route,
    from: Route,
    next: (to?: RawLocation | false | ((vm: Vue) => void)) => void
  ): void {
    console.log("beforeRouteLeave");
    next();
  }

  beforeRouteUpdate?(
    to: Route,
    from: Route,
    next: (to?: RawLocation | false | ((vm: Vue) => void)) => void
  ): void {
    console.log("beforeRouteUpdate");
    next();
  }
}
</script>
