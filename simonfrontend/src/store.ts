import { configureStore } from "@reduxjs/toolkit"
import { AnyAction, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import  gameReducer  from "./slice/Game"

export const store = configureStore({
	reducer: {
		GameState:gameReducer,
	}
		
});

export type RootState = ReturnType<typeof store.getState>;

export default store;