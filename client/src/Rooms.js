import React from 'react';
import { useHotels } from './DatabaseContext';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    roomsWrapper : {
        display: 'flex',
        flexDirection:'column'
    },
    room : {
        margin : '0 0 2.5vw',
        width:'100%'
    }
}))

const Rooms = () => {
    const classes = useStyles()
    const {allHotels} = useHotels()
    const urlArr = window.location.href.split('/')
    const id = parseInt(urlArr[(urlArr.length - 2)]) 
    const currentHotel = allHotels.filter(hotel =>(hotel.id === id))[0]
    
   
    if(!currentHotel) {
        return null
    } else {
        console.log(currentHotel)
        const roomsToRender =currentHotel.rooms.map((room,index) => (
            <div key={index} className={classes.room}>
                <img alt={`room ${index}`} src={`${room.img}`}/>
            </div>
        )) 
         return (
            <div className={classes.roomsWrapper}>
                {roomsToRender} 
            </div> 
        )
    }
}
    
    


export default Rooms;