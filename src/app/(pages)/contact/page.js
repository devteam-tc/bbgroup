import CallToActions from "@/components/home/home-v4/CallToActions";
import Header from "@/components/home/home-v5/Header";
import Footer from "@/components/home/home-v5/footer";
import MobileMenu from "@/components/common/mobile-menu";
import Form from "@/components/pages/contact/Form";
import Office from "@/components/pages/contact/Office";
import Features from "@/components/pages/about/Features";
import Link from "next/link";


export const metadata = {
  title: "Contact  || Homez - Real Estate NextJS Template",
};

const Contact = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}
      {/* <section className="breadcumb-section2 p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Contact Us</h2>
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="/contact">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

       
      {/* <section className="pt30 pb-0">
        <div className="cta-banner3 bgc-thm-light mx-auto maxw1600 pt100 pt60-lg pb90 pb60-lg bdrs24 position-relative overflow-hidden mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 col-lg-5 pl30-md pl15-xs"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="mb30">
                  <h2 className="title text-capitalize text-white">
                    Let’s find the right <br className="d-none d-md-block" />{" "}
                    selling option for you
                  </h2>
                </div>
                <div className="why-chose-list style2">
                  <Features />
                </div>
                <Link href="#" className="ud-btn btn" style={ { background : '#b60001' , color :'#fff'}}>
                  Learn More
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}


       {/* Visit our Office */}


   
      {/* End Visit our Office */}
    
      {/* Our Contact With Map and Form */}
      <section
        className="p-0 mt-5 contact-bg-section"
        style={{
          backgroundImage: 'url(/images/background/contact-bg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
        aria-label="Contact background image"
      >
        <div className="container">
          <div className="row d-flex align-items-end">
            <div className="col-lg-5 position-relative">
              <div className="home8-contact-form default-box-shadow1 bdrs12 bdr1 p15 mb30-md bgc-white">
                <h4 className="form-title mb25">
                We’d Love to Hear From You
                </h4>
                <Form />
              </div>
            </div>
            {/* End .col */}

            {/* <div className="col-lg-5 offset-lg-2">
              <h2 className="mb30 text-capitalize">
                We’d love to hear <br className="d-none d-lg-block" />
                from you.
              </h2>
              <p className="text">
                We are here to answer any question you may have. As a partner of
                corporates, realton has more than 9,000 offices of all sizes and
                all potential of session.
              </p>
            </div> */}
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End Our Contact With Map and Form */}

    
      <section >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="main-title text-center">
                <h2 className="title">Visit Our Offices Across India</h2>
                <p className="paragraph">
                We operate pan-India through our verified network, offering personalized assistance wherever you are.
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <Office />
          </div>
          {/* End .row */}
        </div>
      </section>
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

export default Contact;
