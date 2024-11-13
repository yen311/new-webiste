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
      <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10">
        {top}
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight ">{children}</h5>
      </div>
      <div className="border-t-2 border-neutral-100 px-6 py-3">{bottom}</div>
    </div>
  );
};

export default Card;
