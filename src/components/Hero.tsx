import { Bot, Clock, DollarSign, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-4 bg-gray-900 sm:pb-8 md:pb-12 lg:pb-16">
          <main className="mt-6 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 lg:mt-10 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="gradient-text">
                  האוטומציה שחוסכת לך מאות שעות עבודה
                </span>
                <br />
                <span className="text-gray-300 text-3xl sm:text-4xl md:text-5xl mt-2 block">
                  תן לתהליכים שלך לעבוד בשבילך
                </span>
              </h1>

              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                לאחר בירור מעמיק של הצרכים העסקיים שלך, נתאים עבורך פתרון
                אוטומציה חכם שמייעל תהליכים, חוסך זמן יקר ומגדיל רווחיות. מתאים
                במיוחד לעורכי דין, רואי חשבון, סוכנויות ביטוח, נדל"ן ועסקים עם
                תהליכים חוזרים.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
                <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-gray-800 rounded-lg p-4">
                  <Clock className="h-6 w-6 text-[#00f7ff]" />
                  <span className="text-gray-200">חיסכון משמעותי בזמן</span>
                </div>
                <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-gray-800 rounded-lg p-4">
                  <DollarSign className="h-6 w-6 text-[#00f7ff]" />
                  <span className="text-gray-200">החזר השקעה מהיר</span>
                </div>
                <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-gray-800 rounded-lg p-4">
                  <TrendingUp className="h-6 w-6 text-[#00f7ff]" />
                  <span className="text-gray-200">שיפור איכות העבודה</span>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <a
                  href="#contact"
                  className="flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md text-white bg-gradient-to-r from-[#00f7ff] to-[#b400ff] hover:opacity-90 transition-opacity duration-300 neon-glow"
                >
                  <Bot className="ml-2 h-6 w-6" />
                  קבל ייעוץ חינם עכשיו
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
