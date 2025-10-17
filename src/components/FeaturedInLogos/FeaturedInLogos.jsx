import React from 'react';
import './FeaturedInLogos.css';

const logos = [
  { src: 'https://start-prudential-org-366a3d4b97cd.herokuapp.com/views/offer/assets/logos/New-logos/ABI.webp', alt: 'ABI Logo' },
  { src: 'https://start-prudential-org-366a3d4b97cd.herokuapp.com/views/offer/assets/logos/New-logos/FairTrade.webp', alt: 'FairTrade Logo' },
  { src: 'https://start-prudential-org-366a3d4b97cd.herokuapp.com/views/offer/assets/logos/New-logos/HomeGo.webp', alt: 'HomeGo Logo' },
  { src: 'https://start-prudential-org-366a3d4b97cd.herokuapp.com/views/offer/assets/logos/New-logos/HomeVestors.webp', alt: 'HomeVestors Logo' },
  { src: 'https://start-prudential-org-366a3d4b97cd.herokuapp.com/views/offer/assets/logos/New-logos/ibuyhomes.webp', alt: 'Ibuyhomes' },
  { src: 'https://start-prudential-org-366a3d4b97cd.herokuapp.com/views/offer/assets/logos/New-logos/MJWInvestments.webp', alt: 'MJW Investors' },
  { src: 'https://start-prudential-org-366a3d4b97cd.herokuapp.com/views/offer/assets/logos/New-logos/Sundae.webp', alt: 'Sundae' },
  { src: 'https://start-prudential-org-366a3d4b97cd.herokuapp.com/views/offer/assets/logos/New-logos/TriconLogo.webp', alt: 'Tricon' },
];

const FeaturedInLogos = () => {
  const firstRow = logos.slice(0, 4);
  const secondRow = logos.slice(4, 8);

  return (
    <section className="featured-logos-section">
      <h2>Compare cash offers from the biggest investors and cash buyers in the USA</h2>

      <div className="row">
        {firstRow.map(({ src, alt }, idx) => (
          <div key={idx} className="investor-logos">
            <img loading="lazy" width="250" height="60" alt={alt} src={src} />
          </div>
        ))}
      </div>

      <div className="row" style={{ marginTop: '1rem' }}>
        {secondRow.map(({ src, alt }, idx) => (
          <div key={idx} className="investor-logos">
            <img loading="lazy" width="250" height="60" alt={alt} src={src} />
          </div>
        ))}
      </div>

      <div className="row">
        <div className="text-center" style={{ marginTop: '2rem', width: '100%' }}>
          <button className="btn-orange">View Offers</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInLogos;
