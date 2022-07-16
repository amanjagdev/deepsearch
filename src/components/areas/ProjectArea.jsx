import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser } from "../../context/auth-context";
import Heading from "../Heading";

import Tabs from "../project/Tabs";
import ConnectServices from "../project/ConnectServices";
import RedefineData from "../project/RedefineData";
import DefineConstraints from "../project/DefineConstraints";
import OverviewAndAPI from "../project/OverviewAndAPI";

import Axios from "axios";

const ProjectArea = ({ projectID }) => {
	const router = useRouter();
	const { token } = useUser();

	const [project, setProject] = useState(null);
	const [tab, setTab] = useState(0);

	useEffect(() => {
		if (token) {
			// Axios.post(
			// 	`${process.env.NEXT_PUBLIC_API_URL}/project/get`,
			// 	{
			// 		projectID,
			// 	},
			// 	{
			// 		headers: {
			// 			Authorization: "Bearer " + token,
			// 		},
			// 	}
			// )
			// 	.then((res) => res.data.data)
			// 	.then((res) => {
			// 		setProject(res);
			// 	});
		}
		setProject({
			name: "Youtube Music",
		});
	}, [token, projectID]);

	return (
		<div className="ProjectArea">
			<div className="container">
				<Heading text={project ? project.name : "Project"} />
			</div>
			<div className="container area">
				<Tabs tab={tab} setTab={setTab} />
				{tab === 0 && <ConnectServices nextTab={() => setTab(1)} />}
				{tab === 1 && <RedefineData nextTab={() => setTab(2)} />}
				{tab === 2 && <DefineConstraints nextTab={() => setTab(3)} />}
				{tab === 3 && <OverviewAndAPI />}
			</div>
		</div>
	);
};

export default ProjectArea;
