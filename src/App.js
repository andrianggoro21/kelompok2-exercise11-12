import { Routes, Route } from "react-router-dom"
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import DisplayData from "./pages/displayData";
import Timeline from "./pages/timeline";

function App() {
  return (
    <Routes>
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
