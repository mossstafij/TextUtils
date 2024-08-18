import React, { useState } from 'react'

export default function About(props)
{
/*
    const [myStyle, setMyStyle] = useState(
    {
        color:'black',
        backgroundColor:'white'
        
    }
    )
   */
  let myStyle ={
    color: props.mode==='dark'?'white':'#042743',
    backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white',
    //border:"2px solid",
    //borderColor: props.mode==='dark'?'white':'black'
  } 
    
  return (

    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='my-3'>About Us</h1>
        <div>
                    <div className="accordion" id="accordionExample">
            <div className="accordion-item"style={myStyle}>
                <h2 className="accordion-header"style={myStyle}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"style={myStyle}>
                    <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita inventore nihil error aliquid hic! Omnis sed aut modi nostrum eveniet eius repellat id iste ut expedita in, perferendis, sunt dolor.
                </div>
                </div>
            </div>
            <div className="accordion-item"style={myStyle}>
                <h2 className="accordion-header"style={myStyle}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={myStyle}>
                    <strong>Free To Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample"style={myStyle}>
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem maxime dolor dolores ea veniam! Mollitia facilis ad a reprehenderit repudiandae, beatae velit enim esse, dolore itaque est ratione. Quibusdam.
                </div>
                </div>
            </div>
            <div className="accordion-item"style={myStyle}>
                <h2 className="accordion-header"style={myStyle}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={myStyle}>
                    <strong>Browser Compatibility</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non praesentium culpa nam veniam eaque tenetur labore quis inventore itaque consectetur dignissimos dolores nobis illum eligendi, nisi repellendus aspernatur! Dolores, repellendus.
                </div>
                </div>
            </div>
            </div>
      
    </div>
    
    </div>
                
  )
}
