import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!", "success");
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!", "success");
  }
  const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Textbox has been cleared!", "success");
  }
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Textbox content Copied!", "success");
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  }
  const [text, setText] = useState("Enter your text here");
  return (
    <>
    <div className="container my-4" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light' ? 'white' : '#454545', color: props.mode==='light' ? 'black' : 'white'}} id="myBox" rows="5"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h4>Preview</h4>
      <p>{text.length>0 ? text: "Enter text to preview"}</p>
    </div>
    </>
  )
}

TextForm.defaultProps = {
  title: "Email Address",
  heading: "Enter your Shit here"
}

TextForm.prototypes = {
  title: PropTypes.string,
  heading: PropTypes.string
}