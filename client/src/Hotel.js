import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useHotels } from './DatabaseContext';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from 'react-router-dom';
import Btn from './Button';
import Reviews from './Reviews';
import Error from './Error';
import BottomBorder from './BottomBorder';
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
        marginBottom:'1.5rem'
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
    iconContainer : {
        display:'flex',
        justifyContent:'center',
        verticalAlign:'middle'
    }
}))


const Hotel = () => {
    const {allHotels} = useHotels()
    const classes = useStyles()
    if(isNaN(parseInt(window.location.href.split('/').pop() ))) {
        return (<Error/>)
    }
    if(parseInt(window.location.href.split('/').pop()) < 0 || parseInt(window.location.href.split('/').pop()) > 10) {
        return (<Error/>)
    }
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
                <BottomBorder/>
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
                <BottomBorder/>
                <div className={classes.description}>
                    <h1 className={classes.h1}>{hotelToRender.name}</h1>
                    {hotelToRender.description}
                </div>
                <div >
                    <Link style={{textDecoration:'none'}} to={`/hotels/${hotelToRenderId}/rooms`}>
                        <Btn text="Rooms"/>
                    </Link>
                </div>
                <BottomBorder/>
                <h1 style={{margin:'3.5vw 0'}}>Reviews</h1>
                <Reviews hotelToRender={ hotelToRender }/> 
            </div> 
        )    
    }
   
}

export default Hotel;