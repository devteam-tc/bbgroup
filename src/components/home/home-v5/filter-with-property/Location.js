"use client";
import { useEffect, useState } from "react";
import Select from "react-select";

const Location = () => {
  const inqueryType = [
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Bengaluru", label: "Bengaluru" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Chennai", label: "Chennai" },
    { value: "Pune", label: "Pune" },
    { value: "Delhi", label: "Delhi" },
    { value: "Gurugram", label: "Gurugram" },
    { value: "Kolkata", label: "Kolkata" },
  ];
  const [showSelect, setShowSelect] = useState(false);
  useEffect(() => {
    setShowSelect(true);
  }, []);
  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };
  return (
    <>
      {showSelect && (
        <Select
          defaultValue={[inqueryType[0]]}
          name="colors"
          options={inqueryType}
          styles={customStyles}
          className="text-start select-borderless"
          classNamePrefix="select"
          required
          isClearable={false}
        />
      )}
    </>
  );
};

export default Location;
