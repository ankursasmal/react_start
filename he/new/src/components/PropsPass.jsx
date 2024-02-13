import React from 'react'
// value diirect use korla { under val pass}
 
// function PropsPass({a,b,c,d}) {
//   return (
//     <div>
//       <p>{a} </p>
//       <p>{b}</p>
//       <p>{c}</p>
//       <p>{d}</p>
//     </div>
//   )
// }


// props a madhama use korla with out {} only 
//agument props keyword props . kora axcess
 // function PropsPass(props) {
//     return (
//       <div>
//         <p>{props.a} </p>
//         <p>{props.b}</p>
//         <p>{props.c}</p>
//         <p>{props.d}</p>
//       </div>
//     )
//   }


// poprs throuh obj ka o pass kora jai
//normaly {obj } ka o resive kora jai

function PropsPass(props) {
    return (
      <div>
        <p>{props.obj.a} </p>
        <p>{props.obj.b}</p>
        <p>{props.obj.c}</p>
        <p>{props.obj.d}</p>
      </div>
    )
  }
  
  

export default PropsPass
