import React from 'react';
import {makeStyles} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
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
        color:'#82E0AA'
    }
}))

const SuccessPay = () => {
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
        <h1 style={{color:'#82E0AA'}}>Payment<br/> successful</h1>
        <CheckIcon className={classes.icon}/>
        <Link to="/" style={{textDecoration:'none'}}>
            <Btn text="Homepage"/>
        </Link>
    </div>
    )
}

export default SuccessPay;