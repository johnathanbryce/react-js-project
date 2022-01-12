import ContentCard from "../../../components/UI/ContentCard";
import classes from "./ReactMainContent.module.css";

import reactRouterImg1 from "../../../images/reactRouterImg1.jpeg";
import reactRouterImg2 from "../../../images/reactRouterImg2.jpeg";

const ReactRouterContent = () => {
  return (
    <div>
      <ContentCard
        contentTitle="React Router "
        video="https://www.youtube.com/embed/aZGzwEjZrXc"
        externalLink="https://reactrouter.com/docs/en/v6"
        content={
          <div>
            <p>
              React does not include page routing. In order to implement
              routing, many developers use React Router.
            </p>

            <p>
              Install React Router:
              <code> npm install react-router-dom@6</code>
            </p>
            <p>
              To create an app with multiple page routes, it is highly
              recommened to hold your various page routes into a folder named
              <code> pages </code>. <br />
              <br />
              <code> src\pages\: </code>
              <br />
              <code className={classes.nested}>
                Layout.js <br />
              </code>
              <code className={classes.nested}>
                Home.js <br />
              </code>
              <code className={classes.nested}>
                Contact.js
                <br />
              </code>
              <code className={classes.nested}>
                etc...
                <br />
              </code>
            </p>

            <h3> Basic Usage: </h3>
            <p>
              <small>
                **the following screenshots and notes have been taken from{" "}
                <a
                  href="   https://www.w3schools.com/react/react_router.asp"
                  target="_blank"
                >
                  https://www.w3schools.com/react/react_router.asp
                </a>
              </small>
            </p>
            <p>
              First, we wrap our content with <code> {"<BrowserRouter/>"}</code>
              :
            </p>

            <img
              className={classes.nested}
              src={reactRouterImg1}
              alt="browser router example"
              width="500"
              height="400"
            />

            <ol>
              <li> We wrap our content with {"<BrowserRouter>"}</li>
              <li> Then we define our {"<Routes >"}</li>
              <li> Then we nest our {"<Route>"}'s </li>
            </ol>
            <ul>
              <li>
                Note: the nested {"<Route>"}'s inherit and add to the parent
                route. So, the blogs path is combined with teh parent and
                becomes <code> /blogs</code>
              </li>
              <li>
                Note: the <code> Home </code> component route has an
                <code> index </code> attribute. This specicies this route as the
                default route for the parent route, which is <code> / </code>
              </li>
              <li>
                Note: setting the <code> path</code> to <code> * </code> will
                act as a catch-all for any undefined URLS. This works very well
                for a 404 error page.
              </li>
            </ul>

            <h3> Pages / Components: </h3>
            <p>Inside the Layout.js component: </p>
            <img
              className={classes.nested}
              src={reactRouterImg2}
              alt="browser router example"
              width="500"
              height="600"
            />
            <ul>
              <li>
                The <code> {"<Outlet>"}</code> renders the current route
                selected
              </li>
              <li>
                The <code> {"<Link>"}</code> is used to set the URL and keep
                track of browsing history. Anytimer we link to an internal path,
                we will use <code> {"<Link>"}</code> instead of{" "}
                <code> {"<a href=...>"}</code>
              </li>
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default ReactRouterContent;
