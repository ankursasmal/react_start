import React, { useState } from 'react'
import { useImmer } from 'use-immer'

function Objectrelated() {
 let [position,setposition]=useState({x:0,y:0});
 //norml obj
 let [detail,setdetail]=useState({name:'ankur',add:'haldia',last:'sasmal'});
 //nested obj
 let [nest,setnest]=useState({name:"ankur",last:'sas',val:5,ad:{a:5,b:'haldia'}})
 //nested handel using useimmer insteed of use state
 let [nest1,setnest1]=useImmer({nam:"ankur",las:'sas',valu:5,addd:{ax:5,by:'haldia'}})
 
 return (
    <div>
      {/*normal object casa setobj ta {x:,y:} a forma value */}
{/* <div  style={{width:'300px',height:'300px',position:'relative',top:'400px',left:'0px'}}>
     <div onPointerMove={(e)=>{
     setposition({x:e.clientX,y:e.clientY})}} style={{ transform: `translate(${position.x}px, ${position.y}px)` ,position:'absolute',width:'10px',height:'10px',borderRadius:'50%',backgroundColor:'red'}}>

     </div>
     </div>       */}

{/*  object ka print according to input */}
<div>
  {/*  (1)a ccasa object ar akadhik propert madha pnly one change korla distrucutrkora likta hode
     below if(2) all propery ak sanga change korta chi sa casa upper example{x:e.clintx,y:e.clinty} */}
     
  <input type="text" value={detail.name} onChange={(e)=>setdetail({...detail,name:e.target.value})} />
  <input type="text" value={detail.last} onChange={(e)=>setdetail({...detail,last:e.target.value})} />
  <input type="text" value={detail.add} onChange={(e)=>setdetail({...detail,add:e.target.value})} />
<p>my name {detail.name} { " "} {detail.last} and add is {detail.add}</p>
</div>


{/** if nested object hoi sa casa
 *  if object under object hoi sa casa upper process single propertu ta change 
 */}
 <div>
 <h1>{nest.val}</h1>
 <br/>
     {/* a casa e nai only ref (nest.val) tai  (nest.val) respect a +1 korata hoba */}
    <button onClick={()=>setnest({
      ...nest,
      // akha na e nai tai nest.val ar respected operation korta hoba
       val: nest.val + 1,
    })}>click</button>
<br/>

  {/* noral ka axcess for single value change janno distructuring method  stedetail({...detail,name:e.target.value}) */}
 <input type="text" value={nest.name} onChange={(e)=>setnest({...nest,name:e.target.value})} />
  <input type="text" value={nest.last} onChange={(e)=>setnest({...nest,last:e.target.value})} />
  {/* nested ka a rakom likta hoi single ele change  setdetail({...detail,add:{...detail.add,a:e.target.value}})*/}
  <input type="text" value={nest.ad.a} onChange={(e)=>setnest({...nest,ad:{...nest.ad,a:e.target.value}})} />
  <input type="text" value={nest.ad.b} onChange={(e)=>setnest({...nest,ad:{...nest.ad,b:e.target.value}})} />
{/* but axcess alway same value={detail.add.a} */}
<p>{nest.name} {nest.last} {nest.ad.a} {nest.ad.b}</p>
 </div>

<div>
  {/* if i change all nested or normal obj value sama time then error 
         e ker vittita change hoba kora jaba na  not possible position cas x,y inter related tai hoa chilo*/}
 {/* <button onClick={(e)=>setnest({nest.na,me})}>change</button> */} {/*error */}

</div>


{/* 4. nested obj casa distructuring darkar nai use immr us korla hoba  
      a casa normal edit possible  axcss alwas same rule  {obj.objele.ele}
      */}
      {/* 1 step npm install use-immer 2nd  import { useImmer } from 'use-immer'
 */}
 <div> 
<h1>{nest1.valu}</h1>
 <br/>
     <button onClick={()=>setnest1(
      //mmust with respect to   nest1.valu=(nest1.valu+1) or akha assign kora jacha tai++ but 
      //with out immer setnest({nest.val:nest.val+1}) under obj not assignable tai ++ possible noi
       nest1=>{ nest1.valu++}
    )}>click</button>
<br/>

  <input type="text" value={nest1.nam} onChange={(e)=>setnest1(nest1=>{nest1.nam=e.target.value})} />
  <input type="text" value={nest1.las} onChange={(e)=>setnest1(nest1=>{nest1.las=e.target.value})} />
   <input type="text" value={nest1.addd.ax} onChange={(e)=>setnest1(nest1=>{nest1.addd.ax=e.target.value})} />
  <input type="text" value={nest1.addd.by} onChange={(e)=>setnest1(nest1=>{nest1.addd.by=e.target.value})} />
 <p>{nest1.nam} {nest1.las} {nest1.addd.ax} {nest1.addd.by}</p>
</div>
    </div>
  )
}

export default Objectrelated
