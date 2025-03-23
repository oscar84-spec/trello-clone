import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { verificarSesion } from "../services/api/route-protected";

const RouteProtected = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const authSession = async () => {
      try {
        const res = verificarSesion();
        setIsAuth(!!res);
      } catch (error) {
        console.log(error);
      }
    };
    authSession();
  }, []);

  if (isAuth === null) return <div>Autenticando</div>;
  return isAuth ? children : <Navigate to="/login" />;
};

export default RouteProtected;
