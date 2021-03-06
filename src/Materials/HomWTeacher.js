import React from 'react';
 import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
  import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import  { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
 import AddCircleIcon from '@material-ui/icons/AddCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  file: {
    background:"#DF9433",
    marginRight:"5px",
    height: 32,
    fontWeight:900,

    margin:"5px",
   fontSize:14
     },  
     formControl: {
      margin: theme.spacing(1),
                minWidth: 480,
                fontSize:25
    },
     filee: {
      background:"#84b13cb2",
      marginRight:"5px",
      height: 32,
      fontWeight:900,

      margin:"2px",
     fontSize:14
       },  
       fileee: {
        background:"#ebaf607e",
        marginRight:"5px",
        height: 32,
        fontWeight:900,
        margin:"2px",
       fontSize:14
         }, 
  }));
   const HomWTeacher=()=>{
   
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const [list, setList] = useState([]);

    const handleButtonClicked = () => {
      setList((prevList) => {
        const newList = [...prevList];
         newList.push({
          id :[],
          location: " "

        })
        return newList;
      })
    }
   
   const handelSave = () => {
    var x = document.getElementById("myTexts").value;
  document.getElementById("demos").innerHTML = x;
    setOpen(false);
    };
      const handleClickOpen = () => {
      setOpen(true);
    };
  
     const handleClose=()=>{
  setOpen(false)
}
    return (
    <div>
        
         <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
           <div class="contacts"> 
           <div class="contactsunder"> 

         <DialogContent>
             <FormControl className={classes.formControl}>
            <form class="form_form">
          <div class="text_row"> 
           <span class="form_rows">?????????? ?????????????? ??????????????????</span>
          </div>
      <div  class="form_row_inputs"> 
        <div class="form_row_input"> 
        <label class="form_row_lable">?????? ???????????? ??????????????</label>
         <input type="text" class="form-control" id="inputPassword" placeholder="?????? ???????????? ????????????  " />
    </div>
    </div>
    
       <br />
       <div class="form_row_input"> 
       <label class="form_row_lable"> ?????????? ???????????????? </label>
         <input type="date" class="form-control" id="inputPassword"  />
              <br />
              <div class=" "> 
        <label class="form_row_lable"> ?????????? ???????????????? </label>
         <input type="date" class="form-control" id="inputPassword"  />
         </div>
        <br />

        <div class=" filediv"> 
        <label class="form_row_lable"> ??????????????</label>
         <input type="file" class="form-control" id="inputPassword" />

 

         </div>
      

        
         
</div>        
       </form>
              </FormControl>
         </DialogContent>
         </div>
                  </div>

        <DialogActions>
        <div class="modal-footer">
          <div className="buttoncenter"  > 
          <button onClick={handleClose}  className="diiiallo"   >
            ??????????
          </button>
          <button onClick={handelSave }  className="diiallo"  >
            ??????????
          </button>
          </div>
          </div>

        </DialogActions>
      </Dialog>
      <Grid id="home_cellss">
         <button className="dialoo"  onClick={handleButtonClicked}>  ?????????????? ??????????????????  ???????????? ???????????????? ????????????????    </button>
      {list.map((listItem) => <div key={listItem.id}>
      <div  id="box_Nain">
       
        <AddCircleIcon className="buttons_rows" onClick={handleClickOpen} style={{ fontSize:18 }} variant="outlined" color="primary" />
       <br />
       <br />        

<div  class="sum"> 
       <div class="dropdownn">
  <button class="dropbtnn">
     <ArrowDropDownIcon color="primary" style={{ fontSize:28 }}/>
  </button>
  <div class="dropdownn-content">
  <a href="#wwwwww">??????????</a>
  <a href="#e">??????</a>
  <a href="#ee">??????????</a>
  </div>
</div>
<Link to="/InsertActivity"><p id="demoTea">  ???????????? ?????????? </p>
 </Link> 
 
    
  
 </div>


<br />
        
 
 

      
  </div>
<br />
       </div>)}
                           
     </Grid>
     </div>

     )
 }
 
 export default HomWTeacher
 
 