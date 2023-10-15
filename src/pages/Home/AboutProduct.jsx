// const AboutProduct = () => {
//   return (
//     <div  data-aos="fade-down"
//     data-aos-easing="linear"
//     data-aos-duration="1000">
//       <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//         <div className="grid gap-10 lg:grid-cols-2">
//           <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
//             <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400"></div>
//             <div className="max-w-xl mb-6">
//               <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
//                 About
//                 <br className="hidden md:block" />
//                 Our Shoes Quality
//               </h2>
//               <p className="text-base text-gray-700 md:text-lg text-justify">
//                 At This Company, product quality is our utmost priority. We
//                 source premium materials and employ stringent quality control
//                 measures to ensure that every product meets the highest
//                 standards. Our commitment to excellence guarantees durability,
//                 reliability, and customer satisfaction. When you choose us,
//                 you're choosing unparalleled quality that stands the test of
//                 time.
//               </p>
//               <button className="btn btn-sm mt-3 btn-secondary">Learn More</button>
//             </div>
//             <div>
//               <a
//                 href="/"
//                 aria-label=""
//                 className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
//               >
//                 Learn more
//                 <svg
//                   className="inline-block w-3 ml-2"
//                   fill="currentColor"
//                   viewBox="0 0 12 12"
//                 >
//                   <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//           <div className="flex items-center justify-center -mx-4 lg:pl-8">
//             <div className="flex flex-col items-end px-3">
//               <img
//                 className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
//                 src="https://www.shutterstock.com/image-photo/vintage-red-shoes-on-white-260nw-92008067.jpg"
//                 alt=""
//               />
//               <img
//                 className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
//                 src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc="
//                 alt=""
//               />
//             </div>
//             <div className="px-3">
//               <img
//                 className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
//                 src="https://images.pexels.com/photos/2857040/pexels-photo-2857040.jpeg?cs=srgb&dl=pexels-gi%C3%A0y-da-tino-2857040.jpg&fm=jpg"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutProduct;



const AboutProduct = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Commitment to Quality
            </h2>
            <p className="text-lg text-gray-700">
            An impressive way to describe your company is minimize the words, but showcase the facts and figures that make you unique. This PPT Presentation allows you to showcase revenue, give out your mission and explain them in significant detail. Describe your key product offerings, the difference you make to the world and how this is very fulfilling for your business as well. In this instance, the example is of a payment firm, but you can key in your own facts and figures to create a compelling company description for the ages. It will both be a pitch and a statement of confidence in your longevity. 
            </p>
            <button className="btn btn-primary mt-4">Learn More</button>
            <a
              href="/"
              aria-label=""
              className="text-blue-600 hover:text-blue-800 mt-2 inline-flex items-center font-semibold"
            >
              Learn more
              <svg
                className="w-4 h-4 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 11.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <img
              className="object-cover rounded shadow-lg h-64 w-full"
              src="https://tse3.mm.bing.net/th?id=OIP.TknHDACoZ33ZveR0_ADiegHaE8&pid=Api&P=0&h=180"
              alt="Product Image 1"
            />
            <img
              className="object-cover rounded shadow-lg h-64 w-full"
              src="https://tse4.mm.bing.net/th?id=OIP.gOmj8AGKjWuJBX0Fx1TGdgHaHw&pid=Api&P=0&h=180"
              alt="Product Image 2"
            />
            <img
              className="object-cover rounded shadow-lg h-64 w-full"
              src="https://tse4.mm.bing.net/th?id=OIP.f9_EDXfuW_TnQDAWePVODwHaEo&pid=Api&P=0&h=180"
              alt="Product Image 3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
