import React from 'react';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    button : {
        zIndex:'101',
        color:"black",
        backgroundColor:"#51e2f5",
        width:'250px',
        fontWeight:"bold",
        letterSpacing:"2px",
        transition:'all .3s',
        '&:hover':{
            backgroundColor:'#2E86C1'
        },
    }
}))

const Btn = ({text,stl,type,isProcessing}) => {
    const classes = useStyles()
    return (
    <Button disabled={isProcessing} type={type} id="btn" style={stl} className={classes.button}>
        {text}
    </Button>
    )    
}

export default Btn;