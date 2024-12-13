import React from "react";
import { cn, setChromeStorage } from "./utils";
import Button from "./Button";
import Select from "./Select";

const Step2 = ({ className }) => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <div
      className={cn("w-full flex-col justify-center items-center", className)}
    >
      <h1 className="text-[22px] text-[#202124] font-medium mb-[25px]">
        Google Sheets API - Update
      </h1>

      <Select
        options={options}
        label="Choose an option"
        placeholder="Please select an option"
      />

      <Button className="my-[10px] mt-[20px]">Update Sheet</Button>
      <Button
        className="my-[0px] mt-[0px] mb-[10px]"
        onClick={() => setChromeStorage("curStep", 0)}
      >
        Get Product Data
      </Button>
      <Button className="mt-[10px] bg-[#d93025] hover:bg-[#a52714]">
        Reset Product Data
      </Button>
      <Button>Fetch Product Inner Data</Button>
      <Button>Stop Processing</Button>
      <p className="text-[15px] text-[#5f6368] mt-[15px]">
        The data of 12 products Fetched
      </p>
    </div>
  );
};

export default Step2;
