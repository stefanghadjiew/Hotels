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
import { makeStyles } from '@material-ui/core'; 


const useStyles = makeStyles((theme) =>({
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
    },
    button : {
       [theme.breakpoints.up("541")]: {
           display:'none'
       },
        '&:hover' : {
            backgroundColor:'#51e2f5',
        }
    }
}))

const Navbar = () => {
    const classes = useStyles()
    const [isOpen,setIsOpen] = useState(false)
    const handleMenu = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            {isOpen && ( 
                <Drawer anchor={'top'} open={isOpen} onClose={handleMenu}>
                     <List>
                        {[{text:'Home',icon:<HomeIcon/>},{text:'Hotels',icon:<HotelIcon/>},{text:'Reservations',icon:<DoneOutlineIcon/>}].map((item,index) => (
                        <ListItem button key={index} >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.text}</ListItemText>
                        </ListItem>
                        ))}
                    </List>
                </Drawer>
            )} 
            <nav className={classes.nav}>
                <div className={classes.logo}>
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
                    <IconButton className={classes.button} onClick={handleMenu}>
                        <SubjectIcon/>
                    </IconButton>
                </div>
                
            </nav>
        </>
    )
}

export default Navbar;