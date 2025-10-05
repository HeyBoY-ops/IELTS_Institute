import React from 'react';
import photo from '../assets/ss.jpg';

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
      {/* Text Content */}
      <div data-aos="fade-up" data-aos-delay="0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 leading-tight">
          Achieve your target IELTS band with confidence
        </h1>
        <p className="mt-6 text-gray-600 max-w-xl" data-aos="fade-up" data-aos-delay="100">
          Expert trainers, real mock tests, and AI-powered band prediction to help you focus on what matters.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="200">
          <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium shadow-md hover:opacity-95 transition">
            Explore Features
          </button>
          <button className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition">
            Book a Free Demo
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow hover:shadow-md transition" data-aos="fade-up" data-aos-delay="250">
            <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-lg">
              🎧
            </div>
            <div>
              <div className="font-semibold">Speaking Practice</div>
              <div className="text-sm text-gray-500">Live sessions with feedback</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow hover:shadow-md transition" data-aos="fade-up" data-aos-delay="300">
            <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-lg">
              📝
            </div>
            <div>
              <div className="font-semibold">Mock Tests</div>
              <div className="text-sm text-gray-500">Real exam environment</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative" data-aos="zoom-in" data-aos-delay="150">
        <div className="rounded-2xl bg-white shadow-lg p-4 min-h-[320px] flex items-center justify-center">
          {/* Replace placeholder with real asset */}
          <img
            src={photo}
            alt="students studying"
            className="object-cover rounded-lg w-full h-80"
          />
        </div>
      </div>
    </section>
  );
}

