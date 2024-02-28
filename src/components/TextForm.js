import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }
    const handleClearClick = ()=>{
        let newText=""
        setText(newText)
        props.showAlert("Text is cleared", "success")
    }
    const handleOnChnage = (event)=>{
        setText(event.target.value)
    }
    const handleCopy = ()=>{
      // console.log("I am copy")
      var text = document.getElementById("myBox")
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert("Text is copied to clipboard", "success")
    }
    const handleExtraSpaces = ()=>{
      let newText=text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Removed extra spaces", "success")
    }
    const [text, setText] = useState("Enter your text here");

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042723' }}  value={text} onChange={handleOnChnage}>
      <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'grey':'white', color: props.mode==='light'?'white':'#042723' }}  value={text} onChange={handleOnChnage}></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042723'}}  value={text} onChange={handleOnChnage}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box to preview it here"}</p>
    </div>
    </>
    
  )
}


