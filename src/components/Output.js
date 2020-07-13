import React from "react";

export default function Output({ text }) {
  return (
    <textarea
      onClick={(e) => e.target.select()}
      readOnly
      value={text || "amazon ipsum dolor"}
    />
  );
}
