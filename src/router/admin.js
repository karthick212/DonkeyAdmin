import Dashboard from '@/admin/pages/Dashboard'

const AdminRoutes = [
 {
        path: '/admin',
        name: 'Dashboard',
        component: Dashboard
    },{
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    }

    /*,{
    	path:'*',
    	redirect:{name:'Dashboard'},
    }*/
]

export default AdminRoutes
