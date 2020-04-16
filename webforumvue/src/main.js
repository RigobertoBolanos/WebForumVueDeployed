import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Users from './Views/Users'
import Forums from './Views/Forums'
import LogInForm from './Views/LogInForm'
import SignUpForm from './Views/SignUpForm'
import store from './config/store'

Vue.config.productionTip = false

Vue.use(VueRouter)
const routes = [
  {path: "/users", name: 'users', component: Users},
  {path: "/", name: 'forums', component: Forums},
  {path: "/logIn", name: 'logIn', component: LogInForm},
  {path: "/signUp", name: 'signUp', component: SignUpForm}
]
const router = new VueRouter({routes, mode: "history"})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
