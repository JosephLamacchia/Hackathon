import { createSlice } from "@reduxjs/toolkit"

// NOTES(): GameStates 1 - Start of game, 3 = End if game
export const gameSlice = createSlice({
    name: "myDeck",
    initialState: {
        state: 0,
        sequenceNumber: 0,
        cpuSequence:[] as Number[],
        playerSequence:[] as Number[]

    },
    reducers: {
        beginGame:(state, action) => {
                state.state = 1;
                state.cpuSequence = [];
                state.playerSequence = [];
        },
        endGame:(state, action) => {
                state.state = 3;
                state.sequenceNumber = 0;

        },
        addToCpuSequence: (state, action) => {
            let newNumber: Number = action.payload;
            state.cpuSequence.push(newNumber);
        },
        addToPlayerSequence: (state, action) => {
            let newNumber: Number = action.payload;
            state.playerSequence.push(newNumber);
        }
    }
});

export const { beginGame, endGame} = gameSlice.actions;
export default gameSlice.reducer;