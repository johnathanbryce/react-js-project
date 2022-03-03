import ContentCard from "../../../components/UI/ContentCard";

const ArraysContent = () => {
  return (
    <div>
      <ContentCard
        contentTitle="Array Basics"
        video="https://www.youtube.com/embed/7W4pQQ20nJg"
        externalLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
        content={
          <div>
            <p>
              An array is a special variable which can hold more than one value:
              <code> const cars = ["Kia", "Volvo", "BMW"] </code>
            </p>
            <h3> Arrays are Objects </h3>
            <p>
              Arrays are a special type of object. The <code> typeof</code>
              operator returns "object" for arrays. But JavaScript arrays are
              best described as arrays.
            </p>

            <h3> Array Const </h3>
            <p>
              {" "}
              It has become common practice to declare arrays using{" "}
              <code> const </code>. The const keywrod is a little misleading...
              it does NOT define a constant array, but instead defines a
              constant reference to an array. Because of this, we can still
              change the <strong> elements </strong> of a constant array.
            </p>

            <h3> Array Properties and Methods</h3>
            <p>
              The strength of JS arrays are the built-in arrau properties and
              methods:
            </p>
            <ul>
              <li> cars.length -- returns the # of elements </li>
              <li> cars.sort() -- sorts the array </li>
            </ul>
            <p> More array methods will be covered shortly... </p>
            <h3> Accessing Array Elements </h3>
            <p>
              There are numerous ways to access elements in arrays. Some common
              examples:
            </p>
            <ul>
              <li>
                accessing the first array element:
                <code> let car = cars[0];</code>
              </li>
              <li>
                accessing the last array element:
                <code> let car = cars[cars.length - 1];</code>
              </li>
            </ul>
            <h3> Difference Between Arrays and Objects </h3>
            <p>
              In JS, arrays use <strong> numbered indexes.</strong>
            </p>
            <p>
              In JS, objects use <strong> named indexes.</strong>
            </p>
            <h3> When to Use Arrays & When to Use Objects </h3>
            <p>
              You should use objects when you want the elemnt names to be
              <strong> strings (text) .</strong>
            </p>
            <p>
              You should use arrays when you want the element names to be
              <strong> numbers.</strong>
            </p>
            <h3> Common Array Methods</h3>
            <p>
              <code> .toString( ) </code> -- converts an array to a string of
              (comma separated) array values
            </p>
            <p>
              <code> .join( ) </code> -- joins all array elemnts into a string
              (behaves like toString(), but in addition yo ucan specify the
              separator, i.e. cars.join(" * "))
              <strong> *does not mutate </strong>
            </p>
            <p>
              <code> .slice( ) </code> --removes an item(s) from an array
              (returns a new array ) <strong> *does not mutate </strong>
            </p>

            <p>
              <code> .splice( ) </code> -- adds new items to an array (similar
              to slice but it mutates the original array)
              <strong> *mutates the array </strong>
            </p>
            <p>
              <code> .push( ) </code> -- adds a new element to an array (at the
              end)
              <strong> *mutates the array </strong>
            </p>
            <p>
              <code> .pop( ) </code> -- removes the last element from an array
              <strong> *mutates the array </strong>
            </p>
            <p>
              <code> .shift( ) </code> -- removes and returns the first array
              element and "shifts" all other elements to a lower index
              <strong> *mutates the array </strong>
            </p>
            <p>
              <code> .unshift( ) </code> -- adds a new element to an array (at
              the beginning), and "unshifts" older elements. unshift returns the
              new array length
              <strong> *mutates the array </strong>
            </p>

            <p>
              <code> .reverse( ) </code> -- returns the reversed array
              <strong> *mutates the array </strong>
            </p>
            <p>
              <code> .concat( ) </code> -- creates a new array by merging
              existing arrays
              <strong> *mutates the array </strong>
            </p>

            <h3> Changing Elements </h3>
            <p>
              cars[0] = "Toyota" -- changes "Kia" to "Toyota" from the cars
              array at position 0
            </p>
            <p>
              cars[cars.length] = "Toyota" -- easy way to append a new element
              to an array
            </p>

            <h3> Sorting Arrays</h3>
            <p>
              <code> .sort() </code> -- sorts an array alphabetically
              <ul>
                <li>by default, the sort() function sorts values as strings</li>
                <li>by default, the sort() function sorts values as strings</li>
                If numbers are sorted as strings, "25" is bigger than "100"
                because "2" is bigger than "1" -- because of this, sort() will
                produce incorrect results when sorting numbers
                <ul>
                  <li>
                    you can fix this by providing a
                    <strong> compare function -- </strong>
                    <code> cars.sort(function(a, b){"{return a - b}"};</code>
                  </li>
                </ul>
              </ul>
            </p>
            <p>
              <code> .reverse() </code> -- reverses the elements in an array
            </p>
          </div>
        }
      />
      <ContentCard
        contentTitle="Array Iteration "
        video="https://www.youtube.com/watch?v=Urwzk6ILvPQ"
        externalLink="https://www.w3schools.com/js/js_array_iteration.asp"
        content={
          <div>
            <h3> .forEach() </h3>
            <p>
              <code> .forEach() </code> calls a function (a callback function)
              once for each array element.
            </p>
            <br />
            <p>
              <code>
                const numbers = [1, 51, 23, 51]; <br />
                let txt = ""; <br />
                numbers.forEach(myFunction);
                <br />
                <br />
                function myFunction(value, index, array)
                {'{ txt += value + "<br/>"; }'}
              </code>
            </p>
            <br />
            <ul>
              <li> note: the .forEach() function takes three arguments: </li>
              <ul>
                <li> the item value </li>
                <li> the item index </li>
                <li> the array itself </li>
              </ul>
              <li> the above example uses only the value parameter</li>
            </ul>

            <h3> .map() </h3>
            <p>
              <code> .map()</code>
              <strong> creates a new array</strong> by performing a function on
              each array element.
            </p>
            <p>
              <code> .map()</code> does not execute the function for array
              elements without values and it
              <strong> does not change the original array. </strong>
            </p>
            <br />
            <p>
              <code>
                const numbers1 = [1, 51, 23, 51]; <br />
                const numbers2 = numbers1.map(myFunction);
                <br />
                <br />
                function myFunction(value, index, array)
                {"{ return value * 2; }"}
              </code>
            </p>
            <br />
            <h3> .filter( ) </h3>
            <p>
              <code> .filter()</code>
              <strong> creates a new array </strong> with array elements that
              passes a test.
            </p>
            <br />
            <p>
              <code>
                const numbers = [1, 51, 23, 51]; <br />
                const over18 = numbers.filter(myFunction);
                <br />
                <br />
                function myFunction(value, index, array)
                {"{ return value > 18; }"}
              </code>
            </p>
            <br />

            <h3> .reduce( ) </h3>
            <p>
              <code> .reduce()</code>
              runs a function on each array element to produce (reduce it to) a
              single value
            </p>
            <p>
              <code> .reduce()</code>works from left-to-right in the array and
              <strong> does not reduce the original array </strong>
            </p>
            <br />
            <p>
              <code>
                const numbers = [1, 51, 23, 51]; <br />
                let sum = numbers.reduce(myFunction);
                <br />
                <br />
                function myFunction(totoal, value, index, array)
                {"{ return total + value; }"}
              </code>
            </p>
            <br />
            <ul>
              <li> note: the .reduce() function takes four arguments: </li>
              <ul>
                <li> the total (initial value / previously returned value) </li>
                <li> the item value </li>
                <li> the item index </li>
                <li> the array itself </li>
              </ul>
            </ul>

            <h3> .every( ) </h3>
            <p>
              <code> .every()</code>
              checks if all array values pass a test.
            </p>
            <br />
            <p>
              <code>
                const numbers = [1, 51, 23, 51]; <br />
                const allOver18 = numbers.every(myFunction);
                <br />
                <br />
                function myFunction(value, index, array)
                {"{ return value > 18; }"}
              </code>
              <p>
                <small>
                  (the result of the above .every() function would return false)
                </small>
              </p>
            </p>
            <br />

            <h3> .some( ) </h3>
            <p>
              <code> .some()</code>
              checks if some array values pass a test.
            </p>
            <br />
            <p>
              <code>
                const numbers = [1, 51, 23, 51]; <br />
                const allOver18 = numbers.some(myFunction);
                <br />
                <br />
                function myFunction(value, index, array)
                {"{ return value > 18; }"}
              </code>
              <p>
                <small>
                  (the result of the above .some() function would return true)
                </small>
              </p>
            </p>
            <br />

            <h3> .indexOf( ) </h3>
            <p>
              <code> .indexOf()</code>
              searches an array for an element values and returns its position.
            </p>
            <br />
            <p>
              <code>
                const fruits = ["Apple, "Oranges", "Apple", "Mango"]; <br />
                const position = fruits.indexOf("Apple") + 1;
              </code>
              <p>
                <small>
                  (the result of the above .indexOf() function would return 1)
                </small>
              </p>
            </p>
            <br />
            <h3> .lastIndexOf( ) </h3>
            <p>
              <code> .lastIndexOf()</code>
              is the same as .indexOf(), but returns the position of the last
              occurence of the specified element.
            </p>
            <br />
            <p>
              <code>
                const fruits = ["Apple, "Oranges", "Apple", "Mango"]; <br />
                const position = fruits.lastIndexOf("Apple") + 1;
              </code>
              <p>
                <small>
                  (the result of the above .lastIndexOf() function would return
                  3)
                </small>
              </p>
            </p>
            <br />

            <h3> .find( ) </h3>
            <p>
              <code> .find()</code>
              returns the value of the first array element that passes a test
              function.
            </p>
            <br />
            <p>
              <code>
                const numbers = [1, 51, 23, 51]; <br />
                const first = numbers.find(myFunction);
                <br />
                <br />
                function myFunction(value, index, array)
                {"{ return value > 18; }"}
              </code>
              <p>
                <small>
                  (the result of the above .some() function finds the first
                  element that is larger than 18, in this example: 25)
                </small>
              </p>
            </p>
            <br />

            <h3> .findIndex( ) </h3>
            <p>
              <code> .findIndex()</code>
              returns the index of the first array element that passes a test
              function.
            </p>
            <br />
            <p>
              <code>
                const numbers = [1, 51, 23, 51]; <br />
                const first = numbers.findIndex(myFunction);
                <br />
                <br />
                function myFunction(value, index, array)
                {"{ return value > 18; }"}
              </code>
              <p>
                <small>
                  (the result of the above .some() function finds the index of
                  the first element that is larger than 18, in this example:
                  index 3)
                </small>
              </p>
            </p>
            <br />

            <h3> Array.keys( ) </h3>
            <p>
              <code> Array.keys()</code>
              returns an Array Iterator object with the keys of an array
            </p>
            <br />
            <p>
              <code>
                const fruits= ["banana", "orange", "apple", "mango"]; <br />
                const keys = fruits.keys();
                <br />
                <br />
                for (let x of keys)
                {"{ text += x; }"}
              </code>
              <p>
                <small>
                  (the result of the above .keys() function would return 0 1 2 3
                  )
                </small>
              </p>
            </p>
            <br />

            <h3> .includes( ) </h3>
            <p>
              <code> .includes()</code>
              allows us to check if an element is present in an array (including
              NaN, unlike indexOf)
            </p>
            <br />
            <p>
              <code>
                const fruits= ["banana", "orange", "apple", "mango"]; <br />
                fruits.includes("Mango"); // is true
                <br />
              </code>
            </p>
            <br />
          </div>
        }
      />
    </div>
  );
};

export default ArraysContent;
