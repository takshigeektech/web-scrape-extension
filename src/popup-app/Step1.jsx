import React from "react";
import Button from "./Button";
import { cn } from "./utils";

const Step1 = ({ onUpdateSheetClick, className }) => {
  return (
    <div
      className={cn("w-full flex-col justify-center items-center", className)}
    >
      <h1 className="text-[22px] text-[#202124] font-medium mb-[25px]">
        Google Sheets API - Update
      </h1>
      <Button onClick={onUpdateSheetClick}>Get Product Data</Button>
    </div>
  );
};

export default Step1;
