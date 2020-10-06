import React , { useEffect }  from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core';
import {useFeaturedHotels} from './DatabaseContext';

const useStyles = makeStyles((theme) => ({
    bottomBorder : {
        backgroundColor:"#F4D03F",
        height:"5px",
        width:"25%",
        margin:"1.5rem auto"
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
    },
    button : {
        color:"black",
        backgroundColor:"#2E86C1", 
        fontWeight:"bold",
        letterSpacing:"2px",
        '&:hover':{
            backgroundColor:'#51e2f5 ',
        }
    },
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

const HomeHotels = () => {
    const classes = useStyles()
    const { featuredHotels } = useFeaturedHotels()
    const renderHotels = featuredHotels.map(hotel => {
        return (
            <Card 
            key={hotel.id}
            className={classes.card} 
            style={{backgroundImage:`url(${hotel.img})`}}>
                <CardContent style={{display:"flex",flexDirection:"column",padding:0}}>
                    <Button size="large" variant="contained" className={classes.button}>Take Me There</Button>
                    <div style={{height:"50px",width:"70px",backgroundColor:"black",color:"white",borderBottomRightRadius:"20px"}}>{hotel.price}<br/> <span style={{fontSize:"xx-small"}}>per night</span></div>
                    <div style={{backgroundColor:"#F4D03F",marginTop:"100%"}}>
                        <p style={{margin:"0.5rem",fontWeight:"900"}}>{hotel.name}</p> 
                    </div>
                </CardContent>
            </Card>
        )
    }) 
       
    

    return(
        <div style={{textAlign:"center"}}>
        <h1 style={{padding:"1rem",fontWeight:"900"}}>Crown Jewels</h1>
            <div className={classes.bottomBorder}></div>
            <div className={classes.cardContainer}>
                {renderHotels}
            </div>
        </div> 
    )
   
}

export default HomeHotels;