import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpperCaseClick = () => {
        setText(text.toUpperCase());
        props.ShowAlert('Converted to Upper Case.', 'success');
    }

    const handleLowerCaseClick = () => {
        setText(text.toLowerCase());
        props.ShowAlert('Converted to Lower Case.', 'success');
    }

    const handleClearTextClick = () => {
        setText("");
        props.ShowAlert('Cleared text.', 'success');
    }

    const handleCopyTextClick = () => {
        navigator.clipboard.writeText(text);
        props.ShowAlert('Text copied to clip board.', 'success');
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.ShowAlert('Extra spaces got removed.', 'success');
    }

    


  return (
    <div>
        <div className='container my-3'>
            <h2>{props.heading}</h2> 
            <div className="my-3">            
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'Dark'? 'black': 'white', color: props.mode === 'Dark'? 'white': 'black'}} onChange={handleOnChange} id="myText" rows="8"></textarea>
                <button disabled = {text.length === 0} className='btn btn-primary my-3 mx-2' onClick={handleUpperCaseClick}>Change to UpperCase</button>
                <button disabled = {text.length === 0} className='btn btn-primary my-3 mx-2' onClick={handleLowerCaseClick}>Change to UpperCase</button>
                <button disabled = {text.length === 0} className='btn btn-primary my-3 mx-2' onClick={handleClearTextClick}>Clear Text</button>
                <button disabled = {text.length === 0} className='btn btn-primary my-3 mx-2' onClick={handleCopyTextClick}>Copy Text</button>
                <button disabled = {text.length === 0} className='btn btn-primary my-3 mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div> 
          </div>
        <div className="container my-3" style={{color: props.mode === 'Dark'? 'white': 'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes read </p>
            <h2>Preview </h2>
            <p>{text.length>0? text: 'Nothing to preview'}</p>
        </div>
    </div>
  )
}
