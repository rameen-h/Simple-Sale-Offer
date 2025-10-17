// StepsCards.jsx
import React from 'react';
import './StepCard.css';

const StepsCards = () => {
  const steps = [
    {
      number: 1,
      img: 'https://start-prudential-org-366a3d4b97cd.herokuapp.com/views/offer/assets/certified-agent-262951855db7f973002cfd9f6d2bdf79.webp',
      alt: 'Step 1 image',
      title: 'Tell us about your home and speak to our offer specialist',
      text: 'This helps us get the best possible offer for your home from our networks of investors and cash buyers.',
    },
    {
      number: 2,
      img: 'https://start-prudential-org-366a3d4b97cd.herokuapp.com/views/offer/assets/home-search-e62b5a3ac516a60f572f481221054c49.webp',
      alt: 'Step 2 image',
      title: 'We use your local neighborhood data',
      text: 'We use your local neighborhood data and our extensive investor network to find the best offer for your home.',
    },
    {
      number: 3,
      img: 'https://start-prudential-org-366a3d4b97cd.herokuapp.com/views/offer/assets/cash-offer-ad9f678d36d1bfaeb092512e5bb54a8e.webp',
      alt: 'Step 3 image',
      title: 'Accept your cash offer and chose your move date',
      text: 'Get paid in as few as 10 days, with no additional fees, agent commission or prep-work required.',
    },
  ];

  return (
    <div className="steps-wrapper">
      <div className="steps-container">
        {steps.map((step, idx) => (
          <div key={idx} className="step-card">
            <div className="icon">
              <img src={step.img} alt={step.alt} />
              <div className="step-circle">{step.number}</div>
            </div>
            <div className="card-body">
              <h3 className="card-title">{step.title}</h3>
              <p className="card-text">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsCards;
