import React from 'react'
import Button from '@material-ui/core/Button';
 import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    file: {
        background: "#DF9433",
        marginRight: "5px",
        height: 32,
        fontWeight: 900,

        margin: "5px",
        fontSize: 14
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
        fontSize: 25
    },
    filee: {
        background: "#84b13cb2",
        marginRight: "5px",
        height: 32,
        fontWeight: 900,

        margin: "2px",
        fontSize: 14
    },
    fileee: {
        background: "#ebaf607e",
        marginRight: "5px",
        height: 32,
        fontWeight: 900,
        margin: "2px",
        fontSize: 14
    },

    insert_classs: {
        background: "#aee75198",
        marginRight: "13px",
        height: 37,
        fontWeight: 900,
        direction: "rtl",
        width: 155,
        marginTop: "9px",
        fontSize: 14
    },

    inserts_classs: {
        background: "#aee75198",
        marginRight: "33px",
        height: 37,
        fontWeight: 900,
        direction: "rtl",
        width: 155,
        marginTop: "9px",
        fontSize: 14
    }
}));
var book = [{ name_book: " مي سامي عبد الرحيم جبر ", class: "10.99.76"},
{ name_book: " مي سامي عبد الرحيم جبر ", class: "10.99.76"},

{ name_book: " مي سامي عبد الرحيم جبر ", class: "10.99.76"},

{ name_book: " مي سامي عبد الرحيم جبر ", class: "10.99.76"},
{ name_book: " مي سامي عبد الرحيم جبر ", class: "10.99.76"},

{ name_book: " مي سامي عبد الرحيم جبر ", class: "10.99.76"},
{ name_book: " مي سامي عبد الرحيم جبر ", class: "10.99.76"},
{ name_book: " مي سامي عبد الرحيم جبر ", class: "10.99.76"},

];
function Book() {
       const classes = useStyles();

  
    const { useState } = React;
    const [checkeds, setCheckeds] = useState(false);

    const [checked, setChecked] = useState(false);
 
    return (
        <div className="Class_alls">
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="modal-body">

                            <div class="input-group">
                                <input type="text" class="form-controls" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='       اسم غرفة الصف' />

                                <span class="input-group-texts"  >

                                    اسم   الكتاب الدراسي
                                </span>

                            </div>
                            <br />

                            <div class="input-group">

                                <select class="form-controls">
                                    <option className="boxes333" value="">
                                        {" "}
                                        الصف الدراسي
                                        {" "}
                                    </option>
                                    <option >majasdjoefvdvd</option>
                                </select>


                                <span class="input-group-texts"  >                                 الصف الدراسي
                                </span>

                            </div>
                            <br />
                            <div class="input-groups">




                                {
                                    checked ? (

                                        <input className="form-controlss" type="url" name="url" placeholder=" رفع بواسطة رابط" />
                                    ) : (<div></div>)
                                }

                                <span class="input-group-textss"  >
                                    <input type="checkbox" className="inputlink" onChange={() => setChecked(!checked)} checked={checked} />
                                    رفع بواسطة رابط
                                </span>
                            </div>
                            <br />



                            <div class="input-groups">

                                {
                                    checkeds ? (

                                        <input className="form-controlss" name="token" type="file" />
                                    ) : (<div></div>)
                                }

                                <span class="input-group-textss"  >
                                    <input type="checkbox" className="inputlink" onChange={() => setCheckeds(!checkeds)} checked={checkeds} />
                                    رفع بواسطة ملف
                                </span>
                            </div>






                        </div>
                        <br />
 
                    <br />
                    <div class="modal-footers">
                        <Button className={classes.filee} data-dismiss="modal" aria-label="Close" >     الغاء  </Button>

                        <Button className={classes.fileee}   >   اضافة    </Button>
                    </div>
                    </div>

                </div>
            </div>
           
             
            <div className="classroom"  >
            <div className="Class_alls_under"  >
            <br />

            <Button className={classes.inserts_classs} data-toggle="modal" data-target="#exampleModalCenter">  رفع الكتاب الدراسي     </Button>
            </div>
             <table class="table_book">
                    <thead>
                        <tr className="rwos">
                            <th className="th "> اسم  الكتاب الدراسي     </th>
                            <th className="th "> الصف </th>

                            
                           
                            <th className="th ">العمليات</th>

                        </tr>
                    </thead>
                    <tbody>
                        {book.map((books) => (
                            <tr className="rwo1">
                                <td className="thss " >{books.name_book}  </td>
                                <td className="thss " >{books.class}</td>
                                 
                                <td>
                                <button class="button_show">عرض</button>

                                <button class="button2">تعديل</button>
<button class="button3">حذف</button>

                                 </td>
                            </tr>
 
                        ))}

                    </tbody>

                </table>
        </div>
        </div>

    )
}

export default Book
