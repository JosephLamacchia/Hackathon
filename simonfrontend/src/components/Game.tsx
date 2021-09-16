import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import '../css/game.css'
import greenDark from '../img/greenDark.png'
import redDark from '../img/redDark.png'
import yellowDark from '../img/yellowDark.png'
import blueDark from '../img/blueDark.png'
import blueLight from '../img/blueLight.png'
import yellowLight from "../img/yellowLight.png"
import lightGreen from "../img/greenLight.png"
import lightRed from "../img/redLight.png"
import { beginGame } from "../slice/Game"
import AudioPlayer from "./AudioPlayer"


export const Game = () => {

    //for game playing
    const [sequence, setSequence] = useState("");
    const [notPromptSequence, setNotPropmtSequence] = useState(true);
    const [sequenceIndex, setSequenceIndex] = useState(0);
    const [inGame, setInGame] = useState(false);
    const [delayTime, setDelayTime] = useState(1000);

    //for UI prompt
    const [blueSelected, setBlueSelected] = useState(false);
    const [yellowSelected, setYellowSelected] = useState(false);
    const [greenSelected, setGreenSelected] = useState(false);
    const [redSelected, setRedSelected] = useState(false);
    const dispatch = useDispatch();
    const  gameState  = useSelector( (state:any) => state.GameState.state)

    const playGame = async (sequenceLength: number) => {
        let newSequence = "";
        let times = 0;
        let newLight = 0;

        //begin prompting the sequence
        setNotPropmtSequence(false);

        while (++times < sequenceLength) {
            newLight = Math.trunc(Math.random() * 100) % 4;
            switch (newLight) {
                case 0:
                    setBlueSelected(true);
                    setTimeout(() => setBlueSelected(false), delayTime);
                    break;
            
                case 1:
                    setYellowSelected(true);
                    setTimeout(() => setYellowSelected(false), delayTime);
                    break;

                case 2:
                    setRedSelected(true);
                    setTimeout(() => setRedSelected(false), delayTime);
                    break;

                case 3:
                    setGreenSelected(true);
                    setTimeout(() => setGreenSelected(false), delayTime);
                    break;
            }
            newSequence += newLight;
        }
        
        //finish prompting the sequence
        setNotPropmtSequence(true);
        setSequence(newSequence);
        setSequenceIndex(0);
        setInGame(true);
    }

    // handle in game event
    const handleClicked = (prop:any) => {
        if (inGame) return prop;
    }

    const handleRedClicked = () => {
        
    }
    
    const handleGreenClicked = () => {
        
    }


    const handleBlueClicked = () => {
        
    }

    const handleYellowClicked = () => {
        
    }


    
    // regular button light flashing

    const handleSelected = (prop:any) => {
        if (notPromptSequence) return prop
    }

    // blue
    const handleBlueSelected = () => {
        setBlueSelected(true);

        onmousedown =(() => {setBlueSelected(false)})

        onmouseup = (() => {setBlueSelected(true)})

        onclick = (() => {handleClicked(handleBlueClicked)})

        onmouseout = (() => {setBlueSelected(false) })
    }

    // yellow
    const handleYellowSelected = () => {
        setYellowSelected(true);

        onmousedown =(() => {setYellowSelected(false)})

        onmouseup = (() => {setYellowSelected(true)})

        onclick = (() => {handleClicked(handleYellowClicked)})

        onmouseout = (() => { setYellowSelected(false) })
    }
    
    // red
    const handleRedSelected = () => {
        setRedSelected(true);

        onmousedown =(() => {setRedSelected(false)})

        onmouseup = (() => {setRedSelected(true)})

        onclick = (() => {handleClicked(handleRedClicked)})

        onmouseout = (() => {setRedSelected(false) })
    }

    // green
    const handleGreenSelected = () => {
        setGreenSelected(true);

        onmousedown =(() => {setGreenSelected(false)})

        onmouseup = (() => {setGreenSelected(true)})

        onclick = (() => {handleClicked(handleGreenClicked)})

        onmouseout = (() => {setGreenSelected(false)})
    }
    const handleBeginGame = () => {
        if (gameState == 0)
        {
            playGame(1);
            dispatch(beginGame(""));
        } else  {
        }
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
                            <td onClick={() => AudioPlayer.buttonClick1()} onMouseOver={handleSelected(handleGreenSelected)}>
                                {greenSelected ? <img src={lightGreen} alt="greenLight" /> : <img src={greenDark} alt="greendarj" />}

                            </td>
                            <td onClick={() => AudioPlayer.buttonClick2()} onMouseOver={handleSelected(handleRedSelected)}>
                                {redSelected ? <img src={lightRed} alt="lightRed" /> : <img src={redDark} alt="redDark" />}

                            </td>
                        </tr>
                        <tr>
                            <td onClick={() => AudioPlayer.buttonClick1()} onMouseOver={handleSelected(handleYellowSelected)}>
                                {yellowSelected ? <img src={yellowLight} alt="yellowLight" /> : <img src={yellowDark} alt="yellow" />}

                            </td>
                            <td onClick={() => AudioPlayer.buttonClick2()} onMouseOver={handleSelected(handleBlueSelected)}>
                                {blueSelected ? <img src={blueLight} alt="blueLight" /> : <img src={blueDark} alt="blueDark" />}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <br></br><br></br>
        <div>
            <button  className="btn btn-primary" onClick={handleBeginGame}>Begin Game</button>
        </div>
       </div>
        
    )  
}
