import { ArrowLeft, Bot, Clock, DollarSign, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Bot className="h-8 w-8 text-[#00f7ff] ml-2 animate-bounce" />
                <span className="text-[#00f7ff] font-medium">
                  אוטומציה חכמה לעסקים
                </span>
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="gradient-text">
                  תן למערכת לעבוד בשבילך 24/7
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                הפוך תהליכים ידניים לאוטומטיים, קבל דוחות חכמים ותקשר עם לקוחות
                באופן מיידי. המערכת עובדת בשבילך 24/7, כך שתוכל להתמקד בדברים
                החשובים באמת.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[#00f7ff] to-[#b400ff] hover:opacity-90 transition-opacity duration-300 neon-glow md:py-4 md:text-lg md:px-10"
                  >
                    רוצה לחסוך זמן יקר?
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:mr-3">
                  <a
                    href="#services"
                    className="w-full flex items-center justify-center px-8 py-3 border border-[#00f7ff] text-base font-medium rounded-md text-[#00f7ff] bg-transparent hover:bg-[#00f7ff] hover:bg-opacity-10 transition-colors duration-300 md:py-4 md:text-lg md:px-10"
                  >
                    <Bot className="ml-2 h-5 w-5" />
                    איך נחסוך לך זמן?
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
