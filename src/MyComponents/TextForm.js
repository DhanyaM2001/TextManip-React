import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = ()=>{
        // console.log("on click handle" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
        // console.log("on click handle" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCapitalize = ()=>{
        const arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        }
        const str2 = arr.join(" ");
        setText(str2);
    }


    const handleClear = ()=>{
        setText("");
        props.showAlert("Text cleared","danger");
    }
    const handleSplit = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ")) 
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);  
        props.showAlert("Text copied","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
        // console.log("on change handle");
    }
        return(
        <>   
        <div className='container' style = {{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <br></br>
        <h1 align="center" color="red">Welcom to TextManip</h1><br></br>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" style = {{backgroundColor : props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className={`btn btn-${props.btnColor} mx-2 my-2`}  onClick={handleUpClick}>Uppercase</button>
            <button className={`btn btn-${props.btnColor} mx-2 my-2`} onClick={handleLowClick}>Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCapitalize}>Capitalize</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleSplit}>Remove extra spaces</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-danger mx-2 my-2" onClick={handleClear}>Clear</button>
        </div>
        <div className='container' style = {{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your Text Summary</h2>
          
            <hr></hr>
            <p>{text.split(" ").filter(function(n) {return n!==''}).length} words and {text.length} chars</p>
            <hr></hr>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something"}</p>
        </div>
        </> 
    )
};
