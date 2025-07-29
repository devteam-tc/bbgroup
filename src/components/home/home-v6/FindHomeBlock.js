import React from "react";

const FindHomeBlock = () => {
  const blocks = [
    {
      icon: "flaticon-search-1",
      number: "01",
      subtitle: " Search Verified Listings",
      text: " Browse 100% verified apartments, houses & commercial spaces across top cities in India.",
    },
    {
      icon: "flaticon-chat",
      number: "02",
      subtitle: "Find Your Ideal Property",
      text: "Compare locations, budgets, amenities & choose ready-to-move or ongoing projects easily.",
    },
    {
      icon: "flaticon-bird-house",
      number: "03",
      subtitle: "Enquire & Schedule a Visit",
      text: "Request a callback or schedule site visits easily through our platform simple, fast and secure.",
    },
    {
      icon: "flaticon-house-1",
      number: "04",
      subtitle: "Book & Own with Ease",
      text: "Get legal assistance, home loan support & post-sale service all from one platform.",
    },
  ];

  return (
    <>
      {blocks.map((block, index) => (
        <div className="col-sm-6" key={index}>
          <div className="iconbox-style6">
            <span className={`icon ${block.icon}`} />
            <h3 className="title mb-1">{block.number}</h3>
            <h6 className="subtitle">{block.subtitle}</h6>
            <p className="iconbox-text">{block.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FindHomeBlock;
