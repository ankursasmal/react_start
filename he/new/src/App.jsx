 import React from 'react'
import FristreactApp from './components/FristreactApp'
import Export_import, { Fun } from './components/Export_import'
import CurlybucketUse from './components/CurlybucketUse'
import PropsPass from './components/PropsPass'
import ConditionalRender from './components/ConditionalRender'
import MapFilterReduceuse from './components/MapFilterReduceuse'
import ComponentPurity from './components/ComponentPurity'
import RespondingEvent from './components/RespondingEvent'
import UseStatehook1 from './components/UseStatehook1'
import SubmitNewuiCome from './components/SubmitNewuiCome'
//  for normla impot {under} and default import {with out}.
 function App() {
   return (
      <>
      {/* 1 start*/}

      {/* <FristreactApp/> */}
      {/* 1 end */}

      {/* 2  start*/}
      {/* <Export_import/> */}
      {/* normal export 1` file only one default export */}
      {/* <Fun/> */}
      {/* 2 end */}

      {/* 3 start */}
      {/* <CurlybucketUse/> */}
      {/* 3 end */}

      {/* 4 start  */}
      {/* a casa a,b,c,d ka direct use */}
{/* <PropsPass a="ankur" b={"sasmal"} c="4" d={5}/> */}
{/* props ka indirect use */}
{/* <PropsPass a="ankur" b={"sasmal"} c="4" d={5}/> */}
{/*  props through obj pass*/}
{/* <PropsPass obj={ {a:'ankur',b:6,c:'sasmal',d:"9"} }  /> */}
{/* 4 end */}

{/* 5 start*/}
{/* <ConditionalRender a={556666}/> */}
{/*5 end */}

{/* 6 start */}
{/* <MapFilterReduceuse/> */}
{/* 6end */}

{/* 7 start*/}
{/* <ComponentPurity/> */}
{/* 7 end*/}

{/* 8Start */}
{/* <RespondingEvent/> */}
{/*8 end */}

{/*9 start */}
{/* <UseStatehook1/> */}
{/*9 end */}

{/*10 start */}
<SubmitNewuiCome/>
      </>
   )
 }
 
 export default App
 