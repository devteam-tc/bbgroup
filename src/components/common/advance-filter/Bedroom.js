const Bedroom = () => {
  const bedOptions = [
    { id: "xany", label: "any" },
    { id: "xtwoplus", label: "2BHK" },
    { id: "xthreeplus", label: "3BHK" },
    { id: "xfourplus", label: "4BHK" },
    { id: "xfiveplus", label: "5BHK" },
  ];

  return (
    <>
      {bedOptions.map((option, index) => (
        <div className="selection" key={option.id}>
          <input
            id={option.id}
            name="xbeds"
            type="radio"
            defaultChecked // Set the first option as defaultChecked
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </>
  );
};

export default Bedroom;
