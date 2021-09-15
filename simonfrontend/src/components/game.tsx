import React, { useState } from "react"

export const game = (initLength:number, incLength:number) => {
    const [round, setRound] = useState(1);
    const [sequenceLength, setSequenceLength] = useState(initLength||3);
    const [sequence, setSequence] = useState("");

    let newSequence = "";
    let times = 0;
    while (++times < sequenceLength) {
        newSequence += Math.trunc(Math.random()*100) % 4;
    }

    setRound(round+1);
    setSequenceLength(sequenceLength + incLength);
}