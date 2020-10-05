import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from '@material-ui/core';
import SubjectIcon from '@material-ui/icons/Subject';
import HotelIcon  from '@material-ui/icons/Hotel';
import HomeIcon from '@material-ui/icons/Home';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const handleMenu = () => {
        setIsOpen(!isOpen)
    }
    const navStyles = {
        nav : {
            zIndex:"100",
            display: "flex",
            position : "fixed",
            width: "100%",
            height: "60px",
            backgroundColor:"#fff",
            justifyContent:"space-between"
        },
        logo : {
            display : "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            textTransform: "capitalize",
            fontWeight:"bold",
            margin: "0.75rem",
            fontSize: "1.5rem"
        }
    }
    
    return (
        <>
            {isOpen && ( 
                <Drawer anchor={'top'} open={isOpen} onClose={handleMenu}>
                     <List>
                        {[{text:'Home',icon:<HomeIcon/>},{text:'Hotels',icon:<HotelIcon/>},{text:'Reservations',icon:<DoneOutlineIcon/>}].map((item,index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.text}</ListItemText>
                        </ListItem>
                        ))}
                    </List>
                </Drawer>
            )} 
            <nav style={navStyles.nav}>
                <div style={navStyles.logo}>
                    <Link to="/" style={{textDecoration:"none",letterSpacing:"3px"}}>
                        <span style={{color:"#51e2f5"}}>
                            Dream
                        </span>
                        <span style={{color:"black"}}>
                            Hotels
                        </span>    
                    </Link>
                </div>
                <div style={{margin:"auto 0 auto 0"}}>
                    <IconButton onClick={handleMenu}>
                        <SubjectIcon/>
                    </IconButton>
                </div>
                
            </nav>
        </>
    )
}

export default Navbar;