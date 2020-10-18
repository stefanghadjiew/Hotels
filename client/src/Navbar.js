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
        zIndex:"102",
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
       [theme.breakpoints.up(541)]: {
           display:'none'
       },
        '&:hover' : {
            backgroundColor:'#51e2f5',
        }
    },
    link : {
        textDecoration:'none',
        color:'inherit',
        transition:'.3s ease',
        '&:hover':{
            color:'#F4D03F'
        }
    },
    menu : {
        [theme.breakpoints.down(541)] : {
            display:'none'
        },
        width: "50%",
        display:'flex',
        alignItems: "center",
        justifyContent:'space-evenly',
        
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
                <Drawer  anchor={'top'} open={isOpen} onClose={handleMenu}>
                     <List  style={{backgroundColor:'#51e2f5'}}>
                        {[
                            {text:'Home',icon:<HomeIcon/>,link:'/'},
                            {text:'Hotels',icon:<HotelIcon/>,link:'/Hotels/all'},
                            {text:'Reservations',icon:<DoneOutlineIcon/>,link:'/Hotels/reservations'}
                        ].map((item,index) => (
                            <Link key={index} to={`${item.link}`} className={classes.link}>
                                <ListItem button key={index}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText>{item.text}</ListItemText>
                                </ListItem>
                            </Link>
                        
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
                <div className={classes.menu}>
                    <Link to="/" className={classes.link}>
                        <h4>Home</h4>
                    </Link>
                    <Link to="/Hotels/all" className={classes.link}>
                        <h4>Hotels</h4>
                    </Link>
                    <Link to="/reservations" className={classes.link}>
                        <h4>Reservations</h4>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;