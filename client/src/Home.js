import React , { useState }from "react";
import homeImage  from "./images/homeImage.jpg";
import oneOfBest1 from "./images/oneOfBest1.jpg";
import oneOfBest2 from "./images/oneOfBest2.jpg";
import oneOfBest3 from "./images/oneOfBest3.jpg";
import oneOfBest4 from "./images/oneOfBest4.jpg";
import oneOfBest5 from "./images/oneOfBest5.jpg";
import oneOfBest6 from "./images/oneOfBest6.jpg";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import PoolIcon from '@material-ui/icons/Pool';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

const Home = () => {
    const homeStyles = {
        first : {
            height : "100vh",
            backgroundImage: `url(${homeImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            fontSize:"0.5rem",
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
        third : {
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
        card : {
            maxWidth : "225px",
            maxHeight:"275px",
            backgroundColor:"#51e2f5 ",
            margin:"0.5rem",
            boxShadow:"2px 3px 4px 4px black"
        },
        icon : {
            height:"50px",
            width:"50px"
        }
    }
    
    const [state,setState] = useState({
        services: [
            {
               icon:  <LocalBarIcon style={homeStyles.icon}/>,
               title : "Best Cocktails",
               info : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a tellus cursus, pellentesque sem quis, tempus nisi." 
            },
            {
               icon:  <PoolIcon style={homeStyles.icon}/>,
               title : "Free Swimming",
               info : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a tellus cursus, pellentesque sem quis, tempus nisi." 
            },
            {
               icon:  <NaturePeopleIcon style={homeStyles.icon}/>,
               title : "Endless Hiking",
               info : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a tellus cursus, pellentesque sem quis, tempus nisi." 
            },
            {
               icon:  <AirportShuttleIcon style={homeStyles.icon}/>,
               title : "Free Shuttle",
               info : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a tellus cursus, pellentesque sem quis, tempus nisi." 
            },
        ]
    })

    const renderServices = state.services.map((item,index) => {
        return (
            <Card key={index} style={homeStyles.card}>
                <CardContent>
                    {item.icon}
                    <h1 style={{fontSize:"1rem",margin:"1rem",textTransform:"capitalize"}}>{item.title}</h1>
                    <p>{item.info}</p>
                </CardContent>
            </Card>
        )
    })

    const [hotelState,setHotelstate] = useState({
        hotels : [
            {
                img:oneOfBest1,
                name:"The Punisher",
            },
            {
                img:oneOfBest2,
                name:"Daredevil",
            },
            {
                img:oneOfBest3,
                name:"Vengance",
            },
            {
                img:oneOfBest4,
                name:"Stan",
            },
            {
                img:oneOfBest5,
                name:"Loose yourself",
            },
            {
                img:oneOfBest6,
                name:"Wonder Man",
            },
    ]
    })

    const renderHotels = hotelState.hotels.map((hotel,index) => {
        return (
            <Card 
            key={index} 
            style={{backgroundImage:`url(${hotel.img})`,backgroundSize:"cover",backgroundPosition:"center",minWidth:"225px",minHeight:"275px",margin:"0.5rem"}}>
                <CardContent style={{display:"flex",flexDirection:"column",padding:0}}>
                    <Button size="large" variant="contained" style={homeStyles.button}>Take Me There</Button>
                    <div style={{backgroundColor:"#F4D03F",marginTop:"100%"}}>
                        <p style={{margin:"0.5rem",fontWeight:"900"}}>{hotel.name}</p> 
                    </div>
                    
                </CardContent>
            </Card>
        )
    })

    return (
        <>
            <div style={homeStyles.first}>
                <div style={homeStyles.second}>
                    <h1>Time to find the hotel that will fulfil your every desire</h1>
                    <div style={homeStyles.third}></div>
                    <Button size="large" variant="contained" style={homeStyles.button}>Hotels</Button>
                </div>
            </div>
            <div style={{backgroundColor:"#E5E7E9",textAlign:"center"}}>
                <h1 style={{padding:"1rem",fontWeight:"900"}}>Services</h1>
                <div style={homeStyles.third}></div>
                <div style={homeStyles.cardContainer}>
                    {renderServices}
                </div>
            </div>
            <div style={{textAlign:"center"}}>
            <h1 style={{padding:"1rem",fontWeight:"900"}}>Crown Jules</h1>
                <div style={homeStyles.third}></div>
                <div style={homeStyles.cardContainer}>
                    {renderHotels}
                </div>
            </div>
        </>
    )
}

export default Home;