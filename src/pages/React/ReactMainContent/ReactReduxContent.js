import ContentCard from "../../../components/UI/ContentCard";
import classes from "./ReactMainContent.module.css";
import reactReduxImg1 from "../../../images/reactReduxImg1.jpeg";

const ReactReduxContent = () => {
  return (
    <ContentCard
      contentTitle="Redux"
      video="https://www.youtube.com/embed/9boMnm5X9ak"
      externalLink="https://react-redux.js.org/introduction/getting-started"
      content={
        <div>
          <p>
            Redux is a state managmenet system for cross-component or app-wide
            state. Redux is all about having
            <strong> one central data store (state) </strong>. You
            <strong> NEVER</strong> have more than one store. Whatever
            cross-component or app wide state you have, it will go in this one
            store.
          </p>
          <p>Examples of what to include in this central data store include:</p>
          <ul>
            <li> Authentication state </li>
            <li> Theme </li>
            <li> User Input </li>
            <li> etc... </li>
          </ul>

          <h3> Installation and Setup: </h3>
          <p>
            <code> npm install react-redux </code>
          </p>
          <h4>Provider</h4>
          <p>
            React Redux includes a <code> {"<Provider />"}</code> component,
            which makes the Redux store avaiable to the rest of your app: <br />
            <br />
            <code> import {"{ Provider }"} from 'react-redux'; </code>
            <br />
            <br />
            ... <br />
            <code>
              {"<Provider store={store}>"} <br />
              <div className={classes.nested}> {"<App />"} </div>
              {"</Provider>"}
            </code>
            <br />
            ...
          </p>
          <h4>Hooks </h4>
          <p>
            Redux provides a pair of custom React hooks that allow your
            components to interact with the Redux store:
          </p>
          <ul>
            <li>
              <code> useSelector </code> -- reads a value from the store state
              and subscribes to updates
            </li>
            <li>
              <code> useDispatch </code> -- returns the stores
              <code> dispatch </code> method to let you dispatch actions
            </li>
          </ul>

          <h3> 3 Main Areas of Focus: </h3>
          <ol>
            <li>
              <strong> Actions</strong> -- we define all the actions we need to
              perform for changing the state.
            </li>
            <li>
              <strong> Central Store </strong> -- the main place where you
              assume your final state is residing so that you can directly
              access it instead of prop drilling.
            </li>
            <li>
              <strong> Reducers </strong> -- these tell us how to or what
              process to follow to change the state.
            </li>
          </ol>
          <br />
          <img
            className={classes.nested}
            src={reactReduxImg1}
            alt="browser router example"
            width="400"
            height="200"
          />
          <br />

          <h3> Redux Essential Rules: </h3>
          <ul>
            <li> Only one redux store per app </li>
            <li> Do not mutate state </li>
            <li>Reducers must not have side effects</li>
            <li>Do not put non-serializable values in state or actions</li>
            <ul>
              <li>
                i.e. avoid putting values such as Promises, Symbols, Maps/Sets,
                functions, or class instances into the Redux store state or
                dispatched actions.
              </li>
            </ul>
            <li> Components NEVER directly manipulate the store data</li>
            <ul>
              <li>
                Instead, we use a Reducer Function that is responsible for
                mutating the store data
              </li>
              <ul>
                <li>
                  Note: this is NOT useReducer( ) -- "Reducer Functions" are a
                  general concept
                </li>
              </ul>
            </ul>
          </ul>
          <h3> Core Redux Concepts: </h3>
          <ul>
            <li>
              <strong>Central Data (State) Store </strong>
            </li>

            <li>
              <strong>Components</strong>
            </li>
            <ul>
              <li> Subscribe to the Central Data Store & </li>
              <ul>
                <li>
                  components subscribe to the store and whenever data changes,
                  the store updates the components and the components can get
                  the data they need
                </li>
              </ul>
              <li> Dispatch actions</li>
            </ul>
            <li>
              ... actions are forward to the Reducer Function via the Component
              ...
            </li>
            <li>
              <strong> Reducer Function </strong>
            </li>
            <ul>
              <li>responsible for mutating the store data</li>
              <li>
                the Reducer Function reads the description of the desired
                action, and then his action is performed by the Reducer
              </li>
              <li>
                then the Reducer performs the action and spits out a new state
                which replaces the existing state in the Central Data Store
              </li>
            </ul>
            <li>
              When the state in the Central Data Store is updated, subscribing
              components are notified so that they can update their UI
            </li>
          </ul>
        </div>
      }
    />
  );
};

export default ReactReduxContent;
