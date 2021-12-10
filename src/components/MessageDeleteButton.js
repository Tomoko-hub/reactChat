import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function MessageDeleteButton({inputEl,setText, text}) {

    return (
        <IconButton 
            aria-label="delete"
            color="primary"
            disabled= {text === ''}
            onClick={()=>{
                setText('')
                inputEl.current.focus()
            }}
        >
            <DeleteIcon />
        </IconButton>
    )
}

export default MessageDeleteButton
