import React, { useState } from 'react'
import { TextField } from '@mui/material';


function MessageField({name,setText,text}){
    const [isComposed, setIsComposed] = useState(false)

    console.log({text})

    return (
        <TextField
            id="standard-basic"
            label="Write Message" 
            variant="standard" 
            fullWidth={true}
            onChange={(event)=>{setText(event.target.value)}}
            onKeyDown={(event)=>{
                if (isComposed) return

                const text = event.target.value
                if (text === '') return

                if (event.key === 'Enter'){
                    setText('')
                    event.preventDefault()
                }
              }}
            onCompositionStart={()=> setIsComposed(true)}
            onCompositionEnd={()=> setIsComposed(false)}
            value={text}
         ></TextField>
    )
}

export default MessageField