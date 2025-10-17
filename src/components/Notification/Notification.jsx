import React, { useEffect, useState } from 'react';
import './Notification.css';

const messages = [
  "Amos Barker from Phoenix, Close in as few as 7 days. Pick your own move date!",
  "Sarah Lee from Dallas, Got multiple offers in 5 days!",
  "Mark Johnson from Miami, Sold fast with no repairs needed!",
  "Lisa White from Seattle, Accepted an offer within a week!",
];

const NotificationSidebar = ({ interval = 7000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Show a new message every interval and animate in/out
    const cycle = setInterval(() => {
      setVisible(false); // trigger slide out

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setVisible(true); // trigger slide in
      }, 500); // duration of slide out animation
    }, interval);

    return () => clearInterval(cycle);
  }, [interval]);

  return (
  <div className={`notification-sidebar ${visible ? 'slide-in' : 'slide-out'}`}>
    <img
  src="https://start-prudential-org-366a3d4b97cd.herokuapp.com/views/offer/assets/cash-offer-ad9f678d36d1bfaeb092512e5bb54a8e.webp"
  alt="Notification Icon"
  className="icon"
  style={{ width: '40px', height: '40px' }}
/>
    <p>{messages[currentIndex]}</p>
  </div>
);

};

export default NotificationSidebar;
