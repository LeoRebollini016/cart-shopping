import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-200 flex-grow">
      {children}
    </div>
  );
};

export default Container;