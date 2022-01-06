import React from "react";
import ContentCard from "../../components/UI/ContentCard";

const ReactHooksContent = () => {
  return (
    <div>
      <ContentCard
        contentTitle="useState"
        video="https://www.youtube.com/embed/O6P86uwfdR0"
        preview="https://www.w3schools.com/react/react_usestate.asp"
        content={
          <div>
            <p>
              useState allows us to track state in a function component.
              useState accepts an intial state and returns two values:
            </p>
            <ul>
              <li> the current state </li>
              <li> a function that updates the state </li>
            </ul>
            <p>
              Every useState update will trigger a render. Calling the function
              does not just assign a new value to a variable but it instead
              re-executes the entire component function.
            </p>
            <p>
              <code>
                {" "}
                const [enteredTitle, setEnteredTitle] = useState("useState
                Hook");{" "}
              </code>
            </p>
            <ul>
              <li>
                Note: we destructure the two returned values from useState
              </li>
            </ul>
            <p>
              In this example the first value is <code> enteredTitle </code> is
              our current state and the second value
              <code> setEnteredTitle </code>
              is the function used to update our state.
            </p>
            <p>
              {" "}
              Inside the <code>useState() </code> hook, you can track state in
              the form of strings, numbers, booleans, arrays, obecjts, or any
              combination of these.{" "}
            </p>
          </div>
        }
        title="useState "
      />
      <ContentCard
        contentTitle="useEffect"
        video="https://www.youtube.com/embed/O6P86uwfdR0"
        title="useEffect summary"
        content="     nfo on useState...info on useState...info on useState...info on
        useState...info on useState...info on useState...info on useState...info
        on useState...info on useState...info on useState...info on
        useState...info on useState...info on useState...info on useState...info
        on useState...info on useState...info on useState...info on
        useState...info on useState...info on useState...info on useState...info
        on useState...info on useState...info on useState...info on
        useState...info on useState... "
      />
      <ContentCard
        contentTitle="useReducer"
        video="https://www.youtube.com/embed/O6P86uwfdR0"
        title="useReducer summary"
        content="     nfo on useState...info on useState...info on useState...info on
        useState...info on useState...info on useState...info on useState...info
        on useState...info on useState...info on useState...info on
        useState...info on useState...info on useState...info on useState...info
        on useState...info on useState...info on useState...info on
        useState...info on useState...info on useState...info on useState...info
        on useState...info on useState...info on useState...info on
        useState...info on useState... "
      />
    </div>
  );
};

export default ReactHooksContent;
