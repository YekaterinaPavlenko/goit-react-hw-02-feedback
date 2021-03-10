import React from "react";
import s from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  //   console.log(positivePercentage);
  return (
    <ul className={s.list}>
      <li key="good">
        <p>Good: {good}</p>
      </li>
      <li key="neutral">
        <p>Neutral: {neutral}</p>
      </li>
      <li key="bad">
        <p>Bad: {bad}</p>
      </li>
      <li key="total">
        <p>Total: {total}</p>
      </li>
      <li key="positive">
        <p>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
