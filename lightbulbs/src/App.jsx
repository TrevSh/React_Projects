import { useState } from 'react'
import './App.css'
import LIGHT from './light.jsx'

const LIGHT_OFF = './src/assets/light_off.jpg'
const LIGHT_ON = './src/assets/light_on.png'

//SEPERATE EVERYTHING INTO SEPERATE COMPONENT CALLED LIGHT (CAPITAL)
//Render 5 light components
//MUST HAVE 5 LIGHT BULBS AND 5 SWITCHES EACH WITH THEIR OWN STATE

//AFTER, CREATE NEW COMPONENT CALLED MASTER SWITCH
//MASTER SWITCH WILL CONTROL ANOTHER PIECE OF STATE THAT CAN BE PASSED
//INTO EACH LIGHT AS PROP
//IF MASTER SWITCH IS ON, ALL SWITCHES ARE ON. ELSE, NORMAL FUNCTIONS

  //A prop is a passable varibale
  //WATCH YOUTUBE VIDEO IN EMAIL FROM TYLER

export function MASTERSWITCH(){
  const [isGlobalOn, setGlobalSwitch] = useState(false);

  const toggleLights = () => {
    setGlobalSwitch(!isGlobalOn)
    console.log(isGlobalOn);
  };

  return (
    <div>
      <h1>These are Lightbulbs</h1>
      <button onClick={toggleLights}>{isGlobalOn ? "Turn off all lights": "Lock lights \"ON\""}</button>
      <div className='SwitchBox'>
        <LIGHT globalSwitch = {isGlobalOn}/>
        <LIGHT  globalSwitch = {isGlobalOn}/>
        <LIGHT  globalSwitch = {isGlobalOn}/>
        <LIGHT  globalSwitch = {isGlobalOn}/>
        <LIGHT  globalSwitch = {isGlobalOn}/>
      </div>
    </div>
  )
}

export default MASTERSWITCH;