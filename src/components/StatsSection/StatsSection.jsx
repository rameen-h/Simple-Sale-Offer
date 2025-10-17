import React from "react";
import "./StatsSection.css";

const StatsSection = () => {
  return (
    <div className="simple-sale-blue-ribbon hide-on-quiz-start">
      <div className="simple-sale-blue-ribbon__content">
        <div className="simple-sale-blue-ribbon__header-text">
          See your estimated offer now
        </div>

        <div className="simple-sale-blue-ribbon__cta-wrap">
          <div className="ss-cta-area">
            <div className="ss-address-wrap">
              <div className="ss-address-inner">
                <input
                  autoComplete="off"
                  placeholder="Enter property address"
                  id="simple-cta"
                  className="ss-address-input"
                  defaultValue=""
                />
                <ul id="txt-list-2"></ul>
              </div>
            </div>

            <a href="#" className="ss-button ss-explore-btn">
              View your offers
            </a>
          </div>
        </div>

        <div className="row see-your-estimate-stats">
          <div className="col-xs-12 col-md-4">
            <div className="stats">100K+</div>Offers Made
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="stats">20K+</div>Homes Sold
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="stats">$1B+</div>Home Value
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
