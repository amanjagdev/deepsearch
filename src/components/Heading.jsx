const Heading = ({ center = false, text }) => {
	return (
		<div className="Heading">
			<div className={`main-heading align-${center && "center"}`}>
				<div className="text">{text}</div>
				<div className="dot"></div>
			</div>
		</div>
	);
};

export default Heading;
