import React from "react";
import { Link } from "react-router-dom";
import ss from './ss.jpg';



const data_class=[{name:" الصف السابع ",image:"ss.jpg",part:7,},

{name:"  الصف الخامس ",image:"ss.jpg",part:4,}]
 
function ComponentTeacher(props) {
 
  
  return (
    <div> 
        {data_class.map((data) => (
        <div className="component">
         <img  src={ss}     alt="descriptionImage"     />
            <Link to="/Material_teac" className="header_link">
            <div  >
            <p className="header-optss">{data.name}</p>
            </div>
            </Link>
            <p className="header-optss">  الشعبة: {data.part}</p>
               
        </div>
          ))} 
             
          </div>  
  );
  
}

export default ComponentTeacher;
