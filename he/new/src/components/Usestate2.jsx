import React, { useState } from 'react'

function Usestate2({arr}) {
let [i,seti]=useState(0);
let [show,setshow]=useState(false);
let showfun=()=>{
    if(show==true){
        setshow(false);
    }
    else{
    setshow(true);
} 
}
 
  return (
    <div>
    <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
        <button onClick={()=>seti(i>=11?0:i+1)}> next</button>
                <button onClick={()=> seti(i<=0?arr.length-1:i-1)}> prev</button>

        {show?<h1>{arr[i].description}</h1>:null}
        <p>{'('} {i} of {arr.length}{')'}</p>
        <button onClick={showfun}>{show?"hide":"show"}</button>
        <img src={arr[i].url} alt="" />
        </div>  
    </div>
  )
}

export default Usestate2
