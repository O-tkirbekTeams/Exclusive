import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Contacts from "./pages/Contact/Contacts";
import Sign from "./pages/SignUp/Sign";
import SignIns from "./pages/SignUp/SignIn/SignIns";
import Login from "./pages/SignUp/Login/Logins";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contacts />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/Login" element={<SignIns />} />
          <Route path="/SignIns" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
