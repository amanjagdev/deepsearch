import { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const DefineConstraints = ({ nextTab }) => {
	const [inputOne, setInputOne] = useState(0);
	return (
		<main className="DefineConstraints">
			<div className="heading">Define Constraints</div>
			<div className="description">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Similique esse facilis cupiditate necessitatibus libero modi ab
				repudiandae, iure cum temporibus!
			</div>
			<div className="content">
				<div className="cards">
					<div className="card shadow">
						<div className="card-title">Artist ID</div>
						<InputRange
							maxValue={20}
							minValue={0}
							value={inputOne}
							onChange={(value) => setInputOne(value)}
						/>
					</div>
					<div className="card shadow">
						<div className="card-title">Category Influence</div>
						<InputRange
							maxValue={20}
							minValue={0}
							value={inputOne}
							onChange={(value) => setInputOne(value)}
						/>
					</div>
				</div>
			</div>

			<button className="next accent" onClick={nextTab}>Submit</button>
		</main>
	);
};

export default DefineConstraints;
