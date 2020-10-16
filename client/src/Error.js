import React from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button : {
        maxWidth:'250px',
        margin:'2.5vw 0',
        backgroundColor:"#51e2f5", 
        fontWeight:"bold",
        '&:hover':{
            backgroundColor:'#2E86C1'
        },
    },
    errorWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin:'0 2.5vw',
        paddingTop:'60px',
        height:'100vh',
    },
    error: {
        textAlign: 'center'
    }
}))
const Error = () => {
    const classes = useStyles()
    return(
        <div className={classes.errorWrapper}>
            <div className={classes.error}>
                <h1>Page Not Found</h1>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Button className={classes.button}>Back to Homepage</Button>
                </Link>
            </div>
        </div>
    )
}

export default Error;