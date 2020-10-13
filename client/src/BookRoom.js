import React,{useState,useEffect} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {makeStyles} from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Error from './Error';
import {TextField} from '@material-ui/core';
import { useHotels } from './DatabaseContext';
import axios from 'axios';
import {toast} from 'react-toastify';

const useStyles = makeStyles((theme) =>({
    wrapper : {
        paddingTop:'60px',
        width:'100vw',
        height: 'calc(100vh - 5px - 3rem - 25vh - 2vw)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))
toast.configure()
const BookRoom = () => {
    const {allHotels} = useHotels()
    const hotelId =parseInt(window.location.href.split('/')[4])
    const roomId = parseInt(window.location.href.split('/')[6])
    const hotel = allHotels.filter(hotel => (hotel.id === hotelId))[0]
    const classes=useStyles()
    const [checkIndate,setCheckInDate] = useState(null)
    const handleCheckInDate = (date) => {
        setCheckInDate(date)
    }
    const [days,setDays] = useState(0)
    const [price,setPrice] = useState(0)
    const [finalPrice,setFinalPrice] = useState(0)
    useEffect(() => {
        setFinalPrice(days * price)
    },[days])
    const handleToken = async (token,finalPrice) => {
        const res = await axios.post('http://localhost:8080/checkout',{token,finalPrice})
        const {status} = res.data
        console.log(res)
       if(status === 200) {
            toast("Success! Check email for details",{type: 'success'})
        } else {
            toast("Something went wrong!",{type: 'error'})
        } 
    }
    
    if(isNaN(hotelId)) {return(<Error/>)}
    if(isNaN(roomId)) {return(<Error/>)}
    if(hotelId < 0 || hotelId > 10) {return(<Error/>)}
    if(roomId < 0 || roomId > 4) {return(<Error/>)}
   
    if(!hotel) {
        return null
    } else {
        const roomPrice =parseInt(hotel.rooms.filter(room =>(room.id === roomId))[0].price.split('$')[1])
        
        return(
            <div className={classes.wrapper}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <TextField 
                    value={days}
                    onChange={(e) => {
                        setDays(Math.abs(e.target.value))
                        setPrice(roomPrice)
                    }} 
                    type="number" 
                    label="Days i wish to stay" 
                    style={{width:'250px',marginTop:'16px'}}/>
                    <KeyboardDatePicker
                        disablePast={true}
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Check in date"
                        value={checkIndate}
                        onChange={handleCheckInDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <StripeCheckout 
                    style={{width:'250px',marginTop:'1.5vw'}}
                    stripeKey="pk_test_51Hbr14I0gL9dBjcHkrfk0K7GphgypgL15NuYA7Gy0Gg3nqDKhH8kedq4KCk6hXgQ1DKfROs9KfE2K9JAunJwKzn400n5fel1Oi"
                    billingAddress
                    amount={finalPrice}
                    token={handleToken}
                    />
                </MuiPickersUtilsProvider>
            </div>
        )
    }
    
  
}

export default BookRoom;