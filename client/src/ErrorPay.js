import React from 'react';
import {makeStyles} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Btn from './Button';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    wrapper : {
        height: 'calc(100vh - 5px - 3rem - 25vh - 2vw)',
        paddingTop:'60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    icon : {
        width:'80px',
        height: '80px',
        color:'#E74C3C'
    }
}))

const ErrorPay = () => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <h1 style={{color:'#E74C3C'}}>Something went wrong...</h1>
            <CloseIcon className={classes.icon}/>
            <Link to="/Hotels" style={{textDecoration:'none'}}>
                <Btn text="Homepage"/>
            </Link>
        </div>
    )
}

export default ErrorPay;