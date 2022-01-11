import React, { useState } from "react";
import ModalOverlay from "../../components/UI/ModalOverlay";
import Button from "../../components/UI/Button";

import ReactHooksContent from "./ReactHooksContent";
import ToDoReact from "./ToDoReact";

const ReactMain = (props) => {
  const [showModalOverlayHooks, setShowModalOverlayHooks] = useState(false);
  const [showModalOverlayOther, setShowModalOverlayOther] = useState(false);

  const showModalHooks = (e) => {
    e.preventDefault();
    setShowModalOverlayHooks(true);
  };

  const showModalOther = (e) => {
    e.preventDefault();
    setShowModalOverlayOther(true);
  };

  const closeModals = () => {
    setShowModalOverlayHooks(false);
    setShowModalOverlayOther(false);
  };

  return (
    <div>
      {showModalOverlayHooks && (
        <ModalOverlay
          onClick={closeModals}
          title="Important React Hooks "
          content={<ReactHooksContent />}
        />
      )}

      {showModalOverlayOther && (
        <ModalOverlay
          onClick={closeModals}
          title="Other Content title "
          content="other content "
        />
      )}

      <h2> React - Key Notes/Concepts: </h2>
      <Button onClick={showModalHooks}>
        <h2>Important React Hooks </h2>
      </Button>

      <Button onClick={showModalOther}>
        <h2>React Redux </h2>
      </Button>

      <h2> To Review: </h2>
      <ToDoReact />
    </div>
  );
};

export default ReactMain;
