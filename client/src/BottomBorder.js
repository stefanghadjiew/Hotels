import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    bottomBorder : {
        backgroundColor:"#F4D03F",
        height:"5px",
        width:"25%",
        margin:"1.5rem auto"
    },
}))

const BottomBorder = () => {
    const classes = useStyles();
    return (
        <div className={classes.bottomBorder}></div>
    )
}

export default BottomBorder;