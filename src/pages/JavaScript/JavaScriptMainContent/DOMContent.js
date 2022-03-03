import ContentCard from "../../../components/UI/ContentCard";

const DOMContent = () => {
  return (
    <div>
      <ContentCard
        contentTitle="The DOM"
        video="https://www.youtube.com/embed/ipkjfvl40s0"
        externalLink="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"
        content={
          <div>
            <h3> DOM Intro </h3>
            <p>
              When a web page is loaded, the browser creates a Document Object
              Model of the page. The HTML DOM model is constructed as a tree of
              Objects. With the object model, JavaScript can access and
              manipulate the DOM. **In the DOM, all HTML elements are defined as
              <strong> objects </strong>**.
            </p>
            <h3> DOM Methods </h3>
            <p> 2 easy ways to access the DOM via JavaScript: </p>
            <ol>
              <li>
                <strong> getElementByID method</strong>
              </li>
              <li>
                <strong> innerHTML Property </strong>
              </li>
            </ol>
            <p>
              <code>document.getElementById("demo").innerHTML = "Hello";</code>
            </p>
            <h3> Finding HTML Elements: </h3>
            <ul>
              <li>
                <code>document.getElementById(id) </code> -- find an element by
                element id
              </li>
              <li>
                <code>document.getElementTagName(name) </code> -- find elements
                by tag name
              </li>
              <li>
                <code>document.getElementByClassName(name) </code> -- find
                elements by class name
              </li>
              <li>
                <code>document.querySelectorAll(".example") </code> -- finds all
                elements with class=".example"
              </li>
            </ul>
            <h3> Changing HTML Elements </h3>
            <ul>
              <li>
                <code>element.innerHTML = new html content</code> -- change the
                inner HTML of an element
              </li>
              <li>
                <code>element.attribute = new value </code> -- change the
                attribute value of an HTML element
              </li>
              <li>
                <code>element.style.property = new style </code> -- change the
                style of an element
              </li>
              <li>
                <code>element.setAttribute(attribute, value) </code> -- change
                the attribute value of an HTML element
              </li>
            </ul>
            <h3> Adding and Deleting Elements </h3>
            <ul>
              <li>
                <code>document.createElement(element)</code> -- create an HTML
                element
              </li>
              <li>
                <code>document.removeChild(element)</code> -- remove an HTML
                element
              </li>
              <li>
                <code>document.appendChild(element) </code> -- add an HTML
                element
              </li>
              <li>
                <code>document.replaceChild(element) </code> -- replace an HTML
                element
              </li>
              <li>
                <code>document.write(text) </code> -- write into the HTML output
                stream
              </li>
            </ul>
            <h3> Adding Event Handlers </h3>
            <ul>
              <li>
                <code>
                  document.getElementById(id).onclick = function(){"{code}"}
                </code>
                -- adding event handler code to an onclick event
              </li>
              <li>
                <code>
                  document.getElementById(id).addEventListener("click",
                  displayDate);
                </code>
                -- the <em> addEventListener()</em> method attaches an event
                handler to the specified element. It attaches an event handler
                to an element without overwriting existing event handlers.
                <ul>
                  <li> you can add many event handlers to one element</li>
                  <li>
                    {" "}
                    you can add many event handlers of the same type to one
                    element, i.e. two "click" events{" "}
                  </li>
                  <li>
                    {" "}
                    you can add event listeneres to any DOM object, not only
                    HTML elements, i.e the window object{" "}
                  </li>
                  <li>
                    {" "}
                    you can easily remove an event listener by using the{" "}
                    <code> removeEventListener() </code> method{" "}
                  </li>
                </ul>
              </li>
            </ul>

            <h4> Other Event Handlers: </h4>
            <ul>
              <li>
                <code> onload + onunload</code> -- events are triggered when the
                user enters or leaves the page{" "}
              </li>
              <li>
                <code> onchange</code> -- often used in combination with
                validation of input fields
              </li>
              <li>
                <code> onmouseover + onmouseout</code> -- events can be used to
                trigger a function when the user mouses over, or out of, an HTML
                element
              </li>
              <li>
                <code> onmousedown + onmouseup</code> -- events can be tiggered
                when a mouse-button is clicked or when the mouse-button is
                released
              </li>
            </ul>
            <h3> Changing the Value of an Attribute </h3>
            <ul>
              <li>
                <code>document.getElementById(id).attribute = new value</code>
                <br />
                <br />
                example: document.getElementById("myImage").src =
                'landscape.jpg'
              </li>
            </ul>

            <h3> DOM Navigation </h3>
            <p>
              {" "}
              According to the W3C HTML DOM standard,{" "}
              <strong> everything in an HTML document is a node</strong>
            </p>
            <h4> Node Relationships </h4>
            <p>
              {" "}
              The nodes in a node tree have a hierarchical relationship to each
              other: the terms parent, child, and sibling are used to describe
              the relationships
            </p>
            <h4> Navigating Between Nodes </h4>
            <p>
              {" "}
              You can use the following node properties to navigate between
              nodes with JavaScript:{" "}
            </p>
            <ul>
              <li>
                <code>parentNode</code>
              </li>
              <li>
                <code>childNodes[nodenumber]</code>
              </li>
              <li>
                <code>firstChild</code>
              </li>
              <li>
                <code>lastChild</code>
              </li>
              <li>
                <code>nextSibling</code>
              </li>
              <li>
                <code>previousSibling</code>
              </li>
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default DOMContent;
