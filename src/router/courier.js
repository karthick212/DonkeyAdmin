import CourierCompanyvw from '@/admin/pages/courier/CourierCompanyvw'
import CourierCompanyadd from '@/admin/pages/courier/CourierCompanyadd'
import ProductTypevw from '@/admin/pages/courier/ProductTypevw'
import ProductTypeadd from '@/admin/pages/courier/ProductTypeadd'

const CourierRoutes = [
    {
        path: '/courier/CourierCompany',
        name: 'CourierCompanyvw',
        component: CourierCompanyvw
    },
    {
        path: '/courier/CourierCompany/add',
        name: 'CourierCompanyadd',
          component: CourierCompanyadd
    },
    {
        path: '/courier/ProductType',
        name: 'ProductTypevw',
          component: ProductTypevw
    },
    {
        path: '/courier/ProductType/add',
        name: 'ProductTypeadd',
          component: ProductTypeadd
    }
]

export default CourierRoutes
