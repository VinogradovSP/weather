import React from "react";
import cl from "./input.module.css";

export const Input = ({ className, ...props }) => {
  return <input {...props} className={`${cl.inputSearch} ${className}`} />;
};
