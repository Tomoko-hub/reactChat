import React from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import {pushMessage} from '../firebase';


function MessageSubmitButton ({inputEl, name, setText, text}){
    return(
        <Button 
            variant="outlined" 
            disabled={text === ''}
            onClick={()=> {
                pushMessage({name, text})
                setText('')
                inputEl.current.focus()
            }}
        >
            <SendIcon />
        </Button>
    )
}

export default MessageSubmitButton