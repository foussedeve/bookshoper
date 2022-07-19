import React from "react";
import session from "../../session"
let AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  let [user, setUser] = React.useState(session.get("USER_SESSION") ?? null);

  let signin = (credentiel, callback) => {
      console.log('credentiel', credentiel)
      let statutRequest = {status: true, message: 'Avec succes'};
      try {
        // api request ---
        const corpsUserReceiveRequestApi = {role: 'admin', name: 'Rock Kabore'}
        // enregistrement dans le localstorage
        session.set("USER_SESSION", corpsUserReceiveRequestApi)
        setUser(corpsUserReceiveRequestApi);
    } catch (error) {
        const message = error?.response ?? '';
        statutRequest = {status: false, message: message}
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
