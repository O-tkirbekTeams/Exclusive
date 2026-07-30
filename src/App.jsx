import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Homes from "./pages/Home/Homes";
import Footer from "./components/Footer/Footer";
import SignIns from "./pages/Home/SignUp/SignIn/SignIns";
import Login from "./pages/Home/SignUp/Login/Logins";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign_up" element={<Login />} />
          <Route path="/login" element={<SignIns />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
