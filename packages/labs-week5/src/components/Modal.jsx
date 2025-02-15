import { useRef } from "react";

function Modal({ children, headerLabel, onCloseRequested }) {
	const innerRef = useRef(null); // ref for inner div

	function handleOverlayClick(event) {
		if (innerRef.current && !innerRef.current.contains(event.target)) {
			onCloseRequested();
		}
	}

	return (
		<>
			<div
				className="fixed inset-0 w-full h-full bg-black/50 flex items-center justify-center z-50"
				onClick={handleOverlayClick}
			>
				<div
					className="bg-white p-6 rounded-lg shadow-lg"
					ref={innerRef}
				>
					<div className="flex justify-between items-center pb-2">
						<h2 className="text-lg font-semibold">{headerLabel}</h2>
						<button
							onClick={onCloseRequested}
							aria-label="Close"
							className="text-gray-500 hover:text-gray-700"
						>
							X
						</button>
					</div>
					{children}
				</div>
			</div>
		</>
	);
}

export default Modal;
