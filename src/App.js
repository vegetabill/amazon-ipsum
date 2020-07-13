import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Output from "./components/Output";
import CopyToClipboard from "./components/CopyToClipboard";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="app">
      <Form updateText={setText} />
      <section className="output">
        <Output text={text} />
        <CopyToClipboard contents={text} />
      </section>
    </div>
  );
}

export default App;
