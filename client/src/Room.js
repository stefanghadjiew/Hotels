import React from 'react';
import {makeStyles} from '@material-ui/core';
import {useHotels} from './DatabaseContext';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import WifiIcon from '@material-ui/icons/Wifi';
import HotTubIcon from '@material-ui/icons/HotTub';
import PetsIcon from '@material-ui/icons/Pets';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    roomWrapper : {
        display: 'flex',
        flexDirection:'column',
        margin:'0 2.5vw',
        paddingTop:'60px',
        textAlign: 'center'
    },
    room : {
        marginBottom:'2.5vw',
        width:'100%',
        height:'60vh',
        backgroundSize:'cover',
        backgroundPosition:'center',
    },
    icon : {
        width: '50px',
        height: '50px',
        color:'#51E2F5'
    },
    bottomBorder:{
        backgroundColor:"#F4D03F",
        height:"5px",
        width:"25%",
        margin:"1.5rem auto"
    },
    services : {
        display: 'flex',
        justifyContent: 'center'
    },
    restOfRoomWrapper : {
        display:'flex',
        flexDirection: 'column',
        margin:'2.5vw 0'
    },
    img : {
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:'100%',
        height:'30vh',
        marginBottom:'2.5vw'
    },
    details: {
        textAlign:'center',
        marginBottom:'2.5vw'
    },
    info : {
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        marginBottom:'2.5vw'
    },
    button : {
        maxWidth:'250px',
        fontWeight:"bold",
        backgroundColor:"#51e2f5",
        '&:hover':{
            backgroundColor:'#2E86C1'
        },
        margin:'2.5vw 0'
    }
}))

const Room = () => {
    const classes = useStyles()
    const {allHotels} = useHotels()
    const currentHotelId=parseInt(window.location.href.split('/')[window.location.href.split('/').length-3])
    const currentHotelRoomId=parseInt(window.location.href.split('/')[window.location.href.split('/').length-1])
    const currentHotel = allHotels.filter(hotel => (hotel.id === currentHotelId))[0]
   
    
    if(!currentHotel) {
        return null
    } else {
        const currentHotelRoom = currentHotel.rooms.filter(room => room.id === currentHotelRoomId)
        
        
        return (
            <div className={classes.roomWrapper}>
                <div className={classes.room} style={{backgroundImage:`url(${currentHotelRoom[0].img})`}}></div>
                <h1>Info</h1>
                <div className={classes.bottomBorder}></div>
                <div className={classes.info}>
                    <Typography>
                        Size : {currentHotelRoom[0].SQFT}
                    </Typography>
                    <Typography>
                        Price : {currentHotelRoom[0].price}
                    </Typography>
                    <Typography>
                        Capacity : {currentHotelRoom[0].capacity}
                    </Typography>
                </div>
                <h1>Services</h1>
                <div className={classes.bottomBorder}></div>
                <div className={classes.services}>
                    <Tooltip title="room service" arrow placement="top">
                        <RoomServiceIcon className={classes.icon}/>
                    </Tooltip>
                    <Tooltip title="wi-fi" arrow placement="top">
                        <WifiIcon className={classes.icon}/>
                    </Tooltip>
                    <Tooltip title="jacuzzi" arrow placement="top">
                        <HotTubIcon className={classes.icon}/>
                    </Tooltip>
                    {(currentHotelRoom[0].pets === true) &&
                     <Tooltip title="pets" arrow placement="top">
                        <PetsIcon className={classes.icon}/>
                    </Tooltip>}
                     {(currentHotelRoom[0].breakfast === true) &&
                    <Tooltip title="free breakfast" arrow placement="top">
                    <FreeBreakfastIcon className={classes.icon}/>
                    </Tooltip>}
                </div>
                <div className={classes.restOfRoomWrapper}>
                        <div className={classes.img} style={{backgroundImage:`url(${currentHotelRoom[0].img1})`}}></div>
                        <div className={classes.img} style={{backgroundImage:`url(${currentHotelRoom[0].img2})`}}></div>
                        <div className={classes.img} style={{backgroundImage:`url(${currentHotelRoom[0].img3})`}}></div>
                </div>
                <div className={classes.details}>
                    <h1>Details</h1>
                    <div className={classes.bottomBorder}></div>
                    <Typography>
                        {currentHotelRoom[0].details}
                    </Typography>    
                </div>
                <Button className={classes.button}>Book Room</Button>
            </div>
        )
       
    }
}

export default Room;