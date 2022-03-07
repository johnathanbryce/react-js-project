import ContentCard from "../../../components/UI/ContentCard";

const ObjectsContent = () => {
  return (
    <div>
      <ContentCard
        contentTitle="JavaScript Objects"
        video="https://www.youtube.com/embed/X0ipw1k7ygU"
        externalLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"
        content={
          <div>
            <p>
              {" "}
              In JS, almost "everything" is an object. A JS object is a
              standalone entity, with properties and type.
            </p>
            <ul>
              <li>Booleans can be objects (if defined with the new keyword)</li>
              <li> Numbers can be objects (if defined with the new keyword)</li>
              <li> Strings can be objects (if defined with the new keyword)</li>
              <li> Dates are always objects</li>
              <li> Maths are always objects</li>
              <li> Regular expressions are always objects</li>
              <li> Arrays are always objects</li>
              <li> Functions are always objects</li>
              <li> Objects are always objects</li>
            </ul>
            <p>
              ** all JS values, except primitives, are objects (remember: a
              <strong> primitive value </strong> is a vale that has no
              properties or methods.
            </p>
            <h3> Objects are Variables </h3>
            <p>
              Objects are variables, but objects can contain many values. Object
              values are written as <strong> name : value</strong> pairs.
            </p>
            <p>
              A JS object is a collection of <strong> named values.</strong>
            </p>
            <p>
              It is a common practice to declare objects with the
              <code> const </code> keyword.
            </p>
            <p>
              <code>
                const person =
                {
                  ' {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};'
                }
              </code>
            </p>

            <h3> Object Properties </h3>
            <p>
              A property of an object can be explained as a variable that is
              attached to the object. Object properties are basically the same
              as ordinary JS variables, except for the attachment to objects.
              The properties of an object define the characteristics of the
              object. A typical object inherits properties (including methods)
              from <em>Object.prototype.</em>{" "}
            </p>
            <p>
              The <strong> name:values </strong> pair in JS objects are called
              <strong> properties.</strong>
            </p>
            <p> You can access object properties in two ways:</p>
            <ul>
              <li>
                <em> objectName.propertyName</em>
              </li>
              <li>
                <em> objectName["propertyName"]</em>
              </li>
            </ul>
            <h4> Adding a Property to an Object</h4>
            <p>
              <code> objectName.propertyToAdd = "property value"</code>
            </p>

            <h3> Object Methods </h3>
            <p>
              Methods are <strong> actions </strong> that can be performed on
              objects. Object properties can be both primitive values, other
              objects, and functions.
            </p>
            <p>
              An object method is an object property containing a
              <strong> function definition.</strong>
            </p>
            <p> You access an object method with the following syntax:</p>
            <ul>
              <li>
                <em> objectName.methodName()</em>
              </li>
            </ul>
            <h4> Adding a Method to an Object</h4>
            <p>
              <code> objectName.methodToAdd = function () {"{...};"}</code>
            </p>
          </div>
        }
      />
    </div>
  );
};

export default ObjectsContent;
