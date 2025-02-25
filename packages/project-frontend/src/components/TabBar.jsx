import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const TabBar = ({ openModal }) => {
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
		</>
	);
};

export default TabBar;
