import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
            II
          </div>
          <div>
            <div className="text-gray-900 font-semibold text-lg">IELTS Institute</div>
            <div className="text-xs text-gray-400">Get your target band</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-gray-600">
          <a href="#features" className="hover:text-blue-600 transition-colors duration-200">
            Features
          </a>
          <a href="#testimonials" className="hover:text-blue-600 transition-colors duration-200">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">
            Contact
          </a>
          <button className="ml-4 px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-50 transition">
            Book a Demo
          </button>
        </nav>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
          >
            {/* Three lines */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a
              href="#features"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#testimonials"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </a>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}


