import React, { useState } from 'react'

function Incrementset() {
  let [num,setnum]=useState(0);
    return (
    <div>
      <h1>{num}</h1>
    
    {/*in this process only increment by one */}


{/* <button onClick={()=>{
   
    setnum(num+1);
        setnum(num+1);
        setnum(num+1);
        setnum(num+1);
        setnum(num+1);   

}}>increment+5</button>       */}
{/* in this ce function call hoccha under a function ti val direct update hioa jacha */}
<button onClick={()=>{
   
   setnum(num+1);
       setnum(num=>num+1);
        //upor ta (num=>num+1) function call

}}>increment+2</button>    
       </div>

  )
}

export default Incrementset
