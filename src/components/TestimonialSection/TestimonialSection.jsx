import React from "react";
import "./TestimonialSection.css";

const testimonials = [
  {
    name: "William S.",
    role: "Sold with Simple Sale Offer",
    img: "https://start-prudential-org-366a3d4b97cd.herokuapp.com/images/william-s.webp",
    content:
      "My experience with Simple Sale Offer was quick, seamless, and offered the flexibility I needed. By providing an all-cash offer with a quick and flexible closing date, they made things very easy for me.",
  },
  {
    name: "Bao W.",
    role: "Simple Sale Offer Client",
    img: "https://start-prudential-org-366a3d4b97cd.herokuapp.com/images/bao-w.webp",
    content:
      "From the initial phone consultation, to the closing of escrow, the entire process was so quick and simple. Everyone was extremely helpful, responsive, and professional.",
  },
  {
    name: "Russell E.",
    role: "Sold with Simple Sale Offer",
    img: "https://start-prudential-org-366a3d4b97cd.herokuapp.com/images/russell-e.webp",
    content:
      "Simple Sale Offer helped match me with a cash buyer within days. The process was extremely easy and efficient. I would definitely recommend Simple Sale Offer to anyone trying to sell their home.",
  },
];

export default function TestimonialSection() {
  return (
    <div className="testimonial-section">
      <div className="testimonial-section__container">
        <h2 className="testimonial-section__title">
          Simple Sale Offer has helped thousands of homeowners sell without the
          stress of open houses or the high commissions of traditional listings.
        </h2>

        <div className="testimonial-section__carousel">
          {testimonials.map(({ name, role, img, content }) => (
            <div key={name} className="testimonial-card">
              <img
                src={img}
                alt={`Picture of ${name}`}
                className="testimonial-card__picture"
                loading="lazy"
              />
              <span className="testimonial-card__author">{name}</span>
              <span className="testimonial-card__role">{role}</span>
              <hr className="testimonial-card__divider" />
              <p className="testimonial-card__content">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
