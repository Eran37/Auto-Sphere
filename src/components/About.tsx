import { Bot, Award, Cpu, Brain } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">אודותינו</h2>
        {/* Enterprise Experience */}
        <div className="card-gradient rounded-lg p-8 mb-12 border border-[#1E90FF] neon-glow flex flex-col items-center">
          <div className="flex items-center mb-4 justify-center">
            <Award className="h-8 w-8 text-[#1E90FF] ml-3" />
            <h3 className="text-2xl font-bold gradient-text">ניסיון מוכח</h3>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed text-center">
            המומחים שלנו פיתחו והטמיעו פתרונות אוטומציה מתקדמים בחברות מובילות
            במשק כמו Matrix ltd., ZIM, ITURAN, LEUMIT, SHEBA TEL HASHOMER.
            הניסיון העשיר הזה מאפשר לנו להבין לעומק את האתגרים הטכניים והעסקיים
            ולספק פתרונות יעילים.
          </p>
        </div>

        {/* Technical Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card-gradient rounded-lg p-8 border border-[#1E90FF] neon-glow flex flex-col items-center">
            <div className="flex items-center mb-4 justify-center">
              <Cpu className="h-8 w-8 text-[#1E90FF] ml-3" />
              <h3 className="text-2xl font-bold gradient-text">
                מומחיות טכנית
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              הצוות שלנו כולל מומחי RPA ו-AI עם ניסיון עשיר בפיתוח מערכות
              אוטומציה מתקדמות. אנחנו משלבים טכנולוגיות מובילות כמו UiPath,
              Power Automate ו-Make כדי לספק פתרונות אוטומציה יעילים ומדויקים.
            </p>
          </div>

          <div className="card-gradient rounded-lg p-8 border border-[#1E90FF] neon-glow flex flex-col items-center">
            <div className="flex items-center mb-4 justify-center">
              <Brain className="h-8 w-8 text-[#1E90FF] ml-3" />
              <h3 className="text-2xl font-bold gradient-text">
                ניתוח תהליכים מתקדם
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              אנחנו מבצעים ניתוח מעמיק של תהליכים עסקיים ודפוסי עבודה כדי לזהות
              הזדמנויות לייעול ואוטומציה. הבנה זו מאפשרת לנו לפתח פתרונות
              שמשתלבים בצורה חלקה בתהליכי העבודה הקיימים.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[#1E90FF] to-[#FF1493] hover:opacity-90 transition-opacity duration-300 neon-glow"
          >
            <Bot className="ml-2 h-5 w-5" />
            רוצה לשמוע על הפתרונות הטכניים המתקדמים שלנו?
          </a>
        </div>
      </div>
    </section>
  );
}
