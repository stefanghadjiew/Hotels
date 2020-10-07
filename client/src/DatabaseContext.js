import React,{ useState,useEffect,useContext,createContext } from 'react';
import DB from './Database'; 


export const Database = createContext()

export const useHotels = () => {
    return useContext(Database)
}
export const DatabaseProvider = ({children}) => {
    const [state,setState] = useState({
        allHotels:[],
        featuredHotels:[],
    })
   const featuredHotels = DB.hotels.filter(hotel => hotel.featured === true)
   const allHotels = DB.hotels 
    useEffect(() => {
       setState({allHotels,featuredHotels});
    },[]) 
    
    return (
        <Database.Provider value={state}>
            {children}
        </Database.Provider>
    )
} 



