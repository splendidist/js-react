import React from "react";
import MyButton from "./Button";

function Counter({ count, increment, reset }) {
  return (
    <div>
      <p onClick={reset}>{count} cookies.</p>
      <MyButton increment={increment} />
    </div>
  );
}

export default Counter;
