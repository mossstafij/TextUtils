import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>
    {
         
         let newText = text.toUpperCase()
         setText(newText)
         props.showAlert("Converted to UpperCase","success")
    }
    const handleLowClick = ()=>
    {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    const handleclearClick = ()=>
      {
          let newText = ''
          setText(newText)
          props.showAlert("Text Cleared","success")
      }
    const handleOnchange =(event)=>
        {
            
             setText(event.target.value)
        }
    const [text, setText] = useState('');
    
  return (
    <>

    
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 className='my-3'>{props.heading}</h1>
      <form>
        <div className="form-group">
            
            <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'black'}} id="textBox" rows="8"></textarea>
            <button type="button" disabled={text.length===0} className="btn btn-primary my-3 " onClick={handleUpClick}>Convert to Uppercase</button>
            <button type="button" disabled={text.length===0} className="btn btn-primary m-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button type="button" disabled={text.length===0} className="btn btn-primary m-1" onClick={handleclearClick}>Clear Text</button>
        </div>
     </form>

      </div>
     <div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
     <h2>Your Text Summary</h2>
     {/* <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>*/}
     <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
     <p>{0.008*text.split(" ").filter((element)=>{return element.length !==0}).length} minutes to read</p>
     <h3>Preview</h3>
     <p>{text.length>0?text:"Nothing to preview"}</p>

     </div>
    
     

    
         
    </>
  )
}
