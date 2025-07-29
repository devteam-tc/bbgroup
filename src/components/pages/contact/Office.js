import Image from "next/image";
import React from "react";

const Office = () => {
  const offices = [
    {
      id: 1,
      city: "Hyderabad",
      icon: "/images/icon/Hyderabad.svg",
      address: "Plot No. 241, 3rd Floor, VVG Elite Developers , Kavuri Hills, Phase - 2, Madhapur, Hyderabad, Telangana - 500081.",
      phoneNumber: "+91 8919439603, +91 7032803200",
    },
    {
      id: 2,
      city: "Chennai",
      icon: "/images/icon/Chennai.svg",
      address: "North Gate, NP 11, Developed PLot, Thiru Vi-Ka Industrial Estate, Ekkathuthangal, Chennai, TamilNadu - 600035.",
      phoneNumber: "+91 8919439603, +91 7032803200",
    },
   
    // Add more office objects here...
  ];

  return (
    <>
      {offices.map((office) => (
        <div className="col-sm-6 col-lg-4" key={office.id}>
          <div className="iconbox-style8 text-center">
            <div className="icon">
              <Image width={120} height={120} src={office.icon} alt="icon" />
            </div>
            <div className="iconbox-content">
              <h4 className="title">{office.city}</h4>
              <p className="text mb-1">{office.address}</p>
              <h6 className="mb10" style={{ color :'#b60001'} } >{office.phoneNumber}</h6>
              {/* <a className="text-decoration-underline" href="#">
                Open Google Map
              </a> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Office;
