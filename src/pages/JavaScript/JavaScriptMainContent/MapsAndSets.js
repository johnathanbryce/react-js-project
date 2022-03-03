import ContentCard from "../../../components/UI/ContentCard";

const MapsAndSetsContent = () => {
  return (
    <div>
      <ContentCard
        contentTitle="Maps"
        video="https://www.youtube.com/embed/G3BS3sh3D8Q"
        externalLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"
        content={
          <div>
            <p>
              A Map holds key-value pairs where the keys can be any datatype.
            </p>
            <p> A Map remembers the original insertion order of the keys. </p>
            <p> A Map has a property that represents the size of the map.</p>
            <h3> Map Methods: </h3>
            <ul>
              <li>
                <code> new Map()</code> -- creates a new Map object
              </li>
              <li>
                <code> set()</code> -- sets the value for a key in a Map
              </li>
              <li>
                <code> get()</code> -- gets the value for a key in a Map
              </li>
              <li>
                <code> clear()</code> -- removes all the elements from a Map
              </li>
              <li>
                <code> delete()</code> -- removes a Map element specified by a
                key
              </li>
              <li>
                <code> has()</code> -- returns true if a key exists in a Map
              </li>
              <li>
                <code> forEach()</code> -- invokes a callback for each key/value
                pair in a Map
              </li>
              <li>
                <code> entries()</code> -- returns an iterator object with the
                [key, value] pairs in a Map
              </li>
              <li>
                <code> keys()</code> -- returns an iterator object with the keys
                in a Map
              </li>
              <li>
                <code> values()</code> -- returns an iterator object of the
                values in a Map
              </li>
            </ul>
            <h3> How to Create a Map </h3>
            <p> You can create a JS Map by: </p>
            <ul>
              <li>
                passing an Array to <code> new Map()</code>
                <br />
                <p>
                  <code>
                    const fruits = new Map([
                    <br />
                    ["apples", 500)], <br />
                    ["bananas", 300)], <br />
                    ["oranges", 200)], <br />
                    ]);
                  </code>
                </p>
              </li>
              <li>
                create a Map and use <code> Map.set()</code>
                <p>
                  <code>
                    const fruits = new Map([
                    <br />
                    fruits.set("apples", 500); <br />
                    fruits.set("bananas", 300); <br />
                    fruits.set("oranges", 200); <br />
                  </code>
                </p>
              </li>
            </ul>
            <h3> Maps vs Objects </h3>
            <p>
              {" "}
              <code> typeof </code> on a Map returns "object"
            </p>
            <h4>Maps </h4>
            <ul>
              <li> directly iterable </li>
              <li> has a size property </li>
              <li> keys can be any datatype </li>
              <li> keys are ordered by insertion </li>
              <li> does not have default keys </li>
            </ul>
            <h4>Objects </h4>
            <ul>
              <li> not directly iterable </li>
              <li> does not have a size property </li>
              <li> keys must be Strings (or Symbols)</li>
              <li> keys are not well ordered </li>
              <li> has default keys </li>
            </ul>
          </div>
        }
      />

      <ContentCard
        contentTitle="Sets"
        video="https://www.youtube.com/embed/wl8u02IdVxo"
        externalLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"
        content={
          <div>
            <p>A Set is a collection of unique values.</p>
            <p> A Set has no keys </p>
            <p>
              {" "}
              Each value can only occur <strong>once</strong> in a Set.{" "}
            </p>
            <p> A Set can hol any value of any data type.</p>
            <h3> Set Methods: </h3>
            <ul>
              <li>
                <code> new Set()</code> -- creates a new Set object
              </li>
              <li>
                <code> add()</code> -- adds a new element to the Set
              </li>
              <li>
                <code> delete()</code> -- removes an element from a Set
              </li>

              <li>
                <code> clear()</code> -- removes all the elements from a Set
              </li>

              <li>
                <code> has()</code> -- returns true if a value exists in a Set
              </li>
              <li>
                <code> forEach()</code> -- invokes a callback for each element
              </li>
              <li>
                <code> values()</code> -- returns an Iterator with all the
                values in a set
              </li>

              <li>
                <code> keys()</code> -- same as values()
              </li>
              <li>
                <code> entries()</code> -- returns an Iterator with the [value,
                value] pairs from a Set
              </li>
            </ul>

            <h3> How to Create a Set </h3>
            <p> You can create a JS Set by: </p>
            <ul>
              <li>
                passing an Array to <code> new Set()</code>
                <br />
                <p>
                  <code>const letters= new Set(["a", "b", "c"]);</code>
                </p>
              </li>
              <li>
                create a Set and use <code>add() to add values </code>
              </li>
              <li>
                create a Set and use <code>add() to add variables</code>
              </li>
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default MapsAndSetsContent;
