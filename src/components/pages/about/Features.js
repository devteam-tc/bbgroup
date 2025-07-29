const Features = () => {
  // Define an array of feature objects
  const features = [
    {
      icon: "flaticon-security",
      title: "Property Management",
      description:
        "Seamlessly manage listings, legal documentation and customer interactions with end-to-end support for property buyers, builders and vendors.",
    },
    {
      icon: "flaticon-keywording",
      title: "Mortgage Services",
      description:
        "Get hassle-free home loan assistance through our partner banks, with expert guidance for fast approvals and transparent processing.",
    },
    {
      icon: "flaticon-investment",
      title: "Currency Services",
      description:
        "Specialized support for NRI buyers and investors, including currency exchange guidance, regulatory clarity and secure transaction options.",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div className="list-one d-flex align-items-start mb30" key={index}>
          <span className={`list-icon flex-shrink-0 ${feature.icon}`} />
          <div className="list-content flex-grow-1 ml20">
            <h6 className="mb-1 text-white">{feature.title}</h6>
            <p className="text mb-0 fz15 text-white">{feature.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
