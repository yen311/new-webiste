import React from "react";

interface Props {
  top: string;
  children: React.ReactNode;
  bottom: string;
}

const Card: React.FC<Props> = ({ children, bottom, top }) => {
  return (
    <div
      className={`block w-full lg:w-4/12 xl:w-3/12 rounded-lg text-center text-surface shadow-secondary-1 bg-white/80 animate-breathing text-black/75`}
    >
      <div className="flex flex-col h-full">
        {/* Top section */}
        <div className="flex-grow border-b-2 border-neutral-100 px-6 py-3 flex items-center justify-center">
          {top}
        </div>

        {/* Middle section */}
        <div className="flex-grow p-6 flex items-center justify-center">
          <h5 className="my-auto mb-2 text-xl font-medium leading-tight ">
            {children}
          </h5>
        </div>

        {/* Bottom section */}
        <div className="flex-grow border-t-2 border-neutral-100 px-6 py-3 flex items-center justify-center">
          {bottom}
        </div>
      </div>
    </div>
  );
};

export default Card;
