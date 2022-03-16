import React from "react";
import classes from "./Disclaimer.module.css";

const Disclaimer = () => {
  return (
    <div className={classes.disclaimer}>
      <h2> Disclaimer: </h2>
      <p>
        I built this site as a way to take React & JavaScript key notes and
        concepts and learn about the framework inside the React environment.{" "}
      </p>

      <p> Notes were taken from the following sources: </p>
      <ul className={classes.container}>
        <div className={classes.left}>
          <li>
            <a
              href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Udemy:</strong> React - The Complete Guide
            </a>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/the-complete-javascript-course/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Udemy:</strong> The Complete JavaScript Course 2022
            </a>
          </li>
          <li>
            <a
              href="https://www.w3schools.com/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>W3Schools:</strong> React & JavaScript sections
            </a>
          </li>
        </div>
        <div className={classes.right}>
          <li>
            <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
              <strong> ReactJS.org: </strong>official React Router documentation
            </a>
          </li>
          <li>
            <a
              href="https://reactjs.org/docs/getting-started.html"
              target="_blank"
              rel="noreferrer"
            >
              <strong> ReactRouter.com: </strong>official React documentation
            </a>
          </li>
          <li>
            <a
              href="https://courses.webdevsimplified.com/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Web Dev Simplified:</strong> courses & online Youtube
              videos
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Disclaimer;
