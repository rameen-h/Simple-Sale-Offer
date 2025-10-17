import React from "react";
import "./ComparisonSection.css"

const ComparisonTable = () => {
  return (
    <table className="comparison-table rounded">
      <thead>
        <tr>
          <th className="skip"></th>
          <th className="comparison-table__col2 round-top-left">Traditional Sale</th>
          <th className="comparison-table__col3 round-top-right">
            Simple Sale Offer<sup>®</sup>
          </th>
        </tr>
      </thead>
      <tbody className="rounded">
        {[
          {
            label: "Cash offer within a week",
            traditional: false,
            simple: true,
          },
          {
            label: "No repairs or updates",
            traditional: false,
            simple: true,
          },
          {
            label: "No listing or showings",
            traditional: false,
            simple: true,
          },
          {
            label: "No offer negotiation or buyer demands",
            traditional: false,
            simple: true,
          },
          {
            label: "No home sale contingency on next home purchase",
            traditional: false,
            simple: true,
          },
          {
            label: "No expensive double mortgage, bridge loan, or interim housing",
            traditional: false,
            simple: true,
          },
        ].map(({ label, traditional, simple }, idx) => (
          <tr key={idx}>
            <td className="comparison-table__col1">{label}</td>
            <td className="comparison-table__col2">
              {traditional ? (
                <CloseIcon />
              ) : (
                <CloseIcon /> /* according to your data, traditional is false for all */
              )}
            </td>
            <td className="comparison-table__col3">
              {simple ? <CheckIcon /> : <CloseIcon />}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const CheckIcon = () => (
  <div className="comparison-table__check-icon" aria-label="Check">
    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false">
      <circle cx="9" cy="9" r="9" fill="#1192E5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.95891 13.7654L14.6363 7.088C14.8631 6.86126 14.8631 6.4936 14.6363 6.26686L13.8152 5.44572C13.5884 5.21894 13.2208 5.21894 12.994 5.44572L7.54832 10.8914L5.00586 8.34891C4.77911 8.12217 4.41146 8.12217 4.18468 8.34891L3.36354 9.17005C3.1368 9.39679 3.1368 9.76445 3.36354 9.99119L7.13773 13.7654C7.36451 13.9922 7.73213 13.9922 7.95891 13.7654Z"
        fill="white"
      />
    </svg>
  </div>
);

const CloseIcon = () => (
  <div className="comparison-table__close-icon" aria-label="Close">
    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false">
      <circle cx="9" cy="9" r="9" fill="#C5C8CD" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1528 9.0376L12.6775 6.51295C12.8235 6.36694 12.8235 6.12999 12.6775 5.98374L12.0909 5.39711C11.9449 5.25109 11.7079 5.25109 11.5617 5.39711L9.03724 7.92199L6.51259 5.39734C6.36658 5.25133 6.12963 5.25133 5.98338 5.39734L5.39699 5.98374C5.25097 6.12975 5.25097 6.3667 5.39699 6.51295L7.92163 9.0376L5.39699 11.5622C5.25097 11.7083 5.25097 11.9452 5.39699 12.0915L5.98362 12.6781C6.12963 12.8241 6.36658 12.8241 6.51283 12.6781L9.03724 10.1532L11.5619 12.6779C11.7079 12.8239 11.9449 12.8239 12.0911 12.6779L12.6777 12.0912C12.8237 11.9452 12.8237 11.7083 12.6777 11.562L10.1528 9.0376Z"
        fill="white"
      />
    </svg>
  </div>
);

export default ComparisonTable;
