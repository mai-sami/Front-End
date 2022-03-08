import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

function MainHomeW() {
   
    return (
        <div >
     <Grid id="home_cellss">
         <button className="dialoo">  الأنشطة والواجبات  الخاصة بالوحدات الدراسية    </button>
         <br />
         <br /> <br />
         <br />
         <div className="searchs">
                    <input label="Search" className="standard-basic" placeholder="بحث" type="search" />
                    <SearchIcon />
                </div>
         <br />
        
          <div  id="box_Nain">
          <div  id="datetime">

         <span id="datetime">23/23/23/</span>
         <label>وقت انتهاء التسليم</label>
         <Link to="/ActivityWork"><span id="demoes"> النشاط الاول</span> </Link>
                 <br />
</div>
          
</div>
<br />

<div  id="box_Nain">
          <div  id="datetime">

         <span id="datetime">23/23/23/</span>
         <label>وقت انتهاء التسليم</label>
         <Link to="/ActivityWork"><span id="demoes"> النشاط الثاني</span> </Link>
                 <br />
</div>
          
</div>
         
<br />

<div  id="box_Nain">
          <div  id="datetime">

         <span id="datetime">23/23/23/</span>
         <label>وقت انتهاء التسليم</label>
         <Link to="/ActivityWork"><span id="demoes"> الواجب الثالث</span> </Link>
                 <br />
</div>
          
</div>
<br />

<div  id="box_Nain">
          <div  id="datetime">

         <span id="datetime">23/23/23/</span>
         <label>وقت انتهاء التسليم</label>
         <Link to="/ActivityWork"><span id="demoes"> النشاط الثالث</span> </Link>
                 <br />
</div>
          
</div>
<br />

<div  id="box_Nain">
          <div  id="datetime">
         <span id="datetime">23/23/23/</span>
         <label>وقت انتهاء التسليم</label>
         <Link to="/ActivityWork"><span id="demoes"> النشاط الثاني</span> </Link>
                 <br />
</div>
          
</div>
<br />

<div  id="box_Nain">
          <div  id="datetime">

         <span id="datetime">23/23/23/</span>
         <label>وقت انتهاء التسليم</label>
         <Link to="/ActivityWork"><span id="demoes"> jnfyntfy</span> </Link>
                 <br />
</div>
          
</div>
             
            
         </Grid> 

        </div>
    )
}
 
export default MainHomeW
