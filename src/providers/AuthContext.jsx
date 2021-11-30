import { useState, createContext, useContext } from "react";
import api from "../services/api";

const AuthContext = createContext({});

const useAuth = () => {
  const context = useContext(AuthContext);

  // if (context === {}) {
  //   throw new Error("useAuth must be used within an AuthProvider");
  // }

  return context;
};

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@Kenziehub:token");
    const user = localStorage.getItem("@Kenziehub:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = async (data) => {
    const response = await api.post("/sessions", data);

    const { token, user } = response.data;

    localStorage.setItem("@Kenziehub:token", token);
    localStorage.setItem("@Kenziehub:user", JSON.stringify(user));

    setData({ token, user });
  };

  const signOut = () => {
    localStorage.removeItem("@Kenziehub:token");
    localStorage.removeItem("@Kenziehub:user");

    setData({});
  };

  return (
    <AuthContext.Provider
      value={{
        token: data.token,
        user: data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
