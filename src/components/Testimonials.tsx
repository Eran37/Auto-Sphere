import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold gradient-text sm:text-4xl">
            לקוחות ממליצים
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            הצצה לסיפורי ההצלחה של לקוחותינו
          </p>
        </div>

        {/* Featured Video Testimonial */}
        <div className="mb-16">
          <div className="relative rounded-lg overflow-hidden card-gradient border border-[#1E90FF] neon-glow">
            <div className="aspect-w-16 aspect-h-9">
              {/* Video placeholder - replace src with actual video when ready */}
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <p className="text-gray-400 text-lg">סרטון המלצה יוצג כאן</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="דוד כהן"
                  />
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-semibold text-gray-100">
                    דוד כהן
                  </h3>
                  <p className="text-gray-400">
                    מנכ"ל, משרד עורכי דין כהן ושות'
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-lg">
                "המערכת חסכה לנו מעל 30 שעות עבודה בחודש. האוטומציה של תהליכי
                המשרד שיפרה משמעותית את היעילות שלנו."
              </p>
            </div>
          </div>
        </div>

        {/* Written Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card-gradient rounded-lg p-6 border border-[#1E90FF] neon-glow relative"
            >
              {/* Star rating moved to top left */}
              <div className="absolute top-4 left-4 flex items-center space-x-1 rtl:space-x-reverse">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-400"
                    }`}
                  />
                ))}
              </div>

              <Quote className="absolute top-4 right-4 h-8 w-8 text-[#1E90FF] opacity-20" />

              <blockquote className="text-gray-300 text-lg mb-6 mt-12">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center mt-auto">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                </div>
                <div className="mr-4">
                  <div className="text-base font-semibold text-gray-100">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[#1E90FF] to-[#FF1493] hover:opacity-90 transition-opacity duration-300 neon-glow"
          >
            רוצה להיות הסיפור ההצלחה הבא?
          </a>
        </div>
      </div>
    </section>
  );
}
