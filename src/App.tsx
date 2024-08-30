// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Collections } from "./pages/collections/Collections";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<div className="shadow-sm">
				<Navbar />
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/collections" element={<Collections />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
