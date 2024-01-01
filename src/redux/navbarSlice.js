import { createSlice } from "@reduxjs/toolkit";

export const algoSlice = createSlice({
	name: "algo",
	initialState: "merge",
	reducers: {
		setAlgo: (state, action) => action.payload,
	},
});

export const generateArraySlice = createSlice({
	name: "array",
	initialState: [],
	reducers: {
		setArray: (state, action) => action.payload,
	},
});

export const { setAlgo } = algoSlice.actions;
export const { setArray } = generateArraySlice.actions;