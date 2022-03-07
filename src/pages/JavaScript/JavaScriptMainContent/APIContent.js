import ContentCard from "../../../components/UI/ContentCard";

const APIContent = () => {
  return (
    <div>
      <ContentCard
        contentTitle="APIs Basics"
        video="https://www.youtube.com/embed/GZvSYJDk-us"
        externalLink="https://developer.mozilla.org/en-US/docs/Web/API"
        content={
          <div>
            <p>
              API stands for Application Programming Interface, which is a
              softward intermediary that{" "}
              <strong> allows two applications to talk to each other. </strong>
              Each time you use an app, send an instant message, or check the
              weather, you're using an API. A Web API is an application
              programming interface for the Web. A Browser API can extend the
              functionality of a web browser. A Server API can extend the
              functionality of a web server.
            </p>
            <p>
              {" "}
              JS has numerous APIs available to it. They are typically defined
              as either Browser APIs or Third Party APIs.
            </p>
            <h3> Browser APIs</h3>
            <p>
              All browsers have a set of built-in Web APIs to support complex
              operations and to help access data. Browser APIs are able to
              expose data from the browser and surrounding computer environment
              and do useful complex things with it.
            </p>
            <p> Some common browser API's you'll encounter are: </p>
            <ul>
              <li> APIs for document manipulation </li>
              <li> APIs for fetching server data </li>
              <li> Audio/Video APIs</li>
            </ul>
            <h3> Third Party APIs </h3>
            <p>
              {" "}
              Third Party APIs are not build into the browser. You need to
              retrieve their code info from somewhere else. By connecting with
              the third party API, you can access and then work with methods
              provided by the API.{" "}
            </p>
            <p> Some common Third Party API's you'll encounter are: </p>
            <ul>
              <li> Google Maps API </li>
              <li> YouTube API </li>
              <li> Twitter AI </li>
            </ul>
            <h3> Some Common API Examples: </h3>
            <ul>
              <li> Weather updates </li>
              <li> Logins</li>
              <li> Article(s) fetching</li>
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default APIContent;
