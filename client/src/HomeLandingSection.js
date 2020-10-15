import React from 'react';
import homeImage  from "./images/hotels/homeImage.jpg";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Btn from './Button';
import BottomBorder from './BottomBorder';

const useStyles = makeStyles((theme) =>({
    first : {
        height : "100vh",
        paddingTop:'60px',
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontSize:"2vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign:"center",
        textTransform:"uppercase",
        color:"#51e2f5",
        textShadow : "2px 2px black"
    },
    second : {
        backgroundColor:"rgba(89,89,89,0.7)",
        minWidth:"60%",
        margin:"1rem",
        padding:"1rem"
    },
  
   
}))

const HomeLandingSection = () => {
    const classes = useStyles()
    return(
        <div className={classes.first}>
        <div className={classes.second}>
            <h1 style={{letterSpacing:'2px',fontFamily:'sans-serif'}}>Time to find the hotel that will fulfil your every desire</h1>
            <BottomBorder/>
            <Link style={{textDecoration:'none'}} to="/Hotels/all">
                <Btn text="Hotels"/>
            </Link>
        </div>
    </div>
    )
}

export default HomeLandingSection;