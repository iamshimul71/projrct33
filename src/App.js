import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { React } from "react";
import "./App.css";
import Grid from "./components/grid";

function App() {
	return (
		/* overall structure */
		<>
			<div className="container">
				<div className="Header">ReelMetrics</div>
				<Grid />
				<div className="Footer">Copyright 2021</div>
			</div>
		</>
	);
}

export default App;
