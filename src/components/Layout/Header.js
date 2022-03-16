import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1> React & JS Notes</h1>

      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/react">
              React
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to="/javascript">
              JavaScript
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

/*
   <li>
            <NavLink activeClassName={classes.active} to="/react">
              React
            </NavLink>
          </li>
      */
