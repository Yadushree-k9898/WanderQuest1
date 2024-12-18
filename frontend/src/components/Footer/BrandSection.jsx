// import React from 'react';
// import { Compass } from 'lucide-react';

// const BrandSection = () => {
//   return (
//     <div className="text-center mb-12">
//       <div className="flex items-center justify-center mb-6 group">
//         <div className="relative">
//           <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
//           <Compass className="w-14 h-14 text-teal-400 relative transform group-hover:rotate-180 transition-transform duration-700" />
//         </div>
//         <h2 className="text-3xl font-bold ml-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400">
//           TravelAgency
//         </h2>
//       </div>
//       <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
//         Discover the world with us. We create unforgettable travel experiences 
//         that combine adventure, comfort, and sustainability.
//       </p>
//     </div>
//   );
// };

// export default BrandSection;



import React from 'react';
import { Compass } from 'lucide-react';

const BrandSection = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-6 group">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
          <Compass className="w-14 h-14 text-teal-400 relative transform group-hover:rotate-180 transition-transform duration-700" />
        </div>
        <h2 className="text-3xl font-bold ml-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400">
          TravelAgency
        </h2>
      </div>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
        Discover the world with us. We create unforgettable travel experiences 
        that combine adventure, comfort, and sustainability.
      </p>
    </div>
  );
};

export default BrandSection;
