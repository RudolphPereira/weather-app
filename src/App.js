import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import City from "./pages/City/City";
import Home from "./pages/Home/Home";
import SideNav from "./components/SideNav/SideNav";
import TopNav from "./components/TopNav/TopNav";

function App() {
  return (
    <div className="app">
      <div className="main">
        <BrowserRouter>
          <SideNav />
          <section className="appBox">
            <div className="topBox">
              <TopNav />
            </div>
            <Routes>
              <Route path="/" element={<Home className="home" />} />
              <Route path="city/:cityId" element={<City className="city" />} />
            </Routes>
          </section>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
