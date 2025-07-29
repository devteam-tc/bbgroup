import Explore from "@/components/common/Explore";
import Footer from "@/components/home/home-v5/footer";
import MobileMenu from "@/components/common/mobile-menu";
import FindHomeBlock from "@/components/home/home-v6/FindHomeBlock";
import FeaturedListings from "@/components/home/home-v5/FeatuerdListings";
import Header from "@/components/home/home-v5/Header";
import Partner from "@/components/common/Partner";
import PropertiesByCities from "@/components/home/home-v5/PropertiesByCities";
import Testimonial from "@/components/home/home-v5/Testimonial";
import FilterWithProperties from "@/components/home/home-v5/filter-with-property";
import Blog from "@/components/common/Blog";
import Hero from "@/components/home/home-v5/Hero";
import ApartmentType from "@/components/home/home-v1/ApartmentType";
import ApartmentTypes from "@/components/home/home-v5/ApartmentTypes";
import Cta from "@/components/home/home-v5/Cta";
import Link from "next/link";
import PropertyListing from "@/components/home/home-v5/PropertyListing";
import FilterProperties from "@/components/home/home-v4/FilterProperties";
import CallToActions from "@/components/home/home-v4/CallToActions";
import Image from "next/image";
import InqueryForm from "@/components/home/home-v7/InqueryForm";

export const metadata = {
  title: "Home v5 || Homez - Real Estate NextJS Template",
};

const Home_V5 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Hero Slide */}
      <div className="banner-wrapper position-relative">
        <section className="thumbimg-countnumber-carousel p-0">
          <Hero />
        </section>
      </div>
      {/* Edn Hero Slide */}

      {/* Filter with properties */}
      <section className="pt-0 " >
        <div className="container" >
          <div className="row" >
            <div className="col-lg-12" >
              <FilterWithProperties />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Filter with properties */}

      {/* Discover Our Featured Listings */}
   

  {/* Explore Apartment */}
  <section id="explore-property" className="pb90 pb30-md">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2 className="title">Find Your Ideal Property Type</h2>
                <p className="paragraph">
                Find a property that fits your lifestyle and goals.
                </p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div
                className="explore-apartment-slider"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <ApartmentType />
              </div>
            </div>
          </div>
        </div>
      </section>


  
      {/* End Explore Apartment */}
      {/* End Discover Our Featured Listings */}

      {/* Explore Apartment Types cities */}
      {/* <section className="pb90 pb30-md">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="0">
            <div className="col-lg-6 mx-auto">
              <div className="main-title2 text-center">
                <h2 className="title">Explore Apartment Types</h2>
                <p className="paragraph">
                  Get some Inspirations from 1800+ skills
                </p>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <ApartmentTypes />
          </div>
        </div>
      </section> */}
      <section className="pb40-md pb90">
        <div className="container">
         <FilterProperties />
          {/* End .row */}

          {/* <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider position-relative">
                <PropertiesByCities />
              </div>
            </div>
          </div> */}
          {/* End .row */}
        </div>
      </section>
      
  <section className="pb90 pb30-md">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6" data-aos="fade-up" data-aos-delay="100">
              <div className="about-box2">
                <h4 className="title">
                The Smart Way to Find <br className="d-none d-xl-block" /> Your Property
                </h4>
                <p className="text fz15"  style={{ color: 'white' }}>
                Smart property search with expert 
                {" "}
                  <br className="d-none d-xl-block" /> help at every step.
                </p>
                <Link href="/grid-full-1-col-v1" className="ud-btn btn-thm" style={{ color: '#000' , backgroundColor:'#fff !important;' }}>
                  How İt Works
                  <i className="fal fa-arrow-right-long" />
                </Link>
                <Image
                  width={296}
                  height={318}
                  className="img-1 cover"
                  src="/images/about/home6-about-1.png"
                  alt="about"
                />
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
              <div className="row">
                <FindHomeBlock />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Explore Apartment Types cities */}

      {/* Explore Apartment */}
     

      {/* End Explore Apartment */}

      {/* Explore property-city */}
  
      {/* End Explore property-city */}

      {/* CTA */}
      {/* <Cta /> */}
      {/* CTA */}

      {/* Our Testimonials */}
      {/* <section className="pb50-md">
        <div className="container maxw1600">
          <div className="row  justify-content-center text-center align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2 className="title">People Love Living with Realton</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div
                className="testimonial-slider"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End Our Testimonials */}

      {/* Popular Property */}
      <PropertyListing />
      {/* End  Popular Property */}

      {/* Explore Blog */}
      {/* <section className="pb90 pb30-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto" data-aos="fade-up">
              <div className="main-title text-start text-md-center">
                <h2 className="title">From Our Blog</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <Blog />
          </div>
        </div>
      </section> */}

        <section >
        <div className="container mb-5">
          <div className="row">
          
            {/* End col-6 */}

            <div
              className="col-lg-6 col-xl-6 offset-xl-1"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="inquiry-form">
                <div className="inquiry-img">
                  <Image
                    width={591}
                    height={778}
                    className="w-100 h-100 cover"
                    src="/images/about/about-4.png"
                    alt="about"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-5"
              data-aos="fade-left"
              data-aos-delay="0"
            >
              <div className="main-title mb40">
              <h2 className="title">Submit Your Property Inquiry
                </h2>
                <p className="paragraph fz15">
                Get instant support and property details tailored to your needs.
                </p>
              </div>
              <div className="inquiry-form mb30-md">
                <InqueryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Explore Blog */}

      {/* Our Partners */}
     <CallToActions />
      {/* End Our Partners */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4 pt60 pb-0 mt-5">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V5;
