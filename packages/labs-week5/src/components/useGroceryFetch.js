import React, { useState, useEffect } from "react";
import { groceryFetcher } from "./groceryFetcher";

export function useGroceryFetch(source) {
	const [groceryData, setGroceryData] = React.useState([
		{
			name: "test item",
			price: 12.3,
		},
		{
			name: "test item 2",
			price: 0.5,
		},
	]);
	// const [groceryData, setGroceryData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	/**
	 * Creates and returns a new promise that resolves after a specified number of milliseconds.
	 *
	 * @param {number} ms the number of milliseconds to delay
	 * @returns {Promise<undefined>} a promise that resolves with the value of `undefined` after the specified delay
	 */
	function delayMs(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	useEffect(() => {
		let isStale = false;

		async function fetchData() {
			console.log("fetching data from " + source);
			setIsLoading(true);
			setError(null);

			await delayMs(2000);
			setGroceryData([]);

			try {
				await delayMs(2000);
				const data = await groceryFetcher.fetch(source);

				if (!data || data.length === 0) {
					throw new Error("No data available."); // check if data is empty
				}

				if (!isStale) {
					setGroceryData(data);
				}
			} catch (err) {
				if (!isStale) {
					setError(err.message);
				}
			} finally {
				if (!isStale) {
					setIsLoading(false);
				}
			}
		}

		fetchData();

		return () => {
			isStale = true;
		};
	}, [source]);

	return { groceryData, isLoading, error };
}
