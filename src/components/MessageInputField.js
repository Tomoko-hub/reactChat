import React from "react";
import { makeStyles } from '@mui/styles';
import { Grid } from "@mui/material";
import Avatar from '@mui/material/Avatar';

import { gravatarPath } from "../gravatar"; 

const useStyles = makeStyles({
    root:{
        gridRow:2,
        margin:'26px',
    },
})


const MessageInputField = ({name}) => {
    const classes = useStyles()
    const avatarPath = gravatarPath(name)

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={1}>
                    <Avatar src={avatarPath}>
                    </Avatar>
                </Grid>
                <Grid item xs={10}>Put message</Grid>
                <Grid item xs={1}>Button</Grid>
            </Grid>
        </div>
    )

}

export default MessageInputField