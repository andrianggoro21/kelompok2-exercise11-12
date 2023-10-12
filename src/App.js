import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import Register from "./pages/register";
import Login from "./pages/login";
import DisplayData from "./pages/displayData";
import Timeline from "./pages/timeline";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Timeline />} path="/" exact />
        <Route element={<DisplayData />} path="/display-data" />
      </Route>
      <Route element={<Register />} path="/register" />
      <Route element={<Login />} path="/login" />
    </Routes>
  );
}

export default App;
