import classes from "./CloseButton.module.css";

const CloseButton = (props) => {
  return (
    <button
      className={classes.close_button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default CloseButton;
