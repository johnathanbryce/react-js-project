import React from "react";
import CloseButton from "./CloseButton";
import classes from "./ModalOverlay.module.css";

const ModalOverlay = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClick}></div>
      <div className={classes.modal}>
        <header className={classes.header}>
          <div className={classes.fixed}>
            <h2> {props.title} </h2>
            <CloseButton className={classes.close} onClick={props.onClick}>
              X
            </CloseButton>
          </div>
        </header>
        <div className={classes.content}>
          <p> {props.content} </p>
        </div>
      </div>
    </div>
  );
};

export default ModalOverlay;
