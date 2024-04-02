import { useState, useEffect } from 'react' 

const LIGHT_OFF = './src/assets/light_off.jpg'
const LIGHT_ON = './src/assets/light_on.png'

function Light({globalSwitch}) {
    const [isLightOn, setIsLightOn] = useState(false)
    const imgPath = globalSwitch || isLightOn ? LIGHT_ON : LIGHT_OFF;
    const buttonText = globalSwitch || isLightOn ? "Turn light off" : "Turn Light on"
    const handleLight = () => {
      setIsLightOn(!isLightOn);
    }

    return (
        <div className="card">
          <img src={imgPath} style={{height:'100px',width:'100px'}}/>
          <div>
            <button onClick={handleLight}>
               {buttonText}
            </button>
          </div>
        </div>
    )
}

export default Light;