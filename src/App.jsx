import { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
	return (
		<Provider store={store}>
			<Navbar />
		</ Provider>
	);
}

export default App;
