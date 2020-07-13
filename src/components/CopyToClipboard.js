import React, { useState } from "react";

export default function CopyToClipboard({ contents }) {
  const [successful, setSuccessful] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contents).then(() => {
      setSuccessful(true);
    });
  };

  return (
    <button disabled={!contents} onClick={copyToClipboard}>
      <span role="img" aria-label="clipboard icon">
        📋
      </span>{" "}
      Copy to clipboard
      {successful && (
        <span role="img" aria-label="checkmark">
          {" "}
          ✅
        </span>
      )}
    </button>
  );
}
