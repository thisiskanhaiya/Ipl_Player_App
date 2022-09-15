import React,{useContext} from 'react'
import {PlayerContext} from '../context/PlayerContext';
import "../App.css"
export default function ShowPlayer() {
  // initialise the player info using useContext hook
const {serverData} = useContext(PlayerContext) 
  console.log(serverData);   
    return (
        <div className="data-table">
          
             {/* display player data as a table */}
             <div style={{marginTop:'100px',border:'5px solid black',width:'600px',borderRadius:'15px'}}>
             <table>
              <tr style={{borderBottom: '4px solid black',fontSize: '32px'}}>
                <th> Id </th>
                <th> Name </th>
                <th> Country </th>
                <th> Matches Played </th>
              </tr>
              {serverData.map((item,index)=>{
                return(
                  <tr key={index} style={{ borderBottom: '4px solid black',fontSize: '16px'}}>
                <th> {index+1} </th>
                <th> {item.name} </th>
                <th> {item.country} </th>
                <th> {item.matchesPlayed}</th>
              </tr>
                )
              })}

             </table>
             </div>
             
            </div>
    )
}
