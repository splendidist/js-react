import React from "react";
import { useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
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

  return (
    <div>
      <Header />
      <Counter
        count={myCounterState}
        increment={incrementCounter}
        reset={resetCounter}
      />
      <h2>Hello, world!</h2>
      <p>This is some text</p>
      <p>This text will update on the server without having to refresh</p>
      <img
        src="https://koala.sh/api/image/v2-4sy7w-wrf7f.jpg?width=1024&height=1024&dream"
        alt="calico cat"
      />
      <Footer />
    </div>
  );
}

//start at 100 and decrease by 1 for each click
// const [myCounterState, setMyCounterState] = useState(100);

// function incrementCounter() {
//   setMyCounterState(myCounterState - 1);
// }
