import React,{useState,createContext,useEffect} from 'react' 
import axios from 'axios';


export const PlayerContext=createContext();
export const PlayerProvider=(props) =>{
     
    // declare the player hook here
    const [serverData,setServerData]=useState([]);
     
        useEffect(()=>{ 
             axios.get("http://localhost:4000/players")
            .then((res)=>{
                setServerData(res.data)
            }
                
            ).catch((err)=>{
                throw  err;
            })
            // console.log(serverData);
            // initialise player array using axios get method from json file
            // using json server api
        });
    
    return (
        <PlayerContext.Provider value={{serverData}}>
            { props.children}
        </PlayerContext.Provider>
    )
}
