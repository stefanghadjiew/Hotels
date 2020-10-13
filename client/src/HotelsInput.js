import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const HotelsInput = ({input,data,getHotelName,getPrice,getLocation,value}) => {
    
    const handleChange= (e) => {
       if(getHotelName){
            getHotelName(e.target.value)
        }
        if(getPrice) {
            getPrice(e.target.value)
        }
        if(getLocation){
            getLocation(e.target.value)
        }
    }
    
    return (
        <FormControl  style={{minWidth:250}}>
            <InputLabel fullWidht="true" id={`${input}`} >{input}</InputLabel>
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