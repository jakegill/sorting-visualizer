import { configureStore } from "@reduxjs/toolkit";
import { algoSlice, generateArraySlice } from "./navbarSlice";

const store = configureStore({
	reducer: {
		algo: algoSlice.reducer,
		array: generateArraySlice.reducer,
	},
});

export default store;
