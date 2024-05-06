import React from "react";
import Banner from "./Components/banner/Banner";
import Footer from "./Components/footer/Footer";
import FooterBottom from "./Components/footer/FooterBottom";
import Navbar from "./Components/navbar/Navbar";
import ProjectsCard from "./Components/projects/ProjectsCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carddetails from "./Components/projects/Carddetails"
import Contact from "./Components/contacts/Contact";
import Subscribe from "./Components/contacts/subscribe";

export function Home() {
  return (
    <>
      <Banner />
      <ProjectsCard />
    </>
  );
}

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
       <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/article/:index" element={<Carddetails/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/subscribe" element={<Subscribe/>} />
        </Routes>
        <Footer />
        <FooterBottom />
       </BrowserRouter>
    </div>
  );
}

export default App;




