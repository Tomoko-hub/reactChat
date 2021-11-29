import React from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import {pushMessage} from '../firebase';


function MessageSubmitButton ({name, setText, text}){
    return(
    <Button 
        variant="outlined" 
        disabled={text === ''}
        onClick={()=> {
            pushMessage({name, text})
            setText('')
        }}
    >
        <SendIcon />
    </Button>
    )
}

export default MessageSubmitButton