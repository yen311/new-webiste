import React from "react";

interface Props {
  children: React.ReactNode;
}

const FlexStack: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-wrap flex-col lg:flex-row lg:gap-y-4 mb-4 lg:mb-6">
      {children}
    </div>
  );
};

export default FlexStack;
