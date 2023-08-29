import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agents from "./pages/Agents";
import Teams from "./pages/Teams";

function App() {
  return <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </BrowserRouter>; 
}

export default App;
