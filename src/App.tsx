import React from "react";
import { services } from "./data/services";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import AutomationPlatforms from "./components/AutomationPlatforms";
import ContactForm from "./components/ContactForm";
import ChatBot from "./components/ChatBot";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CompanyLogos from "./components/CompanyLogos";

function App() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <Header />
      <Hero />
      <CompanyLogos />
      <About />
      <AutomationPlatforms />
      <Testimonials />
      <ContactForm />
      <ChatBot />
    </div>
  );
}

export default App;
