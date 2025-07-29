import React from "react";

const ContactInfo = () => {
  const contactInfo = [
    {
      id: 1,
      title: "For Any Enquiry, Call Us:",
      phone: "+91 8919439603, +91 7032803200",
      phoneHref: "tel:+918919439603", // Main phone (first number)
    },
    {
      id: 2,
      title: "Email Our Team:",
      email: "info@builderbruce.in",
      emailHref: "mailto:info@builderbruce.in",
    },
    {
      id: 3,
      title: "Visit Our Office:",
      address: "Plot No. 241, 3rd Floor, VVG Elite Developers, Kavuri Hills, Phase - 2, Madhapur, Hyderabad, Telangana - 500081.",
    },
  ];

  return (
    <>
      {contactInfo.map((info) => (
        <div className="col-auto" key={info.id}>
          <div className="contact-info">
            <p className="info-title dark-color">{info.title}</p>
            {info.phone && (
              <h6 className="info-phone dark-color">
                <a href={info.phoneHref}>{info.phone}</a>
              </h6>
            )}
            {info.email && (
              <h6 className="info-mail dark-color">
                <a href={info.emailHref}>{info.email}</a>
              </h6>
            )}
            {info.address && (
              <h6 className="info-address dark-color">
                {info.address}
              </h6>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
