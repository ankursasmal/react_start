import React from 'react'

function MapFilterReduceuse() {
    const p = [{id:4,
        Creola:' mathematician',
        Mario: 'chemist',
        Mohammad:' physicist',
         Subrahmanyan  : 'astrophysicist'
},{id:5,
    Creola:' mathematician',
    Mario: 'chemist',
    Mohammad:' physicist',
     Subrahmanyan  : 'astrophysicist'
},{id:6,
    Creola:' mathematician',
    Mario: 'chemist',
    Mohammad:' physicist',
     Subrahmanyan  : 'astrophysicist'
},{
    id:1,
    Creola:' mathematician',
    Mario: 'chemist',
    Mohammad:' physicist',
     Subrahmanyan  : 'astrophysicist'
},{
    id:3,
    Creola:' mathematician',
    Mario: 'chemist',
    Mohammad:' physicist',
     Subrahmanyan  : 'astrophysicist'
},];

//variable a val store kora return uppor map ka use
//return only variable ka use;

// let x=p.map(e=>{
//     return (<div><p>{e.Creola}{  }{e.Mario}{  }{e.Mohammad}</p> <br/></div>)
//   })

//filter not working
// let v=p.filter(e=>{
//     return <p key={e.id}>{ e.Mario==='chemist'}</p>
// })
  return (
    <div>
        {/* 1. return uppor map store kora use */}
      {/* <p>{x}</p> */}


    {/*2. return undeer e map method ka use kora direct use */}
    {p.map(e=>{
   return (<div><p>{e.Creola}{  }{e.Mario}{  }{e.Mohammad}</p> <br/></div>)
  })}

{/* filter same as map only conition ude in return  ex:- */}
 {/*filter not working */}
  {/* <p>{v}</p> */}
    </div>
  )
}

export default MapFilterReduceuse
