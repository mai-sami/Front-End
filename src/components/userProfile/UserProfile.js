import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
 
            <img src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/55549631_351018352202508_6136465117212049408_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=9EaBub4l_QkAX96i2CS&_nc_ht=scontent-frt3-1.xx&oh=6d349ebd1ab81478ef81ceb291fcb42b&oe=6122DF1E" />
          </div>
          <h4>  سمى ابراهيم</h4>
          <p> </p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            
             <h4> المعلومات العاامة</h4>
            <i className="fa fa-angle-down"></i>

          </div>
          <div className="card__content">
           <p className="nm"> الصف  السابع</p>
           <p>الشعبة  :2</p>
           <p> اللغة العربية </p>

          </div>
        </div>
      </div>
    );
  }
}
