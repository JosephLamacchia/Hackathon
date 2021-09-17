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

    //for game initializing
    const [initialLength, setInitialLength] = useState(5);
    const [delayTime, setDelayTime] = useState(1000);

    //for UI prompt
    const [blueSelected, setBlueSelected] = useState(false);
    const [yellowSelected, setYellowSelected] = useState(false);
    const [greenSelected, setGreenSelected] = useState(false);
    const [redSelected, setRedSelected] = useState(false);
    const dispatch = useDispatch();
    const gameState = useSelector((state: any) => state.GameState.state)

    const sleep = (time: number) => {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    const playGame = async (sequenceLength: number) => {
        let newSequence = "";
        let i = 0;
        let newLight = 0;

        //begin prompting the sequence
        setNotPropmtSequence(false);

        while (i < sequenceLength) {

            await sleep(delayTime);
            newLight = Math.trunc(Math.random() * 100) % 4;
            switch (newLight) {
                case 0:
                    setBlueSelected(true);
                    await sleep(delayTime);
                    setBlueSelected(false);
                    break;

                case 1:
                    setYellowSelected(true);
                    await sleep(delayTime);
                    setYellowSelected(false);
                    break;

                case 2:
                    setRedSelected(true);
                    await sleep(delayTime);
                    setRedSelected(false);
                    break;

                case 3:
                    setGreenSelected(true);
                    await sleep(delayTime);
                    setGreenSelected(false);
                    break;
            }

            i++;
            newSequence += newLight;
        }

        //finish prompting the sequence
        setNotPropmtSequence(true);
        setSequence(newSequence);
        setSequenceIndex(0);
        setInGame(true);
    }

    // handle in game event
    // blue 0 yellow 1 red 2 green 3
    const handleClicked = (colorClicked: string) => {
        AudioPlayer.buttonClick1();

        if (inGame) {
            let saveSequence = sequence;

            if (saveSequence.charAt(sequenceIndex) === colorClicked) {
                // click the correct color
                // calculating score could go here
            } else {
                // click the wrong color
                AudioPlayer.gameOver();

                setInGame(false);
                return;
            }

            //check if round ended
            if (sequenceIndex + 1 < saveSequence.length) {
                //proceed to next index in sequence
                setSequenceIndex(sequenceIndex + 1);
            } else {
                // entire sequence was correct
                setBlueSelected(true);
                setYellowSelected(true);
                setGreenSelected(true);
                setRedSelected(true);

                setTimeout(() => setBlueSelected(false), delayTime);
                setTimeout(() => setYellowSelected(false), delayTime);
                setTimeout(() => setRedSelected(false), delayTime);
                setTimeout(() => setGreenSelected(false), delayTime);

                playGame(sequence.length + 1);
            }
        }
    }

    // regular button light flashing

    const handleSelected = (prop: any) => {
        if (notPromptSequence) return prop
    }

    // blue
    const handleBlueSelected = () => {
        setBlueSelected(true);

        onmousedown = (() => { setBlueSelected(false) })

        onmouseup = (() => { setBlueSelected(true) })

        onclick = (() => { handleClicked('0') })

        onmouseout = (() => { setBlueSelected(false) })
    }

    // yellow
    const handleYellowSelected = () => {
        setYellowSelected(true);

        onmousedown = (() => { setYellowSelected(false) })

        onmouseup = (() => { setYellowSelected(true) })

        onclick = (() => { handleClicked('1') })

        onmouseout = (() => { setYellowSelected(false) })
    }

    // red
    const handleRedSelected = () => {
        setRedSelected(true);

        onmousedown = (() => { setRedSelected(false) })

        onmouseup = (() => { setRedSelected(true) })

        onclick = (() => { handleClicked('2') })

        onmouseout = (() => { setRedSelected(false) })
    }

    // green
    const handleGreenSelected = () => {
        setGreenSelected(true);

        onmousedown = (() => { setGreenSelected(false) })

        onmouseup = (() => { setGreenSelected(true) })

        onclick = (() => { handleClicked('3') })

        onmouseout = (() => { setGreenSelected(false) })
    }

    const handleBeginGame = () => {
        if (gameState === 0) {
            playGame(initialLength);
            dispatch(beginGame(""));
        } else {
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
                <div className="simoncircle" >
                    <table>
                        <thead>
                            <tr>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td onMouseOver={handleSelected(handleGreenSelected)} data-testid="testTd" >
                                    {greenSelected ? <img src={lightGreen} alt="greenLight" /> : <img src={greenDark} alt="greendarj" title="testTd" />}

                                </td>
                                <td onMouseOver={handleSelected(handleRedSelected)}>
                                    {redSelected ? <img src={lightRed} alt="lightRed" /> : <img src={redDark} alt="redDark" />}

                                </td>
                            </tr>
                            <tr>
                                <td onMouseOver={handleSelected(handleYellowSelected)}>
                                    {yellowSelected ? <img src={yellowLight} alt="yellowLight" /> : <img src={yellowDark} alt="yellow" />}

                                </td>
                                <td onMouseOver={handleSelected(handleBlueSelected)} >
                                    {blueSelected ? <img src={blueLight} alt="blueLight" /> : <img src={blueDark} alt="blueDark" />}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <br></br><br></br>
            <div>
                <button className="btn btn-primary" onClick={handleBeginGame}>Begin Game</button>
            </div>
        </div>

    )
}
