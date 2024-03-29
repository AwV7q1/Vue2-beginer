<template>
  <div>
    <div>
      <div class="title">
          Template
      </div>
      <div v-for="router in listTemplate" v-bind:key="router.path">
        <router-link :to="router.path" class="link">{{ router.name }}</router-link>
      </div>
    </div>
    <div>
      <div class="title">Event</div>
      <div v-for="router in listEvent" v-bind:key="router.path">
        <router-link :to="router.path" class="link">{{ router.name }}</router-link>
      </div>
    </div>
    <div>
      <div class="title">Component</div>
      <div v-for="router in listComponent" v-bind:key="router.path">
        <router-link :to="router.path" class="link">{{ router.name }}</router-link>
      </div>
    </div>
    <div>
      <div class="title">Methods - Computed - Watch</div>
      <div v-for="router in listMethod" v-bind:key="router.path">
        <router-link :to="router.path" class="link">{{ router.name }}</router-link>
      </div>
    </div>

    <div>
      <div class="title">Directive</div>
      <div v-for="router in listDirective" v-bind:key="router.path">
        <router-link :to="router.path" class="link">{{ router.name }}</router-link>
      </div>
    </div>

    <div>
      <div class="title">Slot</div>
      <div v-for="router in listSlot" v-bind:key="router.path">
        <router-link :to="router.path" class="link">{{ router.name }}</router-link>
      </div>
    </div>

    <div>
      <div class="title">Mixin</div>
      <div v-for="router in listMixin" v-bind:key="router.path">
        <router-link :to="router.path" class="link">{{ router.name }}</router-link>
      </div>
    </div>

    <div>
      <div class="title">Vuex</div>
      <div v-for="router in listVuex" v-bind:key="router.path">
        <router-link :to="router.path" class="link">{{ router.name }}</router-link>
      </div>
    </div>

    <div>
      <div class="title">Form</div>
      <div v-for="router in listForm" v-bind:key="router.path">
        <router-link :to="router.path" class="link">{{ router.name }}</router-link>
      </div>
    </div>

    <div>
      <div class="title">API</div>
      <div v-for="router in listAPI" v-bind:key="router.path">
        <router-link :to="router.path" class="link">{{ router.name }}</router-link>
      </div>
    </div>

    <div>
      <div class="title">Vue router</div>
      <div v-for="router in listRouter" v-bind:key="router.path">
        <router-link :to="router.path" class="link">{{ router.name }}</router-link>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Sidebar extends Vue {
  listTemplate: Array<Router> = [
    {
      name: "Render template",
      path: "rendertemplate",
    },
    {
      name: "v-if",
      path: "conditionrender",
    },
    {
      name: "else if",
      path: "renderelseif",
    },
    {
      name: "v-show",
      path: "rendervshow",
    },
    {
      name: "v-for",
      path: "rendervfor"
    },
    {
      name: 'v-for với tham số',
      path: 'rendervforsecondargument'
    },
    {
      name: "v-for với object",
      path: "rendervforwithobject"
    }

  ];

  listEvent: Array<Router> = [
    {
      name: "Event handle",
      path: "eventhandle"
    },
    {
      name: "Event function",
      path: "eventfunction"
    },
    {
      name: 'Method inline',
      path: "methodinline"
    }
  ]

  listComponent: Array<Router> = [
    {
      name: "Sử dụng component",
      path: "counterview"
    },
    {
      name: "Pass function với custom event",
      path: "samecounterview"
    },
    {
      name: "Pass props",
      path: "passprop"
    },
    {
      name: "Lifecycle",
      path: "lifecycle"
    }
  ]

  listMethod: Array<Router> = [
    {
      name: "Option API",
      path: "optionapi"
    }
    , {
      name: "Methods",
      path: "method"
    },
    {
      name: "Computed",
      path: "computed"
    },
    {
      name: "Computed Option API",
      path: "computedoptionapi"
    },
    {
      name: "Computed get/set",
      path: "computedgetset"
    },
    {
      name: "Watch",
      path: "watch"
    },
    {
      name: "Watch Option API",
      path: "watchoptionapi"
    }
  ]

  listDirective: Array<Router> = [
    {
      name: "Directive & custom directive",
      path: "directive"
    }
  ]

  listSlot: Array<Router> = [
    {
      name: "Sử dụng slot",
      path: "slot"
    },
    {
      name: "Slot name",
      path: "slotname"
    },
    {
      name: "Slot data",
      path: "slotdata"
    }
  ]

  listMixin: Array<Router> = [
    {
      name: "Sử dụng mixin",
      path: "mixin"
    },
    {
      name: "Sử dụng nhiều mixin",
      path: "mixinmulti"
    }
  ]

  listVuex: Array<Router> = [
    {
      name: "State",
      path: "state"
    },
    {
      name: "Getter",
      path: "getter"
    },
    {
      name: "Getter với params getter",
      path: "gettercount"
    },
    {
      name: "Truyền param với getter",
      path: "getterparam"
    },
    {
      name: "Mutation",
      path: "mutation"
    },
    {
      name: "Mutation payload",
      path: "mutationpayload"
    },
    {
      name: "Action",
      path: "action"
    },
    {
      name: "Action return",
      path: "actionreturn"
    },
    {
      name: "Module store",
      path: "modulestore"
    }
  ]

  listForm: Array<Router> = [
    {
      name: "Form input",
      path: "form"
    },
    {
      name: "Form submit",
      path: "formsubmit"
    }
  ]

  listAPI: Array<Router> = [
    {
      name: "Fetch",
      path: "fetch"
    },
    {
      name: "Axios",
      path: "axios"
    }
  ]

  listRouter: Array<Router> = [
    {
      name: "Router",
      path: "navigate"
    },
    {
      name: "Redirect",
      path: "/"
    },
    {
      name: "Router guard",
      path: "login"
    },
    {
      name: "404 Not found",
      path: "aaaaaaaaaaaaaaa"
    }
  ]
}

interface Router {
  name: string;
  path: string;
}
</script>

<style lang="scss" scoped>

.title {

  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #2c3e50;
}
.link {
  text-decoration: none;
  padding: 8px;
  display: block;
  //background-color: green;
  margin-bottom: 4px;
  color: #2c3e50;

  &:hover {
    background-color: #42b983;
    color: white;
  }
}

</style>
