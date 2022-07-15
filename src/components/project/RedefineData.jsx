const table = [
	{
		_id: "1",
		column: "Artist ID",
		type: "String",
		category: ["Non-Indexed", "Indexed", "Other"],
	},
	{
		_id: "2",
		column: "Artist ID",
		type: "String",
		category: ["Non-Indexed", "Indexed", "Other"],
	},
	{
		_id: "3",
		column: "Artist ID",
		type: "String",
		category: ["Non-Indexed", "Indexed", "Other"],
	},
];

const RedefineData = () => {
	return (
		<main className="RedefineData">
			<div className="heading">Redefine Data for Project</div>
			<div className="description">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Similique esse facilis cupiditate necessitatibus libero modi ab
				repudiandae, iure cum temporibus!
			</div>
			<div className="content">
				<div className="table shadow">
					<div className="row header-row">
						<div className="grid-item">
							<b>Column Name</b>
						</div>
						<div className="grid-item">
							<b>Data Type</b>
						</div>
						<div className="grid-item">
							<b>Categorization</b>
						</div>
					</div>
					{table &&
						table.map(({ _id, category, column, type }) => (
							<div className="row" key={_id}>
								<div className="grid-item">{column}</div>
								<div className="grid-item">{type}</div>
								<div className="grid-item">
									<select name="category">
										{category.map((item, index) => (
											<option
												value={item
													.trim()
													.toLowerCase()
													.replace(" ", "-")}
												key={index}>
												{item}
											</option>
										))}
									</select>
								</div>
							</div>
						))}
				</div>
			</div>
		</main>
	);
};

export default RedefineData;
