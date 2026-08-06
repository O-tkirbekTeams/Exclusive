import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Homes from "./pages/Home/Homes";
import Footer from "./components/Footer/Footer";
import SignIns from "./pages/Home/SignUp/SignIn/SignIns";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Home/SignUp/Login/Logins";
import Like from "./pages/WishList/Like/Like";
import Chacout from "./pages/ChacOut/Chacout";
import Cart from "./pages/Contact/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<SignIns />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signUp" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Like" element={<Like />} />
          <Route path="/checout" element={<Chacout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
