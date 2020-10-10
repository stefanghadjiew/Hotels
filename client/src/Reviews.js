import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=> ({
    avatar : {
        width: '60px',
        height:'60px'
    }
}))



const Reviews = ({hotelToRender}) => {
    const classes = useStyles()
    const reviewers = hotelToRender.reviews.map((reviewer,index) =>(
        <Accordion key={index}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            >
                <Typography>
                    <Avatar 
                        className={classes.avatar} 
                        alt={`${reviewer.name}`} 
                        src={`${reviewer.img}`}
                        />
                        {reviewer.name}
                </Typography>
                <StarIcon style={{color:'#F1C40F'}}/>
                <StarIcon style={{color:'#F1C40F'}}/>
                <StarIcon style={{color:'#F1C40F'}}/>
                <StarIcon style={{color:'#F1C40F'}}/>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {reviewer.text}
                </Typography>
            </AccordionDetails>
        </Accordion> 
    ))
    
    return(
        <>
            {reviewers}
        </>    
    )
}

export default Reviews;