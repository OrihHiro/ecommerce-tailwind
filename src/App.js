import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Banner from "./components/homebanner";
import Footer from "./components/footer";
import Productpage from "./components/product";
import Productdetails from "./components/productdetails";
import Contactform from "./components/contactform";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/product" element={<Productpage />} />
          <Route path="/productdetails/:id" element={<Productdetails />} />
          <Route path="/contactform" element={<Contactform />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
