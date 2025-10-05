import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        <section className="container mx-auto px-6 lg:px-8 mt-16">
          <Features />
        </section>

        <section className="container mx-auto px-6 lg:px-8 mt-12">
          <Testimonials />
        </section>
      </main>

      <Footer />
    </div>
  );
}










// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';


// export default function App() {
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
//       <Navbar />
//       <main className="flex-grow">
//         <Hero />
//         <section className="py-16">
//           <div className="mx-auto px-6 container-max">
//             <Features />
//           </div>
//         </section>


//         <section className="py-16 bg-white">
//           <div className="mx-auto px-6 container-max">
//             <Testimonials />
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// }