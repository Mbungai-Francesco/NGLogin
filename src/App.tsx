import { Route, Routes } from "react-router-dom";
import { Login, Home } from "./pages/";

function App() {
	return (
		<div className="bg-white h-screen w-full">
			<Routes>
				<Route path="/" index element={<Login />} />
				<Route path="/home" index element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
