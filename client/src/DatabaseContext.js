import React from 'react';
 
import oneOfBest1 from "./images/oneOfBest1.jpg";
import oneOfBest2 from "./images/oneOfBest2.jpg";
import oneOfBest3 from "./images/oneOfBest3.jpg";
import oneOfBest4 from "./images/oneOfBest4.jpg";
import oneOfBest5 from "./images/oneOfBest5.jpg";
import oneOfBest6 from "./images/oneOfBest6.jpg";

export const Database = React.createContext()

const DB = {
    hotels : [
        {
            id:1,
            img:oneOfBest1,
            name:"The Punisher",
            price: "$399"
        },
        {
            id:2,
            img:oneOfBest2,
            name:"Daredevil",
            price:"$499"
        },
        {
            id:3,
            img:oneOfBest3,
            name:"Vengance",
            price:"$429"
        },
        {
            id:4,
            img:oneOfBest4,
            name:"Stan",
            price:"$469"
        },
        {
            id:5,
            img:oneOfBest5,
            name:"Loose yourself",
            price:"$499"
        },
        {
            id:6,
            img:oneOfBest6,
            name:"Wonder Man",
            price:"$419"
        },
    ]
}

export const DatabaseProvider = ({children}) => {
    return (
        <Database.Provider value={DB}>
            {children}
        </Database.Provider>
    )
} 

