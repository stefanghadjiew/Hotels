import React,{ useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const HotelsInput = ({input,data,getHotelName,getPrice,getLocation,value}) => {
    const [state,setState] = useState('')
    const handleChange= (e) => {
       if(getHotelName){
            setState(value)
            getHotelName(e.target.value)
        }
        if(getPrice) {
            setState(value)
            getPrice(e.target.value)
        }
        if(getLocation){
            setState(value)
            getLocation(e.target.value)
        }
    }
    
    return (
        <FormControl  style={{maxWidth:250}}>
            <InputLabel id={`${input}`}>{input}</InputLabel>
            <Select
            value={value}
            onChange={handleChange}
            labelId={`${input}`}>
                {data.map((d,index) =>(
                    <MenuItem value={d} key={index}>{d}</MenuItem>
                ))} 
            </Select>
        </FormControl>
            
        
    )
   
}

export default HotelsInput;