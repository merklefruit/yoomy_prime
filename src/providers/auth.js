// This provider is responsible for authentication purpose.

import { createContext, useContext, useState } from "react";
import postRequest from "utils/postRequest";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const localUserJson = localStorage.getItem("user");
  const localUser = localUserJson && JSON.parse(localUserJson);
  const [user, setUser] = useState(localUser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const saveUser = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const deleteUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const showSuccessMsg = (message) => {
    setSuccess(message);
    setTimeout(() => setSuccess(""), 5000);
  };

  const showErrorMsg = (message) => {
    setError(message);
    setTimeout(() => setError(""), 5000);
  };

  // provider actions
  // args: (endpoint, body, action, errorCallback, successCallback)
  const userAction = async (endpoint, body, action) => {
    setLoading(true);
    await postRequest(endpoint, body, action, showErrorMsg, showSuccessMsg);
    setLoading(false);
  };

  const signup = (user) => userAction("/users/register", user, saveUser);
  const login = (user) => userAction("/users/authenticate", user, saveUser);
  const logout = () => deleteUser();

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        success,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
