import React,{useState, useEffect} from "react";
import { makeStyles } from "@mui/styles";

import { messagesRef } from "../firebase";

const useStyles = makeStyles({
    root: {
        gridRow:1
    }
})

const MessageList =()=>{
    const [messages, setMessages] = useState([])
    const classes = useStyles()

    useEffect(()=>{
        messagesRef
            .orderByKey()
            .limitToLast(5)
            .on('value', (snapshot) => {
                const messages = snapshot.val()
                console.log(messages)
                if  (messages===null) return
                
                const entries = Object.entries(messages)
                const newMessages = entries.map((entry) =>{
                    const [ key, nameAndText ] = entry
                    return {key: key, ...nameAndText}
            })
        setMessages(newMessages)
        })
    },[])

    

    return (
        <div className={classes.root}>
            This is MessageList
        </div>
    )
}

export default MessageList