import { DataGrid } from "devextreme-react";
import { Column, Editing, Paging } from "devextreme-react/data-grid";
import ArrayStore from "devextreme/data/array_store";
import DataSource from "devextreme/data/data_source";
import React from "react";
import Chart from "./chart";

const Grid = () => {
	const dataSource = new DataSource({
		store: new ArrayStore({
			data: [],
		}),
	});

	return (
		<div className="Main">
			<div>
				<DataGrid id="gridContainer" dataSource={dataSource} showBorders={true}>
					<Paging enabled={false} />
					<Editing
						mode="cell"
						allowUpdating={true}
						allowAdding={true}
						allowDeleting={true}
					/>
					<Column dataField="Date" dataType="date" />
					<Column dataField="ValueOne" dataType="number" />
					<Column dataField="ValueTwo" dataType="number" />
				</DataGrid>
			</div>
			<div>
				<Chart />
			</div>
		</div>
	);
};

export default Grid;
