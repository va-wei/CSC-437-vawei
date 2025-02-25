	import React, { useRef, useState } from "react";

	const Modal = ({ isOpen, onClose, addHobby }) => {
		if (!isOpen) return null; // prevent rendering when modal is closed

		const modalRef = useRef(null);
		const [selectedImage, setSelectedImage] = useState(null);
		const [rating, setRating] = useState("");
		const [hobbyType, setHobbyType] = useState("");
		const [title, setTitle] = useState("");
		const [date, setDate] = useState("");

		const handleClickOutside = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				onClose(); // trigger onClose when clicking outside the modal
			}
		};

		const handleImageChange = (event) => {
			const file = event.target.files[0];
			if (file) {
				const imageUrl = URL.createObjectURL(file);
				setSelectedImage(imageUrl);
			}
		};

		const handleSubmit = (event) => {
			event.preventDefault();
			addHobby(title, date, hobbyType, selectedImage, parseInt(rating));
		};

		return (
			<div className="modal-overlay" onClick={handleClickOutside}>
				<div className="modal-content" ref={modalRef}>
					<h2>Add Hobby</h2>
					<form onSubmit={handleSubmit}>
						<label>
							Title:
							<input
								type="text"
								name="titleName"
								className="modal-input"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								required
							/>
						</label>
						<label>
							Date:
							<input
								type="date"
								name="date"
								className="modal-input"
								value={date}
								onChange={(e) => setDate(e.target.value)}
								required
							/>
						</label>
						<label>
							Hobby Type:
							<select
								value={hobbyType}
								onChange={(e) => setHobbyType(e.target.value)}
								className="modal-input"
								required
							>
								<option value="">Select Type</option>
								<option value="Movie">Movie</option>
								<option value="Book">Book</option>
								<option value="TV Show">TV Show</option>
								<option value="Other">Other</option>
							</select>
						</label>
						<label className="image-label">
							Image:
							<input
								type="file"
								accept="image/*"
								onChange={handleImageChange}
								className="modal-input"
							/>
						</label>
						{selectedImage && (
							<div className="image-preview">
								<img src={selectedImage} alt="Selected preview" />
							</div>
						)}
						<label>
							Rating:
							<select
								value={rating}
								onChange={(e) => setRating(e.target.value)}
								className="modal-input"
							>
								<option value="">Select Rating</option>
								<option value="1">⭐</option>
								<option value="2">⭐⭐</option>
								<option value="3">⭐⭐⭐</option>
								<option value="4">⭐⭐⭐⭐</option>
								<option value="5">⭐⭐⭐⭐⭐</option>
							</select>
						</label>
						<button type="submit">Submit</button>
					</form>
					<button onClick={onClose}>Close</button>
				</div>
			</div>
		);
	};

	export default Modal;
