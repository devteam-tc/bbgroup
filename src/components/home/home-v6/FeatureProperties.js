"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const properties = [
  {
    id: 1,
    featured: true,
    status: "FOR SALE",
    title: "₹1,25,000/flat*",
    location: "Hyderabad, Telangana, India",
    bed: " Fully Furnished",
    car: "4 cars",
    sqft: " 2,300 sqft",
    price: "₹2.5cr onwards / villa",
    imageSrc: "/images/listings/property_slide_3.png",
  },
  {
    id: 2,
    featured: true,
    status: "FOR SALE",
    title: "₹1,40,000/flat*",
    location: "Gurugram, Haryana, India",
    bed: " Fully Furnished",
    car: "3 cars",
    sqft: "2,200 sqft",
    price: "₹1.2cr onwards / flat",
    imageSrc: "/images/listings/property_slide_2.png",
  },
  {
    id: 3,
    featured: true,
    status: "FOR SALE",
    title: "₹1,10,000/flat*",
    location: "Pune, Maharashtra, India",
    bed: "Fully Furnished",
    car: "3 cars",
    sqft: " 2,150 sqft",
    price: "₹2cr onwards / villa",
    imageSrc: "/images/listings/property_slide_1.png",
  },
  {
    id: 4,
    featured: true,
    status: "FOR SALE",
    title: "₹98,000/flat*",
    location: "Bengaluru, Karnataka, India",
    bed: "Semi-Furnished",
    car: "2 cars",
    sqft: "2,050 sqft",
    price: "₹1.05cr / flat",
    imageSrc: "/images/listings/property_slide_4.png",
  },
];

const FeatureProperties = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".featurePro_next__active",
          prevEl: ".featurePro_prev__active",
        }}
        pagination={{
          el: ".featurePro_pagination__active",
          clickable: true,
        }}
        slidesPerView={1}
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <div className="item">
              <div className="listing-style11">
                <div className="col-lg-12">
                  <div className="row align-items-center">
                    <div className="list-content mb30-md col-md-8 col-lg-6 col-xl-5 p-xl-0">
                      <div className="d-flex mb-2">
                        <div className="list-tag fz12 mr20">
                          {property.featured && (
                            <span className="flaticon-electricity me-2" />
                          )}
                          {property.featured && "FEATURED"}
                        </div>
                        {/* <div className="list-tag2 fz12">{property.status}</div> */}
                      </div>
                      <h4 className="list-title">
                        <Link href="/map-v3"   style={{ color: '#fff' }}>{property.title}</Link>
                      </h4>
                      <p    style={{ color: '#fff' }} className="list-text fz15">{property.location}</p>
                      <div className="list-meta d-block d-sm-flex align-items-center mt30 mb40">
                        <a
                          className="d-flex mb-2 mb-sm-0 align-items-center"
                          style={{ color: '#fff' }}
                          href="#"
                        >
                          <span className="flaticon-bed" />
                          {property.bed}
                        </a>
                        <a
                          className="d-flex mb-2 mb-sm-0 align-items-center"
                          href="#"   style={{ color: '#fff' }}
                        >
                          <span className="flaticon-garage" />
                          {property.car}
                        </a>
                        <a className="d-flex align-items-center"   style={{ color: '#fff' }} href="#">
                          <span className="flaticon-expand" />
                          {property.sqft}
                        </a>
                      </div>
                      {/* End list-meta */}

                      <div className="row mb20">
                        <div className="col-auto">
                          <div className="contact-info">
                            <p className="info-title ff-heading mb-0"   style={{ color: '#fff' , fontSize :'20px', fontWeight :'600' }}>
                              Contact Us
                            </p>
                            <h6 className="info-phone"   style={{ color: '#fff' }}>
                              <a href="tel:+91 8919439603"   style={{ color: '#fff' , fontWeight :'100' ,fontSize :'12px', }}>
                              +91 8919439603, +91 7032803200
                              </a>
                            </h6>
                          </div>
                        </div>
                        {/* End .col-auto */}

                        <div className="col-auto">
                          <div className="contact-info">
                            <p className="info-title ff-heading mb-0"   style={{ color: '#fff' , fontSize :'20px', fontWeight :'600'  }}>
                              Need Live Support?
                            </p>
                            <h6 className="info-mail">
                              <a   style={{ color: '#fff' , fontWeight :'100' ,fontSize :'12px',  }} href="mailto:info@builderbruce.in">info@builderbruce.in</a>
                            </h6>
                          </div>
                        </div>
                        {/* End .col-auto */}
                      </div>
                      {/* End .row */}

                      <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                          <div className="list-meta2">
                            <h4 className="list-price mb-0"   style={{ color: '#fff' }}>
                              {property.price}
                            </h4>
                          </div>
                        </div>
                        {/* End .row */}

                        <div className="col-auto">
                          <div className="list-meta2">
                            <div className="icons d-flex align-items-center">
                              <a href="#">
                                <span className="flaticon-fullscreen" />
                              </a>
                              <a href="#">
                                <span className="flaticon-new-tab" />
                              </a>
                              <a href="#">
                                <span className="flaticon-like" />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End .col-auto */}
                      </div>
                      {/* End .row */}

                      <div className="list-meta2 d-flex justify-content-between align-items-center"></div>
                    </div>
                    {/* End list-content */}

                    <div className="list-thumb col-lg-6 col-xl-6 offset-xl-1 p-xl-0">
                      <Image
                        width={560}
                        height={610}
                        className="img-1 cover w-100 h-00"
                        src={property.imageSrc}
                        alt="property image"
                      />
                    </div>
                    {/* End list-thumb */}
                  </div>
                  {/* End .row */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="row align-items-center justify-content-start">
        <div className="col-auto">
          <button className="featurePro_prev__active swiper_button">
            <i className="far fa-arrow-left-long" />
          </button>
        </div>
        {/* End prev */}

        <div className="col-auto">
          <div className="pagination swiper--pagination featurePro_pagination__active" />
        </div>
        {/* End pagination */}

        <div className="col-auto">
          <button className="featurePro_next__active swiper_button">
            <i className="far fa-arrow-right-long" />
          </button>
        </div>
        {/* End Next */}
      </div>

      {/* End .col for navigation and pagination */}
    </>
  );
};

export default FeatureProperties;
