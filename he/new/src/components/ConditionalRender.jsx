import React from 'react'
import FristreactApp from './FristreactApp';
import PropsPass from './PropsPass';

function ConditionalRender(props) {
    let a=true;
    let b=false;

//outer condition

//     if(a){
//         //alwas return <> html tag in react conditional
//         return <li>ankur</li>
//     }
//     else{
//    //alwas return <> html tag in react conditional

//         return <li>sasmal</li>
//     }

  return (
    <div>
        {/*inner condition */}
        {/* <p>  {a?"anku":"sasmla"} </p> */}

        {/* &&  if a=true sa  casa prpps.a kai print korba*/}
        {/* && condition a { under props.a with out{}  because 
      baira { acha }  under ja likbo with otu cuutly bucket} */}
        {a && props.a }


{/* || casa only  b=false hola props.a print hoba 
{under joto props.a ta with out {} because whole bira {} acha}
*/}
{b || props.a}

{/* in tarnrry or && or || {a?<app/>:<app1/>} {a&& <aPP/> value jamon }
kora jai tamon <component /> ka o kora jai */}
{b || <FristreactApp/>}

{/* props also pass  */}
{a && <PropsPass obj={{a:"ankur",b:9}}/>}
     </div>
  )
}

export default ConditionalRender
