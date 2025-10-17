import React, { useState } from "react";
import "./FAQSection.css";

const faqs = [
  {
    question: "Who is buying my home?",
    answer:
      "Simple Sale Offer has built a nationwide network of hundreds of pre-approved real estate cash buyers or investors. We let them compete to buy your home, so you can get the best offer.",
  },
  {
    question: "Do I need an agent to participate?",
    answer:
      "No, you do not need an agent to request offers with Simple Sale Offer. However, we are more than happy to introduce you to the best agent in your neighborhood so that you can also hear their professional opinion of what your home is worth.",
  },
  {
    question: "Can I sell a home that's currently listed?",
    answer:
      "If you’re looking to sell your home fast and skip the showing process, we are happy to work with you and your agent to find the best solution that meets your needs.",
  },
  {
    question: "Do I have to move right away?",
    answer:
      "No. You’ll have the flexibility to pick a move date that works for your schedule up to 30 days from closing.",
  },
  {
    question: "Is there a cost to request offers?",
    answer:
      "No. Requesting an offer from Simple Sale Offer is completely free.",
  },
  {
    question: "Am I obligated to accept an offer?",
    answer:
      "No, you are not obligated to accept any Simple Sale Offer offer you receive.",
  },
];

export default function FAQAccordion() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleIndex = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="section-area__container generic-faqs">
      <h2
        className="
          section__description
          section__description--text-nowrap
          section__description--text-center
          section__description--default
        "
      >
        Frequently Asked Questions
      </h2>

      <div className="accordion">
        {faqs.map(({ question, answer }, index) => (
          <div
            key={index}
            className={`accordion-node ${expandedIndex === index ? "expanded" : ""}`}
          >
            <div
              className="accordion-node__title"
              onClick={() => toggleIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleIndex(index);
              }}
            >
              <h3 className="accordion-node__title--text">
                {question}
                <div className="accordion-node__subtitle"></div>
              </h3>

              <div
                className={`accordion-node__title--expand-btn ${
                  expandedIndex === index ? "rotated" : ""
                }`}
                aria-expanded={expandedIndex === index}
              >
                <svg
                  className="chevron-icon-component right"
                  viewBox="0 0 13 8"
                  aria-hidden="true"
                >
                  <path d="M5.66014276,7.16797312 L0.355467902,1.86329827 C0.227863901,1.73569426 0.164062109,1.58074699 0.164062109,1.39845562 C0.164062109,1.21616425 0.227863901,1.06121698 0.355467902,0.933612982 L0.957028968,0.332051916 C1.08463297,0.204447915 1.23958024,0.136088703 1.42187161,0.12697428 C1.60416298,0.117859857 1.75911025,0.17710423 1.88671425,0.304708231 L6.1249854,4.54297938 L10.3632565,0.304708231 C10.4908605,0.17710423 10.6458078,0.117859857 10.8280992,0.12697428 C11.0103906,0.136088703 11.1653378,0.204447915 11.2929418,0.332051916 L11.8945029,0.933612982 C12.0221069,1.06121698 12.0859087,1.21616425 12.0859087,1.39845562 C12.0859087,1.58074699 12.0221069,1.73569426 11.8945029,1.86329827 L6.58982804,7.16797312 C6.46222404,7.31380596 6.30727677,7.3867226 6.1249854,7.3867226 C5.94269403,7.3867226 5.78774676,7.31380596 5.66014276,7.16797312 Z"></path>
                </svg>
              </div>
            </div>

            <div
              className={`accordion-node__body ${
                expandedIndex === index ? "in-view" : "transition-off"
              }`}
            >
              <div className="accordion-node__body-wrapper">
                <p>{answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
