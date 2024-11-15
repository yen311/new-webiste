import React from "react";

interface Props {
  children: React.ReactNode;
  disappearOnMobile: boolean;
  noPadding?: boolean;
}

const PageWrapper: React.FC<Props> = ({
  children,
  disappearOnMobile,
  noPadding = false,
}) => {
  return (
    <div
      className={`w-full ${noPadding ? "" : "p-6"} ${
        disappearOnMobile ? "lg:bg-white/30" : "bg-white/30"
      } lg:px-16 rounded-lg lg:shadow-lg`}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
