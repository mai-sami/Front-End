import React from 'react'
import MainHomeW from './MainHomeW'
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

function MainStd() {
    return (
      <div> 
        
    <div className="cell">

     <div  id="pointer">
    <li  className="lis" color="black">
 <div class="dropdown">
  <label class="dropbtnss">الكتاب الدراسي
</label>
  <div class="dropdown-content">
  <Link to="/in_class">انقر للذهاب الى الكتاب</Link>
    </div>
</div>
</li >
<li  className="lis" color="black">
 <div class="dropdown">
 <span class="dropbtns">    efreew errew ewte  </span>
  <label class="dropbtns">   اسم المعلم
  : </label>
   </div>
</li >
<li  className="lis" color="black">
<span class="dropbtns">   اللغة العربية</span>

   <label class="dropbtns">   اسم المادة
:</label>
   
 </li >
</div>

 <br />
<div className="searchs">
    <input label="Search" className="standard-basic" placeholder="بحث" type="search" />
                    <SearchIcon />
                </div>
<br />
 

 <div  id="box_Nain">
 
 <Link to="/activity"><p id="demo">  الدرس الاول </p></Link>
  <br />
  </div>
 <br />
 <div  id="box_Nain">
 <Link to="/activity"><p id="demo">  الدرس الاول </p></Link>
 <br />
  </div>
 <br />
  

  </div>
 <Grid> 
<MainHomeW />  
</Grid> 
  </div>
    ) 
}

export default MainStd
