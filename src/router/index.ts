import Vue from 'vue'
import VueRouter, { RouteConfig, Route, RawLocation } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// Event handle
import EventHandling from '@/components/Event/EventHandling.vue'
import EventFunction from '@/components/Event/EventFunction.vue'
import MethodInline from '@/components/Event/MethodInline.vue'
//Render template
import ConditionRender from '@/components/Render/ConditionRender.vue'
import RenderTemplate from '@/components/Render/RenderTemplate.vue'
import RenderElseIf from '@/components/Render/RenderElseIf.vue'
import RenderVShow from '@/components/Render/RenderVShow.vue'
import RenderVFor from '@/components/Render/RenderVFor.vue'
import RenderVForSecondArgument from '@/components/Render/RenderVForSecondArgument.vue'
import RenderVForWithObject from '@/components/Render/RenderVForWithObject.vue'
//Component
import CounterView from '@/components/component/counter/CounterView.vue'
import SameCounterView from '@/components/component/ComponentSameData/SameCounterView.vue'
import PassPropView from '@/components/component/PassingProps/PassPropView.vue'
import LifeCycle from '@/components/component/LifeCycle/LifeCycle.vue'
//Methods Computed Watcher
import OptionApi from '@/components/MethodComputedWatcher/OptionApi.vue'
import MethodFunctionView from '@/components/MethodComputedWatcher/MethodFunctionView.vue'
import ComputedView from '@/components/MethodComputedWatcher/ComputedView.vue'
import ComputedOptionApi from '@/components/MethodComputedWatcher/ComputedOptionApi.vue'
import ComputedGetSet from '@/components/MethodComputedWatcher/ComputedGetSet.vue'
import WatcherView from '@/components/MethodComputedWatcher/WatcherView.vue'
import WatcherOptionApi from '@/components/MethodComputedWatcher/WatcherOptionApi.vue'
//Directive
import Directive from '@/components/directive/DirectiveView.vue'
//slot
import SlotView from '@/components/component/slot/SlotView.vue'
import SlotLayoutView from '@/components/component/slot/SlotLayoutView.vue'
import SlotPassView from '@/components/component/slot/SlotDataView.vue'
//mixin
import MultiMixinView from '@/components/Mixin/MultiMixinView.vue'
import SingleMixinView from '@/components/Mixin/SingleMixinView.vue'
//vuex
import DefaultStateView from '@/components/ManageState/DefaultStateView.vue'
import GetterView from '@/components/ManageState/GetterView.vue'
import GetterCountView from '@/components/ManageState/GetterCountView.vue'
import GetterParamView from '@/components/ManageState/GetterParamView.vue'
import MutationView from '@/components/ManageState/MutationView.vue'
import MutationPayloadView from '@/components/ManageState/MutationPayloadView.vue'
import ActionCommitView from '@/components/ManageState/ActionCommitView.vue'
import ActionReturnPromise from '@/components/ManageState/ActionReturnPromise.vue'
import UseStoreModule from '@/components/ManageState/UseModuleStoreView.vue'
//form
import FormView from '@/components/Form/FormView.vue'
import FormSubmit from '@/components/Form/FormSubmit.vue'
//fetch
import AxiosView from '@/components/Axios/AxiosView.vue'
import FetchView from '@/components/Axios/FetchView.vue'
//router
import DynamicRouterView from '@/components/router/DynamicRouterView.vue'
import UserView from '@/components/router/UserView.vue'
import NotFoundView from '@/components/router/NotFoundView.vue'
import PostNotFoundView from '@/components/router/PostNotFoundView.vue'
import ProfileView from '@/components/router/ProfileView.vue'
import PostView from '@/components/router/PostView.vue'
import NavigateView from '@/components/router/NavigateView.vue'
//router guard
import Login from '@/components/routerGuard/Login.vue'
import Dashboard from '@/components/routerGuard/Dashboard.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/redirect',
    redirect: '/'
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    alias: '/b',
    // beforeEnter: (to: any, from: any, next: any) => {
    //   if (to.name === "home") {
    //     next({ name: "test" })
    //   }
    //   else next();
    // }
  },
  {
    name: 'test',
    path: '/eventfunction',
    component: EventFunction
  },
  {
    path: '/eventhandle',
    component: EventHandling
  },
  {
    path: '/methodinline',
    component: MethodInline
  },
  {
    path: '/conditionrender',
    component: ConditionRender
  },
  {
    path: '/rendertemplate',
    component: RenderTemplate
  },
  {
    path: '/renderelseif',
    component: RenderElseIf
  },
  {
    path: '/rendervshow',
    component: RenderVShow
  },
  {
    path: '/rendervfor',
    component: RenderVFor
  },
  {
    path: '/rendervforsecondargument',
    component: RenderVForSecondArgument
  },
  {
    path: '/rendervforwithobject',
    component: RenderVForWithObject
  },
  
  {
    path: '/counterview',
    component: CounterView
  },
  {
    path: '/samecounterview',
    component: SameCounterView
  },
  {
    path: '/passprop',
    component: PassPropView
  },
  {
    path: '/lifecycle',
    component: LifeCycle
  },
  {
    path: '/optionapi',
    component: OptionApi
  },
  {
    path: '/method',
    component: MethodFunctionView
  },
  {
    path: '/computed',
    component: ComputedView
  },
  {
    path: '/computedoptionapi',
    component: ComputedOptionApi
  },
  {
    path: '/computedgetset',
    component: ComputedGetSet
  },
  {
    path: '/watch',
    component: WatcherView
  },
  {
    path: '/watchoptionapi',
    component: WatcherOptionApi
  },
  {
    path: '/directive',
    component: Directive
  },
  {
    path: '/slot',
    component: SlotView
  },
  {
    path: '/slotname',
    component: SlotLayoutView
  },
  {
    path: '/slotdata',
    component: SlotPassView
  },
  {
    path: '/mixinmulti',
    component: MultiMixinView
  },
  {
    path: '/mixin',
    component: SingleMixinView
  },
  {
    path: '/state',
    component: DefaultStateView
  },
  {
    path: '/getter',
    component: GetterView
  },
  {
    path: '/gettercount',
    component: GetterCountView
  },
  {
    path: '/getterparam',
    component: GetterParamView
  },
  {
    path: '/mutation',
    component: MutationView
  },
  {
    path: '/mutationpayload',
    component: MutationPayloadView
  },
  {
    path: '/action',
    component: ActionCommitView
  },
  {
    path: '/actionreturn',
    component: ActionReturnPromise
  },
  {
    path: '/modulestore',
    component: UseStoreModule
  },
  {
    path: '/form',
    component: FormView
  },
  {
    path: '/formsubmit',
    component: FormSubmit
  },
  {
    path: '/fetch',
    component: FetchView
  },
  {
    path: '/axios',
    component: AxiosView
  },
  {
    path: '/user',
    component: UserView,
    name: "user"
  },
  {
    path: '/user/:id',
    component: UserView,
    children: [
      {
        path: 'profile',
        component: ProfileView
      },
      {
        path: 'post',
        component: PostView
      }
    ]
  },
  {
    path: '/dynamicrouter/:username/post/:post_id',
    component: DynamicRouterView
  },
  {
    path: '/navigate',
    component: NavigateView
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    name: 'dashboard'
  },
  {
    path: '*',
    component: NotFoundView
  },
  {
    path: '/post/*',
    component: PostNotFoundView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




router.beforeEach((
  to: Route,
  from: Route,
  next: (to?: RawLocation | false | ((vm: Vue) => void)) => void): void => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.username) {
      alert('Chưa nhập username')
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})


export default router
