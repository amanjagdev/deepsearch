import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import SVG_Illustration from "../../assets/illustration.svg";

import { useRouter } from "next/router";
import { useUser } from "../../context/auth-context";

export default function HeroSection() {
	const router = useRouter();
	const { isAuth } = useUser();
	return (
		<div className="HeroSection">
			<div className="container">
				<Fade cascade triggerOnce>
					<div className="left">
						<div className="headline">
							Improved Search <br /> for your platform
						</div>
						<div className="description">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quisquam qui possimus quam, dignissimos atque
							cupiditate blanditiis quaerat officiis velit
							praesentium tempore voluptatibus voluptas corporis
							deserunt labore architecto dolorem minima et!
						</div>

						<div className="btn-grp">
							<button
								className="btn accent"
								onClick={() =>
									isAuth
										? router.push("/dashboard")
										: router.push("/register")
								}>
								Get Started
							</button>
							<button
								className="btn"
								onClick={() => router.push("/about")}>
								Learn More
							</button>
						</div>
					</div>
					<div className="right">
						<div className="illustration">
							<Image
								src={SVG_Illustration}
								alt="Side Illustration"
							/>
						</div>
					</div>
				</Fade>
			</div>
		</div>
	);
}
