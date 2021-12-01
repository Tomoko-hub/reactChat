import React from "react";
import { ListItem } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { gravatarPath } from "../gravatar";


function MessageItem ({name, text}){
    const avatarPath = gravatarPath(name)

    return (
            <ListItem divider={true}>
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