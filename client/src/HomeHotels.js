import React  from 'react';
import { makeStyles } from '@material-ui/core';
import HotelCard from './HotelCard';
import { useHotels } from './DatabaseContext';
import BottomBorder from './BottomBorder';

const useStyles = makeStyles((theme) => ({
    cardContainer:{
        minHeight:"50vh",
        textAlign:"center",
        letterSpacing:"1px",
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
            gridTemplateColumns:'repeat(3,1fr)'
        }
    }
}))

const HomeHotels = () => {
    const classes = useStyles()
    const { featuredHotels } = useHotels()
    const renderHotels = featuredHotels.map(hotel => {
        return <HotelCard  key={hotel.id} hotel={hotel}/>
    })
     
    return(
        <div style={{textAlign:"center"}}>
        <h1 style={{padding:"1rem",fontWeight:"900"}}>Crown Jewels</h1>
            <BottomBorder/>
            <div className={classes.cardContainer}>
                {renderHotels}
            </div>
        </div> 
    )
   
}

export default HomeHotels;