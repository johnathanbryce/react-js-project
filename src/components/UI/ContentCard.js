import React from "react";
import classes from "./ContentCard.module.css";

const ContentCard = (props) => {
  return (
    <section className={classes.card}>
      <h2 className={classes.contentTitle}> {props.contentTitle} </h2>

      <div className={classes.content}>
        <p>{props.content}</p>

        <div className={classes.bottomContent}>
          <button className={classes.btn}>
            <a href={props.video} target="_blank" rel="noreferrer">
              {props.contentTitle + ` - video explanation `}
            </a>
          </button>

          <button className={classes.btn}>
            <a href={props.externalLink} target="_blank" rel="noreferrer">
              {props.contentTitle + ` - official documentation `}
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentCard;
