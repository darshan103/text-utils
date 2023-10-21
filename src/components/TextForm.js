import React from 'react'
import { useState } from 'react'

function TextForm(props) {

    const handleOnChange = (event) =>{
        console.log("On Change")
        setText(event.target.value)
    }

    const handleClickUC = () =>{
        console.log("Your text is : "+ text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("The text is converted into uppercase", "Success")
    }

    const handleClickLC = () =>{
        console.log("Your text is : "+ text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("The text is converted into lowercase", "Success")
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "Success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "Success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "Success");
    }

    const trimText = (text) => { 
        let count = 0
        for (let i = 0; i < text.split(" ").length; i++) {
            if (text.split(" ")[i] === "") {
                count++
            }
        }
        return text.split(" ").length - count
    }

    const trimWord = (text) => { 
        let count = 0
        for (let i = 0; i < text.split(" ").length; i++) {
            count+=text.split(" ")[i].length
        }
        return count
    }

    const [text, setText] = useState("Enter the text to preview. Please write correct the words.")

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className='mt-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#666666':'white', color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows={8} />
            </div>
            <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} px-2 my-1`} onClick={handleClickUC}>Convert to Uppercase</button>
            <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} px-2 mx-2 my-1`} onClick={handleClickLC}>Convert to Lowercase</button>
            <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} px-2 my-1`} onClick={handleClearClick}>Clear Text</button>
            <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} px-2 mx-2 my-1`} onClick={handleCopy}>Copy Text</button>
            <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} px-2 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
             <span className='display-6'><b className='h1'>Summary of the text:</b> {trimText(text)} words and {trimWord(text)} characters</span>
             <div className='lead'>{0.008 * trimText(text)} minutes are required to read this text</div>
             <div className='my-3'><span className='h1'>Preview text: </span><br/>{text.length>0?text:"Enter the text to preview. Please write correct words."}</div>
        </div>
        </>
    )
}

export default TextForm

