 import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ServicePage from "./components/ServicePage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import BookAppointment from "./components/BookAppointment";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<BookAppointment />} />  
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
