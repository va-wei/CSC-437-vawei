import React, { useState } from "react";
import DarkModeSwitch from './DarkMode';
import defaultProfilePic from "../assets/def-no-pfp.png";

function Profile() {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [bio, setBio] = useState("");
	const [profilePic, setProfilePic] = useState(null);
	const [isEditing, setIsEditing] = useState(false);

	const toggleEdit = () => setIsEditing(!isEditing); // to toggle edit mode

	const handleChange = (event, setter) => setter(event.target.value); // input changes

	const handleProfilePicChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setProfilePic(reader.result); // store the image as a data URL
			};
			reader.readAsDataURL(file);
		}
	};

	// handle form submissions (save changes)
	const handleSubmit = (event) => {
		event.preventDefault();
		setIsEditing(false); // exit edit mode
	};

	return (
		<div className="profile-container">
			<div className="profile-pic-wrapper">
				<img
					src={profilePic || defaultProfilePic}
					alt="Profile"
					className="profile-picture"
				/>
				{isEditing && (
					<label className="file-upload-label">
						<input
							type="file"
							accept="image/*"
							onChange={handleProfilePicChange}
							className="file-upload-input"
						/>
					</label>
				)}
			</div>
			{isEditing ? (
				<form onSubmit={handleSubmit} className="profile-form">
					<label className="profile-label">Name:</label>
					<input
						type="text"
						value={name}
						onChange={(e) => handleChange(e, setName)}
						className="profile-input"
						placeholder="Enter your name"
					/>
					<label className="profile-label">Username:</label>
					<input
						type="text"
						value={username}
						onChange={(e) => handleChange(e, setUsername)}
						className="profile-input"
						placeholder="Enter your username"
					/>
					<label className="profile-label">Bio:</label>
					<textarea
						value={bio}
						onChange={(e) => handleChange(e, setBio)}
						className="profile-input"
						placeholder="Write something about yourself..."
					/>
					<button type="submit">Save</button>
					<button type="button" onClick={toggleEdit}>
						Cancel
					</button>
				</form>
			) : (
				<div>
					<div className="username">
						{name} <span className="bold-username">{username}</span>
					</div>
					<div className="user-bio">
						{bio.split("\n").map((line, index) => ( // allow user to make line breaks
							<p key={index}>{line}</p>
						))}
					</div>
					<button className="edit-prof-button" onClick={toggleEdit}>
						Edit Profile
					</button>
                    <DarkModeSwitch />
				</div>
			)}
		</div>
	);
}

export default Profile;
