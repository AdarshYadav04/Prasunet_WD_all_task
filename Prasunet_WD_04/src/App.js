import { Route, Routes } from "react-router-dom";
import "./app.css"
import Home from "./pages/home/homescreen/Home";
import Navbar from "./pages/home/Navbar";
const App=()=> {
  return (
    <div className="App">
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
