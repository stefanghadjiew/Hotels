import React from 'react';
import homeImage  from "./images/hotels/homeImage.jpg";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

const HomeLandingSection = () => {
    const styles = {
        first : {
            height : "100vh",
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
            width:"60%",
            margin:"1rem",
            padding:"1rem"
        },
        bottomBorder : {
            backgroundColor:"#F4D03F",
            height:"5px",
            width:"25%",
            margin:"1.5rem auto"
        },
        button : {
            color:"black",
            backgroundColor:"#51e2f5",
            fontWeight:"bold",
            letterSpacing:"2px"
        },
    }

    return(
        <div style={styles.first}>
        <div style={styles.second}>
            <h1>Time to find the hotel that will fulfil your every desire</h1>
            <div style={styles.bottomBorder}></div>
            <Link style={{textDecoration:'none'}} to="/hotels">
                <Button size="large" variant="contained" style={styles.button}>Hotels</Button>
            </Link>
        </div>
    </div>
    )
}

export default HomeLandingSection;