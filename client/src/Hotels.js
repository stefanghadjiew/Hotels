import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import hotelsMain from './images/hotels/HotelsMain.jpg';
import HotelCard from './HotelCard';
import { useHotels } from './DatabaseContext';
import HotelsInput from './HotelsInput';
const useStyles = makeStyles((theme) => ({
    landing: {
        width: '100vw',
        height: '100vh',
        backgroundImage:`url(${hotelsMain})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
    },
    formControlWrapper: {
        display:'flex',
        flexDirection:'column',
        margin:'1rem',
        justifyContent:'center'
    },
    cardContainer:{
        minHeight:"50vh",
        textAlign:"center",
        letterSpacing:"1px",
        backgroundColor:"transparent",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection: "column",
    }
}))

const Hotels = () => {
    const [hotelName,setHotelName] = useState('')
    const [price,setPrice] = useState('')
    const [location,setLocation] = useState('')
    const getHotelName = (name) => {
        setHotelName(name)
        setPrice('')
        setLocation('')
    }
    const getPrice = (price) => {
        setPrice(price)
        setHotelName('')
        setLocation('')
    }
    const getLocation = (location) => {
        setLocation(location)
        setHotelName('')
        setPrice('')
    }
    const classes = useStyles()
    const {allHotels} = useHotels()
    const renderAllHotels = allHotels.map((hotel) =>(
        <HotelCard key={hotel.id} hotel={hotel}/>
    ))
    
    const hotelsNames = [...allHotels.map((hotel)=>(hotel.name)),"All"]
    const hotelsPrices = allHotels.map((hotel)=>(hotel.price))
    const hotelsLocation = allHotels.map((hotel)=>(hotel.location))
    const renderByName = renderAllHotels.filter((hotel) => (hotel.props.hotel.name === hotelName))
    const renderByPrice = renderAllHotels.filter((hotel) =>(hotel.props.hotel.price >= price))
    const renderByLocation = renderAllHotels.filter((hotel) => (hotel.props.hotel.location === location))
    
    return (
        <>
            <div className={classes.landing}></div>
            <div className={classes.formControlWrapper}>
                <HotelsInput value={hotelName} getHotelName={getHotelName} input="Name" data={hotelsNames}/>
                <HotelsInput value={price} getPrice={getPrice} input="Starting Price" data={hotelsPrices}/>
                <HotelsInput value={location} getLocation={getLocation} input="Location" data={hotelsLocation}/>
            </div>
            <div className={classes.cardContainer}>
                {hotelName ? <div>{renderByName}</div> : null}
                {hotelName === "All" && <div>{renderAllHotels}</div>}
                {price ?  <div>{renderByPrice}</div> : null}
                {location ? <div>{renderByLocation}</div> : null}
                {!(hotelName || price || location) ? <div>{renderAllHotels}</div> : null}
            </div> 
        </>
    )

}

export default Hotels;