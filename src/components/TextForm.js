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
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
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
  let no = text.split(" ");
  console.log(no);
  let withoutspaces = Array.from(text);
  // console.log(withoutspaces);
  let i = 0;
  withoutspaces.forEach((element) => {
    if (element !== " ") {
      i = i + 1;
    }
  });
  // console.log(i)
  let msg;
  let msg2;
  // eslint-disable-next-line
  if (no == "") {
    msg = <p> 0 Minutes read</p>;
  } else {
    msg = <p>{0.008 * text.split(" ").length} Minutes read</p>;
  }
  // eslint-disable-next-line
  if (no == "") {
    msg2 = <p>0 wor ds and 0 characters</p>;
  } else {
    msg2 = (
      <p>
        {text.split(" ").length} words and {text.length} characters with space
      </p>
    );
  }
  // text = "new text" wrong way to update text
  // setText("new TExt"); Correct way to update text
  return (
    <>
      <div className = "container" style = {{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="mybox"
            rows="8"
            style = {{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>
          Copy
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style = {{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{msg2}</p>
        {/* <p>{0.008 * text.split(" ").length} Minutes read</p> */}
        <p>{msg}</p>
        <p>{i} characters without space</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in text box to preview'}</p>
      </div>
    </>
  );
}
