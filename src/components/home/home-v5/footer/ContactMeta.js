import React from "react";

const ContactMeta = () => {
  const contactInfoData = [
    {
      text: "Address",
      info: "Plot No. 241, 3rd Floor, VVG Elite Developers, Kavuri Hills, Phase - 2, Madhapur, Hyderabad, Telangana - 500081.",
      link: "#", // Empty link value for the first object
    },
    {
      text: "Contact Us",
      info: "+91 8919439603, +91 7032803200",
      link: "tel:+91 8919439603",
    },
    {
      text: "Need Live Support?",
      info: "info@builderbruce.in",
      link: "mailto:info@builderbruce.in",
    },
  ];

  return (
    <div className="row mb-4 mb-lg-5">
      {contactInfoData.map((contact, index) => (
        <div className="contact-info mb25" key={index}>
          <p className="text mb5">{contact.text}</p>
          {contact.link.startsWith("mailto:") ? (
            <h6 className="info-mail">
              <a href={contact.link}>{contact.info}</a>
            </h6>
          ) : (
            <h6 className="info-phone">
              <a href={contact.link}>{contact.info}</a>
            </h6>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
