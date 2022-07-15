import { Fade } from "react-awesome-reveal";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { DashboardArea } from "../components/areas";

export default function About() {
	return (
		<div className="Home">
			<Fade triggerOnce>
				<Header />
			</Fade>
			<Fade triggerOnce>
				<DashboardArea />
			</Fade>
			<Fade triggerOnce>
				<Footer />
			</Fade>
		</div>
	);
}
