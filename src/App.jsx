import { useState } from "react";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
// import Contactus from "./pages/contactus";
import ContactUs from "./pages/Contactus.jsx";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Skill from "./pages/Skill.jsx";
import Resume from "./pages/Resume.jsx";
import Home from "./pages/Home.jsx";
function App() {
  return (
    <>
      {/* <div className="pb-20"> */}
      <Header />
      {/* </div> */}
      <div className="pt-10">
        <Routes>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
