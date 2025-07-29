const Amenities = () => {
  const amenities = [
    [
      { label: "Air Conditioning" },
      { label: "Lawn / Garden", defaultChecked: true },
      { label: "Basketball Court", defaultChecked: true },
      { label: "Clubhouse", defaultChecked: true },
    ],
    [
      { label: "Gated Community" },
      { label: "Security (24x7)" },
      { label: "Lift" },
      { label: "Power Backup" },
    ],
    [
      { label: "Reserved Parking" },
      { label: "Kids Play Area" },
      { label: "Rainwater Harvesting" },
      { label: "Refrigerator" },
    ],
  ];

  return (
    <>
      {amenities.map((column, columnIndex) => (
        <div className="col-sm-4" key={columnIndex}>
          <div className="widget-wrapper mb20">
            <div className="checkbox-style1">
              {column.map((amenity, amenityIndex) => (
                <label className="custom_checkbox" key={amenityIndex}>
                  {amenity.label}
                  <input
                    type="checkbox"
                    defaultChecked={amenity.defaultChecked}
                  />
                  <span className="checkmark" />
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Amenities;
