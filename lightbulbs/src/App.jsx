import { useState } from 'react'
import './App.css'
import Light from './light.jsx'

export function MasterSwitch(){
  const [isGlobalOn, setGlobalSwitch] = useState(false);

  const toggleLights = () => {
    setGlobalSwitch(!isGlobalOn);
  };

  return (
    <div>
      <h1>These are Lightbulbs</h1>
      <button onClick={toggleLights}>
        {isGlobalOn ? 
        "Turn off all lights":
        "Lock lights \"ON\""}
      </button>
      <div className='SwitchBox'>
        <Light globalSwitch={isGlobalOn} />
        <Light globalSwitch={isGlobalOn} />
        <Light globalSwitch={isGlobalOn} />
        <Light globalSwitch={isGlobalOn} />
        <Light globalSwitch={isGlobalOn} />
      </div>
    </div>
  )
}

export default MasterSwitch;