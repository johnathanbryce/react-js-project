import React, { useState } from "react";
import classes from "./JavaScriptMain.module.css";
import ModalOverlay from "../../components/UI/ModalOverlay";
import Button from "../../components/UI/Button";

// JS Main Content Components:
import JQueryContent from "./JavaScriptMainContent/jQueryContent";
import DOMContent from "./JavaScriptMainContent/DOMContent";
import ArraysContent from "./JavaScriptMainContent/ArraysContent";
import MapsAndSetsContent from "./JavaScriptMainContent/MapsAndSets.js";
import StringsAndNumbersContent from "./JavaScriptMainContent/StringsAndNumbers";
import ThisKeywordContent from "./JavaScriptMainContent/ThisKeywordContent";
import ClassesContent from "./JavaScriptMainContent/ClassesContent";
import ObjectsContent from "./JavaScriptMainContent/ObjectsContent";
import APIContent from "./JavaScriptMainContent/APIContent";
import JSONContent from "./JavaScriptMainContent/JSONContent";

// to do list
import ToDoJS from "./ToDoJS";

const JavaScriptMain = () => {
  const [showJQuery, setShowJQuery] = useState(false);
  const [showDOM, setShowDOM] = useState(false);
  const [showArray, setShowArray] = useState(false);
  const [showMapsAndSets, setShowMapsAndSets] = useState(false);
  const [showStringsAndNumbers, setShowStringsAndNumbers] = useState(false);
  const [showThisKeyword, setShowThisKeyword] = useState(false);
  const [showClasses, setShowClasses] = useState(false);
  const [showObjects, setShowObjects] = useState(false);
  const [showAPI, setShowAPI] = useState(false);
  const [showJSON, setShowJSON] = useState(false);

  const showModalJQuery = (e) => {
    e.preventDefault();
    setShowJQuery(true);
  };

  const showModalDOM = (e) => {
    e.preventDefault();
    setShowDOM(true);
  };

  const showModalArray = (e) => {
    e.preventDefault();
    setShowArray(true);
  };

  const showModalMapsAndSets = (e) => {
    e.preventDefault();
    setShowMapsAndSets(true);
  };

  const showModalStringsAndNumbers = (e) => {
    e.preventDefault();
    setShowStringsAndNumbers(true);
  };

  const showModalThisKeyword = (e) => {
    e.preventDefault();
    setShowThisKeyword(true);
  };

  const showModalClasses = (e) => {
    e.preventDefault();
    setShowClasses(true);
  };

  const showModalObjects = (e) => {
    e.preventDefault();
    setShowObjects(true);
  };

  const showModalAPIAndDataFetching = (e) => {
    e.preventDefault();
    setShowAPI(true);
  };

  const showModalJSON = (e) => {
    e.preventDefault();
    setShowJSON(true);
  };

  const closeModals = () => {
    setShowJQuery(false);
    setShowDOM(false);
    setShowArray(false);
    setShowMapsAndSets(false);
    setShowStringsAndNumbers(false);
    setShowThisKeyword(false);
    setShowClasses(false);
    setShowObjects(false);
    setShowAPI(false);
    setShowJSON(false);
  };

  return (
    <div className={classes.mainJSContent}>
      {showJQuery && (
        <ModalOverlay
          onClick={closeModals}
          title="jQuery"
          content={<JQueryContent />}
        />
      )}

      {showDOM && (
        <ModalOverlay
          onClick={closeModals}
          title="The Document Object Model"
          content={<DOMContent />}
        />
      )}

      {showArray && (
        <ModalOverlay
          onClick={closeModals}
          title="Arrays"
          content={<ArraysContent />}
        />
      )}

      {showMapsAndSets && (
        <ModalOverlay
          onClick={closeModals}
          title="Maps & Sets "
          content={<MapsAndSetsContent />}
        />
      )}

      {showStringsAndNumbers && (
        <ModalOverlay
          onClick={closeModals}
          title="Strings & Numbers "
          content={<StringsAndNumbersContent />}
        />
      )}

      {showThisKeyword && (
        <ModalOverlay
          onClick={closeModals}
          title="The this Keyword"
          content={<ThisKeywordContent />}
        />
      )}

      {showClasses && (
        <ModalOverlay
          onClick={closeModals}
          title="Classes "
          content={<ClassesContent />}
        />
      )}

      {showObjects && (
        <ModalOverlay
          onClick={closeModals}
          title="Objects"
          content={<ObjectsContent />}
        />
      )}

      {showAPI && (
        <ModalOverlay
          onClick={closeModals}
          title="APIs"
          content={<APIContent />}
        />
      )}

      {showJSON && (
        <ModalOverlay
          onClick={closeModals}
          title="JSON"
          content={<JSONContent />}
        />
      )}

      <h2> JavaScript - Key Notes/Concepts: </h2>

      <div className={classes.btnContainer}>
        <Button onClick={showModalDOM}>
          <h3>The DOM </h3>
        </Button>

        <Button onClick={showModalStringsAndNumbers}>
          <h3> Strings & Numbers </h3>
        </Button>

        <Button onClick={showModalArray}>
          <h3> Arrays </h3>
        </Button>

        <Button onClick={showModalObjects}>
          <h3> Objects </h3>
        </Button>

        <Button onClick={showModalClasses}>
          <h3> Classes </h3>
        </Button>

        <Button onClick={showModalMapsAndSets}>
          <h3> Maps/Sets </h3>
        </Button>

        <Button onClick={showModalThisKeyword}>
          <h3> The "this" Keyword </h3>
        </Button>

        <Button onClick={showModalAPIAndDataFetching}>
          <h3> APIs </h3>
        </Button>

        <Button onClick={showModalJSON}>
          <h3> JSON </h3>
        </Button>

        <Button onClick={showModalJQuery}>
          <h3> jQuery </h3>
        </Button>
      </div>

      <h2> To Review: </h2>
      <ToDoJS />
    </div>
  );
};

export default JavaScriptMain;
