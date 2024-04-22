import React from "react";

function MyButton() {
  return <button>I'm a button</button>;
}

export default function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is some text</p>
      <p>This text will update on the server without having to refresh</p>
      <MyButton />
      <img
        src="https://koala.sh/api/image/v2-4sy7w-wrf7f.jpg?width=1024&height=1024&dream"
        alt="calico cat"
      />
    </div>
  );
}
