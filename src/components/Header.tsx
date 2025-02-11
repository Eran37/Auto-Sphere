import React from 'react';
import { Menu, X, Bot } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { href: '#services', text: 'שירותים' },
    { href: '#testimonials', text: 'המלצות' },
    { href: '#contact', text: 'צור קשר' },
    { href: '#about', text: 'אודות' },
  ];

  return (
    <header className="bg-gray-900 border-b border-[#475569]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-[#475569] lg:border-none">
          <div className="flex items-center">
            <a href="#" className="flex items-center group">
              <span className="sr-only">Auto-Sphere</span>
              <Bot className="h-6 w-6 text-[#1E90FF] ml-2" />
              <div className="text-2xl font-bold gradient-text logo-hover-effect">Auto-Sphere</div>
            </a>
          </div>
          <div className="hidden lg:flex space-x-8 rtl:space-x-reverse">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-medium text-[#94a3b8] hover:text-[#e5e7eb] transition-colors duration-300"
              >
                {item.text}
              </a>
            ))}
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="bg-[#475569] p-2 rounded-md text-[#e5e7eb] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#94a3b8]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">פתח תפריט</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-[#94a3b8] hover:text-[#e5e7eb] hover:bg-[#475569] transition-colors duration-300"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}