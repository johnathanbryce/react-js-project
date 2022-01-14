import React, { useState } from "react";
import ModalOverlay from "../../components/UI/ModalOverlay";
import Button from "../../components/UI/Button";
import classes from "../MainContent.module.css";

import ReactHooksContent from "./ReactMainContent/ReactHooksContent";
import ReactRouterContent from "./ReactMainContent/ReactRouterContent";
import ReactReduxContent from "./ReactMainContent/ReactReduxContent";
import ToDoReact from "./ToDoReact";

const ReactMain = () => {
  const [showModalOverlayHooks, setShowModalOverlayHooks] = useState(false);
  const [showModalOverlayRedux, setShowModalOverlayRedux] = useState(false);
  const [showModalOverlayRouter, setShowModalOverlayRouter] = useState(false);

  const showModalHooks = (e) => {
    e.preventDefault();
    setShowModalOverlayHooks(true);
  };

  const showModalRedux = (e) => {
    e.preventDefault();
    setShowModalOverlayRedux(true);
  };

  const showModalRouter = (e) => {
    e.preventDefault();
    setShowModalOverlayRouter(true);
  };

  const closeModals = () => {
    setShowModalOverlayHooks(false);
    setShowModalOverlayRouter(false);
    setShowModalOverlayRedux(false);
  };

  return (
    <div className={classes.mainContent}>
      {showModalOverlayHooks && (
        <ModalOverlay
          onClick={closeModals}
          title="Important React Hooks "
          content={<ReactHooksContent />}
        />
      )}

      {showModalOverlayRouter && (
        <ModalOverlay
          onClick={closeModals}
          title="React Router"
          content={<ReactRouterContent />}
        />
      )}

      {showModalOverlayRedux && (
        <ModalOverlay
          onClick={closeModals}
          title="Redux "
          content={<ReactReduxContent />}
        />
      )}

      <h2> React - Key Notes/Concepts: </h2>

      <Button onClick={showModalHooks}>
        <h3>Important React Hooks </h3>
      </Button>

      <Button onClick={showModalRouter}>
        <h3>React Router </h3>
      </Button>

      <Button onClick={showModalRedux}>
        <h3>React Redux </h3>
      </Button>

      <h2> To Review: </h2>
      <ToDoReact />
    </div>
  );
};

export default ReactMain;
