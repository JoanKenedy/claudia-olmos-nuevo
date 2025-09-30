import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Page404 } from "./pages/Page404";
import { Cases } from "./pages/Cases";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Page404 />} path="*" />
        
      </Routes>
    </>
  );
}

export default App;
