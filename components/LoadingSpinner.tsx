import React from "react";

const LoadingSpinner = ({ children = "" }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] space-y-4">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white-500 border-solid"></div>
      <p className="text-white text-lg">{children}</p>
    </div>
  );
};

export default LoadingSpinner;
