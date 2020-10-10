import React,{ useState } from 'react';
import { useHotels } from './DatabaseContext';
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import RoomsInput from './RoomsInput';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles((theme) =>({
    roomsWrapper : {
        display: 'flex',
        flexDirection:'column',
        margin:'0 2.5vw',
        paddingTop:'60px'
    },
    overlay : {
        zIndex:'101',
        position: 'absolute',
        top: '0',
        width:'100%',
        height:'100%',
        left: '0',
        backgroundColor:'#17202A',
        opacity:'0', 
        zIndex: '100',
        transition:'all .5s',
        '&:hover' : {
            opacity:'0.6'
        }
    },
    room : {
        position: 'relative',
        display: 'flex',
        marginBottom:'2.5vw',
        width:'100%',
        height:'50vh',
        backgroundSize:'cover',
        backgroundPosition:'center',
        justifyContent: 'center',
        alignItems:'center',
        '&:hover button' : {
            opacity:'1'
        },
    },
    button: {
        zIndex:'101',
        width:'200px',
        backgroundColor:"#51e2f5", 
        fontWeight:"bold",
        opacity:'0',
        transition:'all 0.5s',
        '&:hover':{
            backgroundColor:'#2E86C1'
        },
    },
    inputWrapper : {
        display:'flex',
        flexDirection:'column',
        margin:'2.5vw 0',
        maxWidth:250
    }
   
}))

const Rooms = () => {
    const [state,setState] = useState({
        price:'',
        size:'',
        breakfast:false,
        pets:false,
    })
    const classes = useStyles()
    const {allHotels} = useHotels()
    const urlArr = window.location.href.split('/')
    const id = parseInt(urlArr[(urlArr.length - 2)]) 
    const currentHotel = allHotels.filter(hotel =>(hotel.id === id))[0]
    const getPrice = (price) => {
        setState({...state,price})
    }
    const getSize = (size) => {
        setState({...state,size})
    }
   
    if(!currentHotel) {
        return null
    } else {
        const price = currentHotel.rooms.map(hotel =>(hotel.price))
        const size = currentHotel.rooms.map(hotel => (hotel.size))
        const roomsToRender =currentHotel.rooms.map((room,index) => (
            <div style={{backgroundImage:`url(${room.img})`}} key={index} className={classes.room}>
                <div className={classes.overlay}></div>
                <div>
                    <Button className={classes.button}>Room</Button>
                </div>
            </div>
        )) 
         return (
            <div className={classes.roomsWrapper}>
                <div className={classes.inputWrapper}>
                    <RoomsInput input="Price" value={state.price} data={price} getPrice={getPrice}/>
                    <RoomsInput input="Size" value={state.size} data={size} getSize={getSize}/>
                    <FormControl>
                        <FormControlLabel onChange={() => {setState({...state,breakfast:true})}} value={state.breakfast} control={<Radio />} label="breakfast"/>
                        <FormControlLabel onChange={() => {setState({...state,pets:true})}} value={state.pets} control={<Radio />} label="pets"/>
                    </FormControl>
                </div>
                {roomsToRender} 
            </div> 
        )
    }
}
    
    


export default Rooms;