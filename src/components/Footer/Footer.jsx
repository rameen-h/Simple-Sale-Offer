import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="page-footer-component hide-on-quiz-start">
      <div className="grid-container">
        <div className="row">
          <div className="col-xs-12">
            <ul className="accessibility-note">
              <li>
                Simple Sale Offer is only offered in select neighborhoods where
                we have buyers active. Not all homes will receive an offer and
                estimated offers presented will be validated and underwritten
                prior to completing a final transaction. Closing times may
                vary.
              </li>
              <li style={{ marginTop: "15px" }}>
                Simple Sale Offer is a property of Simple Sale Offer, Inc.
                Simple Sale Offer, Inc. is a licensed real estate broker in the
                State of California, DRE license # 01900940.
              </li>
            </ul>
            <ul className="last-details">
              <li>© Simple Sale Offer, Inc.</li>
              <li className="tos">
                <ul>
                  <li>
                    <a href="https://simplesaleoffer.net/terms-of-use" target="_blank" rel="noopener noreferrer">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="https://simplesaleoffer.net/privacy-policy" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
