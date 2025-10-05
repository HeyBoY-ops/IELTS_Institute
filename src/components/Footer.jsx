import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-700 mt-12">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 text-gray-300">
        {/* Company Info */}
        <div>
          <div className="text-blue-600 font-semibold text-lg">IELTS Institute</div>
          <div className="mt-2 text-sm">Office: 123 Learning Ave, City</div>
          <div className="text-sm">Email: hello@ielts-institute.example</div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="font-semibold text-gray-200">Quick Links</div>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>
              <a href="#features" className="hover:text-blue-600 transition-colors duration-200">
                Features
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-blue-600 transition-colors duration-200">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <div className="font-semibold text-gray-200">Subscribe</div>
          <p className="mt-2 text-sm text-gray-400">Get study tips and free practice resources.</p>
          <div className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 rounded-md border border-gray-700 px-3 py-2 bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} IELTS Institute. All rights reserved.
      </div>
    </footer>
  );
}
