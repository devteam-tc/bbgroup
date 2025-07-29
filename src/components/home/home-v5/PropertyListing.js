
'use client'
import listings from "@/data/listings";
import Link from 'next/link';
import FeatureProperties from "@/components/home/home-v6/FeatureProperties";
import React, { useEffect, useState } from 'react'
import PopularListings from './PopularListings';

export default function PropertyListing() {
    const [pageData, setPageData] = useState([])
    const [currentType, setCurrentType] = useState('rent')
    useEffect(() => {
        if (currentType == 'rent') {
            const filtered = listings.filter((elm)=>elm.forRent)
            setPageData(filtered)
            
        } else {
            const filtered = listings.filter((elm)=> !elm.forRent)
            setPageData(filtered)
            
        }
      
    }, [currentType])
  return (
   
    <section className="our-testimonial pt-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mx-auto" data-aos-delay="300ms">
          <div className="main-title text-center">
            <h2>Featured Premium Properties
            </h2>
            <p className="paragraph">
            Elegant spaces built for premium living across India.
            </p>
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className="col-lg-12">
        <div className="home6-listing-single-slider" data-aos="fade-up">
          <FeatureProperties />
        </div>
      </div>
      {/* End .col-12 */}
    </div>
    {/* End .container */}
  </section>
  )
}
