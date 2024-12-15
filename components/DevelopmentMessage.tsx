import React from "react";

const DevelopmentMessage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] space-y-4 text-center">
      <div className="text-orange-600 bg-orange-100 p-4 rounded-lg shadow-md max-w-md">
        <h1 className="text-2xl font-semibold">
          This page is still under development 😕
        </h1>
        <p className="mt-2 text-orange-500">
          I'm working hard to bring this page to you. Please check back later.
        </p>
      </div>
    </div>
  );
};

export default DevelopmentMessage;
