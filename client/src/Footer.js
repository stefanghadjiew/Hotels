import React from 'react';
import {makeStyles} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {TextField} from '@material-ui/core';
import Btn from './Button';
import BottomBorder from './BottomBorder';
const useStyles = makeStyles((theme) => ({
    footer: {
        width: '100%',
        height: '20vh',
        backgroundColor:'#283747 ',
        display:'grid',
        gridTemplateColumns:'repeat(3,1fr)',
        [theme.breakpoints.down('1024')] : {
            display:'grid',
            gridTemplateColumns:'repeat(1,1fr)',
            height:'fit-content'
        }
    },
    phoneSupport:{
        display:'flex',
        flexDirection:'column',
        color:'#51e2f5',
        textAlign: 'center',
        justifyContent: 'flex-start',
        '&>h2:last-child': {
            margin:'1.5vw 0'
        },
        '&>h2': {
            marginTop:'1.5vw'
        }
    },
    iconsWrapper : {
        display: 'flex',
        justifyContent:'space-evenly',
        marginTop:'1.5vw'
    },
    icon : {
        width: '40px',
        height:'40px'
    },
    mailWrapper: {
        display: 'flex',
        justifyContent:'center',
        marginBottom:'2.5vw',
    },
    copyright : {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        minHeight: '5vh',
        backgroundColor:'#fff',
        margin:'1vw',
        textAlign:'center'
    },
}))

const Footer = () => {
    const classes = useStyles()
    return (
        <>
        <BottomBorder/>
        <div className={classes.footer}>
            <div className={classes.phoneSupport}>
                <h2>Phone Support</h2>
                <p>24 hours a day</p>
                <h2>+01 234 567 890</h2>
            </div>
            <div className={classes.phoneSupport}>
                <h2>Follow Us</h2>
                <p>join our family!</p>
                <div className={classes.iconsWrapper}>
                    <TwitterIcon className={classes.icon}/>
                    <FacebookIcon className={classes.icon}/>
                    <YouTubeIcon className={classes.icon}/>
                    <InstagramIcon className={classes.icon}/>
                    <LinkedInIcon className={classes.icon}/>
                </div>
            </div>
            <div className={classes.phoneSupport}>
                <h2>Our Newsletter</h2>
                <p>sign up for special offers</p>
                <div className={classes.mailWrapper}>
                    <TextField style={{marginTop:'1.5vw',
                    backgroundColor:'#fff',maxWidth:'320px',height:'50px'}} id="outlined-basic" label="E-mail" variant="filled" />
                    <Btn text="Subscribe"stl={{borderRadius:'0',maxWidth:'200px',height:'50px',marginTop:'1.5vw'}}/>
                </div>
            </div>
        </div>
            <div className={classes.copyright}>
            <h4>&copy; Copyright 2020 Dream Hotels - All Rights Reserved</h4>
        </div>
    </>
    )
}

export default Footer;