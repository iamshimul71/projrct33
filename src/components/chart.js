import React from "react";
import Plot from "react-plotly.js";

function Chart() {
	return (
		<Plot
			data={[
				{
					x: [1, 2, 3],
					y: [2, 6, 3],
					mode: "lines+markers",
					marker: { color: "green" },
				},
				{ type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
			]}
		/>
	);
}

export default Chart;
