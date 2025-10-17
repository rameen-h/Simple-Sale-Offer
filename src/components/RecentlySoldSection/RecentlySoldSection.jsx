import React from 'react';
import './RecentlySoldSection.css';

const properties = [
  {
    id: 1,
    image: 'https://start-prudential-org-366a3d4b97cd.herokuapp.com/views/offer/webp/property_image_Sandicor_305846232_0.webp',
    label: 'Sold in under 30 days',
    price: '$777,000',
    address: '1131 W Orangethorpe Avenue Fullerton, CA',
    beds: 3,
    baths: 2,
    area: 1280,
  },
  {
    id: 2,
    image: 'https://start-prudential-org-366a3d4b97cd.herokuapp.com/views/offer/webp/property_image_Sandicor_305848427_0.webp',
    label: 'Sold in under 27 days',
    price: '$769,000',
    address: '29889 Smugglers Point Drive Canyon Lake, CA',
    beds: 4,
    baths: 3,
    area: 3700,
  },
  {
    id: 3,
    image: 'https://start-prudential-org-366a3d4b97cd.herokuapp.com/views/offer/webp/property_image_Sandicor_230000808_0.webp',
    label: 'Sold in under 10 days',
    price: '$1,039,999',
    address: '10928 Caminito Cerezo San Diego, CA',
    beds: 4,
    baths: 2,
    area: 1784,
  },
];

// SVG icons (you can replace with your own or font-awesome)
const BedIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 10v8h-2v-5H5v5H3v-8a2 2 0 012-2h14a2 2 0 012 2z" />
    <path d="M7 10V6a5 5 0 0110 0v4" />
  </svg>
);

const BathIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 14v3a2 2 0 01-2 2H7a2 2 0 01-2-2v-3H3v-3h18v3h-2z" />
    <path d="M7 14v-4a5 5 0 0110 0v4" />
  </svg>
);

const AreaIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="7" width="18" height="10" rx="2" ry="2" />
    <path d="M3 17v2h18v-2" />
  </svg>
);

function RecentlySoldSection() {
  return (
    <div className="recently-sold-section">
      <h2 className="section-heading">Recently Sold with Simple Sale Offer</h2>
      <div className="property-cards">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <div
              className="property-card-image"
              style={{ backgroundImage: `url(${property.image})` }}
            >
              <div className="property-card-label">{property.label}</div>
            </div>

            <div className="property-card-details">
              <div className="property-card-price">{property.price}</div>
              <div className="property-card-address">{property.address}</div>
              <div className="property-card-specs">
                <div className="spec-item">
                  <BedIcon />
                  <span>{property.beds} Beds</span>
                </div>
                <div className="spec-item">
                  <BathIcon />
                  <span>{property.baths} Baths</span>
                </div>
                <div className="spec-item">
                  <AreaIcon />
                  <span>{property.area} sqft</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentlySoldSection;
