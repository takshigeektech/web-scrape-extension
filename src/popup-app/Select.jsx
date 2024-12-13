import React, { useState } from "react";

const Select = ({ options, label, placeholder }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="w-full max-w-[320px] mx-auto text-[14px]">
      {/* {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )} */}
      <div className="relative">
        <select
          className="block w-full px-[16px] py-[8px] border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={selectedValue}
          onChange={handleChange}
        >
          <option value="" disabled>
            {placeholder || "Select an option"}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {/* {selectedValue && (
        <p className="mt-[8px] text-[14px] text-gray-500">
          You selected: {selectedValue}
        </p>
      )} */}
    </div>
  );
};

export default Select;
