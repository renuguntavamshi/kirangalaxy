import React, { useState } from "react";

import About from './About';
import HospitalInformation from './HospitalInformation';
import Department from './Department';
import EBooks from "./EBooks";
import CafeMenu  from './CafeMenu';
import NABH from './NABH';
import Supervisorsduty from './Supervisors Duty List';
import PhotoGallery from './PhotoGallery';
import Marqueetext from './Marqueetext';
import {Route,Routes} from 'react-router-dom'
function Maincontainer(){
let [list,setlist]=useState(["Kiran Hospital Website",
"HMMS Live Link","Mail Access","HR Attendance","Help Desk",
"Incident Report","PACS","Extension Number","Star Dial",
"Doctors Availability","SOP Manual","Overlays"])
let [rightlist,setrightlist]=useState([
    "COVID POLICY: Ad itting Patiental after COVID treatment / shifting after proong Stay in COVID unit",
    "COVID-19 Home Quarantine Guide Line",
    "Self Declaration COVID-19",
    "Circular for Asthma Clinic",
    "NABH Employee Handbook",
    "COVID Protection Care",
    "Covid Tips"
])
let [count,setcount]=useState(5);

return(
        <div className="maincontainer">
            <div className="leftlinks leftcontainer">
                
                    <h4 className="Home">Home</h4>
                    {list.map((item,index)=>{
                        return(
                            <h4 key={index} className="listitem">{item}</h4>
                        )
                    })}
            </div>
            {/* //left-container ends here      */}
<div className="center-container">
<iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
<Routes>
<Route  path='/' element={<About />}/>
  
  <Route  path='/about' element={<About />}/>
  <Route  path='/hospitalinformation' element={<HospitalInformation />}/>
  <Route  path='/department' element={<Department />}/>
  <Route  path='/ebooks' element={<EBooks />}/>
  <Route  path='/cafemenu' element={<CafeMenu />}/>
  <Route  path='/supervisorsdutylist' element={<Supervisorsduty />}/>
  <Route  path='/nabh' element={<NABH />}/>
  <Route  path='/photogallery' element={<PhotoGallery />}/>
  
</Routes>
</div>
 {/* //center-container ends here      */}
 <div className="rightcontainer">
          <div>    
                <h4 className="Home">Circular</h4>
                <h4 className="administrator">Administrator</h4>
                {rightlist.map((item,index)=>{
                   if(index>=0 && index<count){
                    return(
                        
                        <div >
                           <h4 key={index} className="listitemright">{item}</h4>
                       <hr />
                        </div>
   
                       )         
                   }
                  
                })}
             {(count<7 & count>3)?<h5 style={{color:"red",cursor:"pointer"}} onClick={()=>setcount(count+7)}>More.. </h5>
:""}
</div>{/* right top links */}
<div>    
                <h4 className="Home">Admistrator</h4>
                <h4 className="administrator">Administrator</h4>
                {rightlist.map((item,index)=>{
                   if(index>=4 && index<count){
                    return(
                        
                        <div >
                           <h4 key={index} className="listitemright">{item}</h4>
                       <hr />
                        </div>
   
                       )         
                   }
                  
                })}
             {(count<7 & count>3)?<h5 style={{color:"red",cursor:"pointer"}} onClick={()=>setcount(count+7)}>More.. </h5>
:""}
</div>{/* right top links */}
        </div>
        {/* right container ends here */}
        </div>
    )
}
export default Maincontainer;