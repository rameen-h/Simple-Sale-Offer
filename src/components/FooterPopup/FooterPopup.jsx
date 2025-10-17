import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FooterPopup.css';

const FooterPopup = ({ buyersCount, loading, buttonText, onButtonClick }) => {
  const [region, setRegion] = useState('Punjab');
  const [locationLoading, setLocationLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      const timeoutId = setTimeout(() => {
        setLocationLoading(false);
      }, 10000);

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          clearTimeout(timeoutId);
          const { latitude, longitude } = position.coords;

          try {
            const response = await axios.get(
              `https://nominatim.openstreetmap.org/reverse`,
              {
                params: { lat: latitude, lon: longitude, format: 'json' },
              }
            );

            const address = response.data.address;
            const state = address.state || address.county || 'Punjab';
            setRegion(state);
          } catch (error) {
            console.error('Error fetching location data:', error);
          } finally {
            setLocationLoading(false);
          }
        },
        (error) => {
          clearTimeout(timeoutId);
          setLocationLoading(false);
        }
      );
    } else {
      setLocationLoading(false);
    }
  }, []);

return (
  <div className="footer-popup">
    <div className="footer-popup__content">
      <p>
        We're calculating the number of buyers in {region}{' '}
        <span className="spinner"></span>
        {!loading && !locationLoading && <> {buyersCount}</>}
      </p>
    </div>
  </div>
);
};

export default FooterPopup;
