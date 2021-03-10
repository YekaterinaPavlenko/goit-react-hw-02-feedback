import React from "react";
import fs from "./FeedbackOptions.module.css";
// import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.dir(countFeedback);
  // console.log(onLeaveFeedback);

  const optionsKeys = Object.keys(options);
  return (
    <ul className={fs.list}>
      {optionsKeys.map((option) => {
        return (
          <li key={option} className={fs.item}>
            <button
              type="button"
              name={option}
              onClick={() => onLeaveFeedback({ option })}
              className={fs.button}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default FeedbackOptions;
