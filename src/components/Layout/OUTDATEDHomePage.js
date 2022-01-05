import React from "react";
import { Link } from "react-router-dom";

import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes.homepage}>
      <Link to="/">
        <h2> Home</h2>
      </Link>

      <Link to="/react">
        <h2> React </h2>
      </Link>

      <Link to="/javascript">
        <h2> Javascript</h2>
      </Link>
    </div>
  );
};

export default HomePage;
