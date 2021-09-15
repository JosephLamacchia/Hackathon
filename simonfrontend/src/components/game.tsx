import React, { useState } from "react"

export const game = (initLength:number) => {
    const [round, setRound] = useState(1);
    const [sequenceLength, setInitLength] = useState(initLength||3);
    const [sequence, setSequence] = useState("");

    let newSequence = "";
    let times = 0;
    while (++times < sequenceLength) {
        newSequence += Math.trunc(Math.random()*100) % 4;
    }
}