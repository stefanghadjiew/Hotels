import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Btn from './Button';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) =>({
    card : {
        backgroundSize:"cover",
        backgroundPosition:"center",
        minWidth:"225px",
        minHeight:"275px",
        margin:"0.5rem",
        [theme.breakpoints.up('360')] : {
            minWidth: '320px'
        }
    } 
}))

const HotelCard = ({hotel}) => {
    const classes = useStyles()
        return (
            <Card 
            className={classes.card} 
            style={{backgroundImage:`url(${hotel.img})`}}>
                <CardContent style={{display:"flex",flexDirection:"column",padding:0}}>
                    <Link style={{textDecoration:'none'}} to={`/Hotels/all/${hotel.id}`}>
                        <Btn text="Take Me There" stl={{ width:'100%'}}/>
                    </Link>
                    <div style={{height:"50px",width:"70px",backgroundColor:"black",color:"white",borderBottomRightRadius:"20px"}}>{hotel.price}<br/> <span style={{fontSize:"xx-small"}}>per night</span></div>
                    <div style={{backgroundColor:"#F4D03F",marginTop:"100%"}}>
                        <p style={{margin:"0.5rem",fontWeight:"900"}}>{hotel.name}</p> 
                    </div>
                </CardContent>
            </Card>
        )
}

export default HotelCard;