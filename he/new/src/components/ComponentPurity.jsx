import React from 'react'
// Deterministic: The function produces the same result for the same set of inputs, regardless of external factors.

// No Side Effects: Pure functions do not modify any external state or have observable side effects. They only depend on their input parameters.
  
// Now your component is pure, 
//as the JSX it returns only depends on the guest prop.

//wi5h out condition function only return arg val call pure function
//value pass a same data anar janno usew hoi
//single word sama input a same output
export function Fun({a}){
 return a;
}
function ComponentPurity() {
  return (
    <div>
      <Fun a={1}/>
      <Fun a={2}/>
      <Fun/>
    </div>
  )
}

export default ComponentPurity
