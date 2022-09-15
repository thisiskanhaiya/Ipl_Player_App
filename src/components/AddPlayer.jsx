import React, { Component } from 'react'
import {PlayerContext} from '../context/PlayerContext';
import axios from 'axios';
export default class AddPlayer extends Component {
         initialState={
          playerName:" ",
          countryName:" ",
          totalMatchesPlayed:" "
        }
        state=this.initialState
      handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value})
      }

      //  declare state with required properties
     submitHandler=(e)=>{
       e.preventDefault();
      
      axios.post("http://localhost:4000/players",{
        name:this.state.playerName,
        country:this.state.countryName,
        matchesPlayed:this.state.totalMatchesPlayed
      }).then((res)=>{
        console.log(res);
        alert("player added SuccessFully")
        this.setState({
          playerName:" ",
          countryName:" ",
          totalMatchesPlayed:" "
        })
        this.context.setIsChanged((prev)=>!prev)
      })
     }
      // declare and initialise players ,setPlayers from context 
      // use axios.post to send new player data to json api
      // and store the same to context also using setPlayer 

      // reset the text fields and show acknowledgement
      
    
    render() {

        return (
            
          <div style={{ textAlign:'center', width:'50%', height:'50%', border:'6px solid green',marginTop:'80px',borderRadius:'12px',boxShadow:'4px 4px 10px green'}}>
          <form onSubmit={this.submitHandler} id="addingPlayerForm">
          <div style={{margin:'20px 0px'}}>
          <label> Player Name : {'  '}
            <input type="text" name="playerName" value={this.state.playerName} id="playername" placeholder='Name.....' onChange={this.handleChange} />
            </label>
          </div>
           
           <div style={{margin:'20px 0px'}}>
           <label> Player Country :{'  '}
            <input type="text" value={this.state.countryName}  name="countryName"  id="country" placeholder='Country.....' onChange={this.handleChange} /> 
            </label>
           </div>
            
            <div style={{margin:'20px 0px'}}>
            <label> Total Matches Played :{'  '}
            <input type="text" value={this.state.totalMatchesPlayed}  name="totalMatchesPlayed"  placeholder='Matches Played.....' onChange={this.handleChange}/> 
            </label>
            </div>

            <button type="onSubmit" style={{marginBottom:'10px'}}onClick={this.submitHandler} class="btn btn-primary"> Add Player</button>
          </form>
         
             {/* display form to accept name,country and matchesPlayed  of a player */}
            </div>
        )
    }
}
AddPlayer.contextType=PlayerContext;
