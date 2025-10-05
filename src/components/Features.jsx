import React from 'react';

const features = [
  {
    title: 'Speaking Practice',
    desc: 'One-on-one practice sessions with expert trainers focused on fluency & pronunciation.',
    icon: '🗣️'
  },
  {
    title: 'Mock Tests',
    desc: 'Full-length mock tests that mimic real IELTS timing and format.',
    icon: '📝'
  },
  {
    title: 'AI Band Score',
    desc: 'Instant AI-powered band prediction and detailed feedback to track progress.',
    icon: '🤖'
  },
  {
    title: 'Personal Study Plan',
    desc: 'Custom study plans based on your strengths and weaknesses.',
    icon: '📚'
  }
];

export default function Features() {
  return (
    <section id="features" className="container mx-auto px-6 py-12 lg:py-20">
      {/* Section Header */}
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What We Offer</h2>
        <p className="mt-2 text-gray-600" data-aos="fade-up" data-aos-delay="100">
          Everything you need to push your band higher—structured and measurable.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, idx) => (
          <article
            key={f.title}
            className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-200"
            data-aos="fade-up"
            data-aos-delay={(idx + 1) * 100}
          >
            <div className="text-3xl">{f.icon}</div>
            <h3 className="mt-4 font-semibold text-lg text-gray-900">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            <div className="mt-4">
              <a
                href="#contact"
                className="text-sm font-medium text-blue-600 hover:underline transition-colors duration-200"
              >
                Get Started →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
