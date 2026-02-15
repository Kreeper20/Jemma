import { useState } from 'react';
import jema from './public/jemma.PNG';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 font-serif bg-white text-[#450065] shadow-[0_2px_10px_rgba(0,0,0,0.55)] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 w-full left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src={jema}
            alt="Jemma Logo"
            className="w-10 h-auto sm:w-12 lg:w-[50px]"
          />
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#450065] transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#450065] transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#450065] transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center font-bold gap-6 xl:gap-10 underline">
          <a href="#home" className="text-sm xl:text-base hover:text-purple-20 transition-colors">Home</a>
          <a href="#newsletter" className="text-sm xl:text-base hover:text-purple-20 transition-colors">Newsletter</a>
          <a href="#toolkit" className="text-sm xl:text-base hover:text-purple-20 transition-colors">Toolkit</a>
          <a href="#about" className="text-sm xl:text-base hover:text-purple-20 transition-colors">About</a>
          <a href="#testimonials" className="text-sm xl:text-base hover:text-purple-20 transition-colors">Testimonials</a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden lg:flex w-40 xl:w-48 h-11 xl:h-12 border-[#450065] border-2 xl:border-4 items-center justify-center bg-white hover:bg-[#450065] hover:text-white transition-all duration-300"
        >
          <span className="font-bold text-sm xl:text-base underline">Contact Us</span>
        </a>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-gray-200 pt-4">
          <a href="#home" onClick={() => setMenuOpen(false)} className="font-bold text-base py-3 px-2 underline hover:bg-purple-50 rounded-lg transition-colors">
            Home
          </a>
          <a href="#newsletter" onClick={() => setMenuOpen(false)} className="font-bold text-base py-3 px-2 underline hover:bg-purple-50 rounded-lg transition-colors">
            Newsletter
          </a>
          <a href="#toolkit" onClick={() => setMenuOpen(false)} className="font-bold text-base py-3 px-2 underline hover:bg-purple-50 rounded-lg transition-colors">
            Toolkit
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="font-bold text-base py-3 px-2 underline hover:bg-purple-50 rounded-lg transition-colors">
            About
          </a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className="font-bold text-base py-3 px-2 underline hover:bg-purple-50 rounded-lg transition-colors">
            Testimonials
          </a>

         
          
        </nav>
      </div>
    </header>
  );
}