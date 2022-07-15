import { Fade } from "react-awesome-reveal";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { RegisterArea } from "../components/areas";

export default function Register() {
	return (
		<div className="Home">
			<Fade triggerOnce>
				<Header />
			</Fade>
			<Fade triggerOnce>
				<RegisterArea />
			</Fade>
			<Fade triggerOnce>
				<Footer />
			</Fade>
		</div>
	);
}
