import React,{useState,useEffect} from 'react';
import Btn from './Button';
import {makeStyles} from '@material-ui/core';
import 'date-fns';
import {useHistory as history} from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Error from './Error';
import {TextField} from '@material-ui/core';
import { useHotels } from './DatabaseContext';
import axios from 'axios';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Hbr14I0gL9dBjcHkrfk0K7GphgypgL15NuYA7Gy0Gg3nqDKhH8kedq4KCk6hXgQ1DKfROs9KfE2K9JAunJwKzn400n5fel1Oi')

const useStyles = makeStyles((theme) =>({
    wrapper : {
        paddingTop:'60px',
        width:'100vw',
        height: 'calc(100vh - 5px - 3rem - 25vh - 2vw)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down(600)] : {
            height:'85vh'
        }
    },
    card : {
        height: '40px',
        marginTop:'16px',
        border : '1px solid black',
        padding:'10px 12px',
        borderRadius:'4px',
    },
    form : {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        width:'500px',
        textAlign:'center',
        [theme.breakpoints.down(600)] : {
            width : '250px'
        }
    }
}))

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const {allHotels} = useHotels()
    const hotelId =parseInt(window.location.href.split('/')[4])
    const roomId = parseInt(window.location.href.split('/')[6])
    const hotel = allHotels.filter(hotel => (hotel.id === hotelId))[0]
    const classes=useStyles()
    const [checkIndate,setCheckInDate] = useState(null)
    const handleCheckInDate = (date) => {
        setCheckInDate(date)
    }
    const [isProcessing,setIsProcessing] = useState(false)
    const [days,setDays] = useState(0)
    const [price,setPrice] = useState(0)
    const [finalPrice,setFinalPrice] = useState(0)
    useEffect(() => {
        setFinalPrice( days * price)
    },[days])
    
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsProcessing(true)
        const billing_details = {
            name : e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            address : {
                line1: e.target.address.value
            }
        }
        try{
            const paymentIntent = await axios.post('http://localhost:8080/checkout',{amount:finalPrice * 100})
            const paymentMethod = await stripe.createPaymentMethod({
                type:'card',
                card : elements.getElement(CardElement),
                billing_details 
            })
    
            const confirmPayment = await stripe.confirmCardPayment(paymentIntent.data,{
                payment_method:paymentMethod.paymentMethod.id
            })
            console.log(paymentIntent)
            console.log(paymentMethod)
            setIsProcessing(false)
            window.location.replace('/successpay')
        } catch(err){
            window.location.replace('/errorpay')
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
               <form onSubmit={handleSubmit} className={classes.form}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <TextField
                        required={true} 
                        value={days}
                        onChange={(e) => {
                            setDays(Math.abs(e.target.value))
                            setPrice(roomPrice)
                        }} 
                        type="number" 
                        label="Days i wish to stay" 
                        /><TextField
                        required={true}
                        name="name"
                        type="text"
                        label="Full Name"
                        />
                        <TextField
                        required={true}
                        name="phone"
                        type="text"
                        label="phone"
                        />
                        <TextField
                        required={true}
                        name="email"
                        type="text"
                        label="email"
                        />
                        <TextField
                        required={true}
                        name="address"
                        type="text"
                        label="address"
                        />
                        <KeyboardDatePicker
                            disablePast={true}
                            required={true}
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
                            <CardElement className={classes.card}/>
                            <Btn 
                            isProcessing={isProcessing} 
                            stl={{width:'100%'}} 
                            text={isProcessing ? 'Processing...' :`Pay $${finalPrice}`} 
                            type="submit"/>
                    </MuiPickersUtilsProvider>
                </form>
            </div>
        )
    }
}


    
const Checkout = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm/>
    </Elements>
)

export default Checkout;