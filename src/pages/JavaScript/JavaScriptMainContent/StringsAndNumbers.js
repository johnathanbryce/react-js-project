import ContentCard from "../../../components/UI/ContentCard";

const StringsAndNumbersContent = () => {
  return (
    <div>
      <ContentCard
        contentTitle="Strings "
        video="https://www.youtube.com/embed/09BwruU4kiY"
        externalLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
        content={
          <div>
            <p>
              Strings are 0-based and can be treated similar to arrays (i.e. you
              can use methods like .indexOf(), .length, etc).
            </p>
            <p>
              JS strings are primitive values, created by literals. As such, It
              is impossible to mutate strings.
            </p>
            <h3> Common String Methods </h3>
            <p>
              Methods and properties are avaible to strings because JS treats
              strings as objects when executing methods and strings.{" "}
            </p>
            <ul>
              <h4>Misc: </h4>
              <li>
                <code> concat()</code> -- returns two or more joined strings
              </li>
              <li>
                <code> includes()</code> -- returns if a string contains a
                specified value
              </li>

              <li>
                <code>match()</code> -- searches a string for a value, or
                regular expression, and returns the matches
              </li>
              <li>
                <code> repeat()</code> -- returns a new string with a number of
                copies of a string
              </li>
              <li>
                <code> replace()</code> -- searches a string for a value, or a
                regular expression, and returns a string where teh values are
                replaced
              </li>

              <li>
                <code> search()</code> -- searches a string for a value, or
                regular expression, and returns the index (position) of the
                match
              </li>

              <li>
                <code> split()</code> -- splits a string into an array of
                substrings
              </li>

              <li>
                <code> toString()</code> -- returns a string or a string object
                as a string
              </li>
              <li>
                <code> trim()</code> -- returns a string with removed
                whitespaces
              </li>
              <h4>String Search: </h4>
              <li>
                <code> startsWith()</code> -- checks whether a string begins
                with specified characters
              </li>
              <li>
                <code> endsWith()</code> -- returns if a string ends with a
                specified value
              </li>

              <li>
                <code> indexOf()</code> -- returns the index (position) of the
                first occurence of a value in a string
              </li>

              <li>
                <code> lastIndexOf()</code> -- returns the index (position) of
                the last occurence of a value in a string
              </li>

              <br />
              <br />

              <h4> Extracting String Parts: </h4>
              <li>
                <code> slice(start, end)</code> -- extracts a part of a string
                and returns a new string
              </li>
              <li>
                <code> substr(start, length)</code> -- extracts a number of
                characters from a string, from a start index (position)
              </li>
              <li>
                <code> substring(start, end)</code> -- extracts characters from
                a string, between two specified indices (positions)
              </li>
              <br />
              <br />
              <h4> Converting to Upper and Lower Case: </h4>
              <li>
                <code> toLowerCase()</code> --returns a string converted to
                lowercase letters
              </li>
              <li>
                <code> toUpperCase()</code> -- returns a string converted to
                uppercase letters
              </li>
            </ul>
          </div>
        }
      />
      <ContentCard
        contentTitle="Numbers"
        video="https://www.youtube.com/embed/TD3Pfuxgnuc"
        externalLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"
        content={
          <div>
            <p>
              {" "}
              Numbers are primitive values created from literals. JS numbers are
              always stored as double precision floating point numbers which
              stores numbers in 64 bits.{" "}
            </p>

            <h3> Common Number Methods </h3>
            <ul>
              <li>
                <code> isNaN()</code> --checks whether a value is Number.NaN
              </li>
              <li>
                <code> toFixed()</code> -- formats a number with x number of
                digits after the decimal point
              </li>

              <li>
                <code>toString()</code> -- converts a number into a string
              </li>
              <li>
                <code> valueOf()</code> -- returns the primitive value of a
                number
              </li>
              <li>
                <code> isInteger()</code> --checks whether a value is an integer
              </li>
              <h4> Converting Variables to Numbers: </h4>
              <li>
                <code> Number()</code> -- returns a number, converted from its
                argument
              </li>
              <li>
                <code> parseFloat()</code> -- parses its argument and returns a
                floating point number
              </li>
              <li>
                <code> parseInt()</code> -- parses its argument and returns an
                integer
              </li>
            </ul>

            <h3> Common Number Properties </h3>
            <p> note: number properties cannot be used on variables </p>
            <ul>
              <li>
                <code> MAX_VALUE </code> -- returns the largest number possible
                in JS
              </li>
              <li>
                <code> MIN_VALUE </code> -- returns the smallest number possible
                in JS
              </li>

              <li>
                <code>NaN</code> -- represents a "Not-a-Number" value
              </li>
              <li>
                <code> constructor </code> -- returns the function that created
                JS's Number prototype
              </li>
              <li>
                <code> prototype</code> -- allows you to add properties and
                methods to an object
              </li>
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default StringsAndNumbersContent;
