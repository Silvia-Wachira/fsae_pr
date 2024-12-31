import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-900">404 - Page Not Found</h1>
      <p className="text-lg mt-4">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-purple-500 text-white rounded hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;

// import React from "react";
// import { Link } from "react-router-dom";

// const NotFoundPage = () => {
//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
//         <p className="text-lg mt-4 text-gray-700">
//           The page you're looking for doesn't exist.
//         </p>
//         <Link
//           to="/"
//           className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Go Back Home
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default NotFoundPage;
