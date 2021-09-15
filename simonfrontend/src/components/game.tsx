import React, { useState } from "react"
import '../css/game.css'
import greenDark from '../img/greenDark.png'
import redDark from '../img/redDark.png'
import yellowDark from '../img/yellowDark.png'
import blueDark from '../img/blueDark.png'


export const Game = (sequenceLength: number) => {
    const [sequence, setSequence] = useState("");

    let newSequence = "";
    let times = 0;
    while (++times < sequenceLength) {
        newSequence += Math.trunc(Math.random() * 100) % 4;
    }

    return (<div>
        <div className="wholegame" style={{ paddingTop: "25px", paddingBottom: "20px" }}>

            <div className="" style={{ position: "relative", display: "flex", justifyContent: "center", width: "100vw" }}>
                <div className="circle" >  </div>
                <div className="circle2" >  </div>
                <div className="simoncircle">
                    <table>
                        <thead>
                            <tr>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={greenDark} style={{ border: 'none' }} alt="green" />
                                </td>
                                <td>
                                    <img src={redDark} style={{ border: 'none' }} alt="red" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={yellowDark} style={{ border: 'none' }} alt="yello" />
                                </td>
                                <td>
                                    <img src={blueDark} style={{ border: 'none' }} alt="blue" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>



        </div>
    </div>
    )
}