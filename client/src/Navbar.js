import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from '@material-ui/core';
import SubjectIcon from '@material-ui/icons/Subject';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const handleMenu = () => {
        setIsOpen(!isOpen)
    }
    const navStyles = {
        nav : {
            zIndex:"1000",
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
    )
}

export default Navbar;