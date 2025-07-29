"use client";

import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({data,colstyle}) => {
  return (
    <>
      {data.map((listing) => (
        <div className={` ${colstyle ? 'col-sm-12':'col-sm-6 col-lg-6'}  `} key={listing.id}>
          <div className={colstyle ? "listing-style1 listCustom listing-type" : "listing-style1"}    >
            <div className="list-thumb" >
              <Image
                width={382}
                height={248}
                style={{height:'230px'}}
                className="w-100  cover"
                src={listing.image}
                alt="listings"
              />
              <div className="sale-sticker-wrap">
                {!listing.forRent && (
                  <div className="list-tag fz12">
                    <span className="flaticon-electricity me-2" />
                    FEATURED
                  </div>
                )}
              </div>

              <div className="list-price">
                {listing.price} / <span>mo</span>
              </div>
            </div>
            <div className="list-content">
              <h6 className="list-title">
                <Link  href={`/single-v1/${listing.id}`}>{`${listing.bed}BHK east facing`}</Link>
              </h6>
              <div className="d-flex align-items-center mt-2">
                <p className="list-text"><i className="fas fa-map-marker-alt me-1" />{listing.location}</p>
              </div>
              <div className="list-meta d-flex align-items-center mt-2">
                <a href="#">
                  {(() => {
                    const bedNum = parseInt(listing.bed, 10);
                    if (bedNum <= 2) return <><span className="flaticon-home-1" /> Furnished</>;
                    if (bedNum <= 4) return <><span className="flaticon-home-2" /> Semi-Furnished</>;
                    return <><span className="flaticon-home-3" /> Fully Furnished</>;
                  })()}
                </a>
                <a href="#">
                  {(() => {
                    const bathNum = parseInt(listing.bath, 10);
                    if (!isNaN(bathNum) && bathNum > 0) {
                      return <><span className="flaticon-garage" /> {bathNum} {bathNum === 1 ? 'car' : 'cars'}</>;
                    }
                    return null;
                  })()}
                </a>
                <a href="#">
                  <span className="flaticon-expand" /> {listing.sqft} sqft
                </a>
              </div>
              <div className="list-meta2 d-flex justify-content-between align-items-center mt-3">
                <Link href={`/single-v1/${listing.id}`} passHref legacyBehavior>
                  <button className="ud-btn btn-thm">Property Details</button>
                </Link>
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
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
