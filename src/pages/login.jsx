import { Fade } from "react-awesome-reveal";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { LoginArea } from "../components/areas";

export default function Login() {
	return (
		<div className="Home">
			<Fade triggerOnce>
				<Header />
			</Fade>
			<Fade triggerOnce>
				<LoginArea />
			</Fade>
			<Fade triggerOnce>
				<Footer />
			</Fade>
		</div>
	);
}
