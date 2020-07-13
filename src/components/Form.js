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
        <label htmlFor="sentenceRange">
          Number of Sentences ({sentenceLength})
        </label>
        <input
          id="sentenceRange"
          type="range"
          min={1}
          max={15}
          value={sentenceLength}
          onChange={(e) => setSentenceLength(parseInt(e.target.value))}
        />
      </fieldset>
      <input type="submit" value="Generate" />
    </form>
  );
}
