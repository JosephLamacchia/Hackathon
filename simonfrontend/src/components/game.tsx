import React, { useState } from "react"

export const game = (sequenceLength:number) => {
    const [sequence, setSequence] = useState("");

    let newSequence = "";
    let times = 0;
    while (++times < sequenceLength) {
        newSequence += Math.trunc(Math.random()*100) % 4;
    }
}