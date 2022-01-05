import React from "react";
import classes from "./ContentCard.module.css";

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

        <p> {props.content}</p>
      </div>
    </section>
  );
};

export default ContentCard;
