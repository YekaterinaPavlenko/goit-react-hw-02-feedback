import React from "react";
// import fs from "./Feedback.module.css";
// import PropTypes from "prop-types";

const Feedback = ({ stats }) => {
  console.dir(stats);
  console.log(stats.caller());
  const statsKeys = Object.keys(stats);
  return (
    <section>
      <h2>Please leave feedback</h2>
      <ul>
        {statsKeys.map((stat) => {
          return (
            <li>
              <button type="button">{stat}</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Feedback;
