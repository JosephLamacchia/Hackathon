import React, { useState } from "react"
import '../css/game.css'
import greenDark from '../img/greenDark.png'
import redDark from '../img/redDark.png'
import yellowDark from '../img/yellowDark.png'
import blueDark from '../img/blueDark.png'
import blueLight from '../img/blueLight.png'
import yellowLight from "../img/yellowLight.png"
import lightGreen from "../img/greenLight.png"
import lightRed from "../img/redLight.png"


export const Game = (sequenceLength: number) => {
    const [sequence, setSequence] = useState("");
    const [blueSelected, setBlueSelected] = useState(false);
    const [yellowSelected, setYellowSelected] = useState(false);
    const [greenSelected, setGreenSelected] = useState(false);
    const [redSelected, setRedSelected] = useState(false);


    let newSequence = "";
    let times = 0;
    while (++times < sequenceLength) {
        newSequence += Math.trunc(Math.random() * 100) % 4;
    }

    const handleBlueSelected = () => {
        setBlueSelected(true);

        onmouseout = (() => { setBlueSelected(false) })
    }
    const handleYellowSelected = () => {
        setYellowSelected(true);

        onmouseout = (() => { setYellowSelected(false) })
    }
    const handleRedSelected = () => {
        setRedSelected(true);

        onmouseout = (() => { setRedSelected(false) })
    }
    const handleGreenSelected = () => {
        setGreenSelected(true);

        onmouseout = (() => { setGreenSelected(false) })
    }
    return (

    <div className="wholegame" style={{ paddingTop: "25 px", paddingBottom: "20px" }}>

        <div className="" style={{ position: "relative", display: "flex", justifyContent: "center", width: "100vw" }}>
            <div className="circle" >  </div>
            <div className="circle2" >
                <div className="" style={{ marginTop: "40%", fontFamily: "cursive", fontWeight: "bold" }} >
                    SIMON
                </div> </div>
            <div className="simoncircle">
                <table>
                    <thead>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td onMouseOver={handleGreenSelected}>
                                {greenSelected ? <img src={lightGreen} alt="greenLight" /> : <img src={greenDark} alt="greendarj" />}

                            </td>
                            <td onMouseOver={handleRedSelected}>
                                {redSelected ? <img src={lightRed} alt="lightRed" /> : <img src={redDark} alt="redDark" />}

                            </td>
                        </tr>
                        <tr>
                            <td onMouseOver={handleYellowSelected}>
                                {yellowSelected ? <img src={yellowLight} alt="yellowLight" /> : <img src={yellowDark} alt="yellow" />}

                            </td>
                            <td onMouseOver={handleBlueSelected}>
                                {blueSelected ? <img src={blueLight} alt="blueLight" /> : <img src={blueDark} alt="blueDark" />}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>



    </div>
        
    )  
}