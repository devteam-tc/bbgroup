import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Partner from "@/components/common/Partner";
import Footer from "@/components/home/home-v5/footer";
import MobileMenu from "@/components/common/mobile-menu";
import WhyChoose from "@/components/home/home-v3/why-choose";
import Header from "@/components/home/home-v5/Header";
import Agents from "@/components/pages/about/Agents";
import Features from "@/components/pages/about/Features";
import FunFact from "@/components/pages/about/FunFact";
import Mission from "@/components/pages/about/Mission";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About  || Homez - Real Estate NextJS Template",
};

const About = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Sections */}
      <section className="breadcumb-section2 p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">About Us</h2>
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      <section>
        <div className="container">
          <div
            className="row align-items-md-center"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <WhyChoose />
          </div>
        </div>
      </section>
      
      {/* Our About Area */}
      <section className="our-about pb90">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            
            <div className="col-lg-6 px-5">
              <p className="text mb25">
                It doesn’t matter how organized you are — a surplus of toys will
                always ensure your house is a mess waiting to happen.
                Fortunately, getting kids on board with the idea of ditching
                their stuff is a lot easier than it sounds.
              </p>
              <p className="text mb55">
                Maecenas quis viverra metus, et efficitur ligula. Nam congue
                augue et ex congue, sed luctus lectus congue. Integer convallis
                condimentum sem. Duis elementum tortor eget condimentum tempor.
                Praesent sollicitudin lectus ut pharetra pulvinar.
              </p>
              <div className="row">
                <Mission />
              </div>
            </div>
            <div className="col-lg-6" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              padding: "40px",
              borderRadius: "10px",
              position: "relative"
            }}>
              <h2 style={{ color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
                We&apos;re on a Mission to Change{" "}
                <br className="d-none d-lg-block" /> View of Real Estate Field.
              </h2>
            </div>
          </div>
        </div>
      </section>
      
      {/* End Our About Area */}

      

      {/* Exclusive Agents */}
      <section className="pt0 pb80 pb50-md">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">Our Exclusive Agetns</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="agent_prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination agent_pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="agent_next__active swiper_button">
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
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider">
                <Agents />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Exclusive Agents */}

      {/* Abut intro */}
      <section className="pt30 pb-0">
        <div className="cta-banner3 bgc-thm-light mx-auto maxw1600 pt100 pt60-lg pb90 pb60-lg bdrs24 position-relative overflow-hidden mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 col-lg-5 pl30-md pl15-xs"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="mb30">
                  <h2 className="title text-capitalize">
                    Let’s find the right <br className="d-none d-md-block" />{" "}
                    selling option for you
                  </h2>
                </div>
                <div className="why-chose-list style2">
                  <Features />
                </div>
                <Link href="#" className="ud-btn btn-dark">
                  Learn More
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Abut intro */}

      {/* Our Partners */}
      <section className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div className="main-title text-center">
                <h6>Trusted by the world’s best</h6>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div
                className="dots_none nav_none"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Partner />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Partners */}

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4 pt60 pb-0 mt-5">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default About;