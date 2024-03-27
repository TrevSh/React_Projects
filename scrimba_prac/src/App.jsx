import { useState } from 'react'
import './App.css'

const LIGHT_OFF = 'imgs/light_off.jpg'
const LIGHT_ON = 'imgs/light_on.png'


function App() {
  //SEPERATE EVERYTHING INTO SEPERATE COMPONENT CALLED LIGHT (CAPITAL)
  //Render 5 light components
  //MUST HAVE 5 LIGHT BULBS AND 5 SWITCHES EACH WITH THEIR OWN STATE

  //AFTER, CREATE NEW COMPONENT CALLED MASTER SWITCH
  //MASTER SWITCH WILL CONTROL ANOTHER PIECE OF STATE THAT CAN BE PASSED
  //INTO EACH LIGHT AS PROP
  //IF MASTER SWITCH IS ON, ALL SWITCHES ARE ON. ELSE, NORMAL FUNCTIONS

  //A prop is a passable varibale
  //WATCH YOUTUBE VIDEO IN EMAIL FROM TYLER
  const [imgPath, setImgPath] = useState(LIGHT_OFF)

  // const toggleLight = ()=>{
  //   if(imgPath === LIGHT_OFF)
  //     setImgPath(LIGHT_ON)
  //   else
  //     setImgPath(LIGHT_OFF)
  // }

  const toggleLight = () => {
    const newPath = imgPath === LIGHT_ON ? LIGHT_OFF : LIGHT_ON
    setImgPath(newPath)
  }

  return (
    <>
      <div className="card">
        <img src={imgPath} style={{height:'500px',width:'500px'}}/>
        <div>
          <button onClick={toggleLight}>
             Toggle Light
          </button>
        </div>
      </div>
    </>
  )
}

export default App
