import { lazy } from "react";

const authRoutes = [
    {
        pathName: '/',
        component:lazy(() => import('../../views/auth/login')),
        layout: 'Auth',
        protected:false
    },
      {
        pathName: '/register',
        component:lazy(() => import('../../views/auth/register')),
        layout: 'Auth',
        protected:false
    },
 
]

export default authRoutes;