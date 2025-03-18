import React from "react";

const Button = ({ type = "button", bgColor = "bg-primary", children }) => {
  return (
    <button
      className={`w-max py-1 px-3 rounded-md text-text-dark cursor-pointer ${bgColor}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
