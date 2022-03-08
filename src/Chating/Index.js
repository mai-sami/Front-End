import React, { useEffect, useMemo, useState } from "react";
import './style.css'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Message from './Message'
import db from "../firebase";
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import FlipMove from 'react-flip-move';
import FormControl from '@mui/material/FormControl';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

import SendIcon from '@material-ui/icons/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
 
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '100%',
        },
      },
    },
  }));
  
  
function Index() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('')
    const [usernames, setUsernames] = useState([]);


 
    // useState is veriable in React
    // useEffect run code condition



        //  useEffect(() => {
        //     db.collection('messages').orderBy('timestamp', 'desc').get(snapshot => (
        //     setMessages(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()}))
        //         ))
        //       );
        //  }, [])
      useEffect(() => {
        db.collection('messages').orderBy('Timestamp', 'asc')
        .onSnapshot(snapshot => {
            setMessages(snapshot.docs.map((doc) =>({
                id:doc.id,
                ...doc.data()
            }))
            )
        }   )
     }, [])

 

 
    useEffect(() => {
        setUsername(prompt('Please enter your name'))
    }, [])
    const SendMassge = (event) => {
        event.preventDefault();
        console.log("Button is working");
        db.collection("messages").add({
            message: input,
            username: username,
            Timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
    };
 
           return (

        <div className="chats"> 
 
        <div className="Chats__body">
            <div className="user__data">
 
<h3 className="username">{username}</h3>
<AccountCircleIcon style={{ fontSize:42 }} />
 
             </div>
             {/* <h1>Wellcome {input}</h1> */}
<div>
             <form className="app__form">
            <FormControl className = "app__formControl">

                <Input required 
                
                className = "app__input" value={input} onChange={e => setInput(e.target.value)} />
                <br />
                {/* <Button className = "app__iconButton"
 disabled={!input} color='primary'
  onClick={SendMassge} 
  variant="contained">Send Message</Button> */}


<IconButton className = "app__iconButton"
          disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={SendMassge}>
            <SendIcon style={{ fontSize:25 }} className="app__iconButtonIcon" />
          </IconButton>

          </FormControl>

            </form>
            <FlipMove>
        {messages.map( (message) => (

            // <h1>{message.username}:{message.message}</h1>
          <Message  key={message.id} username={username} message={message} />
        ))}
      </FlipMove>

        </div>
        </div>

        <div className="right__form">

        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
       
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

  
        {messages.map(message => (
            <h3  key={username.id} className="usernames">{message.username}
 <AccountCircleIcon  style={{ fontSize:42 }} />
             </h3>
 ))}

            </div>
 
        </div>

    )
}

export default Index
