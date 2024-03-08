import React, { useState } from 'react'

function Arrrelated() {
// reverse a arr
  let [arev,setarev]=useState([{ id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
  ]);






  // insert specific position

let [ai,seta]=useState([{ id: 0, name: 'Marta Colvin Andrade' },
{ id: 1, name: 'Lamidi Olonade Fakeye'},
{ id: 2, name: 'Louise Nevelson'},
]);
let [i,seti]=useState('');

let nextid=ai.length-1;

let insertpos=(e)=>{
  let pos=1;
e.preventDefault();
// slice 0 to insert position porjonto nilo
// new val jata insert korta hoba
// ...ai.slice(insertpos)->mana insert to end porjonto
seta([...ai.slice(0,pos),{id:nextid++,name:i},...ai.slice(pos)]);
seti('');
}

// insert specific position end





// filter method start
// filer janno arr of obj darker na hola id pabone
let [ar,setar]=useState([{ id: 0, name: 'Marta Colvin Andrade' },
{ id: 1, name: 'Lamidi Olonade Fakeye'},
{ id: 2, name: 'Louise Nevelson'},
]);
// filter functio
let filtermathod=(id)=>{
 let x= ar.filter((e)=>{
return (e.id!==id);
 
})
 setar(x);
  
 }
// filter method end

 
 
//  map metod start
  // arr ta add
  //arr ka dhara
  let [arr,setarr]=useState([]);
  ///on change ta new state variable value store kor
  let [nam,setnam]=useState('');


//1. two process to map new vriable store koa only variable ka print
  let a=arr.map(e=>{
    return <p>{e}</p>
 });
//  map metod end


  return (
    <div>
{/* arr reverse */}
<h1>reverse</h1>
<button onClick={(e)=>{e.preventDefault();
//rev new arr return kora tai diretct setrev(arev.reverse()) kora jaba na
// main arr ka react a immutable dhara kaj korta hoba
  let rev=[...arev];
  setarev(rev.reverse())}}>reverse</button>
{arev.map(e=>{
  return <p>{e.name}</p>
})}









     {/* <inset ele specific pos */}
     <input type="text" value={i} onChange={(e)=>{e.preventDefault();seti(e.target.value)} }/>

<button onClick={insertpos}>insert</button>
{ai.map(x=>{
      return <p>{x.id}{x.name}</p>
     })
    }
         {/* <inset ele specific pos  end*/}


     
     
     
     
     
      {/*filter method  start*/}

<h1>ankur</h1>
{ar.map(y=>{

  return (<>
  <a>{y.name}</a>
  <button onClick={()=>filtermathod(y.id)}>delete</button>
  </>)
})}


      {/*filter method  end*/}

      {/* map method  sstart*/}
        <input type="text" value={nam} onChange={(e)=>{e.preventDefault();setnam(e.target.value)} }/>
        <button onClick={()=>{setarr([...arr,nam]);setnam('')}}>add</button>
        <p>{a}</p>

{/* 2.irect jsx a print */}
{/* {arr.map(e=>{
    return <p>{e}</p>
 })} */}

       {/* map method  end*/}


{/* insert specific position */}






     </div>
  )
}

export default Arrrelated
