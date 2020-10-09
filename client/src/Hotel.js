import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useHotels } from './DatabaseContext';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Reviews from './Reviews';
const useStyles = makeStyles((theme) => ({
    displayHotel : {
        backgroundSize:'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '65vh',
    },
    description : {
        width: '95vw',
        textAlign:'center',
    },
    h1 : {
        textTransform: 'capitalize',
        color:'#51e2f5',
        margin:'2.5vw'
    },
    info : {
        display:'flex',
        flexDirection:'column',
        textAlign: 'center'
    },
    bottomBorder : {
        backgroundColor:"#F4D03F",
        height:"5px",
        width:"25%",
        margin:"1.5rem auto"
    },
    iconContainer : {
        display:'flex',
        justifyContent:'center',
        verticalAlign:'middle'
    },
    button : {
        color:"black",
        backgroundColor:"#51e2f5", 
        fontWeight:"bold",
        letterSpacing:"2px",
        margin:'1.5rem 0 0',
        width:'100%',
        maxWidth:'250px',
        '&:hover':{
            backgroundColor:'#2E86C1'
        }
    }
}))


const Hotel = () => {
    const {allHotels} = useHotels()
    const classes = useStyles()
    const hotelToRenderId =parseInt(window.location.href.split('/').pop()) 
    const hotelToRender = allHotels.filter(hotel =>(hotel.id === hotelToRenderId))[0]
    
    if(!hotelToRender){
        return (
            null   
        )
    } else {
        return (
            <div style={{margin:'0 2.5vw 2.5vw',textAlign:'center'}}>
                <div className={classes.displayHotel} style={{backgroundImage:`url(${hotelToRender.img})`}}></div>
                <div className={classes.bottomBorder}></div>
                <div className={classes.info}>
                    Prices from : {hotelToRender.price}<br/>
                    Location : {hotelToRender.location}<br/>
                    Check In : {hotelToRender.checkIn}<br/>
                    Check Out : {hotelToRender.checkout}<br/>
                    <div className={classes.iconContainer}>
                        <EmailIcon/> : {hotelToRender.contacts.email}
                    </div>
                    <div className={classes.iconContainer}>
                        <PhoneAndroidIcon/> : {hotelToRender.contacts.phone}
                    </div>
                </div>
                <div className={classes.bottomBorder}></div>
                <div className={classes.description}>
                    <h1 className={classes.h1}>{hotelToRender.name}</h1>
                    {hotelToRender.description}
                </div>
                <div >
                    <Link style={{textDecoration:'none'}} to={`/hotels/${hotelToRenderId}/rooms`}>
                        <Button  variant="contained" className={classes.button}>Rooms</Button>
                    </Link>
                </div>
                <div className={classes.bottomBorder}></div>
                <h1 style={{margin:'3.5vw 0'}}>Reviews</h1>
                <Reviews hotelToRender={ hotelToRender }/> 
            </div> 
        )    
    }
   
}

export default Hotel;