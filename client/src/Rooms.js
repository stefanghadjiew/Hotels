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
    const [checkedBreakfast,setCheckedBreakfast] = useState(false)
    const handleCheckedBreakfast = () => {
        setCheckedBreakfast(!checkedBreakfast)
    }
    const [checkedPets,setCheckPets] = useState(false)
    const handleCheckedPets = () => {
        setCheckPets(!checkedPets)
    }
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
    const handleBreakfastClick = (e) => {
        if(e.target.value !== state.breakfast) {
            setState({...state,breakfast:!state.breakfast})
        }
    }
    const handlePetsClick = (e) => {
        if(e.target.value !== state.pets) {
            setState({...state,pets:!state.pets})
        }
    }
    if(!currentHotel) {
        return null
    } else {
        let rooms = currentHotel.rooms
        const price = currentHotel.rooms.map(hotel =>(hotel.price))
        const size = currentHotel.rooms.map(hotel => (hotel.size))
       
            if(state.breakfast) {
                rooms = rooms.filter(room => room.breakfast === state.breakfast)
            }
            if(state.pets) {
                rooms = rooms.filter(room => room.pets === state.pets)
            }
            if(state.price) {
                rooms = rooms.filter(room => room.price === state.price)
            }
            if(state.size) {
                rooms = rooms.filter(room => room.size === state.size)
            }
            
            const roomsToRender =rooms.map((room,index) => (
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
                        <FormControlLabel checked={checkedBreakfast} onClick={handleCheckedBreakfast} value={state.breakfast} control={<Radio onClick={handleBreakfastClick} />} label="breakfast"/>
                        <FormControlLabel checked={checkedPets}  onClick={handleCheckedPets} value={state.pets} control={<Radio onClick={handlePetsClick}/>} label="pets"/>
                    </FormControl>
                </div>
                {roomsToRender} 
            </div> 
        )
    }
}
    
    


export default Rooms;