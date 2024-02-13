import React from 'react'

function CurlybucketUse() {
    let a=4;
    let b={name:"ankur",
roll:2,
reg:22100110065,height:100,
width:100
}
  return (
    //{{}} not a spacil syntex ex:-
    // style={{}} js code ka obj formate a represent kora 
    // style all propaty ka obj formate a axcess kora hocca
    
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
      <p>ankur:{b.name}</p>
      <p>{b.roll}</p>
      <p>{b.reg}</p>
      {/* as it is link darkar so */}
      <img src={"https://source.unsplash.com/random/?city,night"} alt=""height={b.height} width={b.width}/>
    
    {/* more then one {} use korla with string it 
    written under { `${} ${} ${}.jpg`} ex:-
    src={` ${url} ${size}.jpg `}
    */}
    
    
    
    </div>
  )
}

export default CurlybucketUse
