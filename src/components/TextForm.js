import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    //   console.log("Upper case was clicked");
    let nwetext = text.toUpperCase();
    setText(nwetext);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLowClick = () => {
    //   console.log("Upper case was clicked");
    let nwetext = text.toLocaleLowerCase();
    setText(nwetext);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClearClick = () => {
    let nwetext = "";
    setText(nwetext);
    props.showAlert("Text Cleared!", "success");
  };
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let nwetext = text.split(/[ ]+/);
    setText(nwetext.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  const handleOnchange = (event) => {
    //   console.log("On change");
    setText(event.target.value);
  };

  // text = "new text" wrong way to update text
  // setText("new TExt"); Correct way to update text
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgb(19 70 110)" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopyText}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          words and {text.length} characters
        </p>

        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>

        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter something in text box to preview"}
        </p>
      </div>
    </>
  );
}
