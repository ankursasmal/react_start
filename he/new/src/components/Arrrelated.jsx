import React, { useState } from 'react'

function Arrrelated() {
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
        <button onClick={()=>{setarr([...arr,nam])}}>add</button>
        <p>{a}</p>

{/* 2.irect jsx a print */}
{/* {arr.map(e=>{
    return <p>{e}</p>
 })} */}

       {/* map method  end*/}


     </div>
  )
}

export default Arrrelated
