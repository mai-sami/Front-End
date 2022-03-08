import { Card, CardContent, Typography } from '@mui/material'
import React,{forwardRef} from 'react'
import './Massges.css'
 
const Message = forwardRef (({ message, username }, ref) => {
    console.log(username,message)
    const isUser = username == message.username
     return (
<div ref={ref} className={`massage ${isUser && "massage__user"}`}>
{/* <p className='P__name'> {!isUser && `${message.username} ::::`}</p> */}

              <Card  className={isUser ? "massage__userCard" : "massage__gustCard"}>
                <CardContent>
                    <Typography
                        color="black"
                        variant='h5'
                        component='h2' >
                            {!isUser && `${message.username} :`} {message.message }
                            {/* {message.username}: {message.message } */}
                     </Typography>
 
                </CardContent>
            </Card>
            </div>
     )
})

export default Message
