import React from 'react';
import { services } from './data/services';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import AutomationPlatforms from './components/AutomationPlatforms';
import ContactForm from './components/ContactForm';
import ChatBot from './components/ChatBot';
import About from './components/About';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 rtl text-gray-100">
      <Header />
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-[#0a192f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold gradient-text sm:text-4xl">
              הפתרונות שלנו
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              פתרונות אוטומציה חכמים ונגישים לכל עסק - קטן כגדול
            </p>
            <p className="mt-2 text-gray-400">
              מערכות פשוטות להפעלה, מחירים הוגנים, תוצאות מיידיות
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <AutomationPlatforms />
      <Testimonials />
      <About />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0a192f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold gradient-text sm:text-4xl">
              בוא נדבר על העסק שלך
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              גם עסק קטן יכול להיות חכם ואוטומטי
            </p>
            <p className="mt-2 text-gray-400">
              נתאים לך פתרון שמתחיל להחזיר את ההשקעה כבר מהחודש הראשון
            </p>
          </div>
          
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer with Legal Info */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold gradient-text">Auto-Sphere</h3>
              <p className="text-gray-400">פתרונות אוטומציה מתקדמים לכל עסק</p>
              <p className="text-gray-400 mt-2">ח.פ. 123456789</p>
              <p className="text-gray-400">רחוב הברזל 3, תל אביב</p>
            </div>

            {/* Legal Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">מידע משפטי</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => window.open('/privacy.pdf', '_blank')} className="text-gray-400 hover:text-white transition-colors">
                    מדיניות פרטיות
                  </button>
                </li>
                <li>
                  <button onClick={() => window.open('/terms.pdf', '_blank')} className="text-gray-400 hover:text-white transition-colors">
                    תנאי שימוש
                  </button>
                </li>
                <li>
                  <button onClick={() => window.open('/accessibility.pdf', '_blank')} className="text-gray-400 hover:text-white transition-colors">
                    הצהרת נגישות
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4">צור קשר</h4>
              <p className="text-gray-400">טלפון: 03-1234567</p>
              <p className="text-gray-400">פקס: 03-1234568</p>
              <p className="text-gray-400">דוא"ל: info@auto-sphere.co.il</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Auto-Sphere. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
}

export default App;