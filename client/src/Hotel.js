import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useHotels } from './DatabaseContext';


const useStyles = makeStyles((theme) => ({
    displayHotel : {
        backgroundSize:'cover',
        backgroundPosition: 'center',
        width: '70vw',
        height: '70vh'
    }
}))


const Hotel = () => {
    const {allHotels} = useHotels()
    const classes = useStyles()
    const hotelToRenderId =parseInt(window.location.href.split('/').pop()) 
    const hotelToRender = allHotels.filter(hotel =>(hotel.id === hotelToRenderId))[0]
    
    if(!hotelToRender){
        return (
            <div>Hello</div>    
        )
    } else {
        return <div className={classes.displayHotel} style={{backgroundImage:`url(${hotelToRender.img})`}}></div>    
    }
   
}

export default Hotel;