import React from "react";
import { cn } from "./utils";

const Button = ({ children, className, type = "button", ...props }) => {
  return (
    <button
      {...props}
      type="button"
      className={cn(
        "bg-[#1a73e8] hover:bg-[#1558b0] text-white cursor-pointer text-[15px] transition-[background-color] duration-[0.3s] ease-[ease] w-full mx-0 my-[5px] px-[18px] py-[10px] rounded-md border-[none]",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
