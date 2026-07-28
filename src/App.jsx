import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Contacts from "./pages/Contact/Contacts";
import Sign from "./pages/SignUp/Sign";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contacts />} />
          <Route path="/Sign" element={<Sign />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
