import { createSlice } from "@reduxjs/toolkit";

export const algoSlice = createSlice({
	name: "algo",
	initialState: "merge",
	reducers: {
		selectAlgo: (state, action) => action.payload,
	},
});

export const arrLengthSlice = createSlice({
	name: "length",
	initialState: 10,
	reducers: {
		setLength: (state, action) => action.payload,
	},
});

export const { selectAlgo } = algoSlice.actions;
export const { setLength } = arrLengthSlice.actions;
