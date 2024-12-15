import React from "react";

interface Props {
  error: Error | null;
}

const ErrorMessage: React.FC<Props> = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] space-y-4 text-center">
      <div className="text-red-600 bg-red-100 p-4 rounded-lg shadow-md max-w-md">
        <h1 className="text-2xl font-semibold">
          Oops! Something went wrong 😕
        </h1>
        <h4 className="mt-2 font-bold">{error?.message ?? "Not Available"}</h4>
        <p className="mt-2 text-red-500">
          We couldn’t process your request. Please try again later or click the
          button below to report the issue to YEN and he will have a look soon.
        </p>
      </div>
      <button className="mt-4 px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Report Issue
      </button>
    </div>
  );
};

export default ErrorMessage;
