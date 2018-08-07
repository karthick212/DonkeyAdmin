import Vue from 'vue'
import Router from 'vue-router'
import AdminRoutes from './admin'
//import CourierRoutes from './courier'

Vue.use(Router)

const baseRoutes = [
];

const routes=baseRoutes.concat(AdminRoutes);

export default new Router({
routes,
})

