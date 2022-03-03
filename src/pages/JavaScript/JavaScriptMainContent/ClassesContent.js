import ContentCard from "../../../components/UI/ContentCard";

const ClassesContent = () => {
  return (
    <div>
      <ContentCard
        contentTitle="Classes"
        video="https://www.youtube.com/embed/2ZphE5HcQPQ"
        externalLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"
        content={
          <div>
            <p>
              JavaScript Classes are templates for JavaScript Objects. They
              encapsulate data with code to work on that data. They are a
              <strong> blueprint for creating objects. </strong>
            </p>
            <p>
              To reiterate -- a JS Class is <strong> not </strong> an object, it
              is a <strong> template </strong> for JS objects
            </p>
            <p>
              Hoisting -- classes must be defined before they are constructed.
            </p>
            <h3> JavaScript Class Syntax </h3>
            <p>
              Use the keyword <code> class </code> to create a class. Always add
              a method named <code> constructor() </code>:
            </p>
            <br />
            <p>
              <code> class ClassName {"{constructor() {...}}"}</code>
            </p>
            <br />
            <p>
              When you have a class, you can use the class to create objects:
              <br />
              <br />
              <code> let myCar1 = new Car("Ford", 2014); </code>
            </p>
            <h3> The Constructor Method </h3>
            <ul>
              <li> has to have the exact name "constructor" </li>
              <li>it is executed automatically when a new object is created</li>
              <li> it is used to initialize object properties </li>
            </ul>
            <p>
              If you do not define a constructor method, JS will add an empty
              constructor method.
            </p>
            <h3> Class Methods </h3>
            <p>
              Class methods are created with the same syntax as object methods.
              Use the <code> class </code> keyword to create a class and always
              add a <code> constructor()</code> method. Then add any number of
              methods to your class.
            </p>
          </div>
        }
      />
    </div>
  );
};

export default ClassesContent;
