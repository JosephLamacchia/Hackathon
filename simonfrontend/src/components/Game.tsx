import React, { useState } from "react"
import '../css/game.css'
import greenDark from '../img/greenDark.png'
import redDark from '../img/redDark.png'
import yellowDark from '../img/yellowDark.png'
import blueDark from '../img/blueDark.png'


export const Game = (sequenceLength:number) => {
    const [sequence, setSequence] = useState("");

    let newSequence = "";
    let times = 0;
    while (++times < sequenceLength) {
        newSequence += Math.trunc(Math.random()*100) % 4;
    }

    return (<div>
                <div className="wholegame" style={{paddingTop: "25px", paddingBottom: "20px"}}>
                    <div className="circle" >
                        <div className="container" style={{paddingTop: "25px"}}>
                            <div className="row justify-content-center">
                                <div className="col aligncenter" >
                                    <img src={greenDark} style={{border: 'none'}} alt="green"/>
                                </div>
                                <div className="col">
                                    <img src= {redDark} style={{border: 'none'}} alt="red"/>
                                </div>
                            </div>
                            <div className="row justify-content-center" style={{marginTop: "20px"}}>
                                <div className="col aligncenter" style={{marginLeft: "0px"}}>
                                    <img src={yellowDark} style={{border: 'none'}} alt="yello"/>
                                </div>
                                <div className="col">
                                    <img src={blueDark} style={{border: 'none'}} alt="blue"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}