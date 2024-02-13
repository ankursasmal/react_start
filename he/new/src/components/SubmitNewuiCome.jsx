import React, { useState } from 'react'

function SubmitNewuiCome() {
    let [val,setval]=useState("");
  return (
    <div>
      <textarea name="" id="" cols="30" rows="10" value={ val} onChange={()=>{
        e.preventDefault();
        
      }}></textarea>
    </div>
  )
}

export default SubmitNewuiCome
