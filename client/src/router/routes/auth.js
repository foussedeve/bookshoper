import { lazy } from "react";

const authRoutes = [
    {
        pathName: '/',
        component:lazy(() => import('../../views/auth/login')),
        layout: 'Blank',
        protected:false
    },
 
]

export default authRoutes;