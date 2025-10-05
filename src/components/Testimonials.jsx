// import React from 'react';


// const reviews = [
//   {
//     name: 'Priya Sharma',
//     role: 'Student - Achieved 7.5',
//     text: 'The mock tests were so realistic — the feedback helped me focus my practice. Highly recommended!'
//   },
//   {
//     name: 'Rahul Verma',
//     role: 'Student - Achieved 8.0',
//     text: 'Speaking practice sessions boosted my confidence. Trainers are patient and motivating.'
//   },
//   {
//     name: 'Sara Lee',
//     role: 'Student - Achieved 7.0',
//     text: 'AI band predictor was surprisingly accurate and pointed me to weak areas.'
//   }
// ];


// export default function Testimonials() {
//   return (
//     <section id="testimonials">
//       <div className="text-center">
//         <h2 className="text-2xl font-bold">Student testimonials</h2>
//         <p className="mt-2 text-gray-600">Real stories from students who hit their goals.</p>
//       </div>


//       <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
//         {reviews.map((r, idx) => (
//           <div key={idx} className="bg-gray-50 border rounded-lg p-6">
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-semibold">{r.name.split(' ')[0][0]}</div>
//               <div>
//                 <div className="font-semibold">{r.name}</div>
//                 <div className="text-xs text-gray-500">{r.role}</div>
//               </div>
//             </div>
//             <p className="mt-4 text-sm text-gray-700">“{r.text}”</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import React from 'react';

// const reviews = [
//   {
//     name: 'Priya Sharma',
//     role: 'Student - Achieved 7.5',
//     text: 'The mock tests were so realistic — the feedback helped me focus my practice. Highly recommended!'
//   },
//   {
//     name: 'Rahul Verma',
//     role: 'Student - Achieved 8.0',
//     text: 'Speaking practice sessions boosted my confidence. Trainers are patient and motivating.'
//   },
//   {
//     name: 'Sara Lee',
//     role: 'Student - Achieved 7.0',
//     text: 'AI band predictor was surprisingly accurate and pointed me to weak areas.'
//   }
// ];

// export default function Testimonials() {
//   return (
//     <section id="testimonials" className="container mx-auto px-6 py-12 lg:py-20">
//       {/* Section Header */}
//       <div className="text-center">
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Student Testimonials</h2>
//         <p className="mt-2 text-gray-600">Real stories from students who hit their goals.</p>
//       </div>

//       {/* Review Cards */}
//       <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
//         {reviews.map((r, idx) => (
//           <div
//             key={idx}
//             className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
//           >
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
//                 {r.name.split(' ')[0][0]}
//               </div>
//               <div>
//                 <div className="font-semibold text-gray-900">{r.name}</div>
//                 <div className="text-xs text-gray-500">{r.role}</div>
//               </div>
//             </div>
//             <p className="mt-4 text-sm text-gray-700">“{r.text}”</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




import React from 'react';

const reviews = [
  {
    name: 'Priya Sharma',
    role: 'Student - Achieved 7.5',
    text: 'The mock tests were so realistic — the feedback helped me focus my practice. Highly recommended!'
  },
  {
    name: 'Rahul Verma',
    role: 'Student - Achieved 8.0',
    text: 'Speaking practice sessions boosted my confidence. Trainers are patient and motivating.'
  },
  {
    name: 'Sara Lee',
    role: 'Student - Achieved 7.0',
    text: 'AI band predictor was surprisingly accurate and pointed me to weak areas.'
  },
  // {
  //   name: 'Amit Kumar',
  //   role: 'Student - Achieved 8.5',
  //   text: 'The personalized study plan helped me focus on my weaknesses and improve rapidly.'
  // }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto px-6 py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Header vertically centered */}
        <div className="flex flex-col justify-center h-full text-center lg:text-left" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-gray-900">Student Testimonials</h2>
          <p className="text-gray-600 mt-2">
            Hear from students who achieved their target IELTS band with our expert guidance.
          </p>
        </div>

        {/* Right Side - Testimonials */}
        <div className="flex flex-col gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
              data-aos="fade-up"
              data-aos-delay={(idx + 1) * 120}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600 text-lg">
                  {r.name.split(' ')[0][0]}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{r.name}</div>
                  <div className="text-sm text-gray-500">{r.role}</div>
                </div>
              </div>
              <p className="mt-4 text-gray-700 text-sm">“{r.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
