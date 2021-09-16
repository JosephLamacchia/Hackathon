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
import { beginGame, levelUp, addToCpuSequence, setNextState } from "../slice/Game"
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
    const  game  = useSelector( (state:any) => state.GameState)

    const playGame = () => {
        let newSequence = "";
        let times = 0;
        let newLight = 0;
        let gameLoop;
        let currentLight = 0;
        let lightCounter = 0;

        //begin prompting the sequence
        setNotPropmtSequence(false);

        gameLoop = setTimeout(() => {
            switch(game.state)
            {
                case 0:
                {
                    break;
                }
                // NOTES(): InitGame
                case 1: {
                    dispatch(levelUp(""));
                    times = 0;
                     while (++times < game.sequenceNumber) {
                        newLight = Math.trunc(Math.random() * 100) % 4;
                         dispatch(addToCpuSequence(newLight));
                     }

                     dispatch(setNextState(2));
                     break;
                }
                // NOTES(): this will present demostration of the pattern 
                case 2:
                {
                    currentLight = game.cpuSequence[lightCounter];
                    switch(currentLight)
                    {
                        case 0:
                        {
                            setBlueSelected(true);
                            break;
                        }
                                    
                        case 1:
                        {
                            setYellowSelected(true);
                            break;
                        }
                        case 2:
                        {
                            setRedSelected(true);
                            break;
                        }

                        case 3:
                        {
                            setGreenSelected(true);
                            break;
                        }
                    }
                    dispatch(setNextState(3));
                    break;       
                }
                case 3:
                {    
                    switch(currentLight)
                    {
                        case 0:
                        {
                            setBlueSelected(false);
                            break;
                        }
                                    
                        case 1:
                        {
                            setYellowSelected(false);
                            break;
                        }
                        case 2:
                        {
                            setRedSelected(false);
                            break;
                        }

                        case 3:
                        {
                            setGreenSelected(false);
                            break;
                        }
                    }
                    if (lightCounter == game.sequenceNumber)
                    {
                        lightCounter++;
                    } else {
                        dispatch(setNextState(3));
                    }
                }
            }
        }, 1);        
/*
        while (++times < 5) {
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
        */
    }

    // handle in game event
    const handleClicked = (prop:any) => {
        AudioPlayer.buttonClick1();
        if (inGame) return prop;
    }

    // blue 0 yellow 1 red 2 green 3

    const handleBlueClicked = () => {
        let saveSequence = sequence;
        if (saveSequence[sequenceIndex] == '2') {
            // click the correct color
            // calculating score could go here
        } else {
            // click the wrong color
            AudioPlayer.buttonClick2();
        }

        //check if round ended
        if (sequenceIndex+1 < saveSequence.length) {
            //process to next index in sequence
            setSequenceIndex(sequenceIndex + 1);
        } else {
            // entire sequence was correct
        }
    }

    const handleYellowClicked = () => {
        let saveSequence = sequence;
        if (saveSequence[sequenceIndex] == '2') {
        } else {
            AudioPlayer.buttonClick2();
        }

        //check if round ended
        if (sequenceIndex+1 < saveSequence.length) {
            //process to next index in sequence
            setSequenceIndex(sequenceIndex + 1);
        } else {
            // entire sequence was correct
        }
    }

    const handleRedClicked = () => {
        let saveSequence = sequence;
        if (saveSequence[sequenceIndex] == '2') {
        } else {
            AudioPlayer.buttonClick2();
        }

        //check if round ended
        if (sequenceIndex+1 < saveSequence.length) {
            //process to next index in sequence
            setSequenceIndex(sequenceIndex + 1);
        } else {
            // entire sequence was correct
        }
    }

    const handleGreenClicked = () => {
        let saveSequence = sequence;
        if (saveSequence[sequenceIndex] == '3') {
        } else {
            AudioPlayer.buttonClick2();
        }

        //check if round ended
        if (sequenceIndex+1 < saveSequence.length) {
            //process to next index in sequence
            setSequenceIndex(sequenceIndex + 1);
        } else {
            // entire sequence was correct
        }
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

        if (game.state == 0)
        {
            dispatch(beginGame(""));
            playGame();
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
                            <td onMouseOver={handleSelected(handleGreenSelected)}>
                                {greenSelected ? <img src={lightGreen} alt="greenLight" /> : <img src={greenDark} alt="greendarj" />}

                            </td>
                            <td onMouseOver={handleSelected(handleRedSelected)}>
                                {redSelected ? <img src={lightRed} alt="lightRed" /> : <img src={redDark} alt="redDark" />}

                            </td>
                        </tr>
                        <tr>
                            <td onMouseOver={handleSelected(handleYellowSelected)}>
                                {yellowSelected ? <img src={yellowLight} alt="yellowLight" /> : <img src={yellowDark} alt="yellow" />}

                            </td>
                            <td onMouseOver={handleSelected(handleBlueSelected)}>
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
