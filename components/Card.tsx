import React from "react";

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex font-semibold border-b border-gray-300 border-dashed pb-4 lg:w-3/4">
      <h5>{children}</h5>
    </div>
  );
};

export default Card;
