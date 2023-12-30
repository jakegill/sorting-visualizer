import { configureStore } from "@reduxjs/toolkit";
import { algoSlice, arrLengthSlice } from "./navbarSlice";

const store = configureStore({
	reducer: {
		algo: algoSlice.reducer,
		length: arrLengthSlice.reducer,
	},
});

export default store;
