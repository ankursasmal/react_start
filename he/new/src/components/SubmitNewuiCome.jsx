import React, { useState } from 'react'

function SubmitNewuiCome() {
     let [val,setval]=useState("");
     let [eml,seteml]=useState('');
     let [show,setshow]=useState(false);
     //select option change according to option
     let [name,setname]=useState('ankur');
//trafic light system
let [light,setlight]=useState('stop')
//trafic function
function traffic(){
  if(light==='stop'){
  setlight('run');

}
else{
  setlight('stop');
}
}
     //two process if condition through and tarnearyprocsee
     //1 if true return 
    //  if(show){
    //  return <p>ankur with react</p>
    //  }
  return (
    <div>
      {/* 1.if condition through true ta appear and false if condition work
        <form onSubmit={(e)=>{e.preventDefault();setshow(true)}}>
          <textarea value={val} onChange={(e)=>setval(e.target.value)}></textarea>
        <button type='submit'>submit</button>
        </form> */}

{/*2 no process of true ta appear and false disapper*/}
{show==false?<form style={{display:'flex',flexDirection:'column'}} onSubmit={(e)=>{e.preventDefault();setshow(true)}}>
         name: <input value={val} onChange={(e)=>setval(e.target.value)}></input>
         email: <input value={eml} onChange={(e)=>seteml(e.target.value)}></input>

        <button type='submit'>submit</button>
        </form>: 
        <center style={{widows:'200px',height:'300px',
      border:'1px solid black',marginTop:'30px'}}>
        <div style={{display:'flex',alignItems:'center'}}> 
        <p>name:</p>
        <p>{val}</p>
        </div>
        <div style={{display:'flex',alignItems:'center'}}> 
        <p>email:</p>
        <p>{eml}</p>
        </div>
<p>status success</p>
        </center>}


{/* select the value and work with it */}
<div style={{display:'flex',padding:'10px 12px',flexDirection:'column'}}>
<label htmlFor="">To</label>
<select name="" id="" onChange={(e)=>setname(e.target.value)}>
<option>ankur</option>
<option>sasmal</option>
<option>shank</option>
<option>makaut</option>
<option>ankur</option>
<option>ankur</option>
<option>ankur</option>

</select>
<button onClick={()=>alert(`mesage for ${name}`)}>send</button>

</div>


{/*button click  trafic light */}

<div style={{display:'flex',padding:'10px 12px',flexDirection:'column'}}>
<button onClick={traffic}>change to{light=="stop"?"run":"stop"}</button>
{/* style obj contain kora colotr a ternery lagala {{ under {} laganor darkar nai}} */}
<h1  style={{color:light==='run'?'green':'red'}}>{light}</h1>
</div>

    </div>


  )
}

export default SubmitNewuiCome
