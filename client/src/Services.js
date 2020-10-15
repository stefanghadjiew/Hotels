import React , { useState } from 'react';
import LocalBarIcon from "@material-ui/icons/LocalBar";
import PoolIcon from '@material-ui/icons/Pool';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import WifiIcon from '@material-ui/icons/Wifi';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AccessibleIcon from '@material-ui/icons/Accessible';
import BottomBorder from './BottomBorder';
const useStyles = makeStyles((theme) => ({
   
    icon : {
        height:"50px",
        width:"50px"
    },
    card : {
        maxWidth : "225px",
        maxHeight:"275px",
        backgroundColor:"#51e2f5 ",
        margin:"0.5rem",
        boxShadow:"2px 3px 4px 4px black",
        [theme.breakpoints.up('360')] : {
            maxWidth:'320px'
        },
        [theme.breakpoints.up('767')] : {
            maxWidth:'100%',
        }
    },
    cardContainer:{
        minHeight:"50vh",
        textAlign:"center",
        letterSpacing:"0.5px",
        backgroundColor:"transparent",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection: "column",
        [theme.breakpoints.up('767')] : {
            display:'grid',
            gridTemplateColumns:'repeat(2,1fr)'
        },
        [theme.breakpoints.up('1024')] : {
            display:'grid',
            gridTemplateColumns:'repeat(4,1fr)'
        }
    }
}))

const Services = () => {
    const classes = useStyles()
    
    const [state,setState] = useState({
        services: [
            {
               icon:  <LocalBarIcon className={classes.icon}/>,
               title : "Best Cocktails",
               info : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a tellus cursus, pellentesque sem quis, tempus nisi." 
            },
            {
               icon:  <PoolIcon className={classes.icon}/>,
               title : "Free Swimming",
               info : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a tellus cursus, pellentesque sem quis, tempus nisi." 
            },
            {
               icon:  <NaturePeopleIcon className={classes.icon}/>,
               title : "Endless Hiking",
               info : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a tellus cursus, pellentesque sem quis, tempus nisi." 
            },
            {
               icon:  <AirportShuttleIcon className={classes.icon}/>,
               title : "Free Shuttle",
               info : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a tellus cursus, pellentesque sem quis, tempus nisi." 
            },
            {
               icon:  <LanguageIcon className={classes.icon}/>,
               title : "Languages",
               info : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a tellus cursus, pellentesque sem quis, tempus nisi." 
            },
            {
               icon:  <WifiIcon className={classes.icon}/>,
               title : "Free Wi-Fi",
               info : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a tellus cursus, pellentesque sem quis, tempus nisi." 
            },
            {
               icon:  <CreditCardIcon className={classes.icon}/>,
               title : "Credit Cards",
               info : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a tellus cursus, pellentesque sem quis, tempus nisi." 
            },
            {
               icon:  <AccessibleIcon className={classes.icon}/>,
               title : "Accessibility",
               info : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a tellus cursus, pellentesque sem quis, tempus nisi." 
            },
        ]
    })
    
    
    const renderServices = state.services.map((item,index) => {
        return (
            <Card key={index} className={classes.card}>
                <CardContent>
                    {item.icon}
                    <h1 style={{fontSize:"1rem",margin:"1rem",textTransform:"capitalize"}}>{item.title}</h1>
                    <p>{item.info}</p>
                </CardContent>
            </Card>
        )
    })
    
    return (
        <div style={{backgroundColor:"#51e2f5",textAlign:"center"}}>
        <h1 style={{padding:"1rem",fontWeight:"900"}}>Services</h1>
        <BottomBorder/>
        <div className={classes.cardContainer}>
            {renderServices}
        </div>
    </div>
    )
}

export default Services;