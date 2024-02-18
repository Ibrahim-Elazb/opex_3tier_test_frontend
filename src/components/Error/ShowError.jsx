import React from "react";

function ShowError({ ErrorMSG = null }) {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      {ErrorMSG ? (
        <>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {ErrorMSG.title}
          </h1>
          <p className="text-lg text-gray-500">{ErrorMSG.details}</p>
          <div className="flex justify-center gap-4">
            <a
              href="/"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Go Home
            </a>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Something Went Wrong
          </h1>
          <p className="text-lg text-gray-500">
            We're having trouble processing your request.
          </p>
          <p className="text-md text-gray-500 mt-2 mb-6">
            Please try again later or contact support if the problem persists.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Go Home
            </a>
            <a
              href="/"
              className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors duration-200"
            >
              Contact Support
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default ShowError;
