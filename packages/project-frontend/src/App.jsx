import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Currently from "./components/Currently";
import TabBar from "./components/TabBar";
import Profile from "./components/Profile";
import Modal from "./components/Modal";
import { nanoid } from "nanoid";

function App({ hobbies }) {
	const [hobbiesList, setHobbiesList] = useState(hobbies);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => setIsModalOpen(true);

	function addHobby(title, date, hobbyType, image, rating) {
		const newHobby = {
			id: nanoid(),
			title,
			date,
			hobbyType,
			image,
			rating,
		};
		setHobbiesList([...hobbiesList, newHobby]);
		setIsModalOpen(false);
	}

	return (
		<>
			<div className="app-container">
				<Header />
				<div className="main-content">
					<Currently hobbies={hobbiesList} />
					<Profile />
				</div>
				<TabBar openModal={openModal} />
				<Modal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					addHobby={addHobby}
				/>
			</div>
		</>
	);
}

export default App;
