import { Routes, Route } from "react-router-dom"
import Register from "./pages/register";
import DisplayData from "./pages/displayData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register/>}></Route>
      <Route path="/DisplayData" element={<DisplayData/>}></Route>
    </Routes>
  );
}

export default App;
