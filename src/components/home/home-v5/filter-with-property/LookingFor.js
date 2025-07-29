"use client";
import { useEffect, useState } from "react";
import Select from "react-select";

const LookingFor = () => {
  const inqueryType = [
    { value: "Houses", label: "Houses" },
    { value: "Apartments", label: "Apartments" },
    { value: "Office", label: "Office" },
    { value: "TownHome", label: "TownHome" },
    { value: "Bungalow", label: "Bungalow" },
    { value: "Villa", label: "Villa" },
  ];
  const [showSelect, setShowSelect] = useState(false);
  useEffect(() => {
    setShowSelect(true);
  }, []);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: "none",
    }),
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

export default LookingFor;
