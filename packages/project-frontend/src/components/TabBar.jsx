import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const TabBar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false); // state to manage modal visibility

	const openModal = () => setIsModalOpen(true); // opens the modal
	const closeModal = () => setIsModalOpen(false); // closes the modal

	return (
		<>
			<div className="tabbar">
				<button
					onClick={() => {
						/* Navigation to friends */
					}}
					className="tab-button"
				>
					<FontAwesomeIcon icon={faUserGroup} />
					<span>Friends</span>
				</button>
				<button onClick={openModal} className="tab-button">
					<FontAwesomeIcon icon={faPlus} />
					<span>Add Hobbies</span>
				</button>
				<button
					onClick={() => {
						/* Navigation to profile */
					}}
					className="tab-button"
				>
					<FontAwesomeIcon icon={faUser} />
					<span>Profile</span>
				</button>
			</div>

			{isModalOpen && (
				<div className="modal-overlay">
					<div className="modal-content">
						<h2>Add Hobby</h2>
						<form>
							<label>
								Type of hobby:
								<input type="text" name="hobbyName" />
							</label>
							<label>
								Title:
								<input type="text" name="titleName" />
							</label>
              <label>
								Date:
								<input type="text" name="date" />
							</label>
              <label>
								Image:
								<input type="text" name="imageName" />
							</label>
              <label>
								Rating:
								<input type="text" name="rating" />
							</label>
              <label>
								Some thoughts:
								<input type="text" name="thoughtsText" />
							</label>
							<button type="submit">Submit</button>
						</form>
						<button onClick={closeModal}>Close</button>
					</div>
				</div>
			)}
		</>
	);
};

export default TabBar;
