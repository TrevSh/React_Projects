import { useState, useEffect } from 'react'

function LIGHT({globalSwitch}) {
    const LIGHT_OFF = './src/assets/light_off.jpg'
    const LIGHT_ON = './src/assets/light_on.png'

    const [imgPath, setImgPath] = useState(LIGHT_OFF)

    //useEffect runs each time [globalSwitch] is changed.
    useEffect(() => {
            setImgPath(globalSwitch ? LIGHT_ON : LIGHT_OFF);
    }, [globalSwitch]);

    const toggleLight = () => {
        console.log("Toggled")
        if(!globalSwitch){
            const newPath = imgPath === LIGHT_ON ? LIGHT_OFF : LIGHT_ON
            setImgPath(newPath);
    }
}

    return (
        <div className="card">
          <img src={imgPath} style={{height:'100px',width:'100px'}}/>
          <div>
            <button onClick={toggleLight}>
               {globalSwitch ? "Locked on": "Toggle Light"}
            </button>
          </div>
        </div>
    )
}

export default LIGHT;