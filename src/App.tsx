import Header from "./components/Header";
import Hero from "./components/Hero";
import AutomationPlatforms from "./components/AutomationPlatforms";
import ContactForm from "./components/ContactForm";
import ChatBot from "./components/ChatBot";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CompanyLogos from "./components/CompanyLogos";

export default function App() {
  console.log("App component rendering...");

  return (
    <div className="min-h-screen w-full bg-[#0a192f] text-white overflow-x-hidden">
      <div className="max-w-[2000px] mx-auto">
        <Header />
        <Hero />
        <CompanyLogos />
        <About />
        <AutomationPlatforms />
        <Testimonials />
        <ContactForm />
        <ChatBot />
      </div>
    </div>
  );
}
