import React, { useState } from "react"
import '../css/game.css'

export const game = (sequenceLength:number) => {
    const [sequence, setSequence] = useState("");

    let newSequence = "";
    let times = 0;
    while (++times < sequenceLength) {
        newSequence += Math.trunc(Math.random()*100) % 4;
    }

    return (<div>
                <div className="wholegame" style={{paddingTop: 25, paddingBottom: 20}}>
                    <div className="circle" >
                        <div className="container" style={{paddingTop: 25}}>
                            <div className="row justify-content-center">
                                <div className="col aligncenter" >
                                    <img src="https://cdn.discordapp.com/attachments/887715476396978176/887720934939693126/greenDark.png" style={{border: 'none'}} alt="green"/>
                                </div>
                                <div className="col">
                                    <img src= "https://media.discordapp.net/attachments/887715476396978176/887720930284011550/redDark.png" style={{border: 'none'}} alt="red"/>
                                </div>
                            </div>
                            <div className="row justify-content-center" style={{marginTop: 20}}>
                                <div className="col aligncenter" style={{marginLeft: 0}}>
                                    <img  src="https://media.discordapp.net/attachments/887715476396978176/887720937544376390/yellowDark.png"style={{border: 'none'}} alt="yello"/>
                                </div>
                                <div className="col">
                                    <img src="https://cdn.discordapp.com/attachments/887715476396978176/887720939419213824/blueDark.png" style={{border: 'none'}} alt="blue"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}