import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = localStorage.getItem("token");
  return auth ? (
    <Outlet />
  ) : (
    alert("Silahkan Login Terlebih Dahulu") || <Navigate to="/login" />
  )
};

export default PrivateRoutes;
