import Header from "./components/Header";
import Hero from "./components/Hero";
import AutomationPlatforms from "./components/AutomationPlatforms";
import ContactForm from "./components/ContactForm";
import ChatBot from "./components/ChatBot";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CompanyLogos from "./components/CompanyLogos";

export default function App() {
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
