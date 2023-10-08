import { Routes, Route } from "react-router-dom"
import Register from "./pages/register";
import Login from "./pages/login";
import DisplayData from "./pages/displayData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/display-data" element={<DisplayData/>}></Route>
    </Routes>
  );
}

export default App;
