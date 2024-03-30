import { useState } from 'react'

const clownPic = "./src/assets/Sad_Clown.png"

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={clownPic} alt="profile picture" style={{width:'100px',height:'100px'}}></img>
            <h2 className="card-title">KobainCode</h2>
            <p className="card-text"> I make websites and make games</p>
        </div>
    );
}

export default Card