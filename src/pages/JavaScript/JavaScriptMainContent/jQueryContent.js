import ContentCard from "../../../components/UI/ContentCard";

const JQueryContent = () => {
  return (
    <div>
      <ContentCard
        contentTitle="jQuery"
        video="https://www.youtube.com/embed/hMxGhHNOkCU"
        externalLink="https://api.jquery.com/"
        content={
          <div>
            <h3> Setting Up jQuery </h3>
            <p> In order to implement jQuery into your project, you can: </p>
            <ul>
              <li> Download the jQuery library from jQuery.com </li>
              <ul>
                <a href="https://jquery.com/download/" taerget="_blank">
                  <code> </code> <li> Download link</li>
                </a>
                <li>
                  After download, reference it with the HTML:
                  <code> {"<script>"}</code> tag inside the:
                  <code> {"<head>"}</code> section
                </li>
                <ul>
                  <li>
                    <code>{'<script src="jquery-3.5.1.min.js"></script>'}</code>
                  </li>
                </ul>
              </ul>
              <li> Include jQuery from a CDN </li>
              <ul>
                <li>
                  jQuery can also be included from a CDN (Google is an example
                  of someone who hosts jQuery):
                </li>
                <ul>
                  <li>
                    <code>
                      {
                        '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>'
                      }
                    </code>
                  </li>
                </ul>
              </ul>
            </ul>

            <h3> Syntax & Selectors </h3>
            <p>
              Basic jQuery syntax is: <code> $(selector).action() </code>
            </p>
            <p> You can select HTML element(s) by element, class, or id. </p>

            <h3>Commonly Used jQuery Event Methods: </h3>
            <ul>
              <li>
                <code>$(document).ready() </code> - executes a function when the
                document is fully loaded
              </li>
              <li>
                <code>click() / dblclick()</code> - executes a function when the
                user clicks or double clicks on the HTML element
              </li>
              <li>
                <code>mouseenter() / mouseleave() </code> - executes a function
                when the users mouse enters or leaves the HTML element
              </li>
              <li>
                <code>hover() </code> - takes two functions and is a combo of
                the mouseenter() and mouseleave() methods. The first function is
                executed wehn the mouse enters the HTML element, and the second
                function is executed when the mouse leaves the HTML element
              </li>
              <li>
                <code>focus()</code> - executes a function when the form field
                gets focus
              </li>
              <li>
                <code>blur()</code> - executes a function when the form field
                loses focus
              </li>
              <li>
                <code>on()</code> - attaches one or more event handlers for the
                selected elements
              </li>
            </ul>

            <h3> jQuery Effects: </h3>
            <ul>
              <li>
                <code>hide() / show()</code> - hide and show HTML elements:
                <br />
                <p>
                  <code>
                    $("#hide").click(function(){"{"}
                    <br />
                    $("p").hide(); <br />
                    {"}"});
                  </code>
                </p>
              </li>
              <li>
                <code>toggle()</code> - allows you to toggle between showing and
                hiding an element(s)
              </li>
              <li>
                <code>fadeIn() / fadeOut / fadeToggle / fadeTo() </code> - fades
                HTML elements
              </li>
              <p>
                <code> $(selector).fadeIn/Out/Toggle(speed,callback);</code>
              </p>
              <p>
                <code> $(selector).fadeTo(speed,opacity, callback);</code>
              </p>

              <li>
                <code>slideDown() / slideUp() / slideToggle()</code> - slides
                elements up and down
              </li>
              <p>
                <code>
                  $(selector).slideDown/slideUp/slideToggle(speed,callback);
                </code>
              </p>

              <li>
                <code> animate()</code> - creates custom animation
              </li>
              <p>
                <code>$(selector).animate({"{params}"}, speed,callback);</code>
              </p>

              <li>
                <code> stop()</code> - used to stop animations or effects before
                it is finished
              </li>
              <p>
                <code>$(selector).stop(stopAll,goToEnd);</code>
              </p>
            </ul>

            <h3> jQuery Method Chaining:</h3>
            <p>
              Chaining allows us to run multiple jQuery commands, one after the
              other, on the same element(s):
            </p>
            <p>
              <code>
                {" "}
                $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
              </code>
            </p>
          </div>
        }
      />
    </div>
  );
};

export default JQueryContent;
