import React from "react";

export const Button = ({ children, color, size }) => {
  const buttonColor = {
    primary: "bg-gradient-to-r from-[#9806F2] to-[#689FE3] opacity-90 hover:opacity-100 border-[0.5px]",
    secondary: "bg-gradient-to-r from-[#FFA62E] to-[#AF7CCE]",
  };

  const buttonSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const colorClassName = buttonColor[color || "primary"];
  const sizeClassName = buttonSize[size || "md"];

  return <button className={`px-12 py-4 rounded-full ${colorClassName} ${sizeClassName} font-bold text-white opacity-90 hover:opacity-100 transition-opacity`}>{children}</button>;
};