import React from "react";
import { useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  //items list
  const [items, setItems] = useState([
    { id: 0, title: "Turnip" },
    { id: 1, title: "Artichoke" },
  ]);
  //set state of button to false
  const [isVisible, setIsVisible] = useState(false);
  // state set to 0
  const [myCounterState, setMyCounterState] = useState(0);

  //+1 to counter
  function incrementCounter() {
    setMyCounterState(myCounterState + 1);
  }

  //reset counter
  function resetCounter() {
    setMyCounterState(0);
  }
  //array of props
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = numbers.map((number) => number * 2);

  return (
    <div>
      {/* header component */}
      <Header />
      <h2>Array of numbers</h2>
      {doubledNumbers.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <h2>Button with Toggle</h2>
      {isVisible ? <p>True</p> : <p>False</p>}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      <h2>List of items</h2>
      <h3>Items</h3>
      <ul>
        {items.length ? (
          items.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <li>No items</li> //this line makes it so '0' doesnt appear on the page if there are no array items
        )}
      </ul>
      <h2>Counter Button</h2>
      <h3>click the number of cookies to reset the count</h3>
      <Counter
        count={myCounterState}
        increment={incrementCounter}
        reset={resetCounter}
      />
      <h2>Page Content</h2>
      <h3>Hello, world!</h3>
      <p>This is some text</p>
      <p>This text will update on the server without having to refresh</p>
      <img
        src="https://koala.sh/api/image/v2-4sy7w-wrf7f.jpg?width=1024&height=1024&dream"
        alt="calico cat"
      />
      {/* footer component */}
      <Footer />
    </div>
  );
}

//start at 100 and decrease by 1 for each click
// const [myCounterState, setMyCounterState] = useState(100);

// function incrementCounter() {
//   setMyCounterState(myCounterState - 1);
// }
