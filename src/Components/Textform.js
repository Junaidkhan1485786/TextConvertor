import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const TextControlsExample = (props) => {
    const handleUpperclick = () => {
        let changeText = text.toUpperCase();   //Convert Text to UpperCase
        setText(changeText);
    }
    const handleOnchange = (event) => {
        console.log('times type in text');
        setText(event.target.value);
    }

    const handleLowerclick = () => {
        let changeText = text.toLowerCase();  //Convert Text to LowerCase
        setText(changeText);
    }
    const handleClearline = () => {
        let changeText = ("     ");   //Clear all text
        setText(changeText);
    }
    const handleClearExtraSpace = () => {  //Clear Extra Spaces
        setText(text.replace(/ +(?= )/g, ""))
    }
    const COPYCAT = (event) => {
        let newtext = navigator.clipboard.writeText(text); //copy current text
        console.log(newtext);
        alert("text copied successfully👌");

    };



    const [text, setText] = useState("Start typing, or copy and paste your document here...! 👇");
    return (
        <div>
            <Form>
                <h2>{props.heading}</h2>
                <Form.Group className="my-3">
                    <Form.Control as="textarea" value={text} onChange={handleOnchange} rows={6} />
                </Form.Group>
            </Form >
            <div className='btn btn-warning'>
                <button disabled={text.length===0} style={{ margin: "6px" }} className='btn btn-dark mx-1 my-1' onClick={handleUpperclick} >convert to UpperCase</button>
                <button disabled={text.length===0} onClick={handleLowerclick} className='btn btn-dark mx-1 my-1' >convert to LowerCase</button>
                <button disabled={text.length===0} style={{ margin: "6px" }} onClick={handleClearline} className='btn btn-danger mx-1 my-1' >Clear Text</button>
                <button disabled={text.length===0} style={{ margin: "6px" }} onClick={handleClearExtraSpace} className='btn btn-dark mx-1 my-1' >Clear Extra Space</button>
                <button disabled={text.length===0} style={{ margin: "6px" }} onClick={COPYCAT} className='btn btn-dark mx-1 my-1' >COPYCAT</button>
            </div>
            <div className='my-4'>
                <h2 > Total Length of My Text</h2>
                <p style={{ color: "blue" }}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words & {text.length} Characters</p>
                <p style={{ color: "blue" }}>{text.length>0?0.008 * text.split(" ").length:"0"}  Minutes Read</p> {/* 0.008 minutes read per Word */}
            </div>
            <h2>Preview</h2>
            <p style={{ color: "white", background: "#80b3ff", border: "5px solid cyan" }}>{text.length>0?text:"Enter your Text above👆 to check preview"}</p>
        </div>
    );
}

export default TextControlsExample;