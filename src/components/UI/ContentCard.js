import React from "react";
import classes from "./ContentCard.module.css";
import Button from "./Button.js";

/*
        <iframe
          className={classes.preview_link}
          src={props.preview}
          width="200"
          height="150"
          title="preview of content "
        ></iframe>
      */

const ContentCard = (props) => {
  return (
    <section className={classes.card}>
      <h2> {props.contentTitle} </h2>

      <div className={classes.content}>
        <iframe
          width="200"
          height="150"
          src={props.video}
          frameborder="0"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title={props.title}
        ></iframe>
        <p>{props.content}</p>
      </div>

      <div className={classes.notes}>
        <form onSubmit>
          <input type="text" onChange value />
          <button type="submit"> Add </button>
        </form>

        <p> to-do: add content IN THIS AREA from form to the left </p>
      </div>
    </section>
  );
};

export default ContentCard;
