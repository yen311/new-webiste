import React from "react";

interface Props {
  children: React.ReactNode;
}

const Sentence: React.FC<Props> = ({ children }) => {
  return (
    <div className="rounded-full border-double relative overflow-hidden bg-white/50 my-4 p-4">
      {children}
    </div>
  );
};

export default Sentence;
