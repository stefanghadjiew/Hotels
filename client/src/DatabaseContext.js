import React,{ useState,useEffect,useContext,createContext } from 'react';
import DB from './Database'; 


export const Database = createContext()

export const useFeaturedHotels = () => {
    return useContext(Database)
}
export const DatabaseProvider = ({children}) => {
    const [state,setState] = useState({
        featuredHotels:[],
    })
   const featuredHotels = DB.hotels.filter(hotel => hotel.featured === true)
    
    useEffect(() => {
       setState({featuredHotels});
    },[]) 
    
    return (
        <Database.Provider value={state}>
            {children}
        </Database.Provider>
    )
} 



