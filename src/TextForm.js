import React , { useState } from 'react';


export default function Textform(props) {
    const upClick =()=>{
        const newText = text.toUpperCase();
        setText(newText);
    }
    const lowClick =()=>{
        const newText = text.toLowerCase();
        setText(newText);
    }
    const capClick =()=>{
        const str = text;
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
        
        setText(str2);
    }
    const onChangeFunction = (event) =>{
        console.log("On Chnage function Called");
        setText(event.target.value);

    }
    const [text, setText] = useState("");

    return (
            <div className="container">
                <div className="my-3">
                    <h2  >Enter Your Text Here</h2>
                    <textarea value={text} onChange={onChangeFunction} placeholder='Enter Text Here' className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                    <button className='my-3 btn-primary btn' onClick={upClick}>
                        To Upper Case
                    </button>
                    <button className='my-3 mx-2 btn-danger btn' onClick={lowClick}>
                        To Lower Case
                    </button>
                    <button className='my-3 mx-2 btn-success btn' onClick={capClick}>
                        To Capitalize Case
                    </button>
                </div>

                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} Characters</p>
                <p>{0.004 * text.split(" ").length} minutes required to read this text</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            
      
    );
};

