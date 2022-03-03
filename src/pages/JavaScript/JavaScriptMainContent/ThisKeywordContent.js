import ContentCard from "../../../components/UI/ContentCard";

const ThisKeywordContent = () => {
  return (
    <div>
      <ContentCard
        contentTitle="The this Keyword"
        video="https://www.youtube.com/embed/gvicrj31JOM"
        externalLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
        content={
          <div>
            <p>
              In JS, the <code> this </code> keyword refers to an
              <strong> object</strong>.
            </p>
            <p>
              {" "}
              In most cases, the value of <code> this </code> is determined by
              how a function is called.
            </p>

            <p>
              {" "}
              Which object depends on how
              <code> this </code> is being invoked -- the <code> this </code>
              keyword refers to different objects depending on how it is used:
            </p>
            <ul>
              <li>
                In an object method, <code> this </code> refers to the
                <strong> object </strong>
              </li>
              <li>
                Alone, <code> this </code> refers to the
                <strong> global object </strong>
              </li>
              <li>
                In a function, <code> this </code> refers to the
                <strong> global object </strong>
              </li>
              <li>
                In a function, in strict mode, <code> this </code> is
                <strong> undefined </strong>
              </li>
              <li>
                In an event, <code> this </code> refers to the
                <strong> element </strong> that received the event
              </li>
              <li>
                Metjods like, <code> call(), apply(), </code> and{" "}
                <code> bind() </code> can refer <code> this </code> to
                <strong> any object </strong>
              </li>
            </ul>

            <p>
              note: arrow functions don't provide their own <code> this </code>{" "}
              binding{" "}
            </p>

            <h3> This Precedence </h3>
            <p>
              {" "}
              To determine which object <code> this </code> refers to, use the
              following precedence of order:{" "}
            </p>
            <ul>
              <li> 1st -- bind()</li>
              <li> 2nd -- apply() & call() </li>
              <li> 3rd -- Object method </li>
              <li> 4th -- Global scope </li>
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default ThisKeywordContent;
