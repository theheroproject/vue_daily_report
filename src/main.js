import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'

Vue.config.productionTip = false

import 'xeicon'

import FullCalendar from "vue-full-calendar";

import "fullcalendar-scheduler";
//import "fullcalendar/dist/fullcalendar.min.css";
//import "fullcalendar-scheduler/dist/scheduler.min.css";

Vue.use(FullCalendar);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')