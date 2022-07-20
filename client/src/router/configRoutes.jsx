import React from "react";
import routes from "./routes";
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useLocation,


} from "react-router-dom";

import Backend from "../layout/backend";
import Blank from "../layout/blank";
import Auth from "../layout/auth"
import NotFound from "../views/others/not-found";
import Unauthorize from "../views/others/unauthorize";
import session from "../session";


const Layouts = { Backend,Blank,Auth};

// verify user connecting status 
const RequireAuth = ({ children }) => {
  let location = useLocation();
  if (!session.get.data) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

// control access
const HandlerControlAccess = ({
  children,
  layoutComponent,
  isProtectRoute,
  isAutorizedRoute,
}) => {
  let location = useLocation();
  const LayoutComponent = layoutComponent;
  if (isProtectRoute) {
    if (!isAutorizedRoute) {
      return <Navigate to="/unauthorize" state={{ from: location }} replace />;
    }
    return (
      <RequireAuth>
        <LayoutComponent>{children}</LayoutComponent>
      </RequireAuth>
    );
  }
  return <LayoutComponent>{children}</LayoutComponent>;
};

 const ConfigRoutes= ()=>{
  const user = {role: 'ROLE_ADMIN'}
 
    return (
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => {
              const ViewComponent = route?.component;
              const path = route?.pathName;
              const LayoutRoute = route?.layout? Layouts[`${route.layout}`]: Blank;
              let  isProtectRoute=route?.protected;
              let isAutorizedRoute =route?.permissions?.includes(user.role)? true : false;
               
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    < HandlerControlAccess layoutComponent={LayoutRoute} isProtectRoute={ isProtectRoute} isAutorizedRoute={isAutorizedRoute}>
                     < ViewComponent />
                    </ HandlerControlAccess>
              

                  }
                />
              );
            })}
            <Route path="/unauthorize" element={<Unauthorize />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      );


 }

 export default ConfigRoutes;