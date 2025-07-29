"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const sliderItems = [
    {
      image: "/images/home/home-5-1.png",
      price: "₹1.39 Cr* Onwards",
      title: "Rajapushpa Provincia",
      description: "2 & 3 BHK- 23.75 Acres - Possession by 2027",
    },
    {
      image: "/images/home/home-5-2.png",
      price: "₹1.49 Cr Onwards",
      title: "  Aparna Sunstone",
      description: "2 & 3 BHK - 24.90 Acres - Possession by Dec 2028",
    },
    {
      image: "/images/home/home-5-3.png",
      price: "₹1.89 Cr Onwards",
      title: "Prestige Suncrest",
      description: "3 & 3+ BHK - 22 Acres - Possession by Dec 2027",
    },
    {
      image: "/images/home/home-5-4.png",
      price: "₹1.25 Cr Onwards",
      title: " My Home Sayuk",
      description: " 2,2.5 & 3 BHK  - 22 Acres - Possession by Dec 2027",
    },
  ];

  return (
    <>
      <div className="hero-large-home5">
        <Swiper
          direction="vertical" // Set the direction to vertical
          spaceBetween={0}
          slidesPerView={1}
          speed={1400} // Set the slide transition speed in milliseconds
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Thumbs, Autoplay]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          style={{ height: "850px" }}
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item">
                <div
                  className="slider-slide-item"
                  style={{ backgroundImage: `url(${item.image})` }}
                  data-thumb={item.image}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-left position-relative">
                        <div
                          className="slider-info-card"
                          style={{
                            background: "#ffffffa8",
                            borderRadius: "10px",
                            border: "4px solid #fff",
                            padding: "24px 32px",
                            display: "inline-block",
                            boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                            marginBottom: "24px",
                            backdropFilter: "blur(10px)",            // 👈 adds the blur effect
                            WebkitBackdropFilter: "blur(10px)"       // 👈 for Safari support
                          }}
                          
                        >
                          <h4 className="h1 slider-subtitle text-black1">
                            {(() => {
                              const [main, onwards] = item.price.split(/(Onwards)/);
                              return (
                                <>
                                  {main}
                                  {onwards && (
                                    <span style={{ fontWeight: 100, fontSize: '20px' }}>Onwards</span>
                                  )}
                                </>
                              );
                            })()}
                          </h4>
                          <h3 className="h6 slider-title text-black1">
                            {item.title}
                          </h3>
                          <p className="mb30 slider-text text-black1">
                            {item.description}
                          </p>
                          <div className="slider-btn-block">
                          <Link
                            href="/map-v4"
                            className="ud-btn btn-white slider-btn"
                          >
                            View Details
                            <i className="fal fa-arrow-right-long" />
                          </Link>
                        </div>
                        </div>
                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom_thumbs">
        <Swiper
          direction="vertical" // Set the direction to vertical
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          slidesPerView={sliderItems.length} // Display all thumbs at once
          spaceBetween={0} // Adjust the space between thumbs
          style={{ height: "268px" }} // Set a fixed height for the thumbs gallery
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                width={50}
                height={50}
                className="cover"
                src={item.image}
                alt="thumb"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
