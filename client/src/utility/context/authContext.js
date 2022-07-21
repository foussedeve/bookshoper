import React from "react";
import AXIOS_BASE from "../../services/app.service";
import session from "../../session"
let AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  let [user, setUser] = React.useState(session.get("USER_SESSION") ?? null);

  let signin = async (credentiel, callback) => {
      let statutRequest = {status: true, message: 'Avec succes'};
      try {
        // api request ---
        let request=await AXIOS_BASE.post("/login",credentiel);
        let response=request?.data;
        
        let token=response?.authToken;
        // const corpsUserReceiveRequestApi = {role: 'admin', name: 'Rock Kabore'}
        const corpsUserReceiveRequestApi={
            id:token?.user?.id,
            lastname:token?.user?.lastname,
            firstname:token?.user?.firstname,
            role:token?.user?.roles[0],
            email:token?.user?.email,
            bookshop:token?.user?.bookshop.id,
            token:token?.value
        }
      
        // enregistrement dans le localstorage
        session.set("USER_SESSION", corpsUserReceiveRequestApi)
        setUser(corpsUserReceiveRequestApi);
    } catch (error) {
     
      const {response:{status,data}}=error
       
        statutRequest = {status: false, message:data,code:status}
    }
    callback(statutRequest);
  };

  let signout = (callback) => {
    let statutRequest = {status: true, message: 'Avec succes'};
    try {
        setUser(null);
        session.remove("USER_SESSION")
    } catch (error) {
        const message = error?.response ?? '';
        statutRequest = {status: false, message: message}
    }
    callback(statutRequest);
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export {AuthContext, AuthProvider}
