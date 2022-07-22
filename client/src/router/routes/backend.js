import { lazy } from "react";
import { ROLES } from "../../utility/app.constant";
const backendRoutes = [

    {
        pathName: '/dashboard',
        component: lazy(() => import('../../views/backend/dashboard')),
        layout: 'Backend',
        permissions: [ROLES.admin],
        protected: true

    },
    {
        pathName: '/nouveau-livre',
        component: lazy(() => import('../../views/backend/add-books')),
        layout: 'Backend',
        permissions: [ROLES.admin],
        protected: true

    }
]

export default backendRoutes;