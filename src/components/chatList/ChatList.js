import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image: "https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/55549631_351018352202508_6136465117212049408_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=9EaBub4l_QkAX96i2CS&_nc_ht=scontent-frt3-1.xx&oh=6d349ebd1ab81478ef81ceb291fcb42b&oe=6122DF1E",

      id: 1,
      name: " مي سامي عبد الرحيم جبر  ",
      active: true,
      isOnline: true,
    },
    {
      image: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/51858116_336012353703108_2675192527174238208_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Dxt-nxALqJcAX8p22Wc&_nc_ht=scontent-frx5-1.xx&oh=31dc6a4fb492b272692632b04643ec8d&oe=612190A3",

      id: 2,
      name: " مي سامي عبد الرحيم جبر  ",
      active: false,
      isOnline: false,
    },
    {
      image: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/51858116_336012353703108_2675192527174238208_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Dxt-nxALqJcAX8p22Wc&_nc_ht=scontent-frx5-1.xx&oh=31dc6a4fb492b272692632b04643ec8d&oe=612190A3",

      id: 3,
      name: " مي سامي عبد الرحيم جبر  ",
      active: false,
      isOnline: false,
    },
     
    {
      image: "https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/55549631_351018352202508_6136465117212049408_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=9EaBub4l_QkAX96i2CS&_nc_ht=scontent-frt3-1.xx&oh=6d349ebd1ab81478ef81ceb291fcb42b&oe=6122DF1E",

      name: " مي سامي عبد الرحيم جبر  ",
      active: false,
      isOnline: true,
    },
    {
      image: "https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/55549631_351018352202508_6136465117212049408_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=9EaBub4l_QkAX96i2CS&_nc_ht=scontent-frt3-1.xx&oh=6d349ebd1ab81478ef81ceb291fcb42b&oe=6122DF1E",

      id: 8,
      name: " مي سامي عبد الرحيم جبر  ",
      active: false,
      isOnline: false,
    },
    {
      image: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/51858116_336012353703108_2675192527174238208_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Dxt-nxALqJcAX8p22Wc&_nc_ht=scontent-frx5-1.xx&oh=31dc6a4fb492b272692632b04643ec8d&oe=612190A3",

      id: 9,
      name: " مي سامي عبد الرحيم جبر  ",

      active: false,
      isOnline: true,
    },
    {
      image: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/51858116_336012353703108_2675192527174238208_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Dxt-nxALqJcAX8p22Wc&_nc_ht=scontent-frx5-1.xx&oh=31dc6a4fb492b272692632b04643ec8d&oe=612190A3",
      id: 10,
      name: " مي سامي عبد الرحيم جبر  ",

      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>  محادثة جديدة</span>
        </button>

        <div className="chatlist__heading">
        <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
          <h2>المحادثات</h2>
          
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
          <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
            <input type="text" placeholder=" ابحث هناا  " required />
          
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
