import React  from 'react';
import { makeStyles } from '@material-ui/core';
import hotelsMain from './images/hotels/HotelsMain.jpg';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import HotelCard from './HotelCard';
import { useHotels } from './DatabaseContext';
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
    },
    formControl : {
        minWidth: 150
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
    const classes = useStyles()
    const {allHotels} = useHotels()
    const renderAllHotels = allHotels.map((hotel) =>(
       <HotelCard key={hotel.id} hotel={hotel}/>
    ))
    return (
        <>
            <div className={classes.landing}></div>
            <div className={classes.formControlWrapper}>
                <FormControl className={classes.formControl}>
                    <InputLabel>Name</InputLabel>
                </FormControl>
            </div>
            <div className={classes.cardContainer}>
                {renderAllHotels} 
            </div> 
        </>
    )

}

export default Hotels;