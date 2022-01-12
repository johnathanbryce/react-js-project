import ContentCard from "../../../components/UI/ContentCard";
import classes from "./ReactMainContent.module.css";
import useEffectImg1 from "../../../images/useEffectImg1.jpg";
import useEffectImg2 from "../../../images/useEffectImg2.jpg";
import useEffectImg3 from "../../../images/useEffectImg3.jpg";
import useReducerImg1 from "../../../images/useReducer-reducerFnExample.jpeg";
import useRefImg1 from "../../../images/useRefExample.jpeg";

const ReactHooksContent = () => {
  return (
    <div>
      <ContentCard
        contentTitle="useState"
        video="https://www.youtube.com/embed/O6P86uwfdR0"
        externalLink="https://reactjs.org/docs/hooks-state.html"
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
                const [enteredTitle, setEnteredTitle] = useState("useState
                Hook");
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
              Inside the <code>useState() </code> hook, you can manage state in
              the form of strings, numbers, booleans, arrays, obecjts, or any
              combination of these.
            </p>
          </div>
        }
      />

      <ContentCard
        contentTitle="useEffect"
        video="https://www.youtube.com/embed/0ZJgIjIuY7U"
        externalLink="https://reactjs.org/docs/hooks-effect.html"
        content={
          <div>
            <p>
              useEffect allows you to perform side effects in your components.
              useEffect accepts two arguments:
            </p>
            <ul>
              <li> a function </li>
              <li>
                a dependency{" "}
                <small>
                  <em> (optional)</em>
                </small>
              </li>
            </ul>
            <p>
              useEffect runs on every render but there are several ways to
              control when side effects run:
            </p>
            <small>
              <em> (hover over to view) </em>{" "}
            </small>

            <ol>
              <li className={classes.hover_img}>
                <a href="#">
                  No dependecy passed <small> runs on every render </small>
                  <span>
                    <img
                      src={useEffectImg1}
                      alt="useEffect Example 1"
                      height="300"
                      width="500"
                    />
                  </span>
                </a>
              </li>
              <li className={classes.hover_img}>
                <a href="#">
                  An empty array
                  <small> runs only on the first render </small>
                  <span>
                    <img
                      src={useEffectImg2}
                      alt="useEffect Example 2"
                      height="300"
                    />
                  </span>
                </a>
              </li>
              <li className={classes.hover_img}>
                <a href="#">
                  Props or state values
                  <small>
                    runs on the first render and any time any dependency value
                    changes{" "}
                  </small>
                  <span>
                    <img
                      src={useEffectImg3}
                      alt="useEffect Example 3"
                      height="300"
                    />
                  </span>
                </a>
              </li>
            </ol>

            <p>Some examples of side effects include:</p>
            <ul>
              <li> data fetching</li>
              <li> setting up a subscription </li>
              <li>manually changing the DOM </li>
            </ul>

            <p>
              In relation to React class lifecycle methods, you can think of the
              useEffect hook as a combination of componentDidMount,
              componentDidUpdate, and componentWillUnmount combined.
            </p>
          </div>
        }
      />

      <ContentCard
        contentTitle="useContext"
        video="https://www.youtube.com/embed/5LrDIWkK_Bc"
        externalLink="https://reactjs.org/docs/hooks-reference.html#usecontext"
        content={
          <div>
            <p>
              useContext allows us to bypass "prop drilling" (passing props down
              through multiple levels of child components).{" "}
            </p>

            <p>
              Using context, we can avoid passing props through intermediate
              elements. Context is designed to share data that is considered
              "global" for a tree of React components.
            </p>

            <p>
              Some examples of when to use useContext:
              <ul>
                <li>authenticated user </li>
                <li> theme </li>
                <li> preferred language </li>
              </ul>
            </p>

            <p>
              To create context, you must first import createContext and
              initialize it:
            </p>
            <p>
              <code> import {"{createContext}"} from 'react'; </code>
              <br />
              <code> const userContext = createContext() </code>
            </p>
            <p>
              In order to declare which props you'd like your child components
              to have access to, you must wrap child components using the
              Context Provider and provide the state value:
            </p>
            <p>
              <code>
                function Component1() <br />
                {"  const UserContext = useContext();"} <br />
                <br />
              </code>
              <code>{"<MyContextName.Provider value={user} "}</code> <br />
              <code className={classes.nested}>
                {"<Component2 value={user} "}
              </code>
              <br />
              <code>{"</MyContextName.Provider} "}</code>
            </p>

            <p>
              ... and then access in your desired child component by using the
              useContext hook:
            </p>

            <p>
              <pre>
                <code>
                  function Component3() <br />
                  {"  const user = useContext(UserContext);"} <br />
                  <br />
                  {"  return (... <p> {user} </p> ... )"}
                </code>
              </pre>
            </p>
            <p>
              Note: Before using useContext -- Context is primarily used when
              some data needs to be accessible by many components at different
              nesting levels. Apply useContext sparingly because it makes
              component reuse more difficult
            </p>
          </div>
        }
      />

      <ContentCard
        contentTitle="useReducer"
        video="https://www.youtube.com/embed/kK_Wqx3RnHk"
        externalLink="https://reactjs.org/docs/hooks-reference.html#usereducer"
        content={
          <div>
            <p>
              useReducer helps us with state managemenet and is an alternative
              to useState. It is a bit like useState, however, it has more
              capabilities and is especially useful for more complex state.
            </p>
            <p>
              <code>
                const [state, dispatchFn] = useReducer(reducerFn, initialState,
                initFn);
              </code>
              <ul>
                <li>
                  <code> state </code> - the state snapshot used in component
                  re-render
                </li>
                <li>
                  <code> dispatchFn </code> - a function that can be used to
                  dispatch a new action (i.e. trigger an update of the state)
                </li>

                <li className={classes.hover_img}>
                  <a href="#">
                    <code> reducerFn</code> - a functuon that is triggered
                    automatically once an action is dispatched (via
                    dispatchFn()) - it receives the latest state snapshot and
                    should return the new, updated state
                    <span>
                      <img
                        src={useReducerImg1}
                        alt="useReducer reducer function example"
                        height="300"
                      />
                    </span>
                  </a>
                </li>
                <li>
                  <code> initialState </code> - the intial state
                  <small>
                    <br />
                    <br />
                    note: instead of using default values for initial state (ex:
                    hard-coding it as '0'), generally when you work with
                    Reducer/useReducer you should work with objects as values
                    (ex: {"{ count : 0 }"})
                  </small>
                </li>
                <li>
                  <code> initFn </code> -a function to set the initial state
                  programmatically
                </li>
              </ul>
            </p>
            <p>
              useReducer accepts a reducer of type{" "}
              <code> (state, action) {"=>"} newState </code>
              and returns the current state paired with a <code>
                dispatch
              </code>{" "}
              method.
            </p>
          </div>
        }
      />

      <ContentCard
        contentTitle="useRef"
        video="https://www.youtube.com/embed/t2ypzz6gJm0"
        externalLink="https://reactjs.org/docs/hooks-reference.html#useref"
        content={
          <div>
            <p>
              useRef returns a mutable ref object whose <code> .current </code>{" "}
              property is initiaized to the passed argument{" "}
              <code>(initialValue).</code>
              The returned object will persist for the full lifetime of the
              component.
            </p>
            <p>
              <code> const refContainer = useRef(initialValue);</code>
            </p>
            <p>
              useRef is similar to state in that you can store a previous value
              in it that persists between renders, but it does NOT cause you to
              re-render like state does.
            </p>
            <p>
              useRef( ) only returns one item -- an object called{" "}
              <code> current.</code>
            </p>
            <p>
              Essentially, useRef is like a "box" that can hold a mutable value
              in its <code> .current </code> property.
            </p>
            <p>
              useRef( ) creates a plain JavaScript object. The only difference
              between useRef( ) and created a <code>{"{current: ...}"} </code>
              object yourself is that useRef will give you the same ref object
              on every render.
            </p>
            <p>
              Note: useRef does not cause your component to update when its
              content changes. Mutating the <code> .current </code> property
              does not trigger a re-render.
            </p>
            <p>
              One of the most common use case for refs is referencing elements
              inside your html (each element inside your document has a ref
              attribute):
              <br />
              <br />
              <code>
                {
                  "<input ref={inputRef} value={name} onChange={changeHandlerFn} /> "
                }
              </code>
            </p>
            <p className={classes.hover_img}>
              <a href={useRefImg1} target="_blank" rel="noreferrer">
                Click here for a useRef( ) example.
              </a>
            </p>
          </div>
        }
      />

      <ContentCard
        contentTitle="useCallback"
        video="https://www.youtube.com/embed/_AyFP5s69N4"
        externalLink="https://reactjs.org/docs/hooks-reference.html#usecallback"
        content={
          <div>
            <p> useCallback returns a memoized callback function </p>
            <ul>
              <li>
                Note: think of memoization as catching a value so that it does
                not need to be recalculated.{" "}
              </li>
            </ul>
            <p>
              {" "}
              This allows us to isolate resource intensive functions so that
              they will not automatically run on every render.{" "}
            </p>
            <p> useCallback only runs when one of its dependencies update. </p>
            <p>
              {" "}
              <code>
                {" "}
                {
                  "const memoizedCallback = useCallBack(  ()  => {doSomething(a, b)}, [a,b], ); "
                }
              </code>
            </p>
            <ul>
              <li>
                Note: useCallback and useMemo hooks are similar. The main
                difference is that useMemo returns a memoized <em> value </em>{" "}
                and useCallback returns a memoized <em> function</em>.
              </li>
            </ul>
          </div>
        }
      />

      <ContentCard
        contentTitle="useMemo"
        video="https://www.youtube.com/embed/THL1OPn72vo"
        externalLink="https://reactjs.org/docs/hooks-reference.html#usememo"
        content={
          <div>
            <p> useMemo returns a memoized value. </p>
            <p>
              <code>
                {" "}
                {
                  " const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);"
                }
              </code>
            </p>
            <p> useMemo only runs when one of its dependencies update. </p>
            <p>
              <p>
                {" "}
                Pass a "create" function and an array of dependencies. useMemp
                will recompute the memoized value when one of the dependencies
                has changed. This helps to avoid expensive recalculations on
                every render.{" "}
              </p>{" "}
              useMemo can be used to keep resource intensive functions from
              needlessly running.{" "}
            </p>
            <ul>
              <li>
                Note: remember that the function passed to useMemo runs during
                rendering. Do not do anything there that you normally wouldn't
                do while rendering. (Ex: side effects belong in useEffect, not
                useMemo).
              </li>
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default ReactHooksContent;
