import React, { useEffect, useState } from "react";
import { useGroceryFetch } from "./useGroceryFetch";
import Spinner from "./Spinner";

const MDN_URL =
	"https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

export function GroceryPanel() {
	const [selectedSource, setSelectedSource] = useState("MDN");
	const { groceryData, isLoading, error } = useGroceryFetch(selectedSource);

	function handleDropdownChange(changeEvent) {
		const selectedValue = changeEvent.target.value;
		setSelectedSource(selectedValue);
	}

	function handleAddTodoClicked(item) {
		const todoName = `Buy ${item.name} (${item.price.toFixed(2)})`;
		props.onAddTodo(todoName);
	}

	return (
		<div>
			<h1 className="text-xl font-bold">Groceries prices today</h1>
			<label className="mb-4 flex gap-4">
				Get prices from:
				<select
					className="border border-gray-300 p-1 rounded-sm disabled:opacity-50"
					value={selectedSource}
					onChange={handleDropdownChange}
				>
					<option value="MDN">MDN</option>
					<option value="Liquor store">Liquor store</option>
					<option value="Butcher">Butcher</option>
					<option value="whoknows">Who knows?</option>
				</select>
				{isLoading && <Spinner />}
				{error && (
					<span className="text-red-500 ml-2 mt-1">{error}</span>
				)}
			</label>

			{groceryData.length > 0 ? (
				<PriceTable
					items={groceryData}
					onAddClicked={handleAddTodoClicked}
				/>
			) : (
				"No data"
			)}
		</div>
	);
}

function PriceTable(props) {
	return (
		<table className="mt-4">
			<thead>
				<tr>
					<th className="text-left">Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{props.items.map((item) => (
					<PriceTableRow
						key={item.name}
						item={item}
						onAddClicked={() => props.onAddClicked(item)}
					/>
				))}
			</tbody>
		</table>
	);
}

function PriceTableRow({ item, onAddClicked }) {
	const buttonClasses = `italic px-2 rounded-sm border border-gray-300
        hover:bg-gray-100 active:bg-gray-200 cursor-pointer`;
	return (
		<tr>
			<td>{item.name}</td>
			<td>${item.price.toFixed(2)}</td>
			<td>
				<button className={buttonClasses} onClick={onAddClicked}>
					Add to todos
				</button>
			</td>
		</tr>
	);
}

export default GroceryPanel;
