import React from "react";

export const Button = ({ children, type, size }) => {
  const buttonType = {
    primary: "bg-c-01 text-c-00 hover:opacity-80 ",
    secondary: "text-c-01 border-2 border-c-01 hover:bg-c-01 hover:text-c-00",
  };

  const buttonSize = {
    sm: "text-sm px-7 py-2",
    md: "text-base px-8 py-2",
    lg: "text-base px-12 py-3 ",
  };

  const colorClassName = buttonType[type || "primary"];
  const sizeClassName = buttonSize[size || "md"];

  return <button className={`rounded-full ${colorClassName} ${sizeClassName} transition-all font-bold drop-shadow-[0_0_14px_rgba(109,199,236,0.491667)] hover:drop-shadow-[0_0_20px_rgba(81,177,204,0.64)]`}>{children}</button>;
};