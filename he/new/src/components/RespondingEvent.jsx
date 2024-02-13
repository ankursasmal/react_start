import React from 'react'

//e.stopPropagation() stops the event handlers attached to the tags above from firing.
//preventDefault() prevents the default browser behavior for the few events that have it.

export function Fun({mes,ph,onclick}){
    return(<> 
    <button onClick={(e)=>{;e.stopPropagation();onclick();}}>{ph}</button>
    <button onClick={()=>alert(mes)}>{mes}</button>
   </> )
}
function RespondingEvent() {
   return (
    <div>
        <Fun mes="ankur" ph={987654322} onclick={()=>{
alert("makaut");
    }}/>
     </div>
  )
}

export default RespondingEvent
