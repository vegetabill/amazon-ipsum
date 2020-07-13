import React, { useState } from "react";
import generator from "../generator";

export default function Form({ updateText }) {
  const [sentenceLength, setSentenceLength] = useState(5);

  const onSubmit = (e) => {
    e.preventDefault();
    const paragraph = generator.paragraph(sentenceLength);
    updateText(paragraph);
  };

  return (
    <form action="#generate" onSubmit={onSubmit}>
      <h3>Paragraph Generator</h3>

      <fieldset>
        <label for="sentenceRange">Number of Sentences</label>
        <input
          id="sentenceRange"
          type="range"
          min={1}
          max={20}
          value={sentenceLength}
          onChange={(e) => setSentenceLength(e.target.value)}
        />
        ({sentenceLength})
      </fieldset>
      <input type="submit" value="Generate" />
    </form>
  );
}
