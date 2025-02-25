import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Currently from "./components/Currently";
import TabBar from "./components/TabBar";
import Profile from "./components/Profile";
import Friends from "./pages/Friends";
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
		<Router>
			<div className="app-container">
				<Header />
				<div className="main-content">
					<Routes>
						<Route
							path="/"
							element={
								<>
									<Currently hobbies={hobbiesList} />
									<Profile />
								</>
							}
						/>
						<Route path="/friends" element={<Friends />} />
					</Routes>
				</div>
				<TabBar openModal={openModal} />
				<Modal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					addHobby={addHobby}
				/>
			</div>
		</Router>
	);
}

export default App;
