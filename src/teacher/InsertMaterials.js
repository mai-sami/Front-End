import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

  import { makeStyles } from '@material-ui/core/styles';
  import React from 'react';

 
function InsertMaterials() {
  
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
      filevideo: {
        background:"#4d76e781",
        marginLeft: "5px",
        height: 38,
        width: 160,
        float: "left",

        fontWeight:900,
       fontSize:14
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

  
    return (
        <div>

           <div id="boxx_Naain_tea">
 <p id="demo">   الدرس الأول</p> 
 {/* <span id="demoes"> مهمة اليوم هي حل صفحة ٥١ و ٥٢ من الكتاب المدرسي بالاستعانة بالفيديو الشارح
</span>  */}
<br />
  <iframe width="95%" height="345" id="ifram"  src="https://www.youtube.com/embed/y881t8ilMyc" frameborder="0" allowfullscreen></iframe>
     
 

 
 <div id="boxxs_Nain" >
 <div id="show_comments"  >
   
<lable >    مي سامي عبدالرحيم جبر </lable>
<AccountCircleIcon style={{ fontSize:22 }}/>

<p id="show_comment">      درس بسيط  </p>
</div>

<br/>
<div id="show_comments"  >

<lable >    مي سامي عبدالرحيم جبر </lable>
<AccountCircleIcon style={{ fontSize:22 }}/>

<p id="show_comment">      درس بسيط  </p>
 </div>
    
 </div>
   <div class="modal-footer">

<div id="shows_comment" > 
  <div className="content__footer">
          <div className="sendNewMessagees">
          <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
        
            <input id="boxx_comments" placeholder= " اضافة تعليق"/>
            <AccountCircleIcon style={{ fontSize:36 }}/>

            
          </div>
        </div>
</div>
</div>
  
              
<br />
</div>  

        </div>
    )
}

export default InsertMaterials
