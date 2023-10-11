import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = { token: false };
  return auth.token ? (
    <Outlet />
  ) : (
    alert("Silahkan Login Terlebih Dahulu") || <Navigate to="/login" />
  );
};

export default PrivateRoutes;
