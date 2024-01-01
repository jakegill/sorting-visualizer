import { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Navbar from "./Components/Navbar/Navbar.jsx";
import SortingDisplay from "./Components/SortingDisplay/SortingDisplay.jsx";

function App() {
	return (
		<Provider store={store}>
			<Navbar />
			<SortingDisplay />
		</Provider>
	);
}

export default App;
