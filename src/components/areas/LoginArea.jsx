import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useUser } from "../../context/auth-context";
import SVG_Resume from "../../assets/resume.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const LoginArea = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	const { login, errors } = useUser();

	return (
		<div className="LoginArea">
			<div className="container">
				<div className="left">
					<Image src={SVG_Resume} alt="Resume" />
				</div>
				<div className="right">
					<Fade triggerOnce delay={200}>
						<div className="form">
							<div className="form__heading">
								Sign In
							</div>
							<div className="form__description">
								Sign in to the application using your
								credentials
							</div>

							<div className="form__grp">
								<label htmlFor="userid">
									What is your email?
								</label>
								<input
									type="email"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="form__grp">
								<label htmlFor="userpass">
									What is be your password?
								</label>
								<input
									type="password"
									name="userpass"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</div>

							<div className="form__grp button__grp">
								<button
									className="accent"
									onClick={() => login({ email, password })}>
									Login
								</button>
							</div>
							<div className="helper-text">
								Don{`'`}t have an account?{" "}
								<Link href="/register">Register</Link>
							</div>
							<div
								className={`errors ${errors && "errors-show"}`}>
								{errors}
							</div>
						</div>
					</Fade>
				</div>
			</div>
		</div>
	);
};

export default LoginArea;
