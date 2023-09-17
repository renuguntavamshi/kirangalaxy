import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
function Topheader(){
    let [tab,settab]=useState(true);
    let tabfunc=()=>{
        console.log("hi");
        settab(!tab);
      }
    return(
       <div>
       <div className="sitename">
        <p style={{color:"white",paddingLeft:"15px"}}>Kiran Galaxy
        <span className='tabs' style={{float:"right"}}><button onClick={tabfunc}>Tab</button></span> 
</p>

        </div>
        {/* sitename ends here */}
{tab && <Navbar />}
        </div>
    )
}
export default Topheader