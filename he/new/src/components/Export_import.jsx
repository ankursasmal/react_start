import React from 'react'

// export liktha pari ba noe pari 
// same file a use korla ex[otr likhar darkar nai
// if it use other file then must export  na ho use 
//kora ja ba na other file a

// with out argument

 export function Fun(){
    return (
        <>
        <p>Ankur sasmal</p>
        </>
    )
}
// with argument
 export function Fun1({a,b}){
    //direct props name use korla { under write}
    return (
        <>
        <p>{a+b}</p>
        </>
    )
}

//if i want to import from ohter file

function Export_import() {
  return (
    <div>
      <Fun/>
      {/* a="5" b="5" string arg pass 55 but js 
      arg pass under a={val}  b={val} and 10 */}
      <Fun1 a={5} b={5}></Fun1>
      {/* if i made this fun in differtent file then 
       it should be import then use under return  */}
    </div>
  )
}

export default Export_import
