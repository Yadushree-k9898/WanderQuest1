// import React from 'react';

// const BottomBar = () => {
//   return (
//     <div className="mt-16 pt-8 border-t border-gray-800">
//       <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//         <p className="text-gray-400 text-sm">
//           © {new Date().getFullYear()} TravelAgency. All rights reserved.
//         </p>
//         <p className="text-gray-500 text-sm flex items-center group">
//           Made with{' '}
//           <span className="text-red-500 mx-1 animate-pulse group-hover:animate-bounce">❤️</span>
//           for travelers worldwide
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BottomBar;




import React from 'react';

const BottomBar = () => {
  return (
    <div className="mt-16 pt-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} TravelAgency. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm flex items-center group">
          Made with{' '}
          <span className="text-red-500 mx-1 animate-pulse group-hover:animate-bounce">
            ❤️
          </span>{' '}
          for travelers worldwide
        </p>
      </div>
    </div>
  );
};

export default BottomBar;
