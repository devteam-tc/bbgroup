const Features = () => {
  // Define an array of feature objects
  const features = [
    {
      icon: "flaticon-security",
      title: "Verified Property Listings",
      description:
        "Discover trusted, high-quality properties with transparent pricing and complete guidance all in one place.",
    },
    {
      icon: "flaticon-keywording",
      title: "Hassle-Free Documentation",
      description:
        "End-to-end support from verified listings to documentation, registration and post-sale help ensuring legal clarity.",
    },
    {
      icon: "flaticon-investment",
      title: "Premium Living Spaces",
      description:
        "Find modern, high-quality homes in prime locations. From apartments to gated communities, we guide you every step of the way.",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div className="list-one d-flex align-items-start mb30" key={index}>
          <span className={`list-icon flex-shrink-0 ${feature.icon}`} />
          <div className="list-content flex-grow-1 ml20">
            <h6 className="mb-1">{feature.title}</h6>
            <p className="text mb-0 fz15">{feature.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
