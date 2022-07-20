import authRoutes from "./auth";
import backendRoutes from "./backend";


const routes =[
    ...authRoutes,
    ...backendRoutes
]

export default routes;