import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Users from './Views/Users'
import Forums from './Views/Forums'
import LogInForm from './Views/LogInForm'
import SignUpForm from './Views/SignUpForm'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: "/users", component: Users},
  {path: "/forums", component: Forums},
  {path: "/logIn", component: LogInForm},
  {path: "/signUp", component: SignUpForm}
]

const router = new VueRouter({routes, mode: "history"})

new Vue({
  vuetify,
  router,
  components: {

  },
  render: h => h(App),
}).$mount('#app')
