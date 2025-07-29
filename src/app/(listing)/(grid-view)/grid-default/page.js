import Header from "@/components/home/home-v5/Header";
import Footer from "@/components/home/home-v5/footer";
import MobileMenu from "@/components/common/mobile-menu";

import React from "react";
import PropertyFiltering from "@/components/listing/grid-view/grid-default/PropertyFiltering";

export const metadata = {
  title: "Gird Default || Homez - Real Estate NextJS Template",
};

const GridDefault = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section bgc-f7 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Search For Your Builder</h2>
                <div className="breadcumb-list">
                  <a href="/">Home</a>
                  <a href="#">Builders</a>
                </div>
                <a
                  className="filter-btn-left mobile-filter-btn d-block d-lg-none"
                  data-bs-toggle="offcanvas"
                  href="#listingSidebarFilter"
                  role="button"
                  aria-controls="listingSidebarFilter"
                >
                  <span className="flaticon-settings" /> Filter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}

      {/* Property Filtering */}
      <PropertyFiltering/>
      {/* Property Filtering */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4 pt60 pb-0 mt-5">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default GridDefault;