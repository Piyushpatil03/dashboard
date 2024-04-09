import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Organization from "./pages/Organization";
import Trade from "./pages/Trade";
import Assets from "./pages/Assets";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/organization" element={<Organization/>} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/trade" element={<Trade />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
