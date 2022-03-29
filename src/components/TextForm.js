import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("upper case was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = ()=>{
    console.log("upper case was clicked"+text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
  }
 const handleOnChange = (event)=>{
    console.log("upper case was clicked");
    setText(event.target.value); 
  }

  const handleOnClear = (event)=>{
   let newText=" ";
    setText(event.target.value); 
  }
  const [text, setText] = useState(" ");
 
  return (
    <>  
    <div className='container'>
    <h1>{props.heading }</h1>
<div className="mb-3">

  <textarea className="form-control" value={text} onChange={handleOnChange}
     id="myBox" rows="7"></textarea>
  </div>
  <button className='btn btn-primary mx-3' onClick={handleUpClick}>Convert to Upper Case</button>
  <button className='btn btn-primary mx-3' onClick={handleLowClick}>Convert lower Case</button>
  <button className='btn btn-primary mx-3' onClick={handleOnClear}>Clear Everything</button>

    </div>
     
    <div className="container my-3">
    <h2>Your text summary</h2>
     <p>{text.split(" ").length} words and {text.length} characters</p>
    <p> it takes {0.008*text.split(" ").length} minutes to read on average</p>
    <h3>Preview</h3>
    <p>{text}</p>
    </div>
    </> 
   
  )
}
