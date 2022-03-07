import ContentCard from "../../../components/UI/ContentCard";

const JSONContent = () => {
  return (
    <div>
      <ContentCard
        contentTitle="JSON"
        video="https://www.youtube.com/embed/iiADhChRriM"
        externalLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"
        content={
          <div>
            <p>
              JSON stands for JavaScript Object Notation. It is a
              <strong> text format </strong> for storing and transporting data.
            </p>
            <p>
              This example is a JSON string:
              <code> {'{"name":"John", "age":28, "car":null}'}</code>
            </p>
            <p>
              The above JSON string defines an object with 3 properties: name,
              age, car. Each property has a value, and if you parse the JSON
              string you can access teh data as an object:
              <code> let personName = obj.name;</code>
            </p>
            <h3> What is JSON? </h3>
            <ul>
              <li> JSON is a lightweight data-interchange format</li>
              <li>JSON is plain text written in JavaScript object notation</li>
              <li> JSON is used to send data between computers </li>
              <li> JSON is language independent</li>
            </ul>
            <br />
            <p>
              JS has a built in function for converting JSON strings into JS
              objects: <code> JSON.parse() </code>
            </p>
            <p>
              JS also has a built in function for converting an object into a
              JSON string: <code> JSON.stringify() </code>
            </p>
            <h3> Storing Data </h3>
            <p>
              When stroring data, the data has to be a certain format. Text is
              always one of the legal format.s JSON makes it possible to store
              JS obejcts as text.
            </p>
          </div>
        }
      />
    </div>
  );
};

export default JSONContent;
