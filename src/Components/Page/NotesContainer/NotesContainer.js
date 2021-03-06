import { useState } from "react";

const NotesContainer = ({ notes = [], pageDetail }) => {

	const [scrollType, setScrollType] = useState('overflowY-hidden');
  
	return (
		<div className="d-flex flex-column">
			<p>
				🎉 {notes.length} people thanked {pageDetail.page_title} for being kind!
			</p>
			<div className={`card-container ${scrollType}`}>
				{notes.map((item, index) => (
					<div
						className="note-card"
						style={{
							backgroundColor: `hsl(${item.color}, 50%, 50%)`,
						}}
						key={index}
					>
						<p>{item.content}</p>
					</div>
				))}
			</div>
			<button
				type="button"
				className="btn btn-light"
				style={{ borderColor: "#0057DA", color: "#0057DA", margin: "1rem", width: "10rem" }}
				onClick={() => setScrollType("overflowY-scroll")}
			>
				LOAD MORE
			</button>
		</div>
	);
};

export default NotesContainer;