import React from "react";

interface Props {
  children: React.ReactNode;
}

const FlexStack: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-wrap flex-col gap-y-2 lg:mx-auto lg:flex-row lg:gap-y-4 lg:gap-x-2">
      {children}
    </div>
  );
};

export default FlexStack;
