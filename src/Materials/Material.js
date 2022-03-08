import React from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
  import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
 import  { useState } from 'react';
import Func from './HomWTeacher'
import FormControl from '@material-ui/core/FormControl';
 import AddCircleIcon from '@material-ui/icons/AddCircle';
 import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

 import { Link } from "react-router-dom";

export const Material=( )=> { 
 
  const useStyles = makeStyles((theme) => ({
    fileee: {
      background:"#4d76e7cb",
      marginRight:"5px",
      height: 38,
      width: 260,
      fontWeight:900,
 
      margin:"5px",
     fontSize:14
       },  
       formControl: {
        margin: theme.spacing(1),
                  minWidth: 420,
                  fontSize:25
      },
       file: {
        background:"#6b89dd1c",
        marginRight:"5px",
        height: 38,
        width: 260,
        fontWeight:900,
          margin:"2px",
       fontSize:14
         }, 
         fileall: {
          background:"#4d76e775",
          height: 38,
          width: "99%",
          fontWeight:900,
          marginRight:"18px",
            margin:"2px",
         fontSize:14
           }, 
        
         filee: {
          background:"#ebaf607e",
          marginRight:"5px",
          height: 38,
          width: 260,

          fontWeight:900,
          margin:"2px",
         fontSize:14
           }, 
    }));
    

     
    
     
    const classes = useStyles();
     
    const [open3, setOpen3] = React.useState(false);

 
     const [maxWidth] = React.useState('sm');
    const [fullWidth] = React.useState(true);
  
  
  
  
  

    const handleClose3 = () => {
      setOpen3(false);
    };
  
    const handleClickOpen3 = () => {
      setOpen3(true);
    }
 
    const [mune, setMune] = useState([]);
    const handleButtonClickeds = () => {
   
   setMune((prevMune) => {
     const newMune = [...prevMune];
    

        newMune.push({
     name:'',
     id:'',
     })
     setOpen3(false);

     return newMune;
    })
 }
 
  

      
  
  
  
     
     
    return (
        <div>
           <Grid  >
          
     
       <Grid className="cell">


       <div  id="pointer">
    <li  className="lis" color="black">
 <div class="dropdown">
 <span class="dropbtnss">    efreew errew ewte  </span>

  <label class="dropbtns">   المبحث الدراسي 
  :
</label>
  
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

   <label class="dropbtns">   اسم الغرفة
:</label>
   
 </li >
</div>
 
 
  

      
        <Dialog
          open={open3}
          onClose={handleClose3}
          aria-labelledby="form-dialog-title"
        >
          <span className="sp">  اضافة  مواد اثرائية   </span>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
<input  placeholder=' اسم الدرس' id="myTexts" />


                             <input type="file"  required id="myTexts" multiple accept="video/mp4,video/x-m4v,video/*"
/>
                                           <input type="url"  placeholder='اضافة رابط' required id="myTexts" />

                </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <div className= "buttons_rowall">

            
            <button onClick={handleClose3}  className="diiiallo"   > 
              الغاء
            </button>
            <button  onClick={handleButtonClickeds}   className="diiallo"  >
              اضافة
            </button>
            </div>
          </DialogActions>
        </Dialog>


  
 
         


         
       <div >
     
        <Grid >
        <br />
       
       
         <Button className={classes.fileall}  style={{ fontSize:12 }} variant="outlined"  onClick={handleClickOpen3}>انقر لاضافة لدروس</Button>
         <div className="searchs">
                    <input label="Search" className="standard-basic" placeholder="بحث" type="search" />
                    <SearchIcon />
                </div>
        
{/*handleClickOpen1*/}       
        {mune.map((listItem) => <div key={listItem.id}>

        <div  id="box_Nain">

<Link to="/InsertMaterials"><p id="demoTea">  الدرس الاول </p>
 </Link>
 </div>

 </div>
 )}

{/* <div  class="sum"> 
       <div class="dropdownn">
  <button class="dropbtnn">
     <ArrowDropDownIcon color="primary" style={{ fontSize:28 }}/>
  </button>
  <div class="dropdownn-content">
  <a href="#sss">تعديل</a>
  <a href="#sss">حذف</a>
  <a href="#ss">اخفاء</a>
  </div>
</div>
 <Link to="/InsertMaterials"><p id="demoTea">  الدرس الاول </p>
 </Link>
 </div>
          </div> */}

                   </Grid>    
 <br />
      </div>
     
        </Grid> 
        </Grid> 
  

       <Grid> 

      <Func />
        </Grid>
 
      </div>
 
    )
}

export default Material
 // <button onClick={()=>setShow(true)}>show</button>
// <button onClick={()=>setShow(false)}>move</button>
 //<button onClick={handleButtonClicked}>Add an Item</button>
 //    {
  //show?<span>mai sami </span>:null
//}
 