import React,{useRef, useEffect} from "react";
import { ListItem } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { gravatarPath } from "../gravatar";


function MessageItem ({isLastItem, name, text}){
    const ref = useRef(null)
    const avatarPath = gravatarPath(name)

    useEffect(() => {
        if (isLastItem) {
            ref.current.scrollIntoView({behavior: 'smooth'})
        }
    },[isLastItem])

    return (
            <ListItem divider={true} ref={ref}>
                <ListItemAvatar>
                    <Avatar src={avatarPath} />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {text}
                        </Typography>
                    }
                 />
            </ListItem>
    )
}

export default MessageItem