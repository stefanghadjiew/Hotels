import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const RoomsInput = ({input,value,data,getSize,getPrice}) => {
    

    const handleChange = (e) => {
        if(getPrice) {
            getPrice(e.target.value)
        }   
        if(getSize) {
            getSize(e.target.value)
        }
    }
   
    return (
        <FormControl>
            <InputLabel>{input}</InputLabel>
            <Select
            value={value}
            onChange={handleChange}
            >
                {data.map((d,index) => (
                    <MenuItem value={d} key={index}>{d}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default RoomsInput;