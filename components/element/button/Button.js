import React from "react";

export const Button = ({ children, type, size }) => {
  const buttonType = {
    primary: "bg-c-01 text-c-00 hover:opacity-80 ",
    secondary: "bg-c-00 text-c-01 border-4 border-c-01 hover:bg-c-01 hover:text-c-00",
  };

  const buttonSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const colorClassName = buttonType[type || "primary"];
  const sizeClassName = buttonSize[size || "md"];

  return <button className={`px-12 py-4 rounded-full ${colorClassName} ${sizeClassName} transition-all font-bold`}>{children}</button>;
};