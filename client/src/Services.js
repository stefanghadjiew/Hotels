import React , { useState } from 'react';
import LocalBarIcon from "@material-ui/icons/LocalBar";
import PoolIcon from '@material-ui/icons/Pool';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Services = () => {
    const styles = {
        bottomBorder : {
            backgroundColor:"#F4D03F",
            height:"5px",
            width:"25%",
            margin:"1.5rem auto"
        },
        icon : {
            height:"50px",
            width:"50px"
        },
        card : {
            maxWidth : "225px",
            maxHeight:"275px",
            backgroundColor:"#51e2f5 ",
            margin:"0.5rem",
            boxShadow:"2px 3px 4px 4px black"
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
        }
    }
    
    const [state,setState] = useState({
        services: [
            {
               icon:  <LocalBarIcon style={styles.icon}/>,
               title : "Best Cocktails",
               info : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a tellus cursus, pellentesque sem quis, tempus nisi." 
            },
            {
               icon:  <PoolIcon style={styles.icon}/>,
               title : "Free Swimming",
               info : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a tellus cursus, pellentesque sem quis, tempus nisi." 
            },
            {
               icon:  <NaturePeopleIcon style={styles.icon}/>,
               title : "Endless Hiking",
               info : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a tellus cursus, pellentesque sem quis, tempus nisi." 
            },
            {
               icon:  <AirportShuttleIcon style={styles.icon}/>,
               title : "Free Shuttle",
               info : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a tellus cursus, pellentesque sem quis, tempus nisi." 
            },
        ]
    })
    
    
    const renderServices = state.services.map((item,index) => {
        return (
            <Card key={index} style={styles.card}>
                <CardContent>
                    {item.icon}
                    <h1 style={{fontSize:"1rem",margin:"1rem",textTransform:"capitalize"}}>{item.title}</h1>
                    <p>{item.info}</p>
                </CardContent>
            </Card>
        )
    })
    
    return (
        <div style={{backgroundColor:"#51e2f5",textAlign:"center"}}>
        <h1 style={{padding:"1rem",fontWeight:"900"}}>Services</h1>
        <div style={styles.bottomBorder}></div>
        <div style={styles.cardContainer}>
            {renderServices}
        </div>
    </div>
    )
}

export default Services;