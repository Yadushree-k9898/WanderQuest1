// // PrivateRoutes.js
// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { useAuth } from '../contexts/authContext';  // Import the context

// const PrivateRoutes = ({ component: Component, ...rest }) => {
//   const { isAuthenticated } = useAuth();  // Get the authentication state

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />  // Redirect to login if not authenticated
//         )
//       }
//     />
//   );
// };

// export default PrivateRoutes;


import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext'; // Import the context

const PrivateRoutes = ({ element: Component, ...rest }) => {
  const { isAuthenticated } = useAuth(); // Get the authentication state

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          Component
        ) : (
          <Navigate to="/login" replace /> // Redirect to login if not authenticated
        )
      }
    />
  );
};

export default PrivateRoutes;
