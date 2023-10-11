import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import Register from "./pages/register";
import Login from "./pages/login";
import DisplayData from "./pages/displayData";

function App() {
  return (
    <Routes>
<<<<<<< Updated upstream
      <Route path="/" element={<Home/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/display-data" element={<DisplayData/>}></Route>
=======
      <Route element={<PrivateRoutes />}>
        <Route element={<Timeline />} path="/" exact />
        <Route element={<DisplayData />} path="/display-data" />
      </Route>
      <Route element={<Register />} path="/register" />
      <Route element={<Login />} path="/login" />
>>>>>>> Stashed changes
    </Routes>
  );
}

export default App;
