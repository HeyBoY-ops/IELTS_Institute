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
















// import React from 'react';


// export default function Hero() {
//   return (
//     <section className="pt-12 pb-6">
//       <div className="mx-auto px-6 container-max flex flex-col-reverse lg:flex-row items-center gap-12">
//         <div className="lg:w-6/12">
//           <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
//             Achieve your target <span className="text-brand-500">IELTS band</span> with confidence
//           </h1>
//           <p className="mt-4 text-lg text-gray-600">
//             Expert trainers, real mock tests, and AI-powered band prediction to help you focus on what matters.
//           </p>


//           <div className="mt-6 flex gap-4">
//             <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 text-white rounded-md shadow hover:brightness-95">Book a Free Demo</a>
//             <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 border rounded-md text-gray-700">Explore Features</a>
//           </div>


//           <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-600">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center">🎧</div>
//               <div>
//                 <div className="font-semibold">Speaking Practice</div>
//                 <div className="text-xs">Live sessions with feedback</div>
//               </div>
//             </div>


//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center">📝</div>
//               <div>
//                 <div className="font-semibold">Mock Tests</div>
//                 <div className="text-xs">Real exam environment</div>
//               </div>
//             </div>
//           </div>
//         </div>


//         <div className="lg:w-6/12">
//           <div className="w-full rounded-lg overflow-hidden shadow-lg">
//             <img src="https://images.unsplash.com/photo-1523240875335-c1a55a3f02d9?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5f3c3cbb1b16c3d719f3c7e7a4b8f8c8" alt="students studying" className="w-full object-cover h-72 md:h-96" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }