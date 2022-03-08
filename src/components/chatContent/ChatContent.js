import React, { Component,  createRef} from "react";
import AttachmentIcon from '@material-ui/icons/Attachment';
import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
 import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

 export default class ChatContent extends Component {
  
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/51858116_336012353703108_2675192527174238208_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Dxt-nxALqJcAX8p22Wc&_nc_ht=scontent-frx5-1.xx&oh=31dc6a4fb492b272692632b04643ec8d&oe=612190A3",

      type: "",
      msg: "Hi Tim, How are you?",
    },
    {
      key: 2,
      image: "https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/55549631_351018352202508_6136465117212049408_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=9EaBub4l_QkAX96i2CS&_nc_ht=scontent-frt3-1.xx&oh=6d349ebd1ab81478ef81ceb291fcb42b&oe=6122DF1E",

      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image: "https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/55549631_351018352202508_6136465117212049408_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=9EaBub4l_QkAX96i2CS&_nc_ht=scontent-frt3-1.xx&oh=6d349ebd1ab81478ef81ceb291fcb42b&oe=6122DF1E",

      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/51858116_336012353703108_2675192527174238208_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Dxt-nxALqJcAX8p22Wc&_nc_ht=scontent-frx5-1.xx&oh=31dc6a4fb492b272692632b04643ec8d&oe=612190A3",

      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image: "https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/55549631_351018352202508_6136465117212049408_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=9EaBub4l_QkAX96i2CS&_nc_ht=scontent-frt3-1.xx&oh=6d349ebd1ab81478ef81ceb291fcb42b&oe=6122DF1E",

      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/51858116_336012353703108_2675192527174238208_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Dxt-nxALqJcAX8p22Wc&_nc_ht=scontent-frx5-1.xx&oh=31dc6a4fb492b272692632b04643ec8d&oe=612190A3",

      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image: "https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/55549631_351018352202508_6136465117212049408_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=9EaBub4l_QkAX96i2CS&_nc_ht=scontent-frt3-1.xx&oh=6d349ebd1ab81478ef81ceb291fcb42b&oe=6122DF1E",

      type: "other",
      msg: "I'm taliking about the tutorial",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        if (this.state.msg !== "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
                 image: "https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/55549631_351018352202508_6136465117212049408_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=9EaBub4l_QkAX96i2CS&_nc_ht=scontent-frt3-1.xx&oh=6d349ebd1ab81478ef81ceb291fcb42b&oe=6122DF1E",

          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      
      <div className="main__chatcontent">
        
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/55549631_351018352202508_6136465117212049408_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=9EaBub4l_QkAX96i2CS&_nc_ht=scontent-frt3-1.xx&oh=6d349ebd1ab81478ef81ceb291fcb42b&oe=6122DF1E"
              />
              <p>   سمى ابراهيم</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
          <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
            <button className="addFiles">
                        
               <div class="fileinputs">
	<input type="file" class="file" multiple  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"/>
	<div class="fakefile">
 
    <lable class="labls"  ><AttachmentIcon   style={{ fontSize:18 }}/></lable>	</div>
</div>
  
            </button>
            <button className="addFiles">
                        
               <div class="fileinputs">
	<input type="file" class="file" multiple accept="image/*" />
	<div class="fakefile">
 
    <lable class="labls"  ><PhotoLibraryIcon color="#5y6565" style={{ fontSize:16 }}/></lable>	</div>
</div>
  
            </button>
            <button className="addFiles">
                        
                        <div class="fileinputs">
           <input type="file" class="file" multiple accept="video/*" />
           <div class="fakefile">
          
             <lable class="labls"  ><VideoLibraryIcon color="#5y6565" style={{ fontSize:16 }}/></lable>	</div>
         </div>
           
                     </button>
                     
            <input
              type="text"
              placeholder="  اكتب هنا"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            
          </div>
        </div>
      </div>
    );
    
  }
}
