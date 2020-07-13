import React, { useState } from "react";
import copyIcon from "../assets/copy-icon.svg";

export default function CopyToClipboard({ contents }) {
  const [successful, setSuccessful] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contents).then(() => {
      setSuccessful(true);
    });
  };

  return (
    <>
      <button disabled={!contents} onClick={copyToClipboard}>
        <img src={copyIcon} alt="copy icon" /> Copy to clipboard
      </button>
      <span>
        {successful && (
          <span>
            <span role="img" aria-label="checkmark">
              {" "}
              ✅
            </span>
            Copied!
          </span>
        )}
      </span>
    </>
  );
}
