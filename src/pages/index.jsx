import { Fade } from "react-awesome-reveal";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { HeroArea } from "../components/areas";

export default function Home() {
	return (
		<div className="Home">
			<Fade triggerOnce>
				<Header />
			</Fade>
			<HeroArea />
			<Fade triggerOnce>
				<Footer />
			</Fade>
		</div>
	);
}
